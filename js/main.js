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
