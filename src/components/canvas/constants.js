const EARTH = {
  radius: 140,
  year: 365*24*60*60*1000,
  color: '#009432',
  size: 197/13,
  position: .48,
  name: 'Earth',
};

const MERCURY = {
  radius: 50,
  year: 88*24*60*60*1000,
  color: 'rgb(100,80,80)',
  size: 50/6,
  position: .04,
  name: 'Mercury'
};

const VENUS = {
  radius: 90,
  year: 225*24*60*60*1000,
  color: 'brown',
  size: 177/13,
  position: .64,
  name: 'Venus'
};

const MARS = {
  radius: 200,
  year: 687*24*60*60*1000,
  color: '#EA2027',
  size: 56/5,
  position: .26,
  name: 'Mars'
};

const JUPYTER = {
  radius: 240,
  year: 11.862*365*24*60*60*1000,
  color: 'rgb(255,140,0)',
  size: 22,
  position: .8,
  name: 'Jupiter'
};

const SATURN = {
  radius: 300,
  year: 29.457*365*24*60*60*1000,
  color: 'rgb(255,222,173)',
  size: 15,
  position: .86,
  name: 'Saturn'
};

const URANUS = {
  radius: 330,
  year: 84.011*365*24*60*60*1000,
  color: 'rgb(176,196,222)',
  size: 15,
  position: .21,
  name: 'Uranus'
};

const NEPTUNE = {
  radius: 400,
  year: 164.79*365*24*60*60*1000,
  color: 'rgb(0,0,200)',
  size: 15,
  position: .09,
  name: 'Neptune'

};

const TUNIX = 1549499771000;

module.exports = { TUNIX, EARTH, MERCURY, VENUS, MARS, JUPYTER, SATURN, URANUS, NEPTUNE };