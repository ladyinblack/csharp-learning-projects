// Internal state mimicking a real array-backed queue 
const queueData = [];
const canvas = document.getElementById('queue-canvas');
const log = document.getElementById('status-log');
const input = document.getElementById('element-input');
let isAnimating = false;

function setControlsEnabled(enabled) {
	const btnEnq = document.getElementById('btn-enqueue');
	const btnDeq = document.getElementById('btn-dequeue');
	const btnPeek = document.getElementById('btn-peek');
	const btnAnimate = document.getElementById('btn-animate');
	
	if (btnEnq) btnEnq.disabled = !enabled;
	if (btnDeq) btnDeq.disabled = !enabled;
	if (btnPeek) btnPeek.disabled = !enabled;
	if (btnAnimate) btnAnimate.disabled = !enabled;
	if (input) input.disabled = !enabled;
}

function enqueueItem(customVal = null) {
	const value = customVal !== null ? customVal : input.value.trim();
	if (!value) {
		log.innerText = "Error: Please enter a value to enqueue.";
		return false;
	}
	if (queueData.length >= 6) {
		log.innerText = "Queue Overflow! (Visual limit reached for this demo)";
		return false;
	}
	
	// Update Logic State 
	queueData.push(value);
	
	// Update UI 
	const element = document.createElement('div');
	element.className = 'queue-element';
	element.innerText = value;
	element.id = `q-item-${Date.now()}-${queueData.length}`;
	canvas.appendChild(element);
	
	log.innerText = `Enqueued "${value}". Queue (Front -> Back): [${[queueData].join(', ')}]`;
	if (customVal === null) {
		input.value = '';
		input.focus();
	}
	return true;
}

function dequeueItem() {
	if (queueData.length === 0) {
		log.innerText = "Queue Underflow! Cannot dequeue from an empty queue.";
		return false;
	}
	
	// The front element is always at index 0 in the DOM container 
	const firstElement = canvas.firstElementChild;
	if (firstElement) {
		firstElement.classList.add('dequeuing');
	}
	
	setTimeout(() => {
		const dequeuedValue = queueData.shift();
		if (firstElement)
			firstElement.remove();
		log.innerText = `Dequeued "${dequeuedValue}". Queue (Front -> Back): [${[queueData].join(', ')}]`;
	}, 300);
	return true;
}

function peekQueue() {
	if (queueData.length === 0) {
		log.innerText = "Queue is empty.  Nothing at the front to peek.";
		return false;
	}
	
	const firstElement = canvas.firstElementChild;
	if (firstElement)
		firstElement.classList.add('peeking');
	
	const frontValue = queueData[0];
	log.innerText = `Peeked Front: "${frontValue}".  Queue unchanaged.`;
	
	setTimeout(() => {
		if (firstElement)
			firstElement.classList.remove('peeking');
	}, 600);
	return true;
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runAutoAnimation() {
	if (isAnimating) return;
	isAnimating = true;
	setControlsEnabled(false);
	
	// Clear queue state  
	queueData.length = 0;
	canvas.innerHTML = '';
	
	log.innerText = "--- STARTING ANIMATION ---";
	await sleep(800);
	
	const tasks = ["Job_1", "Job_2", "Job_3"];
	for (let task of tasks) {
		enqueueItem(task);
		await sleep(900);
	}
	
	log.innerText = "Demonstrating Peek Front behavior...";
	await sleep(500);
	peekQueue();
	await sleep(1200);
	
	log.innerText = "Demonstrating FIFO Dequeue behavior...";
	await sleep(600);
	
	while (queueData.length > 0) {
		dequeueItem();
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
		enqueueItem();
	}
});
