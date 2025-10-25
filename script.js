let catcher, fallingObject;
let specialWin = false;
let score = 0;
let bg, catcherImg, tomato, pepporoni, cheese;
let foodImages;
let confetti = [];
let timer = 30; 
let combo = 0;
let lastCatchTime = 0;
let messages = [];
let gameState = "start"; 

function preload(){
  bg = loadImage("assets/bkg.jpg");
  catcherImg = loadImage("assets/base.png");
  tomato = loadImage("assets/tomato.png");
  pepporoni = loadImage("assets/pepporoni.png");
  cheese = loadImage("assets/cheese.png");
}

function setup() {
  createCanvas(400,400);

  catcher = new Sprite(200,380,100,20);
  catcher.img = catcherImg;
  catcher.scale = 0.4;
  catcher.collider = "k";

  foodImages = [tomato, pepporoni];

  textFont("Georgia");
  
  setInterval(() => {
    if (gameState === "play" && timer > 0) timer--;
  }, 1000);
}

function startFallingObject() {
  if (fallingObject) {
    fallingObject.x = random(80, 320);
    fallingObject.y = 0;
    assignRandomFood(fallingObject);
    fallingObject.vel.y = random(1.2, 2.0);
    fallingObject.vel.x = 0;
    fallingObject.rotationLock = true;
    fallingObject.visible = true;
  } else {
    fallingObject = new Sprite(random(80, 320), 0, 10);
    assignRandomFood(fallingObject);
    fallingObject.vel.y = random(1.2, 2.0); // random initial speed
    fallingObject.vel.x = 0; 
    fallingObject.rotationLock = true;
  }
}

function assignRandomFood(sprite) {
  let r = random();
  let food;
  if (r < 0.1) { // 10% chance for cheese
    food = cheese;
    sprite.special = true; 
    sprite.scale = 0.15;
  } else {
    food = random(foodImages);
    sprite.special = false;
    sprite.scale = (food === tomato) ? 0.05 : 0.2;
  }
  sprite.img = food;
}

function spawnConfetti(x, y, amount = 30, power = 3) {
  for (let i = 0; i < amount; i++) {
    confetti.push({
      x: x + random(-20, 20),
      y: y + random(-10, 10),
      vx: random(-power, power),
      vy: random(-power * 0.6, power),
      r: random(3, 6),
      color: [random(30, 255), random(30, 255), random(30, 255)],
      life: int(random(40, 100))
    });
  }
}

function caughtOne() {
  if (!fallingObject) return;

  if (fallingObject.special) {
    score += 3; // cheese gives +3
    messages.push({ text: "🧀 CHEESE BONUS!", x: catcher.x, y: catcher.y-50, color: color(255,200,0), life: 90 });
    spawnConfetti(catcher.x, catcher.y - 20, 100, 5);
  } else {
    score++; 
    combo++;
    lastCatchTime = millis();

    messages.push({ text: combo >= 3 ? "🔥 Combo!" : "Nice!", x: catcher.x, y: catcher.y-50, color: color(0,200,0), life: 50 });

    if (combo === 3) {
      spawnConfetti(catcher.x, catcher.y - 20, 60, 4);
    } else if (combo > 3) {
      spawnConfetti(catcher.x, catcher.y - 20, 8, 2);
    }
  }

  if (fallingObject) {
    fallingObject.y = 0;
    fallingObject.x = random(80, 320);
    fallingObject.vel.y = random(1.2, 2.0);
    fallingObject.vel.x = 0;               
    assignRandomFood(fallingObject);
    fallingObject.visible = true;
  }
}

function missedOne() {
  score--;
  combo = 0;
  messages.push({ text: "Oops!", x: catcher.x, y: catcher.y-50, color: color(200,0,0), life: 50 });
  if (fallingObject) {
    fallingObject.y = 0;
    fallingObject.x = random(80, 320);
    fallingObject.vel.y = random(3.5, 5.0); 
    fallingObject.vel.x = 0;                
    assignRandomFood(fallingObject);
    fallingObject.visible = true;
  }
}

function updateAndDrawConfetti() {
  noStroke();
  for (let i = confetti.length - 1; i >= 0; i--) {
    let p = confetti[i];
    p.vy += 0.08;            
    p.vx *= 0.99;             
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    fill(p.color[0], p.color[1], p.color[2]);
    push();
    translate(p.x, p.y);
    rotate((frameCount + i) * 0.05);
    rectMode(CENTER);
    rect(0, 0, p.r * 1.4, p.r * 0.8);
    pop();
    if (p.life <= 0 || p.y > height + 30) {
      confetti.splice(i, 1);
    }
  }
}

