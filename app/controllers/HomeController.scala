package controllers

import javax.inject._

import play.api.libs.json._
import play.api.mvc._

import models.Attraction

@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {


  def create: Action[JsValue] = Action (parse.json) { implicit request: Request[JsValue] =>
    val attraction = request.body

    val name = (attraction \ "name").asOpt[String].get
    val description = (attraction \ "description").asOpt[String].get
    val location = (attraction \ "location").asOpt[String].get

    Attraction.createAttraction(name, description, location)

    Ok(Json.obj(
      "name" -> name,
      "location" -> location,
      "description" -> description
    ))
  }

  def attractions = Action {

    val attractionList = Attraction.getAttractions

    case class AttractionJson(name: String, location: String, description: String, imageurl: String)

    case class AttractionListJson(attractions: Seq[AttractionJson])

    //TODO: Fix warnings
    implicit val AttractionJsonWrites = new Writes[AttractionJson] {
      def writes(attraction: AttractionJson) = Json.obj(
        "name" -> attraction.name,
        "location" -> attraction.location,
        "description" -> attraction.description,
        "imageurl" -> attraction.imageurl
      )
    }

    implicit  val AttractionListJsonWrites = new Writes[AttractionListJson] {
      def writes(attractionList: AttractionListJson) = Json.obj(
        "attractions" -> attractionList.attractions
      )
    }

    val attractionSeq = for (attraction <- attractionList) yield {
      AttractionJson(attraction("name"), attraction("location"), attraction("description"), attraction("imageurl"))
    }

    val attractionListJson = AttractionListJson(attractionSeq)

    val json: JsValue = Json.toJson(attractionListJson)

    Ok(Json.obj("content" -> Json.stringify(json)))
  }
}
