const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err)=>{
if (err){
    console.log('error');
}
console.log('file created');
});

fs.readFile('welcome.txt', 'UTF8', (err, data)=>{
if (err){
    console.log('error')
}
console.log(data)
})