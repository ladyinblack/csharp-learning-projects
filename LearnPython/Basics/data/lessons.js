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
	/** ADDITIONAL EXERCISES / NEXT LEVEL */
	{
		title: "Temperature Indicator",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>Return a value that describes whether a temperature is cold, normal, or hot.</p>
			<p><strong>Goal:</strong> Use <code>if</code>, <code>elif</code>, and <code>else</code>.</p>
		`,
		hint: "Return -1, 0, or 1 based on the temperature.",
		starterCode: `"""
EXPECTED OUTPUT:
-1
"""

def temperature_sign(temp):
	"""Return -1 if cold (<0), 0 if normal (0), 1 if hot (>0)"""
	# TODO
	if temp < 0:
		return None
	elif temp > 0:
		return None
	else:
		return None
		
print(temperature_sign(-5))`,
		check: (code) => 
			code.includes("if") && 
			code.includes("elif") && 
			code.includes("else"),
		keyconcepts: `
			<li><code>if</code> / <code>elif</code> / <code>elif</code></li>
			<li>Comparison operators</li>
			<li>Returning values</li>
		`,
		externallink: "https://onecompiler.com/python/44xdxp6n9"
	},
	{
		title: "Bank Balance Status",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>Sometimes whether an account is in debt, empty, or positive.</p>
			<p><strong>Goal:</strong> Use conditional branching.</p>
		`,
		hint: "Return -1, 0, or 1.",
		starterCode: `"""
EXPECTED OUTPUT:
1
"""

def balance_status(amount):
	"""Return -1 if debt, 0 if zero, 1 if positive balance"""
	# TODO: implement logic 
	return None
	
print(balance_status(100))`,
		check: (code) =>
			code.includes("if"),
		keyconcepts: `
			<li>Conditional branching</li>
			<li>Number comparison</li>
			<li>Function logic</li>
		`,
		externallink: "https://onecompiler.com/python/44xdxyfwn"
	},
	{
		title: "Apple Counter",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Fix the grammar so singular and plural forms are displayed correctly.</p>
			<p><strong>Goal:</strong> Use an equality check.</p>
		`,
		hint: "Use a special message when apples equals 1.",
		starterCode: `"""
EXPECTED OUTPUT:
Splitting 1 apple
Splitting 5 apples
"""

def split_apples(apples):
	# TODO: fix grammar
	if apples == 1:
		print(None)
	else:
		print("Splitting", apples, "apples")
		
split_apples(1)
split_apples(5)`,
		check: (code) => 
			code.includes("apples == 1"),
		keyconcepts: `
			<li><code>==</code> equality check</li>
			<li>Singular versus plural logic</li>
			<li>Conditional formatting</li>
		`,
		externallink: "https://onecompiler.com/python/44xdycsnt"
	},
	{
		title: "Message Notifications",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Display the correct singular or plural message count.</p>
			<p><strong>Goal:</strong> Adjust output using conditionals.</p>
		`,
		hint: "Handle the case when n equals 1 separately.",
		starterCode: `"""
EXPECTED OUTPUT:
1 message
3 messages
"""

def show_messages(n):
	# TODO: fix singular/plural
	if n == 1:
		print(None)
	else:
		print(n, "messages")
		
show_messages(1)
show_messages(3)`,
		check: (code) =>
			code.includes("n == 1"),
		keyconcepts: `
			<li>Conditional printing</li>
			<li>User-friendly output</li>
			<li>Formatting logic</li>
		`,
		externallink: "https://onecompiler.com/python/44xdyn6jx"
	},
	{
		title: "All Features Enabled",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Check whether every feature is enabled.</p>
			<p><strong>Goal:</strong> Use chained <code>and</code> conditions.</p>
		`,
		hint: "All values must be True.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def all_features(dark_mode, notifications, auto_save):
	# TODO: return True only if all are True
	return None
	
print(all_features(True, True, True))`,
		check: (code) => 
			code.includes("and"),
		keyconcepts: `
			<li><code>and</code> chaining</li>
			<li>Multiple conditions</li>
			<li>Logical requirements</li>
		`,
		externallink: "https://onecompiler.com/python/44xe2yyj7"
	},
	{
		title: "No Features Enabled",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Check whether all feature flags are disabled.</p>
			<p><strong>Goal:</strong> Use logical negation.</p>
		`,
		hint: "Use the not operator.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def no_features(a, b, c):
	# TODO: return True if all are False
	return None
	
print(no_features(False, False, False))`,
		check: (code) => 
			code.includes("not"),
		keyconcepts: `
			<li><code>not</code> operator</li>
			<li>Boolean grouping</li>
			<li>Logical negation</li>
		`,
		externallink: "https://onecompiler.com/python/44xe37typ"
	},
	{
		title: "Concise Positive Check",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Simplify a boolean function into a single return statement.</p>
			<p><strong>Goal:</strong> Return a boolean expression directly.</p>
		`,
		hint: "Return the comparison itself.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def is_positive(x):
	if x > 0:
		return True
	else:
		return False
		
def concise_is_positive(x):
	# TODO: one line solution
	return None
	
print(concise_is_positive(5))`,
		check: (code) => 
			code.includes("x > 0"),
		keyconcepts: `
			<li>Simplifying functions</li>
			<li>Direct boolean returns</li>
		`,
		externallink: "https://onecompiler.com/python/44xe2c9wm"
	},
	{
		title: "Concise Even Number Check",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Rewrite the function using a single boolean expression.</p>
			<p><strong>Goal:</strong> Remove unnecessary conditionals.</p>
		`,
		hint: "Use the modulus operator.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def is_even(n):
	if n % 2 == 0:
		return True
	else:
		return False
		
def concise_is_even(n):
	# TODO: one line
	return None
	
print(concise_is_even(4))`,
		check: (code) => 
			code.includes("% 2 == 0"),
		keyconcepts: `
			<li>Boolean expressions</li>
			<li>Return simplification</li>
			<li>Arithmetic and logic</li>
		`,
		externallink: "https://onecompiler.com/python/44xe2qepr"
	},
	{
		title: "At Least One True",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Return True if at least one value is True.</p>
			<p><strong>Goal:</strong> Use logical OR.</p>
		`,
		hint: "Use the or operator.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def at_least_one(a, b, c):
	# TODO
	return None
	
print(at_least_one(False, True, False))`,
		check: (code) => 
			code.includes("or"),
		keyconcepts: `
			<li><code>or</code> logic</li>
			<li>Logical grouping</li>
			<li>Condition shortcuts</li>
		`,
		externallink: "https://onecompiler.com/python/44xe49vmw"
	},
	{
		title: "Travel Decision Logic Bug",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Investigate a boolean logic bug caused by operator precedence.</p>
			<p><strong>Goal:</strong> Find a failing test case.</p>
		`,
		hint: "Try different combinations of True and False.",
		starterCode: `"""
EXPECTED OUTPUT:
(True or False depending on fix)
"""

def can_travel(has_ticket, has_passport, is_weeked):
	return has_ticket or has_passport and not is_weekend
	
# TODO: find inputs that break logic
has_ticket = False
has_passport = False
is_weekend = False

print(can_travel(has_ticket, has_passport, is_weekend))`,
		check: (code) =>
			code.includes("True") || code.includes("False"),
		keyconcepts: `
			<li>Operator precedence</li>
			<li>Logic bugs</li>
			<li>Debugging conditions</li>
		`,
		externallink: "https://onecompiler.com/python/44xdyybh3"
	},
	{
		title: "Gym Access Logic",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Test a boolean expression and identify a failing scenario.</p>
			<p><strong>Goal:</strong> Understand and/or precedence.</p>
		`,
		hint: "Experiment with edge cases.",
		starterCode: `"""
EXPECTED OUTPUT:
(True or False depending on test case)
"""

def can_enter(member, has_guest_pass, weekend):
	return member or has_guest_pass and weekend
	
# TODO: find failing test case
member = False
has_guest_pass = False
weekend = False

print(can_enter(member, has_guest_pass, weekend))`,
		check: (code) => 
			code.includes("True") || code.includes("False"),
		keyconcepts: `
			<li><code>and</code> versus <code>or</code> precedence</li>
			<li>Testing edge cases</li>
			<li>Reasoning about logic</li>
		`,
		externallink: "https://onecompiler.com/python/44xe23y5y"
	},
	{
		title: "Single Feature Toggle",
		difficultylevel: "🔴",
		difficulty: "Hard",
		points: 30,
		complete: false,
		description: `
			<p>Return True only when one value is True.</p>
			<p><strong>Goal:</strong> Implement exclusive-logic behavior.</p>
		`,
		hint: "Count how many values are True.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def exactly_one_feature(a, b, c):
	# TODO: only one True
	return None
	
print(exactly_one_feature(True, False, False))`,
		check: (code) => 
			code.includes("== 1"),
		keyconcepts: `
			<li>Exclusive OR logic</li>
			<li>Combining conditionals</li>
			<li>Edge case thinking</li>
		`,
		externallink: "https://onecompiler.com/python/44xe3j2m6"
	},
	{
		title: "Exactly One Winner",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Determine whether exactly one competitor won.</p>
			<p><strong>Goal:</strong> Use boolean counting.</p>
		`,
		hint: "True values can be treated as 1.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def exactly_one_winner(a, b, c):
	# TODO: use arithmetic trick or logic
	return None
	
print(exactly_one_winner(True, False, False))`,
		check: (code) => 
			code.includes("== 1"),
		keyconcepts: `
			<li>Boolean to integer conversions</li>
			<li>Summing conditions</li>
			<li>Shorthand logic</li>
		`,
		externallink: "https://onecompiler.com/python/44xe3t266"
	},
	{
		title: "Exactly Two Conditions",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Return True only when exactly two values are True.</p>
			<p><strong>Goal:</strong> Count boolean values.</p>
		`,
		hint: "Count the True values and compare the total.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def exactly_two(a, b, c):
	# TODO: exactly 2 True
	return None
	
print(exactly_two(True, True, False))`,
		check: (code) => 
			code.includes("== 2"),
		keyconcepts: `
			<li>Boolean math</li>
			<li>Counting True values</li>
			<li>Advanced conditions</li>
		`,
		externallink: "https://onecompiler.com/python/44xe433pc"
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
	},
	/** ADDITIONAL EXERCISES / NEXT LEVEL */
	{
		title: "Select Third Item",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>Return the third item in a list.</p>
			<p><strong>Goal:</strong> Access an item safely using indexes.</p>
		`,
		hint: "The third item is at index 2.",
		starterCode: `"""
EXPECTED OUTPUT:
3
"""

def select_third(L):
	"""Return the third element, or None if it doesn't exist."""
	if len(L) < 3:
		return None
	return None
	
print(select_third([1, 2, 3, 4]))`,
		check: (code) =>
			code.includes("[2]"),
		keyconcepts: `
			<li>Lists are zero-based indexing, so the third item is at <code>[2]</code></li>
			<li><code>len</code> lets you check whether enough items exist before accessing them</li>
			<li>Safe list access prevents IndexError crashes</li>
		`,
		externallink: "https://onecompiler.com/python/44xe5dn3b"
	},
	{
		title: "Select First Safely",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>Return the first item in a list, or None if the list is empty.</p>
			<p><strong>Goal:</strong> Handle empty lists safely.</p>
		`,
		hint: "The first item is at index 0.",
		starterCode: `"""
EXPECTED OUTPUT:
10
"""

def select_first(L):
	"""Return first element or None if list empty."""
	if len(L) == 0:
		return None
	return None
	
print(select_first([10, 20, 30]))`,
		check: (code) => 
			code.includes("[0]"),
		keyconcepts: `
			<li>The first item of any list is stored in <code>[0]</code></li>
			<li><code>len()</code> lets you check whether anything exists in a list</li>
			<li>Empty lists have a length of 0 and cannot be indexed directly</li>
			<li>Defensive programming helps make functions more reliable</li>
		`,
		externallink: "https://onecompiler.com/python/44xe626yn"
	},
	{
		title: "Best Team Captain",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Return the captain from the first team in a nested list.</p>
			<p><strong>Goal:</strong> Practice nested indexing.</p>
		`,
		hint: "Access the first team, then the captain inside it.",
		starterCode: `"""
EXPECTED OUTPUT:
Alice
"""

teams = [
	["Coach1", "Alice"],
	["Coach2", "Bob"]
]

def winning_team_captain(teams):
	"""Return captain of first (best) team"""
	return None
	
print(winning_team_captain(teams))`,
		check: (code) =>
			code.includes("[0][1]"),
		keyconcepts: `
			<li>Nested lists are lists that contain other lists as elements</li>
			<li>You can chain indexes such as <code>[0][1]</code> to access data inside inner lists</li>
			<li>The first index selects the team, while the second selects a person within that team</li>
		`,
		externallink: "https://onecompiler.com/python/44xe7dre6"
	},
	{
		title: "Last Player of Worst Team",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Return the last player from the last team.</p>
			<p><strong>Goal:</strong> Combine nested indexing with negative indexes.</p>
		`,
		hint: "Use negative indexes to work from the end.",
		starterCode: `"""
EXPECTED OUTPUT:
Charlie
"""

teams = [
	["Coach1", "Alice", "Bob"],
	["Coach2", "Tom", "Charlie"]
]

def last_player(teams):
	"""Return last player from last team"""
	return None
	
print(last_player(teams))`,
		check: (code) => 
			code.includes("[-1][-1]"),
		keyconcepts: `
			<li>Negative indexes count backwards from the end of a list</li>
			<li><code>[-1]</code> accesses the final item in a list</li>
			<li>Nested indexing can be combined to access deeply stored data</li>
		`,
		externallink: "https://onecompiler.com/python/44xe7pj2x"
	},
	{
		title: "Swap First Two Items",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Swap the first two items in a list.</p>
			<p><strong>Goal:</strong> Modify a list in place.</p>
		`,
		hint: "Use a temporary variable to store one value.",
		starterCode: `"""
EXPECTED OUTPUT:
['B', 'A', 'C']
"""

def swap_first_two(L):
	"""Swap first two elements"""
	temp = L[0]
	# TODO: complete swap
	
L = ['A', 'B', 'C']
swap_first_two(L)
print(L)`,
		check: (code) => 
			code.includes("L[0]") && 
			code.includes("L[1]"),
		keyconcepts: `
			<li>Values can be swapped by temporarily storing one of them</li>
			<li>Lists are mutable, meaning their contents can be changed directly</li>
			<li>Assigning to an index updates the existing list</li>
		`,
		externallink: "https://onecompiler.com/python/44xe7ykfw"
	},
	{
		title: "Swap Middle Elements",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Swap the items at index 1 and 2.</p>
			<p><strong>Goal:</strong> Practice index assignment.</p>
		`,
		hint: "Store one value before replacing it.",
		starterCode: `"""
EXPECTED OUTPUT:
['A', 'C', 'B', 'D']
"""

def swap_middle(L):
	"""Swap index 1 and 2"""
	# TODO
	
L = ['A', 'B', 'C', 'D']
swap_middle(L)
print(L)`,
		check: (code) => 
			code.includes("L[1]") && 
			code.includes("L[2]"),
		keyconcepts: `
			<li>Each item in a list can be modified through its index position</li>
			<li>Mutability allows changes without creating a new list</li>
			<li>Carefully tracking positions helps avoid overwriting values accidentally</li>
		`,
		externallink: "https://onecompiler.com/python/44xe8pac4"
	},
	{
		title: "List Length Predictions",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Predict the lengths of several lists.</p>
			<p><strong>Goal:</strong> Understand how nesting and slicing affect length.</p>
		`,
		hint: "Count top-level items only.",
		starterCode: `a = [1, 2]
b = [[1, 2], 3]
c = ['a', 'b', 'c', 'd']
d = [5, 6, 7][2:]

# TODO: fill lengths
lengths = [None, None, None, None]

print(lengths)`,
		check: (code) => 
			code.includes("2") && 
			code.includes("4"),
		keyconcepts: `
			<li>Nested lists count as a single element when using <code>len()</code></li>
			<li>Slices create new lists whose lengths may differ from the original</li>
			<li>Predicting results before running code builds stronger reasoning skills</li>
		`,
		externallink: "https://onecompiler.com/python/44xe8zpy3"
	},
	{
		title: "More List Length Predictions",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Determine the lengths of lists containing nested data and slices.</p>
			<p><strong>Goal:</strong> Strengthen understanding of list structure.</p>
		`,
		hint: "Focus on visible elements, not values inside nested lists.",
		starterCode: `a = []
b = [[], []]
c = [1, [2, 3], 4]
d = [1, 2, 3, 4][:-1]

# TODO
lengths = [None, None, None, None]

print(lengths)`,
		check: (code) => 
			code.includes("0"),
		keyconcepts: `
			<li>An empty list has a length of 0</li>
			<li>Lists inside lists still count as a single top-level item</li>
			<li>Slicing with negative indexes can exclude items from the end</li>
		`,
		externallink: "https://onecompiler.com/python/44xe9dvux"
	},
	{
		title: "Early Arrival Check",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Determine whether a guest arrived during the first half of arrivals.</p>
			<p><strong>Goal:</strong> Compare positions within a list.</p>
		`,
		hint: "Compare the guest's position to half the list length.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def early_guest(arrivals, name):
	"""Return True if guest arrived in first half"""
	order = arrivals.index(name)
	# TODO
	return None
	
guests = ["A", "B", "C", "D", "E"]

print(early_guest(guests, "B"))`,
		check: (code) => 
			code.includes(".index") && 
			code.includes("len"),
		keyconcepts: `
			<li><code>.index()</code> finds the position of a value within a list</li>
			<li><code>len()</code> can be used to calculate where the halfway point occurs</li>
			<li>Comparing positions is a common pattern in list-based algorithms</li>
		`,
		externallink: "https://onecompiler.com/python/44xe9qaue"
	},
	{
		title: "Last Arrival Check",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Check whether a guest was the final person to arrive.</p>
			<p><strong>Goal:</strong> Compare an index to the end of a list.</p>
		`,
		hint: "The last index is len(list) - 1.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def is_last(arrivals, name):
	"""Return True if guest is last"""
	# TODO
	return None
	
guests = ["A", "B", "C", "D"]

print(is_last(guests, "D"))`,
		check: (code) => 
			code.includes(".index") && 
			code.includes("len"),
		keyconcepts: `
			<li>List indexes start at 0, so the final position is <code>len(list) - 1</code></li>
			<li>Comparing indexes helps identify specific locations in a sequence</li>
			<li>Boundary conditions are important when working with the first or last element</li>
		`,
		externallink: "https://onecompiler.com/python/44xe9zdgw"
	},
	{
		title: "Middle Guest",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Determine whether a guest occupies the middle position.</p>
			<p><strong>Goal:</strong> Calculate and compare the midpoint.</p>
		`,
		hint: "Use integer division to find the center index.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def is_middle(arrivals, name):
	"""Return True if guest is in middle position"""
	order = arrivals.index(name)
	# TODO
	return None
	
guests = ["A", "B", "C"]

print(is_middle(guests, "B"))`,
		check: (code) => 
			code.includes("//"),
		keyconcepts: `
			<li>Integer division (<code>//</code>) is useful when calculating list positions</li>
			<li>The middle index can be found from the list length</li>
			<li>Reasoning about positions develops problem-solving skills for algorithms</li>
		`,
		externallink: "https://onecompiler.com/python/44xeab8uv"
	},
	]
},
{
	id: 5,
	title: "Loops and List Comprehensions",
	description: "For and while loops, and a much-loved Python feature: list comprehensions",
	exercises: [
	{
		title: "For Loop (Print Items)",
		difficultylevel: "🟢",
		difficulty: "easy",
		points: 10,
		complete: false,
		description: `
			<p>You are displaying items in a store inventory.</p>
			<p><strong>Goal:</strong> Loop through a list and print each item.</p>
		`,
		hint: "Use: for item in list",
		starterCode: `"""
EXPECTED OUTPUT:
Apple 
Banana
Orange
"""

fruits = ["Apple", "Banana", "Orange"]

# TODO: loop ad print each fruit
None`,
		check: (code) => 
			code.includes("for") && code.includes("in"),
		keyconcepts: `
			<li>Use <code>for</code> loops to iterate over lists</li>
			<li><code> for item in list</code> is standard pattern</li>
			<li>Loops run once per element</li>
		`,
		externallink: "https://onecompiler.com/python/44xeav894"
	},
	{
		title: "Loop Accumulator (Multiply Values)",
		difficultylevel: "🟢🟡",
		difficulty: "easy-medium",
		points: 15,
		complete: false,
		description: `
			<p>You are calculating the product of numbers.</p>
			<p><strong>Goal:</strong> Multiply all values using a loop.</p>
		`,
		hint: "Start with 1",
		starterCode: `"""
EXPECTED OUTPUT:
24
"""

numbers = [2, 3, 4]

product = None

# TODO: loop and multiply values

print(product)`,
		check: (code) => 
			code.includes("for") && code.includes("*"),
		keyconcepts: `
			<li>Use accumulator variables</li>
			<li>Start multiplication at 1</li>
			<li>Update value inside loop</li>
		`,
		externallink: "https://onecompiler.com/python/44xeb7d7w"
	},
	{
		title: "Loop + Condition (Extract Uppercase)",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>You are extracting uppercase letters from a string.</p>
			<p><strong>Goal:</strong> Print only uppercase characters.</p>
		`,
		hint: "Use: char.isupper()",
		starterCode: `"""
EXPECTED OUTPUT:
ABC
"""

text = "aAbBcC"

# TODO: loop and print uppercase letters
None`,
		check: (code) => 
			code.includes("isupper"),
		keyconcepts: `
			<li>Loop through strings character by character</li>
			<li><code>.isupper()</code> checks uppercase</li>
			<li>Combine loops with conditions</li>
		`,
		externallink: "https://onecompiler.com/python/44xebth35"
	},
	{
		title: "Raneg Loop (Repeat Action)",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>You are repeating a task multiple times.</p>
			<p><strong>Goal:</strong> Use range() to loop 5 times.</p>
		`,
		hint: "Use: range(5)",
		starterCode: `"""
EXPECTED OUTPUT:
0
1
2
3
4
"""

# TODO: print numbers 0-4 using range
None`,
		check: (code) => 
			code.includes("range"),
		keyconcepts: `
			<li><code>range(n)</code> generates numbers from 0 to n-1</li>
			<li>Useful for fixed loops</li>
			<li>Common loop pattern</li>
		`,
		externallink: "https://onecompiler.com/python/44xec2kz6"
	},
	{
		title: "While Loop (Counting)",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>You are counting numbers until a condition is met.</p>
			<p><strong>Goal:</strong> Print numbers from 0 to 4 using a while loop.</p>
		`,
		hint: "Increment counter",
		starterCode: `"""
EXPECTED OUTPUT:
0
1
2
3
4
"""

i = 0

# TODO: loop while i < 5
None`,
		check: (code) => 
			code.includes("while") && code.includes("i < 5"),
		keyconcepts: `
			<li><code>while</code> loops run while condition is True</li>
			<li>Must update variable inside loop</li>
			<li>Be careful of infinite loops</li>
		`,
		externallink: "https://onecompiler.com/python/44xec8wed"
	},
	{
		title: "List Comprehension (Squares)",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>You are generating square numbers.</p>
			<p><strong>Goal:</strong> Use list comprehension.</p>
		`,
		hint: "n**2 for n in range(...) ",
		starterCode: `"""
EXPECTED OUTPUT:
[0,1, 4, 9, 16]
"""

# TODO: create squares list
squares = None

print(squares)`,
		check: (code) => 
			code.includes("for") && code.includes("**"),
		keyconcepts: `
			<li>List comprehensions create lists in one line</li>
			<li>Format: [expression for item in iterable]</li>
			<li>More concise than loops</li>
		`,
		externallink: "https://onecompiler.com/python/44xek3tnc"
	},
	{
		title: "List Comprehension + Filter (Short Words)",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Filter words based on length./p>
			<p><strong>Goal:</strong> Keep words shorter than 5 letters.</p>
		`,
		hint: "Use if condition",
		starterCode: `"""
EXPECTED OUTPUT:
['cat', 'dog']
"""

words = ["cat", "elephant", "dog", "giraffe"]

# TODO: use list comprehension with condition
short_words = None

print(short_words)`,
		check: (code) => 
			code.includes("if"),
		keyconcepts: `
			<li>Add conditions in list comprehension</li>
			<li>Format: [x for x in list if condition]</li>
			<li>Similar to filtering data</li>
		`,
		externallink: "https://onecompiler.com/python/44xen7k78"
	},
	{
		title: "Transformation (Uppercase + Symbol)",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Enhance text formatting.</p>
			<p><strong>Goal:</strong> Make words uppercase and add '!'</p>
		`,
		hint: "Use .upper()",
		starterCode: `"""
EXPECTED OUTPUT:
['HI!', 'HELLO!']
"""

words = ["hi", "hello"]

# TODO
result = None

print(result)`,
		check: (code) => 
			code.includes("upper"),
		keyconcepts: `
			<li>List comprehensions can transform data</li>
			<li>Apply functions inside expression</li>
			<li>Common for data cleaning</li>
		`,
		externallink: "https://onecompiler.com/python/44xenfet8"
	},
	{
		title: "Counting with Loops (Negatives)",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Count how many numbers are negative.</p>
			<p><strong>Goal:</strong> Use loop or comprehension.</p>
		`,
		hint: "Use if num < 0",
		starterCode: `"""
EXPECTED OUTPUT:
2
"""

nums = [5, -1, -2, -3]

# TODO: count negatives
count = None

print(count)`,
		check: (code) => 
			code.includes("< 0"),
		keyconcepts: `
			<li>Combine loops with counting</li>
			<li>Increment counter when condition met</li>
			<li>Alternative: use sum() with booleans</li>
		`,
		externallink: "https://onecompiler.com/python/44xennua8"
	},
	/** ADDITIONAL EXERCISES / NEXT LEVEL */
	{
		title: "Has Even Number",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Fix the function so it correctly checks whether a list contains an even number.</p>
			<p><strong>Goal:</strong> Understand where <code>return False</code> should be placed when searching through a list.</p>
		`,
		hint: "Only return False after checking every number.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def has_even_number(nums):
	"""Return True if any number is even."""
	for num in nums:
		if num % 2 == 0:
			return True
		else:
			return False    # BUG
			
print(has_even_number([1, 3, 4, 5]))`,
		check: (code) => 
			code.includes("return True") && 
			code.includes("return False"),
		keyconcepts: `
			<li>A loop should usually examine every item before deciding that something is not present</li>
			<li>Returning too early can stop the loop before it reaches the correct answer</li>
			<li>Debugging loops often involves tracing the order in which statements execute</li>
		`,
		externallink: "https://onecompiler.com/python/44xep9suh"
	},
	{
		title: "Has Negative Number",
		difficultylevel: "🟡",
		difficulty: "medium",
		points: 20,
		complete: false,
		description: `
			<p>Fix the logic so the function correctly finds negative numbers anywhere in the list.</p>
			<p><strong>Goal:</strong> Understand loop execution and return placement.</p>
		`,
		hint: "The function should only return False after checking every value.",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def has_negative(nums):
	"""Return True if any number is negative."""
	for num in nums:
		if num < 0:
			return True
		else:
			return False 		# BUG 

print(has_negative([5, 2, -1, 3]))`,
		check: (code) => 
			code.includes("num < 0"),
		keyconcepts: `
			<li>Loops are often used to search through collections of data</li>
			<li>The placement of <code>return</code> statements affects whether all items are checked</li>
			<li>Testing with values later in the list helps reveal logic bugs</li>
		`,
		externallink: "https://onecompiler.com/python/44xepmz6c"
	},
	{
		title: "Less Than Threshold",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Create a new list showing whether each item is less than a threshold.</p>
			<p><strong>Goal:</strong> Build a list of boolean values using a loop.</p>
		`,
		hint: "Compare each item with thresh.",
		starterCode: `"""
EXPECTED OUTPUT:
[True, True, False]
"""

def elementwise_less_than(L, thresh):
	result = []
	
	# TODO
	for item in L:
		if None:
			result.append(True)
		else:
			result.append(False)
			
	return result
	
print(elementwise_less_than([1, 2, 5], 3))`,
		check: (code) => 
			code.includes("< thresh"),
		keyconcepts: `
			<li>Loops can process list items one at a time</li>
			<li>Comparison operators produce boolean values such as True or False</li>
			<li>The output list should contain one result for every input item</li>
		`,
		externallink: "https://onecompiler.com/python/44xeq2tna"
	},
	{
		title: "Even/Odd Mapping",
		difficultylevel: "🟠",
		difficulty: "medium-hard",
		points: 25,
		complete: false,
		description: `
			<p>Create a list showing which numbers are even.</p>
			<p><strong>Goal:</strong> Convert numeric data into boolean results.</p>
		`,
		hint: "Use the modulus (%) operator.",
		starterCode: `"""
EXPECTED OUTPUT:
[False, True, False]
"""

def is_even_list(nums):
	result = []
	
	# TODO: True if even, False otherwise 
	for num in nums:
		result.append(None)
		
	return result
	
print(is_even_list([1, 2, 3]))`,
		check: (code) =>
			code.includes("% 2"),
		keyconcepts: `
			<li>Each element can be evaluated independently inside a loop</li>
			<li>The modulus operator helps determine whether a number is even</li>
			<li>Building result lists is a common data transformation technique</li>
		`,
		externallink: "https://onecompiler.com/python/44xeqfrxd"
	},
	{
		title: "Repeated Numbers",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Detect whether the same number appears twice in a row.</p>
			<p><strong>Goal:</strong> Compare neighboring elements using indexes.</p>
		`,
		hint: "Compare nums[i] with nums[i + 1].",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def has_consecutive_repeat(nums):
	"""Return True if same number appears twice in a row"""
	for i in range(len(nums) - 1):
		if None:
			return True
			
	return False
	
print(has_consecutive_repeat([1, 2, 2, 3]))`,
		check: (code) => 
			code.includes("i + 1"),
		keyconcepts: `
			<li><code>range(len(...))</code> provides index positions rather than values</li>
			<li>Neighbor comparisons require access to both the current and next element</li>
			<li>Careful boundary handling avoids accessing indexes beyond the end of the list</li>
		`,
		externallink: "https://onecompiler.com/python/44xeqybrh"
	},
	{
		title: "Duplicate Characters",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Check whether a word contains consecutive repeated letters.</p>
			<p><strong>Goal:</strong> Apply index-based looping to strings.</p>
		`,
		hint: "Compare word[i] and word[i + 1].",
		starterCode: `"""
EXPECTED OUTPUT:
True
"""

def has_double_letters(word):
	"""Check if any letter repeats consecutively"""
	for i in range(len(word) - 1):
		if None:
			return True
			
	return False
	
print(has_double_letters("letter"))`,
		check: (code) => 
			code.includes("word[i]") &&
			code.includes("i + 1"),
		keyconcepts: `
			<li>Strings behave like sequences and can be indexed just like lists</li>
			<li>Looking at neighboring characters helps identify patterns in text</li>
			<li>Many searching algorithms rely on comparing adjacent elements</li>
		`,
		externallink: "https://onecompiler.com/python/44xerckf7"
	},
	{
		title: "Dice Simulation",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Simulate rolling a die many times and estimate the average profit.</p>
			<p><strong>Goal:</strong> Practice simulation using loops and random values.</p>
		`,
		hint: "Store the result of each roll minus the cost.",
		starterCode: `"""
EXPECTED OUTPUT:
(float value ~ 0)
"""

import random

def roll_dice():
	return random.randint(1, 6)
	
def estimate_average_roll(n_runs):
	"""Return average value minus cost (3)"""
	results = []
	
	# TODO
	for i in range(n_runs):
		results.append(None)
		
	avg = sum(results) / n_runs
	return avg
	
print(estimate_average_roll(1000))`,
		check: (code) => 
			code.includes("roll_dice"),
		keyconcepts: `
			<li>Simulations use repeated random trials to estimate outcomes</li>
			<li>Accumulating results allows averages to be calculated afterward</li>
			<li>Larger sample sizes generally produce more stable estimates</li>
		`,
		externallink: "https://onecompiler.com/python/44xesks2b"
	},
	{
		title: "Coin Flip Profit",
		difficultylevel: "🔴",
		difficulty: "hard",
		points: 30,
		complete: false,
		description: `
			<p>Estimate the average profit of a coin-flipping game.</p>
			<p><strong>Goal:</strong> Model profits across many random trials.</p>
		`,
		hint: "Each play has a reward and a cost.",
		starterCode: `"""
EXPECTED OUTPUT:
(float value)
"""

import random

def flip_coin():
	return random.choice([0, 2]) 		# win or nothing
	
def simulate_profit(n_runs):
	"""Each play costs 1"""
	profits = []
	
	# TODO
	for i in range(n_runs):
		profits.append(None)
		
	return sum(profits) / n_runs
	
print(simulate_profit(1000))`,
		check: (code) => 
			code.includes("flip_coin"),
		keyconcepts: `
			<li>Random simulations can be used to estimate long-term outcomes</li>
			<li>Lists are useful for collecting results from repeated experiments</li>
			<li>Expected value reasoning compares average rewards against costs</li>
		`,
		externallink: "https://onecompiler.com/python/44xetz7xp"
	},
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
	/** ADDITIONAL EXERCISES / NEXT LEVEL */
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
	/** ADDITIONAL EXERCISES / NEXT LEVEL */
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