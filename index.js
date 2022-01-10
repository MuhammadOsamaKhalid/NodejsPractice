// const {readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./content/first.txt','utf8');
// const second = readFileSync('./content/second.txt','utf8');


// writeFileSync(
//     './content/thirdFile.txt', `the result : ${first}, ${second}`,{flag:'a'}
//     );

// const {readFile, writeFile } = require('fs');


// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     const first = result;
//     readFile('./content/second.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile('./content/4thfile.txt',`The result : ${first},${second}`,{flag:'a'},(err,result)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(result);
//         })
//     })

// })

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     // res.write('good');
//     // res.end();
//     res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })

// server.listen(5000)


// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })



// const oranges = ['orange', 'orange']
// const apples = ['just one apple']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })


// const oranges = ['orange', 'orange']
// const apples = ['just one apple']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })

// oranges.forEach(fruit => {
//     console.count(fruit)
//   })

// console.countReset('orange')

// oranges.forEach(fruit => {
//   console.count(fruit)
// })


// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// const doSomething = () => console.log('test')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()

// console.log('\x1b[33m%s\x1b[0m', 'hi!')

// const chalk = require('chalk')
// console.log(chalk.red('hi!'))


// const ProgressBar = require('progress')

// const bar = new ProgressBar(':bar', { total: 20 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100)


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })
  

// const inquirer = require('inquirer')

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "Q What's your name?"
//   }
// ]

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers['name']}!`)
// })



// const bar = () => console.log('bar')

// const baz = () => console.log('baz')

// const foo = () => {
//     bar()
//   console.log('foo')
//   baz()
// }

// foo()


// 

// setImmediate(() => {
//     new Promise((resolve, reject) =>
//         resolve('should be right after baz, before bar')
//     ).then(resolve => console.log(resolve))
//   })

// process.nextTick(() => {
    
//     const bar = () => console.log('bar')

//     const baz = () => console.log('baz')

//     const foo = () => {
//     console.log('foo')
//     setTimeout(bar, 0)
//     baz()
// }

// foo()
//   })


// setInterval(() => {
//     var i=1;
//     console.log(i);
//     i++;
//   }, 2000)


// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')
//   }
// }
// xhr.open('GET', 'https://www.google.com')
// xhr.send()


// let done = true

// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = 'Here is the thing I built'
//     resolve(workDone)
//   } else {
//     const why = 'Still working on something else'
//     reject(why)
//   }
// })

// const checkIfItsDone = () => {
//   isItDoneYet
//     .then(ok => {
//       console.log(ok)
//     })
//     .catch(err => {
//       console.error(err)
//     })
// }

// checkIfItsDone()


// const fs = require('fs')

// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName,'utf8', (err, data) => {
//       if (err) {
//         reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
//         return        // and we don't want to go any further
//       }
//       resolve(data)
//     })
//   })
// }

// getFile('./content/second.txt')
// .then(data => console.log(data))
// .catch(err => console.error(err))

// const s = response => {
//     if (response.status >= 200 && response.status < 300) {
//       return Promise.resolve(response)
//     }
//     return Promise.reject(new Error(response.statusText))
//   }
//   console.log(s)

//   const j = response => response.json()
//   console.log(j)
//   console.log('abc')
  
//   fetch('./todos.json')
//     .then(data => {console.log(data)})    // note that the `status` function is actually **called** here, and that it **returns a promise***
//     .then(j)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
//     .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
//       console.log('Request succeeded with JSON response', data)
//     })
//     .catch(error => {
//       console.log('Request failed', error)
//     })
  
// import fetch from 'node-fetch';

// fetch('https://google.com')
//     .then(res => res.text())
//     .then(text => console.log(text));

// function checkResponseStatus(res) {
//     if(res.ok){
//         return res
//     } else {
//         throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`)
//     }
// }

// fetch('./todos.json')
//     .then(checkResponseStatus)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))



