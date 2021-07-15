var readlineSync = require('readline-sync');
const chalk=require('chalk')

var username = readlineSync.question("what is your name?\n");
console.log("welcome to the game," + chalk.yellow(username) +"\n");
console.log(chalk.green("There are two levels in this game, you need to score a minimum of 3 to move to the final level. Lets have some of fun"));
var score=0;

function play(question,answer){
  var userAnswer= readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.yellowBright("You are right"));
    score=score+1;
  }else{
    console.log(chalk.red("you are wrong"));
  }

 console.log("your current score is "+ chalk.whiteBright(score))
}
  
var questions=[{question:"which is the largest northeastern state? ",
                answer:"Arunachal Pradesh"},
                
                  {question:"which place is known as scotland of east India?",
                  answer:"shillong"},
                {
                  question:"Which state is the largest tea producer in India?",
                  answer: "Assam"
                },
                {
                  question:"which state is famous for one-horned rhinos?",
                  answer: "Assam"

                },{

                  question: "Mizoram is also known as ?",
                  answer: "lushlai hills"
                }

                ];

for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

if(score<3){
  console.log(chalk.bgYellow("You were doing great keep going,you will get it the next time. Try again !!"))
  console.log(chalk.bgCyanBright("Your total score was "+(score)))
}

else{
  console.log(chalk.bgBlue("you have passed the first level\n"))
  console.log(chalk.bgRed("welcome to the final level"))


   
        var questions=[{question:"Name the folk dance of meghalaya? ",
                  answer:"arunachal pradesh"},
                  
                    {question:"India's first glass mosque is in?",
                    answer:"shillong"},
                  {
                    question:"The Yarlung Zangbo river, in India, is known as ?",
                    answer: "Brahmaputra"
                  },
                  {
                    question:"The India's highest annual rainfall is reported at  ?",
                    answer: "Mawsynram"

                  },{

                    question: "The oldest oil refinery in India is at  ",
                    answer: "Digboi"
                  }

                  ];
                    
                    for(var i=0;i<questions.length;i++){
                    var currentQuestion=questions[i];
                    play(currentQuestion.question,currentQuestion.answer)}
                    console.log(chalk.bgGreenBright("yay!! Your total score is "+(score)))
}


