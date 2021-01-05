/*--------data type----------*/
/*{
var firstName = "Rutwik";
console.log(firstName);
var lastName ="kikani";
var age = 25;
var fullAge = true;
console.log(fullAge);

var job; //not exiested right now
console.log(job);   
job="trannie";
console.log(job);


// var 3years = 3; 
var _3year =3;
}*/

// type coerction
/*{var firstName = 'rutwik'
var age = 26;
console.log(firstName + ' ' + age);
var job, isMarried;
job='teacher';
isMarried=false;
console.log(firstName + " is a "+age+" year old "+job+" is he married? "+ isMarried);
age="twenty five";
job="driver";
alert(firstName + " is a "+age+" year old "+job+" is he married? "+ isMarried);
var lastName = prompt('What is his lastName ?');
console.log(firstName +' '+lastName);}*/

//operators
/*{
    var year= 2020;
    var yearJohn = year - 28;
    var yearMark = year - 86;
    console.log(yearMark);
    console.log(year+2);
    console.log(year*2);
    console.log(year/2);
    var johnOlder = yearJohn>yearMark
    console.log(johnOlder);
    //typeof operater
    console.log(typeof johnOlder);
}*/

//operators
/*{
var now=2020;
var yearJohn=2000;
var fullAge=18;
var ageJohn=now-yearJohn;
var ageMark=35;
var average=(ageJohn+ageMark)/2;
console.log(average);
var average=ageMark+ageJohn/2;
console.log(average);
var isFullAge=now-yearJohn>=fullAge;
console.log(isFullAge);

var x,y;
x=y=(3+5)*4-6; //8*4-6//32-6
console.log(x,y);

x*=2;
console.log(x);

x++;
console.log(x);
++x;
console.log(x);
}*/

//challenge
/*{
var massMarks = 78;
var heightMark = 1.68;
var massJohn = 98;
var heightJohn = 1.65;
var bmiMark = massMarks / (heightMark ** 2);
var bmiJohn = massJohn / (heightJohn ** 2);
console.log(bmiJohn, bmiMark);
var markHigherBMI = bmiMark > bmiJohn;
console.log('Is marks\'s bmi higher than john\'s ? '+ markHigherBMI);
}*/

//if else
/*{
var firstName = 'john';
var civilStatus = 'single';
if(civilStatus==='married'){
    console.log(firstName+' is Marreied !!');
}else{
    console.log(firstName+' will hopefullly marry soon :) !!');
}
var isMarried = true
if(isMarried){
    console.log(firstName+' is Marreied !!');
}else{
    console.log(firstName+' will hopefullly marry soon :) !!');
}
var massMarks = 7;
var heightMark = 1.68;
var massJohn = 98;
var heightJohn = 1.65;
var bmiMark = massMarks / (heightMark ** 2);
var bmiJohn = massJohn / (heightJohn ** 2);
if(bmiJohn<bmiMark){
    console.log("Mark\'s BMI higher than John\'s");
}else{
    console.log("John\'s BMI higher than Mark\'s");
}
}*/
/*
var firstName='john';
var age=16;
if(age<13){
    console.log(firstName+' is kid');
}else if(age>=13 && age<20){
    console.log(firstName+' is teenager');
}else if(age>=20 && age<30){
    console.log(firstName+' is young man');
}
else{
    console.log(firstName+' is man');
}*/

// ternary operator
/*
var firstName='john';
var age=16;
var drink = age >=18?'beer':'juice';
age >= 18?console.log(firstName+' drinks ' +drink):console.log(firstName+' drinks ' +drink);

//switch statment
var job = "cop";
switch(job){
    case  "teacher":
        console.log(job);
        break;
    case "driver":
        console.log(job);
        break;
    case "designer":
        console.log(job);
        break;
    default:
        console.log('nothing');
}
switch(true){
    case age<13:
        console.log(firstName+' is kid');
        break;
    case age>=13 && age<20:
        console.log(firstName+' is teenager');
        break;
    case age>=20 && age<30:
        console.log(firstName+' is young man');
        break;
    default:
    console.log(firstName+' is man');
}*/
//falsy value null, 0, '', NaN 
/*
var height;
height=23;
if(height || height===0){
    console.log('Variable is define');
}else{
    console.log('Variable is not been defined');
}
//== and ===
if(height == '23'){
    console.log('this == done type coretion');
}
if(height === '23'){
    console.log('this === not done type coretion');
}*/

