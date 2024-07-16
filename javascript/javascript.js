// 1st(Array creation and Initialization)

// let arr=[1,2,3,4,5]
// document.write(arr)

//Array Manipulation

// let num=[1,2,3,4,5,6,7]
// num.push(45)
// document.write("Push = ",num,"<br>")
// num.pop()
// document.write("Pop = ",num,"<br>")
// num.unshift(25)
// document.write("Unshift = ",num,"<br>")
// num.shift(25)
// document.write("shift = ",num,"<br>")

//Array sorting

// let num=[1,2,3,4,5,6,7]
// num.reverse()
// document.write("Reverse of the given number : ",num,"<br>")
// num.sort()
// document.write("Sorting of the given number : ",num)

//Finding maximum and minimum
// let max=0;
// let arr=[10,20,30,40,50]
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>max)
//         max=arr[i]
// }
// document.write(max)

let arr=[1,2,3,4,5];
let result=arr.filter(num);
function num(arr){
    return arr>3;
}
console.log(result);