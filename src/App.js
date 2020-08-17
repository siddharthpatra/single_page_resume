import React, { Component } from 'react';
import './App.css';
import Heading from './component/heading';
import Subheading from './component/subheading';
import Detail from './component/details';
import photo from './component/images/photo.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Detailed from './component/detailed';
import certificate from './component/images/mlcertificate.JPG';
import { FaLinkedinIn } from 'react-icons/fa';

export default class App extends Component {
  render () {
    return (
  <Container>
    <Row>
      <Col sm="8" className="order-sm-1 order-2">
      <Heading />
      <Subheading subhead={"Skills"}/>
      <Detail detail={"Languages"} detailed={"Java, JavaScript, R, Python"}/>
      <Detail detail={"Technologies"} 
        detailed={"Web Development, HTML, CSS, BootStrap, Jquerry, Maven, Git, Tortoise SVN, Apache Tomcat, Agile, Websphere Portal, Jira, Confluence, MachineLearning, Tableau"}/>
      <Detail detail={"Tools"} detailed={"Eclipse, Visual Studio, Anaconda, STS, RTC"}/>
      <Subheading subhead={"Work Experience"}/>
      <Detailed detail={"November 2017 - Present"} highlight={"Front End Developer"}
       detailed={"Wipro Technology Limited"} 
       more={"Manage new Change Rquests and Develop and Modernise the exciting application as per the buisness requirement. Develop and deploy the application into different servers and perform the maintenance activity"}/>
      <Subheading subhead={"Education"}/>
      <Detailed detail={"2013-2017"} highlight={'SRM University,Chennai,Tamilnadu'} 
        detailed={"B.Tech Electrical And Electronics Engineering"} more={"Gpa:8.67"}/>
      <Detailed detail={"2011-2013"} highlight={"Ispat English Medium School, Rourkela, Odisha"} 
        detailed={"Intermidiate(+2 Science)"} more={"Percentage:80.2"}/>
      <Detailed detail={"2013"} highlight={"Ispat English Medium School, Rourkela, Odisha"} 
        detailed={"HighSchool"} more={"Percentage:85.63"}/>
      <Subheading subhead={"Projects"}/>
      <Detailed detail={"Change Requests"} highlight={"Client Name:RSA (Royal Sun Alliance)"} 
        detailed={"Applied JavaScript to JSP pages, used springWebflow to change some flows and used HTML, CSS for styling the JSP pages."} 
        more={"HTML, CSS, JavaScript, SpringWebFlow, TomCat, Java, Fatwire, JSP,SVN, Jira,Confluence"}/>
      <Detailed detail={"Signup and Login Authentication System"}
        detailed={"Applied express and npm to create registration page from scratch and then login flow once the registration is completed successfully using Firebase."} 
        highlight={"To make the user Registration and Login System."} 
        more={"Node.js, Expo, React, ReactNative, Hooks, React Navigation, Firebase"}/>
      <Detailed detail={"Santander Customer Satisfaction Prediction"}
        highlight={"To predict whether customer is a satisfied customer or not and whether he will make a transaction or not"} 
        detailed={"Applied Linear regression to predict customer satisfaction and use naïve byes algorithm for prediction of customer transaction"} 
        more={"Regression Models, data Pre-processing, Exploratory Data Analysis and boost techniques to boost accuracy of model"}/>
      <Detailed detail={"Cab Fare Prediction"} 
        more={"Regression Models, data Pre-processing, Exploratory Data Analysis and boost techniques to boost accuracy of model"} 
        detailed={"Applied logistic Regression model to predict cab fare and used different models to find the accuracy of the test data. Then xgboost technique to improve accuracy of model"} 
        highlight={"To predict cab fare from one location to another"}/>
      <Detailed detail={"Digital Evergreening for UK, UK Buisness banking, Saudi Banking and more"} 
        highlight={"Client Name – HSBC Software Development"} 
        detailed={"Migration of IBM legacy API into JSR 286.Did maven build and code push to git hub along with tag changes in Jsp’s"} 
        more={"Jenkins, Git, Maven, Websphere, Java, HTML, CSS, React, JavaScript, JSP,Jira,Confluence"}/>
      <Subheading subhead={"Certificates"}/>
      <Detail detail={"Udemy"} detailed={"Web Developer"} 
        linkrl={"https://www.udemy.com/certificate/UC-e2ed12a8-cac4-42f4-b1a4-c7c7634664cd/"} link={"Link"}/>
      <Detail detail={"Edwisor"} detailed={"Data Scientist"} 
        linkrl={certificate} link={"Link"}/>
      <Subheading subhead={"Contact"}/>
      <Row>
        <Col xs="12" className="justify-content-center d-flex">
          <a href="https://www.linkedin.com/in/siddharth-patra-904493a4/" target="_blank" 
            rel="noopener noreferrer"><FaLinkedinIn/></a>
        </Col>  
      </Row>
      </Col>
      <Col sm="4" className="order-1">
        <div className="justify-content-center d-flex">
        <Card className="text-center ml-4 mb-5" border="primary">
        <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title>Siddharth Patra</Card.Title>
            <Card.Text>
              Front End Developer at Wipro
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Row>
              <Col xs="12" className="justify-content-center d-flex">
                <a className="mb-0" href="https://www.linkedin.com/in/siddharth-patra-904493a4/" target="_blank" 
                  rel="noopener noreferrer"><FaLinkedinIn/></a>
              </Col>  
           </Row>
          </Card.Footer>
        </Card>
        </div>
      </Col>
    </Row>
    </Container>
    );
  }
}
