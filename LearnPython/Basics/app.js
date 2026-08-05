const lessonList = document.getElementById("lessonList");

lessons.forEach(lesson => {
	const card = document.createElement("div");
	card.classList.add("lesson-card");
	
	card.innerHTML = `
		<a href="lesson.html?id=${lesson.id}">
			<div class="lesson-header">
				<span class="lesson-number">Lesson ${lesson.id}</span>
				<h3>${lesson.title}</h3>
			</div>
		
			<p class="lesson-description">
				${lesson.description} 
			</p>
			
			<div class="lesson-footer">
				<span>Start &rarr;</span>
			</div>
		</a>
	`;
	lessonList.appendChild(card);
});