// const s = response => {
//     if (response.status >= 200 && response.status < 300) {
//       return Promise.resolve(response)
//     }
//     return Promise.reject(new Error(response.statusText))
//   }
  
//   const j = response => response.json()
  
//   fetch('/todos.json')
//     .then(s)    // note that the `status` function is actually **called** here, and that it **returns a promise***
//     .then(j)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
//     .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
//       console.log('Request succeeded with JSON response', data)
//     })
//     .catch(error => {
//       console.log('Request failed', error)
//     })

// const f1 = fetch('./todos.json')
// const f2 = fetch('./todo.json')

// // Promise.all([f1, f2])
// //   .then(res => {
// //     console.log('Array of results', res)
// //   })
// //   .catch(err => {
// //     console.error(err)
// //   })


//   Promise.all([f1, f2]).then(([res1, res2]) => {
//     console.log('Results', res1, res2)
//   })
  

// const first = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'first')
//   })
//   const second = new Promise((resolve, reject) => {
//     setTimeout(resolve, 400, 'second')
//   })
  
//   Promise.race([first, second]).then(result => {
//     console.log(result) // second
//   })

//   const doSomethingAsync = () => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve('I did something'), 3000)
//     })
//   }
  
//   const doSomething = async () => {
//     console.log(await doSomethingAsync())
//   }
  
//   console.log('Before')
//   doSomething()
//   console.log('After')

// const aFunction = async () => {
//     return 'test'
//   }
  
//   aFunction().then(alert)

// const getFirstUserData = () => {
//     return fetch('/todos.json') // get users list
//       .then(response => response.json()) // parse JSON
//       .then(users => users[0]) // pick first user
//       .then(user => fetch(`/users/${user.name}`)) // get user data
//       .then(userResponse => userResponse.json()) // parse JSON
//   }
  


// const http = require('http');

// const server = http.createServer((req,res)=>{
//     // res.write('good');
//     // res.end();
//     res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end(getFirstUserData())
// })

// server.listen(5000)



// const promiseToDoSomething = () => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve('I did something'), 10000)
//     })
//   }
  
//   const watchOverSomeoneDoingSomething = async () => {
//     const something = await promiseToDoSomething()
//     return something + '\nand I watched'
//   }
  
//   const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
//     const something = await watchOverSomeoneDoingSomething()
//     return something + '\nand I watched as well'
//   }
  
//   watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
//     console.log(res)
//   })

// const EventEmitter = require('events')
// const eventEmitter = new EventEmitter()

// eventEmitter.on('start', (start, end) => {
//     console.log(`started from ${start} to ${end}`)
//   })
  
//   eventEmitter.emit('start', 1, 100)
  


// eventEmitter.on('start', number => {
//     console.log(`started ${number}`)
//   })
  
//   eventEmitter.emit('start', 23)
  

// eventEmitter.on('start', () => {
//     console.log('started')
//   })

//   eventEmitter.emit('start')

  
// eventEmitter.on('start',(first,second)=>{
//     console.log(`Start from ${first} to ${second}`);
// })

// eventEmitter.emit('start',1,99);

// const http = require('http')

// const port =  process.env.PORT || 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-Type','text/html')
//     res.end('<h1>Hi, Osama</h1>')
// })

// server.listen(port, ()=>{
//     console.log(`Server running at port ${port}`)
// })


// const https = require('https')
// const options = {
//   hostname: 'example.com',
//   port: 443,
//   path: '/todos',
//   method: 'GET'
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.end()



// const axios = require('axios')

// axios
//   .post('https://whatever.com/todos', {
//     todo: 'Buy the milk'
//   })
//   .then(res => {
//     console.log(`statusCode: ${res.status}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })


// const https = require('https')

// const data = JSON.stringify({
//   todo: 'Buy the milk'
// })

// const options = {
//   hostname: 'whatever.com',
//   port: 443,
//   path: '/todos',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.write(data)
// req.end()

