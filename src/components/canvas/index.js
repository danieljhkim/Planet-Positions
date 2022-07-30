import React, { useEffect, useRef, useState } from 'react';
import { TUNIX, EARTH, MERCURY, VENUS, MARS, JUPYTER, SATURN, URANUS, NEPTUNE } from './constants'
import './styles.css'

function Canvas(props) {
  const canvasRef = useRef(null);
  const [dateTime, setDateTime] = useState(Date.now());

  const calculateSize = () => {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width < 600) {
      width = width - 50;
    } else if (width >= 600 && width < 800) {
      width = width - 200;
    } else {
      width = width / 2;
    }
    width = Math.min(width, 600)
    return width;
  }
  
  const [screenWidth, setScreenWidth] = useState(calculateSize());
  
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


  window.addEventListener("resize", ()=> {
    const width = calculateSize();
    setScreenWidth(width);

  });

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

    const planets = (planetOBj, sratio, context) => {        
      let t = ((dateTime - TUNIX) / planetOBj.year) + planetOBj.position;
      if (t >= 0){
        t = t - Math.floor(t);
      } else {
        t = Math.abs(t);
        t = Math.ceil(t) - t;
      }
      const size = planetOBj.size * sratio;
      const normalizedRatio = planetOBj.radius * sratio;
      const x = Math.round(400 * sratio + Math.cos(t * 2 * Math.PI) * normalizedRatio);
      const y = Math.round(400 * sratio - Math.sin(t * 2 * Math.PI) * normalizedRatio);
      context.shadowBlur = '30';
      context.shadowColor = 'rgb(0,0,0)';
      context.fillStyle = planetOBj.color;
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI*2, false);
      context.closePath();       
      context.fill();
    }

    planets(MERCURY, sratio, context);
    planets(VENUS, sratio, context);
    planets(EARTH, sratio, context);
    planets(MARS, sratio, context);
    planets(JUPYTER, sratio, context);
    planets(SATURN, sratio, context);
    planets(URANUS, sratio, context);
    planets(NEPTUNE, sratio, context);
  }

  const drawWritings = (sratio, context) => {        
    context.fillStyle = 'rgb(255,255,255)';
    const title = "Solar Clock";
    var fontsize = 50 * sratio;
    var fonttext = "bold " + fontsize + "px " + "serif";
    context.font = fonttext;
    context.fillText(title, 11*sratio, 50*sratio);
    const descript = 'Planetary Tracking System';
    var fontsize = 23 * sratio;
    var fonttext = fontsize + "px " + "serif";          
    context.font = fonttext;
    context.fillText(descript, 12*sratio, 80*sratio);
    let currentdate = new Date(dateTime);
    var fontsize = 18 * sratio;
    var fonttext = fontsize + "px " + "serif";
    context.font = fonttext;
    context.fillText(currentdate, 13*sratio, 110*sratio);
    const name = 'Operator: DJHK';
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
