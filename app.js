//Q.1
var studant = []
console.log(studant);
//Q.2
var studantName ={
    studantName:[]
}
//Q.3
var stringarray = [];
stringarray.push("karachi");
stringarray.push("lahore");
stringarray.unshift("Islamabad");

console.log(stringarray);

//Q.4
var num = [20,30,70,54,34,93,23]
num.unshift(50)

console.log(num);

//Q.5
var blue = [true,false]
console.log(blue);


//Q.6
var mix =[typeof "Animals","city"]
mix.push(typeof 35,83)
mix.unshift(typeof true,false)

console.log(mix);

//Q7
var newName = ["<h1>Qualifaction</h1>"+"<br />"+"1) SSC" + 
"<br />" + "2) HSC" + "<br />" + "3) BSC" + "<br />" + "4) BS"
 + "<br />" + "5) BCOM" + "<br />" + "6) MS" + "<br />" + "7) M.PhiL"
  + "<br />" + "8) PhD"]
document.write(newName)

// Q.8
var studant = ["Michael","jhone","Tony"]
var studantScore = +prompt("Enter Score")
console.log("Studant score and percentage");
for(var i=0 ; i < studant.length; i++){
  var percentage = (studantScore[i] / 500)*100;
  console.log(studant[i]+ "score" +studantScore[i]+"Percentage "+ percentage.toFixed(2) +"%" );
}

//Q.9
var color =["Red","Green","Blue"];
//a
var new01 = prompt("Enter color to add to the beginning");
color.unshift(new01)
console.log(color);
//b
var new02 = prompt("Enter color to add to the end");
color.push(new02)
console.log(color);
//c
color.unshift("yellow","orange");
console.log(color);
//d
color.shift();
console.log(color);
//e
color.pop();
console.log(color);
//f
var index = prompt("Enter index to add color");
var new03 = prompt("Enter  color");
color.splice(index,0,new03);
console.log(color);

//Q.10
var sort = [320,230,480,120]
var sort_1 = [320,230,480,120]
sort_1.sort()

console.log("Score of Studant "+sort);
console.log("Ordered Score of Studant "+sort_1);

//Q11
var city = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
var city_$ =[]
city_$ = city.slice(2,4)
console.log(city);
console.log(city_$);

//Q.12
var string = ("<h1>String</h1>"+"<br />"+"This is my cat");
var arry = ["<h1>Array</h1>"+"<br />"+"This","is","my","cat"];

document.write(string+"<br />");
document.write(arry);

// Q.13

var fifoarry =[]
var arry_$ =["mouse ",' keyboard '," moniter "," Printer "," null"]
document.write('<h3>Divice</h3>'+'<br/>'+arry_$);
for(var i=0; i < arry_$.length; i++){
    fifoarry.push(arry_$[i]);
}
for(var i=0; i < arry_$.length; i++){
    document.write("<h5>Out :</h5>"+"<br/>"+i,fifoarry[i],"<br />");
}
//Q15

var manuFcature = 
["<select class=main><option>Apple</option><option>Samsung</option><option>Motorola</option><option>Nokia</option><option>Sony</option><option>Hair</option></select>"]

document.write(manuFcature)