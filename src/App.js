import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="COVID-19 DASHBOARD" scroll>
          <Navigation>
            <Link to="/international">International</Link>
            <Link to="/indonesia">Indonesia</Link>
            <Link to="/aboutus">About Us</Link>
          </Navigation>
        </Header>
        <Drawer title="COVID-19 DASHBOARD">
          <Navigation>
            <Link to="/international">International</Link>
            <Link to="/indonesia">Indonesia</Link>
            <Link to="/aboutus">About Us</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
        <Footer size="mini">
          <FooterSection type="center">
            <h5>
              CREATED BY ODADING TEAM
            </h5>
              <h6>Source : Youtube Paul Hanna, Javascript Mastery<br></br>
              Component : Material UI, React MDL, Chart JS
              </h6>
          </FooterSection>
        </Footer>
      </Layout>
    </div>

    
  );
}

export default App;
