// let n = 10;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//         row = row + j + " ";
//     }
//    console.log(row); 
// }

// let n = 26;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//         row += String.fromCharCode(65 + j) + " ";
//     }
//     console.log(row); 
// }
// let n = 3;
// for (let i = 1; i <= n; i++) {
//     let row = 0;
//     for (let j = 1; j <= n; j++) {
        
//         row = row + j  + " "; // 65 is the char code for 'A'
//     }
//     console.log(row); 
// }
// let n = 3;
// let count = 1;
// for(let i = 1; i <= n; i++){
//     let row = ''; 
//     for(let j = 1; j <= n; j++){
//         row = row + count + " ";
//         count ++;
//     }
//     console.log(row); 
// }

// let n = 4; 
// for (let i = 1; i <= n; i++) {
//     let row = ""; 
//     for (let j = 1; j <= i; j++) {
//         row += "* "; 
//     }
//     console.log(row); 
// }


// let n = 100;
// for(let i = 1; i <= n; i = i+10){
// let row = "";
// for(let j = i; j < i+10; j++){
//     row = row + j + " ";
// }
// console.log(row,"\n");
// }

// let n = 4;
// for(i = 0; i < n; i++){
//     let row = "";
//     for(j = 0; j < i+ 1; j ++){
//         row += i + 1 + " ";
//     }
//     console.log(row,"\n");
// }

// let n = 5;
// for(let i = 0; i < 5; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += j + " ";
//     }
//     console.log(row, "\n");
// }

// let n = 4;

// for(let i = 0; i < n ; i++){
//     let row = "";
//    for(let j = i+1; j > 0; j--){
//     row = row + j + " ";
//    }
//     console.log(row, "\n");
// }

let n = 4;
let num = 1;
for(let i = 0; i < n; i++){
    let row = "";
    for(let j = i+1; j > 0; j--){
        row += num + "  ";
        num ++;
    }
    console.log(row, "\n")
}