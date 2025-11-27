const fs = require('fs');

fs.unlink('calc1.js', (err)=>{
   

    console.log(err);
    console.log("file deleted");
    
    
})