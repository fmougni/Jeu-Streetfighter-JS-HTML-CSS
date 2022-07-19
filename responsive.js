
var MonPerso = document.getElementById('persochoisie').style;
var PersoOrdi = document.getElementById('mobchoisie').style;
var imgvs = document.getElementById('vs').style;
var imgfleche = document.getElementById('next_perso').style;
var btnplay = document.getElementById('btnplay').style;
var btnplay2 = document.getElementById('btnplay2').style;
var theme = document.getElementById('themechoisie').style;
var mikaTheme = document.getElementById('mikatheme').style;
var kenTheme = document.getElementById('kentheme').style;
var nexttheme = document.getElementById('nexttheme').style;
var clicktoplay =  document.getElementById('start').style;
var parametre =  document.getElementById('btnparametre').style;
var imgtouche =  document.getElementById('touche').style;
var LargeurEcran = window.innerWidth ;
var hauteurEcran = window.innerHeight;
var bar = document.getElementById('myBar').style;
var divbar = document.getElementById('divbar').style;

$( document ).ready(function() {
  bar.height = LargeurEcran * 0.08125 + "px";
  divbar.top = LargeurEcran * 0.33229 + "px";

  MonPerso.height = LargeurEcran * 0.48 + "px";
  MonPerso.width = LargeurEcran * 0.28 + "px";

  PersoOrdi.left = LargeurEcran * 0.703 +"px" ;
  PersoOrdi.height = LargeurEcran * 0.46 + "px";
  PersoOrdi.width = LargeurEcran * 0.26 + "px";

  imgvs.left = LargeurEcran * 0.4119 + "px";
  imgvs.width = LargeurEcran * 0.21 + "px";
  imgvs.top = LargeurEcran * 0.107 + "px";
  imgvs.height = LargeurEcran * 0.274 + "px";
  
  imgfleche.left = LargeurEcran * 0.2854 + "px";
  imgfleche.width = LargeurEcran * 0.07 + "px";
  imgfleche.top = LargeurEcran * 0.1527 + "px";
  imgfleche.height = LargeurEcran * 0.13 + "px";

  
  btnplay.left = LargeurEcran * 0.4125 + "px";
  btnplay.width = LargeurEcran * 0.2 + "px";
  btnplay.top = LargeurEcran * 0.399019 + "px";
  
  btnplay2.left = LargeurEcran * 0.4453 + "px";
  btnplay2.top = LargeurEcran * 0.38950 + "px";
    
  theme.left = LargeurEcran * 0.09375 + "px";
  theme.width = LargeurEcran * 0.8135 + "px";
  theme.top = LargeurEcran * 0.0291 + "px";
  theme.height = LargeurEcran * 0.398 + "px";

  mikaTheme.left = LargeurEcran * 0.7262708 + "px";
  mikaTheme.width = LargeurEcran * 0.242913 + "px";
  mikaTheme.top = LargeurEcran * 0.018 + "px";

  kenTheme.width = LargeurEcran * 0.32082 + "px";
  kenTheme.left = LargeurEcran * -0.022 + "px";
  
  nexttheme.width = LargeurEcran * 0.040 + "px";
  nexttheme.left = LargeurEcran * 0.8625 + "px";
  nexttheme.top = LargeurEcran * 0.408 + "px";


  
  parametre.left = LargeurEcran * 0.4526 + "px";


  imgtouche.left = LargeurEcran *  0.29479 + "px";
  imgtouche.top = LargeurEcran *  0.07881 + "px";
  
});
