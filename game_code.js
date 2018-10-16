var krestik = 'X';
var nolik = 'O';
var winCombos = ['123',
                 '456',
                 '789',
                 '147',
                 '258',
                 '369',
                 '159',
                 '357'];
var playerOne = krestik;
var playerTwo = nolik;
var flag = false;
var flag1 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;
var flag10 = false;
var count = 0;
var first, second, third;

function endGame(){
       $('.block').text('');
       $('.block').css("background-color","");
       $('#console').text('Новая игра:');
       count = 0;
       flag = false;
       flag1 = false;
}
function startNewGame(){
   $('#newGame').click(function(){
       $('.block').text('');
       $('.block').css("background-color","");
       $('#console').text('Новая игра:');
       count = 0;
       flag = false;
       flag1 = false;
     });
}


     function checkCompWin(znak1){
          for ( var i = 0 ; i < winCombos.length; i++){
            var first = 'kletka' + winCombos[i].substr(0,1);
            var second = 'kletka' + winCombos[i].substr(1,1);
            var third = 'kletka' + winCombos[i].substr(2,1);
             
            if( $('.'+first).text() == znak1 && $('.'+second).text() == znak1 && $('.'+third).text() == znak1 ){
                $('.'+first+',.'+second+',.'+third).css("background-color", "#83e2c3");
                $('#console').text('Вы проиграли!');
                setTimeout(function(){endGame();},500);
            }    
        }
    }
     


