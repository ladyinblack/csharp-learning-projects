using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCS.AlchemistsAxiom
{
    /**
     * THE RIDDLE SCRAMBER 
     */

    public class RiddleSystem
    {
        public static bool RunRiddle(string storyClue, string answer, string hint)
        {
            Console.WriteLine("\n" + new string('~', 30));
            Console.ForegroundColor = ConsoleColor.Magenta;
            Console.WriteLine(storyClue);
            Console.ResetColor();
            Console.WriteLine($"HINT: {hint}");
            Console.WriteLine("\n" + new string('~', 30));

            // --- 1. THE SCRAMBLE ENGINE (Arrays & Logic) --- 
            string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            Random rng = new Random();

            // Create a list of the answer's letters + 3 random ones 
            string pool = answer;
            for (int i = 0; i < 3; i++)
            {
                pool += alphabet[rng.Next(alphabet.Length)];
            }

            // Shuffle the letters (The "Spectacular" Array move)
            char[] shuffledPool = pool.ToCharArray();
            shuffledPool = shuffledPool.OrderBy(x => rng.Next()).ToArray();

            // --- 2. THE UI --- 
            Console.Write("\nAVAILABLE RESONANCE BITS: ");
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine($"[ {string.Join(" - ", shuffledPool)} ]");
            Console.ResetColor();

            Console.Write("Reconstruct the keyword: ");
            string? playerGuess = Console.ReadLine().ToUpper();

            if (playerGuess == answer)
            {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("\n>> RESONANCE MATCHED. The Core stabilizes slightly.");
                Console.ResetColor();
                return true;
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine($"\n>> FREQUENCY DISSONANCE. The correct word was {answer}.");
                Console.ResetColor();
                return false;
            }
        }
    }
}
