const fs = require('fs');


fs.appendFile('index.html', 'console.log("Mern 12 batch .......")', (err) => {

    console.log(err);
    console.log("data saved in the index.html file");



})