import { venusImg, uranusImg, saturnImg, neptuneImg, moonImg, mercuryImg, marsImg, jupiterImg, earthImg } from './imageObjects';

export const EARTH = {
  radius: 140,
  year: 365*24*60*60*1000,
  color: '#009432',
  size: 197/9,
  position: .48,
  name: 'Earth',
  yOffset: -9,
  img: earthImg,
};

export const MERCURY = {
  radius: 50,
  year: 88*24*60*60*1000,
  color: 'rgb(100,80,80)',
  size: 50/3,
  position: .04,
  name: 'Mercury',
  yOffset: -5,
  img: mercuryImg,
};

export const VENUS = {
  radius: 90,
  year: 225*24*60*60*1000,
  color: 'brown',
  size: 177/9,
  position: .64,
  name: 'Venus',
  yOffset: -9,
  img: venusImg,
};

export const MARS = {
  radius: 200,
  year: 687*24*60*60*1000,
  color: '#EA2027',
  size: 56/3,
  position: .26,
  name: 'Mars',
  yOffset: -7,
  img: marsImg,
};

export const JUPYTER = {
  radius: 240,
  year: 11.862*365*24*60*60*1000,
  color: 'rgb(255,140,0)',
  size: 30,
  position: .8,
  name: 'Jupiter',
  yOffset: -10,
  img: jupiterImg,
};

export const SATURN = {
  radius: 300,
  year: 29.457*365*24*60*60*1000,
  color: 'rgb(255,222,173)',
  size: 40,
  position: .86,
  name: 'Saturn',
  yOffset: -5,
  img: saturnImg,
};

export const URANUS = {
  radius: 330,
  year: 84.011*365*24*60*60*1000,
  color: 'rgb(176,196,222)',
  size: 20,
  position: .21,
  name: 'Uranus',
  yOffset: -9,
  img: uranusImg,
};

export const NEPTUNE = {
  radius: 400,
  year: 164.79*365*24*60*60*1000,
  color: '#1E90FF',
  size: 30,
  position: .09,
  name: 'Neptune',
  yOffset: -5,
  img: neptuneImg,
};

export const TUNIX = 1549499771000;

// module.exports = { TUNIX, EARTH, MERCURY, VENUS, MARS, JUPYTER, SATURN, URANUS, NEPTUNE };