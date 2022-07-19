var i = 0;
var image = 0 ;
var imagetheme = 0 ;
var urlimagetheme ="";
var ouvert = false;

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var left = 10;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        main();
        i = 0;
      } else {
        width++;
        left += 15;
        if (parseInt(document.getElementById("gokuspeed").style.left)+150+ +18 < window.innerWidth){
        document.getElementById("gokuspeed").style.left = left +"px";
        }
        elem.style.width = width + "%";
        
      }
    }
  }
}
function main(){
   
        $('#menu').css("display","block");
       $('#loading').css('opacity', '0');
       
    }
    function touche(){
       if(ouvert == false) {
       $('#touche').css("display","block");
       console.log('sheesh');
       $('#themechoisie').css('opacity', '0.5');
       $('#mikatheme').css('opacity', '0.5');
       $('#kentheme').css('opacity', '0.5');
       $('#nexttheme').css('opacity', '0.5');
       $('#lienjeu').css('opacity', '0.5');
       $('#btnplay2').css('opacity', '0.5');
       ouvert = true;
       }
       else {
       $('#touche').css("display","none");
       console.log('sheesh');
       $('#themechoisie').css('opacity', '1');
       $('#mikatheme').css('opacity', '1');
       $('#kentheme').css('opacity', '1');
       $('#nexttheme').css('opacity', '1');
       $('#lienjeu').css('opacity', '1');
       $('#btnplay2').css('opacity', '1');
       ouvert = false;
       }
       
    }
    function changeImage(){
        if (image == 0) {
        document.getElementById('persochoisie').setAttribute("src","image/RyuChoix.gif");
        document.getElementById('persochoisie').style.opacity = 0.3;
        btnplay.display = "none";
        image = 1 ;
        }
        else if (image == 1) {
        document.getElementById('persochoisie').setAttribute("src","image/AkumaChoix.gif");
        document.getElementById('persochoisie').style.opacity = 0.3;
        btnplay.display = "none";
        image = 2 ;
        }
        else if (image == 2) {
        document.getElementById('persochoisie').setAttribute("src","image/MikaChoix.gif");
        document.getElementById('persochoisie').style.opacity = 0.3;
        btnplay.display = "none";
        image = 3 ;
        }
        else {
          document.getElementById('persochoisie').setAttribute("src","image/KenChoix.gif");
          document.getElementById('persochoisie').style.opacity = 1;
          btnplay.display = "";
          image = 0 ;
        }
      
      }
      function changeTheme(){
        if (imagetheme == 0) {
        document.getElementById('themechoisie').setAttribute("src","image/theme1.gif");
        document.getElementById('themechoisie').style.opacity = 1;
   
        imagetheme = 1 ;
        }
        else if (imagetheme == 1) {
        document.getElementById('themechoisie').setAttribute("src","image/theme2.gif");
        document.getElementById('themechoisie').style.opacity = 1;
  
        imagetheme = 2 ;
        }
        else if (imagetheme == 2) {
        document.getElementById('themechoisie').setAttribute("src","image/theme5.gif");
        document.getElementById('themechoisie').style.opacity = 1;
   
        imagetheme = 3 ;
        }
        else if (imagetheme == 3) {
            document.getElementById('themechoisie').setAttribute("src","image/theme4.gif");
            document.getElementById('themechoisie').style.opacity = 1;
          
            imagetheme = 4 ;
            }
            else if (imagetheme == 4) {
                document.getElementById('themechoisie').setAttribute("src","image/theme6.gif");
                document.getElementById('themechoisie').style.opacity = 1;
              
                imagetheme = 5 ;
                }
                else if (imagetheme == 5) {
                    document.getElementById('themechoisie').setAttribute("src","image/theme7.gif");
                    document.getElementById('themechoisie').style.opacity = 1;
                  
                    imagetheme = 6 ;
                    }
                    else if (imagetheme == 6) {
                        document.getElementById('themechoisie').setAttribute("src","image/theme8.gif");
                        document.getElementById('themechoisie').style.opacity = 1;
                      
                        imagetheme = 7 ;
                        }
                        else if (imagetheme == 7) {
                            document.getElementById('themechoisie').setAttribute("src","image/theme9.gif");
                            document.getElementById('themechoisie').style.opacity = 1;
                          
                            imagetheme = 8 ;
                            }
                            else if (imagetheme == 8) {
                                document.getElementById('themechoisie').setAttribute("src","image/theme10.gif");
                                document.getElementById('themechoisie').style.opacity = 1;
                              
                                imagetheme = 9 ;
                                }
        else {
          document.getElementById('themechoisie').setAttribute("src","image/theme3.gif");
          document.getElementById('themechoisie').style.opacity = 1;
     
          imagetheme = 0 ;
        }
        urlimagetheme = document.getElementById('themechoisie').getAttribute("src") ;
        document.getElementById('lienjeu').setAttribute("href","jeu.html ?"+urlimagetheme);
      }


