
var InputName;



// --------------------------Category Js Starts-------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// var Name = document.getElementById('Name');
var target = document.getElementById('categoryAll');
let ResultBtn = document.querySelector('.see-result-btn');
let Result = document.getElementById('Result');
// let selectFirst = document.getElementById('selectFirst');

function selectCategory()
{
      InputName = document.getElementById('Name').value;
      if(InputName=="")
      {
            alert("Please Enter Your Name");
      }else{
            categoryAll.style.display = 'block';
      document.getElementById('Name').value = '';
      }
      
      
}
// --------------------------Category Js Starts-------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//OptionBox question -----------------------------Starts------------------>>>>>>>>>>>>>>>>>>

let question_number_element = document.getElementById("current-question-num");
let question_txt_element = document.getElementById("question-text");
let option_1_element = document.getElementById("option1");
let option_2_element = document.getElementById("option2");
let option_3_element = document.getElementById("option3");
let option_4_element = document.getElementById("option4");
let next_button = document.getElementById("next-button");
let quiz_score = document.getElementById("correct-answer");
let time_element = document.getElementById("timer");

var current_question_number=0;
let score=0;
var time;
const total_time = 10;
var sec = total_time;
// ============handle timer ==========================Starts================
function timer(a){
      time_element.innerHTML = sec;
      sec--;
      if(sec==0){ 
            sec = total_time;
            clearInterval(time);
            current_question_number++;
            if(current_question_number<10){
             showQuestion(a);}
      }
}
// ============handle timer ==========================Ends================
// function for show Quiz -------
var tempObj;
function showQuestion(q){
       tempObj=q;
     let objLength=q.length;
      sec = total_time; //asign sec to total Time of timer----
      clearInterval(time);
      timer(q);
      time = setInterval(timerFun,1000);
      document.querySelectorAll("input[name = opt]").forEach(option=> option.checked=false);
      
      if(current_question_number>=objLength){
            clearInterval(time);
            current_question_number=0;
            result();
      }
      question_number_element.innerHTML = (current_question_number+1) + "/10 ";
      question_txt_element.innerHTML = q[current_question_number].question;
      option_1_element.innerHTML = q[current_question_number].opt1;
      option_2_element.innerHTML = q[current_question_number].opt2;
      option_3_element.innerHTML = q[current_question_number].opt3;
      option_4_element.innerHTML = q[current_question_number].opt4;
      quiz_score.innerHTML = score;

      function timerFun()
      {
            if(current_question_number<=10){
            timer(tempObj);}
      }
}

// ================== ShowQuestion2 ============================

// ===============================================================

next_button.addEventListener('click',()=>{
      let optionIdSelected = document.querySelector('input[name = opt]:checked');
      if(optionIdSelected==null)
      {
            alert("Please Select One Option");
      }else{
            let option_correct = tempObj[current_question_number].correct;
            if(optionIdSelected.id==option_correct){
                  score++;
            }
            current_question_number ++;
            if(current_question_number>=tempObj.length){
                  current_question_number=0;
                  clearInterval(time);
                  result();
                  localStorage.setItem("score",score);
                  localStorage.href = "./resultPage.html";
            }else{
                  showQuestion(tempObj);
            }
      }
});



// -----------Function for Result Ends------------------------------------->>>>>>
// Result function Starts -------------------------------------------------------

function result(){
      $("#questionScreen").hide();
      $("#Screen").hide();
      $("#resultScreen").show();
      document.getElementById('UserName').innerHTML = `${InputName}`;
      document.getElementById('Totaltime').innerHTML = `${ "1" + time }`;
      document.getElementById('attemptQuestion').innerHTML = `${10 - score}`;
      document.getElementById('correctAnswers').innerText = `${score}`;
      document.getElementById('wrongAnswers').innerText = `${10 - score}`;
      document.getElementById('percentage').innerText = `${score * 100 / 10}`;
      
      score=0;

}

// Result function Ends -------------------------------------------------------
// --------------------------Quiz Box Js Starts-------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ------------------------ SelectCategory CategoryFirst Onclick Function Start --------------------------------------->

function selectFirst(){
      $("#questionScreen").hide();
      $("#Screen").show();
      showQuestion(quiz);
      timer(quiz);
      quizHeader.innerHTML="Pipes and Certains";
}

function selectSecond(){
      $("#questionScreen").hide();
      $("#Screen").show();
      timer(quizTwo);
      showQuestion(quizTwo);
      quizHeader.innerHTML="Probability";
}

