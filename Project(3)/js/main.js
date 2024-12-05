const quizeData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
    },
    {
        question: 'Who is the current Prime Minister of Canada?',
        options: ['Joe Biden', 'Stephen McCain', 'Josh Biden', 'Abraham Lincoln'],
        answer: 'Joe Biden'
    },
    {
        question: 'What is the capital of the United Kingdom?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        answer: 'London'
    },
    {
        question: 'Who was the first person to walk on the moon?',
        options: ['Neil Armstrong', 'Christopher Columbus', 'Alexander Graham Bell', 'Rene Descartes'],
        answer: 'Neil Armstrong'
    },
    {
        question: 'Which country has the highest population density?',
        options: ['China', 'India', 'United States', 'Russia'],
        answer: 'China'
    },
    {
        question: 'What is the largest ocean in the world?',
        options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        answer: 'Pacific Ocean'
    },
    {
        question: 'Who is the current Prime Minister of the United States?',
        options: ['Joe Biden', 'Donald Trump', 'George H.W. Bush', 'Barack Obama'],
        answer: 'Joe Biden'
    },
    {
        question: 'What is the capital of Spain?',
        options: ['Madrid', 'Barcelona', 'Valencia', 'Seville'],
        answer: 'Madrid'
    },
    {
        question: 'Who is the current Prime Minister of Australia?',
        options: ['Richard Branson', 'Stephen McMahon', 'Kevin McGovern', 'Jane Goodall'],
        answer: 'Richard Branson'
    },
    {
        question: 'What is the capital of Italy?',
        options: ['Rome', 'Venice', 'Milan', 'Barcelona'],
        answer: 'Rome'
    }
];

const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextBtn');
const resultElement = document.getElementById('results');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    // Get the current question based on the index
    const currentQuestion = quizeData[currentQuestionIndex];

    // Set the question text
    questionElement.textContent = currentQuestion.question;

    // Clear previous options
    optionsElement.innerHTML = '';

    // Create buttons for each option
    currentQuestion.options.forEach(optionText => {
        const button = document.createElement('button');
        button.textContent = optionText;
        // Add click event to each button
        button.addEventListener('click', selectOption);
        // Append button to the options container
        optionsElement.appendChild(button);
    });
}

function selectOption(e) {
    const selectedOption = e.target.textContent;
    const correctAnswer = quizeData[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    // Show the "Next" button
    nextButton.style.display = 'block';

    const buttons = optionsElement.querySelectorAll('button');
    buttons.forEach(button => {
        button.removeEventListener('click', selectOption);
    });
}

function nextQuestion() {
    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < quizeData.length) {
        // Load the next question
        loadQuestion();
        nextButton.style.display = 'none';
    } else {
        // Display the final score
        resultElement.textContent = `Your final score is ${score}/${quizeData.length}`;
        resultElement.style.display = 'block';
        // Hide the "Next" button after the quiz ends
        nextButton.style.display = 'none';
    }
}

// Attach the click event listener to the "Next" button
nextButton.addEventListener('click', nextQuestion);

// Load the first question when the page loads
loadQuestion();
