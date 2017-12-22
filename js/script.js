//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

/* global $*/

//FUNCTIONS



// DOCUMENT READY FUNCTION

$( document ).ready(function() {


        
        $("#click").click(function() {
                var userChoice = $("input").val();
                $("#insertchoice").html(userChoice);
                var choices = ["Rock", "Paper", "Scissors"];
                var randOm = Math.floor(Math.random()*3);
                console.log(choices[randOm]);
                var computerChoice = choices[randOm];
                $("#insertchoice2").html(computerChoice);
                
                if (userChoice === computerChoice){
                        $("#win").html("Tie!");
                }
                if (userChoice === "Paper" && computerChoice === "Rock"){
                        $("#win").html("User wins!");
                }
                if (userChoice === "Paper" && computerChoice === "Scissors"){
                        $("#win").html("Computer wins!");
                }
                if (userChoice === "Rock" && computerChoice === "Paper"){
                        $("#win").html("Computer wins!");
                }
                if (userChoice === "Rock" && computerChoice === "Scissors"){
                        $("#win").html("User wins!");
                }
                if (userChoice === "Scissors" && computerChoice === "Paper"){
                        $("#win").html("User wins!");
                }
                if (userChoice === "Scissors" && computerChoice === "Rock"){
                        $("#win").html("Computer wins!");
                }
                

        });
        
        
        


});