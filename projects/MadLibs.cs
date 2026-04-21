using System;
using System.Threading;

namespace LearnCS
{
    /**
     * The Idea: The Corrupted Data Log
     * --------------------------------
     * 
     * Instead of asking for "Adjectives" and "Nouns" in a vacuum, the computer terminal will 
     * report "Missing Data Segments" that you ned to manually override.
     */
    public class MadLibs
    {
        /** NEURAL ARCHIVE: MASTER SYNC-BANK */
        private static readonly string[] subjectNames =
        {
            "Vector", "Cipher", "Unit-734", "X-12", "Mainframe",        // High-Tech
            "Silas", "Lyra", "Kaelen", "Juno", "Talon",                 // Bio/Organic
            "Echo", "Void", "Ghost", "Null", "Shadow",                  // Mystery/Glitch
        };

        private static readonly string[] firstDescriptors =
        {
            "Radioactive", "Metallic", "Sentient", "Encrypted", "Digital",      // High-Tech
            "Feverish", "Primal", "Mutated", "Evolutionary", "Organic",         // Bio/Organic
            "Glitchy", "Haunting", "Forgotten", "Distorted", "Ethereal",        // Mystery/Glitch
        };

        private static readonly string[] secondDescriptors =
        {
            "Magnetic", "Chrome", "Kinetic", "Hyperactive", "Synthesized",      // High-Tech
            "Iridescent", "Slimey", "Pulsing", "Dormant", "Fertile",            // Bio/Organic
            "Scorched", "Vaporized", "Static", "Blurred", "Infinite",           // Mystery/Glitch
        };

        private static readonly string[] thirdDescriptors =
        {
            "Automated", "Calibrated", "Binary", "Modular", "Processing",       // High-Tech
            "Fragile", "Savage", "Predatory", "Decaying", "Vibrant",            // Bio/Organic
            "Anachronistic", "Cursed", "Hollow", "Unstable", "Abyssal",         // Mystery/Glitch
        };

        private static readonly string[] lifeforms =
        {
            "Cyber-wolf", "Drone-bee", "Tech-toad", "Laser-lion", "Holo-cat",       // High-Tech
            "Void-whale", "Astro-slug", "Bio-serpent", "Star-ape", "Moss-elk",      // Bio/Organic
            "Glitch-rat", "Shadow-bird", "Data-leech", "Ghost-moth", "Null-bear",   // Mystery/Glitch
        };

        private static readonly string[] rations =
        {
            "Protein-block", "Nutrient-paste", "Solar-flakes", "Noodle-bytes", "Fuel-bar",      // High-Tech
            "Bio-mush", "Kelp-strips", "Algae-stew", "Moss-bread", "Raw-marrow",                // Bio/Organic
            "Stardust-jerky", "Binary-biscuits", "Static-soup", "Void-fruit", "Ghost-grains",   // Mystery/Glitch
        };

        private static readonly string[] motorFunctions =
        {
            "Recalibrate", "Incinerate", "Teleport", "Materialize", "Reboot",       // High-Tech
            "Drift", "Evolve", "Burrow", "Tremble", "Breathe",                      // Bio/Organic
            "Flicker", "Phase", "Dissolve", "Warp", "Oscilate",                     // Mystery/Glitch
        };

        private static readonly string[] staticObjects =
        {
            "Mainframe", "Capacitor", "Holo-projector", "Circuit-board", "Cryo-pod",    // High-Tech
            "Biosphere", "Spore-cloud", "Nerve-cluster", "Fossil", "Shell",             // Bio/Organic
            "Obelisk", "Monolith", "Artifact", "Relic", "Totem",                        // Mystery/Glitch
        };

        private static readonly string[] powerSources =
        {
            "Dark-matter", "Singularity", "Ion-beam", "Fusion-cell", "Warp-drive",      // High-Tech
            "Heartbeat", "Life-force", "Soul-spark", "Blood-line", "Root-system",       // Bio/Organic
            "Paradox", "Entropy", "Gravity-well", "Chrono-trigger", "Void-core",        // Mystery/Glitch
        };

