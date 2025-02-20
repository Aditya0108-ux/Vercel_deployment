let express = require("express");
let app = express();
let PORT = 3000;

//Create an endpoint that returns a welcome message to a student who wants to learn functions.
//API Call: <http://localhost:3000/welcome>

function getWelcomeMessage(){
  return "We will now learn functions!";
}

app.get("/welcome",(req , res) => {
  res.send(getWelcomeMessage());
});

//Create an endpoint that takes a username as a query parameter and returns a greeting message.
//API Call: <http://localhost:3000/greet?username=John>

function getGreetingMessage(username){
        return "Hey, " + username + "!. Are you ready to learn functions with us?";  
}
app.get("/greet",(req , res) => {
    let username = req.query.username;
    res.send(getGreetingMessage(username));
})

  //Create an endpoint that takes the number of yearsOfExp in functions as a query parameter and returns a message indicating the person's experience.
//API Call: <http://localhost:3000/message?yearsOfExp=3>

function checkYearsOfExp(yearsOfExp){
  if(yearsOfExp > 0){
    return "You have some experience with functions. Great!"
  }
  else{
    return "No worries. You will start writing functions in no time!"
  }
}

app.get("/message",(req,res) => {
      let yearsOfExp = parseFloat(req.query.yearsOfExp)
      res.send(checkYearsOfExp(yearsOfExp))
})

//Create an endpoint that takes the number of days and hours a student can dedicate to learn functions per week and returns the total hours available per week.
//API Call: <http://localhost:3000/hours?days=5&hours=2>

function getTime(days,hours){
  let totalHours = days * hours;
  return totalHours;
}

app.get("/hours", (req,res) => {
      let days = parseFloat(req.query.days);
      let hours = parseFloat(req.query.hours);
      res.send(getTime(days,hours).toString());
})

//Create an endpoint that takes a username and a boolean hasCompleted indicating module completion status, and returns a message indicating if the student has completed the modules or not.
//API Call: <http://localhost:3000/module-completion-status?username=John&hasCompleted=true>

function getModuleCompletion(username,hasCompleted){
   if(hasCompleted){
     return username + " has completed the modules";
   }
  else{
    return username + " has not completed the modules";
  }
}

app.get("/module-completion-status", (req,res) => {
    let username = req.query.username;
    let hasCompleted = req.query.hasCompleted === "true";
    res.send(getModuleCompletion(username,hasCompleted));
    
})

//Create an endpoint that takes a student's city and name, and returns a personalized greeting message.
//API Call: <http://localhost:3000/personalized-greeting?city=New%20York&name=John>

function getPersonalizedGreeting(city,name){
  return "Hey, " + name + "! What's famous about " + city + "?";
}

app.get("/personalized-greeting", (req,res) => {
       let city = req.query.city;
       let name = req.query.name;
       res.send(getPersonalizedGreeting(city,name));
     
})

//Create an endpoint that takes a student's birthyear and returns the age.
//API Call: <http://localhost:3000/find-age?birthyear=1990>

function findAge(birthyear){
  let age = 2024 - birthyear;
  return age;
}

app.get("/find-age",(req,res) => {
  let birthyear = parseFloat(req.query.birthyear);
  res.send(findAge(birthyear).toString());
})

//Create an endpoint that takes the number of days per week and hours per day a student can dedicate to learning functions and returns whether it is sufficient (>= 30 hours per week) or not.
//Sample API Call: <http://localhost:3000/is-time-sufficient?days=5&hours=6>

function findRequiredTime(days,hours){
  let totalHours = days * hours;
  if(totalHours >= 30){
    return "The time being dedicated is sufficient for learning functions";
  }
  else{
    return "The time being dedicated is not sufficient for learning functions";
  }
}

app.get("/is-time-sufficient",(req,res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);
  res.send(findRequiredTime(days,hours));
})








app.listen(PORT,() => {
  console.log("Server is running on http://localhost:" + PORT);
})