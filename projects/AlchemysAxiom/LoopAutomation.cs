using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCS.AlchemistsAxiom
{
    /**
     * THE "AETHER SECTOR SCAN" 
     */

    public class LoopAutomation
    {
        /**
         * We will use a `for` loop to scan 100 sectors. To make it "spectacular", we'll add a simulated loading bar and random "Anomaly" detection.
         */

        public static void Run()
        {
            UIHelper.ShowHeader("AUTOMATED SECTOR SCAN: CITY OF BRASS");

            Console.WriteLine("[SYSTEM] Initializing Wide-Range Aether Scan...");
            Console.WriteLine("[SYSTEM] Scanning 100 Sectors for Instability...\n");

            Random scannerRng = new Random();
            int anomaliesFound = 0;

            // --- 1. THE FOR LOOP (The Counter) --- 
            // (Start at 0; Continue while i < 100; Increment i by 1) 
            for (int i = 1; i <= 100; i++)
            {
                // Logic: 5% chance to find an anomaly in any given sector 
                bool isStable = scannerRng.Next(1, 101) > 5;

                if (!isStable)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"  [!] Sector {i:D3}: INSTABILITY DETECTED");
                    anomaliesFound++;
                    Console.ResetColor();
                }
                else if (i % 10 == 0)       // Every 10 sectors, show a progress pulse 
                {
                    Console.ForegroundColor = ConsoleColor.DarkGray;
                    Console.WriteLine($"  ...Sector {i:D3}: Stable");
                    Console.ResetColor();
                }

                // Small delay to make it look like the computer is "thinking" 
                Thread.Sleep(20);
            }

            // --- 2. THE RESULT --- 
            Console.WriteLine("\n" + "=".PadRight(40, '='));
            Console.WriteLine($"SCAN COMPLETE.");
            Console.WriteLine($"TOTAL ANOMALIES DETECTED: {anomaliesFound}");

            if (anomaliesFound > 10)
            {
                Console.WriteLine("ADVISORY: City-wide evaluation recommended.");
            }
            else
            {
                Console.WriteLine("ADVISORY: Localized containment sufficient.");
            }

            UIHelper.Wait();
        }
    }
}
