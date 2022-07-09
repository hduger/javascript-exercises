const ftoc = function(tempFar) {
  let convertToCels = (tempFar-32)*(5/9);
  convertToCels = Math.round(convertToCels*10)/10;
  return convertToCels;
};

const ctof = function(tempCels) {
  let convertToFar = (tempCels*(9/5))+32;
  convertToFar = Math.round(convertToFar *10)/10;
  return convertToFar;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
