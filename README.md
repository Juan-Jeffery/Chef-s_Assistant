# Chef's Assistant (Professional Suite)

[![How to eat](https://img.shields.io/badge/Demo-Live_Site-92a8d1?style=for-the-badge&logo=google-chrome&logoColor=white)](https://juan-jeffery.github.io/Chef-s_Assistant/)

A modular, lightweight web suite designed to optimize meal planning and kitchen efficiency through intelligent scheduling algorithms and a cohesive Morandi aesthetic.

---

## Project Structure

The system is organized into specialized modules to ensure high cohesion and shared data consistency:

```bash
Chef-s_Assistant/
├── index.html          # Gateway (Main Entry)   
├── assistant/
│   └── assistant.html      # Meal Planner (Advanced Scheduling)
│   └── recipes.js       # Global Recipe Database
│   └── scheduler.js     # Logic for Intelligent Cooking Scheduling
├── planner/
│   └── planner.html      # Weekly Planner (Grocery Aggregator)
└── randomizer/
    └── randomizer.html      # I Don't Know (Decision Roulette)
```

---

## ✨ Introduction to Three Core Modules

### 1. 🗓️ Weekly Planner
This is your food planning brain. You can plan your breakfast, lunch, and dinner for five days a week here, and the system will automatically handle the tedious statistical work for you.

- **Meal Records**: Add dishes you want to eat within the corresponding time slots.

- **Automated List**: The system automatically scans all ingredients in all cards and generates a "Shopping List Summary" below, automatically summing the quantities of the same ingredients so you won't miss anything when shopping.

### 2. 👨‍🍳 Meal Planner
Designed to solve the chaos of "cooking several dishes at the same time." Through intelligent logic, it becomes your kitchen commander.

- **Utensil-Guided Filtering**: Automatically lists recipes that can be made based on your existing cookware (rice cooker, frying pan, saucepan, etc.).

- **Visual Timeline:** After selecting your meal, the system calculates the optimal cooking order and generates a "cooking timeline," telling you which pot should be cooked first and which should be prepared later.

- **Menu Export:** Generate a beautiful PNG menu image of today's meals with one click for easy saving or sharing.

### 3. ❓ I Don't Know (Food Spinner) 
For those moments of indecision. When you're staring blankly at the refrigerator or unsure which dish to choose, let the spinner help you decide.

- **Quick Decision:** Click the "Select" button, and the spinner will randomly select a classic dish.

- **Visual Feedback:** The minimalist dark-style spinner design makes the decision-making process fun and ceremonial.

---

## Getting Started

1. **Planning Phase:** Start the `Weekly Planner` to set your weekly goals and obtain a shopping list.

2. **Prepare Food**: Open `Meal Planner`, select the cookware you plan to use, and add your favorite dishes to the to-cook list.

3. **Schedule**: Click "Calculate Cooking Schedule" to cook efficiently according to the output timeline.

4. **Random Moments**: If you have no ideas, go to `I Don't Know` to share today's surprise.

---

## Development Roadmap

- [x] Automated ingredient quantity accumulation logic.

- [x] Visualized cooking timeline (Gantt-style).

- [x] Responsive mobile interface and Morandi style design.

- [ ] Support for user-defined recipes.

- [ ] Local Storage function; data is not lost after closing the webpage.