console.log("heey");
// const x=5;
// const x=10;
// console.log(x)    //{ gets error saying identifier x has been already declared

// let x=10;
//  x=7;
// console.log(x);   // {here you can update vlaue reinitialize it but canot again use let use
// // 0nly once}

//  let x=4;
// console.log(typeof x)        //{you can check the data type of variable}
// ------------------------------------
// let name="prajwal"
// let age=19;                             // {dom manipultion is doen chenged the content}
// let isstudent=true;

// let p1=document.querySelector("#p1");
// p1.textContent=`name:${name}`
// let p2=document.querySelector("#p2");
// p2.textContent=`your age is ${age}`

// let p3=document.querySelector("#p3");
// p3.textContent=` ${isstudent}`

//    --------------------------------
// ----OPERATOS----
// console.log(2+5)
// console.log(2-5)
// console.log(2/5)       arithmatic operator
// console.log(2**5)

// console.log(2%5)

// ARGUMENTED ASSIGNMENT OPERATOR
// let n=10;
// n-=1 {+/%**}
// console.log(n)

// INCREMNET DECREMNT OPERATOR
// let n=10;
// n++; //--
// console.log(n)

// ======OPERATOR PRECEDENCE====
// 1)PARENTHESE
// 2)EXPONENTS (2**2)=4
// 3)*/%
// 4)+-
// console.log(6/2**(2+5)) // HERE FIRT PARENTHESS IS GOING TO COUNTED BEFORE OTER THEN EXPO, THEN DIVISION

// // ===== ACEPT USERINPUT
// let n;
// n=Number(window.prompt("n="))   // here message is displayed in theform of string for prompt yuse Number
// n++; // basicalyy to update both in console aswll in html
// console.log(n)
// let m=document.querySelector("#p1")
// m.textContent=`${n}` // it will display in html page

// IN MOST CASES WHEN YOU HAVE A EVENT HANDELR SYOU USE FUNCTION TO NOT TO CLALL DIRECTLY
// let submit=document.querySelector("#submit")
// submit.onclick=()=>{
//     let input=document.querySelector("#input").value
//     console.log(input)
//     let user=document.querySelector("#p1") // here saved input is not saving insed it changes when typed other
// input so study sperad operator
//     user.textContent=`${input}`
// }
// EXERSIXSE-2
// let r=document.querySelector("#submit")
// r.onclick=()=>{
//     let input=Number(document.querySelector("#input").value)
//     let radius=3.14*input*input;
//     console.log(radius)
//    let m1= document.querySelector("#p1")
//    m1.textContent=`${radius}`
// }

//  counetr program
// let n=0;
// let b1=document.querySelector("#b1")
// b1.onclick=()=>{
//    n--;

//  let m1= document.querySelector("#p1")
// m1.textContent=`${n}` // or n
//   console.log(n)
// }

// let b2=document.querySelector("#b2")
// b2.onclick=()=>{
//    n=0;

//  let m1= document.querySelector("#p1")
// m1.textContent=`${n}` // or n
//   console.log(n)
// }

// let b3=document.querySelector("#b3")
// b3.onclick=()=>{
//    n++;

//  let m1= document.querySelector("#p1")
// m1.textContent=`${n}` // or n
//   console.log(n)
// }

//MATH OBJECTS
// console.log(Math.round(3.5666436346)) //{4} //returns as what taught in school isf valuue is less and greater
// console.log(Math.floor(3.5666436346))// {3} // it always reduce decimal point or can say t wont care about decimal
// console.log(Math.ceil(3.1666436346))// {4} // it always aadd decimal to upward
//formula= (user - 32) * 5/9
// let upform=formula.toFixed(3)  //{.tofixed(1 or 2 or 3) will restrict the decimal to applied number}
// console.log(Math.pow(2,3))//{8}
// console.log(Math.sqrt(3))
// console.log(Math.abs(3.5666436346))
// console.log(Math.max(1,3,8,0,100))//{100}
// console.log(Math.min(1,66,88,3,55))//{1}
//let m=Math.floor(Math.random()*6)+1; here use floor method and add +1 operator this will stop 
//printing again same digits

