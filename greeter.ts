/**
 * Created by Administrator on 2019/10/24.
 */

//========================基础类型2019.10.24===========================

/*
function greeter(person:string){
    return "Hello, " + person;
}
let user = "world";
document.body.innerHTML = greeter(user);

//接口
interface Person{
    firstName:string;
    lastName:string;
}
function greeter2(person:Person){
    return "Hello, "+person.firstName+" " + person.lastName;
}
let user2 = { firstName:"Jane", lastName:"User"};
document.body.innerHTML = greeter2(user2);


//类
class Student{
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person{
    firstName:string;
    lastName:string;
}
function greeter(person:Person){
    return "Hello, "+person.firstName+" " + person.lastName;
}

let user = new Student("Jane","M.","User");
document.body.innerHTML = greeter(user);

let isDone: Boolean = false;
let decLiteral: number = 6;
let age: number = 37;
let username: string = "usernameXXX";
let sentence: string = `Hello, my name is ${ username },I'll be ${ age + 1 } years old next month.`;

let list:number[] = [1,3,5];  //let list:string[]=['a','b','c'];
let arr:Array<string> = ['a','b','c']; //数组泛型

let x:[string,number];
x=['hello',10];  //类型和值位子要对应不能乱

//枚举
enum Color {Red ,Green ,Blue};
let c:Color = Color.Green;

enum Color2 {Red=1,Green=2,Blue=4};
let colorName:string =Color2[2];  //colorName ='Green'
console.log(colorName);

let notSure:any = 4;
notSure = "this is a string";

let list2:any[]=[1,"tree",false];
list2[1]=100;
console.log(list2); //[1,100,false]

function createObject(o:object | null):void{
    console.log("this is a createObject");
};
createObject({prop:0});  //ok
createObject(null);   //ok

//类型断言
let someValue:any = "this is a string";
let strLength:number =(<string>someValue).length;
let strLength2:number =(someValue as string).length;
console.log(strLength);
console.log(strLength2);
*/

/*
 * notSure.toFiexed(); //ts不会报错
 * let prettySure:Object =4;
 * prettySure.toFixed();  //ts会报错
 * -------------------------------------------------------------------
 * void 表示任何类型都不是，比如一个函数没有返回值时，其返回类型就是void
 * void 只能赋予 undefined 和null
 * let unusable:void = undefined;
 * -------------------------------------------------------------------
 * never 类型表示的是那些永不存在的值的类型。
 * never 类型是那些总是会抛出异常或根本不会有返回值的函数表达式或箭头函数表达式的返回值类型
 * 变量也可能是never类型，当他们被永不为真保护所约束时
 * function error(message:string):never{
 *     throw new Error(message);
 * }
 * */

//========================变量声明2019.10.25============================
/*
//立即执行的函数表达式
for (var i=0;i<10;i++){
    (function (i) {
        setTimeout(function () {
            console.log(i);
        },100*i)
    })(i);
}

function foo(){
    return a;
}
foo();
let a;  //不会报错，ts转化为js时会将let转为var

function sumMatrix(matrix:number[][]){
    let sum=0;
    for (let i=0;i<matrix.length;i++){
        var currentRow = matrix[i];
        for (let i=0;i<currentRow.length;i++){
            sum+=currentRow[i];
        }
    }
    return sum;
}
let sum = sumMatrix([[1,2],[3,4],[5,6]]);
console.log(sum);
*/


const numLivesForCat = 9;
const kitty = {
    name:"Aurora",
    numLives:numLivesForCat,
}
kitty.name="abcdefg";
console.log(kitty);

let o = {
    a: "baz",
    b: 101,
    c:"foo"
};
let { a, b }:{ a:string, b:number } = o;
//对象解构时，等号左边的名称必须是右边对象的属性，且名称需保持一致
//重命名：let {a:newnma,b:newnmb}=o;
console.log(a);
console.log(b);

let [,second,,fourth]=[1,23,45,76];
console.log(second);
console.log(fourth);

// let {a,...passthrough} = o;
// let total = passthrough.b + passthrough.c.length;
// console.log(total);

interface LabelledValue{
    label:string;
} //接口
function printLabel(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}
let myObj = { size:10,label:"size 10 object" };
printLabel(myObj);

//可选属性
interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig): {color:string;area:number}{
    let newSquare = {color:"white",area:100};
    if (config.color){
        newSquare.color=config.color;
    }
    if (config.width){
        newSquare.area=config.width*config.width;
    }
    return newSquare;
}
let mySquare =  createSquare({color:"black"});
console.log(mySquare);

//只读属性
interface Point{
    readonly x:number;
    readonly y:number;
}
let p1:Point = { x:10,y:20 };
let ro:ReadonlyArray<number> = [1,2,3,4,5];
//只读数组不能被重写，但是可以通过类型断言重写
let newro = ro as number[];
newro[0]=12;
console.log(newro); // [12,2,3,4,5]
console.log(ro);  // [12,2,3,4,5]