const repeatString = function(string, num) {
    let word = ""
    if (num < 0) {
        return "ERROR";
    }
    if (string === "") {
        return ''
    }
    for (i = 0; i < num; i++) {
        word += string;
    
        
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;

// const repeatString = function(string, num) {
//     let word = ""
//     for (i = 0; i < num; i++) {
//         word += string;
        
//     }
//     return word;
// };
