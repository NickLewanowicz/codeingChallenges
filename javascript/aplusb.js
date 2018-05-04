/**
 * Write a function that add two numbers A and B. You should not use + or any arithmetic operators.
 * @param a: An integer
 * @param b: An integer
 * @return: The sum of a and b 
 */
const aplusb = function (a, b) {
    return b == 0 ? a : aplusb(a ^ b, (a & b) << 1)
    
}