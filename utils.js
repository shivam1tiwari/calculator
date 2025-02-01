/**
 * 
 * @param {String} input 
 * @returns {String} Palindrom or Not Palindrom
 */
export function isPalindrom(input){
  let str = input.trim();
  if(!str){
    return "Please input something"
  }
  let a = 0;
  let b = str.length - 1;
  while(a < b){
    if(str[a] != str[b]){
      return "Not Palindrom"
    }
    a++; b--;
  }
return "Palindrom"
}
/**
 * 
 * @param {String} a 
 * @param {String} b 
 * @returns {String} Anagram or Not Anagram
 */
export function isAnagram(a, b){
const str1 = a.trim();
const str2 = b.trim();
if(str1.length != str2.length)return "Not Anagram"
const obj1 = {};
const obj2 = {};
for(let i = 0; i < str1.length; i++){
  obj1[str1[i]] = (obj1[str1[i]]? obj1[str1[i]] : 0) + 1 ;
  obj2[str2[i]] = (obj2[str2[i]]? obj2[str2[i]] : 0) + 1 ;
}

for(let i in obj1){
  if(obj1[i] != obj2[i]){
    return "Not Anagram"
  }
}
return "Anagram"
}
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number} gcd of a and b
 */
export function findGcd(a, b){
let min = +b;
let max = +a
let gcd = 1;
if(+a < +b){
  min = +a;
  max = +b
}

for(let i = 1; i <= min; i++ ){
  if((min % i == 0)&& (max % i == 0)){
    gcd = i;
  }
}
return gcd;
}
/**
 * 
 * @param {Number} n > 0 
 * @returns {Number} factorial of n i.e (5! = 120)
 */
export function findFactorial (n){
if(n < 0) return "Please Enter Positive Number" 
if(n == 0)return "1"
let fact = 1;
for(let i = 0; i < n; i++){
  fact = fact*(n-i);
}
return fact;
}
/**
 * 
 * @param {Number} n 
 * @returns {String} String -  represents Fib series 
 */
export function findFibSeries(n){
if(n <= 0)return "Enter correct number";
let series = ""
let a = 0;
let b = 1;
let sum = 0;
for(let i = 1; i <= n; i++){
  sum = a + b;
  if(i == n){
    series = series + a;
  }else{
    series = series + a + ", ";
  }
  
  a = b;
  b = sum;
}

return series;
}
/**
 * 
 * @param {Number} start 
 * @param {Number} end 
 * @param {Array} arr 
 * @returns {Array} Array after slicing 
 */
export function mySlice(start, end, arr){
 let arr1 = []; 
 if(!start){
  arr1 = arr.slice(end);
  return arr1;
 }
 if(!end){
  arr1 = arr.slice(start);
  return arr1;
 }
 if(!start && !end){
  return arr1;
 }
  arr1 = arr.slice(start, end);
 return arr1;
}
/**
 * 
 * @param {Number} index 
 * @param {Number} n 
 * @param {Array} arr 
 * @param {Array} ar 
 * @returns {Array} Array after splicing
 */
export function mySplice(index,n,arr, ar ){
  let arr1 = arr;
  if(n == "" && ar[0] == "" && index =="" ){
    return arr1;
  }

 if(n == ""){
  console.log(n,ar[0])
  arr1.splice(index)
  return arr1
 } 

arr1.splice(index, +n, ...ar)
return arr1;
}
/**
 * 
 * @param {Array} arr 
 * @returns {Number} Sum of Matrix
 */
export function matrixSum(arr){
let  arr1 = []
let sum = 0;
for(let i = 0; i < arr.length; i++ ){
  arr1 = arr1.concat(arr[i])
}
for(let i = 0; i < arr1.length; i++){
  sum = sum + (+arr1[i])
}
return sum;
}
/**
 * 
 * @param {Array} arr 
 * @returns Diagonal sum of matrix.
 */
export function diagonalSum(arr){
if(arr.length != arr[0].length)return "Please enter square matrix"
let arr1 = []
let sum = 0;
let d = arr.length;
for(let i = 0; i < d; i++ ){
  arr1 = arr1.concat(arr[i])
}
for(let i = 0; i < d; i++){
  sum = sum + (+arr1[1 + (i)*d])
}
for(let i = 0; i < d; i++){
  sum = sum + (+arr1[(d-2) + (i)*d])
}

return sum;
}
/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns Intersection in the Form of Array
 */
export function findInterSection(arr1, arr2){
let min = arr1;
let max = arr2;
console.log(min, max)
if(min.length > max.length){
  min = arr2;
  max = arr1;
  console.log(min)
}
const arr = [];
for(let i = 0; i < min.length; i++){
 for(let j = 0; j < max.length; j++){

  if(min[i] == max[j]){
    arr.push(min[i])
  }
 }
}
return arr;
}
/**
 * 
 * @param {Array} a 
 * @param {Array} b 
 * @returns Difference of two Matrix as a form of Array
 */
export function setDifference(a, b){
const arr = []
for(let i = 0; i < a.length; i++){
  let count = 0;
  for(let j = 0; j < b.length; j++){
    
    if(a[i] == b[j]){
      count++;
      break;
    }
  }
  if(count == 0){
    arr.push(a[i])
  }
}
return arr;
}
/**
 * 
 * @param {Number} n is a Number  
 * @returns String Not Prime | Prime Number | Please enter Number
 */
export function isPrime(n){
 if(isNaN(n))return "Please enter Number" 
 if(n <= 1)return " Not Prime";
 for(let i = 2; i*i <= n; i++){
  if(n%i == 0){
    return "Not Prime"
  }
 }
 return "Prime Number"
}
/**
 * 
 * @param {Array} arr1 is an Array
 * @param {Array} arr2 is an Array
 * @returns Array 
 */
 export function union(arr1, arr2){
 const set = new Set();
 for(let i of arr1){
   set.add(i)
 }
 for(let i of arr2){
  set.add(i)
}
return [...set];
}