// const express = require('express')
// const app = express()

// app.use(
//   express.urlencoded({
//     extended: true
//   })
// )

// app.use(express.json())

// app.post('/todos', (req, res) => {
//   console.log(req.body.todo)
// })


// const axios = require('axios')

// axios.post('https://whatever.com/todos', {
//   todo: 'Buy the milk'
// })

// const express = require('express')
// const app = express()

// app.use(
//   express.urlencoded({
//     extended: true
//   })
// )

// app.use(express.json())

// app.post('/todos', (req, res) => {
//   console.log(req.body.todo)
// })


// const http = require('http')

// const server = http.createServer((req, res) => {
//     // we can access HTTP headers
//     req.on('data', chunk => {
//       console.log(`Data chunk available: ${chunk}`)
//     })
//     req.on('end', () => {
//       //end of data
//     })
//   })

//   const server = http.createServer((req, res) => {
//     let data = '';
//     req.on('data', chunk => {
//       data += chunk;
//     })
//     req.on('end', () => {
//       console.log(JSON.parse(data).todo); // 'Buy the milk'
//       res.end();
//     })
//   })
  
// const fs = require('fs')

// fs.open('/content/first.txt', 'r', (err, fd) => {
//   //fd is our file descriptor
// })

// const fs = require('fs')
// fs.stat('./content/first.txt', (err, stats) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //we have access to the file stats in `stats`
//   console.log(stats);
// })


// const fs = require('fs')
// try {
//   const stats = fs.statSync('./content/second.txt')
//   console.log(stats);
// } catch (err) {
//   console.error(err)
// }

// const fs = require('fs')
// fs.stat('./content/second.txt', (err, stats) => {
//   if (err) {
//     console.error(err)
//     return
//   }

//    //true
//    //false
//    //false
//    //1024000 //= 1MB
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
//   console.log(stats.isSymbolicLink());
//   console.log(stats.size);
// })

// const os = require('os')
// console.log(os.cpus())
// console.log(os.uptime())
// console.log(os.userInfo())

// const Stream = require('stream')

// const readableStream = new Stream.Readable({
//   read() {}
// })
// const writableStream = new Stream.Writable()

// writableStream._write = (chunk, encoding, next) => {
//   console.log(chunk.toString())
//   next()
// }

// readableStream.pipe(writableStream)

// readableStream.push('hi!')
// readableStream.push('/nho!')


// readableStream.on('readable', () => {
//     console.log(readableStream.read())
//   })
  

// const { Transform } = require('stream')
// const TransformStream = new Transform();

// TransformStream._transform = (chunk, encoding, callback) => {
//     TransformStream.push(chunk.toString().toUpperCase());
//     callback();
//   }

//   process.stdin.pipe(TransformStream).pipe(process.stdout);


  
// const obj = {
//     name: 'joe',
//     age: 35,
//     person1: {
//       name: 'Tony',
//       age: 50,
//       person2: {
//         name: 'Albert',
//         age: 21,
//         person3: {
//           name: 'Peter',
//           age: 23
//         }
//       }
//     }
//   }
// //   console.log(obj)

// //   console.log(JSON.stringify(obj, null, 2))

// require('util').inspect.defaultOptions.depth = null
// console.log(obj)


// console.log(WebAssembly);

// const express = require('express')
// const app = express()
// const port = 5000

// app.get('/', (req, res) => {
//   res.send('<h1>Hi Osama!</h1>')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })


// console.log(a);

// let b =4;
// console.log(b);
// console.log(c);


// var a = 6;

// let myArray = [{"data1": ["one", "two", "three", "four"]}, 
// {"data2": ["five", "six", "seven", "eight"]},{"data3": ["nine", "ten"]}];
// for(let i = 0; i < myArray.length; i++){ 
// // if (myArray = myArray[i].child){
//     let childArray = myArray[i].child;
// // }  
// for(let j = 0; j < childArray.length; j++){ 
// console.log(childArray[j]); 
// }
// }