        private static readonly string[] organicMatters =
        {
            "Neon-peach", "Cyber-citrus", "Binary-banana", "Laser-lemon", "Titan-berry",        // High-Tech
            "Star-melon", "Moon-apple", "Nebula-fig", "Solar-plum", "Gravity-grape",            // Bio/Organic
            "Plasma-pear", "Ghost-cherry", "Void-lime", "Shadow-mango", "Null-orange",          // Mystery/Glitch
        };

        private static readonly string[] mythosFigures =
        {
            "The Archivist", "Nova-Prime", "Logic-Blade", "Vector-Man", "Pulse-Raider",     // High-Tech
            "Star-Lord", "Nebula-Guardian", "Gaia", "The Phoenix", "Solar-Knight",          // Bio/Organic
            "Dr. Strange", "Silver-Surfer", "The Vision", "Chronos", "Iron-Man",            // Mystery/Glitch
        };

        private static readonly string[] sectors =
        {
            "Neo-Tokyo", "Sector-9", "Titan-City", "Sol-Station", "Cyberia",                // High-Tech
            "Mars-Colony", "Europa-Base", "New-Genesis", "Zenith-Prime", "Avalon",          // Bio/Organic
            "The Abyss", "Andromeda-Void", "Glitch-Sector", "Shadow-Basin", "Sector-Zero",  // Mystery/Glitch
        };

        private static readonly string[] luxuryItems =
        {
            "Cyber-cupcake", "Orbit-éclair", "Quantum-quiche", "Binary-brownie", "Warp-waffle",     // High-Tech
            "Moon-pie", "Solar-sorbet", "Nebula-donut", "Galactic-gelato", "Honey-comb",            // Bio/Organic
            "Gravity-cake", "Plasma-pudding", "Comet-candy", "Ion-ice-cream", "Star-dust-tart",     // Mystery/Glitch
        };

        private static readonly string[] temporalCoords =
        {
            "2077", "2112", "2150", "2222", "2300",         // "High-Tech
            "10000", "5555", "3012", "3245", "4000",        // Bio/Organic
            "2029", "2999", "8888", "9999", "0001",         // Mystery/Glitch
        };

        /** THE "EXORCISM" WORD BANK */
        private static readonly string[] targetSystems =
        {
            "Aegis-9", "Chronos-Core", "Osiris-Mainframe", "Valkyrie-Node", "Hades-Server",     // Tech-Heavy
            "The Black-Box", "Leviathan", "Purgatory-Link", "Soul-Vault", "The Ossuary",        // Occult/Dark
            "Echo-Station", "Sector-Zero", "Ghost-Wire", "The Hollow", "Static-Base",           // Narrative/Glitch
        };

        private static readonly string[] weaponizedEmotions =
        {
            "Malfunction", "Static", "Feedback", "Latency", "Overflow",         // Tech-Heavy
            "Dread", "Paranoia", "Despair", "Hysteria", "Avarice",              // Occult/Dark
            "Nostalgia", "Melancholy", "Regret", "Loneliness", "Deja-Vu",       // Narrative/Glitch
        };

        private static readonly string[] occultSymbol =
        {
            "Hex-Block", "Cipher-Cross", "Bit-Seal", "Logic-Pentagram", "Macro-Rune",       // Tech-Heavy
            "Blood-Glyph", "Chaos-Orb", "Void-Knot", "Shadow-Sigil", "Sulfur-Mark",         // Occult/Dark
            "Glitch-Mark", "Null-Eye", "Broken-Link", "Ghost-Key", "Data-Thorn",            // Narrative/Glitch
        };

