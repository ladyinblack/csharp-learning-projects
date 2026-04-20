using System;

namespace LearnCS
{
    public static class UIHelper
    {
        // A reusable "Press any key" method
        public static void Wait()
        {
            Console.ResetColor();
            Console.WriteLine("\n[Press any key to continue...]");
            Console.ReadKey();
        }

        // A reusable header for all your projects
        public static void ShowHeader(string title)
        {
            Console.Clear();
            Console.WriteLine("=================================");
            Console.WriteLine($"  PROJECT: {title.ToUpper()}");
            Console.WriteLine("=================================");
        }
    }
}
