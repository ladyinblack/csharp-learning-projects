window.quiz = {
	stacks: [
	{
		question: `What is the fundamental access order pattern of a Stack data structure?`,
		options: [
			"FIFO (First-In, First-Out)",
			"LIFO (Last-In, First-Out)",
			"Random Access",
			"Key-Value pair retrieval"
		],
		answer: `LIFO (Last-In, First-Out)`,
		explanation: [
			`Incorrect - This is the access pattern of a <strong>queue</strong>, not a stack.  In a queue, the first element added is the first one removed (like people standing in line). You're mixing up stacks with queues.`,
			`Correct - A <strong>stack</strong> is a linear data structure that follows the <strong>Last-In, First-Out</strong> principle. This means:
			<ul>
				<li>The <strong>last element pushed</strong> (inserted) onto the stack is the <strong>first one popped</strong> (removed).</li>
				<li>You can imagine it like a stack of plates: you add plates on top, and when you need one, you take the top plate first.</li>
			</ul>
			In programming, stacks are often used for:
			<ul>
				<li><strong>Function call management</strong (the call stack in most languages).</li>
				<li><strong>Undo/redo operations</strong> in editors.</li>
				<li><strong>Expression evaluation</strong> (like parsing arithmetic expressions).</li>
			</ul>`,
			`Incorrect - Random access means you can directly access any element by index (like in an array or list). Stacks don't allow this - you can only interact with the <strong>top element</strong>.`,
			`Incorrect - This describes a <strong>map/dictionary</strong> data structure, not a stack. In a dictionary, you retrieve values using keys. Stacks don't have keys - they only have ordered elements with push/pop operations.`
		]
	},
	{
		question: `If a stack is allocated a fixed layout in memory and runs completely out of space when a user tries to insert an element, what error occurs?`,
		options: [
			"Stack Underflow",
			"NullPointerException",
			"Stack Overflow",
			"OutOfBoundsException"
		],
		answer: `Stack Overflow`,
		explanation: [
			`Incorrect - This happens when you try to <strong>pop</strong> (remove) an element from an empty stack. It's the opposite of overflow.`,
			`Incorrect - This is a specific error in languages like Java or C#, thrown when you try to access or dereference a variable that points to <code>null</code>. It has nothing to do with stack capacity.`,
			`Correct - A <strong>stack</strong> has a fixed size when allocated in memory. If you try to <strong>push</strong> (insert) more elements than it can hold, the program runs out of space for that stack. This condition is called a <strong>stack overflow</strong>.
			<ul>
				<li>Think of it like piling plates on a shelf with limited height. Once the shelf is full, adding another plate causes them to topple - that's overflow.</li>
				<li>In programming, stack overflow errors often occur when:
					<ul>
						<li>Too many recursive function calls are made without a base case.</li>
						<li>A program tries to push beyond the allocated stack memory.</li>
					</ul>
				</li>
			</ul>`,
			`Incorrect - This occurs when you try to access an index outside the valid range of an array or list. Stacks don't use direct indexing; they only allow push, pop, and peek operations.`
		]
	},
	{
		question: `What is the worst-case time complexity of retrieving the top element (Peek) from an optimized stack?`,
		options: [
			"O(1)",
			"O(log n)",
			"O(n)",
			"O(n<sup>2</sup>)"
		],
		answer: `O(1)`,
		explanation: [
			`Correct - The <strong>peek</strong> operation simply retrieves the <strong>top element</strong> of the stack without removing it. Since the stack internally keeps track of the top element (usually via a pointer or index), accessing it is a <strong>constant-time operation</strong>.
			<ul>
				<li>No matter how many elements are in the stack - 10, 1000, or 1000000 - the time to peek is the same.</li>
				<li>This is because you don't need to traverse the stack or perform any calculations; you just look at the top.</li>
			</ul>`,
			`Incorrect - Logarithmic time occurs in operations like binary search or balanced tree lookups. Stacks don't require searching or balancing for peek.`,
			`Incorrect - Linear time means the operation depends on the number of elements (like scanning through an array). Peek doesn't require scanning - it's direct access.`,
			`Incorrect - Quadratic time arises in nested loops (like comparing every pair of elements). Stacks don't involve nested iterations for peek.`
		]
	},
	{
		question: `Which array method in JavaScript naturally simulates a stack's <code>pop</code> behavior?`,
		options: [
			"<code>shift()</code>",
			"<code>unshift()</code>",
			"<code>pop()</code>",
			"<code>splice(0, 1)</code>"
		],
		answer: `<code>pop()</code>`,
		explanation: [
			`Incorrect - Removes the <strong>first element</strong> of an array, not the last. This simulates <strong>queue behavior (FIFO)</strong>, not stack behavior.`,
			`Incorrect - Adds a new element to the <strong>beginning</strong> of an array. This is the opposite of stack operations, which add to the end.`,
			`Correct - The <strong>pop()</strong> method in JavaScript removes the <strong>last element</strong> from an array and returns it. This directly mirrors the <strong>stack's pop behavior</strong>, which follows the <strong>LIFO (Last-In, First-Out)</strong> principle.
			Example:
			<pre><code>
let stack = [10, 20, 30];
let top = stack.pop(); // removes 30
console.log(top);      // 30
console.log(stack);    // [10, 20]

			</code></pre>
			Just like a stack, the last item pushed (30) is the first one popped.`,
			`Incorrect - Removes elements at a specified index (here, index 0). This is not stack-like because stacks don't allow arbitrary removal - only from the top.`
		]
	},
	{
		question: `Consider the sequence of operations: Push(10), Push(20), Pop(), Push(30), Peek().  What value does Peek() return?`,
		options: [
			"10",
			"20",
			"30",
			"Null"
		],
		answer: `30`,
		explanation: [
			`Incorrect - 10 is still in the stack, but it's <strong>not the top</strong>. Peek doesn't look at the bottom; it only checks the top.`,
			`Incorrect - 20 was pushed but then popped, so it's no longer in the stack.`,
			`Correct - The <strong>peek</strong> operation always returns the <strong>current top element</strong>. After the sequence, the top is 30, so Peek() gives 30.`,
			`Incorrect - Null would only be returned if the stack were empty. Since the stack has [10, 30], Peek returns 30, not null.`
		]
	},
	{
		question: `What is the condition of an empty stack when a program attempts to perform a <code>pop()</code> operation?`,
		options: [
			"Stack Overflow",
			"Garbage Collection",
			"Stack Underflow",
			"Memory Leak"
		],
		answer: `Stack Underflow`,
		explanation: [
			`Incorrect - This happens when you try to <strong>push</strong> onto a stack that is already full (exceeding its allocated memory). It's the opposite of underflow.`,
			`Incorrect - Garbage collection is a memory management process in languages like Java or C#, where unused objects are automatically cleaned up. It has nothing to do with stack operations.`,
			`Correct - A <strong>stack underflow</strong> occurs when a program attempts to <strong>pop</strong> (remove) an element from an <strong>empty stack</strong>.  Since there are no elements to remove, the operation is invalid, and this condition is flagged as an error.
			<ul>
				<li>Imagine a stack of plates: if the stack is empty and you try to take a plate, there's nothing there - that's underflow.</li>
				<li>In programming, this often happens if you don't check whether the stack is empty before calling <code>pop()</code>.</li>
			</ul>`,
			`Incorrect - A memory leak occurs when a program fails to release memory it no longer needs, leading to wasted resources. This is unrelated to stack operations.`
		]
	},
	{
		question: `Why is search operation inside a stack considered inefficient (<em>O(n)</em>))?`,
		options: [
			"Because items are stored across fragmented memory spaces.",
			"Because you must explicitly pop elements one by one to inspect items near the bottom.",
			"Because stacks must re-index items after every single lookup.",
			"Searching is actually <em>O(1)</em>"
		],
		answer: `Because you must explicitly pop elements one by one to inspect items near the bottom.`,
		explanation: [
			`Incorrect - Fragmentation can affect performance in some data structures, but it's not the reason search is inefficient in stacks. Stacks are usually implemented with contiguous memory (arrays) or linked nodes, and the inefficiency comes from the access restriction, not fragmentation.`,
			`Correct - Stacks are designed with a strict <strong>LIFO</strong> discipline: you can only interact with the <strong>top element</strong> directly. If you want to search for an element deeper in the stack, you don't have random access.  Instead, you'd need to <strong>pop elements one by one</strong> until you reach the desired item.
			<ul>
				<li>This means the time complexity depends on how far down the element is.</li>
				<li>In the worst case, the element is at the bottom, requiring you to traverse all <em>n</em> elements.</li>
				<li>Therefore, the search operation is <strong>O(n)</strong> - linear time.</li>
			</ul>`,
			`Incorrect - Arrays may re-index when elements are inserted or removed at arbitrary positions, but stacks don't re-index after peek or pop. They only adjust the top pointer.`,
			`Incorrect - This is incorrect because O(1) means constant time regardless of stack size. Only <strong>peek, push, and pop</strong> are O(1). Searching requires traversing, so it scales with the number of elements.`
		]
	},
	{
		question: `Which of the following data structures can be natively used to implement a Stack?`,
		options: [
			"Singly Linked List",
			"Dynamic Array (Vector)",
			"Both A and B",
			"Neither A nor B"
		],
		answer: `Both A and B`,
		explanation: [
			`While correct, it's incomplete because arrays can also implement stacks.`,
			`Also correct, it's incomplete because arrays can also implement stacks.`,
			`Correct - A stack can be implemented using either a <strong>singly linked list</strong> or a <strong>dynamic array</strong> (like Java's <code>Vector</code> or <code>ArrayList</code>). Both structures naturally support the <strong>push</strong> and <strong>pop</strong> operations required for stack behavior.
			<h5>Singly Linked List:</h5>
			<ul>
				<li>Each node points to the next, and the stack's top is tracked.</li>
				<li>Push &rarr; add a new node at the head.</li>
				<li>Pop &rarr; remove the head node.</li>
				<li>Efficient because operations are <em>O(1)</em>.</li>
			</ul>
			<h5>Dynamic Array (Vector):</h5>
			<ul>
				<li>Stores elements in contiguous memory.</li>
				<li>Push &rarr; append to the end.</li>
				<li>Pop &rarr; remove the last element.</li>
				<li>Also <em>O(1)</em> for push/pop (amortized), though resizing may occasionally cost more.</li>
			</ul>
			Because both structures can directly model stack operations, the correct choice is <strong>Both A and B</strong>.`,
			`This is wrong because both singly linked lists and dynamic arrays are standard ways to implement stacks.`
		]
	},
	{
		question: `If you push characters 'A', 'B', 'C' sequentially into a stack, what is the output sequence if you pop them all out until empty?`,
		options: [
			"A, B, C",
			"C, B, A",
			"B, C, A",
			"A, C, B"
		],
		answer: `C, B, A`,
		explanation: [
			`Incorrect - This is <strong>FIFO (First-In, First-Out)</strong> behavior, which describes a queue, not a stack.`,
			`Correct - Stacks follow the <strong>LIFO principle - Last-In, First-Out</strong>. The last element pushed ('C') is the first one popped, followed by 'B', then 'A'.`,
			`Incorrect - This order doesn't follow stack rules. 'B' cannot be popped before 'C' because 'C' is on top.`,
			`Incorrect - This is also invalid because 'A' is at the bottom and can only be popped last, not first.`
		]
	},
	{
		question: `When an application experiences endless, uncontrolled recursive function calls, what architectural limit is broken?`,
		options: [
			"Heap Memory Boundary",
			"Maximum Call Stack Size",
			"CPU Clock Cycle Timeout",
			"Data Stream Overflow"
		],
		answer: `Maximum Call Stack Size`,
		explanation: [
			`Incorrect - The heap is used for dynamic memory allocation (objects, arrays, etc.), not for function call tracking. Endless recursion doesn't primarily consume heap memory; it consumes stack memory.`,
			`Correct - When a program makes <strong>endless recursive calls</strong> without a proper base case, each call adds a new frame to the <strong>call stack</strong>. The call stack is a special memory region reserved for tracking function calls, local variables, and return addresses.
			<ul>
				<li>Each recursive call consumes stack space.</li>
				<li>If recursion never ends, the stack keeps growing until it exceeds the <strong>maximum call stack size</strong> allocated by the system.</li>
				<li>At that point, the program throws a <strong>stack overflow error</strong>.</li>
			</ul>
			This is a classic architectural limit: the stack has a finite boundary, and uncontrolled recursion breaks it.`,
			`Incorrect - CPUs don't "timeout" because of recursion. They keep executing instructions until halted. The failure here isn't about CPU cycles but about memory exhaustion in the stack.`,
			`Incorrect - This refers to exceeding the capacity of a data stream (like network buffers or I/O channels). It's unrelated to recursion or stack limits.`
		]
	}
	],
	stackschallenge: [
	{
		question: `Which scenario best illustrates the Last-In-First-Out (LIFO) behavior of a stack?`,
		options: [
			"Undo operations in a text editor where the most recent change is reverted first",
			"People joining and leaving a queue at a ticket counter",
			"Serving tasks in an operating system scheduler using round-robin order",
			"Cars exiting a one-way tunnel in the order they entered"
		],
		answer: `Undo operations in a text editor where the most recent change is reverted first`,
		explanation: [
			`Undo operations in a text editor where the most recent change is reverted first align exactly with LIFO behavior. Each user action is pushed on top of a stack. When the user presses undo, the system pops the top action (the last one taken) and reverses it. This effectively walks the history backward. The design is powerful because it requires no complex searching; the desired action is always on top. It also allows easy redo functionality by pushing popped operations onto another stack. This data structure choice keeps the implementation simple and efficient while matching user expectations for how undo should behave.`,
			``,
			``,
			``
		]
	},
	{
		question: ``,
		options: [],
		answer: ``,
		explanation: []
	},
	{
		question: ``,
		options: [],
		answer: ``,
		explanation: []
	},
	{
		question: ``,
		options: [],
		answer: ``,
		explanation: []
	},
	{
		question: ``,
		options: [],
		answer: ``,
		explanation: []
	},
	{
		question: ``,
		options: [],
		answer: ``,
		explanation: []
	},
	{
		question: ``,
		options: [],
		answer: ``,
		explanation: []
	},
	{
		question: ``,
		options: [],
		answer: ``,
		explanation: []
	},
	{
		question: ``,
		options: [],
		answer: ``,
		explanation: []
	},
	{
		question: ``,
		options: [],
		answer: ``,
		explanation: []
	},
	],
	queues: [
	{
		question: ``,
		options: [],
		answer: ``,
		explanation: []
	},
	]
};
