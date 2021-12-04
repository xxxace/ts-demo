let msg: string = "hello world";
let num: number;
let birthday: unknown;
let birthday2: any;
birthday = 123;
birthday2 = 123;
// wrong - num = birthday;
num = birthday2;
console.log(msg,num);

function plus(a:number,b:number):number{
    return a+ b;
}

if(typeof birthday === 'number'){
    plus(birthday,birthday2)
}

plus(<number>birthday,birthday2)
plus(birthday as number,birthday2)

type Any = string | number | object;
type StateType =  "primary" | "success" | "error" | "info" | "warning";

interface IMessage {
    type: StateType;
    message?: Any
    duration?: number
    classList: Array<string|number|boolean>
    [key: string]: any
}

const Message: IMessage = {
    type: 'primary',
    message: 'hello world',
    duration: 1500,
    classList: ["bold",'ace-message',1,1,true],
    style: {display:"inline-block"}
}

function showMessage(option: IMessage):void{
 console.log(option.type, option.message, option.classList, option.duration);
}

showMessage(Message);

let error: (message:Any,duration:number)=>void

error = function(message:Any,duration:number):void{
    console.log("error", message, duration);
}
if(Message.message&&Message.duration){
    error(Message.message,Message.duration);
}

let tuple: [string,string];
tuple = ["1","2"];

enum Gender {
    Male,
    Female
}

let student: {
    name: string
    gender: Gender
}

student = {
    name: 'ace',
    gender: Gender.Male
}

console.log(student.gender === Gender.Male);
console.log(student.gender === Gender.Female);