let str = require("./a.js");

import b from "./b";

console.log(str);
console.log(b.str);

let a = b => c => d => b + c + d;

let obj = { school: "1" };
let obj1 = { age: "2" };

let newObj = { ...obj, ...obj1 }; //es7语法

let input = [1, 2, 4];
input.map(item => item + 1);

import "./index.css"; //引入css
import "./indexless.less"; //引入less

//  在js中引入图片需要inport，或者是一个线上路径
import img1 from "./a1.jpg";
console.log(img1); //page 就是打包图片的路径
let img = new Image();
img.src = img1; //写了一个字符串webpack 不会进行查找
document.body.appendChild(img);