//spread operator
// let n=[1,2,34,3]
// console.log(typeof n) //output [object ]basically you cannot directly acces the elements inside array

// console.log(typeof n[0])// output [number] have to acces index to find elements 
// console.log(n) // dif b/w this and down is it doesnt unpack the array elements 
// console.log(...n) //it  unpack the array elements
// max=Math.max(...n)
// console.log(max)
// // for string
// let fruits=["aple","dwdw","wdff"]
// let veg=["beet","dwdwijfijifj","aaaaaaaaaaaaa"]
// let food=[...fruits,...veg]  //always use spread operator when it comes to work on multiple arryas
// console.log(food)
//  rest operator
//rest=bundles separate elment into an array
// before rest operator
// function food(a, b, c, d) {
//   return a +  b + + c +  + d; // Concatenate the parameters into a single string
// }

// let pood = food("aaaaaaa", "bbbbbbb", "ccccc", "ccccccccccc");
// console.log(pood);


// let food1="aaaaaa"
// let food2="bbbbb"
// let food3="cccccccc"
// let food4="dddddddd"
// after rest operaror
//spread =expand an array into separate elemts
//rest =bundels separate elemnts int an aray
// function foods(...food) { //rest operatior
//   // return food; // Concatenate the parameters into a single string
//   console.log (...food)// spread operator
// }
//  let food1="aaaaaa"
//  let food2="bbbbb"
//  let food3="cccccccc"
//  let food4="dddddddd"
//  let  pood = foods(food1,food2,food3,food4)
// exersise
// Dice roller program
// function rolldice(){
// let numofdice=document.querySelector("#input").value;
// let image=document.querySelector("#image")
// let p=document.querySelector("#p1")
// let value=[]
// let images=[]
// for(let i=1;i<=numofdice;i++){
//     let values=Math.floor(Math.random()*6)+1;
//     console.log(values)
//     value.push(values)
//     images.push(`<img src="${values}.png" alt="">`)
// }
// p.textContent=`${value.join(" ")}`  //  text content is used to display only the textual content not images or videos
// image.innerHTML=images.join('')
 
// }
// Password generator
// math.random will not genearte last value specified fo use floor and+1 to include it
// function
// function a(b){
//     return b*2
// }
// let e=3
// let c=a(e)
// console.log(c)
// function using return
// function a(uppercasechar,lowercasechar,symbolschar){
         
//         uppercasechar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//         lowercasechar='abcdefghijklmnopqrstuvwxyz'
//         symbolschar='!@#$%^&*()_+~`><.,/?:;{}[]|'
//     }
//     let length=10
//     let uppercase=true
//     let lowercase=true
//     let symbols=true

//     let c=a(
//         uppercase,
//         lowercase,
//         symbols,
//     )
//     console.log(c)


// string objects
// let a="                    Prajwalps manohara@gmail.com     "
// console.log(a.charAt(5))     // return charcter at specified index
// console.log(a.indexOf("a"))  // return index at specified charcter
// console.log(a.length)  // include length of white space also
// console.log(a)
// console.log(a.trim())  // removes white spaces from start and end only not at between of words
// console.log(a.trim().toUpperCase())
// console.log(a.trim().toLowerCase())
// console.log(a.trim( ).repeat(5)) // repeat count for 5 times
// console.log(a.startsWith(" ")) // return true bec emptaspaace
// console.log(a.endsWith("@gmail.com")) // return strue if email is vaild
// const sentence = "The quick brown fox jumps over the lazy dog.";
// const word = "fox";
// console.log(sentence.includes(word)); // true
// console.log(sentence+word)
// console.log(a.padStart(89,"0"))  //number should be grater than length of string if true only it return or adds extra 000
// console.log(a.padEnd(79,"0"))  // add 0 at end of string
// // strin slicing
// let username="prajwal ps"
// let fn=username.slice(0,username.indexOf(" "))  //(startindex,lastindex) starting index is 0 ending index is no hardcoding
// console.log(fn)
// let ln=username.slice(username.indexOf(" ")+1)  //(startindex,lastindex) +1 remove extara white space , can add last index but not recomended
// console.log(ln)
// let email="abcdes@gmail.com"
// let fn1=email.slice(0,email.indexOf("@"))  //(startindex,lastindex)
// console.log(fn1)

