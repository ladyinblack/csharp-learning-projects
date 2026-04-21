using System;
using System.Threading;

namespace LearnCS
{
    public class SpaceExpedition
    {
        public static void Run()
        {
            UIHelper.ShowHeader("SPACE EXPLORATION ADVENTURE");

            Console.WriteLine("A. The A.I.L.A. Diagnostic");
            Console.WriteLine("B. The Vault Architect");

            Console.Write("Your Menu selection: ");
            string? choice = Console.ReadLine().ToUpper();

            switch (choice)
            {
                case "A":
                    PlanetaryScanner();
                    break;
                case "B":
                    BunkerManager();
                    break;
                default:
                    Console.WriteLine("Invalid Selection! Please try again...");
                    Console.ReadKey();
                    break;
            }
        }

        public static void PlanetaryScanner()
        {
            UIHelper.ShowHeader("S.S. BOOLEAN: PLANETARY SCANNER");

            Console.WriteLine("You are the Chief Science Officer.  You are interfacing with A.I.L.A. (Automated Intelligent Logic Analyst), the ship's computer, to determine if the crew should risk a landing on a newly discovered planet.\n" +
                "We will use the requirements (Breathable, Gravity, Resources) but display them as a Deep Space Tactical Report.\n");

            // --- 1. SENSOR READINGS (The Parameters) --- 
            Console.WriteLine(" [SYSTEM] Initializing Long-Range Sensors...");
            Thread.Sleep(1000);

            Console.WriteLine("\nTEST CASES: ");
            Console.WriteLine("SCENARIO: Paradise | Atmosphere -> True | Gravity -> True | Resources -> True");
            Console.WriteLine("SCENARIO: Vaccum Rock | Atmosphere -> False | Gravity -> True | Resources -> True");
            Console.WriteLine("SCENARIO: Gas Giant | Atmosphere -> True | Gravity -> False | Resources -> True");
            Console.WriteLine("SCENARIO: Void Ghost | Atmosphere -> False | Gravity -> False | Resources -> False\n");

            // Requirements: Boolean parameters 
            Console.Write("Is Atmosphere Breathable (Y/N)? ");
            string? atmosphere = Console.ReadLine();

            bool isAtmosphereBreathable = (atmosphere!.ToUpper() == "Y") ? true : false;

            Console.Write("Is Gravity Stable (Y/N)? ");
            string? gravity = Console.ReadLine();

            bool isGravityStable = (gravity!.ToUpper() == "Y") ? true : false;

            Console.Write("Are there sufficient resources available (Y/N)? ");
            string? resources = Console.ReadLine();

            bool resourcesSufficient = (resources!.ToUpper() == "Y") ? true : false;

            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine($">> ATMOSPHERE BREATHABLE: {isAtmosphereBreathable}");
            Console.WriteLine($">> GRAVITY STABILITY: {isGravityStable}");
            Console.WriteLine($">> RESOURCE DENSITY: {resourcesSufficient}");
            Console.ResetColor();

            // --- 2. LOGIC EVALUATION (The Calculations) --- 

            // Requirement: Atmosphere AND Gravity must be true for Habitation
            bool isHabitable = isAtmosphereBreathable && isGravityStable;

            // Requirement: Stable Gravity OR Sufficient Resources for Expansion
            bool suitableForExpansion = isGravityStable || resourcesSufficient;

            // --- 3. CREW MANIFEST (The Comparison) --- 
            Console.Write("How many in your current crew? ");
            int? currentCrew = Convert.ToInt32(Console.ReadLine());

            int maxCrewCapacity = 10;

            // Requirement: Comparison operator 
            bool canAcceptMoreCrew = currentCrew < maxCrewCapacity;

            // --- 4. THE COMMAND DECISION (The "Spectacular" Reveal) --- 
            Console.WriteLine("\n[A.I.L.A.] Processing planetary data...");
            Thread.Sleep(1500);
            Console.Clear();

            UIHelper.ShowHeader("MISSION READINESS REPORT");

            // Visual Logic Results
            Console.WriteLine($"OBJECTIVE: SURFACE LANDING");
            DisplayStatus("HABITATION SUITABILITY", isHabitable);

            Console.WriteLine($"\nOBJECTIVE: BASE EXPANSION");
            DisplayStatus("EXPANSION FEASIBILITY", suitableForExpansion);

            Console.WriteLine($"\nOBJECTIVE: PERSONNEL INTAKE");
            DisplayStatus("STATION CAPACITY AVAILABLE", canAcceptMoreCrew);
            Console.WriteLine($"   (Manifest: {currentCrew}/{maxCrewCapacity} units)");

            Console.WriteLine("\n" + "-".PadRight(40, '-'));
            if (!isHabitable && suitableForExpansion)
            {
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine("ADVISORY: Surface landing lethal. Recommend automated resource extraction only.");
            }
            else if (isHabitable)
            {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("ADVISORY: All parameters green.  Begin colonization protocols.");
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("ADVISORY: Abandon sector. Planet non-viable.");
            }

            Console.ResetColor();

            UIHelper.Wait();
        }

