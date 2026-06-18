/**
 * THE SEARCH BAR FUNCTIONALITY 
 */
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', (e) => {
	const searchTerm = e.target.value.toLowerCase();
	
	cards.forEach(card => {
		// Get the text from the Title and the Paragraph 
		const title = card.querySelector('h3').innerText.toLowerCase();
		const desc = card.querySelector('p').innerText.toLowerCase();
		
		// Show if term matches title OR description 
		if (title.includes(searchTerm) || desc.includes(searchTerm)) {
			card.style.display = 'block';
		} else {
			card.style.display = 'none';
		}
	});
});

/**
 * THE TAGS FUNCTIONALITY
 */
const cards = document.querySelectorAll('.card');
const tagContainer = document.getElementById('tag-container');
let activeTags = new Set();		// Tracks what is currently selected 

// 1. Initialize: Add "ALL" button first 
const allBtn = document.createElement('button');
allBtn.innerText = "ALL";
allBtn.className = 'filter-btn active';
allBtn.onclick = () => {
	activeTags.clear();
	updateFilter();
};
tagContainer.appendChild(allBtn);

// 2. Build Tag List 
const tags = new Set();

// Collect all tags and split them by spaces 
cards.forEach(card => {
	card.querySelector('.card-tag').innerText
	// Split by space and filter out any empty strings 
	.split(' ').forEach(t => {
		if (t.startsWith('#')) tags.add(t);
	});
});

// Create filter buttons dynamically
tags.forEach(tag => {
	const btn = document.createElement('button');
	btn.innerText = tag.replace('#', '');		// Remove the # for the label 
	btn.className = 'filter-btn';
	btn.onclick = () => {
		if (activeTags.has(tag)) activeTags.delete(tag);
		else activeTags.add(tag);
		updateFilter();
		// Toggle visual state 
		btn.classList.toggle('active');
		allBtn.classList.remove('active');
	};
	tagContainer.appendChild(btn);
});

// 3. Logic: The "Truth Table" of visibility 
function updateFilter() {
	cards.forEach(card => {
		const cardTags = card.querySelector('.card-tag').innerText;
		// If no tags selected, show ALL. If tags selected, check if card matches ANY active tag.
		const isVisible = activeTags.size === 0 || Array.from(activeTags).some(t => cardTags.includes(t));
		
		card.style.display = isVisible ? 'block' : 'none';
	});
}
