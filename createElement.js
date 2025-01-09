// Exercise: Adding Elements
// For this exercise, you should add some elements to the DOM via JavaScript.

// To be precise, you must add two "course goal" items => two <li> items to the <ul> that already exists on the page:

// The first course goal <li> that's added via JavaScript should contain the text "Learn JavaScript" (without quotes)

// The second goal <li> item should contain the text "Master JavaScript" (also without quotes)

// Again: You must do this via JavaScript, NOT by editing the HTML code!
<html>
    <head>
        <title>Time to practice</title>
    </head>
    <body>
        <h1>Goals</h1>
        <ul>
            
        </ul>
        <script>
            function solve() {                
                const firstGoal = document.createElement("li")
                firstGoal.textContent = "Learn JavaScript"
                
                const secondGoal = document.createElement("li")
                secondGoal.textContent = "Master JavaScript"
                
                document.querySelector("ul").appendChild(firstGoal)
                document.querySelector("ul").appendChild(secondGoal)
                
            }
        </script>
    </body>
</html>