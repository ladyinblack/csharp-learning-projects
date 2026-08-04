# GDD: THE ALCHEMIST'S AXIOM

**Working Title:** *The Alchemist's Axiom: Protocol 7*
**Genre:** Logic-Puzzle / Survival Narrative
**Theme:** Victorian Steampunk / Occult Science

## 1. Game Overview
You are an apprentice in the *Great Library of Aether*.  Your mentor has vanished, leaving the **Aether Core** unstable.  If the core reaches Critical Mass, the city is vaporized.  You must use the "Logic Terminal" to stabilize pressures, decode resonance keys, and make life-or-death decisions.

## 2. Core Mechanics (The "Engine" Alignment)

### Phase I: The Resonance Tuner (Lesson: Conditionals & Strings)

*Based on the Password Checker project*

To access the core, you must input a **Stabilization Key**.
- **The Logic:** Instead of "passwords", you are checking for "Harmonic Resonance".
- **Validation Rules:**
  a. Length >= 8 (Structural Integrity).
  b. Has Uppercase (High-Voltage).
  c. Has Lowercase (Low-Voltage).
  d. Has Digits (Numerical Calibration).
  e. Has Symbols (Elemental Catalyst).
- **Outcome:** A `switch` statement determines if the core's shield is "Brittle", "Stable", or "Reinforced".

### Phase II: The Pressure Valve (Lesson: Numbers & Logic)

*Based on the Space Expedition project.* 

You must evaluate three Boolean parameters to see if the core can be vented:
- `isPressureSafe` (Boolean)
- `isHeatStable` (Boolean) 
- `isValveUnlocked` (Boolean) 
- **The Logic:** `isVentPossible = isPressureSafe && (isHeatStable || isValveUnlocked);` 

### Phase III: The Choice (Lesson: Choose Your Own Adventure)

The Core begins to hum.  You have one chance to save the lab.
- **Path A (The "Knock" equivalent):** You attempt to "Commune" with the Machine Spirit (The Riddle).
- **Path B (The "Open" equivalent):** You use the "Manual Override Keys" (The Switch statement 1-3).

### Phase IV: The Ingredient Array (Lesson: Intro to Arrays)

Instead of just one choice, the computer displays an **Array** of available catalysts.
`string[] ingredients = { "Mercury", "Salt", "Sulfur", "Lead", "Gold" };`
The user must pick the index (0-4) that corresponds to the correct solution.

## 3. Technical Specifications

| Feature | C# Implementation | 
| ------- | ----------------- |
| **User Identity** | `string name` + Interpolation | 
| **Stability Scoring** | `int stabilityScore` (0-5) via `if` statements |
| **System Rating** | `switch(stabilityScore)` with different  string outputs |
| **Environmental Logic** | Boolean Comparison Operators (`&&`, `||`) | 
| **Branching Narrative** | Nested `if-else` blocks for the "Adventure" | 
| **Ingredient List** | `string[]` to store and display choices | 

## 4. The Narrative Flow
a. **Boot Up:** "Hello, Apprentice [Name].  The Aether Core is at [Year] cycles of instability."
b. **Security:** "Inject Resonance Key to begin stabilization..." 
c. **Evaluation:** "Key Strength: [Rating].  Shielding is [Status]."
d. **The Crisis:** "The Pressure Valve is stuck!  Do you: [A] Smash it with a wrench or [B] Calibrate the gears?"
e. **The Conclusion:** Depending on the key strength from Phase 1 and the choice in Phase 4, the city is either saved, frozen in time, or turned to gold. 