        // Helper to draw [YES] or [NO] with colors based on the boolean 
        private static void DisplayStatus(string label, bool result)
        {
            Console.Write($"{label.PadRight(30)} [");
            if (result)
            {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.Write("YES");
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.Write("NO");
            }
            Console.ResetColor();
            Console.WriteLine("]");
        }

        private static void BunkerManager()
        {
            UIHelper.ShowHeader("BMS: SECTOR-4 SETTLEMENT LOGIC");

            Console.WriteLine("You are the Lead Architect for Sector-4. A massive EMP has hit the city. You need to use the terminal to check if your bunker's \"Safe Zones\" are actually safe and if you can take in more refugees from the surface.\n");

            // --- 1. THE STATUS PARAMETERS (The Engine) --- 
            // Requirement 1-3: Three Boolean variables (True, False, True)
            bool isOxygenCirculating = true;        // Atmosphere Breathable 
            bool isBlastShieldActive = false;       // Gravity Stable 
            bool hasEmergencyRations = true;        // Resources Sufficient 

            Console.WriteLine("[DIAGNOSTIC] Pulling hardware status...");
            Thread.Sleep(800);
            Console.WriteLine($"  > Life Support:  {(isOxygenCirculating ? "ONLINE" : "OFFLINE")}");
            Console.WriteLine($"  > External Wall: {(isBlastShieldActive ? "SECURED" : "BREACHED")}");
            Console.WriteLine($"  > Rations:       {(hasEmergencyRations ? "STOCKED" : "DEPLETED")}");

            // --- 2. LOGIC EVALUATION --- 
            // Requirement 4-5: Evaluate AND (isHabitable) 
            // A zone is only "SECURE" if Air is flowing AND the Shield is up.
            bool isSafeZone = isOxygenCirculating && isBlastShieldActive;

            Console.WriteLine("\n[ANALYZING SAFETY PROTOCOLS...]");
            Thread.Sleep(1000);
            Console.WriteLine($"SAFETY RATING: {(isSafeZone ? "STABLE" : "CRITICAL FAILURE")}");

            // Requirement 6-7: Evaluate OR (suitableForExpansion) 
            // We can attempt an "EVACUATION" if the shield is active OR we at least have food.
            bool canEvaluateToSurface = isBlastShieldActive || hasEmergencyRations;

            Console.WriteLine($"EVACUATION STATUS: {(canEvaluateToSurface ? "AVAILABLE" : "IMPOSSIBLE")}");

            // --- 3. CAPACITY MANAGEMENT --- 
            // Requirement 8-11: Comparison (current vs max) 
            int currentSurvivors = 5;
            int maxVaultCapacity = 10;

            bool roomForRefugees = currentSurvivors < maxVaultCapacity;

            // --- 4. THE SPECTACULAR OUTPUT --- 
            Console.WriteLine("\n" + "=".PadRight(40, '='));
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine("TERMINAL SUMMARY:");
            Console.ResetColor();

            if (!isSafeZone)
            {
                Console.WriteLine("(!) WARNING: Safe-Zone 1 has been compromised.");
            }

            if (roomForRefugees)
            {
                int slots = maxVaultCapacity - currentSurvivors;
                Console.WriteLine($"[+] INTAKE: The Vault can accept {slots} more survivors.");
            }
            else
            {
                Console.WriteLine("[-] STATUS: Vault is at Maximum Capacity.");
            }

            Console.WriteLine("=".PadRight(40, '='));

            UIHelper.Wait();
        }
    }
}
