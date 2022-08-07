import React, { useEffect, useRef, useState } from 'react';
import { TUNIX, MERCURY, VENUS, MARS, JUPYTER, SATURN, URANUS, NEPTUNE, EARTH } from './constants';
import './styles.css'

function Canvas(props) {
  const canvasRef = useRef(null);
  const [dateTime, setDateTime] = useState(Date.now());

  const calculateSize = () => {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width < 500) {
      width = width - 30;
    } else if(width >= 700 && width < 1000) {
      width = width - 200;
    } else if(width >= 500 && width < 700) {
      width = width - 100;
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
    drawPlanets(sratio, context)
  }, [dateTime, screenWidth]);


  window.addEventListener("resize", ()=> {
    const width = calculateSize();
    setScreenWidth(width);

  });

  const drawSun = (width, height, sratio, context) => {
    const centreX = width/2;
    const centreY = height/2;
    const gradient = context.createRadialGradient(centreX, centreY, 150*sratio, centreX, centreY, 350*sratio);
    
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
      //context.drawImage(planetOBj.img, x, y, size, size)   
      context.arc(x, y, size, 0, Math.PI*2, false);   
      context.closePath();   
      context.fill();
      //planet label
      const name = planetOBj.name;
      let fontsize = 11;
      let fonttext = fontsize + "px serif";
      context.font = fonttext;
      const ypos = y + planetOBj.yOffset;
      context.fillText(name, x+5, ypos);
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
    context.fillStyle = 'orange';
    const title = "Solar Clock";
    let fontsize = 50 * sratio;
    let fonttext = "bold " + fontsize + "px serif";
    context.font = fonttext;
    context.fillText(title, 17*sratio, 55*sratio);
    context.fillStyle = 'white';
    const descript = 'Planetary Positioning System';
    fontsize = 23 * sratio;
    fonttext = fontsize + "px serif";          
    context.font = fonttext;
    context.fillText(descript, 19*sratio, 85*sratio);
    let currentdate = new Date(dateTime);
    fontsize = 18 * sratio;
    fonttext = fontsize + "px serif";
    context.font = fonttext;
    context.fillText(currentdate, 19*sratio, 115*sratio);
    const name = 'PlanetPositions.org';
    fontsize = 20 * sratio;
    fonttext = fontsize + "px serif";
    context.font = fonttext;
    context.fillText(name, 16*sratio, 785*sratio);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDateTime(new Date(e.target.dateInput.value).getTime());
  }
  
  return (
    <div className="canvas-outer-cont">
      <div className="canvas-cont">
        <canvas ref={canvasRef} {...props} id='mycanvas'></canvas>
        <p className="warning-text">
          <i>*Note: positions are only approximate</i>
        </p>
      </div>
      <div className="input-cont">
        <form onSubmit={handleSubmit} id='inputdate'>
          <b>Pick Date</b>
          <input type="date" name="dateInput"/ >
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Canvas;
