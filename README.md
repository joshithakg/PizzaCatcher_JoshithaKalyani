## PizzaCatcher

PizzaCatcher is a simple but fast-paced browser game built using p5.js on Replit. The goal is to catch falling pizza toppings on your moving plate before the timer runs out. Each topping gives you points, and some are worth more than others. If you manage to catch enough toppings before time runs out, you’ll build the “perfect pizza.”

### What the Project Is and What It Does

PizzaCatcher is an arcade-style reaction game where the player controls a pizza base (the catcher) using the left and right arrow keys. From the top of the screen, different toppings fall down at random positions. The player must move the catcher to collect them before they hit the ground.

Each topping gives you points:

- Tomato = +1 point
- Pepperoni = +2 points
- Cheese = +3 points (bonus item, appears rarely)

There is a timer and when the time ends it displays the player’s final score along with an message.

The goal is simple: catch as many toppings as possible before time runs out, and aim for the highest score possible. 

### Why I Made This Project

I created PizzaCatcher because I wanted to make something fun, visual, and interactive without being overly complicated. I’ve always enjoyed quick, reaction-based games where you can instantly see the results of your actions, so I wanted to make my own version using p5.js.

I was also interested in learning more about game loops, state management, and collision detection. p5.js seemed like the right place to start since it’s beginner-friendly but still flexible enough to make something polished.

On top of that, I thought a pizza theme would make it more lighthearted and fun. Everyone knows pizza, and catching toppings felt like a playful twist that would make the project stand out.

###  How I Made It

This project was built entirely in p5.js using the p5.play library for sprite handling and collisions.

*Key steps in development:

- Game setup and sprites: I created sprites for the catcher and the falling toppings. The catcher is controlled using the left and right arrow keys. The toppings (tomato, pepperoni, and cheese) fall from random positions at the top of the screen.

- Scoring system: Each topping has a score value. Cheese is a special case with a higher bonus value.

- Timer and states: I set up different game states ("start", "play", and "end") so the player can start the game, play it, and then see a summary when it’s over.

- Visual feedback: I added confetti system that triggers when toppings are captured or missed.

- Restart logic: When the game ends, the player can click to restart and try again without having to refresh the page.

###  What I Struggled With

I ran into a few challenges while building this game:

- Collision detection: Getting the falling toppings to consistently register as “caught” when they hit the plate was harder than expected. I had to fine-tune the collider shape and make sure the sprite boundaries matched the visible images.

- Performance with confetti: My first version of the confetti effect caused lag because it spawned too many particles. I optimized it by reducing the number of confetti pieces and limiting their lifetime.

- Game flow transitions: Switching smoothly between the start screen, gameplay, and the end screen was a small but important challenge. I learned a lot about managing game states and resetting variables correctly.

### What I Learned

This project helped me understand a lot more about how interactive games are structured. I learned:

- How to use sprites and detect collisions in p5.js.
- How to manage multiple game states and transitions between them.
- How to implement timed events and countdowns.
- How small visual effects (like messages and confetti) make gameplay more satisfying.
- How to write cleaner, modular code for interactive sketches.

I also learned that even small games benefit from good planning and structure. Features like score tracking, a restart button, and visual feedback all make the game feel more complete and intentional.

### How to Play

- Open the project on Replit.
- Click the Run button to start.
- On the start screen, press SPACE to begin the game.
- Use the left and right arrow keys to move the catcher.
- Catch as many toppings as you can before the timer runs out.
- When time is up, your score will be displayed along with an encouraging message.
- Click the screen to restart and play again.

### Possible Improvements

If I continue working on PizzaCatcher, I’d like to add a few more features:
- More topping types (like mushrooms, olives, or onions).
- Negative items that lower your score if caught.
- Background music and sound effects.
- A difficulty curve where toppings fall faster as time passes.
- A mobile-friendly version with touch controls.

### Closing Thoughts

PizzaCatcher started as a small experiment but turned into a complete and replayable game. It taught me a lot about how games handle timing, collisions, scoring, and feedback. The project is simple, but it feels rewarding to play, and I’m proud of how much I was able to learn and polish in a short time.

## File Overview

### ← script.js

This containts the avaScript code for the game.

### ← assets

This folder contains images of Pizza toppings

### ← index.html

This HTML file includes all the dependent files like java scripts

### ← README.md

That's this file.   

### ← style.css

This CSS file generally contains styling rules for the content like colors and fonts but it is not used for this game as the style is embedded in the script.js file itself.  

