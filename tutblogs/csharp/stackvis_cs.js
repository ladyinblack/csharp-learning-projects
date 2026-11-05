const stackData = [];
const canvas = document.getElementById('stack-canvas');
const log = document.getElementById('status-log');
const input = document.getElementById('element-input');
let isAnimating = false;

function setControlsEnabled(enabled) {
	document.getElementById('btn-push').disabled = !enabled;
	document.getElementById('btn-pop').disabled = !enabled;
	document.getElementById('btn-peek').disabled = !enabled;
	document.getElementById('btn-animate').disabled = !enabled;
	input.disabled = !enabled;
}

function pushToStack(customVal = null) {
	const value = customVal !== null ? customVal : input.value.trim();
	if (!value) {
		log.innerHTML = `<span style="color: #f43f5e;">System.ArgumentException: Value cannot be empty.</span>`;
		return false;
	}
	if (stackData.length >= 6) {
		log.innerHTML = `<span style="color: #eab308;">// Visual limit reached for demo layout.</span>`;
		return false;
	}
	
	stackData.push(value);
	
	const element = document.createElement('div');
	element.className ='stack-element';
	element.innerText = `"${value}"`;
	element.id = `item-${stackData.length - 1}`;
	canvas.appendChild(element);
	
	log.innerHTML = `libraryStack.Push("${value}");<br /><span style="color: #86efac;">// Count: ${stackData.length}</span>`;
	if (customVal === null) {
		input.value = '';
		input.focus();
	}
	return true;
}

function popFromStack(isAuto = false) {
	if (stackData.length === 0) {
		log.innerHTML = `<span style="color: #f43f5e;">System.InvalidOperation: Stack empty.</span>`;
		return false;
	}
	
	const topIndex = stackData.length - 1;
	const element = document.getElementById(`item-${topIndex}`);
	element.classList.add('popping');
	
	const poppedValue = stackData.pop();
	setTimeout(() => {
		element.remove();
		log.innerHTML = `string item = libraryStack.Pop(); <span style="color: #64748b;">// item = "${poppedValue}"</span><br /><span style="color: #86efac;">// Count: ${stackData.length}</span>`;
	}, 300);
	return true;
}

function peekStack() {
	if (stackData.length === 0) {
		log.innerHTML = `<span style="color: #f43f5e;">System.InvalidOperationException: Stack empty.</span>`;
		return false;
	}
	
	const topIndex = stackData.length - 1;
	const element = document.getElementById(`item-${topIndex}`);
	element.classList.add('peeking');
	
	const peekedValue = stackData[topIndex];
	log.innerHTML = `string top = libraryStack.Peek(); <span style="color: #64748b;">// top = "${peekedValue}"</span><br /><span style="color: #86efac;">// Stack unchanged. Count: ${stackData.length}</span>`;
	
	setTimeout(() => {
		element.classList.remove('peeking');
	}, 600);
	return true;
}

// Helper proomise-based delay timer for automated sequence
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Automated multi-step Stack behavior demonstration sequence 
async function runAutoAnimation() {
	if (isAnimating) return;
	isAnimating = true;
	setControlsEnabled(false);
	
	// Clear stack first if anything is inside 
	while (stackData.length > 0) {
		const topIndex = stackData.length - 1;
		const el = document.getElementById(`item-${topIndex}`);
		if (el)
			el.remove();
		stackData.pop();
	}
	
	log.innerHTML = `<span style="color: #38BDF8;">// --- STARTING ANIMATION ---</span>`;
	await sleep(800);
	
	// Step 1: Push automated items representing states 
	const sampleStates = ["State_A", "State_B", "State_C"];
	for (let state of sampleStates) {
		pushToStack(state);
		await sleep(900);
	}
	
	// Step 2: Peek at the top element (State_C)
	log.innerHTML = `<span style="color: #38BDF8;">//Demonstrating Peek() behavior...</span>`;
	await sleep(500);
	peekStack();
	await sleep(1200);
	
	// Step 3: Pop elements to show LIFO order
	log.innerHTML = `<span style="color: #38BDF8;">// Demonstrating LIFO Pop() behavior...</span>`;
	await sleep(600);
	
	while (stackData.length > 0) {
		popFromStack();
		await sleep(900);
	}
	
	log.innerHTML = `<span style="color: #86EFAC;">// --- AUTO-AUTOMATION COMPLETE ---</span>`;
	await sleep(1000);
	setControlsEnabled(true);
	isAnimating = false;
}

input.addEventListener("keypress", function(event) {
	if (event.key === "Enter" && !isAnimating)
		pushToStack();
});
