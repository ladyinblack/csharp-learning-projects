using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCS.AlchemistsAxiom
{
    /**
     * THE RESONANCE TUNER IMPLEMENTATION
     */

    public class PhaseOne
    {
        /**
         * We're laying the first bricks of Aether Core. In this phase, we handle the "Identity" and the "Resonance Tuner."
         * 
         * Instead of checking for a password, we are checking if the Resonance Key the user provides is strong enough to keep the Aether from collapsing.
         * We will use System.Linq that lets us scan strings.
         */

        public static int Run(out string userName)
        {
            // --- 1. THE ARCHIVE BOOT-UP (Hello World & Variables) --- 
            UIHelper.ShowHeader("AETHER CORE: TERMINAL 07");

            Console.Write("Identify yourself, Apprentice: ");
            userName = Console.ReadLine();      // "out" sends this back to AlchemistsAxiom.cs (-> Program.cs) 
            Console.WriteLine($"\n[SYSTEM] Welcome, {userName}. The year is {DateTime.Now.Year}.");
            Console.WriteLine("The Core is humming at a dangerous frequency. We need a Resonance Key.");

            // --- 2. RESONANCE STANDARDS (Data Types) --- 
            int minLength = 8;
            string specialChars = "!@#$%^&*()_+-=";
            int stabilityScore = 0;

            Console.WriteLine("\n[RESISTANCE PROTOCOL]: Key must be 8+ chars, use High/Low voltage (caps), ");
            Console.WriteLine("and contain an Elemental Catalyst (symbol) and Calibration Digit (number).");

            Console.Write("\nInject Resonance Key: ");
            string? key = Console.ReadLine();

            // --- 3. HARMONIC VALIDATION (Conditionals & Logic) --- 
            // Requirement 4: Length check 
            if (key.Length >= minLength)
            {
                stabilityScore++;
            }

            // Requirement 5-8: Character checks using native C# methods 
            // .Any(char.IsUpper) scans every character to see if at least one is Uppercase
            if (key.Any(char.IsUpper)) stabilityScore++;
            if (key.Any(char.IsLower)) stabilityScore++;
            if (key.Any(char.IsDigit)) stabilityScore++;
            if (key.Any(c => specialChars.Contains(c))) stabilityScore++;

            // --- 4. THE CALIBRATION REPORT (Switch Statement) --- 
            Console.Clear();
            UIHelper.ShowHeader("HARMONIC STABILITY REPORT");
            Console.WriteLine($"Key Analyzed: {key}");
            Console.WriteLine($"Resonance Score: {stabilityScore}/5");

            string statusReport;
            ConsoleColor reportColor;

            switch (stabilityScore)
            {
                case 5:
                    statusReport = "PERFECT ALIGNMENT: The Core is reinforced.";
                    reportColor = ConsoleColor.Cyan;
                    break;
                case 4:
                    statusReport = "HIGH STABILITY: Minimal, vibrations detected.";
                    reportColor = ConsoleColor.Green;
                    break;
                case 3:
                    statusReport = "STABLE: Standard operating parameters met.";
                    reportColor = ConsoleColor.Yellow;
                    break;
                case 2:
                    statusReport = "UNSTABLE: Structural integrity at 40%.";
                    reportColor = ConsoleColor.Magenta;
                    break;
                case 1:
                    statusReport = "CRITICAL: Aether leakage imminent.";
                    reportColor = ConsoleColor.Red;
                    break;
                default:
                    statusReport = "REJECTED: Harmonic dissonance. Prepare for core collapse.";
                    reportColor = ConsoleColor.DarkRed;
                    break;
            }
            Console.ForegroundColor = reportColor;
            Console.WriteLine($"\nSTATUS: {statusReport.ToUpper()}");
            Console.ResetColor();

            Console.WriteLine("\n" + "-".PadRight(40, '-'));

            UIHelper.Wait();

            return stabilityScore;
        }
    }
}
