const fs = require('fs');


fs.writeFile('index.html', 'console.log("Gaurav Raj")', (err) => {

    console.log(err);
    console.log("data saved in the calc1.js file");



})