// // Array methods
// let car=["abc","dlkwd","dkjjddddd","dkjdjidji"]
// car.push("aaaaaaaaaaaaaaaaaaaaaaaaa")  // add new item at end
// console.log(car)
// car.pop()// remove last item
// console.log(car)
// car.unshift("xxxxxxxxxx")  // add new item to first index
// console.log(car)
// c=car.shift()           // will not see first index
// console.log(car)
// // i didnt learn how to remove specified item learn in future
// p=car.findIndex(n=>n==="dkjdjidji")  // it find the index on basis of condition (n numbrs)
// console.log(p)
// q=car.indexOf("dkjdjidji")
// console.log(q)
// s=car.sort()  // ascending to desc
// console.log(s)
// sr=car.sort().reverse() // reverse
// console.log(sr)
// len=car.length
// console.log(len)

// exersise 1
// let pomt=window.prompt("enter username")
// let c=pomt.trim().charAt(0).toUpperCase()
// let b=pomt.trim().slice(1).toLowerCase()
// console.log(c+b)
// or do this  for better understanding
// pomt=pomt.trim().charAt(0).toUpperCase()+pomt.trim().slice(1).toLowerCase()
// console.log(pomt)

//2d or multi dimensional array
// let a = [
//   [1, 3, 5],
//   [4, 44, 6],
//   [5, 6, 8],
// ];
// a[0][0] = "x";
// a[0][1] = "0";
// a[0][2] = "x";
// a[1][0] = "x";
// a[1][1] = "0";
// // you can build a tic tac toe using this
// // c=a.join(' ')
// // console.log(c) // here in this approch it return , so use for loop to acces individual
// for (let x of a) {
//   c = x.join(" "); // join method is used to join string with required coma or blank
//   console.log(c);
// }

// const fruits = ["apple", "banana", "cherry"];
// const result = fruits.join(", "); // "apple, banana, cherry"

//  Exercise 3
// let b1=document.querySelector("#b1")
// b1.onclick=()=>{
//     let random1=Math.round(Math.random()*7)
//     let random2=Math.round(Math.random()*7)
//     let random3=Math.round(Math.random()*7)

//     let m1= document.querySelector("#p1")
//     let m2= document.querySelector("#p2")
//     let m3= document.querySelector("#p3")

//     m1.textContent=`${random1}`
//     m2.textContent=`${random2}` // or n
//     m3.textContent=`${random3}` // or n
//     // or n
//     console.log(random1)
//     console.log(random2)
//     console.log(random3)

// }

// let x="ldmklk"
// console.log(isNaN(x))// return true

// if statement

// let b1=document.querySelector("#b1")
// let p1=document.querySelector("#p1")

// b1.onclick=()=>{
//     let input=(document.querySelector("#input").value)
//      age = Number(input);

// if (isNaN(age)){
//     console.log("wodrmkm")
//     p1.textContent ="twordse"

// }
// else if(age>=100){
//     console.log("too old use glucose")
//    p1.textContent ="too old use glucose"

// }
// else if(age==0){
//     console.log("too young ")
//     p1.textContent ="too young"

// }
// else if(age<=18){
//     console.log("only 18++")
//      p1.textContent ="only 18++"

// }
// else {
//     console.log("perfect enjoy")
//      p1.textContent ="perfect enjoy"
// }
// }
// always use && || ! operator in elseif for bettrer readabiltiy
//  checked property
// exersise ===111
// let checkbox1=document.querySelector("#checkbox1")
// let checkbox2=document.querySelector("#checkbox2")
// let checkbox3=document.querySelector("#checkbox3")
// let checkbox4=document.querySelector("#checkbox4")
// let p1=document.querySelector("#p1")
// let p2=document.querySelector("#p2")

