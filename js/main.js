/* 
this is for multi-line 
comment.
*/
let btn = document.getElementById("go-button");
let nameOfUser = document.getElementById("my-input");
let myTextArea = document.getElementById("my-textarea");
function clickedOnButton(){
    console.log("Clicked on button");
    // btn.removeEventListener("click",clickedOnButton);
    document.getElementById("text").innerHTML= "Hello, " + nameOfUser.value+"<br/> Message: "+myTextArea.value;
}
btn.addEventListener("click",clickedOnButton);
//replace content after clicking the button...
let showImg = document.getElementById("show-me");
function showImage(){
    showImg.removeEventListener("click",showImage);
    document.getElementById("img").innerHTML = "I don't know how to show image form javascript, sorry!!"
    
}
showImg.addEventListener("click",showImage);
let hobbies = ["pizza","Gamming","Readding","Programming","music"];
console.log(hobbies.pop());
hobbies.push("Archari");
//loop through array
// hobbies.forEach(function(item){
//     console.log("I like",item);
// });
// let indexNum = hobbies.indexOf("Gamming");
// hobbies.splice(indexNum,1);
// hobbies.forEach(function(i,e){
//     console.log("I like",i,e);
// });
if(hobbies.indexOf("Programming")>-1){
    console.log("I love programming...");
}
//pussing object to a function....
function lenthOfText(phreses){
    let len = 0;
    if(typeof phreses.phese !=="undefined"){
        len = phreses.phese.length;
    }
    if(typeof phreses.phese2 !== "undefined"){
        len+=phreses.phese2.length;
    }
    return len;
}
let text1 = "This is a text to check it's len";
let text2 = "This is the second text to check the lenth"
let lent = lenthOfText({phese2:text2});
console.log(lent);
//find the missing numbers:
let numbers = [20,19,17,18,16,15,14,13,12,11,10,9,8,7,5,4,3,2,1];
numbers.sort(function(a,b){return a-b});
function missingNumber(numbers){
    let missing = -1;
    for(var i = 1;i<numbers.length;i++){
        if(numbers.indexOf(i) === -1){
            missing = i;
        }
    }
    return missing;
}
console.log(missingNumber(numbers));
//class
class Animal {
    constructor(name,height,weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    lengthOfname(){
        return this.name.length;
    }
}
Animal.planet = "Earth";
let dog = new Animal("forito","90 cm","10 kg");
let fish = new Animal("rito","10 cm",".02 kg");
console.log(dog.name);
console.log(fish.name);
console.log(dog.constructor.planet);
console.log(dog.lengthOfname());