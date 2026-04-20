using System.Threading;

namespace LearnCS
{
    /**
     * CONSOLE CREATURES (by Codecademy)
     * 
     * My Version: The "Sentient" ASCII Pet
     * Instead of drawing a creature, the user will "wake it up", name it, and choose its mood.
     * The creature's appearance and color will change based on the user's input.
     * 
     * In addition, I made my creature dance!!
     */
    public class ConsoleCreatures
    {
        public static void Run()
        {
            UIHelper.ShowHeader("Console Creatures");

            // 1. Interactive Naming
            Console.Write(" What will you name your creature? ");
            string? name = Console.ReadLine();

            // 2. Choice of Personality
            Console.WriteLine("$\nHow is {name} feeling today?");
            Console.WriteLine("1. Happy\n2. Grumpy\n3. Ghostly\n4. Spacey");
            Console.Write("Select (1-4): ");
            string? choice = Console.ReadLine();

            // Variables to hold our creature's features
            string eyes = "(o o)";
            string mouth = "| 0 |";
            ConsoleColor creatureColor = ConsoleColor.White;

            // 3. Logic to change the creature based on input
            switch (choice)
            {
                case "1":
                    eyes = "(^ ^)";
                    mouth = "| w |";
                    creatureColor = ConsoleColor.Yellow;
                    break;
                case "2":
                    eyes = "(> <)";
                    mouth = "| - |";
                    creatureColor = ConsoleColor.Red;
                    break;
                case "3":
                    eyes = "(o o)";
                    mouth = "| O |";
                    creatureColor = ConsoleColor.Cyan;
                    break;
                case "4":
                    eyes = "(. .)";
                    mouth = "| = |";
                    creatureColor = ConsoleColor.Magenta;
                    break;
                default:
                    Console.WriteLine("Invalid choice! Using default settings...");
                    break;
            }

            // 4. The Grand Reveal
            Console.Clear();
            Console.ForegroundColor = creatureColor;

            Console.WriteLine("  .-.  ");
            Console.WriteLine($" {eyes}  <-- \"Hello! I'm {name}!\"");
            Console.WriteLine($" {mouth} ");
            Console.WriteLine(" |   | ");
            Console.WriteLine(" '~~~' ");

            Console.WriteLine($"\nWatch {name} dance!");
            Thread.Sleep(2000);     // Give them a second to get ready

            // ANIMATION LOOP
            for (int i = 0; i < 10; i++)
            {
                Console.Clear();
                Console.ForegroundColor = (i % 2 == 0) ? ConsoleColor.Cyan : ConsoleColor.Magenta;

                if (i % 2 == 0)
                {
                    // Frame A: Leaning Left
                    Console.WriteLine("   .-.  ");
                    Console.WriteLine("  (o o) ");
                    Console.WriteLine("  | 0 | ");
                    Console.WriteLine("  |   | ");
                    Console.WriteLine("  '~~~' ");
                }
                else
                {
                    // Frame B: Leaning Right (Extra spaces on the left)
                    Console.WriteLine("     .-.  ");
                    Console.WriteLine("    (o o) ");
                    Console.WriteLine("    | 0 | ");
                    Console.WriteLine("    |   | ");
                    Console.WriteLine("    '~~~' ");
                }

                Thread.Sleep(300);      // Wait 200ms before next frame
            }

            Console.Clear();
            Console.ResetColor();
            Console.WriteLine($"{name} is tired from all that dancing!");

            UIHelper.Wait();        // Using our new Helper class!
        }
    }
}
