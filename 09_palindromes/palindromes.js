const palindromes = function (palin) {
    let words = palin.toLowerCase().replace(/[^a-z]/g, "");
    return (
        words
        .split("")
        .reverse()
        .join("")== words

    )

};

// Do not edit below this line
module.exports = palindromes;
