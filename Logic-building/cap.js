let sentence = "amar shonar bangla";


function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let result = capitalizeWords(sentence);
console.log(result); 