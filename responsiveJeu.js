$( document ).ready()
{
document.getElementById('headperso').style.height = window.innerHeight * 0.139 +"px";
document.getElementById('headmob').style.height = window.innerHeight * 0.139 +"px";
document.getElementById('headmob').style.left = window.innerWidth - document.getElementById('headmob').offsetWidth * 1.0007 + "px";
document.getElementById('MobBar').style.left = (window.innerWidth - document.getElementById('headmob').offsetWidth) - document.getElementById('MobBar').offsetWidth*1.0099  + "px" ;
document.getElementById('MobBar').style.height = window.innerHeight * 0.139 +"px"; 
document.getElementById('PersoBar').style.height = window.innerHeight * 0.139 +"px"; 
document.getElementById('PersoBar').style.left = document.getElementById('headperso').offsetWidth + "px";
document.getElementById('mob').style.top = window.innerHeight * 0.62 + "px";
document.getElementById('perso').style.top = window.innerHeight * 0.63 + "px"
document.getElementById('mob').style.left = window.innerWidth * 0.82177+"px";
document.getElementById('mob').style.height = window.innerHeight * 0.34 + "px"; 
document.getElementById('perso').style.height = window.innerHeight * 0.34 + "px"; 
document.getElementById('menurestart').style.top = window.innerHeight * 0.145833 + "px"; 
document.getElementById('menurestart').style.left = window.innerHeight * 0.30729 + "px"; 

}