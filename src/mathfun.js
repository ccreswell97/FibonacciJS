'use strict';

let usage = 0; 

export const fibonacci = num => {
    usage++; 
    num = parseInt(Math.round(num));
    let first = 1, second = 0, temp;
    try {
        if (isNaN(num)) throw "Input is NaN";
        else if (num < 0) throw "Input is negative";
        else {
            while (num > 0){
                temp = first;
                first = first + second;
                second = temp;
                num--;
            }
        }
        return second;
    } catch (error) {
        return error;
    }
}

export const fibonacciUsage = () => usage; 