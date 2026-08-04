using LearnCS.AlchemistsAxiom;
using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCS
{
    public class AlchemistsAxioms
    {
        public static void Run()
        {
            // 1. Setup global variables needed across the game
            string playerDisplayName;
            int finalStabilityScore;

            // --- THE GAME LOOP --- 

            // PHASE I: Identification & Key Entry 
            // We capture the name and score returned by Phase I 
            // (Assuming PhaseOne.Run() was modified to return an int)
            finalStabilityScore = PhaseOne.Run(out playerDisplayName);

            // PHASE II: Pressure Diagnostics
            // We pass the score from Phase I into Phase II 
            PhaseTwo.Run(finalStabilityScore);

            // Example: Adding a riddle gate between Phase Two and Phase Three 
            bool gatePassed = false;

            while (!gatePassed)
            {
                Console.WriteLine("\n[SECURITY]: To access the Core Chamber, you must solve the Resonance Cipher.");

                // Calling RiddleSystem 
                gatePassed = RiddleSystem.RunRiddle(
                    "I am the breath of the lab, the soul of the machine...",
                    "AETHER",
                    "The name of the Axiom."
                );

                if (!gatePassed)
                {
                    Console.WriteLine("The laboratory locks hiss. Try again, Apprentice.");
                }
            }

            // PHASE III: The Adventure Choice
            // We pass the player's name into a narrative 
            PhaseThree.Run(playerDisplayName);

            // PHASE IV: The Final Array Transmutation
            PhaseFour.Run();

            // PHASE V: The Automated Scan (Loops) 
            LoopAutomation.Run();

            Console.WriteLine("\n[SYSTEM] All Alchemical Protocols Complete. Terminal Closing.");
        }
    }
}
