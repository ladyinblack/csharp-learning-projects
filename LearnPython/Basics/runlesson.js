let pyodide = null;
let pyodideReady = false;

let current = 0;
let showHint = false;
let challenges = [];
let currentLesson = null;
let isCorrect = false;

// Load Pyodide 
async function loadPyodideAndPackages() {
	pyodide = await loadPyodide();
	pyodideReady = true;
}

loadPyodideAndPackages();

// Get lesson from URL 
function loadLesson() {
	const params = new URLSearchParams(window.location.search);
	const lessonId = parseInt(params.get("id"));
	
	currentLesson = lessons.find(l => l.id === lessonId);
	
	if (!currentLesson) {
		document.body.innerHTML = "<h2>Lesson not found</h2>";
		return;
	}
	
	document.getElementById("lessonTitle").innerText = currentLesson.title;
	document.getElementById("lessonDescription").innerText = currentLesson.description;
	
	challenges = currentLesson.exercises;
	loadChallenge();
}

function loadChallenge() {
	const challenge = challenges[current];
	
	document.getElementById("title").innerText = challenge.title + " " + challenge.difficultylevel;
	
	document.getElementById("description").innerHTML = challenge.description;
	document.getElementById("code").value = challenge.starterCode;
	document.getElementById("output").innerText = "";
	
	/*document.getElementById("nextBtn").disabled = !isCorrect;*/
	
	document.getElementById("hint").innerHTML = "💡 " + challenge.hint;
	document.getElementById("hint").style.display = showHint ? "block" : "none";
	
	document.getElementById("keyconcepts").innerHTML = challenge.keyconcepts;
	document.getElementById("keyconcept").style.display = "none";
	
	// External link 
	const link = document.getElementById("externallink");
	if (challenge.externallink) {
		link.innerText = "OneCompiler →";
		link.href = challenge.externallink;
		link.target = "_blank";
	}
	
	// Progress 
	document.getElementById("progress").innerText = `${current + 1} / ${challenges.length}`;
}

// Run Python Code 
async function runCode() {
	const code = document.getElementById("code").value;
	const outputDiv = document.getElementById("output");
	
	if (!pyodideReady) {
		outputDiv.innerText = "⏳ Python is loading...";
		return;
	}
	
	try {
		let output = "";
		
		pyodide.setStdout({
			batched: (msg) => {
				output += msg + "\n";
			}
		});
		
		await pyodide.runPythonAsync(code);
		
		outputDiv.innerText = output || "✅ Code ran (no output)";
	} catch (err) {
		outputDiv.innerText = "❌ Error:\n" + err;
	}
}

// Check Logic 
function runCheck() {
	const code = document.getElementById("code").value;
	const outputDiv = document.getElementById("output");
	
	const passed = challenges[current].check(code);
	document.getElementById("nextBtn").disabled = !passed;
	
	if (passed) {
		outputDiv.innerText += "\n✅ Correct!";
		document.getElementById("keyconcept").style.display = "block";
		
		isCorrect = true;		// mark as completed 
	} else {
		outputDiv.innerText += "\n❌ Try again.";
		isCorrect = false;
	}
}

function nextChallenge() {
	console.log("Next challenge");
	/*if (!isCorrect) {
		document.getElementById("output").innerText = "🚫 Solve the challenge before moving on.";
		return;
	}*/
	
	current = (current + 1) % challenges.length;
	showHint = false;
	isCorrect = false;		// reset for next challenge 
	loadChallenge();
}

function resetCode() {
	document.getElementById("code").value = challenges[current].starterCode;
	document.getElementById("output").innerText = "";
	document.getElementById("keyconcept").style.display = "none";
	
	isCorrect = false;
}

function toggleHint() {
	showHint = !showHint;
	
	const hint = document.getElementById("hint");
	hint.classList.toggle("hidden", !showHint);
}

// Initialize 
loadLesson();
