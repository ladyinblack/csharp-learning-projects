using System;
using System.Threading;

namespace LearnCS
{
    /**
     * THE IDEA: The "TREASURE DIVIDER 3000" 
     * -------------------------------------
     * 
     * Instead of just a "coin converter", let's build a program that simulates an 
     * automated treasure chest.  When the user enters their "Total Loot" (in cents), the 
     * machine "processes" the physical weight of the coins and dispenses them with sound 
     * effects and visual flair.
     */
    public class MoneyMaker
    {
        public static void Run()
        {
            UIHelper.ShowHeader("Treasure Divider 3000");

            // 1. Capture & Rounding (Optional Challenge Included)
            Console.WriteLine("Welcome, Hunter. Deposit your raw credits below.");
            Console.Write("Amount to Sort: ");
            string? input = Console.ReadLine();

            // We use Math.Floor here to handle the "16.2 cents" challenge immediately
            double total = Math.Floor(Convert.ToDouble(input));

            Console.WriteLine($"\n[SYSTEM] Analyzing {total} credits...");

            // 2. The "Processing" Animation
            Console.Write("Sorting");
            for (int i = 0; i < 5; i++)
            {
                Console.Write(".");
                Console.Beep(500 + (i * 100), 100); // Rising pitch beeps
                Thread.Sleep(200);
            }
            Console.WriteLine("\nDone!\n");

            // 3. The Math (Codecademy Requirements)
            int goldValue = 10;
            int silverValue = 5;

            double goldCoins = Math.Floor(total / goldValue);
            double remainder = total % goldValue;

            double silverCoins = Math.Floor(remainder / silverValue);
            remainder = remainder % silverValue;        // The remainder is now the bronze coins 

            // 4. The Gamey Output
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"  [ G ] Gold Bars: {goldCoins}");

            Console.ForegroundColor = ConsoleColor.Gray;
            Console.WriteLine($"  [ S ] Silver Bits: {silverCoins}");

            Console.ForegroundColor = ConsoleColor.Red;     // Bronze-ish
            Console.WriteLine($"  [ B ] Bronze Scraps: {remainder}");

            Console.ResetColor();
            Console.WriteLine("\n***********************************");
            Console.WriteLine("Transaction Complete.  Happy Hunting!");

            UIHelper.Wait();
        }
    }
}
