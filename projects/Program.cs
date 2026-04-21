using System;
using System.Threading;
using System.Collections.Generic;

namespace LearnCS
{
    /**
     * WELCOME TO MY LEARNING LAB PROJECTS
     * ===================================
     * 
     * The projects listed and run here are my modified projects, based on, in similar, to the 
     * Codecademy projects. 
     * 
     * This was done more so to strengthen and most likely improve my learning.
     */
    internal class Program
    {
        // We map a String (the menu key) to an Action (the method to run)
        // 'Action' is a built-in C# type that represents a method with no parameters
        static Dictionary<string, Action> projects = new Dictionary<string, Action>
        {
            { "A", ConsoleCreatures.Run },
            { "B", GalacticTravelAgency.Run },
            { "C", MoneyMaker.Run },
            { "D", MadLibs.Run },
            { "E", SpaceExpedition.Run },
        };

        static void Main(string[] args)
        {
            Console.WriteLine("===================================");
            Console.WriteLine("WELCOME TO MY LEARNING LAB PROJECTS");
            Console.WriteLine("===================================");

            bool running = true;

            while (running)
            {
                UIHelper.ShowHeader("MY C# LEARNING LAB");

                Console.WriteLine("SELECT A PROJECT:");
                foreach (var key in projects.Keys)
                {
                    Console.WriteLine($" [{key}] - {projects[key].Method.DeclaringType.Name}");
                }
                Console.WriteLine(" [Q] - Quit");

                Console.Write("\nSelection: ");
                string input = Console.ReadLine().ToUpper();

                if (input == "Q")
                {
                    running = false;
                }
                else if (projects.ContainsKey(input))
                {
                    // This is the magic line: it finds the method and "Invokes" it
                    projects[input].Invoke();
                }
                else
                {
                    Console.WriteLine("Invalid selection. Try again!");
                    Thread.Sleep(1000);
                }
            }
        }
    }
}
