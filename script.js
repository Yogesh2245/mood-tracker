// Function to save mood when button is clicked
function saveMood(mood) {
    // Get today's date
    let today = new Date();
    let dateString = today.toLocaleDateString();

    // Create mood object
    let moodEntry = {
        date: dateString,
        mood: mood
    };

    // Get existing moods from localStorage or create new array
    let moods = [];
    if (localStorage.getItem('moods')) {
        moods = JSON.parse(localStorage.getItem('moods'));
    }

    // Add new mood
    moods.push(moodEntry);

    // Save to localStorage
    localStorage.setItem('moods', JSON.stringify(moods));

    // Show new list
    showMoods();
}

// Function to display all saved moods
function showMoods() {
    // Get the display area
    let moodList = document.getElementById('moodList');
    
    // Get moods from localStorage
    let moods = [];
    if (localStorage.getItem('moods')) {
        moods = JSON.parse(localStorage.getItem('moods'));
    }

    // Clear old display
    moodList.innerHTML = '';

    // Show each mood
    for (let i = 0; i < moods.length; i++) {
        let moodItem = document.createElement('p');
        moodItem.innerText = moods[i].date + ': ' + moods[i].mood;
        moodList.appendChild(moodItem);
    }
}

// Show moods when page loads
showMoods();