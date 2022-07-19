var ordimort =false;
var persomort = false;
var orientationPerso = "droite";
var orientationMob = "gauche";


function Ordiriposte(){
    if (!ordimort){
    if (!persomort){
    var frappe = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    if(frappe == 4)
    ordifrappe();
    }
}
}
function ordifrappe() {
    $('#mob').attr('src', 'image/mobatk0.png'); 
    setTimeout(function() {  
        $('#mob').attr('src', 'image/mobatk1.png');   
   },50)
   setTimeout(function() {  
    $('#mob').attr('src', 'image/mobatk1.png');   
},150)  
setTimeout(function() {  
$('#mob').attr('src', 'image/mobatk2.png');   
},200) 
setTimeout(function() {  
$('#mob').attr('src', 'image/basemob.png');   
},250) 
coupdommageperso()
}
function ordideplacement() {
    if (!persomort){
    if (!ordimort){
    var leftr = $('#mob').offset().left - 20;
    var right = $('#mob').offset().left + 20;
    if ($('.mob').offset().left > $('.perso').offset().left) {
    if  ( !( leftr - $('.perso').offset().left ) <= (window.innerWidth * 0.1321875)  && 
    ( leftr - $('.perso').offset().left ) >= (window.innerWidth * 0.00198)){
        orientationMob = "gauche"
        $('#mob').offset({ left: leftr });
        $('#mob').css("transform","rotateY(1deg)");
    }
}

else {
    if  ( !(( leftr - $('.perso').offset().left ) <= (window.innerWidth * 0.1321875)  && 
    ( leftr - $('.perso').offset().left ) >= (window.innerWidth * 0.00198))){
        orientationMob = "droite"
        $('#mob').offset({ left: right });
        $('#mob').css("transform","rotateY(180deg)");
       
    }
}
    }
}
}

function persosubit() {
    $('#perso').attr('src', 'image/persosubit0.png'); 
    setTimeout(function() {  
        $('#perso').attr('src', 'image/persosubit1.png');   
   },150)
   setTimeout(function() {  
    $('#perso').attr('src', 'image/persosubit2.png');   
},250)  
setTimeout(function() {  
$('#perso').attr('src', 'image/base.png');   
},400) 
}
function persomeurt() {
     persomort = true;
    $('#perso').attr('src', 'image/persoko0.png'); 
    setTimeout(function() {  
        $('#perso').attr('src', 'image/persoko1.png');   
   },150)
   setTimeout(function() {  
    $('#perso').attr('src', 'image/persoko2.png');   
},400)  
document.getElementById('menurestart').style.display = 'block';
$('#menurestart').attr('src', 'image/looser.png'); 
}

function mobsubit() {
    $('#mob').attr('src', 'image/mobsubit0.png'); 
    setTimeout(function() {  
        $('#mob').attr('src', 'image/mobsubit1.png');   
   },50)
   setTimeout(function() {  
    $('#mob').attr('src', 'image/mobsubit2.png');   
},150)  
setTimeout(function() {  
$('#mob').attr('src', 'image/basemob.png');   
},200) 
}
function mobmort() {
    ordimort=true;
    $('#mob').attr('src', 'image/mobko0.png'); 
    setTimeout(function() {  
        $('#mob').attr('src', 'image/mobko1.png');   
   },50)
   setTimeout(function() {  
    $('#mob').attr('src', 'image/mobko2.png');   
},250)  
setTimeout(function() {  
$('#mob').attr('src', 'image/mobko3.png');   
},300) 
setTimeout(function() {  
    $('#mob').attr('src', 'image/mobko4.png');   
    },400) 
    document.getElementById('menurestart').style.display = 'block';
    $('#menurestart').attr('src', 'image/winner.png'); 
}

