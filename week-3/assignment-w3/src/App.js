import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import soccerIcon from './img/if_Soccer_Ball_22984.png';
import upsetMessi from './img/upset-messi.jpg';
import neymarOscar from './img/neymar-oscar.jpg';
import gambleSoccer from './img/gamble-soccer.jpg';
import fans from './img/fans.jpg';


function ContentBox(prop) {
  let img = (prop.image);
  console.log(img);

  return (
    <div className="box col">
      <h2>{prop.title}</h2>
        <img src={prop.image} alt={prop.title} />
      <p>{prop.content}</p>
    </div>
  );
}

ContentBox.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};


class ShowMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false,
    };
  }

onStateChange = () => {
    this.state.isDisplay = this.state.isDisplay ? false : true;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <button id="toggleBox" onClick={this.onStateChange}>Show more</button>
        </div>
        <div className="hiding-first" style={{display: this.state.isDisplay ? 'block' : 'none'}}>
          <ContentBox title="Box 5" image={require("./img/upset-messi.jpg")} content="Underdogs always hold huge hope." />
          <ContentBox title="Box 6" image={require("./img/neymar-oscar.jpg")} content="And the Oscar Goes to... Neymar！" />
          <ContentBox title="Box 7" image={require("./img/gamble-soccer.jpg")} content="I have a dream that one day..." />
          <ContentBox title="Box 8" image={require("./img/fans.jpg")} content="They are the most crazy animal in the planet." />
        </div>
      </div>
    );
  }
}

ShowMore.PropTypes

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floatMenu: false,
      oWelcome: '',
      cWelcome: 'none',
    };
  }

  xFloatMenu = () => {
    this.state.floatMenu = false;
    this.setState(this.state);
  }

  openFloatMenu = () => {
    this.state.floatMenu = true;
    this.setState(this.state);
  }

  changeWelcome = () => {
    this.state.oWelcome = 'none';
    this.state.cWelcome = '';
    this.setState(this.state);
  }

  render() {
    return (
      <div className="App">

        <div className="mobile-float-menu" style={{display: this.state.floatMenu ? '' : 'none'}}>
          <button className="x" onClick={this.xFloatMenu}>x</button>
          <ul>
            <li><a href="#">Team</a></li>
            <li><a href="#">Player</a></li>
            <li><a href="#">Addictive</a></li>
            <li><a href="#">About Me</a></li>
          </ul>
        </div>

        <header className="main-header">
          <div className="container clearfix">
            <div className="logoAndTitle">
              <img className="logo" src={soccerIcon} alt="Soccer" />
              <p className="title">Beyond World Cup</p>
            </div>
            <div className="menu-icon" onClick={this.openFloatMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>  
            
            <ul className="main-nav">
              <li><a href="#">Team</a></li>
              <li><a href="#">Player</a></li>
              <li><a href="#">Addictive</a></li>
              <li><a href="#">About Me</a></li>
            </ul>
            
          </div>
        </header> 
        {/*<!--/.main-header-->*/}

        <div className="banner">
          <div className="originalWelcome" onClick={this.changeWelcome} style={{display: this.state.oWelcome}}>
            <h1 className="headline">Destiny</h1>
            <span className="tagline">That is the owner of World Cup and why you here.</span>
          </div>
          <div className="clickedWelcome" style={{display: this.state.cWelcome}}>
            <h1 className="headline">Have a Good Time!</h1>
            <span className="tagline">May the Force be with you.</span>
          </div>
        </div> 
        {/*<!--/.banner-->*/}
        
        <div className="container clearfix">
          <h1 className="sec-title">Something Charming</h1>
          <ContentBox title="Upset" image={require("./img/upset-messi.jpg")} content="Underdogs always hold huge hope." />
          <ContentBox title="Acting" image={require("./img/neymar-oscar.jpg")} content="And the Oscar Goes to... Neymar！" />
          <ContentBox title="Gamble" image={require("./img/gamble-soccer.jpg")} content="I have a dream that one day..." />
          <ContentBox title="Fans" image={require("./img/fans.jpg")} content="They are the most crazy animal in the planet." />
          
          <ShowMore />
        
        </div>

        <footer className="main-footer">
          <span>&copy;2018 Zhonghe La La Mountain</span>
        </footer>
        
      </div>
    );
  }
}

export default App;
