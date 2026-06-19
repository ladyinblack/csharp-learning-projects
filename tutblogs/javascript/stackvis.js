// Internal state mimicking a real array-backed stack 
const stackData = [];
const canvas = document.getElementById('stack-canvas');
const log = document.getElementById('status-log');
const input = document.getElementById('element-input');

function pushToStack() {
	const value = input.value.trim();
	if (!value) {
		log.innerText = "Error: Please enter a value to push.";
		return;
	}
	if (stackData.length >= 6) {
		log.innerText = "Stack Overflow! (Visual limit reached for this demo)";
		return;
	}
	
	// Update Logic State 
	stackData.push(value);
	
	// Update UI 
	const element = document.createElement('div');
	element.className = 'stack-element';
	element.innerText = value;
	element.id = `item-${stackData.length - 1}`;
	canvas.appendChild(element);
	
	log.innerText = `Pushed "${value}". Current Stack (Top -> Bottom): [${[...stackData].reverse().join(', ')}]`;
	input.value = '';
	input.focus();
}

function popFromStack() {
	if (stackData.length === 0) {
		log.innerText = "Stack Underflow! Cannot pop from an empty stack.";
		return;
	}
	
	// Get the element to remove from UI first for animation layout 
	const topIndex = stackData.length - 1;
	const element = document.getElementById(`item-${topIndex}`);
	
	// Apply fly-away animation class 
	element.classList.add('popping');
	
	// Wait for visual animation to finish, then update true array state 
	setTimeout(() => {
		const poppedValue = stackData.pop();
		element.remove();
		log.innerText = `Popped "${poppedValue}". Current Stack (Top -> Bottom): [${[...stackData].reverse().join(', ')}]`;
	}, 300);
}

// Allow pressing Enter key to push 
input.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		pushToStack();
	}
});