function winCheck(znakKrestik,znakNolik){
  checkCompWin(znakNolik);

  
     if ($('.kletka1').text() == znakNolik && $('.kletka2').text() == znakNolik && $('.kletka3').text() == ''){
          $('.kletka3').text(znakNolik);
          flag4 = false;
     } else if ($('.kletka4').text() == znakNolik && $('.kletka5').text() == znakNolik && $('.kletka6').text() == ''){
          $('.kletka6').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka7').text() == znakNolik && $('.kletka8').text() == znakNolik && $('.kletka9').text() == ''){
          $('.kletka9').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == znakNolik && $('.kletka4').text() == znakNolik && $('.kletka7').text() == ''){
          $('.kletka7').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka2').text() == znakNolik && $('.kletka5').text() == znakNolik && $('.kletka8').text() == ''){
          $('.kletka8').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == znakNolik && $('.kletka6').text() == znakNolik && $('.kletka9').text() == ''){
          $('.kletka9').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == znakNolik && $('.kletka5').text() == znakNolik && $('.kletka9').text() == ''){
          $('.kletka9').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == znakNolik && $('.kletka5').text() == znakNolik && $('.kletka7').text() == ''){
          $('.kletka7').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == znakNolik && $('.kletka2').text() == '' && $('.kletka3').text() == znakNolik){
          $('.kletka2').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka4').text() == znakNolik && $('.kletka5').text() == '' && $('.kletka6').text() == znakNolik){
          $('.kletka5').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka7').text() == znakNolik && $('.kletka8').text() == '' && $('.kletka9').text() == znakNolik){
          $('.kletka8').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == znakNolik && $('.kletka4').text() == '' && $('.kletka7').text() == znakNolik){
          $('.kletka4').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka2').text() == znakNolik && $('.kletka5').text() == '' && $('.kletka8').text() == znakNolik){
          $('.kletka5').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == znakNolik && $('.kletka6').text() == '' && $('.kletka9').text() == znakNolik){
          $('.kletka6').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == znakNolik && $('.kletka5').text() == '' && $('.kletka9').text() == znakNolik){
          $('.kletka5').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == znakNolik && $('.kletka5').text() == '' && $('.kletka7').text() == znakNolik){
          $('.kletka5').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == '' && $('.kletka2').text() == znakNolik && $('.kletka3').text() == znakNolik){
          $('.kletka1').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka4').text() == '' && $('.kletka5').text() == znakNolik && $('.kletka6').text() == znakNolik){
          $('.kletka4').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka7').text() == '' && $('.kletka8').text() == znakNolik && $('.kletka9').text() == znakNolik){
          $('.kletka7').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == '' && $('.kletka4').text() == znakNolik && $('.kletka7').text() == znakNolik){
          $('.kletka1').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka2').text() == '' && $('.kletka5').text() == znakNolik && $('.kletka8').text() == znakNolik){
          $('.kletka2').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == '' && $('.kletka6').text() == znakNolik && $('.kletka9').text() == znakNolik){
          $('.kletka3').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == '' && $('.kletka5').text() == znakNolik && $('.kletka9').text() == znakNolik){
          $('.kletka1').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == '' && $('.kletka5').text() == znakNolik && $('.kletka7').text() == znakNolik){
          $('.kletka3').text(znakNolik);
          flag4 = false;   
  
    
   } else {
   
     
      if ($('.kletka1').text() == znakKrestik && $('.kletka2').text() == znakKrestik && $('.kletka3').text() == ''){
          $('.kletka3').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka4').text() == znakKrestik && $('.kletka5').text() == znakKrestik && $('.kletka6').text() == ''){
          $('.kletka6').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka7').text() == znakKrestik && $('.kletka8').text() == znakKrestik && $('.kletka9').text() == ''){
          $('.kletka9').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == znakKrestik && $('.kletka4').text() == znakKrestik && $('.kletka7').text() == ''){
          $('.kletka7').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka2').text() == znakKrestik && $('.kletka5').text() == znakKrestik && $('.kletka8').text() == ''){
          $('.kletka8').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == znakKrestik && $('.kletka6').text() == znakKrestik && $('.kletka9').text() == ''){
          $('.kletka9').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == znakKrestik && $('.kletka5').text() == znakKrestik && $('.kletka9').text() == ''){
          $('.kletka9').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == znakKrestik && $('.kletka5').text() == znakKrestik && $('.kletka7').text() == ''){
          $('.kletka7').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == znakKrestik && $('.kletka2').text() == '' && $('.kletka3').text() == znakKrestik){
          $('.kletka2').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka4').text() == znakKrestik && $('.kletka5').text() == '' && $('.kletka6').text() == znakKrestik){
          $('.kletka5').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka7').text() == znakKrestik && $('.kletka8').text() == '' && $('.kletka9').text() == znakKrestik){
          $('.kletka8').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == znakKrestik && $('.kletka4').text() == '' && $('.kletka7').text() == znakKrestik){
          $('.kletka4').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka2').text() == znakKrestik && $('.kletka5').text() == '' && $('.kletka8').text() == znakKrestik){
          $('.kletka5').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == znakKrestik && $('.kletka6').text() == '' && $('.kletka9').text() == znakKrestik){
          $('.kletka6').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == znakKrestik && $('.kletka5').text() == '' && $('.kletka9').text() == znakKrestik){
          $('.kletka5').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == znakKrestik && $('.kletka5').text() == '' && $('.kletka7').text() == znakKrestik){
          $('.kletka5').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == '' && $('.kletka2').text() == znakKrestik && $('.kletka3').text() == znakKrestik){
          $('.kletka1').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka4').text() == '' && $('.kletka5').text() == znakKrestik && $('.kletka6').text() == znakKrestik){
          $('.kletka4').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka7').text() == '' && $('.kletka8').text() == znakKrestik && $('.kletka9').text() == znakKrestik){
          $('.kletka7').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == '' && $('.kletka4').text() == znakKrestik && $('.kletka7').text() == znakKrestik){
          $('.kletka1').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka2').text() == '' && $('.kletka5').text() == znakKrestik && $('.kletka8').text() == znakKrestik){
          $('.kletka2').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == '' && $('.kletka6').text() == znakKrestik && $('.kletka9').text() == znakKrestik){
          $('.kletka3').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka1').text() == '' && $('.kletka5').text() == znakKrestik && $('.kletka9').text() == znakKrestik){
          $('.kletka1').text(znakNolik);
          flag4 = false;
        } else if ($('.kletka3').text() == '' && $('.kletka5').text() == znakKrestik && $('.kletka7').text() == znakKrestik){
          $('.kletka3').text(znakNolik);
          flag4 = false;
        }  else {
          AI(nolik);
        }
     
     
   }
    checkCompWin(znakNolik);

}

function AI(znakNolik){
  if ( $('.kletka5').text() == '' && flag4 == true){
    $('.kletka5').text(znakNolik);
    flag4 = false;
  } else if ( $('.kletka1').text() == '' && flag4 == true){
    $('.kletka1').text(znakNolik);
    flag4 = false;
  } else if ( $('.kletka9').text() == '' && flag4 == true){
    $('.kletka9').text(znakNolik);
    flag4 = false;
  } else if ( $('.kletka6').text() == '' && flag4 == true){
    $('.kletka6').text(znakNolik);
    flag4 = false;
  } else if ( $('.kletka2').text() == '' && flag4 == true){
    $('.kletka2').text(znakNolik);
    flag4 = false;
  } else if ( $('.kletka8').text() == '' && flag4 == true){
    $('.kletka8').text(znakNolik);
    flag4 = false;
  } else if ( $('.kletka3').text() == '' && flag4 == true){
    $('.kletka3').text(znakNolik);
    flag4 = false;
  } else if ( $('.kletka7').text() == '' && flag4 == true){
    $('.kletka7').text(znakNolik);
    flag4 = false;
  } else if ( $('.kletka4').text() == '' && flag4 == true){
    $('.kletka4').text(znakNolik);
    flag4 = false;
  }
    checkCompWin(znakNolik);
}

