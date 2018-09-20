let movieQuotes = ["I see in your eyes the same fear that would take the heart of me! A day may come when the courage of men fails, when we forsake our friends and break all bonds of fellowship. But it is not this day.",
                       "We’ve all got both light and darkness inside us. What matters is the part we choose to act on.",
                       "Every time I walked away from something I wanted to forget, I told myself it was for a cause that I believed in. A cause that was worth it. Without that, we’re lost.",
                       "We used to look up at the sky and wonder at our place in the stars. Now we just look down, and worry about our place in the dirt.",
                       "Do you know why you're afraid when you're alone? I do. I do.",
                       "Do I really look like a guy with a plan? You know what I am? I'm a dog chasing cars. I wouldn't know what to do with one if I caught it!",
                       "What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea. Resilient... highly contagious. Once an idea has taken hold of the brain it's almost impossible to eradicate",
                       "That's all it is. You just begin. You do the math. You solve one problem... and you solve the next one... and then the next. And If you solve enough problems, you get to come home.",
                       "Look, I'm not the one with the problem, okay? It's the world that seems to have a problem with ME!",
                       "I don't like sand. It's coarse and rough and irritating and it gets everywhere."];

let questionAnswers = [["The Lord of the Rings", "Braveheart", "A Few Good Men", "Gone With the Wind"],
                       ["The Lego Movie", "The Giver", "Harry Potter and the Order of the Phoenix", "Star Wars: The Last Jedi"],
                       ["The Dark Knight Rises", "Man of Steel", "Forrest Gump", "Rogue One"],
                       ["Ender's Game", "Pacific Rim", "Interstellar", "Star Wars: The Force Awakens"],
                       ["The Sixth Sense", "The Shining", "A Quiet Place", "The Woman in Black"],
                       ["Guardians of the Galaxy", "The Dark Knight", "Back to the Future", "Iron Man"],
                       ["Jaws", "Jurassic Park", "World War Z", "Inception"],
                       ["A Beautiful Mind", "The Martian", "Raiders of the Lost Ark", "The Shawshank Redemption"],
                       ["Rocky", "Titanic", "Shrek", "Moana"],
                       ["Star Wars: The Clone Wars", "Ghostbusters", "The Lion King", "Sandlot"]];

let correctChoices = [0, 2, 3, 2, 0, 1, 3, 1, 2, 0];

let currentQuestion = -1;

var points = 0;

function checkAnswer(element) {
    let chosenAnswer = element.id //Get the id of the button that was clicked
    let returnValue = false;
    //Convert to an index
    if(chosenAnswer == "AnswerA") {
        chosenAnswer = 0;
    } else if(chosenAnswer == "AnswerB") {
        chosenAnswer = 1;
    } else if(chosenAnswer == "AnswerC") {
        chosenAnswer = 2;
    } else if(chosenAnswer == "AnswerD") {
        chosenAnswer = 3;
    }
    
    //Check the answer
    let answerIndicator = document.getElementById("AnswerIndicator");
    if(chosenAnswer == correctChoices[currentQuestion]) {
        //show that it is correct
        answerIndicator.innerHTML = "Correct!";
        answerIndicator.style.color = "green";
        points++;
        returnValue = true;
    } else {
        //show that it was incorrect
        answerIndicator.innerHTML = "Incorrect.";
        answerIndicator.style.color = "red";
        returnValue = false;
    }
    
    
    return returnValue
}

function moveToNextQuestion() {
    if(currentQuestion < (movieQuotes.length - 1)) {
        //Increment Index
        currentQuestion = currentQuestion + 1;
    
        //Update header and question
        document.getElementById("QuestionHeader").innerHTML = "Question " + (currentQuestion + 1);
        document.getElementById("Question").innerHTML = movieQuotes[currentQuestion];
        
        
    
        //Update Answers
        document.getElementById("AnswerA").innerHTML = questionAnswers[currentQuestion][0];
        document.getElementById("AnswerB").innerHTML = questionAnswers[currentQuestion][1];
        document.getElementById("AnswerC").innerHTML = questionAnswers[currentQuestion][2];
        document.getElementById("AnswerD").innerHTML = questionAnswers[currentQuestion][3];
        
    
        //Remove Answer Indicator
        document.getElementById("AnswerIndicator").innerHTML = "";
    } else {
        
        //just for debugging to make sure that it's outputing the right number of points.
        alert(points);
        //move to final screen
    }
    
    
}

function handleAnswer(f)
{
    checkAnswer(document.getElementById(f.answer.value))
    //unconditionally moving to next question
    setTimeout(moveToNextQuestion, 2000);
    //This code clears the answer choice when you answer incorrectly or are going to move to the next question  
    var radio=document.getElementById(f.answer.value.replace("Answer", ""));
    radio.checked = false;
}