function draw() {
  background(bg);

  fill(0);
  stroke(255);
  strokeWeight(2);
  textSize(20);
  textAlign(LEFT, CENTER);
  text("Score: " + score, 10, 25);
  text("Time: " + timer, 10, 55);
  noStroke();

  for (let m of messages) {
    fill(m.color);
    textAlign(CENTER);
    textSize(16);
    text(m.text, m.x, m.y);
    m.y -= 0.5;
    m.life--;
  }
  messages = messages.filter(m => m.life > 0);

  if (fallingObject) {
    if (gameState === "play") {
      fallingObject.visible = true;
    } else {
      fallingObject.visible = false;
      fallingObject.vel.y = 0;
    }
  }

  if (gameState === "start") {
    let boxMarginX = 30;
    let boxW = width - boxMarginX * 2;
    let padding = 14;

    let titleText = "PIZZA CATCHER";
    textSize(22);
    textLeading(26);
    let titleHeight = textAscent() + textDescent();

    let instructions = [
      "Catch falling toppings to build the perfect pizza.",
      "Cheese = +3 bonus (rare!)",
      "Use the LEFT and RIGHT arrow keys to move.",
      "Catch as many toppings before the time runs out.",
      "Press SPACE to start!"
    ];
    textSize(14);
    textLeading(20);
    let lineHeight = textAscent() + textDescent() + 6;
    let instructionBlockHeight = instructions.length * lineHeight;

    let spacingBetweenTitleAndInstructions = 12;
    let totalTextHeight = padding * 2 + titleHeight + spacingBetweenTitleAndInstructions + instructionBlockHeight;

    let boxX = boxMarginX;
    let boxY = max(40, height / 2 - totalTextHeight / 2);

    fill(255, 255, 255, 230);
    stroke(200);
    strokeWeight(1);
    rect(boxX, boxY, boxW, totalTextHeight, 10);
    noStroke();

    textSize(22);
    textAlign(CENTER, TOP);
    fill(0);
    let titleY = boxY + padding;
    text(titleText, width / 2, titleY);

    textSize(14);
    textAlign(LEFT, TOP);
    fill(30);
    let startY = titleY + titleHeight + spacingBetweenTitleAndInstructions;
    let textX = boxX + padding;
    for (let i = 0; i < instructions.length; i++) {
      text(instructions[i], textX, startY + i * lineHeight, boxW - padding * 2);
    }
    return;
  }

  if (gameState === "play") {
    if(kb.pressing("left")) catcher.vel.x = -3;
    else if(kb.pressing("right")) catcher.vel.x = 3;
    else catcher.vel.x = 0;
    catcher.x = constrain(catcher.x, 50, 350);

    if (fallingObject) {
      fallingObject.vel.y += 0.06;

      if(fallingObject.collides(catcher)) 
        caughtOne();
      else if(fallingObject.y >= height) 
        missedOne();
    }

    drawSprites();
    updateAndDrawConfetti();

    if (timer <= 0) gameState = "end";
    if (score >= 15) {
      specialWin = true;
      gameState = "end";
    }
  } else {
    drawSprites();
    updateAndDrawConfetti();
  }

  if (gameState === "end") {
    fill(255,255,255,180);
    rect(0,0,width,height);
    if (specialWin) 
      endScreen("AMAZING! 🎉", "Perfect pizza achieved!");
    else 
      endScreen(score >= 10 ? "YOU WIN!" : "GAME OVER", score >= 10 ? "Perfect pizza achieved!" : "Toppings are all over the place...");
  }
}

function endScreen(title, subtitle) {
  fill(255,255,255,230);
  rect(0,0,width,height);

  if(title === "GAME OVER") {
    fill(200,0,0);
  } else {
    fill(0,150,0);
  }

  textSize(32);
  textAlign(CENTER,CENTER);
  text(title, width/2, height/2 - 20);

  fill(200,0,0);
  textSize(16);
  text(subtitle, width/2, height/2 + 10);

  textSize(14);
  text("CLICK TO RESTART", width/2, height/2 + 40);
}

function keyPressed() {
  if (gameState === "start" && key === " ") {
    gameState = "play";
    timer = 30;
    score = 0;
    combo = 0;
    confetti = [];
    messages = [];
    startFallingObject(); 
  }
}

function mousePressed() {
  if (gameState === "end") {
    score = 0;
    combo = 0;
    specialWin = false;
    confetti = [];
    messages = [];
    catcher.x = 200;

    if (fallingObject) {
      fallingObject.visible = false;
      fallingObject.vel.y = 0;
      fallingObject.y = -100; 
    }

    gameState = "start";
  }
}