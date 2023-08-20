

import fs from 'fs/promises';

const quote = "hello world";

    for (let i = 1; i <= 10; i++) {
        fs.writeFile(`awesome${i}.css`,quote , (err) =>{
            if(err) throw err;
       console.log("An error occurred")

        })
    
     }
  
    
        
        
     


