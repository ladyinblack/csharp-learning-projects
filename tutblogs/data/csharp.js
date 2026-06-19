window.quiz = {
	stacks: [
	{
		question: `Which namespace must be explicitly referenced in C# to use standard, strongly-typed generic Stack objects?`,
		options: [
			"<code>System.Collections</code>",
			"<code>System.Collections.Generic</code>",
			"<code>System.Data.Linq</code>",
			"<code>System.Text</code>"
		],
		answer: `<code>System.Collections.Generic</code>`,
		explanation: [
			`Incorrect - This namespace contains <strong>non-generic collections</strong> like <code>Stack</code>, <code>Queue</code>, and <code>ArrayList</code>.  While you can use <strong>Stack</strong> here, it's not strongly typed - elements are stored as <code>object</code>, requiring casting and risking runtime errors.`,
			`Correct - In C#, the <strong>System.Collections.Generic</strong> namespace contains strongly-typed generic collections, including <code>Stack&#60;T&#62;</code>.
			<ul>
				<li><code>Stack&#60;T&#62;</code> is the generic stack class that enforces type safety.</li>
				<li>Example:
					<pre><code>
using System.Collections.Generic;

Stack&#60;int&#62; numbers = new Stack&#60;int&#62;();
numbers.Push(10);
numbers.Push(20);
Console.WriteLine(numbers.Pop()); // 20
					</code></pre>
				</li>
				<li>Without referencing this namespace, you cannot directly use <code>Stack&#60;T&#62;</code> in your program.</li>
			</ul>`,
			`Incorrect - This namespace is for LINQ-to-SQL functionality, dealing with database queries and object-relational mapping. It has nothing to do with stack data structures.`,
			`Incorrect - This namespace provides classes for text manipulation, such as <code>StringBuilder</code> and encoding classes. It's unrelated to collections or stacks.`
		]
	},
	{
		question: `What occurs if you attempt to invoke the <code>Pop()</code> method on an empty <code>Stack&#60;int&#62;</code> object in C#?`,
		options: [
			"The method returns <code>0</code>.",
			"The method returns <code>null</code>.",
			"It throws a <code>System.InvalidOperationException</code>.",
			"It throws a <code>System.IndexOutOfRangeException</code>."
		],
		answer: `It throws a <code>System.InvalidOperationException</code>.`,
		explanation: [
			`Incorrect - <code>Pop()</code> does not return a default value like 0. It must return the actual top element, and if none exists, it throws an exception.`,
			`Incorrect - <code>Stack&#60;int&#62;</code> is a value type stack, so it cannot return <code>null</code>. Even for reference types, <code>Pop()</code> throws an exception instead of returning <code>null</code>.`,
			`Correct - In C#, the <strong>Stack&#60;T&#62;.Pop()</strong> method removes and returns the element at the top of the stack. If the stack is <strong>empty</strong>, there is no element to remove, so the runtime throws a <strong>System.InvalidOperationException</strong>.
			<ul>
				<li>This is by design: the stack enforces its LIFO rules strictly.</li>
				<li>Attempting to pop from an empty stack is considered an <strong>invalid operation</strong>, hence the exception type.</li>
			</ul>
			Example:
			<pre><code>
Stack&#60;int&#62; numbers = new Stack&#60;int&#62;();
numbers.Pop(); // Throws System.InvalidOperationException
			</code></pre>`,
			`Incorrect - This exception occurs when accessing an invalid index in an array or list. A stack doesn't expose indices, so this error doesn't apply.`
		]
	},
	{
		question: `Which C# stack method allows you to examine the element at the top of the stack without removing it from the collection?`,
		options: [
			"<code>Look()</code>",
			"<code>Peek()</code>",
			"<code>Top()</code>",
			"<code>Contains()</code>"
		],
		answer: `<code>Peek()</code>`,
		explanation: [
			`Incorrect - There is no <code>Look()</code> method in C#.`,
			`Correct - In C#, the <strong>Peek()</strong> method allows you to <strong>examine the element at the top of the stack without removing it</strong>.
			<ul>
				<li>It's like looking at the top plate in a stack of dishes without taking it off.</li>
				<li><p>Example:</p>
					<pre><code>
Stack&#60;int&#62; numbers = new Stack&#60;int&#62;();
numbers.Push(10);
numbers.Push(20);
Console.WriteLine(numbers.Peek()); // 20
Console.WriteLine(numbers.Count);  // 2 (stack still has both elements)
					</code></pre>
				</li>
				<li>Notice that after calling <code>Peek()</code>, the stack remains unchanged.</li>
			</ul>`,
			`Incorrect - Some languages (like C++ STL) use <code>top()</code> to access the stack's top element, but in C#, the method is <code>Peek()</code>.`,
			`Incorrect - This method checks whether a specific element exists anywhere in the stack, not just the top. It returns a boolean (<code>true</code> or <code>false</code>), not the top element.`
		]
	},
	{
		question: `What is the structural difference between <code>System.Collections.Stack</code> and <code>System.Collections.Generic.Stack&#60;T&#62;</code> in C#?`,
		options: [
			"<code>Stack</code> works only with value types; <code>Stack&#60;T&#62;</code> works only with reference types.",
			"<code>Stack</code> stores elements as raw <code>object</code> types causing performance costs from boxing/unboxing; <code>Stack&#60;T&#62;</code> is type-safe.",
			"<code>Stack&#60;T&#62;</code> is slower due to generic type compiler reflection overhead.",
			"There is no structural difference; one is an alias of the other."
		],
		answer: `<code>Stack</code> stores elements as raw <code>object</code> types causing performance costs from boxing/unboxing; <code>Stack&#60;T&#62;</code> is type-safe.`,
		explanation: [
			`Incorrect - Both stacks can store <strong>any type</strong> (value or reference). The difference is whether boxing/unboxing occurs.`,
			`Correct - The structural difference lies in <strong>type safety and performance</strong>:
			<h5>System.Collections.Stack(non-generic)</h5>
			<ul>
				<li>Stores elements as <code>object</code>.</li>
				<li>Any value type (like <code>int</code>) must be <strong>boxed</strong> into an object when pushed, and <strong>unboxed</strong> when popped.</li>
				<li>Boxing/unboxing incurs performance overhead and can cause runtime errors if casting is incorrect.</li>
				<li>Example:
					<pre><code>
Stack stack = new Stack();
stack.Push(10); // boxed into object
int x = (int)stack.Pop(); // unboxed
					</code></pre>
				</li>
			</ul>
			<h5>System.Collections.Generic.Stack<T> (generic)</h5> 
			<ul>
				<li>Strong typed - you declare the type at compile time (<code>Stack&#60;int&#62;</code>, <code>Stack</code>, etc.).</li>
				<li>No boxing/unboxing overhead.</li>
				<li>Safer because type mismatches are caught at compile time.</li>
				<li>Example:
					<pre><code>
Stack&#60;int&#62; stack = new Stack&#60;int&#62;();
stack.Push(10); // stored as int directly
int x = stack.Pop(); // no casting needed
					</code></pre>
				</li>
			</ul>
			Thus, the <strong>generic version is both safer and faster</strong>.`,
			`Incorrect - Generics are optimized at compile time, not slower. In fact, they're faster because they avoid boxing/unboxing.`,
			`Incorrect - <code>Stack</code> and <code>Stack&#60;T&#62;</code> are distinct classes in different namespaces (<code>System.Collections</code> vs <code>System.Collections.Generic</code>). One is not an alias of the other.`
		]
	},
	{
		question: `If you initialize a <code>Stack&#60;int&#62;</code> and call <code>Push(5)</code>, <code>Push(10)</code>, and then check the <code>Count</code> property, what value is returned?`,
		options: [
			"0",
			"1",
			"2",
			"15"
		],
		answer: `2`,
		explanation: [
			`Incorrect - This would only be true if no elements had been pushed. Since we pushed two, Count cannot be 0.`,
			`Incorrect - This would be correct if only one element had been pushed. But we pushed two, so Count = 2.`,
			`The <code>Count</code> property in C# returns the <strong>number of elements currently in the stack</strong>.
			Let's walk through the operations:
			<ul>
				<li><strong>Initialize</strong> Stack&#60;int&#62; &rarr; Stack = [] (empty, Count = 0);</li>
				<li><strong>Push(5)</strong> &rarr; Stack = [5], Count = 1</li>
				<li><strong>Push(1)</strong> &rarr; Stack = [5, 1], Count = 2</li>
			</ul>
			So after these operations, the stack contains <strong>two elements</strong>, and <code>Count</code> returns <strong>2</strong>.`,
			`This is unrelated. The stack doesn't sum values; it counts elements. Even though we pushed 5 and 1. Count reflects <strong>how many items</strong>, not their sum.`
		]
	},
	{
		question: `If you want to clear out every single item inside a C# stack instance instantly, which method do you call?`,
		options: [
			"<code>Reset()</code>",
			"<code>Dispose()</code>",
			"<code>Clear()</code>",
			"<code>RemoveAll()</code>"
		],
		answer: `<code>Clear()</code>`,
		explanation: [
			`Incorrect - There is no <code>Reset()</code> method for stacks in C#.`,
			`<code>Dispose()</code> is used for releasing unmanaged resources in classes that implement <code>IDisposable</code>. A stack doesn't require disposal - it's managed memory.`,
			`Correct - In C#, the <strong>Clear()</strong> method removes <strong>all elements</strong> from a stack instance at once. After calling it, the stack becomes empty, and its <code>Count</code> property returns 0.
			<ul>
				<li>Example:
					<pre><code>
Stack&#60;int&#62; numbers = new Stack&#60;int&#62;();
numbers.Push(5);
numbers.Push(1);
Console.WriteLine(numbers.Count); // 2
numbers.Clear();
Console.WriteLine(numbers.Count); // 0
					</code></pre>
				</li>
				<li>This is the most efficient way to instantly empty a stack without manually popping each element.</li>
			</ul>`,
			`Incorrect - This method exists in <code>List&#60;T&#62;</code> but not in <code>Stack&#60;T&#62;</code>.`
		]
	},
	{
		question: `How does C# internally implement its <code>Stack&#60;T&#62;</code> memory architecture under the hood?`,
		options: [
			"As a doubly linked list.",
			"As a continuous dynamic array that resizes when capacity boundaries are crossed.",
			"As a key-value hash map table.",
			"As a binary tree layout."
		],
		answer: `As a continuous dynamic array that resizes when capacity boundaries are crossed.`,
		explanation: [
			`Incorrect - A linked list could theoretically implement a stack, but C#'s built-in <code>Stack&#60;T&#62;</code> does not use this structure. Linked lists have higher memory overhead and less cache locality compared to arrays.`,
			`Correct - The generic <strong>Stack&#60;T&#62;</strong> in C# is implemented internally using a <strong>dynamic array</strong> (similar to <code>List&#60;T&#62;</code>).
			<ul>
				<li>When you <strong>push</strong> elements, they are stored in contiguous memory.</li>
				<li>If the stack reaches its current capacity, the runtime dynamically <strong>resizes the underlying array</strong>, usually doubling its size, and copies existing elements into the new array.</li>
				<li>This ensures efficient amortized <strong><em>O(1)</em></strong> performance for push and pop operations.</li>
			</ul>
			So under the hood, <code>Stack<T> is essentially a wrapper around a resizable array with stack semantics.`,
			`Incorrect - Hash maps are used for associative collections like <code>Dictionary&#60;TKey, TValue&#62;</code>.  They don't enforce LIFO behavior, so this is unrelated.`,
			`Incorrect - Binary trees are hierarchical structures used for searching and sorting (like <code>SortedSet&#60;T&#62;</code>). They don't model stack operations.`
		]
	},
	{
		question: `What method can you safely use in modern C# to attempt to pop an item off a stack without running the risk of throwing an exception if it is empty?`,
		options: [
			"<code>TryPop(out T result)</code>",
			"<code>SafePop()</code>",
			"<code>PopOrDefault()</code>",
			"<code>CheckAndPop()</code>"
		],
		answer: `<code>TryPop(out T result)</code>`,
		explanation: [
			`Correct - Modern C# provides the <strong>TryPop</strong> method for <code>Stack&#60;T&#62;</code>.
			<ul>
				<li>It attempts to remove and return the top element of the stack.</li>
				<li>If the stack is <strong>not empty</strong>, it returns <code>true</code> and outputs the element.</li>
				<li>If the stack <strong>is empty</strong>, it returns <code>false</code> instead of throwing an exception.</li>
				<li>This makes it a safe alternative to <code>Pop()</code>.</li>
			</ul>
			Example:
			<pre><code>
Stack&#60;int&#62; numbers = new Stack&#60;int&#62;();
if (numbers.TryPop(out int result))
{
    Console.WriteLine($"Popped: {result}");
}
else
{
    Console.WriteLine("Stack was empty.");
}
			</code></pre>`,
			`Incorrect - No such method exists in C#.`,
			`Incorrect - This method doesn't exist either.`,
			`Incorrect - Not a real method. You'd have to manually check <code>Count</code> before calling <code>Pop()</code>.`
		]
	},
	{
		question: `If you iterate through a C# stack using a <code>foreach</code> loop, in what chronological order will the items be printed?`,
		options: [
			"From the bottom item to the top item.",
			"From the top item to the bottom item (LIFO order).",
			"Randomized structural order.",
			"Alphabetic or numeric sorted sequence."
		],
		answer: `From the top item to the bottom item (LIFO order).`,
		explanation: [
			`Incorrect - This would be FIFO order, which is how queues behave. Stacks don't enumerate this way.`,
			`Correct - When you iterate through a <strong>Stack&#60;T&#62;</strong> in C# using a <code>foreach</code> loop, the enumeration starts at the <strong>top of the stack</strong> and proceeds downward.
			<ul>
				<li>This means items are returned in <strong>Last-In, First-Out (LIFO)</strong> order.</li>
				<li>Example:
					<pre><code>
Stack&#60;int&#62; numbers = new Stack&#60;int&#62;();
numbers.Push(10);
numbers.Push(20);
numbers.Push(30);

foreach (int n in numbers)
{
    Console.WriteLine(n);
}
					</code></pre>
					Output:
					<pre><code>
30
20
10
					</code></pre>
				</li>
				<li>Notice that the most recently pushed item (<code>30</code>) is printed first.</li>
			</ul>`,
			`Incorrect - Iteration is deterministic, not random. The order is strictly defined by stack rules.`,
			`Incorrect - Stacks don't sort elements automatically. Enumeration follows insertion/removal order, not sorting.`
		]
	},
	{
		question: `What is the asymptotic time complexity of calling <code>Contains(T item)</code>, to check if a specific item is buried deep in a C# Stack containing <em>n</em> items?`,
		options: [
			"<em>O(1)</em>",
			"<em>O(log n)</em>",
			"<em>O(n)</em>",
			"<em>O(n log n)</em>"
		],
		answer: `<em>O(n)</em>`,
		explanation: [
			`Incorrect - Constant time applies to operations like <code>Push</code>, <code>Pop</code>, and <code>Peek</code>, which directly access the top element. Searching requires traversal, so its not <em>O(1)</em>.`,
			`Incorrect - Logarithmic time occurs in tree-based structures (like binary search trees). A stack doesn't have hierarchical indexing, so this doesn't apply.`,
			`Correct - The <strong>Contains(T item)</strong> method in C# checks whether a specific element exists in the stack.
			<ul>
				<li>Internally, <code>Stack&#60;T&#62;</code> is backed by a <strong>dynamic array</strong>.</li>
				<li>To find an item, <code>Contains()</code> must <strong>scan through all elements</strong> linearly until it either finds the match or reaches the bottom.</li>
				<li>In the worst case (item not present or buried at the bottom), this requires examining all <em>n</em> elements.</li>
				<li>Therefore, the time complexity is <strong><em>O(n)</em></strong>.</li>
			</ul>`,
			`Incorrect - This complexity arises the algorithm like sorting. <code>Contains()</code> is a simple linear scan, not a sorting operation.`
		]
	},
	],
	queues: [
	{
		question: ``,
		options: [],
		answer: ``
	},
	]
};