function twoPlayerGame(value1,value2){
   count++;
for ( var i = 0 ; i < winCombos.length; i++){
   first = 'kletka' + winCombos[i].substr(0,1);
   second ='kletka' + winCombos[i].substr(1,1);
   third ='kletka' + winCombos[i].substr(2,1);
   if ( $('.' + first).text() == value1 && $('.' + second).text() == value1 && $('.' + third).text() == value1) { 
     $('#console').text('Первый игрок победил!');
     $('.'+first).css("background-color","green");
     $('.'+second).css("background-color","green");
     $('.'+third).css("background-color","green");
    var intervalID = setTimeout( function(){ 
	   endGame();
      alert('Player #1 WIN');
    },500);
     flag1 = true;
   }  else if ( $('.' + first).text() == value2 && $('.' + second).text() == value2 && $('.' + third).text() == value2) {
     $('#console').text('Второй игрок победил!'); 
     $('.'+first).css("background-color","green");
     $('.'+second).css("background-color","green");
     $('.'+third).css("background-color","green");
     intervalID = setTimeout( function(){ 
	   endGame();
     alert('Player #2 WIN');
    },500);
     flag1 = true;
     /*
     * если заполнены 9 элементов и нет комбинации выигрыша крестика или нолика,
     * тогда ничья
     */
   } else if (count == 9 && flag1!=true) {
     $('#console').text('Ничья!');
    }
   }
} 

 $('input').click(function(){
   if ($(this).val() =='2 игрока' ) {
     flag3 = false;
     flag = false;
     $('#character').text('Вы выбрали режим: 2 игрока!');
   }
   if ($(this).val() =='Против компьютера' ) {
     flag3 = true;
     flag = false;
     
     $('#character').text('Вы выбрали режим: Против компьютера!');
   }
   if ($(this).val() =='X' ){
     playerOne = 'X';
     playerTwo = 'O';
     krestik = 'X';
     nolik = 'O';
   } else if ($(this).val() =='O' ){
      playerOne = 'O';
      playerTwo = 'X';
      krestik = 'O';
      nolik = 'X';
      if($(this).text() == ''){
      
        
        
     
        //проверка игрок победил
         for ( var i = 0 ; i < winCombos.length; i++){
         
            var first = 'kletka' + winCombos[i].substr(0,1);
            var second = 'kletka' + winCombos[i].substr(1,1);
            var third = 'kletka' + winCombos[i].substr(2,1);
             
            if( $('.'+first).text() == krestik && $('.'+second).text() == krestik && $('.'+third).text() == krestik ){
                $('.'+first).css("background-color","green");
                $('.'+second).css("background-color","green");
                $('.'+third).css("background-color","green");
                $('#console').text('Вы выиграли!');
               var interval = setTimeout(function(){endGame();},500);
            }
        }
              flag4 = true; 
        var IntervalID = setTimeout ( function(){
           winCheck(krestik,nolik); 
        },500);
        
     $(this).text(playerOne); 
      }
      startNewGame();
   }
});
$('.block').click(function(){
 
  //comp game
  if (flag3 == true){
    
    
 
  
      if($(this).text() == ''){
      
        
        $(this).text(playerOne); 
     
        //проверка игрок победил
         for ( var i = 0 ; i < winCombos.length; i++){
         
            var first = 'kletka' + winCombos[i].substr(0,1);
            var second = 'kletka' + winCombos[i].substr(1,1);
            var third = 'kletka' + winCombos[i].substr(2,1);
             
            if( $('.'+first).text() == krestik && $('.'+second).text() == krestik && $('.'+third).text() == krestik ){
                $('.'+first).css("background-color","green");
                $('.'+second).css("background-color","green");
                $('.'+third).css("background-color","green");
                $('#console').text('Вы выиграли!');
               var interval = setTimeout(function(){endGame();},500);
            }
        }
              flag4 = true; 
        var IntervalID = setTimeout ( function(){
           winCheck(krestik,nolik); 
        },500);
        
     
      }
      startNewGame();
    
     
 } //end comp game 
  else {
       if($(this).text() == ''){
    //сначала ходит первый игрок, затем второй
    if (flag == false){
    $(this).text(playerOne);
      $('#console').text('Второй игрок ходит: ');
      
      flag = true;
    } else { 
      $(this).text(playerTwo);
      $('#console').text('Первый игрок ходит: ');
      flag = false; 
    } 
twoPlayerGame(playerOne,playerTwo);
startNewGame();
   } 
  }
    
  
  
  
}); 