// checkbox1.onclick=()=>{
//     console.log(checkbox1.checked) // .checked will return boolean valuse true or false
// }

// let r=document.querySelector("#submit")
//  r.onclick=()=>{
// if(checkbox1.checked){
//     p1.textContent="you subscribed"
// }
// else{
//     p1.textContent="you not subscribed"
// }
// if(checkbox2.checked){
//     p2.textContent="you choose visa"

// }
// else if(checkbox3.checked){
//     p2.textContent="you chooe paypal"

// }
// else if(checkbox4.checked){
//     p2.textContent="you chodse maseteddue"

// }
// else{
//     p2.textContent="please choose any payement method"

// }
//  }
// let purchaseamnt=125;
// let disc=a>=20?"mvlkjv":"mmmmmmmmmmmmm"
// console.log(b)

// always use break statement for while loop because it continue until condition is true
// let i=5;
// while(i==5){
//     console.log("hey",i)
//    break;
//    }

// let usename=" ";
// while(usename===" "){
//     usename= window.prompt("enter username")

// }
// console.log(usename)
// let input=document.querySelector("#input").value

// guess a number from 1 to 100
// let input=document.querySelector("#input")
//  let p2=document.querySelector("#p2")
// let random;
// let submit=document.querySelector("#submit")
//  submit.onclick=()=>{
//    let usergame=Number(input.value)
//     random=Math.round(Math.random()*100)
//     console.log(random)
//     if(random===usergame){
//         console.log("coorect ")
//         p2.textContent=`computer guessed ${random}and user guessed${usergame}`

//     }
//     else{
//         console.log("try again")
//         p2.textContent=`computer guessed ${random}and user guessed${usergame}`

//     }
//      console.log(input.value)
//  }

// you can call same variable inside function given in other function

// temperature conversion

// let input=document.querySelector("#input")
// let celfar=document.querySelector("#celfar")
// let farcel=document.querySelector("#far-cel")
// let submit=document.querySelector("#submit")
//   let p2=document.querySelector("#p2")
// function convert(){  // i called conver functon onclick in html
//     // (1°C × 9/5) + 32 = 33.8°F
//     user=input.value
//     console.log(user)
//     if(celfar.checked){
//         formula=(user * 9/5) + 32
//         p2.innerHTML=`${formula}<sup>0</sup>F`

//     }
//     else if(farcel.checked){
//        formula= (user - 32) * 5/9
//        let upform=formula.toFixed(3)
//        p2.innerHTML=`${upform}<sup>0</sup>F`

//         }
//         else{
//             p2.textContent=`Error!`

//         }

// }
// const hello= ()=>{
//     console.log("hello")
// }
// callback function is a function passed to another function as argument
// function hurr(){
//     let x=5;
// }
// hurr()
// function hello(by){
    
//     setTimeout(()=>{
//         console.log('heey jido')
//         by()
//     },3000)
   
// }
// hello(bye)
// function bye(){
//     console.log("bye")
// }

// function sum (callback,x,y){
//      let result =x+y
//    callback(result)
//     // console.log(result)
// }

// function calculate(result){
//     console.log("ehh",result*3) // you can perform you own task inside funtion
// }
//  sum(calculate,2,4)



// //  callback function
// function fetch(callback,pagedisplay){
//     let data={id:1,name:'sjsjc'}
//     callback(data)
//     pagedisplay(data)
// }
// function result(data){
//     console.log(data)
// }
// function display(data){
//     let p1 =document.querySelector('#p1')
//     p1.textContent=data.id
// }
// fetch(result,display)
// let a=[1,3,5,6,7]
// a.forEach((m)=>{operation(m),double(m)})  // for each method doesnt accept double function forEach
//                                           //  accepts a single callback function, so if you want to apply multiple functions
//                                            // , you'll need to either combine them into one function or call them sequentially within the same callback.
//     function double(m){
//         console.log(m*2)
//     }
//     function operation(n){
//     console.log(n*4)  // arguments are values that can perform several  task in several funcntion
// }
// you can also call it separately
// let stud=["kejd","nejh"]
// let newstd=stud.map(newstuds)
// function newstuds(e){
//   console.log( e.toUpperCase())
// }
// here the new changes applied will not effect the orign array so to effect the origin
// insted of console use return and outside funct use console.log to print newstd
// function newstuds(e){
//   return ( e.toUpperCase())
// }
// console.log(newstd)
// filter method
// let number=[1,2,34,5,6,7,8]
// // 1-st method
// let newnum=number.filter((r)=>{
//  return( r%2==0)
// })
// //2-Nd method
// let newnum_1=number.filter(even) 
// let newnum_2=number.filter(odd)

