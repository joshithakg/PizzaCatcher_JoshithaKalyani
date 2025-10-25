## PizzaCatcher

PizzaCatcher is a simple but fun browser game I coded using p5play and Javascript on Replit. The goal is to catch falling pizza toppings on your moving pizza base before the timer (of 30 seconds) runs out. Each topping gives you points and some are worth more than others. If you manage to catch enough toppings before time runs out, you will build the “perfect pizza”.

### What the Project Is and What It Does

PizzaCatcher is reaction game where the player controls a pizza base (the catcher) using the left and right arrow keys. From the top of the screen, different toppings fall down at random positions. The player must move the catcher to collect them before they hit the ground.

Each topping gives you points:

- Tomato = +1 point
- Pepperoni = +2 points
- Cheese = +3 points (bonus item, appears rarely)

There is a timer and when the time ends it displays the player’s final score along with an message.

The goal is simple: catch as many toppings as possible before time runs out, and aim for the highest score possible. 

### Why I Made This Project

I have always enjoyed quick, reaction-based games... so I wanted to make my own version using p5.js! I wanted to make something fun and interactive without being overly complicated.

I was also interested in learning more about game loops and collision detection. p5Play  was  the right place to start since it’s beginner-friendly but still flexible enough to make something polished.

PLus, I thought a pizza theme would make it way more interesting and would stand out!! 

###  How I Made It

I built PizzaCatcher entirely in p5.js, using the p5.play library to handle sprites and collisions. Here’s the gist of what I did:

- Game setup and sprites: I created sprites for the catcher and the falling toppings (using images I found on google). The catcher is controlled using the left and right arrow keys. The toppings (tomato, pepperoni, and cheese) fall from random positions at the top of the screen.

- Scoring system: Each topping has a score value. Cheese is a special case with a higher bonus value.

- Timer and states: I set up different game states ("start", "play", and "end") so the player can start the game, play it, and then see a summary when it’s over.

- Visual Ideas: I added a confetti system that triggers when toppings are caught (or when the cheese topping is caught!).

- Restart: When the game ends, the player can click to restart and try again without having to refresh the page :).

###  What I Struggled With

I ran into a few challenges while building this game:

- Collision detection: Getting the falling toppings to consistently register as “caught” when they hit the plate was harder than expected. I had to ajust the collider shape multiple times and make sure the sprite boundaries matched the visible images.

- Performance with confetti: My first version of the confetti effect caused lag because it spawned too many particles. I optimized it by reducing the number of confetti pieces and limiting their lifetime.

- Game flow transitions: Switching smoothly between the start screen, gameplay, and the end screen was a small but important challenge. I learned a lot about managing game states and resetting variables correctly.

### What I Learned

This project helped me understand a lot more about how games are structured. I learned:

- How to use sprites and detect motion in p5.js.
- How to manage multiple game states and create transitions between them.
- How to add in time featues and countdowns.
- How small visual effects (like messages and confetti) make gameplay so more satisfying! 

### How to Play

- Open the project on Replit.
- Click the Run button to start.
- On the start screen, press SPACE to begin the game.
- Use the left and right arrow keys to move the catcher.
- Catch as many toppings as you can before the timer runs out.
- When time is up, your score will be displayed along with an encouraging message.
- Click the screen to restart and play again.

### Possible Improvements

If I continue working on PizzaCatcher, I would like to add:
- More topping types (like mushrooms, olives, or onions).
- Negative items that lower your score if caught.
- Background music and sound effects.
- A difficulty curve where toppings fall faster as time passes.
- A mobile-friendly version with touch controls.

### Closing Thoughts

PizzaCatcher taught me a lot about how games handle motion. The project is simple, but it feels satufying to play and I am quite proud of how much I was able to learn through p5play Libraries in a short time.

## File Overview

### script.js

This containts the JavaScript code for the game.

### assets

This folder contains images of Pizza toppings

### index.html

This HTML file includes all the dependent files like java scripts

### README.md

That's this file.   

### style.css

This CSS file generally contains styling rules for the content like colors and fonts but it is not used for this game as the style is embedded in the script.js file itself.  

