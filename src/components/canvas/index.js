import React, { useEffect, useRef, useState } from 'react';
import './styles.css'

function Canvas(props) {
  const canvasRef = useRef(null);
  const [dateTime, setDateTime] = useState(Date.now());
  const [screenWidth, setScreenWidth] = useState(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d');
    let width = screenWidth;
    let height = width;
    let sratio = width / 800;
    canvas.width = width;
    canvas.height = height;
    drawSun(width, height, sratio, context)
    drawWritings(sratio, context);
    drawPlanets(sratio, context);
  }, [dateTime, screenWidth]);

  const calculateSize = () => {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width < 600) {
      width = width - 50;
    } else if (width >= 600 && width < 800) {
      width = width - 200;
    } else {
      width = width / 2;
    }
    setScreenWidth(Math.min(width, 600));
  }

  window.addEventListener("resize", ()=> {
    calculateSize();
  });
  
  const planets = (Q, r, year, color, size, sratio, context) => {        
    const tunix = 1549499771000;
    let t = ((dateTime - tunix) / year) + Q;
    if (t >= 0){
      t = t - Math.floor(t);
    } else {
      t = Math.abs(t);
      t = Math.ceil(t) - t;
    }

    size = size * sratio;
    let rr = r * sratio;
    let x = 400 * sratio + Math.cos(t*2*Math.PI) * rr;
    let y = 400 * sratio - Math.sin(t*2*Math.PI) * rr;                                        
    x = Math.round(x);
    y = Math.round(y);
    context.shadowBlur = '30';
    context.shadowColor = 'rgb(0,0,0)';
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI*2, false);
    context.closePath();       
    context.fill();
  }

  const drawSun = (width, height, sratio, context) => {
    const centreX = width/2;
    const centreY = height/2;
    const gradient = context.createRadialGradient(centreX, centreY, 200*sratio, centreX, centreY, 400*sratio);
    
    gradient.addColorStop(0,'rgb(200,200,150)');
    gradient.addColorStop(1, 'rgb(0,0,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    context.shadowBlur = '150';
    context.shadowColor = 'rgb(250,0,0)';
    context.fillStyle = 'rgb(250,250,0)';                 
    context.beginPath();
    context.arc(400*sratio, 400*sratio, 30*sratio, 0, Math.PI*2, false);
    context.closePath();       
    context.fill();
  }

  const drawPlanets = (sratio, context) => {
    const mercyear = 88*24*60*60*1000;
    const vyear = 225*24*60*60*1000;       
    const eyear = 365*24*60*60*1000;
    const marsyear = 687*24*60*60*1000;
    const jyear = 11.862*365*24*60*60*1000;
    const syear = 29.457*365*24*60*60*1000;
    const uyear = 84.011*365*24*60*60*1000;
    const nyear = 164.79*365*24*60*60*1000;

    const merccolor = 'rgb(100,80,80)';
    const vcolor = 'brown';
    const ecolor = '#009432';
    const marscolor = '#EA2027';
    const jcolor = 'rgb(255,140,0)';
    const scolor = 'rgb(255,222,173)';
    const ucolor = 'rgb(176,196,222)';
    const ncolor = 'rgb(0,0,200)';

    const mercsize = 50/6;
    const vsize = 177/13;
    const esize = 197/13;
    const marssize = 56/5;
    const jsize = 22;
    const ssize = 15;
    const usize = 15;
    const nsize = 15;

    var mercrad=50; var vrad=90; var erad=140; var marsrad=200; var jrad=240; var srad=300; var urad=330; let nrad=400;      
    let x; let y;

    const mercury = planets(.04, mercrad, mercyear, merccolor, mercsize, sratio, context);
    const venus = planets(.64, vrad, vyear, vcolor, vsize, sratio, context);
    const earth = planets(.48, erad, eyear, ecolor, esize, sratio, context);
    const mars = planets(.26, marsrad, marsyear, marscolor, marssize, sratio, context);
    const jupiter = planets(.8, jrad, jyear, jcolor, jsize, sratio, context);
    const saturn = planets(.86, srad, syear, scolor, ssize, sratio, context);
    const uranus = planets(.21, urad, uyear, ucolor, usize, sratio, context);
    const neptune= planets(.09, nrad, nyear, ncolor, nsize, sratio, context);
  }

  const drawWritings = (sratio, context) => {        
    context.fillStyle = 'rgb(255,255,255)';
    var title = "Solar Clock";
    var fontsize = 50 * sratio;
    var fonttext = "bold " + fontsize + "px " + "serif";
    context.font = fonttext;
    context.fillText(title, 11*sratio, 50*sratio);
    var descript = 'Planetary Tracking System';
    var fontsize = 23 * sratio;
    var fonttext = fontsize + "px " + "serif";          
    context.font = fonttext;
    context.fillText(descript, 12*sratio, 80*sratio);
    var currentdate = new Date(dateTime);
    var fontsize = 18 * sratio;
    var fonttext = fontsize + "px " + "serif";
    context.font = fonttext;
    context.fillText(currentdate, 13*sratio, 110*sratio);
    var name = 'Operator: DJHK';
    var fontsize = 20 * sratio;
    var fonttext = fontsize + "px " + "serif";
    context.font = fonttext;
    context.fillText(name, 11*sratio, 790*sratio);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDateTime(new Date(e.target.dateInput.value).getTime());
  }
  
  return (
    <div>
      <div>
        <canvas ref={canvasRef} {...props} id='mycanvas'></canvas>
      </div>
        <div className="cont-input">
        <form onSubmit={handleSubmit} id='inputdate'>
          <strong> Pick Date:</strong>
          <input type="date" name="dateInput"/ >
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Canvas;