// -----------------------SelectThird-category----------->>>
function selectThird(){
      $("#questionScreen").hide();
      $("#Screen").show();
      timer(quizThird);
      showQuestion(quizThird);
      quizHeader.innerHTML="Problem On Ages";
}

// ------------------------------------SelectFourth-Category-------------->>>>>>>>>

function selectFourth(){
      $("#questionScreen").hide();
      $("#Screen").show();
      timer(quizFour);
      showQuestion(quizFour);
      quizHeader.innerHTML="Profit And Loss";
}
// ----------------------------------------------------------------------------------------------------------------
// ------------------------ SelectCategory CategoryFirst  Onclick Function Ends --------------------------------------->

// ---------------------------------Restart Quiz Challenge Using Start Again Btn ------------------------>
function RestartQuiz(){
      showQuestion(tempObj);
      timer(tempObj);
      $("#Screen").show();
      $("#resultScreen").hide();
}
// ---------------------------------Restart Quiz Challenge Using Start Again Ends ------------------------>
// ---------------------------------Restart App Using Go To Home Btn  Starts ------------------------>
function RestartApp(){
      $("#questionScreen").show();
      $("#categoryAll").hide();
      // $("#Screen").hide();
      $("#resultScreen").hide();
}
// ===========================================================================
const quiz = [
      {
            // For Pipes And Cisterns button
            question: "Pipe A can fill in 16 minutes and pipe B empties it in 24 minutes.If both pipes are opened together, after how many minutes should B is closed,so that the tank is filled in 30 minutes?",
            opt1: "21 minutes" ,
            opt2: "20 minutes" ,
            opt3: "18 minutes" ,
            opt4: "15 minutes" ,
            correct: "opt1",
      },
      {
            // For Pipes And Cisterns button
            question: "One pipe can fill tank three times as fast as another pipe.If together the two pipes can fill the tank in 36 minutes,the the slower pipe alone will be able to fill the tank in",
            opt1: "144 mins",
            opt2: "140 mins",
            opt3: "136 mins",
            opt4: "132 mins",
            correct: "opt1",
      },
      {
            // For Pipes And Cisterns button
            question: "Two pipes A & B can fill a cistern in 24 minues and 36 minutes respectively.If both the pipes are opened together, after how much time B should be closed so that the tank is full in 20 minutes?",
            opt1: "5 minutes",
            opt2: "9 minutes",
            opt3: "6 minutes",
            opt4: "11 minutes",
            correct: "opt3",
      },
      {
            // For Pipes And Cisterns button
            question: "Two inlet pipes A and B together can fill a tank in 24 min, and it takes 6 min more when one leak is developed in the tank.Find the time taken by leak alone to empty the tank.",
            opt1: "3 hours",
            opt2: "4 hours",
            opt3: "2.5 hours",
            opt4: "2 hours",
            correct: "opt4",
      },
      {
            // For Pipes And Cisterns button
            question: "Two pipes A and B together can fill a Tank in 6 hours.If pipe A can fill 5 hours faster than pipe B,in how many hours pipe B alone can fill the tank?",
            opt1: "12",
            opt2: "10",
            opt3: "18",
            opt4: "15",
            correct: "opt4",
      },
      {
            // For Pipes And Cisterns button
            question: "A tap can fill in 8 hrs.After half the tank is filled,three more similar taps are opened.What is the total time taken to fill the tank completely?",
            opt1: "6 hrs",
            opt2: "5 hrs",
            opt3: "3 hrs",
            opt4: "4 hrs",
            correct: "opt2",
      },
      {
            // For Pipes And Cisterns button
            question: "Pipe X and Z can filled a tank in 18 hours and in 4 hours.If pipe X is opened at 9:00 am and pipe Z is opened at 4:00 pm,then at what time will tank be filled.",
            opt1: "6:00 pm",
            opt2: "4:00 pm",
            opt3: "5:00 am",
            opt4: "9:00 am",
            correct: "opt1",
      },
      {
            // For Pipes And Cisterns button
            question: "Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
            opt1: "3 9/17 hours",
            opt2: "1 13/17 hours",
            opt3: "2 8/11 hours",
            opt4: "4 1/2 hours",
            correct: "opt1",
      },
      {
            // For Pipes And Cisterns button
            question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long it will take to fill the tank?",
            opt1: "10 mins",
            opt2: "12 mins",
            opt3: "15 mins",
            opt4: "20 mins",
            correct: "opt2",
      },
      {
            // For Pipes And Cisterns button
            question: "Pipe A can fill a tank in 45 hrs and pipe B can fill it in 36 hrs. If both the pipes are opened in the empty tank. In how many hours will it be full?",
            opt1: "10 hr",
            opt2: "15 hr",
            opt3: "20 hr",
            opt4: "28 hr",
            correct: "opt3",
      },
]

