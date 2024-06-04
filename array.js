//Array and matrix programming exercises


//1. Write a js program to read and print elements of array.

var myarray=[1,2,3,4,5,6,];


for (var i=0; i < myarray.length ; i++) {
    console.log(myarray[i]);
}

//2. Write a js program to print all negative elements in an array.
var myArray = [3, -1, 2, -4, 5, -6, 7, -8, 9];


for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] < 0) {
    console.log(myArray[i]);
  }
}

//3. Write a js program to find sum of all array elements. 

var myArray = [1, 2, 3, 4, 5];

var sum = 0;
for (var i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}
console.log("Sum of array elements: ", sum);

//4. Write a js program to find maximum and minimum element in an array.
var myarray = [4,5,6,7,8,9];
var max = myarray[0];
var min = myarray[0];
for (var i = 0; i < myarray.length; i++) {
    if (myarray[i] < max) {
        console.log(myarray[i]);
        
    }
    else if ( myarray[1] < 0)
        console.log(myarray[i]);
    
}
console.log("Maximum element: ", max);
console.log("Minimum element: ", min);

//5. Write a js program to find second largest element in an array.

var myArray = [12, 3, 45, 6, 89, 23, 11, 7, 9];


var max = Math.max(...myArray);
var secondMax =[0];
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] < max && myArray[i] > secondMax) {
    secondMax = myArray[i];
  }
}

console.log("Second largest element: ", secondMax);

//6. Write a js program to count total number of even and odd elements in an array.

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


var evenCount = 0;
var oddCount = 0;


for ( var i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
      console.log(evenCount++);
    } else {
      console.log(oddCount++);
    }
  }
  
  console.log("Total even elements: ", evenCount);
  console.log("Total odd elements: ", oddCount);

  //7. Write a js program to count total number of negative elements in an array.

  var myArray = [3, -1, 2, -4, 5, -6, 7, -8, 9];

  
  var negativeCount = 0;


for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] < 0) {
    negativeCount++;
  }
}

console.log("Total negative elements: ", negativeCount);

//8. Write a js program to copy all elements from an array to another array.


var originalarray =[1,2,3,4,5];
var copyarray =[...originalarray];
console.log(copyarray);

//9. Write a js program to insert an element in an array.

var array =[1, 2, 4, 5, 6];
array.splice(2,0,3);
console.log(array);

//10. Write a js program to delete an element from an array at specified position.

var myArray =[1,2,3,4,5,6,7];
myArray.splice(4,1);
console.log(myArray);

//11. Write a js program to count frequency of each element in

var array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

var frequency = {};

for(var element of array) {
  if(frequency[element]) {
    frequency[element]++;
  } else {
    frequency[element] = 1;
  }
}

console.log(frequency);  

//12. Write a js program to print all unique elements in the array.
var myArray=[1,1,2,2,3,3,4,4,5,5];
var uniqueElements=[ ...new Set(myArray)];
console.log(uniqueElements);

//13. Write a js program to count total number of duplicate elements in an array.

var array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4,5,5];

var duplicateCount = array.length - [...new Set(array)].length;

console.log(duplicateCount); 

//14. Write a js program to delete all duplicate elements from an array.

var array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4,];
var newUniquearray =[...new Set(array)];
console.log(newUniquearray);

//15. Write a js program to merge two array to third array.

var array1 =[1,2,3];
var array2 =[4,5,6];
var mergeArray =[...array1,...array2];
console.log(mergeArray);


//16. Write a js program to find reverse of an array.

var array = [1, 2, 3, 4, 5];

var reversedArray = array.reverse();

console.log(reversedArray);


//17. Write a js program to put even and odd elements of array in two separate array.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenArray = [];
var oddArray = [];

for(var element of array) {
  if(element % 2 === 0) {
    evenArray.push(element);
  } else {
    oddArray.push(element);
  }
}

console.log(evenArray);
console.log(oddArray);

//18. Write a js program to search an element in an array.
  
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function searchElement(array, searchElement) {
  var index = array.indexOf(searchElement);
  if (index !== -1) {
    return `Element found at index ${index}`;
  } else {
    return `Element not found in array`;
  }
}

console.log(searchElement(array, 5));  
console.log(searchElement(array, 15)); 


//19. Write a js program to sort array elements in ascending or descending order.

var myarray = [5, 2, 8, 1, 9, 3, 7, 4, 6];


//ascending order

myarray.sort((a, b) => a - b);
console.log(myarray);

//descending order

myarray.sort((a, b) => b - a);
console.log(myarray);

//20. Write a js program to sort even and odd elements of array separately.

var array = [5, 2, 8, 1, 9, 3, 7, 4, 6];

var evenArray = [];
var oddArray = [];

for(var element of array) {
  if(element % 2 === 0) {
    evenArray.push(element);
  } else {
    oddArray.push(element);
  }
}

evenArray.sort((a, b) => a - b);
oddArray.sort((a, b) => a - b);

console.log(evenArray);  
console.log(oddArray); 

