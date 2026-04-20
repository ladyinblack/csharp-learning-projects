using System;
using System.Threading;

namespace LearnCS
{
    /**
     * The Concept: The Starport Kiosk
     * 
     * The program will simulate a passenger checking in. It will take their data, 
     * perform the required age adjustment (perhaps a "Stasis Compensation" calculation), 
     * and then display a formatted "Digital Boarding Pass".
     */
    public class GalacticTravelAgency
    {
        public static void Run()
        {
            UIHelper.ShowHeader("Galactic Travel Agency - Check-In");

            // --- 1. DATA ENTRY ---
            Console.Write("Identify yourself (Name): ");
            string? passengerName = Console.ReadLine();

            Console.Write("Enter your current age: ");
            // We'll parse the input to an int for the math
            int passengerAge = int.Parse(Console.ReadLine() ?? "0");

            Console.WriteLine("\nAvailable Ticket Types: [First Class], [Business], [Economy]");
            Console.Write("Select Ticket Type: ");
            string? ticketType = Console.ReadLine();

            Console.Write("Destination Planet: ");
            string? preferredPlanet = Console.ReadLine();

            // --- 2. OLD THE 'LESSON' LOGIC (Behind the scenes) ---

            // Task: Increment Age (Stasis Adjustment)
            Console.WriteLine("\n[SYSTEM] Calculating 1-year stasis drift...");
            passengerAge += 1;

            // Task: Explicit Conversion (Casting)
            double passengerAgeDouble = (double)passengerAge;

            // Task: Implicit Conversion
            double passengerAgeDouble2 = passengerAge;

            // Task: Convert.ToString()
            string passengerAgeString = Convert.ToString(passengerAge);

            // --- 2. NEW: NUMERICS & OPERATORS (The Calculator) --- 
            Console.WriteLine("\n--- TRIP ESTIMATOR ---");
            Console.Write("How many passengers in your party? ");
            int partySize = int.Parse(Console.ReadLine() ?? "0");

            // Constants for our calculation
            double baseTicketPrice = 1500.50;
            double fuelSurcharge = 450.75;
            double spaceTaxRate = 0.08;     // 8% tax

            // Math Operations
            double subtotal = (baseTicketPrice + fuelSurcharge) * partySize;
            double taxAmount = subtotal * spaceTaxRate;
            double totalCost = subtotal + taxAmount;

            // --- 3. THE FINAL INVOICE REVEAL (The Boarding Pass) ---
            Thread.Sleep(2000);     // Dramatic pause for "processing"
            Console.Clear();

            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("*********************************************************");
            Console.WriteLine("* OFFICIAL GALACTIC BOARDING PASS & INVOICE             *");
            Console.WriteLine("*********************************************************");
            Console.ResetColor();

            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine($" PASSENGER: {passengerName?.ToUpper()}");
            Console.WriteLine($" DESTINATION: {preferredPlanet}");
            Console.WriteLine($" CLASS: {ticketType}");
            Console.WriteLine($" ADJUSTED AGE: {passengerAgeString} (Data Type: {passengerAgeString.GetType().Name})");
            Console.WriteLine("-----------------------------------------------------------------------");

            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine("BILLING SUMMARY");
            Console.WriteLine($"  Base + Fuel: {subtotal:C}");      // :C formats as Currency ($)
            Console.WriteLine($"  Intergalactic Tax (8%): {taxAmount:C}");
            Console.WriteLine("----------------------------------------");
            Console.WriteLine($"  TOTAL DUE: {totalCost:C}");
            Console.ResetColor();

            Console.WriteLine("\nPayment received. Your shuttle departs at 0400 hours.");
            Console.WriteLine("\nWelcome aboard the Galactic Express!");

            UIHelper.Wait();
        }
    }
}
