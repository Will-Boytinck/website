import React, { Component, useEffect, useRef } from 'react';
import "./Home.css";
import linkedinImage from './images/linkedin.png';
import githubImage from './images/github.png';
import professionalPhoto from './images/professional_photo2.PNG';
import MailIcon from './images/mail_icon.png';
import { Link, Element, scroller } from "react-scroll";

// TODO: get smooth scrolling working when I actually have content here
// TODO: maybe add a on-load animation
// TODO: add hover states for all images & find a better font
// https://medium.com/@davidarmah2022/silky-smooth-scrolling-in-reactjs-a-step-by-step-guide-for-react-developers-7dcce944cc89
// https://codepen.io/Mertl/pen/GexapP


//typewriter for later 
// https://www.codesdope.com/blog/article/12-creative-css-and-javascript-text-typing-animati/

// other fun effects
// https://alvarotrigo.com/blog/css-text-animations/

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
document.body.appendChild(canvas);

let c = init("canvas"),
  w = (canvas.width = window.innerWidth),
  h = (canvas.height = window.innerHeight);

class firefly{
  constructor(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.s = Math.random()*2;
    this.ang = Math.random()*2*Math.PI;
    this.v = this.s*this.s/4;
  }
  move(){
    this.x += this.v*Math.cos(this.ang);
    this.y += this.v*Math.sin(this.ang);
    this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
  }
  show(){
    c.beginPath();
    c.arc(this.x,this.y,this.s,0,2*Math.PI);
    c.fillStyle="#fddba3";
    c.fill();
  }
}

let f = [];

function draw() {
  if(f.length < 100){
    // j was 10
    for(let j = 0; j < 100; j++){
     f.push(new firefly());
  }
     }
  //animation
  for(let i = 0; i < f.length; i++){
    f[i].move();
    f[i].show();
    if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
       f.splice(i,1);
       }
  }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener(
  "mousemove",
  function(e) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  },
  false
);
function init(elemid) {
  let canvas = document.getElementById(elemid),
    c = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
  c.fillStyle = "rgba(30,30,30,1)";
  c.fillRect(0, 0, w, h);
  return c;
}

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback);
    }
  );
});

function loop() {
  window.requestAnimFrame(loop);
  c.clearRect(0, 0, w, h);
  draw();
}


window.addEventListener("resize", function() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  loop();
});

/* typewriter starts here */
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  /*
  var css = document.createElement("style");
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid white }";
  document.body.appendChild(css);
  */
 
};

/* typewriter ends here */



loop();
setInterval(loop, 1000 / 60);


class Home extends Component {
    
    render() {
       
        return (
        <div>
                {/*<canvas id="canvas"></canvas>*/}
                <div className='topBar'>
                    <div className='linkedinLink'> 
                        <a href="https://www.linkedin.com/in/william-boytinck-b1140b1b1/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImage} alt='????' />
                        </a>
                    </div>
                    <div className='githubLink'> 
                        <a href="https://github.com/Will-Boytinck" target="_blank" rel="noopener noreferrer">
                            <img src={githubImage} alt='????' />
                        </a>
                    </div>
                    <div className='mailLink'> 
                        <a href="mailto:wboytinck@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={MailIcon} alt='????' />
                        </a>
                    </div>
                    
                </div>
                <div className='personalPicture'>
                    <img src={professionalPhoto} alt='????' />
                </div>
                <div className='softwareEngineer' >Software Engineer</div>
                <h1>
                    <span
                    class="txt-rotate"
                    data-period="2000"
                    data-rotate='[ "Chess Nerd", "NHL Enthusiast", "Inferno Cape Holder", "Metalhead", "Black Clover is the best Anime", "Still here? Please hire me" ]'>
                    </span>
                </h1>
                <div className='sectionLinks'>
                    <div>
                        <Link
                            to="section1"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Experience
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="section2"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Skills
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="section3"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Projects
                        </Link>
                    </div>
                </div>
                {
                /*
                <Element name="section1" className="section">
                    <h2>Experience</h2>
                    <div className='sectionOne'>Stuff here...</div>
                </Element>
                <Element name="section2" className="section">
                    <h2>Skills</h2>
                    <p>Stuff here...</p>
                </Element>
                <Element name="section3" className="section">
                    <h2>Projects</h2>
                    <p>Stuff here...</p>
                </Element>
                */
                }
        </div>
        );

    }
}
export default Home;

