const quizQuestions = [
    {
        question: "Who won the ICC Cricket World Cup 2019?",
        options: ["Australia", "India", "England", "New Zealand"],
        answer: "England"
    },
    {
        question: "Who has the most international centuries in cricket?",
        options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Jacques Kallis"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country hosted the first Cricket World Cup in 1975?",
        options: ["India", "England", "Australia", "West Indies"],
        answer: "England"
    },
    {
        question: "Who is known as the \"King of Swing\" in cricket?",
        options: ["Wasim Akram", "Glenn McGrath", "James Anderson", "Brett Lee"],
        answer: "Wasim Akram"
    },
    {
        question: "How many players are on the field for one team in cricket?",
        options: ["10", "11", "12", "13"],
        answer: "11"
    },
    {
        question: "Who is the highest wicket-taker in Test cricket?",
        options: ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Anil Kumble"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "What is the maximum number of overs in an ODI match?",
        options: ["40", "50", "60", "20"],
        answer: "50"
    },
    {
        question: "Which player is known as the \"Little Master\"?",
        options: ["Sunil Gavaskar", "Sachin Tendulkar", "Virat Kohli", "Rahul Dravid"],
        answer: "Sunil Gavaskar"
    },
    {
        question: "Which country has won the most Cricket World Cups?",
        options: ["India", "Australia", "England", "West Indies"],
        answer: "Australia"
    },
    {
        question: "What is the length of a cricket pitch in yards?",
        options: ["20", "22", "24", "18"],
        answer: "22"
    },
    {
        question: "Which cricket team is nicknamed the 'Black Caps'?",
        options: ["Australia", "New Zealand", "South Africa", "West Indies"],
        answer: "New Zealand"
    },
    {
        question: "Who holds the record for the fastest century in ODI cricket?",
        options: ["Corey Anderson", "AB de Villiers", "Chris Gayle", "Shahid Afridi"],
        answer: "AB de Villiers"
    },
    {
        question: "Which Indian bowler has taken a hat-trick in a World Cup match?",
        options: ["Jasprit Bumrah", "Mohammed Shami", "Chetan Sharma", "Zaheer Khan"],
        answer: "Chetan Sharma"
    },
    {
        question: "Who won the first T20 World Cup?",
        options: ["India", "Pakistan", "Australia", "England"],
        answer: "India"
    },
    {
        question: "Who is the youngest player to score a century in international cricket?",
        options: ["Shahid Afridi", "Sachin Tendulkar", "Mohammad Ashraful", "Prithvi Shaw"],
        answer: "Shahid Afridi"
    },
    {
        question: "Who is the first cricketer to score a double century in ODI cricket?",
        options: ["Rohit Sharma", "Virender Sehwag", "Chris Gayle", "Sachin Tendulkar"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country is called the \"Proteas\" in cricket?",
        options: ["South Africa", "New Zealand", "England", "Australia"],
        answer: "South Africa"
    },
    {
        question: "Who is known as the \"Wall\" of Indian cricket?",
        options: ["Rahul Dravid", "Sachin Tendulkar", "Sourav Ganguly", "VVS Laxman"],
        answer: "Rahul Dravid"
    },
    {
        question: "Who has the highest individual score in Test cricket?",
        options: ["Brian Lara", "Donald Bradman", "Chris Gayle", "Matthew Hayden"],
        answer: "Brian Lara"
    },
    {
        question: "Which bowler is known for delivering the first-ever hat-trick in Test cricket?",
        options: ["Fred Spofforth", "Jim Laker", "Muttiah Muralitharan", "Shane Warne"],
        answer: "Fred Spofforth"
    }
];
function Random(){
    const data=new Set();
    while(data.size!=5){
        const index=Math.floor(Math.random()*20);
        data.add(quizQuestions[index]);
    }

        return[...data];
    
}
const originalAns={};
const problem=Random();
const form=document.querySelector("form");
problem.forEach((obj,index)=>{
    originalAns[`q${index+1}`]=obj['answer'];

    const div=document.createElement('div');
    div.className='quesion';

    const h2=document.createElement('h2');
    h2.textContent = `${index + 1}. ${obj.question}`;   ;
    div.appendChild(h2);
   obj.options.forEach((data)=>{
    const label=document.createElement("label");
    const input=document.createElement('input');
    input.type="radio";
    input.name=`q${index+1}`;
    input.value=data;
    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div.appendChild(label);
    div.appendChild(document.createElement("br"));

   })
//    document.getElementsByTagName("form").appendChild(div);
form.appendChild(div);

})
form.appendChild(document.querySelector(".submit-btn"));

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    let result = 0;

    for (let [key, value] of data.entries()) {
        if (value === originalAns[key]) {
            result++;
        }
       
    }

    document.getElementById("result").innerText = `${result} out of 5 is correct.`;
    form.reset();
});
