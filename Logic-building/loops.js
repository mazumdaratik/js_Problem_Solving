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
let n = 3;
let count = 1;
for(let i = 1; i <= n; i++){
    let row = ''; 
    for(let j = 1; j <= n; j++){
        row = row + count + " ";
        count ++;
    }
    console.log(row); 
}



