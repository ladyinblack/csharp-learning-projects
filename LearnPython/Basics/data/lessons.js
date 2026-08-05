const lessons = [
{
	id: 1,
	title: "Hello Python",
	description: "A quick introduction to Python syntax, variable assignment, and numbers",
	exercises: [
	{
		title: "Grocery Counter",
		difficultylevel: "🟢",
		difficulty: "easy",		// Extended feature #3: Add Difficulty + Progress Tracking 
		points: 10,				// Extended feature #3
		completed: false,		// Extended feature #3
		description: `
			<p>Start with 0 apples, add 5 more, and print total.</p>
			<p><strong>Goal:</strong> Track items as you add them.</p>
		`,
		hint: "Use: apples = apples + 5",
		starterCode: `"""
EXPECTED OUTPUT:
Total apples: 5
"""

# TODO: Fix the code below 

# Start with 0 apples
apples = 0

# Add 5 apples 
apples = None	# replace None with correct expression

print("Total apples:", apples)`,
		/* expectedOutput: "Total apples: 5", */			// Extended feature #2: Better Auto-Grading (More Accurate)
		check: (code) => code.includes("apples = apples + 5"),
		keyconcepts: `
			<li>Variables stores values</li>
			<li>Use <code>=</code> to assign or update values</li>
		`,
		externallink: "https://onecompiler.com/python/44t5jf82y",
		/*tests: [				// Extended feature #4: Add Test Cases (Pro-Level Feature) 
			{ input: null, expected: "Total apples: 5" },
		] */
	},
	{
		title: "Restaurant Order",
		difficultylevel: "🟢🟡",
		difficulty: "easy-medium",
		points: 15,
		completed: false,
		description: `
			<p>Set burger_count=2, print message if > 0, repeat string.</p>
			<p><strong>Goal:</strong> Simulate a simple order system.</p>
		`,
		hint: "Use: 'Burger ' * burger_count",
		starterCode: `"""
EXPECTED OUTPUT: 
Preparing your output 
Burger Burger 
""" 

# TODO: Fix the code 

# Set burger_count = 2
burger_count = None		# set to 2 

# If burger_count > 0 -> print "Preparing your order" 
if burger_count > 0:
	print(None)		# replace with correct string 

# Print "Burger " repeated burger_count times 
order_summary = None	# create repeated string 

print(order_summary)`,
		check: (code) => 
			code.includes("burger_count = 2") && 
			code.includes("print(\"Preparing your order\")") && 
			code.includes("* burger_count"),
		keyconcepts: `
			<li><code>print()</code> displays output</li>
			<li>Strings can be repeated using <code>*</code></li>
			<li>Comments start with <code>#</code></li>
		`,
		externallink: "https://onecompiler.com/python/44t5r5p8b"
	},
	{
		title: "Salary Calculator",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Calculate yearly salary from monthly.</p>
			<p><strong>Goal:</strong> Compute yearly salary.</p>
		`,
		hint: "Multiply monthly salary by 12",
		starterCode: `"""
EXPECTED OUTPUT: 
Yearly salary: 30000 
"""

# TODO 

# Monthly salary = 2500 
monthly_salary = 2500

# Calculate yearly salary 
yearly_salary = None	# calculate 

# Print it 
print(yearly_salary)`,
		check: (code) => code.includes("* 12"),
		keyconcepts: `
			<li>Multiplication with <code>*</code></li>
			<li>Storing results in variables</li>
		`,
		externallink: "https://onecompiler.com/python/44t5r8szt"
	},
	{
		title: "Height Converter",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Convert 175 cm to meters.</p>
			<p><strong>Goal:</strong> Convert cm &rarr; meters correctly.</p>
		`,
		hint: "Divide by 100",
		starterCode: `"""
EXPECTED OUTPUT: 
Height in meters: 1.75 
""" 

# TODO 

height_cm = 175

height_meters = None	# fix calculation 

print("Height in meters:", height_meters)`,
		check: (code) => code.includes("/ 100"),
		keyconcepts: `
			<li>Python follows <strong>PEMDAS</strong></li>
			<li>Parentheses control evaluation</li>
		`,
		externallink: "https://onecompiler.com/python/44t5rd9sx"
	},
	{
		title: "Smart Bill Splitter",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Split bill using /, // and %</p>
			<p><strong>Goal:</strong> Split a bill in multiple ways.</p>
		`,
		hint: "Use all three operators: /, //, %",
		starterCode: `"""
EXPECTED OUTPUT:
Exact split: 291.833...
Rounded down: 291.0
Remainder: 2.5 
"""

# TODO

total_bill = 875.50
people = 3

# Compute Exact split (/)
exact_split = None
# Compute Rounded down split (//)
floor_split = None
# Compute Remainder (%)
remainder = None

print("Exact split:", exact_split)
print("Rounded down:", floor_split)
print("Remainder:", remainder)`,
		check: (code) => code.includes("/") && code.includes("//") && code.includes("%"),
		keyconcepts: `
			<li><code>&#47;</code> gives decimals</li>
			<li><code>&#47;&#47;</code> removes decimals</li>
			<li><code>%</code> gets remainder</li>
		`,
		externallink: "https://onecompiler.com/python/44t5rfgee"
	},
	/** ADDITIONAL EXERCISES / NEXT LEVEL */
	{
		title: "Rectangle Area",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>Calculate the area of a rectangle.</p>
			<p><strong>Goal:</strong> Multiply length by width.</li>
		`,
		hint: "Use: length * width",
		starterCode: `"""
EXPECTED OUTPUT:
50
"""

# Given values
length = 10
width = 5

# TODO: calculate area of rectangle
area = None

print(area)`,
		check: (code) =>
			code.includes("length * width"),
		keyconcepts: `
			<li>(<code>&times;</code>) performs multiplication</li>
			<li>Variables store values</li>
			<li>Assign calculated results to variables</li>
		`,
		externallink: "https://onecompiler.com/python/44xbr73sh"
	},
	{
		title: "Triangle Area",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>Calculate the area of a triangle.</p>
			<p><strong>Goal:</strong> Use the triangle area formula.</p>
		`,
		hint: "Use: (base * height) / 2",
		starterCode: `"""
EXPECTED OUTPUT:
25.0
"""

# Given values
base = 10
height = 5

# TODO: calculate area of triangle
area = None

print(area)`,
		check: (code) =>
			code.includes("/ 2"),
		keyconcepts: `
			<li>Arithmetic formulas</li>
			<li><code>&#47;</code> performs division</li>
			<li>Combining multiple operators</li>
		`,
		externallink: "https://onecompiler.com/python/44xbrc5vz"
	},
	{
		title: "Swap Numbers",
		difficultylevel: "🟢",
		difficulty: "easy-medium",
		points: 10,
		complete: false,
		description: `
			<p>Swap the values stored in two variables.</p>
			<p><strong>Goal:</strong> Use a temporary variable.</p>
		`,
		hint: "Store one value in temp before reassigning.",
		starterCode: `"""
EXPECTED OUTPUT:
5 1
"""


a = 1
b = 5

# TODO: swap a and b
temp = None

print(a, b)`,
		check: (code) =>
			code.includes("temp"),
		keyconcepts: `
			<li>Temporary variables</li>
			<li>Value reassignment</li>
			<li>Assignment order matters</li>
		`,
		externallink: "https://onecompiler.com/python/44xbrh4wm"
	},
	{
		title: "Swap Strings",
		difficultylevel: "🟢🟡",
		difficulty: "easy-medium",
		points: 15,
		complete: false,
		description: `
			<p>Swap two string variables.</p>
			<p><strong>Goal:</strong> Use a temporary variable.</p>
		`,
		hint: "The same swap logic works for strings.",
		starterCode: `"""
EXPECTED OUTPUT:
world hello
"""

x = "hello"
y = "world"

# TODO: swap x and y using temp
temp = None

print(x, y)`,
		check: (code) =>
			code.includes("temp"),
		keyconcepts: `
			<li>Works for any data types</li>
			<li>Variable references</li>
			<li>Assignment logic</li>
		`,
		externallink: "https://onecompiler.com/python/44xbrnx33"
	},
	{
		title: "Parentheses Result 1",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Add parentheses so the result becomes 1.</p>
			<p><strong>Goal:</strong> Change the order of operations.</p>
		`,
		hint: "Group the subtraction first.",
		starterCode: `"""
EXPECTED OUTPUT:
1
"""

# TODO: add parentheses
result = 6 - 4 // 2

print(result)`,
		check: (code) =>
			code.includes("(") && 
			code.includes(")"),
		keyconcepts: `
			<li>Order of operations</li>
			<li><code>&#47;&#47;</code> floor division</li>
			<li>Parentheses control execution</li>
		`,
		externallink: "https://onecompiler.com/python/44xbrvgzg"
	},
	{
		title: "Parentheses Result 1 (Division)",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Use parentheses to make the result equal 1.</p>
			<p><strong>Goal:</strong> Change evaluation order.</p>
		`,
		hint: "Try grouping the subtraction first.",
		starterCode: `"""
EXPECTED OUTPUT:
1
"""

# TODO: fix using parentheses
result = 10 - 6 / 2

print(result)`,
		check: (code) =>
			code.includes("(") && 
			code.includes(")"),
		keyconcepts: `
			<li>Division versus subtraction order</li>
			<li>Parentheses improves clarity</li>
		`,
		externallink: "https://onecompiler.com/python/44xbs23ab"
	},
	{
		title: "Hard Parentheses Result 0",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Add parentheses so the result becomes 0.</p>
			<p><strong>Goal:</strong> Override normal operator precedence.</p>
		`,
		hint: "Group the addition before multiplication.",
		starterCode: `"""
EXPECTED OUTPUT:
0
"""

# TODO: add parentheses
result = 10 - 2 * 3 + 4

print(result)`,
		check: (code) =>
			code.includes("(") && 
			code.includes(")"),
		keyconcepts: `
			<li>Operator precedence</li>
			<li>Grouping expressions</li>
			<li>Debugging mathematical logic</li>
		`,
		externallink: "https://onecompiler.com/python/44xbs6vmg"
	},
	{
		title: "Hard Parentheses Result 0 (Advanced)",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Use parentheses to make the result equal to 0.</p>
			<p><strong>Goal:</strong> Control evaluation order.</p>
		`,
		hint: "Change which operation happens first.",
		starterCode: `"""
EXPECTED OUTPUT:
0
"""

# TODO: fix using parentheses
result = 12 - 4 * 2 - 4

print(result)`,
		check: (code) => 
			code.includes("(") && 
			code.includes(")"),
		keyconcepts: `
			<li>Multiplication has priority</li>
			<li>Parentheses changes execution order</li>
		`,
		externallink: "https://onecompiler.com/python/44xbsccmn"
	},
	{
		title: "Pizza Slices",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Find how many pizza slices are left over after grouping them equally.</p>
			<p><strong>Goal:</strong> Use the modulus operator.</p>
		`,
		hint: "Use % to find the remainder.",
		starterCode: `"""
EXPECTED OUTPUT:
2
"""

# Number of slices
alice_slices = 25
bob_slices = 30
carol_slices = 20

# TODO: calculate slices left over
leftover = None

print(leftover)`,
		check: (code) => 
			code.includes("%"),
		keyconcepts: `
			<li><code>%</code> finds remainders</li>
			<li>Working with totals</li>
			<li>Real-world distribution problems</li>
		`,
		externallink: "https://onecompiler.com/python/44xbsjp98"
	},
	{
		title: "Students Grouping",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Find the number of students left over when creating groups.</p>
			<p><strong>Goal:</strong> Use modulus to find the remainder.</p>
		`,
		hint: "Use: students % group_size",
		starterCode: `"""
EXPECTED OUTPUT:
1
"""

students = 28
group_size = 3

# TODO: find leftover students
leftover = None

print(leftover)`,
		check: (code) => 
			code.includes("%"),
		keyconcepts: `
			<li>Remainder calculations</li>
			<li>Division versus modulus</li>
			<li>Practical grouping problems</li>
		`,
		externallink: "https://onecompiler.com/python/44xbsqpms"
	}
	]
},
{
	id: 2,
	title: "Functions and Getting Help",
	description: "Calling functions and defining our own, and using Python's built-in documentation",
	exercises: [
	{
		title: "Getting Help (Rounding Prices)",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>You are working in a store system and need to round product prices.</p>
			<p><strong>Goal:</strong> Use <code>help()</code> to learn how <code>round()</code> works, then round a price.</p>
		`,
		hint: "Use: <code>help()</code> and <code>round(price, 2)</code>",
		starterCode: `"""
EXPECTED OUTPUT: 
19.88
""" 

# Learn how round() works
help(None)

# Round the price 
price = 19.876
rounded_price = None

print(rounded_price)`,
		check: (code) =>
			code.includes("help(round)") && 
			code.includes("round(price, 2)"),
		keyconcepts: `
			<li>Use <code>help(function)</code> to understand functions</li>
			<li>Do NOT call the function inside <code>help()</code></li>
			<li><code>round()</code> can control decimal precision</li>
		`,
		externallink: "https://onecompiler.com/python/44tbaycbx"
	},
	{
		title: "Define a Function (Distance Difference)",
		difficultylevel: "🟢🟡",
		difficulty: "easy-medium",
		points: 15,
		complete: false,
		description: `
			<p>You are analyzing distances between locations.</p>
			<p><strong>Goal:</strong> Return the smallest difference betweeen three numbers.</p>
		`,
		hint: "Use: <code>abs()</code> and <code>min()</code>",
		starterCode: `"""
EXPECTED OUTPUT:
5
"""

def smallest_gap(a, b, c):

	# TODO: calculate differences 
	diff1 = None
	diff2 = None
	diff3 = None
	
	# TODO: return smallest
	return None
	
print(smallest_gap(10, 15, 50))`,
		check: (code) =>
			code.includes("abs") &&
			code.includes("min") &&
			code.includes("return"),
		keyconcepts: `
			<li>Use <code>def</code> to define functions</li>
			<li><code>return</code> sends results back</li>
			<li>Functions allow reusable logic</li>
		`,
		externallink: "https://onecompiler.com/python/44tbbez43"
	},
	{
		title: "Docstrings (Calculator Tool)",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>You are building a calculator tool.</p>
			<p><strong>Goal:</strong> Add a docstring explaining your function.</p>
		`,
		hint: "Use triple quotes \"\"\" inside the function",
		starterCode: `"""
EXPECTED OUTPUT:
115.0
"""

def add_tax(price):
	# TODO: add docstring here
	
	return price * 1.15
	
print(add_tax(100))`,
		check: (code) =>
			code.includes('"""') &&
			code.includes("return price * 115"),
		keyconcepts: `
			<li>Docstrings describe what a function does</li>
			<li>Use triple quotes <code>\"\"\"</code></li>
			<li>Help other developers understand your code</li>
		`,
		externallink: "https://onecompiler.com/python/44tbbs3z7"
	},
	{
		title: "Functions Without Return (Logger System)",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>You are building a logging system.</p>
			<p><strong>Goal:</strong> Print a log message without returning anything.</p>
		`,
		hint: "Use <code>print()</code> instead of return",
		starterCode: `"""
EXPECTED OUTPUT:
LOG: System started
"""

def log_message(msg):
	# TODO: print message
	None
	
result = log_message("System started")

print(result)`,
		check: (code) =>
			code.includes("print") &&
			!code.includes("return msg"),
		keyconcepts: `
			<li>Functions without <code>return</code> return None</li>
			<li><code>print()</code> creates side effects</li>
			<li>Useful for logging and outputs</li>
		`,
		externallink: "https://onecompiler.com/python/44tbc3hjm"
	},
	{
		title: "Default Arguments (Greeting System)",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Create a greeting system with a default name.</p>
			<p><strong>Goal:</strong> Show a default if no name is provided.</p>
		`,
		hint: "Use: name=\"Guest\"",
		starterCode: `"""
EXPECTED OUTPUT:
Hello, Guest
Hello, Ronica
"""

def greet(name=None):
	# TODO: set default value
	
	print("Hello,", name)
	
greet()
greet("Ronica")`,
		check: (code) => code.includes('name="Guest"'),
		keyconcepts: `
			<li>Functions can have default parameters</li>
			<li>Defaults are used when no value is passed</li>
			<li>Improves flexibility of functions</li>
		`,
		externallink: "https://onecompiler.com/python/44tbcce35"
	},
	{
		title: "Function Calling Function (Discount System)",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>You are calculating final prices after discount.</p>
			<p><strong>Goal:</strong Call one function inside another.</p>
		`,
		hint: "Use <code>discount()</code> inside <code>final_price()</code>",
		starterCode: `"""
EXPECTED OUTPUT:
90.0
"""

def discount(price):
	return price * 0.9
	
def final_price(price):
	# TODO: call discount function 
	return None
	
print(final_price(100))`,
		check: (code) => code.includes("discount(price)"),
		keyconcepts: `
			<li>Functions can call other functions</li>
			<li>Encapsulate logic into reusable pieces</li>
			li>Improves code organization</li>
		`,
		externallink: "https://onecompiler.com/python/44tbcp46j"
	},
	{
		title: "Higher-Order Functions (Multipliers)",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Apply a function to a value dynamically.</p>
			<p><strong>Goal:</strong> Pass a function as an argument.</p>
		`,
		hint: "Use: fn(arg)",
		starterCode: `"""
EXPECTED OUTPUT:
50
"""

def multiply_by_5(x):
	return x * 5
	
def apply(fn, value):
	# TODO: call function
	return None
	
print(apply(multiply_by_5, 10))`,
		check: (code) => code.includes("fn(value)"),
		keyconcepts: `
			<li>Functions can be passed as arguments</li>
			<li>Called higher-order functions</li>
			<li>Very powerful abstraction tool</li>
		`,
		externallink: "https://onecompiler.com/python/44tbd2t6d"
	},
	{
		title: "Custom max() Key (Smart Selection)",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Find the number with the highest remainder when divided by 5.</p>
			<p><strong>Goal:</strong> Use <code>max(..., key=...)</code></p>
		`,
		hint: "Use: key=function_name",
		starterCode: `"""
EXPECTED OUTPUT:
14
"""

def mod_5(x):
	return x % 5
	
numbers = [100, 51, 14]

# TODO: use max with key
result = None

print(result)`,
		check: (code) =>
			code.includes("max") &&
			code.includes("key=mod_5"),
		keyconcepts: `
			<li><code>max()</code> finds largest value</li>
			<li><code>key=</code> customizes comparison</li>
			<li>Returns value that maximizes the function</li>
		`,
		externallink: "https://onecompiler.com/python/44tbfmm5c"
	},
	/** ADDITIONAL EXERCISES / NEXT LEVEL */
	{
		title: "Round to One Decimal Place",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>Round a number to 1 decimal place.</p>
			<p><strong>Goal:</strong> Use <code>round()</code) with one decimal place.</p>
		`,
		hint: "Use: round(num, 1)",
		starterCode: `"""
EXPECTED OUTPUT:
3.1
"""

def round_to_one_place(num):
	"""Return the number rounded to 1 decimal place."""
	
	# TODO: round to 1 decimal place
	return None

print(round_to_one_place(3.14159))`,
		check: (code) => 
			code.includes("round(") && 
			code.includes(", 1"),
		keyconcepts: `
			<li>Using <code>round()</code></li>
			<li>Function return values</li>
			<li>Parameters</li>
		`,
		externallink: "https://onecompiler.com/python/44xbtyaum"
	},
	{
		title: "Round to Whole Number",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>Round a number to the nearest integer.</p>
			<p><strong>Goal:</strong> Use the default behavior of <code>round()</code>.</p>
		`,
		hint: "Use: round(num)",
		starterCode: `"""
EXPECTED OUTPUT:
4
"""

def round_to_whole(num):
	"""Return the number rounded to nearest integer."""
	
	# TODO: use round() without decimals
	return None
	
print(round_to_whole(3.6))`,
		check: (code) => 
			code.includes("round("),
		keyconcepts: `
			<li>Default behavior of <code>round()</code></li>
			<li>Optional arguments</li>
			<li>Function design</li>
		`,
		externallink: "https://onecompiler.com/python/44xbu5zxd"
	},
	{
		title: "Round to Nearest 100",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Round a large number to the nearest hundred.</p>
			<p><strong>Goal:</strong> Use a negative value for <code>ndigits</code>.</p>
		`,
		hint: "Use: round(number, -2)",
		starterCode: `"""
EXPECTED OUTPUT:
2500
"""

# TODO: round to nearest 100
result = round(2473, None)

print(result)`,
		check: (code) => 
			code.includes("round") && 
			code.includes("-2"),
		keyconcepts: `
			<li>Negative <code>ndigits</code></li>
			<li>Rounding large numbers</li>
			<li>Simplifying data</li>
		`,
		externallink: "https://onecompiler.com/python/44xbuaur7"
	},
	{
		title: "Round Salary",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Round a salary to the nearest thousand.</p>
			<p><strong>Goal:</strong> Use negative precision with <code>round()</code>.</p>
		`,
		hint: "Use: round(salary, -3)",
		starterCode: `"""
EXPECTED OUTPUT:
45000
"""

salary = 45320

# TODO: round to nearest 1000
rounded_salary = None

print(rounded_salary)`,
		check: (code) => 
			code.includes("round") && 
			code.includes("-3"),
		keyconcepts: `
			<li>Real-world rounding</li>
			<li>Negative precision values</li>
			<li>Data abstraction</li>
		`,
		externallink: "https://onecompiler.com/python/44xbufm26"
	},
	{
		title: "Share Pizza",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Calculate leftover pizza slices after sharing evenly.</p>
			<p><strong>Goal:</strong> Use a default parameter and modulus.</p>
		`,
		hint: "Use: total_slices % people.",
		starterCode: `"""
EXPECTED OUTPUT:
1
"""

def leftover_slices(total_slices, people=4):
	"""Return how many slices are left after sharing evenly."""
	
	# TODO: calculate leftovers
	return None
	
print(leftover_slices(21))`,
		check: (code) => 
			code.includes("%") && 
			code.includes("people=4"),
		keyconcepts: `
			<li>Default parameters</li>
			<li><code>%</code> modulus operator</li>
			<li>Function flexibility</li>
		`,
		externallink: "https://onecompiler.com/python/44xbunese"
	},
	{
		title: "Divide Students",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Calculate how many students are left over after creating groups.</p>
			<p><strong>Goal:</strong> Use a default argument and modulus.</p>
		`,
		hint: "Use: total_students % group_size",
		starterCode: `"""
EXPECTED OUTPUT:
2
"""

def leftover_students(total_students, group_size=5):
	"""Return how many students don't fit into groups."""
	
	# TODO 
	return None
	
print(leftover_students(27))`,
		check: (code) => 
			code.includes("%") && 
			code.includes("group_size=5"),
		keyconcepts: `
			<li>Default arguments</li>
			<li>Grouping logic</li>
			<li>Practical math problems</li>
		`,
		externallink: "https://onecompiler.com/python/44xbv45q9"
	},
	{
		title: "Debug Function Name Typo",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Fix the typo causing the function call to fail.</p>
			<p><strong>Goal:</strong> Match the function call to the function definition.</p>
		`,
		hint: "Check the speclling of the function name.",
		starterCode: `"""
EXPECTED OUTPUT:
5
"""

def add(a, b):
	return a + b
	
# TODO: fix function call typo
print(addd(2, 3))`,
		check: (code) => 
			code.includes("add(2, 3)"),
		keyconcepts: `
			<li>Function naming errors</li>
			<li>Reading error messages</li>
			<li>Debugging basics</li>
		`,
		externallink: "https://onecompiler.com/python/44xbv8acg"
	},
	{
		title: "Fix <code>abs()</code> Usage",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Fix the incorrect use of the <code>abs()</code> function.</p>
			<p><strong>Goal:</strong> Call the function with the correct number of arguments.</p>
		`,
		hint: "abs() only needs one value.",
		starterCode: `"""
EXPECTED OUTPUT:
3
"""

x = -3

# TODO: fix error
value = abs(x, 0)

print(value)`,
		check: (code) => 
			code.includes("abs(x)") && 
			!code.includes("abs(x, 0)"),
		keyconcepts: `
			<li>Function arguments</li>
			<li>Built-in functions</li>
			<li>Error interpretation</li>
		`,
		externallink: "https://onecompiler.com/python/44xbwjds3"
	},
	{
		title: "Indentation Error",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Fix the indentation error inside the function.</p>
			<p><strong>Goal:</strong> Properly indent function contents.</p>
		`,
		hint: "Everything inside the function should be indented.",
		starterCode: `"""
EXPECTED OUTPUT:
10
"""

def double(x):
	y = x * 2
	# TODO: fix Indentation
return y

print(double(5))`,
		check: (code) => 
			code.includes("return y") && 
			code.includes("def double"),
		keyconcepts: `
			<li>Python indentation rules</li>
			<li>Function structure</li>
			<li>Syntax errors</li>
		`,
		externallink: "https://onecompiler.com/python/44xcjmjvr"
	},
	]
},
{
	id: 3,
	title: "Booleans and Conditionals",
	description: "Using booleans and branching logic",
	exercises: [
	{
		title: "Booleans (Login Status)",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>You are tracking whether a user is logged in.</p>
			<p><strong>Goal:</strong> Assign a boolean value and print its type.</p>
		`,
		hint: "Use True or False",
		starterCode: `"""
EXPECTED OUTPUT:
True
<class 'bool'>
"""

# TODO: set user_logged_in to True
user_logged_in = None

print(user_logged_in)
print(type(user_logged_in))`,
		check: (code) => code.includes("True"),
		keyconcepts: `
			<li><code>bool</code> has two values: True and False</li>
			<li>Use <code>type()</code> to check data types</li>
			<li>Booleans represent yes/no logic</li>
		`,
		externallink: "https://onecompiler.com/python/44tc6kyk3"
	},
	{
		title: "Comparison Operators (Age Check)",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>You are validating age requirements.</p>
			<p><strong>Goal:</strong> Return True if age is at least 18.</p>
		`,
		hint: "Use >= operator",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def is_adult(age):
    # TODO: return True if age >= 18
	return None
	
print(is_adult(20))`,
		check: (code) => code.includes(">="),
		keyconcepts: `
			<li>Use comparison operators like <code>>=</code>, <code><</code>, <code>==</code></li>
			<li>Comparisons return True or False</li>
			<li><code>==</code> checks equality, not assignment</li>
		`,
		externallink: "https://onecompiler.com/python/44tc6w8e5"
	},
	{
		title: "Comparison Pitfall (Type Check)",
		difficultylevel: "🟢🟡",
		difficulty: "easy-medium",
		points: 15,
		complete: false,
		description: `
			<p>You're comparing user input values.</p>
			<p><strong>Goal:</strong> Compare numbers correctly.</p>
		`,
		hint: "'3' is not the same as 3",
		starterCode: `"""
EXPECTED OUTPUT:
True
False
"""

print(3 == 3)
print(None == 3)    # fix this`,
		check: (code) => 
			code.includes("'3'") || code.includes('"3"'),
		keyconcepts: `
			<li>Strings and numbers are different types</li>
			<li><code>'3' != 3</code></li>
			<li>Always match correct data types when comparing</li>
		`,
		externallink: "https://onecompiler.com/python/44tc758hb"
	},
	{
		title: "Arithmetic + Comparison (Odd Number Checker)",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>You are checking if a number is odd.</p>
			<p><strong>Goal:</strong> Use modulus to check odd numbers.</p>
		`,
		hint: "Use: n % 2 == 1",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def is_odd(n):
    # TODO: return True if n is odd
	return None
	
print(is_odd(7))`,
		check: (code) => code.includes("% 2"),
		keyconcepts: `
			<li><code>%</code> gives remainder</li>
			<li>Odd numbers &rarr; remainder 1</li>
			<li>Combine math + boolean logic</li>
		`,
		externallink: "https://onecompiler.com/python/44tc7drpx"
	},
	{
		title: "Combining Conditions (Eligibility System)",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Check if someone qualifies for a program.</p>
			<p><strong>Goal:</strong> Must be 18+ AND a citizen.</p>
		`,
		hint: "Use: and",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def eligible(age, is_citizen):
    # TODO: combine both conditions
	return None
	
print(eligible(25, True))`,
		check: (code) => code.includes("and"),
		keyconcepts: `
			<li><code>and</code> requires both conditions True</li>
			<li><code>or</code> requires one condition True</li>
			<li><code>not</code> reverses a condition</li>
		`,
		externallink: "https://onecompiler.com/python/44tc7nrnm"
	},
	{
		title: "Order of Logic (Weather Safety)",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>You are checking if you're safe in bad weather.</p>
			<p><strong>Goal:</strong> Fix logic using parentheses.</p>
		`,
		hint: "Group conditions with parentheses",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

have_umbrella = False
rain_level = 3
have_hood = True

# TODO: fix logic
safe = have_umbrella or rain_level < 5 and have_hood

print(safe)`,
		check: (code) =>
			code.includes("(") && code.includes(")"),
		keyconcepts: `
			<li><code>and</code> runs before <code>or</code></li>
			<li>Use parentheses to control logic</li>
			<li>Improves readability and avoids bugs</li>
		`,
		externallink: "https://onecompiler.com/python/44tea8nd4"
	},
	{
		title: "Conditionals (Number Inspector)",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Determine whether a number is positive, negative, or zero.</p>
			<p><strong>Goal:</strong> Use <code>if</code> / <code>elif</code> / <code>else</code>.</p>
		`,
		hint: "Use if &rarr; elif &rarr; else",
		starterCode: `"""
EXPECTED OUTPUT:
positive
"""

def inspect(x):
	# TODO:
	# if x == 0 &rarr; print "zero"
	# elif x > 0 &rarr; print "positive"
	# else &rarr; print "negative"
	
inspect(5)`,
		check: (code) =>
			code.includes("if") &&
			code.includes("elif") &&
			code.includes("else"),
		keyconcepts: `
			<li><code>if</code> starts a condition</li>
			<li><code>elif</code> checks another condition</li>
			<li><code>else</code> catches everything else</li>
			<li>Indentation defines blocks</li>
		`,
		externallink: "https://onecompiler.com/python/44teak8xj"
	},
	{
		title: "Truthy & Falsy (Input Checking)",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Check if a user provided input.</p>
			</p><strong>Goal:</strong> Use truthy/falsy logic.</p>
		`,
		hint: "Empty values are False",
		starterCode: `"""
EXPECTED OUTPUT:
No Input
"""

user_input = ""

# TODO: check if input exists
if None:
	print("No input")`,
		check: (code) =>
			!code.includes("None") &&
			code.includes("if user_input"),
		keyconcepts: `
			<li>Empty values are False (\"\", 0, [])</li>
			<li>Non-empty values are True</li>
			<li>Python converts values to boolean automatically</li>
		`,
		externallink: "https://onecompiler.com/python/44teaughs"
	},
	]
},
{
	id: 4,
	title: "Lists",
	description: "Lists and the things you can do with them. Includes indexing, slicing, and mutating",
	exercises: [
	{
		title: "Creating Lists (Shopping List)",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>You are creating a shopping list.</p>
			<p><strong>Goal:</strong> Store items in a list.</p>
		`,
		hint: "Use square brackets []",
		starterCode: `"""
EXPECTED OUTPUT:
['Milk', 'Eggs', 'Bread']
"""

# TODO: create a list
shopping_list = None

print(shopping_list)`,
		check: (code) => 
			code.includes("[") && code.includes("]"),
		keyconcepts: `
			<li>Lists store ordered collections of data</li>
			<li>Use square brackets <code>[]</code></li>
			<li>Lists can hold strings, numbers, or mixed types</li>
		`,
		externallink: "https://onecompiler.com/python/44xb9bubd"
	},
	{
		title: "Mixed Lists (User Profile)",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>You are storing user info in one structure.</p>
			<p><strong>Goal:</strong> Create a list with different types.</p>
		`,
		hint: "Mix numbers ad strings",
		starterCode: `"""
EXPECTED OUTPUT:
[25, 'Alice', True]
"""

# TODO: create list with mixed types 
profile = None

print(profile)
`,
		check: (code) =>
			code.includes("25") && code.includes("Alice"),
		keyconcepts: `
			<li>Lists can contain different types</li>
			<li>No type restriction in Python lists</li>
			<li>Useful for grouping related data</li>
		`,
		externallink: "https://onecompiler.com/python/44xbbahd6"
	},
	{
		title: "Indexing (First Item)",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>You want to get the first item in a list.</p>
			<p><strong>Goal:</strong> Access the first element.</p>
		`,
		hint: "Index starts at 0",
		starterCode: `"""
EXPECTED OUTPUT:
Mercury
"""

planets = ['Mercury', 'Venus', 'Earth']

# TODO: print first planet 
print(None)`,
		check: (code) => 
			code.includes("[0]"),
		keyconcepts: `
			<li>Lists use zero-based indexing</li>
			<li>First element is index <code>0</code></li>
			<li>Access elements using <code>[]</code></li>
		`,
		externallink: "https://onecompiler.com/python/44xbkdue3"
	},
	{
		title: "Negative Indexing (Last Item)",
		difficultylevel: "🟢🟡",
		difficulty: "easy-medium",
		points: 15,
		complete: false,
		description: `
			<p>You want the last item without knowing list size.</p>
			<p><strong>Goal:</strong> Use negative indexing.</p>
		`,
		hint: "Use index -1",
		starterCode: `"""
EXPECTED OUTPUT:
Earth
"""

planets = ['Mercury', 'Venus', 'Earth']

# TODO: print last planet
print(None)`,
		check: (code) =>
			code.includes("[-1]"),
		keyconcepts: `
			<li>Negative indexing starts from the end</li>
			<li><code>-1</code> gives last item</li>
			<li>Useful when list size is unknown</li>
		`,
		externallink: "https://onecompiler.com/python/44xbkrgtn"
	},
	{
		title: "Slicing (Top 3 Items)",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>You want the first 3 items from a list.</p>
			<p><strong>Goal:</strong> Use slicing.</p>
		`,
		hint: "Use [:3]",
		starterCode: `"""
EXPECTED OUTPUT:
['a', 'b', 'c']
"""

letters = ['a', 'b', 'c', 'd', 'e']

# TODO: slice first 3
result = None

print(result)`,
		check: (code) =>
			code.includes(":3"),
		keyconcepts: `
			<li>Slicing uses <code>start:end</code></li>
			<li>End index is NOT included</li>
			<li><code>[:3]</code> means first 3 items</li>
		`,
		externallink: "https://onecompiler.com/python/44xbm5k4y"
	},
	{
		title: "Modifying Lists (Update Value)",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>You need to update an item in a list.</p>
			<p><strong>Goal:</strong> Modify a list element.</p>
		`,
		hint: "Use index assignment",
		starterCode: `"""
EXPECTED OUTPUT:
['Mercury', 'Venus', 'Mars']
"""

planets = ['Mercury', 'Venus', 'Earth']

# TODO: replace Earth with Mars
planets[2] = None

print(planets)`,
		check: (code) =>
			code.includes("Mars"),
		keyconcepts: `
			<li>Lists are mutable</li>
			<li>You can change values in place</li>
			<li>Use index assignment</li>
		`,
		externallink: "https://onecompiler.com/python/44xbmf9k7"
	},
	{
		title: "List Functions (Total Score)",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>You need to calculate total score.</p>
			<p><strong>Goal:</strong> Use built-in functions.</p>
		`,
		hint: "Use sum()",
		starterCode: `"""
EXPECTED OUTPUT:
60
"""

scores = [10, 20, 30]

# TODO: calculate total
total = None

print(total)`,
		check: (code) =>
			code.includes("sum"),
		keyconcepts: `
			<li><code>sum()</code> adds list values</li>
			<li><code>len()</code> gets list length</li>
			<li><code>max()</code> finds largest value</li>
		`,
		externallink: "https://onecompiler.com/python/44xbn62px"
	},
	{
		title: "List Methods (Add Item)",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>You want to add a new item to your list.</p>
			<p><strong>Goal:</strong> Use list.append()</p>
		`,
		hint: "Use .append('value')",
		starterCode: `"""
EXPECTED OUTPUT:
['a', 'b', 'c']
"""

letters = ['a', 'b']

# TODO: add 'c' to list 
None

print(letters)`,
		check: (code) =>
			code.includes("append"),
		keyconcepts: `
			<li><code>append()</code> adds to list</li>
			<li>Methods belong to objects</li>
			<li>Called using dot syntax</li>
		`,
		externallink: "https://onecompiler.com/python/44xbnpsxd"
	},
	{
		title: "Removing Items (Undo Action)",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>You want to undo the last action in a list.</p>
			<p><strong>Goal:</strong> Use pop()</p>
		`,
		hint: "Use .pop()",
		starterCode: `"""
EXPECTED OUTPUT:
['a', 'b']
"""

letters = ['a', 'b', 'c']

# TODO: remove last item
None

print(letters)`,
		check: (code) =>
			code.includes("pop"),
		keyconcepts: `
			<li><code>pop()</code> removes last item</li>
			<li>Also returns removed value</li>
			<li>Useful for undo actions</li>
		`,
		externallink: "https://onecompiler.com/python/44xbnyuak"
	},
	{
		title: "Searching Lists (Item Exists)",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>You need to check if an item exists.</p>
			<p><strong>Goal:</strong> Use 'in' operator</p>
		`,
		hint: "Use: 'item' in list",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

planets = ['Mercury', 'Venus', 'Earth']

# TODO: check if 'Earth' exists
print(None)`,
		check: (code) =>
			code.includes("in"),
		keyconcepts: `
			<li><code>in</code> checks membership</li>
			<li>Returns True or false</li>
			<li>Safer than <code>index()</code> for searching</li>
		`,
		externallink: "https://onecompiler.com/python/44xbperkz"
	}
	]
},
{
	id: 5,
	title: "Loops and List Comprehensions",
	description: "For and while loops, and a much-loved Python feature: list comprehensions",
	exercises: [
	{
		title: "",
		difficultylevel: "",
		difficulty: "",
		points: 0,
		complete: false,
		description: ``,
		hint: "",
		starterCode: ``,
		check: false,
		keyconcepts: ``,
		externallink: ""
	},
	]
},
{
	id: 6,
	title: "Strings and Dictionaries",
	description: "Working with strings and dictionaries, two fundamental Python data types",
	exercises: [
	{
		title: "",
		difficultylevel: "",
		difficulty: "",
		points: 0,
		complete: false,
		description: ``,
		hint: "",
		starterCode: ``,
		check: false,
		keyconcepts: ``,
		externallink: ""
	},
	]
},
{
	id: 7,
	title: "Working with External Libraries",
	description: "Imports, operator overloading, and survival tips for venturing into the world of external libraries",
	exercises: [
	{
		title: "",
		difficultylevel: "",
		difficulty: "",
		points: 0,
		complete: false,
		description: ``,
		hint: "",
		starterCode: ``,
		check: false,
		keyconcepts: ``,
		externallink: ""
	},
	]
}
];