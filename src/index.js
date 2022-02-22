module.exports = function reverse(n) {
    n = n.toString().split("").reverse().join("");
    return n.replace(/[^0-9]/g, "");
};