// console.log(newnum_1)
// console.log(newnum_2)

//  function even(ev){
//       return ev%2==0
//  }
//  function odd(ev){
//   return ev%2!==0
// }


// reduce method is slight diffent it accept two argument  insted of caliing outside fuction use arrow 
// let n=[2,3,1]
// let new1=n.reduce((res,cur)=>{
// return res+cur
// } )
// let new2=n.reduce((res,cur)=>{
//   return Math.max(res,cur) 
//   } )
//   console.log(new2)
// console.log(new1)

// let f=[6,7]
// let m=Math.max(...f)
// console.log(m)
// objects 
// this = reference to the object where THIS lom.name=this.name
// const lom={
//   name:'lode',
//   id:1,
//   helo:()=>{console.log("hey you can call functio isid e objects")},
//   // THIS wont work for arrow function use normal function
//   hayya:()=>{console.log(`hey ${this.name} has id of ${this.id}`)}  ,
//   hayya:function(){console.log(`hey ${this.name} has id of ${this.id}`)}  


// }
// // console.log(lom.helo())
// // or

// lom.helo()
// lom.hayya()


// destructing = extract values from array and objects,then assaign them to variables in a convienient way
// [] to perform array destrucr ing
// {} to perform objects destrucrting
// let a=[1,3]
// const[f1,f2]=a
// console.log(a)
// const b=[a[0],a[1]=9]
// const b= [a[0],a[1]]=[a[1],a[0]]
//  console.log(b)

const list={
  name:"chheeeeeeeeeeeeeeeec",
  id:1,
}
// list.name="eggggggggggg"
// let neww= list.name          // 1st method
// console.log(neww)

// 2nd method
// const{name,id=2,job="jccj"}=list
// console.log(id)

// function
// function neww({name,id}){
//   console.log(name="hhhhhhhhhhhhhh")
//   console.log(id)
// }
// neww(list)

//  shuffle the array
//  let a=[6,3,9,8,2,'a']   // 1st method
// a.sort(()=>Math.random()-0.5)
// console.log(a)

// snchronous= execute line by line consecutively in sequential manner 
//              code that wait for operation to compleete
// asynchronous= allows multiple operation to be performed concurrrently without waiting 
// doesnt block the execution flow and allow progaram to continue
// (i/o operation,fetching data) handled with async/await

// try{}=Enclose the code the might cause error
// catth{error}=catch and handle any throw error from try{} console.error(error)
// finally{}=optional always executes used to close or clesn up ex:-closefile

// try{
//   console.log(x)
// }
// catch(error){
//   console.error(error)
// }
// finally{
//   console.log("this is always executes ")
// }

// let a=setTimeout(()=>{console.log("hheh")},3000)
// clearTimeout(a)
// Date(year,month,day,hour,minute,second ,ms)
// let a= new Date(2023,8,1,9,2,60,3000)
// console.log(a)
// //  can also pass string
// let b= new Date("2024-09-01T12:00:00Z") // 01 is date T is time 12:00 00Zreprest utc time
// console.log(b)

// const a=new Date()
// const year=a.getFullYear()
// const month=a.getMonth()
// const date=a.getDate()
// const hour =a.getHours()
// const min=a.getMinutes()
// const sec=a.getSeconds()
// const day=a.getDay()


// const formattedDate = `${year}-${month}-${date}-${hour}:${min}:${sec} ${day}`;

// console.log(formattedDate); 
// console.log(date)

// console.log(month)
// console.log(year)


