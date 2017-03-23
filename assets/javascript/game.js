


$("#start").on("click", function() {
    game.start();

})

$(document).on("click","#end", function() {
    game.done();
  })

// Question set
var questions = [
  {
    question: "What is the first full length CGI movie?",
    answers: ["A bug's Life", "Monster Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
  }, {
    question: "What movie won the oscar in 2017?",
    answers: ["Arrival", "Moonlight", "Toy Story", "The Lion King"],
    correctAnswer: "Moonlight"
  }, {
    question: "What is the ?",
    answers: ["A bug's Life", "Monster Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story",
  }, {
    question: "What is the first full length CGI movie?",
    answers: ["A bug's Life", "Monster Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
  }, {
    question: "What is the first full length CGI movie?",
    answers: ["A bug's Life", "Monster Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
  }, {
    question: "What is the first full length CGI movie?",
    answers: ["A bug's Life", "Monster Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
  }, {
    question: "What is the first full length CGI movie?",
    answers: ["A bug's Life", "Monster Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
  }, {
    question: "What is the first full length CGI movie?",
    answers: ["A bug's Life", "Monster Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
  }, {
    question: "What is the first full length CGI movie?",
    answers: ["A bug's Life", "Monster Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
  }, {
    question: "What is the first full length CGI movie?",
    answers: ["A bug's Life", "Monster Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
  }];

// Variable that will hold the setInterval
var game = {

     correct: 0,
     incorrect: 0,
     counter: 60,

    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            game.done();
        }
    },
    
    start: function() {
      timer = setInterval(game.countdown, 1000);
      $("#sub-wrapper").prepend("<h2>Time Remaining: <span id = " + counter + "></span> Seconds</h2>");
      $("#start").remove();
          for (var i = 0; i < questions.length; i++) {
              $("#sub-wrapper").append("<h2>" + questions[1].questions+"</h2>");
              for (var j = 0; j < questions[1].answers.length; j++) {
                  $("#sub-wrapper").append("input type = " + radio + " name = questions -" + i + " value ="+questions[i].answers[j]+">"+questions[i].answers[j]);
              }
          }
      $("#sub-wrapper").append("<button id=" + end + ">Done</button>");
    },
      // done button for each questions
    done: function() {
      $.each($("input[name=" + questions-0 + "]:checked"), function() {
        if ($(this).val()==questions[0].correctAnswer) {
          game.correct++;
        }else {
          game.incorrect++;
        }
      });
},
      done: function() {
      $.each($("input[name=" + questions-1 + "]:checked"), function() {
        if ($(this).val()==questions[1].correctAnswer) {
          game.correct++;
        }else {
          game.incorrect++;
        }
      });
},
      done: function() {
      $.each($("input[name=" + questions-2 + "]:checked"), function() {
        if ($(this).val()==questions[2].correctAnswer) {
          game.correct++;
        }else {
          game.incorrect++;
        }
      });
},
      done: function() {
      $.each($("input[name=" + questions-3 + "]:checked"), function() {
        if ($(this).val()==questions[3].correctAnswer) {
          game.correct++;
        }else {
          game.incorrect++;
        }
      });
},
      done: function() {
      $.each($("input[name=" + questions-4 + "]:checked"), function() {
        if ($(this).val()==questions[4].correctAnswer) {
          game.correct++;
        }else {
          game.incorrect++;
        }
      });
},
      done: function() {
      $.each($("input[name=" + questions-5 + "]:checked"), function() {
        if ($(this).val()==questions[5].correctAnswer) {
          game.correct++;
        }else {
          game.incorrect++;
        }
      });
},
      done: function() {
      $.each($("input[name=" + questions-6 + "]:checked"), function() {
        if ($(this).val()==questions[6].correctAnswer) {
          game.correct++;
        }else {
          game.incorrect++;
        }
      });
},
      done: function() {
      $.each($("input[name=" + questions-7 + "]:checked"), function() {
        if ($(this).val()==questions[7].correctAnswer) {
          game.correct++;
        }else {
          game.incorrect++;
        }
      });
},
      done: function() {
      $.each($("input[name=" + questions-8 + "]:checked"), function() {
        if ($(this).val()==questions[8].correctAnswer) {
          game.correct++;
        }else {
          game.incorrect++;
        }
      });
},
      done: function() {
      $.each($("input[name=" + questions-9 + "]:checked"), function() {
        if ($(this).val()==questions[9].correctAnswer) {
          game.correct++;
        }else {
          game.incorrect++;
        }
      });

      this.results();

 },   
      results: function() {
            clearInterval(timer);
            $("#sub-wrapper h2").remove();
            $("#sub-wrapper").html("<h2> All Done</h2>");
            $("#sub-wrapper").append("<h3> Correct Answer: " + this.correct + "</h3>");
            $("#sub-wrapper").append("<h3> InCorrect Answer: " + this.Incorrect + "</h3>");
            $("#sub-wrapper").append("<h3> Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        }

    };



