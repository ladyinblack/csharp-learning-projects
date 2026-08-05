const challenges = [];

let pyodide = null;

async function loadPyodideAndPackages() {
	pyodide = await loadPyodide();
}

loadPyodideAndPackages();

let current = 0;
let showHint = false;

function loadChallenge() {
	document.getElementById("title").innerHTML = challenges[current].title + " " + challenges[current].difficultylevel;
	document.getElementById("description").innerHTML = challenges[current].description;
	document.getElementById("code").value = challenges[current].starterCode;
	document.getElementById("output").innerHTML = "";
	document.getElementById("keyconcepts").innerHTML = challenges[current].keyconcepts;
	document.getElementById("hint").innerHTML = "💡 " + challenges[current].hint;
	document.getElementById("hint").style.display = showHint ? "block" : "none";
}

async function runCheck() {
	const code = document.getElementById("code").value;
	const outputDiv = document.getElementById("output");
	
	try {
		let output = "";
		
		// Capture Python print output 
		pyodide.setStdout({
			batched: (text) => {
				output += text + "\n";
			}
		});
		
		await pyodide.runPythonAsync(code);
		
		outputDiv.innerText = output.trim() || "✅ Code ran successfully (no output)";
		
		// OPTIONAL: still run your check 
		const passed = challenges[current].check(code);
		
		if (passed) {
			outputDiv.innerText += "\n\n✅ Correct!";
			document.getElementById("keyconcept").style.display = "block";
		} else {
			outputDiv.innerText += "\n\n❌ Check your logic";
		}
		
		outputDiv.innerText += "\n\n> Open your browser console to see Pyodide output";
		
	} catch (err) {
		outputDiv.innerText = "❌ Error:\n" + err;
	}
	
	const link = document.getElementById("externallink");
	
	if (challenges[current].externallink) {
		link.innerText = "OneCompiler →";
		link.href = challenges[current].externallink;
		link.target = "_blank";
	}
	console.log(encodeURIComponent(code));
}

function nextChallenge() {
	current = (current + 1) % challenges.length;
	showHint = false;
	loadChallenge();
}

function resetCode() {
	document.getElementById("code").value = challenges[current].starterCode;
	document.getElementById("output").innerHTML = "";
	document.getElementById("keyconcept").style.display = "none";
	document.getElementById("keyconcepts").innerHTML = "";
	document.getElementById("externallink").innerHTML = "";
}

function toggleHint() {
	showHint = !showHint;
	document.getElementById("hint").style.display = showHint ? "block" : "none";
}

// Initialize
loadChallenge();