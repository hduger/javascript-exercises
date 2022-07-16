const findTheOldest = function(array) {
    const oldest = array.sort((a, b)=> a.yearOfBirth > b.yearOfBirth ? 1:-1);
    

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
