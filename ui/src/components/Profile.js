import React, {Component} from 'react';
import { ModalHeader, Header, CardHeader } from 'semantic-ui-react';
import { Modal, Card, Image, Button, Form, Message, Dropdown, Label } from 'semantic-ui-react';
import Center from 'react-center';

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {title: ''};
    }
  
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    // async componentDidMount() {
    //   Client.getSummary(summary => {
    //     this.setState({
    //       title: summary.content
    //     });
    //   });
    // }
  
    render() {
      const yearOptions = [
        { key: '2019', value: '2019', text: '2019' },
        { key: '2018', value: '2018', text: '2018' },
        { key: '2017', value: '2017', text: '2017' },
        { key: '2016', value: '2016', text: '2016' },
        { key: '2015', value: '2015', text: '2015' },
        { key: '2014', value: '2014', text: '2014' },
        { key: '2013', value: '2013', text: '2013' },
        { key: '2012', value: '2012', text: '2012' },
        { key: '2011', value: '2011', text: '2011' },
        { key: '2010', value: '2010', text: '2010' },
        { key: '2009', value: '2009', text: '2009' },
        { key: '2008', value: '2008', text: '2008' },
        { key: '2007', value: '2007', text: '2007' },
        { key: '2006', value: '2006', text: '2006' },
        { key: '2005', value: '2005', text: '2005' },
        { key: '2004', value: '2004', text: '2004' },
        { key: '2003', value: '2003', text: '2003' },
        { key: '2002', value: '2002', text: '2002' },
        { key: '2001', value: '2001', text: '2001' },
        { key: '2000', value: '2000', text: '2000' },
        { key: '1999', value: '1999', text: '1999' },
        { key: '1998', value: '1998', text: '1998' },
        { key: '1997', value: '1997', text: '1997' },
        { key: '1996', value: '1996', text: '1996' },
        { key: '1995', value: '1995', text: '1995' },
        { key: '1994', value: '1994', text: '1994' },
        { key: '1993', value: '1993', text: '1993' },
        { key: '1992', value: '1992', text: '1992' },
        { key: '1991', value: '1991', text: '1991' },
        { key: '1990', value: '1990', text: '1990' },
        { key: '1989', value: '1989', text: '1989' },
        { key: '1988', value: '1988', text: '1988' },
        { key: '1987', value: '1987', text: '1987' },
        { key: '1986', value: '1986', text: '1986' },
        { key: '1985', value: '1985', text: '1985' },
        { key: '1984', value: '1984', text: '1984' },
        { key: '1983', value: '1983', text: '1983' },
        { key: '1982', value: '1982', text: '1982' },
        { key: '1981', value: '1981', text: '1981' },
        { key: '1980', value: '1980', text: '1980' },
        { key: '1979', value: '1979', text: '1979' },
        { key: '1978', value: '1978', text: '1978' },
        { key: '1977', value: '1977', text: '1977' },
        { key: '1976', value: '1976', text: '1976' },
        { key: '1975', value: '1975', text: '1975' },
        { key: '1974', value: '1974', text: '1974' },
        { key: '1973', value: '1973', text: '1973' },
        { key: '1972', value: '1972', text: '1972' },
        { key: '1971', value: '1971', text: '1971' },
        { key: '1970', value: '1970', text: '1970' },
        { key: '1969', value: '1969', text: '1969' },
        { key: '1968', value: '1968', text: '1968' },
        { key: '1967', value: '1967', text: '1967' },
        { key: '1966', value: '1966', text: '1966' },
        { key: '1965', value: '1965', text: '1965' },
        { key: '1964', value: '1964', text: '1964' },
        { key: '1963', value: '1963', text: '1963' },
        { key: '1962', value: '1962', text: '1962' },
        { key: '1961', value: '1961', text: '1961' },
        { key: '1960', value: '1960', text: '1960' },
        { key: '1959', value: '1959', text: '1959' },
        { key: '1958', value: '1958', text: '1958' },
        { key: '1957', value: '1957', text: '1957' },
        { key: '1956', value: '1956', text: '1956' },
        { key: '1955', value: '1955', text: '1955' },
        { key: '1954', value: '1954', text: '1954' },
        { key: '1953', value: '1953', text: '1953' },
        { key: '1952', value: '1952', text: '1952' },
        { key: '1951', value: '1951', text: '1951' },
        { key: '1950', value: '1950', text: '1950' },
        { key: '1949', value: '1949', text: '1949' },
        { key: '1948', value: '1948', text: '1948' },
        { key: '1947', value: '1947', text: '1947' },
        { key: '1946', value: '1946', text: '1946' },
        { key: '1945', value: '1945', text: '1945' },
        { key: '1944', value: '1944', text: '1944' },
        { key: '1943', value: '1943', text: '1943' },
        { key: '1942', value: '1942', text: '1942' },
        { key: '1941', value: '1941', text: '1941' },
        { key: '1940', value: '1940', text: '1940' },
        { key: '1939', value: '1939', text: '1939' },
        { key: '1938', value: '1938', text: '1938' },
        { key: '1937', value: '1937', text: '1937' },
        { key: '1936', value: '1936', text: '1936' },
        { key: '1935', value: '1935', text: '1935' },
        { key: '1934', value: '1934', text: '1934' },
        { key: '1933', value: '1933', text: '1933' },
        { key: '1932', value: '1932', text: '1932' },
        { key: '1931', value: '1931', text: '1931' },
        { key: '1930', value: '1930', text: '1930' },
        { key: '1929', value: '1929', text: '1929' },
        { key: '1928', value: '1928', text: '1928' },
        { key: '1927', value: '1927', text: '1927' },
        { key: '1926', value: '1926', text: '1926' },
        { key: '1925', value: '1925', text: '1925' },
        { key: '1924', value: '1924', text: '1924' },
        { key: '1923', value: '1923', text: '1923' },
        { key: '1922', value: '1922', text: '1922' },
        { key: '1921', value: '1921', text: '1921' },
        { key: '1920', value: '1920', text: '1920' },
        { key: '1919', value: '1919', text: '1919' },
        { key: '1918', value: '1918', text: '1918' },
        { key: '1917', value: '1917', text: '1917' },
        { key: '1916', value: '1916', text: '1916' },
        { key: '1915', value: '1915', text: '1915' },
        { key: '1914', value: '1914', text: '1914' },
        { key: '1913', value: '1913', text: '1913' },
        { key: '1912', value: '1912', text: '1912' },
        { key: '1911', value: '1911', text: '1911' },
        { key: '1910', value: '1910', text: '1910' },
        { key: '1909', value: '1909', text: '1909' },
        { key: '1908', value: '1908', text: '1908' },
        { key: '1907', value: '1907', text: '1907' },
        { key: '1906', value: '1906', text: '1906' },
        { key: '1905', value: '1905', text: '1905' },
        { key: '1904', value: '1904', text: '1904' },
        { key: '1903', value: '1903', text: '1903' },
        { key: '1902', value: '1902', text: '1902' },
        { key: '1901', value: '1901', text: '1901' },
        { key: '1900', value: '1900', text: '1900' },
      ]
      const { open } = this.state
      const { value } = this.state
      return (
        <div>
          <Header as='h1'>Profile</Header>
          <Center>
            <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false}/>
            <Card.Content>
              <Card.Header>{this.props.firstname + this.props.lastname}</Card.Header>
              <div>
                <Label as='a' color='blue' tag>
                  User
                </Label>
                <Label as='a' color='green' tag>
                  Administrator
                </Label>
              </div>
              <Card.Description>
                {this.props.birthyear}
              </Card.Description>
              <Card.Description>
                {this.props.hometown}
              </Card.Description>
              <Card.Description>
                {this.props.interests}
              </Card.Description>
            </Card.Content>
            </Card>
          </Center>
          <Modal open={open} onClose={this.close} trigger={<div onClick={(e) => e.preventDefault()} className="ui primary button" onClick={this.show('blurring')}>Edit Profile</div>}>
            <Modal.Header>Edit Profile</Modal.Header>
            <Modal.Content>
              <Form success>
              <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name' />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Last name' placeholder='Last name' />
              </Form.Group>
              <Dropdown
                placeholder='Select Year'
                fluid
                search
                selection
                options={yearOptions}
              />
              <Form.Group widths='equal'>
                <Form.Input fluid label='Hometown' placeholder='Hometown' />
              </Form.Group>
              <div>
                <Label as='a' color='blue' tag>
                  User
                </Label>
                <Label as='a' color='green' tag>
                  Administrator
                </Label>
              </div>
              <Form.TextArea label='Interests' placeholder='What are you interested in?' />
              <Form.Button>Submit</Form.Button>
              <Message success header='Saved Changes' content="Your information has been saved!" />
            </Form>
            </Modal.Content>
          </Modal>
          
        </div>
        
      )
    }
  }
  export default Profile;