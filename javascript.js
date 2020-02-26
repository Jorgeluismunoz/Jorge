//Jorge Munoz, Assignment 1.
//CSD 122 Javascript and JQery.
//javascript.js, 01/14.2020.
$(document).ready(function() {
    var youWin = 0;      //To hold number of times user wins.
    var computerWin = 0; //To hold number of times computer wins.
    var countTime = 0;   //To hold number of times of game, inluding tie.
    var chooses = ["📄","✂️", "🌑"]; //Array that hold the three options: 0(paper), 1(scissor) or 2(rock).  
    
//------------------ User choose--------------------------------------------------
    //Main function, when the user chose one button execute ...
    //with avariable value 1(paper), 2(scissor) or 3(rock).
//function pick(PlayerChoose){  
    
    $('input').on('click', function (e) {
        
        var PlayerChoose = $(this).data("value");     
        //Function called with a variable PlayerChoose(1, 2 or 3).
        $( "input" ).fadeIn( "puff" );
        
        $("#Player1").html(chooses[PlayerChoose]);
        
                                
//----------------- Computer choose------------------------------------------------
        //The function is not closed, coninues. Calculate computer chose by random methed.
        var ComputerChoose = Math.floor((Math.random() * 3) + 1);  
        //Math method to calculate a random number between 1 and 3.
        if (ComputerChoose == 1) ComputerChoose = 0 ;       //assing value of array[position] to text.
                                    //Random(1) = Array[0] = paper,
        else if(ComputerChoose == 2) ComputerChoose = 1;        //Random(3) = Array[2] = rock,
        
        else if(ComputerChoose == 3) ComputerChoose = 2;
        
        $("#Player2").html(chooses[ComputerChoose]); 
        //Change the HTML content of a tag element with id=Player2 value.

//----------------------- Result -------------------------------------------------
        //Once both players have choose, determnate who wins.
        if(PlayerChoose == ComputerChoose ){ //If User and computer choose the same, result tie.
            $("#result").html("😴"+chooses[PlayerChoose]+" The result is a tie! "+chooses[ComputerChoose]+"😑");
            countTime++; //To hold number of time played.
        }
        else if(PlayerChoose == 0 && ComputerChoose == 1){ //If user choose paper and computer choose scissor, computer wins.
            $("#result").html("😡✋ Scissor wins!(Computer) ✌😀");
            computerWin++; //To hold number of time computer wins.
            countTime++; //To hold number of time played.
        }
        else if(PlayerChoose == 0 && ComputerChoose == 2){ //If user choose paper and computer choose rock, you wins.
            $("#result").html("😄✋ Paper wins(You) ✊😠");
            youWin++; //To hold number of time user wins.
            countTime++; //To hold number of time played.
        }
        else if(PlayerChoose == 1 && ComputerChoose == 0){ //If user choose scissor and computer choose paper, you wins.
            $("#result").html("😆✌ Scissor wins!(You) ✋😭");
            youWin++; //To hold number of time user wins.
            countTime++; //To hold number of time played.
        }
        else if(PlayerChoose == 1 && ComputerChoose == 2){ //If user choose scissor and computer choose rock, computer wins.
            $("#result").html("😱✌ Rock wins!(Computer) ✊😝");
            computerWin++; //To hold number of time computer wins.
            countTime++; //To hold number of time played.
        }
        else if(PlayerChoose == 2 && ComputerChoose == 0){ //If user choose rock and computer choose paper, computer wins.
            $("#result").html("😢✊ Paper wins(Computer) ✋😂");
            computerWin++; //To hold number of time computer wins.
            countTime++; //To hold number of time played.
        }
        else if(PlayerChoose == 2 && ComputerChoose == 1){ //If user choose rock and computer choose scissor, you wins.
            $("#result").html("😜✊ Rock wins!(You) ✌😨");
            youWin++; //To hold number of time user wins.
            countTime++; //To hold number of time played.
        } 

//----------------------- Count -----------------------------------------------------
//Assign accumulated value inside tag element wiht each id. 

        $("#countYouWin").html(youWin);
        $("#countComputerWin").html(computerWin);
        $("#countTimeGame").html(countTime);
    });
    $("input").hover(function() {
        $(this).addClass('transition');
        $(this).css('opacity','1');
    }, function() {
        $(this).removeClass('transition');
        $(this).css('opacity','0.7');
    });
});
