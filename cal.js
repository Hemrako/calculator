var collector="";
var head=document.querySelector(".head")
document.querySelector(".main").addEventListener("click",function(dets){

if(dets.target.textContent=="="){
var cal=eval(collector);
head.innerHTML=cal
collector=cal
}else{
collector+=dets.target.textContent
head.innerHTML=collector;}

})
document.querySelector("button").addEventListener("click",function(){
	collector="";
	head.innerHTML=collector
})
