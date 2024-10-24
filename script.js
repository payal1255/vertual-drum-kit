const audio=document.getElementById("audio");

document.addEventListener("keypress",function(e)
{
console.log(e.key)

var b=e.key;
if(b=="a" || b=="A"){
   
    console.log("hello");
    audio.src="./assest/A_clap.wav";

    const alpha=document.getElementById("A");
    alpha.style.fontSize=30+"px";
    setTimeout(function(){
        alpha.style.fontSize=20+"px";
    }, 100);
}
else if(b=="D"||b=="d"){
    audio.src="./assest/D_kick.wav";
    const alpha=document.getElementById("D");
    alpha.style.fontSize=30+"px";
    setTimeout(function(){
        alpha.style.fontSize=20+"px";
    }, 100);

}
else if(b=="F"||b=="f"){
    audio.src="./assest/F_openhat.wav";  
    const alpha=document.getElementById("F");
    alpha.style.fontSize=30+"px";
    setTimeout(function()
         {
            alpha.style.fontSize=20+"px";
    }, 100);
}
else if(b=="G"||b=="g"){
    audio.src="./assest/G_boom.wav";  

    const alpha=document.getElementById("G");
    alpha.style.fontSize=30+"px";
    setTimeout(function()
         {
            alpha.style.fontSize=20+"px";
    }, 100);
}
else if(b=="H"||b=="h"){
    audio.src="./assest/H_ride.wav";  
    const alpha=document.getElementById("H");
    alpha.style.fontSize=30+"px";
    setTimeout(function()
         {
            alpha.style.fontSize=20+"px";
    }, 100);
}
else if(b=="J"||b=="j"){
    audio.src="./assest/J_snare.wav";  
    const alpha=document.getElementById("J");
    alpha.style.fontSize=30+"px";
    setTimeout(function()
         {
            alpha.style.fontSize=20+"px";
    }, 100);
}
else if(b=="K"||b=="K"){
    audio.src="./assest/K_tom.wav";  
    const alpha=document.getElementById("K");
    alpha.style.fontSize=30+"px";
    setTimeout(function()
         {
            alpha.style.fontSize=20+"px";
    }, 100);
}
else if(b=="L"||b=="l"){
    audio.src="./assest/L_tink.wav";  
    const alpha=document.getElementById("L");
    alpha.style.fontSize=30+"px";
    setTimeout(function()
         {
            alpha.style.fontSize=20+"px";
    }, 100);
}else if(b=="s" || b=="S"){
    audio.src="./assest/S_hihat.wav";
    const alpha=document.getElementById("S");
    alpha.style.fontSize=30+"px";
    setTimeout(function()
         {
            alpha.style.fontSize=20+"px";
    }, 100);
}




})











