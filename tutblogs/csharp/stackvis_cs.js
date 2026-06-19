const stackData = [];
const canvas = document.getElementById('stack-canvas');
const log = document.getElementById('status-log');
const input = document.getElementById('element-input');

function pushToStack() {
	const value = input.value.trim();
	if (!value) {
		log.innerHTML = `<span style="color: #f43f5e;">System.ArgumentException: Value cannot be empty.</span>`;
		return;
	}
	if (stackData.length >= 6) {
		log.innerHTML = `<span style="color: #eab308;">// Visual limit reached for demo layout.</span>`;
		return;
	}
	
	stackData.push(value);
	
	const element = document.createElement('div');
	element.className ='stack-element';
	element.innerText = `"${value}"`;
	element.id = `item-${stackData.length - 1}`;
	canvas.appendChild(element);
	
	log.innerHTML = `libraryStack.Push("${value}");<br /><span style="color: #86efac;">// Count: ${stackData.length}</span>`;
	input.value = '';
	input.focus();
}

function popFromStack() {
	if (stackData.length === 0) {
		log.innerHTML = `<span style="color: #f43f5e;">System.InvalidOperation: Stack empty.</span>`;
		return;
	}
	
	const topIndex = stackData.length - 1;
	const element = document.getElementById(`item-${topIndex}`);
	element.classList.add('popping');
	
	setTimeout(() => {
		const poppedValue = stackData.pop();
		element.remove();
		log.innerHTML = `string item = libraryStack.Pop(); <span style="color: #64748b;">// item = "${poppedValue}"</span><br /><span style="color: #86efac;">// Count: ${stackData.length}</span>`;
	}, 300);
}

function peekStack() {
	if (stackData.length === 0) {
		log.innerHTML = `<span style="color: #f43f5e;">System.InvalidOperationException: Stack empty.</span>`;
		return;
	}
	
	const topIndex = stackData.length - 1;
	const element = document.getElementById(`item-${topIndex}`);
	element.classList.add('peeking');
	
	const peekedValue = stackData[topIndex];
	log.innerHTML = `string top = libraryStack.Peek(); <span style="color: #64748b;">// top = "${peekedValue}"</span><br /><span style="color: #86efac;">// Stack unchanged. Count: ${stackData.length}</span>`;
	
	setTimeout(() => {
		element.classList.remove('peeking');
	}, 600);
}

input.addEventListener("keypress", function(event) {
	if (event.key === "Enter")
		pushToStack();
});
