using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCS.AlchemistsAxiom
{
    /**
     * THE ELEMENTAL TRANSMUTATION IMPLEMENTATION
     */

    public class PhaseFour
    {
        /**
         * The air in the chamber is heavy with the smell of ozone and ancient parchment. We have reached the final step of the Alchemist's Axiom. To achieve the legendary "Golden Ending", you must perform a final transmutation using a collection of rare catalysts.
         * 
         * In this phase, we introduce the Array. In programming, an array is like a shelf with labeled slots. Each slot (index) holds a piece of data, and we start counting those slots from 0.
         */

        public static void Run()
        {
            UIHelper.ShowHeader("PHASE IV: THE CATALYST ARRAY");

            // --- 1. THE COLLECTION (The Array Engine) --- 
            // Requirement: Create a string array of ingredients 
            string[] catalysts = { "MERCURY", "SULFUR", "SALT", "LEAD", "AETHER-GOLD" };

            Console.WriteLine("The transmutation circle is drawn. You have five catalysts on the shelf.");

            // Displaying the array items with their index numbers
            for (int i = 0; i < catalysts.Length; i++)
            {
                Console.WriteLine($"  [{i}] {catalysts[i]}");
            }

            // --- 2. THE SELECTION --- 
            Console.Write("\nSelect the index of the final catalyst (0-4): ");
            string? input = Console.ReadLine();

            // We convert the string input to an integer to use as an index 
            if (int.TryParse(input, out int choice))
            {
                // --- 3. THE VALIDATION --- 
                // We check if the choice is within the bounds of the array 
                if (choice >= 0 && choice < catalysts.Length)
                {
                    string selected = catalysts[choice];
                    Console.WriteLine($"\nYou cast {selected} into the Core...");
                    Thread.Sleep(1500);

                    // --- 4. THE GOLDEN ENDING LOGIC --- 
                    if (selected == "AETHER-GOLD")
                    {
                        Console.ForegroundColor = ConsoleColor.Yellow;
                        Console.WriteLine("\n[THE MIRACLE]: The lead walls of the lab dissolve into pure gold.");
                        Console.WriteLine("You have achieved the Magnum Opus. You are the Master Alchemist.");
                    }
                    else if (selected == "LEAD")
                    {
                        Console.WriteLine("\n[THE EQUIVALENT EXCHANGE]: Nothing changes, but the core stabilizes.");
                        Console.WriteLine("A modest success. The city survives another day.");
                    }
                    else
                    {
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine($"\n[THE REACTION]: {selected} was too volatile!");
                        Console.WriteLine("The experiment fails. The lab is filled with purple smoke.");
                    }
                }
                else
                {
                    Console.WriteLine("\n[ERROR]: You reached for a shelf that doesn't exist. The circle breaks.");
                }
            }
            else
            {
                Console.WriteLine("\n[ERROR]: Invalid input. The transmutation requires a numerical coordinate.");
            }

            Console.ResetColor();
            Console.WriteLine("\n" + "=".PadRight(40, '='));
            Console.WriteLine("TERMINAL SHUTTING DOWN... GOODBYE.");

            UIHelper.Wait();
        }
    }
}
