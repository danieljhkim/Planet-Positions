
const EARTH = {
  radius: 140,
  year: 365*24*60*60*1000,
  color: '#009432',
  size: 197/13,
  position: .48,
  name: 'Earth',
  yOffset: -12
};

const MERCURY = {
  radius: 50,
  year: 88*24*60*60*1000,
  color: 'rgb(100,80,80)',
  size: 50/6,
  position: .04,
  name: 'Mercury',
  yOffset: -5
};

const VENUS = {
  radius: 90,
  year: 225*24*60*60*1000,
  color: 'brown',
  size: 177/13,
  position: .64,
  name: 'Venus',
  yOffset: -9
};

const MARS = {
  radius: 200,
  year: 687*24*60*60*1000,
  color: '#EA2027',
  size: 56/5,
  position: .26,
  name: 'Mars',
  yOffset: -7
};

const JUPYTER = {
  radius: 240,
  year: 11.862*365*24*60*60*1000,
  color: 'rgb(255,140,0)',
  size: 22,
  position: .8,
  name: 'Jupiter',
  yOffset: -17
};

const SATURN = {
  radius: 300,
  year: 29.457*365*24*60*60*1000,
  color: 'rgb(255,222,173)',
  size: 15,
  position: .86,
  name: 'Saturn',
  yOffset: -13
};

const URANUS = {
  radius: 330,
  year: 84.011*365*24*60*60*1000,
  color: 'rgb(176,196,222)',
  size: 15,
  position: .21,
  name: 'Uranus',
  yOffset: -14
};

const NEPTUNE = {
  radius: 400,
  year: 164.79*365*24*60*60*1000,
  color: '#1E90FF',
  size: 15,
  position: .09,
  name: 'Neptune',
  yOffset: -14

};

const TUNIX = 1549499771000;

module.exports = { TUNIX, EARTH, MERCURY, VENUS, MARS, JUPYTER, SATURN, URANUS, NEPTUNE };
