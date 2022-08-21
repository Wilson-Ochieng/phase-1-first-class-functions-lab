// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers =  ([...arr]) => {
    // You can also return the function  through 'return  arr.splice instead of arr.slice'
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = ([...arr]) =>{
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function (value) {
        return int * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers([...arr], func){
    return func(arr);
}
