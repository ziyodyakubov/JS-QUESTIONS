// 1-QUESTION STARTED

// function multiplyValues(obj, n) {
//   const result = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result[key] = obj[key] * n;
//     }
//   }
//   return result;
// }

// const n = 3;
// const obj = { a: 2, b: 3, c: 4 };
// const res = multiplyValues(obj, n);

// console.log(res);

// 1-QUESTION ENDED





// 2-QUESTION STARTED

// function countWordsWithA(str) {
//   const words = str.split(' ');
  
//   let count = 0;
//   for (let word of words) {
//     if (word.includes('a') || word.includes('A')) {
//       count++;
//     }
//   }
  
//   return count;
// }

// const str = "This is an example of a string with several words containing the letter a.";
// const result = countWordsWithA(str);

// console.log(result);

// 2-QUESTION ENDED






// 3-QUESTION STARTED

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false
//   },
//   {
//     title: "Dunyoning ishlari",
//     author: "O’tkir Hoshimov",
//     read: true
//   },
//   {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true
//   },
// ];

// function checkBooks(books) {
//   books.forEach((book, index) => {
//     const status = book.read ? "o’qilgan" : "o’qilmagan";
//     console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi ${status}`);
//   });
// }

// checkBooks(books);

// 3-QUESTION ENDED




// 4-QUESTION STARTED

// function createLengthObject(arr) {
//   const result = {};
//   arr.forEach(item => {
//     result[item] = item.length;
//   });
//   return result;
// }

// const strings = ["text", "world", "laptop"];
// const output = createLengthObject(strings);

// console.log(output); 

// 4-QUESTION ENDED





// 5-QUESTION STARTED

// function countOccurrences(arr) {
//   const result = {};
//   arr.forEach(item => {
//     if (result[item]) {
//       result[item]++;
//     } else {
//       result[item] = 1;
//     }
//   });
//   return result;
// }

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const output2 = countOccurrences(animals);

// console.log(output2);


// 5-QUESTION ENDED



// 6-QUESTION STARTED

// function ageDifference(people) {
//   people.sort((a, b) => a.age - b.age);
  
//   const youngest = people[0].age;
//   const oldest = people[people.length - 1].age;
  
//   return oldest - youngest;
// }

// const people = [
//   {name: 'John', age: 13},
//   {name: 'Mark', age: 56},
//   {name: 'Rachel', age: 45},
//   {name: 'Nate', age: 67},
//   {name: 'Jeniffer', age: 65}
// ];

// const output = ageDifference(people);

// console.log(output); 

// 6-QUESTION ENDED




// 7-QUESTION STARTED

// function getTruthyFalsy(arr) {
//   const truthy = arr.filter(item => Boolean(item));
//   const falsy = arr.filter(item => !Boolean(item));
//   return { truthy, falsy };
// }

// const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// const output = getTruthyFalsy(input);

// console.log(output); 


// 7-QUESTION ENDED





// 8-QUESTION STARTED

// function minMaxWord(sentence) {
//   const words = sentence.split(' ');

//   let minWord = words[0];
//   let maxWord = words[0];

//   words.forEach(word => {
//     if (word.length < minWord.length) {
//       minWord = word;
//     }
//     if (word.length > maxWord.length) {
//       maxWord = word;
//     }
//   });

//   return { minWord, maxWord };
// }

// const input = "Men dasturlash kursida o’qiyman";
// const output = minMaxWord(input);

// console.log(output); 

// 8-QUESTION ENDED






// 9-QUESTION STARTED

// const input = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";

// const najot = input.substring(23, 28);
// const talim = input.substring(5, 12);
// const is = input.substring(38, 40);
// const the = input.substring(50, 53);
// const best = input.substring(56, 60);

// const output = `${najot} ${talim} ${is} ${the} ${best}`;

// console.log(output); 


// 9-QUESTION ENDED





// 10-QUESTION STARTED

// var searchMatrix = function(matrix, target) {
//     if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
//         return false;
//     }
    
//     const rows = matrix.length;
//     const cols = matrix[0].length;
    
//     let left = 0;
//     let right = rows * cols - 1;
    
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         const midValue = matrix[Math.floor(mid / cols)][mid % cols];
        
//         if (midValue === target) {
//             return true;
//         } else if (midValue < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
    
//     return false;
// };


// const matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
// const target1 = 3;
// console.log(searchMatrix(matrix1, target1));

// 10-QUESTION ENDED






// 11-QUESTION STARTED

// var rotate = function(matrix) {
//     const n = matrix.length;
    
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }
    
//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse();
//     }
// };

// const matrix = [
//   [5,1,9,11],
//   [2,4,8,10],
//   [13,3,6,7],
//   [15,14,12,16]
// ];

// rotate(matrix);

// console.log(matrix);

// 11-QUESTION ENDED





// 12-QUESTION STARTED

// const text = "Men sizning so'rangizga javob berishim mumkin.";

// const lastWordLength = text.trim().split(' ').pop().length;

// console.log(lastWordLength); 

// 12-QUESTION ENDED




// 13-QUESTION STARTED

// function objectToStringArray(obj) {
//     return Object.entries(obj).map(([key, value]) => `${key}${value}`);
// }

// const input = {a: 2, b: 5, c: 7};
// const output = objectToStringArray(input);

// console.log(output); 

// 13-QUESTION ENDED






// 14-QUESTION STARTED

// var findMedianSortedArrays = function(nums1, nums2) {
//     const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    
//     const n = merged.length;
//     const mid = Math.floor(n / 2);
    
//     if (n % 2 === 1) {
//         return merged[mid];
//     } else {
//         return (merged[mid - 1] + merged[mid]) / 2;
//     }
// };

// const nums1 = [1, 2];
// const nums2 = [3, 4];
// console.log(findMedianSortedArrays(nums1, nums2)); 

// 14-QUESTION ENDED






// 15-QUESTION STARTED

// function moveDuplicates(arr) {
//     const unique = [...new Set(arr)];

//     const duplicates = arr.filter(item => arr.indexOf(item) !== arr.lastIndexOf(item));

//     return { unique, duplicates };
// }

// const array = [1, 2, 3, 3, 4, 5, 2, 6, 6];

// const result = moveDuplicates(array);

// console.log(result.unique); 
// console.log(result.duplicates);  

// 15-QUESTION ENDED






// 16-QUESTION STARTED

// let products = [
//     {id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];

// function deleteProductById(products, id) {
//     return products.filter(product => product.id !== id);
// }

// const productIdToDelete = 4;
// products = deleteProductById(products, productIdToDelete);

// console.log(products);

// 16-QUESTION ENDED





// 17-QUESTION STARTED

// function findAgeDifference(people) {
//     people.sort((a, b) => a.age - b.age);

//     const youngest = people[0].age;
//     const oldest = people[people.length - 1].age;

//     const ageDifference = oldest - youngest;

//     return ageDifference;
// }

// const people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];

// const result = findAgeDifference(people);

// console.log(result); 

// 17-QUESTION ENDED