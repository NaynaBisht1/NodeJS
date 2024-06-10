const fs = require('fs')

fs.readFile('file.txt', 'utf8', (err, data)=>{
    console.log(err,data)
})
console.log("finished reading file")
console.log("finished reading file")

const a = fs.readFileSync('file.txt')
console.log(a.toString())
console.log("finished reading file")

fs.writeFile('file2.txt', "This is data",()=>{
    console.log("Written to the file")
})
console.log("finished")

fs.writeFileSync('file2.txt', "This is data2",()=>{
    console.log("Written to the file")
})
console.log("finished")