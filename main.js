//Q1
function arrayInfo(anArray) {
    console.log('Length of Array:' + anArray.length);
    console.log('First Element:' + anArray[0]);
    console.log('Last Element:' + anArray[anArray.length - 1]);

}

//Q2
function printNegatives(anArray) {
    let array = anArray;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            console.log(array[i]);
        }
    }
}

//Q4
function countHonours(anArray) {
    let num = 0;

    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] >= 80) {
            num++;
        }
    }
    return num;
}

//Q5
function arraySum(anArray) {
    let sum = 0;

    for (let i = 0; i < anArray.length; i++) {
        sum += anArray[i];
    }
    return sum;
}
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [2, 4, 6, 8];