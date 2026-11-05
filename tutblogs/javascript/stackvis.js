// Internal state mimicking a real array-backed stack 
const stackData = [];
const canvas = document.getElementById('stack-canvas');
const log = document.getElementById('status-log');
const input = document.getElementById('element-input');
let isAnimating = false;

function setControlsEnabled(enabled) {
	const btnPush = document.getElementById('btn-push');
	const btnPop = document.getElementById('btn-pop');
	const btnPeek = document.getElementById('btn-peek');
	const btnAnimate = document.getElementById('btn-animate');
	
	if (btnPush) btnPush.disabled = !enabled;
	if (btnPop) btnPop.disabled = !enabled;
	if (btnPeek) btnPeek.disabled = !enabled;
	if (btnAnimate) btnAnimate.disabled = !enabled;
	if (input) input.disabled = !enabled;
}

function pushToStack(customVal = null) {
	const value = customVal !== null ? customVal : input.value.trim();
	if (!value) {
		log.innerText = "Error: Please enter a value to push.";
		return false;
	}
	if (stackData.length >= 6) {
		log.innerText = "Stack Overflow! (Visual limit reached for this demo)";
		return false;
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
	if (customVal === null) {
		input.value = '';
		input.focus();
	}
	return true;
}

function popFromStack() {
	if (stackData.length === 0) {
		log.innerText = "Stack Underflow! Cannot pop from an empty stack.";
		return false;
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
	return true;
}

function peekStack() {
	if (stackData.length === 0) {
		log.innerText = "Stack Underflow!  Cannot peek an empty stack.";
		return false;
	}
	
	const topIndex = stackData.length - 1;
	const element = document.getElementById(`item-${topIndex}`);
	element.classList.add('peeking');
	
	const peekedValue = stackData[topIndex];
	log.innerText = `Peeked top value "${peekedValue}".  Stack unchanaged.  Current Stack (Top -> Bottom): [${[...stackData].reverse().join(', ')}]`;
	
	setTimeout(() => {
		element.classList.remove('peeking');
	}, 600);
	return true;
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runAutoAnimation() {
	if (isAnimating) return;
	isAnimating = true;
	setControlsEnabled(false);
	
	// Clear stack first if anything is inside 
	while (stackData.length > 0) {
		const topIndex = stackData.length - 1;
		const el = document.getElementById(`item-${topIndex}`);
		if (el) el.remove();
		stackData.pop();
	}
	
	log.innerText = "--- STARTING ANIMATION ---";
	await sleep(800);
	
	const sampleStates = ["A", "B", "C"];
	for (let state of sampleStates) {
		pushToStack(state);
		await sleep(900);
	}
	
	log.innerText = "Demonstrating Peek() behavior...";
	await sleep(500);
	peekStack();
	await sleep(1200);
	
	log.innerText = "Demonstrating LIFO Pop() behavior...";
	await sleep(600);
	
	while (stackData.length > 0) {
		popFromStack();
		await sleep(900);
	}
	
	log.innerText = "--- AUTO-ANIMATION COMPLETE ---";
	await sleep(1000);
	setControlsEnabled(true);
	isAnimating = false;
}

// Allow pressing Enter key to push 
input.addEventListener("keypress", function(event) {
	if (event.key === "Enter" && !isAnimating) {
		pushToStack();
	}
});
