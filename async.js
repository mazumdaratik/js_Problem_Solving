let paymentSuccess = true;
let marks = 70;
function enroll () {
    console.log("Course Enrollment is in Progress...");
    const promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            if(paymentSuccess) {
                resolve();
            } else {
                reject("Payment Failed. Try Again please..");
            }
        },2000);
    })
   return promise; 
}

function progress () {
    console.log("Getting ready courses...");
    const promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            if(marks<=70) {
                resolve();
            } else {
                reject("You are not eligible for certificate");
            }
        },2000);
    });
    return promise;   
}
function getCertificate () {
    console.log("Preaparing Your Certificate...");
    const promise = new Promise(function(resolve){ //const promise = Promise.resolve("Congratulations!! Click here to download.);
        setTimeout(function() { 
            resolve("Congratulations!! Click here to download.");
    },2000);
    });
 return promise;   
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(val){
        console.log(val);
    })
    .catch(function(error){
        console.log(error);
    })