const fs = require('fs');


fs.readFile('index.html', 'utf8', function(err, data){

    console.log(err);
    console.log(data);

})