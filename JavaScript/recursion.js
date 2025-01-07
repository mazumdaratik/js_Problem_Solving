// function recurse() {
//     if(best_conditon){
//         //stop the recursion
//         return;
//     }

//     recurse();
// }

//use case

function fetchWater(count) {

    if(count ===0){
        console.log("No more attempt left to fetchwater");
        return;
    }

    console.log("Fetching water...", count);
    fetchWater(count -1);
}

fetchWater(5);