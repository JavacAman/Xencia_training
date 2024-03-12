const quizData = [
    {
      question: "Where is the correct place to insert a JavaScript?",
      a: "Stack",
      b: "Queue",
      c: "List",
      d: "Array",
      correct: "a"
    },
    {
      question: 'The data structure required to check whether an expression contains a balanced parenthesis is?',
      a: "Queue",
      b: "Stack",
      c: "Tree",
      d: "Array",
      correct: "b"
       },
  ];
   
   const quiz = document.querySelector(".quiz-body");
   const answerEl = document.querySelectorAll(".answer");
   const questionEl = document.getElementById("question");
   const footerEl = document.querySelector(".quiz-footer");
   const quizDetailEl = document.querySelector(".quiz-details");
   const liEl = document.querySelector("ul li");
   
   const a_txt = document.getElementById("a_text");
   const b_txt = document.getElementById("b_text");
   const c_txt = document.getElementById("c_text");
   const d_txt = document.getElementById("d_text");
   const btnSubmit = document.getElementById("btn");
   
   let currentQuiz = 0;
   let score = 0;
   
   loadQuiz();
   
   function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_txt.innerText = currentQuizData.a;
    b_txt.innerText = currentQuizData.b;
    c_txt.innerText = currentQuizData.c;
    d_txt.innerText = currentQuizData.d;
    quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
   }
   
 
   function getSelected() {
    let answer;
    answerEl.forEach((answerEls) => {
     if (answerEls.checked) {
      answer = answerEls.id;
     }
    });
    return answer;
   }
   
   btnSubmit.addEventListener("click", function () {
    const answers = getSelected();
   
    if (answers) {
     if (answers === quizData[currentQuiz].correct) {
      score++;
     }
     nextQuestion();
    }
   });
   
   // next Slide
   function nextQuestion() {
    currentQuiz++;
   
    if (currentQuiz < quizData.length) {
     loadQuiz();
    } else {
     quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} question correctly</h2>
       <button type="button" onclick="location.reload()">Reload</button>
       `;
     footerEl.style.display = "none";
    }
   }

   function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
   
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  // login validation

  function validate(event) {
    event.preventDefault();
    var username = document.getElementById("email").value;
    var password = document.getElementById("ps1").value;
    if (username == "admin" && password == "admin@123") {
      // Redirect to the login.html page
      window.location.href = "login.html";
    } else {
      alert("Invalid credentials");
    }
  }