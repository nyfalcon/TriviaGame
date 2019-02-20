 // Hide questions until start button is pressed
 $('#main').hide();
 $('#start').on('click',function(){
     $('#main').show();
     $('#start').hide();
 //Hide #results until timer stops, show #results when timer stops
   //  $('#results').hide();

 });

 // Establish timer


 function startTime () {
     var x= new Date().getSeconds();
    console.log(x);

 }

 //Freeze #game when timer stops

 //Check questions for result

     $('#end').on('click',function(){
     $('#game').hide();
     $('#results').show();
    

 });
     
     // correct count
     var correctAns = [];
     // incorrect function

     // incorrect count
     var incorrectAns = [];

     // Set Answer Key
     var q1Ans = "Lane Cake"
     var q2Ans = "CO"
     var q3Ans = "Chicken Tikka Masala"
     var q4Ans = "Pepsi-Cola"
     var q5Ans = "Watermelon"

    
     // Add user inputs to below variables
     
     var input1 = ""
     var input2 = ""
     var input3 = ""
     var input4 = ""
     var input5 = ""

     // Capture user inputs for each question and compare to Answer Key
 
     $('#end').on('click',function(){
         var q1Input =  $('#q1:checked').val();
         input1 = q1Input;
         // if correct, then add answer value to correctAns array
         if (input1==q1Ans) {
             correctAns.push(input1,);
         } 
          // if incorrect, then add answer value to incorrectAns array
         else {
             incorrectAns.push(input1,);
         };
         //console.log(input1); 
         console.log("Correct:" + correctAns);
         console.log("Incorrect:" + incorrectAns);
     
     var q2Input = $('#q2:checked').val();
         input2 = q2Input;
         if (input2==q2Ans) {
             correctAns.push(input2,);
         } 
         else {
             incorrectAns.push(input2,);
         };
         //console.log(input2); 
         console.log("Correct:" + correctAns);
         console.log("Incorrect:" + incorrectAns);

     var q3Input = $('#q3:checked').val();
         input3 = q3Input;
         if (input3==q3Ans) {
             correctAns.push(input3,);
         } 
         else {
             incorrectAns.push(input3,);
         };
         //console.log(input3); 
         console.log("Correct:" + correctAns);
         console.log("Incorrect:" + incorrectAns);
     
     var q4Input = $('#q4:checked').val();
         input4 = q4Input;
         if (input4==q4Ans) {
             correctAns.push(input4,);
         } 
         else {
             incorrectAns.push(input4,);
         };
         //console.log(input4); 
         console.log("Correct:" + correctAns);
         console.log("Incorrect:" + incorrectAns);

     var q5Input = $('#q5:checked').val();
         input5 = q5Input;
         if (input5==q5Ans) {
             correctAns.push(input5);
         } 
         else {
             incorrectAns.push(input5);
         };
         alert(input5); 
         console.log("Correct:" + correctAns);
         console.log("Incorrect:" + incorrectAns);
        
     // Count number of correct answers  
         var c = correctAns.length;
         alert('# of Correct Answers:'+ c);
      
     // Count number of incorrect answers    
         var i = incorrectAns.length;
         alert('# of Incorrect Answers:'+ i);
     
     });
 
        