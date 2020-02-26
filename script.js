$(document).ready(function() {
    // hide the paragraph when clicked
	$('.logo').click(function() {
		
	});

	// Fade sections when mouse enters/leaves
    $(".logo").hover(function() {
        $(this).addClass('transition');
        $(this).css('opacity','1');
    }, function() {
        $(this).removeClass('transition');
        $(this).css('opacity','0.7');
    });
    $("i").hover(function() {
        $(this).addClass('transition');
        $(this).css('opacity','1');
    }, function() {
        $(this).removeClass('transition');
        $(this).css('opacity','0.7');
    });
  
    // Toggle elements when button clicked
    jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
    });

//-------------Contact section--------------------
    //Mouse over and leave//
    $(":submit").mouseover(function() {
        $(this).css("background-color","#0b2255");
    });
    $(":submit").mouseleave(function() {
        $(this).css("background-color","#0b75db");
    });
    $(":button").mouseover(function() {
        $(this).css("background-color","#0b2255");
    });
    $(":button").mouseleave(function() {
        $(this).css("background-color","#0b75db");
    });
    //Validation//
    $("#Submit").click(     //The click event occurs when the element with id join_list is clicked.
		function() {           //and call a function that verificates the input fiels.
			var emailAddress = $("#email_address").val();  //Store in a variable the element we will use, email.
			var first_name = $("#first_name").val();         //to hold the frist name input.
            var last_name = $("#last_name").val();         //to hold the frist name input.
            var subject = $("#subject").val(); 
            var isValid = true; //to hold a boolean, if all inputs are valid, then is true.
            var patternEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i; //Pattern for validating of email.
            //Every letter in the email has match with pattern: like Jorgeluis@gmail.com or s-jorge.munoz@lwtech.edu.
			//metacharacter \b s used to find a match at the beginning or end of a word. Inside [incloude any letter or sign like -,_,%]. The end $ has to match with these, no other character like number.
			//(+) Match the preceding character 1 or more times. next @ and more conteins of letters and sing. next the domanin, no number or sings (org,com,edu,etc) betwen 2 and 4 characters.
			var patternName = /^[a-z]+[a-z ]*$/i; //Pattern for validating of name. The first character is only letter the secon can be space or letter. The end $ has to match with these, no other chaaracter like number.

			
			// validate the first name entry  
			if (first_name == "") {      //If is empty, show not valid empty input.
				$("#first_name").next().text("This field is required.");  //Inser message error in the element immediately following the specified element.
				isValid = false;         //Asign value to isValid as false.
			}  else if (!patternName.test(first_name)) { //If the pattern is false, (incorrect match)
				$("#first_name").next().text("No valid Name"); //Inser message error in the element immediately following the specified element.
				isValid = false;         //Asign value to isValid as false.
			}else {
				$("#first_name").next().text("");       //No error, Inser empty string "" in the element immediately following the specified element.
            }	
            if (last_name == "") {      //If is empty, show not valid empty input.
				$("#last_name").next().text("This field is required.");  //Inser message error in the element immediately following the specified element.
				isValid = false;         //Asign value to isValid as false.
			}  else if (!patternName.test(last_name)) { //If the pattern is false, (incorrect match)
				$("#last_name").next().text("No valid Name"); //Inser message error in the element immediately following the specified element.
				isValid = false;         //Asign value to isValid as false.
			}else {
				$("#last_name").next().text("");       //No error, Inser empty string "" in the element immediately following the specified element.
			}	
            
            			// validate the first email address
			if (emailAddress == "") {  //If is empty, show not valid empty input. 
				$("#email_address").next().text("This field is required."); //Inser message error in the element immediately following the specified element.
				isValid = false;        //Asign value to isValid as false.
			} else if (!patternEmail.test(emailAddress)) { //If the pattern is false, (incorrect match)
				$("#email_address").next().text("No valid email address"); //Inser message error in the element immediately following the specified element.
				isValid = false;        //Asign value to isValid as false.
			} else {                    //If there is not any invalid input.
				$("#email_address").next().text("");   //No error, Inser empty string "" in the element immediately following the specified element.
            } 
            
            if (subject == "") {      //If is empty, show not valid empty input.
				$("#subject").next().text("This field is required.");  //Inser message error in the element immediately following the specified element.
				isValid = false;         //Asign value to isValid as false.
            } else {                    //If there is not any invalid input.
				$("#subject").next().text("");   //No error, Inser empty string "" in the element immediately following the specified element.
            }   
            if (isValid) {                  //All input are true
				$("#email_form").submit();  //action="join.html"
			}	
		}// end function
	);	 // end click
	$("#clear").click(function() {               //With a click in Clear Emtires button call function the cliear fields.
        $('input[type="text"]').val('').next().text("*");//All tags input of type text (not buttons) setting them with an empty string "".Inser * in the element immediately following the specified element.
        $("#first_name").focus();                    //This function need this focus too for reposisionet in the firs field.
		});
    $('input[type="text"]').dblclick(function() {//Double click call funtion delate specific texbox.
      $(this).val('');                           //This (not other input) value = "" (empty).
    });
    $("#first_name").focus(); 
  });