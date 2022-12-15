/* 
this is for multi-line 
comment.
*/
var btn = document.getElementById("go-button");
function buttonClicked(){
    console.log("button clicked.");
    btn.removeEventListener("click",buttonClicked);
}
btn.addEventListener("click",buttonClicked);