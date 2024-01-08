const question = [
  {
    ques: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    ques: "Inside which HTML element do we put the JavaScript?",
    a: "app",
    b: "js",
    c: "scripting",
    d: "script",
    correct: "d",
  },
  {
    ques: "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "both",
    d: "None of the above",
    correct: "c",
  },
  {
    ques: "How to stop an interval timer in Javascript?",
    a: "clearTimer",
    b: "node",
    c: "clearInterval",
    d: "intervalOver",
    correct: "c",
  },
];

let index = 0;
let total = question.length;
let right = 0,
  wrong = 0;
const quesBox = document.querySelector("#quesBox");
const options = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = question[index];
  quesBox.innerHTML = `${index + 1}. ${data.ques}`;
  options[0].nextElementSibling.innerHTML = data.a;
  options[1].nextElementSibling.innerHTML = data.b;
  options[2].nextElementSibling.innerHTML = data.c;
  options[3].nextElementSibling.innerHTML = data.d;
};

const nextHandler = () => {};

const submitHandler = () => {
  const data = question[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  options.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  options.forEach((input) => {
    if (input) {
      input.checked = false;
    }
  });
};

const endQuiz = () => {
  document.getElementById(
    "box"
  ).innerHTML = `<h3 style='text-align:center; margin:5px'> Thanyou For playing Quiz</h3>
  <h2 style='text-align:center'> You've scored ${right} / ${total} </h2>`;
};

loadQuestion();