        private static readonly string[] syntheticSound =
        {
            "White-noise", "High-pitched-whine", "Bass-thud", "Modem-screech", "Static-hiss",       // Tech-Heavy
            "Banshee-wail", "Death-rattle", "Distant-sob", "Bone-crack", "Whisper",                 // Occult/Dark
            "Rhythmic-throb", "System-beeps", "Digital-echo", "Chime", "Heartbeat",                 // Narrative/Glitch
        };

        private static readonly string[] coreComponent =
        {
            "Neural-Bridge", "RAM-Buffer", "Logic-Gate", "BIOS-Heart", "Silicon-Cortex",        // Tech-Heavy
            "Data-Vein", "Spirit-Valve", "Memory-Tomb", "Nerve-Fiber", "Pulse-Relay",           // Occult/Dark
            "Cooling-Pipe", "Intake-Fan", "Power-Cell", "Main-Bus", "Sub-Routine",              // Narrative/Glitch
        };

        /** THE MASTER SYNC-WORD BANK */
        private static readonly string[] royalTitles = { 
            "Emperor", "Archduke", "CEO", "Baron", "Pharaoh",       // Classy
            "Overlord", "Captain", "Boss", "General", "Warlord",    // Gritty
            "Shogun", "Grandmaster", "Oracle", "Deity", "Cybor",    // Bizarre
        };

        private static readonly string[] fancyPlaces =
        {
            "Beverly Hills", "Monaco", "Versailles", "Atlantis", "Olympus",                 // Classy
            "Platinum Plaza", "Marble Manor", "Sky-City", "Emerald City", "The Hamptons",   // Gritty
            "Neon Heights", "Diamond Dome", "Gold-Gully", "Silk-Sector", "Velvet-Void",     // Bizarre
        };

        private static readonly string[] grittyCities =
        {
            "Detroit", "Gotham", "London", "Chicago", "Brooklyn",                               // Classy
            "Night City", "Iron-Port", "Rust-Belt", "Coal-Town", "Sector 7",                    // Gritty
            "The Underworld", "Shadow-Basin", "Scrap-Heap", "Concrete-Hell", "Glitch-Ville",    // Bizarre
        };

        private static readonly string[] activities =
        {
            "Waltz-ing", "Golf-ing", "Yacht-ing", "Dine-ing", "Paint-ing",              // Classy
            "Brawl-ing", "Hustle-ing", "Scavenge-ing", "Sprint-ing", "Lurk-ing",        // Gritty
            "Teleport-ing", "Hack-ing", "Levitate-ing", "Moonwalk-ing", "Summon-ing",   // Bizarre
        };

        private static readonly string[] ballTypes =
        {
            "Polo-ball", "Croquet-ball", "Crystal-ball", "Golf-ball", "Disco-ball",     // Classy
            "Cannonball", "Meatball", "Wrecking-ball", "Mothball", "Skee-ball",         // Gritty
            "Poke-ball", "Fireball", "Eyeball", "Plasma-ball", "Gravity-ball",          // Bizarre
        };

        private static readonly string[] relatives =
        {
            "Third-Cousin", "Great-Aunt", "God-Mother", "Ancestor", "Butler",                   // Classy
            "Step-Uncle", "Half-Brother", "Ex-in-Law", "Rival-Twin", "Warden",                  // Gritty
            "Clone-Sibling", "Robot-Grandpa", "Hologram-Niece", "Shadow-Parent", "Ghost-Kin",   // Bizarre
        };

        private static readonly string[] conflicts =
        {
            "Debate", "Tiff", "Legal-Action", "Scandal", "Snub",        // Classy
            "Brawl", "Riot", "Heist", "Skirmish", "Shakedown",          // Gritty
            "Glitch", "Paradox", "Anomaly", "Hex", "Shenanigans",       // Bizarre
        };

        private static readonly string[] colors =
        {
            "Obsidian", "Gold", "Ghost-White", "Midnight-Blue", "Ivory",        // Classy
            "Crimson", "Rust", "Dirty-Grey", "Oil-Black", "Neon-Green",         // Gritty
            "Ultraviolet", "Laser-Lemon", "Cyber-Purple", "Infrared", "Chrome", // Bizarre
        };