function coupdommage(){
    if(!ordimort)
    if(orientationPerso == "droite"){
    if  ( ( $('.mob').offset().left - $('.perso').offset().left ) <= (window.innerWidth * 0.1321875)  && 
    ( $('.mob').offset().left - $('.perso').offset().left ) >= (window.innerWidth * 0.00198)){
        document.getElementById('MobBar').style.width = parseInt(document.getElementById('MobBar').style.width) - 1 +"%" ;
        if (parseInt(document.getElementById('MobBar').style.width)>0){
        mobsubit();
        }
        else
        mobmort();
    }
}
else {
    if  ( ( $('.perso').offset().left - $('.mob').offset().left ) <= (window.innerWidth * 0.1321875)  && 
    ( $('.perso').offset().left - $('.mob').offset().left ) >= (window.innerWidth * 0.00198)){
        document.getElementById('MobBar').style.width = parseInt(document.getElementById('MobBar').style.width) - 1 +"%" ;
        if (parseInt(document.getElementById('MobBar').style.width)>0){
        mobsubit();
        }
        else
        mobmort();
    }
}
}
    function coupdommageperso(){
        if(orientationMob == "droite"){
        if (( $('.mob').offset().left - $('.perso').offset().left ) <= (window.innerWidth * 0.0665547053192058)  && 
    ( $('.mob').offset().left - $('.perso').offset().left ) <= window.innerWidth * -0.144679705){
            document.getElementById('PersoBar').style.width = parseInt(document.getElementById('PersoBar').style.width) - 1 +"%" ;
            if (parseInt(document.getElementById('PersoBar').style.width)>0){
            persosubit();
            }
            else
            persomeurt();
        }
        }
        else {
            if  ( ( $('.perso').offset().left - $('.mob').offset().left ) <= (window.innerWidth * 0.0665547053192058)  && 
            ( $('.perso').offset().left - $('.mob').offset().left ) >= window.innerWidth * -0.144679705){
                document.getElementById('PersoBar').style.width = parseInt(document.getElementById('PersoBar').style.width) - 1 +"%" ;
                if (parseInt(document.getElementById('PersoBar').style.width)>0){
                persosubit();
                }
                else
                persomeurt();
            }
        }
}
let auSol;
$(document).ready(function(){

 auSol = $('#perso').offset().top;
 var queryString = location.search.substring(1);
 document.body.style.backgroundImage = "url("+ queryString +")";
})
$(document).keypress(function (event) {
           console.log(event.key);
            var leftr = $('#perso').offset().left + 50;
            var leftsaut = $('#perso').offset().left;
            var topt = $('#perso').offset().top ;
            var downt = $('#perso').offset().top + 70;
            var rightt = $('#perso').offset().left - 50;
           

            if ( $('#perso').offset().left < $(window).width() * 0.83) {
                if (event.key == "d" || event.key == "D") {   
                    $('#perso').offset({ left: leftr });
                    if ($('#perso').offset().left <$('#mob').offset().left ) {
                    $('#perso').css("transform","rotateY(1deg)");
                    orientationPerso ="droite";
                    }
                }
            }
            if ($('#perso').offset().left > 10) {
                if (event.key == "q" || event.key =="Q") {
                    if ($('#perso').offset().top == auSol) {
                    $('#perso').offset({ left: rightt});
                    if ($('#perso').offset().left >$('#mob').offset().left ) {
                    $('#perso').css("transform","rotateY(180deg)");
                    orientationPerso ="gauche";
                    }
                    }
            }      
                }

                
                //mobatk
                if (event.key == "n") {
                   
                    $('#mob').attr('src', 'image/mobatk0.png'); 
                    setTimeout(function() {  
                        $('#mob').attr('src', 'image/mobatk1.png');   
                   },50)
                   setTimeout(function() {  
                    $('#mob').attr('src', 'image/mobatk1.png');   
               },150)  
               setTimeout(function() {  
                $('#mob').attr('src', 'image/mobatk2.png');   
           },200) 
           setTimeout(function() {  
            $('#mob').attr('src', 'image/basemob.png');   
       },250) 
       coupdommageperso()

                }
    //Droite
                if (event.key == "p" || event.key == "P") {
                    $('#perso').attr('src', 'image/droite0.png'); 
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/droite1.png');   
                   },50)
                   setTimeout(function() {  
                    $('#perso').attr('src', 'image/droite2.png');   
               },150)  
               setTimeout(function() {  
                $('#perso').attr('src', 'image/droite3.png');   
           },200) 
           setTimeout(function() {  
            $('#perso').attr('src', 'image/Base.png');   
       },250) 
       coupdommage();
                }

                   //Droite au sol
                   if (event.key == "o" || event.key == "O") {
                    $('#perso').attr('src', 'image/droitesol0.png'); 
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/droitesol1.png');   
                   },50)
                   setTimeout(function() {  
                    $('#perso').attr('src', 'image/droitesol2.png');   
               },150)  
               setTimeout(function() {  
                $('#perso').attr('src', 'image/droitesol3.png');   
           },250) 
           setTimeout(function() {  
            $('#perso').attr('src', 'image/Base.png');   
       },400) 
       coupdommage()
                }
    //Saut+coup de pied
                   if (event.key == "m" || event.key == "M") {
                    $('#perso').attr('src', 'image/piedsaut0.png'); 
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/piedsaut1.png');   
                   },50)
                   setTimeout(function() {  
                    $('#perso').attr('src', 'image/piedsaut2.png');   
               },150)  
               setTimeout(function() {  
                $('#perso').attr('src', 'image/piedsaut3.png');   
           },300) 
           setTimeout(function() {  
            $('#perso').attr('src', 'image/Base.png');   
       },350) 
       coupdommage()
                }
   //SAUT         
            if ($('#perso').offset().top == auSol) {
                if (event.key == "z" || event.key == "Z" ) {
                    //$('#perso').css("height" ,"290px");
                    $('#perso').attr('src', 'image/saut0.png');   

                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut0.png');   
                   },100)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut1.png');   
                    
                    },110)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut1_2.png');   
                        $('#perso').offset({ top: topt-60 });
                    },200)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut2.png');   
                        $('#perso').offset({ top: topt-200 });
                        if ( $('#perso').offset().left < $(window).width() * 0.83)
                        $('#perso').offset({ left: leftsaut + 140 });
                   },300)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut3.png');
                        $('#perso').offset({ top: topt-320 }); 
                        if ( $('#perso').offset().left < $(window).width() * 0.83)
                        $('#perso').offset({ left: leftsaut + 200 });  
                        
                    },400)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut3.png'); 
                        $('#perso').offset({ top: topt-450 });  
                        if ( $('#perso').offset().left < $(window).width() * 0.83)
                        $('#perso').offset({ left: leftsaut + 300 });
                    },500)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut3.png');  
                        $('#perso').offset({ top: topt-500 }); 
                        if ( $('#perso').offset().left < $(window).width() * 0.83)
                        $('#perso').offset({ left: leftsaut + 400 });
                   },580)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut3.png');  
                        $('#perso').offset({ top: topt-480 }); 
                      
                    
                    },700)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut6.png');  
                        $('#perso').offset({ top: topt-400 }); 
                        if ( $('#perso').offset().left < $(window).width() * 0.83)
                        $('#perso').offset({ left: leftsaut + 520 });
                         
                    },850)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut6.png');   
                        $('#perso').offset({ top: topt-280 });
                   },1000)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut6.png'); 
                        $('#perso').offset({ top: topt-180 });
                        if ( $('#perso').offset().left < $(window).width() * 0.83)  
                        $('#perso').offset({ left: leftsaut + 650 });
                    
                    },1050)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/saut8.png');   
                        $('#perso').offset({ top: topt-60 });
                    
                    },1200)
                    setTimeout(function() {  
                        $('#perso').attr('src', 'image/Base.png');
                        $('#perso').offset({ top: topt });   
                       // $('#perso').css("height" ,"332px");
                       if ( $('#perso').offset().left < $(window).width() * 0.83)
                        $('#perso').offset({ left: leftsaut + 750 });
                    },1250)
                   
                   }
              }
            
    })

    setInterval(ordideplacement,100);
    setInterval(Ordiriposte,100);