// -------- Function For PrintQuestions Importing CategoryThird-Problem On Ages-Questions  Starts ---------------------->
const quizTwo = [
      {
            // Probability Question button
            question: " An event in the probability that will never be happened is called as -",
            opt1: "Unsure event",
            opt2: "Sure event",
            opt3: "Possible event",
            opt4: "Impossible event",
            correct: "opt4",
      },
      {
          // Probability Question button
            question: "What will be the value of P(not E) if P(E) = 0.07?",
            opt1: "90",
            opt2: "007",
            opt3: "93",
            opt4: "72",
            correct: "opt3",
      },
      {
            //      Probability Question button
            question: "What will be the probability of getting odd numbers if a dice is thrown?",
            opt1: "1/2",
            opt2: "2",
            opt3: "4/2",
            opt4: "5/2",
            correct: "opt1",
      },
      {
                 // Probability Question button
      question: "What is the probability of getting a sum as 3 if a dice is thrown?",
      opt1: "2/18",
      opt2: "1/18",
      opt3: "4",
      opt4: "1/36",
      correct: "opt2",
      },
      {
                 // Probability Question button
      question: " What is the probability of getting an even number when a dice is thrown?",
      opt1: "1/6",
      opt2: "1/2",
      opt3: "1/3",
      opt4: "1/4",
      correct: "opt2",
      },
      {
                  // Probability Question button
      question: "The probability of getting two tails when two coins are tossed is -",
      opt1: "1/6",
      opt2: "1/2",
      opt3: "1/3",
      opt4: "1/4",
      correct: "opt4",
      },
      {
                  // Probability Question button
      question: "What is the probability of getting the sum as a prime number if two dice are thrown?",
      opt1: "5/24",
      opt2: "5/12",
      opt3: "5/30",
      opt4: "1/4",
      correct: "opt2",
      },
      {
                  // Probability Question button
      question: "What is the probability of getting atleast one head if three unbiased coins are tossed?",
      opt1: "7/8",
      opt2: "1/2",
      opt3: "5/8",
      opt4: "8/9",
      correct: "opt1",
      },
      {
                  // Probability Question button
      question: "What is the probability of getting 1 and 5 if a dice is thrown once?",
      opt1: "1/6",
      opt2: "1/3",
      opt3: "2/3",
      opt4: "8/9",
      correct: "opt2",
      },
      {
                  // Probability Question button
      question: "What will be the probability of losing a game if the winning probability is 0.3?",
      opt1: "0.5",
      opt2: "0.6",
      opt3: "0.7",
      opt4: "0.8",
      correct: "opt3",
            },
      ]
// -------- Function For PrintQuestions Importing CategoryThird-Problem On Ages-Questions  Ends ---------------------->

// -------- Function For PrintQuestions Importing CategoryThird-Problem On Ages-Questions  Starts ---------------------->