        private static readonly string[] animals =
        {
            "Falcon", "Stallion", "Greyhound", "Swan", "Peacock",
            "Trash-Panda", "Sewer-Rat", "Pitbull", "Vulture", "Hyena",
            "Capybara", "Axolotl", "Narwhal", "Chimera", "Space-Goat",
        };

        private static readonly string[] transports =
        {
            "Limousine", "Yacht", "Private-Jet", "Chariot", "Gondola",
            "Subway", "Rickshaw", "Semi-Truck", "Rusty-Bike", "Tank",
            "Hoverboard", "Teleporter", "Pogo-stick", "Giant-Snail", "Jetpack",
        };

        public static void Run()
        {
            UIHelper.ShowHeader("WELCOME TO MY WEIRD MAD LIBS!!");

            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("\nMake your selection of Story below.");

            StoryMenu();
            Console.Write("Story selection (1-3; 0 to End): ");
            string? selection = Console.ReadLine();

            while (selection != "0")
            {
                switch (selection)
                {
                    case "1":
                        StoryOne();
                        break;
                    case "2":
                        StoryTwo();
                        break;
                    case "3":
                        StoryThree();
                        break;
                    default:
                        Console.WriteLine("Invalid selection.  Please try again!");
                        Console.ReadLine();
                        break;
                }

                Console.Clear();
                StoryMenu();
                Console.Write("Story selection (1-3; 0 to End): ");
                selection = Console.ReadLine();
            }

        }

        public static void StoryMenu()
        {
            Console.WriteLine("----------  STORY MENU ----------");
            Console.WriteLine("1. Neural Archive Recovery System");
            Console.WriteLine("2. Void-Shell: Exorcism Protocol");
            Console.WriteLine("3. Retro-TV: Theme Sync Engine");
            Console.WriteLine("==================================\n");
        }

        // This helper method takes the user's input and a word bank 
        // If input is empty, it returns a random word from the bank
        private static string GetWord(string userInput, string[] bank)
        {
            if (!string.IsNullOrWhiteSpace(userInput))
            {
                return userInput;
            }

            Random rng = new Random();
            int index = rng.Next(bank.Length);
            string selected = bank[index];

            // Give visual feedback that the system chose for them
            Console.ForegroundColor = ConsoleColor.DarkGray;
            Console.WriteLine($"   [AUTO-INJECT: {selected}]");
            Console.ResetColor();

            return selected;
        }

        public static void StoryOne()
        {
            UIHelper.ShowHeader("NEURAL ARCHIVE RECOVERY SYSTEM");

            Random rng = new Random();

            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("[SYSTEM] Warning: File 'TRANS-LOG-001' is 85 corrupted.");
            Console.WriteLine("[SYSTEM] Manual data injection required to stabilize text.");
            Console.ResetColor();

            // --- 1. DATA COLLECTION (The "Manual Override") --- 

            Console.Write("\nIdentify Subject Name: ");
            string? name = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(name))
            {
                name = GetWord(name, subjectNames);
            }

            Console.WriteLine("\n[ANALYZING EMOTIONAL BIOMETRICS...]");
            Console.Write("Input Descriptor 01 (Adjective) (or press Enter for a random one): ");
            string? firstAdj = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(firstAdj))
            {
                firstAdj = GetWord(firstAdj, firstDescriptors);
            }