// function
/*
function calAge(byear){
    return 2018-byear;
}
var ageJohn=calAge(1990);
var ageMike=calAge(1978);
var ageJane=calAge(1995);
console.log(ageJohn,ageMike,ageJane);

function yearsUtillRetirement(year,firstname){
    var age = calAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstname+' retires in '+retirement+' years.');
    }else{
        console.log(firstname+' retired');
    }
    
}
yearsUtillRetirement(1990,'john');
yearsUtillRetirement(1948,'mark');
yearsUtillRetirement(1995,'jane');
*/
/*
//function declaration and expression
//declaration function whatDoYouDo(job, firstname){}
//function expression

var whatDoyouDo = function(job,firstname){
    switch(job){
        case 'teacher':
            return firstname+'teacher';
        case 'driver':
            return firstname+'driver';
        default:
            return firstname+'noting';
    }
}
console.log(whatDoyouDo('teacher','john'));*/

//Arrays
/*var names = ['john','marks','jane'];
var years = new Array(1990,1969,1948);
console.log(names[0]);
console.log(names.length);
names[1] = 'ben';
console.log(names);
names[names.length]='mary';
console.log(names);

var john = ['john','smith', 1990, 'designer',false];
john.push('blue');
john.unshift('Mr.');
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);
console.log(john.indexOf(23));
var isDesigner = john.indexOf('designer') === -1? 'john is not a designer':'john is a designer';
console.log(isDesigner);*/

//tip calculator
/*
function tipcalculator(bill){
    var percentage;
    if(bill < 50){
        percentage = 0.2;
    }else if(bill >= 50 && bill < 200){
        percentage = 0.15;
    }else{
        percentage = 0.10;
    }
    return percentage*bill;
}
var bills = [124, 48, 268];
var tips = [tipcalculator(bills[0]),
            tipcalculator(bills[1]),
            tipcalculator(bills[2])];
var finalValues = [bills[1]+tips[1],
bills[0]+tips[0],
bills[2]+tips[2]]
console.log(finalValues);*/


//objects and property
/*
var john = {
    firstName:'john',
    lastName:'smith',
    birthyear:1998,
    family:['john','mark','bob','emily'],
    job:'teacher',
    isMarried:false,
};
console.log(john.firstName);
console.log(john["lastName"]);
var x ='birthyear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthyear = 1998;
jane['lastName'] = 'smith';
console.log(jane);
*/

//objects and methods this//
/*
var john = {
    firstName:'john',
    lastName:'smith',
    birthyear:1998,
    family:['john','mark','bob','emily'],
    job:'teacher',
    isMarried:false,
    calculateAge: function(){
        return 2020-this.birthyear;
    }
};
john.age=john.calculateAge();
console.log(john);*/

//chanllange
/*
var john ={
    fullname:'John Smith',
    mass: 95,
    height:1.95,
    calBmi:function(){
        this.Bmi = this.mass/(this.height**2);
        return this.Bmi;
    }
};
var mark ={
    fullname:'mark Smith',
    mass: 95,
    height:1.95,
    calBmi:function(){
        this.Bmi = this.mass/(this.height**2);
        return this.Bmi;
    }
};

console.log(john,mark)*/

//loops
for(var i=0;i<=10;i++){
    console.log(i);
}
var john = ['jonh','smith',1998,'designer',false,'blue'];
for(var i=0; i<john.length; i++){
    if(typeof john[i] !== 'string')continue;
    console.log(john[i]);
}
for(var i=0; i<john.length; i++){
    if(typeof john[i] !== 'string')break;
    console.log(john[i]);
}
for(var i=john.length-1; i>=0; i--){
    console.log(john[i]);
}

/*var i=0;
while(i<john.length){
    console.log(john[i]);
    i++;
}*/
/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
john.average = calcAverage(john.tips);
console.log(john);
*/

//execution context - box for execution 
// the default execuion context is global for browser it's window
// 
