using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCS.AlchemistsAxiom
{
    /**
     * THE PRESSURE VALVE IMPLEMENTATION
     */

    public class PhaseTwo
    {
        /**
         * The core is vibrating,and the steam pipes are beginning to hiss. 
         * Now that we have our Resonance Key and Stability Score from Phase I, we need to handle the physical pressure of the Aether.
         * 
         * In this phase, we implement the logic engine from the "Space Expedition" project.  We will evaluate three environmental factors to see if the laboratory stays in one piece.
         * 
         * We use Boolean Logic (&&, ||, !) and Comparison Operators (<, >).
         * We will also introduce a Random Number Generator to make the pressure levels different every time you play.
         */

        // We pass the stabilityScore from Phase I to influence this phase
        public static void Run(int stabilityScore)
        {
            UIHelper.ShowHeader("AETHER CORE: PRESSURE DIAGNOSTICS");

            // --- 1. SENSOR DATA (The Engine) --- 
            Random rng = new Random();

            // Requirements: Three Boolean parameters.
            // Pressure is safe if it's below a certain point (calculated later)
            bool isCasingIntact = stabilityScore > 2;       // Based on your Resonance Key!
            bool isVentAccessible = true;
            bool isEmergencyCoolantReady = rng.Next(0, 2) == 1;     // 50/50 chance of being true

            // --- 2. THE LOGIC GATES --- 

            // Requirement: Evaluation using AND (&&) 
            // The Core can only be vented if the casing is intact AND the vent isn't blocked.
            bool canVentSafely = isCasingIntact && isVentAccessible;

            // Requirement: Evaluation using OR (||)
            // Expansion of the safety field is possible if the casing is intact OR coolant is ready.
            bool expansionPossible = isCasingIntact || isEmergencyCoolantReady;

            // --- 3. NUMERICAL COMPARISON --- 
            // Requirement: current vs max comparison 
            int currentEtherPressure = rng.Next(80, 150);
            int maxSafePressure = 120;

            bool isPressureSafe = currentEtherPressure < maxSafePressure;

            // --- 4. TACTICAL OVERLAY (The Reveal) --- 
            Console.WriteLine($"[ANALYSIS]: Current Ether Density at {currentEtherPressure} units.");
            Console.WriteLine($"[ANALYSIS]: Max Threshold is {maxSafePressure} units.");
            Thread.Sleep(1000);

            Console.WriteLine("\n--- SYSTEM STATUS ---");
            Console.WriteLine($"CASING INTEGRITY: {(isCasingIntact ? "SECURED" : "CRACKED")}");
            Console.WriteLine($"VENT ACCESSIBILTY: {(isVentAccessible ? "OPEN" : "BLOCKED")}");
            Console.WriteLine($"EMERGENCY COOLANT: {(isEmergencyCoolantReady ? "ARMED" : "OFFLINE")}");

            Console.WriteLine("\n" + "-".PadRight(40, '-'));

            // The spectacular "Control Flow" outcome
            if (isPressureSafe && canVentSafely)
            {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("SUCCESS: Pressure stabilized. The laboratory is safe.");
            }
            else if (!isPressureSafe && expansionPossible)
            {
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine("CAUTION: Pressure critical! Emergency coolant or field expansion engaged.");
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("CATASTROPHE: Pressure overflow. Casing failure imminent.");
                Console.WriteLine("EVACUATE IMMEDIATELY.");
            }

            Console.ResetColor();

            UIHelper.Wait();
        }
    }
}
