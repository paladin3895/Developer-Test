function repeat (arr) {
    return Array(3) // create an array of 3 items
        .fill(arr)  // fill the array with copies of arr
        .flat()     // flatten the array
}

function reformat (strVal) {
    // checking for string input type
    if (typeof(strVal) !== 'string') {
        return null;
    }

    let str = strVal
        .replace(/[aeiou]+/ig, '') // remove vowels
        .toLowerCase();            // convert to lower case

    // convert the first character to upper case
    str = str.charAt(0).toUpperCase() + str.slice(1);

    return str;
}

function next_binary_number (arrVal) {
    // checking for array input type
    if(Object.prototype.toString.call(arrVal) !== '[object Array]') {
        return null;
    }

    // left pad arrVal with a 0 for the case when the next number increases in length
    arrVal.unshift(0);

    const count = arrVal.length;
    // the idea here was to traverse all the bits from end to start
    // and find the first 0, then flip it to 1
    // as well as flip all 1 bits along the way

    for (idx in arrVal) {
        // reversal iterating the array
        let reverseIdx = count - idx - 1;
        let reverseVal = arrVal[reverseIdx];

        // check the bit at each index
        if (reverseVal === 1) {
            // if the bit is 1 flip it to 0
            arrVal[reverseIdx] = 0;

        } else {
            // the bit is 0 flip it to 1 and stop the loop
            arrVal[reverseIdx] = 1;
            break;
        }
    }

    // remove the leading 0 if any
    if (arrVal[0] === 0) {
        arrVal.shift();
    }

    return arrVal;
}
