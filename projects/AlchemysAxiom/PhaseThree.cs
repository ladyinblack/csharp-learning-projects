using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCS.AlchemistsAxiom
{
    /**
     * THE FINAL AXIOM IMPLEMENTATION
     */

    public class PhaseThree
    {
        /**
         * The core is glowing a violent violet. The pipes are screaming. We have arrived at the Final Axiom.
         * 
         * In this phase, we implement the "Choose Your Own Adventure" engine. We will use branching paths, string normalization (ToUpper), a switch statement for the manual override, and a ternary statement for the riddle.
         */

        public static void Run(string name)
        {
            UIHelper.ShowHeader("THE FINAL AXIOM: CORE CHAMBER");

            // --- 1. THE CLIMAX BEGINS (Narrative Setup ---
            Console.WriteLine($"The Aether Core has reached its Zenith point, {name}.");
            Console.WriteLine("The shadows of the laboratory are stretching toward the ceiling.");
            Console.WriteLine("Two consoles remain active. Do you attempt a REPAIR or an OVERRIDE?");

            // Requirement: Instruction and Capture input
            Console.Write("\nType REPAIR or OVERRIDE: ");
            // Requirement: Normalize to Uppercase 
            string coreChoice = Console.ReadLine().ToUpper();

            // --- 2. BRANCHING LOGIC (The Adventure Engine) --- 

            // Requirement 7: If the user picks REPAIR (Logic/Riddle path) 
            if (coreChoice == "REPAIR")
            {
                Console.WriteLine("\nYou place your hands on the brass terminal.");
                Console.WriteLine("A voice of grinding gears whispers: 'Answer this riddle or be consumed...'");
                Console.WriteLine("\n'I have no voice, but I can speak through the void.");
                Console.WriteLine("Poor people have it. Rich people need it.");
                Console.WriteLine("If you eat it, you die. What is it?'");

                Console.Write("\nType your answer: ");
                string riddleAnswer = Console.ReadLine().ToUpper();

                // Requirement 14: Ternary Operator outcome 
                string riddleResult = (riddleAnswer == "NOTHING")
                    ? "The Core sighs. The violet light fades into a calm blue.\nYou have balanced the Axiom.\nTHE END."
                    : "The gears grind your answer into dust. The Core erupts.\nTHE CITY TURNS TO LEAD.\nTHE END.";

                Console.WriteLine($"\n{riddleResult}");
            }
            // Requirement 8: Else if the user picks OVERRIDE (Manual/Switch path)
            else if (coreChoice == "OVERRIDE")
            {
                Console.WriteLine("\nYou pull the manual lever. A hidden panel slides open.");
                Console.WriteLine("Three alchemical keys sit before you. One will vent the Core.");

                Console.Write("\nEnter a Key Number (1-3): ");
                string keyChoice = Console.ReadLine();  // We treat as string for the switch

                // Requrement 17-18: Switch Statement for outcome 
                Console.WriteLine();
                switch (keyChoice)
                {
                    case "1":
                        Console.WriteLine("You turn Key 1. Steam hisses and the pressure drops safely.");
                        Console.WriteLine("You have saved the sector, but the Alchemist's secrets are lost.");
                        Console.WriteLine("THE END!");
                        break;
                    case "2":
                        Console.WriteLine("You turn Key 2. The key snaps in the lock.");
                        Console.WriteLine("The Core begins to melt through the floor.");
                        Console.WriteLine("THE END!");
                        break;
                    case "3":
                        Console.WriteLine("You turn Key 3. A localized explosion freezes the lab in time.");
                        Console.WriteLine("You are now a statue of brass and glass.");
                        Console.WriteLine("THE END!");
                        break;
                    default:
                        Console.WriteLine("You hesitate too long. The Core makes the choice for you.");
                        Console.WriteLine("Everything fades to white.");
                        Console.WriteLine("THE END!");
                        break;
                }
            }
            else
            {
                // Requirement: Handle "No Adventure" option
                Console.WriteLine("\nYou stand paralyzed as the Aether consumes the room.");
                Console.WriteLine("Not much of an Alchemist if we don't touch the controls!");
                Console.WriteLine("THE END!");
            }

            Console.WriteLine("\n" + "=".PadRight(40, '='));

            UIHelper.Wait();
        }
    }
}
