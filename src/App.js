import React from 'react';
import Main from './sections/Main/Main';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import './App.css';
import ReactFullpage from "@fullpage/react-fullpage";
import Toolbar from './components/Toolbar/Toolbar';
import SideMenu from "./components/SideMenu/SideMenu";
import SideEmail from "./components/SideEmail/SideEmail";
import Backdrop from './components/Backdrop/Backdrop';
import Nutshell from './sections/Nutshell/Nutshell';
import Services from './sections/Services/Services';
import Clients from './sections/Clients/Clients';
import Insights from './sections/Insights/Insights';
import Awards from './sections/Awards/Awards';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { sideMenuOpen: false, sideEmailOpen: false };
  }

  menuToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideMenuOpen: !prevState.sideMenuOpen };
    });
  }

  emailToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideEmailOpen: !prevState.sideEmailOpen };
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideMenuOpen: false , sideEmailOpen: false});
  }

  render(){
    let {sideMenuOpen, sideEmailOpen} = this.state;
    let backdrop;
    if (sideMenuOpen || sideEmailOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <Toolbar menuClickHandler={this.menuToggleClickHandler} emailClickHandler={this.emailToggleClickHandler}/>
        <SideMenu show={sideMenuOpen} />
        <SideEmail show={sideEmailOpen} />
        {backdrop}
        <ReactFullpage
          licenseKey={null}
          anchors={["home", "about", "nutshell","services","awards","clients","insights","contact"]}
          sectionsColor={["#fff", "#21d1fa", "#ffffff", "#2d2045","#fff", "#2d2045", "#21d1fa","#2d2045"]}
          navigation={true}
          navigationPosition={'left'}
          scrollOverflow={true}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <Main name="section section1 main" />
                <About name="section"/>
                <Nutshell name="section"/>
                <Services name="section"/>
                <Awards name="section"/>
                <Clients name="section"/>
                <Insights name="section"/>
                <Contact name="section"/>
                
              </div>
            );
          }}
        />
      </div>
      
    );
  }
}

export default App;
