import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import soccerIcon from './img/if_Soccer_Ball_22984.png';

var BOXES =[
  {
    title: "Upset",
    image: "upset-messi",
    content: "Underdogs always hold huge hope.",
  },
  {
    title: "Acting",
    image: "neymar-oscar",
    content: "And the Oscar Goes to... Neymar！",
  },
  {
    title: "Gamble",
    image: "gamble-soccer",
    content: "I have a dream that one day...",
  },
  {
    title: "Fans",
    image: "fans",
    content: "They are the most crazy animal in the planet.",
  },
];

var SHOW_MORE_BOXES =[
  {
    title: "BOX 5",
    image: "upset-messi",
    content: "Underdogs always hold huge hope.",
  },
  {
    title: "BOX 6",
    image: "neymar-oscar",
    content: "And the Oscar Goes to... Neymar！",
  },
  {
    title: "BOX 7",
    image: "gamble-soccer",
    content: "I have a dream that one day...",
  },
  {
    title: "BOX 8",
    image: "fans",
    content: "They are the most crazy animal in the planet.",
  },
];

function ContentBox(prop) {
  let imageName = prop.image;
  imageName = require("./img/" + imageName + ".jpg");

  return (
    <div className="box col">
      <h2>{prop.title}</h2>
        <img src={imageName} alt={prop.title} />
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
      contents: this.props.contentBoxArray,
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
          {this.state.contents.map(function(box, index) {
            return <ContentBox title={box.title} image={box.image} content={box.content} key={index}/>
          })}
        </div>
      </div>
    );
  }
}

ShowMore.propTypes = {
  contentBoxArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floatMenu: false,
      oWelcome: '',
      cWelcome: 'none',
      contents: BOXES,
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
          {this.state.contents.map(function(box, index) {
            return <ContentBox title={box.title} image={box.image} content={box.content} key={index}/>
          })}

          <ShowMore contentBoxArray={SHOW_MORE_BOXES}/>
        
        </div>

        <footer className="main-footer">
          <span>&copy;2018 Zhonghe La La Mountain</span>
        </footer>
        
      </div>
    );
  }
}

export default App;