const quizThird = [
      {
            // Problems On Ages Question button
            question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
            opt1: "4 years",
            opt2: "8 years",
            opt3: "10 years",
            opt4: "None of these",
            correct: "opt1",
      },
      {
           // Problems On Ages Question button
            question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
            opt1: "7",
            opt2: "8",
            opt3: "9",
            opt4: "10",
            correct: "opt4",
      },
      {
           // Problems On Ages Question button
      question: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
      opt1: "24",
      opt2: "27",
      opt3: "40",
      opt4: "Cannot be determined",
      correct: "opt1",
      },
      {
                 // Problems On Ages Question button
      question: "Raju age after 15 years will be 5 times his age 5 years back, What is the present age of Raju",
      opt1: "15",
      opt2: "14",
      opt3: "10",
      opt4: "8",
      correct: "opt3",
      },
      {
            // Problems On Ages Question button
      question: "Sachin is younger than Rahul by 7 years. If the ratio of their ages is 7:9, find the age of Sachin",
      opt1: "23.5",
      opt2: "14.5",
      opt3: "12.5",
      opt4: "14.5",
      correct: "opt2",
      },
      {
             // Problems On Ages Question button
      question: "The total age of A and B is 12 years more than the total age of B and C. C is how many year younger than A",
      opt1: "11",
      opt2: "12",
      opt3: "13",
      opt4: "14",
      correct: "opt2",
      },
      {
            // Problems On Ages Question button
      question: "Ram and Shyam’s average age is 65 years. The average age of Ram, Shyam and John is 53 years. What is the age of John?",
      opt1: "29 years",
      opt2: "31 years",
      opt3: "59 years",
      opt4: "45 years",
      correct: "opt1",
      },
      {
                   // Problems On Ages Question button
      question: "The present ages of Aman and Nina are 59 and 37 years, respectively. What was the ratio of the ages of Nina and Aman 13 years ago?",
      opt1: "3:2",
      opt2: "46:25",
      opt3: "12:23",
      opt4: "8:3",
      correct: "opt3",
      },
      {
            // Problems On Ages Question button
      question: "Ramesh's age after 16 years will be 5 times his age 4 years back. What is the present age of Ramesh?",
      opt1: "9 years",
      opt2: "14 years",
      opt3: "16 years",
      opt4: "21 years",
      correct: "opt1",
      },
      {
             // Problems On Ages Question button
      question: " The sum of the ages of 4 children born at the intervals of the 3 years each is 58 years. What is the age of the youngest child?",
      opt1: "4 years",
      opt2: "6 years",
      opt3: "8 years",
      opt4: "10 years",
      correct: "opt4",
      },
      ]
// -------- Function For PrintQuestions Importing CategoryThird-Problem On Ages-Questions  Ends ---------------------->
// -------- Function For PrintQuestions Importing CategoryFourth-Problem On Ages-Questions  Starts ---------------------->
const quizFour = [
      {
           // Problems On Ages Question button
            question: "A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%?",
            opt1: "525",
            opt2: "500",
            opt3: "490",
            opt4: "486",
            correct: "opt4",
      },
      {
          // Problems On Ages Question button
            question: "A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is",
            opt1: "10%",
            opt2: "15%",
            opt3: "20%",
            opt4: "25%",
            correct: "opt3",
      },
      {
            /// Problems On Ages Question button
            question: "A sells a car to B at 10% loss. If B sells it for Rs. 54000 and gains 20%, the cost price of the car for A was",
            opt1: "25000",
            opt2: "50000",
            opt3: "37500",
            opt4: "60000",
            correct: "opt2",
      },
      {
                 // Problems On Ages Question button
      question: "If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is",
      opt1: "25% loss",
      opt2: "20% loss",
      opt3: "25% gain",
      opt4: "20% gain",
      correct: "opt3",
      },
      {
      // Problems On Ages Question button
      question: "The ratio of cost price and selling price is 4:5. The profit percent is",
      opt1: "10%",
      opt2: "20%",
      opt3: "25%",
      opt4: "30%",
      correct: "opt3",
      },
      {
                  // Problems On Ages Question button
      question: "If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is",
      opt1: "Rs. 4420",
      opt2: "Rs. 4000",
      opt3: "Rs. 3900",
      opt4: "Rs. 3800",
      correct: "opt2",
      },
      {
                 // Problems On Ages Question button
      question: "A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is?",
      opt1: "20:23",
      opt2: "23:20",
      opt3: "16:23",
      opt4: "23:16",
      correct: "opt3",
      },
      {
                  // Problems On Ages Question button
      question: "Rambabu sells paper planes at the rate of 20 planes for Re. 1. If he gets profit of 20%, how many planes did he buy in 1 rupee?",
      opt1: "16",
      opt2: "40",
      opt3: "24",
      opt4: "36",
      correct: "opt3",
      },
      {
            // Problems On Ages Question button
      question: "A cheater manipulated his weighing machine so that it shows 1kg for 970 grams. How much profit does he get?",
      opt1: "397/100%",
      opt2: "0.3 %",
      opt3: "0.03%",
      opt4: "300/97%",
      correct: "opt4",
      },
      {
            // Problems On Ages Question button
      question: "Ajay incurred loss of 20% by selling a vase for Rs. 2880. To get a profit of 20% at what price should he sell the vase?",
      opt1: "4320",
      opt2: "5760",
      opt3: "1440",
      opt4: "3500",
      correct: "opt1",
      },
      ]
// -------- Function For PrintQuestions Importing CategoryThird-Problem On Ages-Questions  Ends ---------------------->