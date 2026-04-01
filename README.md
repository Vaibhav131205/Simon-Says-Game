# Simon Says Game

> A fun and interactive memory-based game built with **HTML, CSS, and JavaScript** where players repeat an ever-growing sequence of colors.

---

## Tech Stack

- HTML5  
- CSS3  
- Vanilla JavaScript  

---

## Gameplay

1. Press **any key** to start the game  
2. The game flashes a **random color**  
3. Click the color shown  
4. Each level adds a new color to the sequence  
5. Repeat the full sequence correctly to progress  
6. One mistake = **Game Over**

---


---

## Core Logic

- `game_seq` → Stores the correct sequence  
- `user_seq` → Stores user input  
- `level` → Tracks current level  

### Key Functions:
- `levelUp()` → Generates next sequence  
- `btnFlash()` → Shows game pattern  
- `userFlash()` → Shows user click  
- `checkAns()` → Validates input  
- `reset()` → Restarts game  

---

## Features

- Dynamic sequence generation  
- Smooth flash animations  
- Level progression  
- Game over detection  
- Instant restart  