// x=1;

// while(x<=10){
//     console.log(x);
//     x++;
// }

// x=1;

// do{
//     console.log(x);
//     x++;
// }while(x<=10)

// var numbers = [{"data1": ["one", "two", "three", "four"]}, 
// {"data2": ["five", "six", "seven", "eight"]},{"data3": ["nine", "ten"]}];
// var over18 = numbers.filter(myFunction);

// console.log(over18);

// function myFunction(value, index, array) {
//   return value = data1;
// }


// var details = [{
//     studentName: "John",
//     studentMarks: 92
//  },
//  {
//     studentName: "David",
//     studentMarks: 89
//  },
//  {
//     studentName: "Mike",
//     studentMarks: 98
//  },
//  ];
//  var specificValuesFromArray = details.filter(obj => obj.studentMarks ===
//  92 || obj.studentMarks === 98);
//  console.log(specificValuesFromArray)

// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(numbers1*2);
// console.log(numbers2);

// var numbers1 = [45, 3, 11, 16, 25,8];
// var numbers2 = numbers1.map( (value) => {
//     return value * 2;
// });
// var numbers3 = numbers2.filter(myFunction1);
// var numbers4 = numbers1.filter(myFunction1);

// console.log(numbers2);
// console.log(numbers3);
// console.log(numbers4);

// function myFunction(value, index, array) {
//   return value * 2;
// }
// function myFunction1(value, index, array) {
//     if (value % 2 == 0)
//     return value;
// }


// var details = [{
//     studentName: "John",
//     studentMarks: 92,
//     date: "12/12/2021"
//  },
//  {
//     studentName: "David",
//     studentMarks: 89,
//     date: "07/12/2021"
//  },
//  {
//     studentName: "Mike",
//     studentMarks: 98,
//     date: "01/12/2021"
//  },
//  ];


// //  var specificValuesFromArray = details.filter(obj => obj.studentMarks ===
// //     92 || obj.studentMarks === 98);
// //     console.log(specificValuesFromArray)
// for(let i=0; i<details.length; i++){
//     var specificValuesFromArray = details[i];
//     // console.log(specificValuesFromArray);
//     if (specificValuesFromArray.date == "01/12/2021" ){
//         console.log(specificValuesFromArray);
//     }
// }
 

// const axios = require("axios")

// axios.get("http://hp-api.herokuapp.com/api/characters")
// .then(function(res){
// res.data.map(obj=> {console.log(obj["name"])})
// })
// .catch(function(err){
//     if (err.response){
//         console.log("Voldemort says there's an issue with your Response ", err.response.status)
//     } else if (err.request){
//         console.log("Voldemort says there's an issue with your Request.")
//     } else {
//         console.log("Voldemort says ",err.message)
//     }
// })



// axios.post('https://api.funtranslations.com/translate/yoda.json', {
//     "text": "Hello World"
// })
// .then(function(res){
//     console.log(res.data.contents.translated)
// })
// .catch(function(err){
//         if (err.response){
//             console.log("Palpatine says there's an issue with your Response ", err.response.status)
//         } else if (err.request){
//             console.log("Palpatine says there's an issue with your Request.")
//         } else {
//             console.log("Palpatine says ",err.message)
//         }
//     })


// console.log(a);
// var a=3;

// console.log(b);
// let b=4;


<<<<<<< Updated upstream
var s = "you shall not pass".split(" "); 
      var ans = ""; 
      for (let i =s.length-1; i >= 0 ; i--) { 
        ans += s[i] + " "; 
      } 
      console.log("Reversed String: " + ans); 
=======
// var s = "you shall not pass".split(" "); 
//       var ans = ""; 
//       for (let i =s.length-1; i >= 0 ; i--) { 
//         ans += s[i] + " "; 
//       } 
//       console.log("Reversed String: " + ans); 





>>>>>>> Stashed changes