$(document).ready(function () {
  let button1 = document.querySelector('#start')
    
    
  button1.addEventListener('click', ()=>{
      StartGame();
      document.getElementById('musiquetahlesfou1').play();
    
      
  });
    move()
    let temps = 1;
    let point;
    let game;
    //point = setInterval(diminuerTemps, 1000)
    

  function diminuerTemps() {
  timerElement.innerText = temps
  document.getElementById("score").innerText = temps
  temps++  
}
    let button = document.querySelector('#start')
    //let button2 = document.querySelector('#restart')
    let button3 = document.querySelector('#btnplay')
    //let button4 = document.querySelector('#go2')
    button.addEventListener('click', ()=>{
        ChoixPerso();
     })
 
   button3.addEventListener('click', ()=>{
    choixTheme();
})
//button4.addEventListener('click', ()=>{
  //  jeu();
//})
var i = 1;                  //  
    function myLoop() {           
    }
    
    function StartGame(){
        $('#lefond').css("display","none");
        $('#menu').css("display","none");
        $('#menuD').css("display","none");
        $('#jeu1').css("display","block");
        $('#cercle').attr('src', 'image/goku.png');
        $('#cercle').offset({top: 490});
        $('#1').offset({top: -210});
        $('#1').css("display","block");
       // document.body.style.backgroundImage = "url('image/fond.gif')";
        temps = 0;
        point = setInterval(diminuerTemps, 500);
        game =  setInterval(myLoop, 1);
       // myLoop();
    }
    function ChoixPerso(){
        $('#menu').css("display","none");
        $('#choixPerso').css("display","block");
       // myLoop();
    }

    function choixTheme(){
        $('#loading').css("display","none");
        $('#menu').css("display","none");
        $('#choixPerso').css("display","none");
        $('#choixtheme').css("display","block");
       // myLoop();
    }
    function jeu(){
       
        document.body.style.backgroundImage = "url("+ document.getElementById('themechoisie').src +")";
       // myLoop();
    }

    function endgame() {
        EndParty();
    }

    function retourMenu() {
        $('#lefond').css("display","block");
        $('#menu').css("display","block");
        $('#jeu1').css("display","none");
     }
  
    function EndParty(){
            window.clearInterval(point);
            window.clearInterval(game);
            $('#menuD').show();
            console.log(point);
}

    $(document).keypress(function (event) {
           console.log(event.key);
            var leftr = $('#cercle').offset().left + 50;
            var topt = $('#cercle').offset().top - 50;
            var downt = $('#cercle').offset().top + 50;
            var rightt = $('#cercle').offset().left - 50;
            
            if ($(window).width() - ($('#cercle').width() + $('#cercle').offset().left) > 10) {
                if (event.key == "d") {   
                    $('#cercle').offset({ left: leftr });
                    
                }
            }
            if ($('#cercle').offset().left > 10) {
                if (event.key == "q") {
                    $('#cercle').offset({ left: rightt  });
            }      
                }
            if ($('#cercle').offset().top < 473) {
                if (event.key == "s") {
                    $('#cercle').offset({ top: downt });
                }     
            }
            if ($('#cercle').offset().top > 4) {
                if (event.key == "z") {
                    $('#cercle').offset({ top: topt });
           }
                } 
    })
    
});