            Console.Write("Input Descriptor 02 (Adjective) (or press Enter for a random one): ");
            string? secondAdj = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(secondAdj))
            {
                secondAdj = GetWord(secondAdj, secondDescriptors);
            }

            Console.Write("Input Descriptor 03 (Adjective) (or press Enter for a random one): ");
            string? thirdAdj = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(thirdAdj))
            {
                thirdAdj = GetWord(thirdAdj, thirdDescriptors);
            }

            Console.Write("\nInput Lifeform Type (Animal) (or press Enter for a random one): ");
            string? animal = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(animal))
            {
                animal = GetWord(animal, lifeforms);
            }

            Console.Write("Input Rations Type (Food) (or press Enter for a random one): ");
            string? food = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(food))
            {
                food = GetWord(food, rations);
            }

            Console.Write("\nInput Motor Function (Verb) (or press Enter for a random one): ");
            string? verb = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(verb))
            {
                verb = GetWord(verb, motorFunctions);
            }

            Console.Write("Input Static Object (Noun) (or press Enter for a random one): ");
            string? firstNoun = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(firstNoun))
            {
                firstNoun = GetWord(firstNoun, staticObjects);
            }

            Console.Write("Input Power Source (Second Noun) (or press Enter for a random one): ");
            string? secondNoun = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(secondNoun))
            {
                secondNoun = GetWord(secondNoun, powerSources);
            }

            Console.Write("\nInput Organic Matter (Fruit) (or press Enter for a random one): ");
            string? fruit = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(fruit))
            {
                fruit = GetWord(fruit, organicMatters);
            }

            Console.Write("Input Mythological Figure (Superhero) (or press Enter for a random one): ");
            string? superhero = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(superhero))
            {
                superhero = GetWord(superhero, mythosFigures);
            }

            Console.Write("Input Geographic Sector (Country) (or press Enter for a random one): ");
            string? country = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(country))
            {
                country = GetWord(country, sectors);
            }

            Console.Write("Input Luxury Item (Dessert) (or press Enter for a random one): ");
            string? dessert = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(dessert))
            {
                dessert = GetWord(dessert, luxuryItems);
            }

            Console.Write("Input Temporal Coordinate (Year) (or press Enter for a random one): ");
            string? year = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(year))
            {
                year = GetWord(year, temporalCoords);
            }

            // --- 2. THE DECRYPTION ANIMATION ---
            Console.Clear();
            Console.WriteLine("RECONSTRUCTING TIMELINE...");
            for (int i = 0; i <= 100; i += 20)
            {
                Console.Write($"{i}% ");
                Console.Beep(400, 100);
                Thread.Sleep(300);
            }

            // --- 3. THE REVEAL (String Interpolation) ---
            // Using the $ prefix allows us to put variables directly inside {}
            string story = $"\n--- RECOVERED LOG ---\n\n" +
                $"This morning {name.ToUpper()} woke up feeling {firstAdj.ToUpper()}. " +
                $"'It is going to be a {secondAdj.ToUpper()} day!'  " +
                $"Outside, a bunch of {animal.ToUpper()}s were protesting to keep {food.ToUpper()} in stores. " +
                $"They began to {verb.ToUpper()} to the rhythm of the {firstNoun.ToUpper()}, which made all the {fruit.ToUpper()}s very {thirdAdj.ToUpper()}. " +
                $"Concerned, {name.ToUpper()} texted {superhero.ToUpper()}, who flew {name.ToUpper()} to {country.ToUpper()} and dropped {name.ToUpper()} " +
                $"in a puddle of frozen {dessert.ToUpper()}. {name.ToUpper()} woke up in the year {year.ToUpper()}, in a world where " +
                $"{secondNoun.ToUpper()}s ruled the world.";

            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine(story);
            Console.ResetColor();

            Console.WriteLine("\n-----------------------------------------------------------------------");
            Console.WriteLine("LOG STABILIZED. END OF TRANSMISSION.");

            UIHelper.Wait();
        }

        public static void StoryTwo()
        {
            UIHelper.ShowHeader("VOID-SHELL: EXORCISM PROTOCOL");

            // --- 1. COLLECTING THE EXPLOIT STRINGS ---
            // Instead of parts of speech, we collection "Infection Parameters"
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("[!] ENTITY DETECTED: 'Malphas.exe'");
            Console.ResetColor();

            Console.Write("\nEnter Target System Name (or press Enter for a random one): ");
            string? targetName = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(targetName))
            {
                targetName = GetWord(targetName, targetSystems);
            }

            Console.Write("\nEnter a Weaponized Emotion (or press Enter for a random one): ");
            string? emotion = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(emotion))
            {
                emotion = GetWord(emotion, weaponizedEmotions);
            }

            Console.Write("Enter an Occult Symbol (or press Enter for a random one): ");
            string? symbol = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(symbol))
            {
                symbol = GetWord(symbol, occultSymbol);
            }

            Console.Write("Enter a Synthetic Sound (e.g., Hum, Screech, Static) (or press Enter for a random one): ");
            string? sound = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(sound))
            {
                sound = GetWord(sound, syntheticSound);
            }

            Console.Write("Enter a Digital Core Component (e.g., RAM, CPU, Logic Gate) (or press Enter for a random one): ");
            string? component = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(component))
            {
                component = GetWord(component, coreComponent);
            }

            // --- 2. STRING MANIPULATION (The "Spectacular" Part) ---
            // We use string methods to change the "vibe" of the input
            string authorityCode = targetName.ToUpper();        // Force uppercase for authority
            string echoEffect = $"{sound.ToLower()}... {sound.ToLower()}... {sound.ToLower()}...";

            // --- 3. THE RITUAL (String Interpolation & Padding) ---
            Console.Clear();
            Console.WriteLine("INITIALIZING STRING INJECTION...");
            Thread.Sleep(1000);

            // Using PadRight to create a clean "Status" column
            string statusLine = "INJECTION STATUS:".PadRight(20) + "SUCCESSFUL";
            string payloadLine = "PAYLOAD TYPE:".PadRight(20) + $"{symbol.ToUpper()}";

            Console.WriteLine(statusLine);
            Console.WriteLine(payloadLine);
            Console.WriteLine("---------------------------------------------------------------------");

            // The Final Narrative Reveal
            string finalLog = $"By the power of the {authorityCode.ToUpper()} root directory,\n" +
                $"I cast out the {emotion.ToUpper()} within the {component.ToUpper()}.\n" +
                $"The {symbol.ToUpper()} is carved into the firewall.\n" +
                $"Can you hear it? The {echoEffect.ToUpper()}\n" +
                $"The system is quiet. The {targetName.ToUpper()} is saved.";

            // Typing effect for the reveal
            foreach (char c in finalLog)
            {
                Console.Write(c);
                // Faster typing for a "digital" feel
                if (c == '\n') Thread.Sleep(500);
                else Thread.Sleep(30);
            }

            Console.WriteLine("\n\n----------------------------------------------------------------");
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("PROTOCOL COMPLETE. THE GHOST IS IN THE MACHINE NO MORE.");

            UIHelper.Wait();
        }

        public static void StoryThree()
        {
            UIHelper.ShowHeader("RETRO-TV: THEME SYNC ENGINE");

            Console.ForegroundColor = ConsoleColor.Magenta;
            Console.WriteLine(">> TRACK DETECTED: 'The Fresh _______ of _______'");
            Console.ResetColor();

            // --- 1. THE DATA HARVEST (10+ Variables for a "Good Amount") --- 
            Console.WriteLine("\n[PROMPT] Please provide the following sync-data:");

            Console.Write("1. A Royal Title (e.g., King, Duchess, CEO) (or press Enter for a random one): ");
            string? title = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(title))
            {
                title = GetWord(title, royalTitles);
            }

            Console.Write("2. A Fancy Neighborhood (or press Enter for a random one): ");
            string? fancyPlace = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(fancyPlace))
            {
                fancyPlace = GetWord(fancyPlace, fancyPlaces);
            }

            Console.Write("3. A Gritty City (or press Enter for a random one): ");
            string? grittyCity = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(grittyCity))
            {
                grittyCity = GetWord(grittyCity, grittyCities);
            }

            Console.Write("4. A Strange Activity (Verb-ing) (or press Enter for a random one): ");
            string? activity = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(activity))
            {
                activity = GetWord(activity, activities);
            }

            Console.Write("5. A Type of Ball (e.g., Skee-ball, Meatball) (or press Enter for a random one): ");
            string? ballType = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(ballType))
            {
                ballType = GetWord(ballType, ballTypes);
            }

            Console.Write("6. An Obscure Relative (or press Enter for a random one): ");
            string? relative = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(relative))
            {
                relative = GetWord(relative, relatives);
            }

            Console.Write("7. A Minor Conflict (Noun) (or press Enter for a random one): ");
            string? conflict = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(conflict))
            {
                conflict = GetWord(conflict, conflicts);
            }

            Console.Write("8. A Color (or press Enter for a random one): ");
            string? color = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(color))
            {
                color = GetWord(color, colors);
            }

            Console.Write("9. An Animal (or press Enter for a random one): ");
            string? animal = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(animal))
            {
                animal = GetWord(animal, animals);
            }

            Console.Write("10. A Mode of Transportation (or press Enter for a random one): ");
            string transport = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(transport))
            {
                transport = GetWord(transport, transports);
            }

            // --- 2. THE SPECTACULAR REVEAL (The "Remix") --- 
            Console.Clear();
            Console.Beep(440, 200); // A little 'starting' note
            Console.WriteLine("RE-SYNCING AUDIO TRACK...");
            Thread.Sleep(1500);

            // Using String Interpolation to rebuild the classic flow
            // Note the use of .ToUpper() to make the rhymes "pop"
            string verse1 = $"Now this is a story all about how\n" +
                $"My life got flipped-turned {color.ToUpper()} side down" +
                $"And I'd like to take a minute, just sit right there\n" +
                $"I'll tell you how I became the {title.ToUpper()} of a town called {fancyPlace.ToUpper()}.\n";

            string verse2 = $"In West {grittyCity.ToUpper()} born and raised\n" +
                $"On the playground was where I spent most of my days\n" +
                $"{activity.ToUpper()} out, maxin', relaxin' all cool\n" +
                $"And all shootin' some {ballType.ToUpper()} outside of the school.\n" +
                $"When a couple of guys who were up to no good\n" +
                $"Started making {conflict.ToUpper()} in my neighborhood!\n" +
                $"I got in one little fight and my {relative.ToUpper()} got scared\n" +
                $"Abd said, 'You're movin' with your auntie to {fancyPlace.ToUpper()}!'\n";

            string verse3 = $"I whistled for a {transport.ToUpper()} and when it came near\n" +
                $"The license plate said '{animal.ToUpper()}' and it had dice in the mirror\n" +
                $"If anything I could say that this {transport.ToUpper()} was rare\n" +
                $"But I thought, 'Nah, forget it'-'Yo, holmes to {fancyPlace.ToUpper()}!'";

            // --- 3. THE PERFORMANCE ---
            Console.ForegroundColor = ConsoleColor.Yellow;
            DisplayWithBeat(verse1);
            Console.ForegroundColor = ConsoleColor.Cyan;
            DisplayWithBeat(verse2);
            Console.ForegroundColor = ConsoleColor.Magenta;
            DisplayWithBeat(verse3);
            Console.ResetColor();

            Console.WriteLine("\n" + "=".PadRight(40, '='));
            Console.WriteLine("TRACK STABILIZED. RADICAL.");

            UIHelper.Wait();
        }

        // A helper method just for this project to give it "rhythm"
        private static void DisplayWithBeat(string text)
        {
            foreach (char c in text)
            {
                Console.Write(c);
                Thread.Sleep(c == '\n' ? 400 : 24);     // Pause longer on new lines for the beat
            }
            Console.WriteLine();
        }
    }
}
