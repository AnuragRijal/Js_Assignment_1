// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var speechSynth = window.speechSynthesis;

// Variable to hold the generated story
var storyToSpeak = '';

// Reference to the speak and reset buttons
var speakButton = document.getElementById('speakButton');
var resetButton = document.getElementById('resetButton');

// Reference to the paragraph to display the generated story
var generatedStory = document.getElementById('generatedStory');

/* Arrays of Words
-------------------------------------------------- */
// Arrays for each category with more unique and story-driven words

// Subjects (Characters)
var subjects = [
    'The adventurous explorer',
    'A curious scientist',
    'The fearless warrior',
    'A mysterious traveler',
    'The wise old sage'
];

// Actions (Verbs)
var actions = [
    'discovers',
    'investigates',
    'confronts',
    'journeys through',
    'unveils'
];

// Descriptors (Adjectives)
var descriptors = [
    'an ancient',
    'a hidden',
    'a forgotten',
    'a magical',
    'a legendary'
];

// Objects (Nouns)
var objects = [
    'temple deep within the jungle',
    'secret laboratory beneath the city',
    'mountain fortress on the horizon',
    'enchanted forest surrounding the village',
    'sunken ship resting in the bay'
];

// Settings (Places/Settings)
var settings = [
    'under the scorching sun.',
    'during the twilight hours.',
    'amidst the roaring thunder.',
    'beneath the star-lit sky.',
    'within the silent night.'
];

/* Functions
-------------------------------------------------- */

/**
 * Function to select a random word from an array
 * @param {Array} array - The array to select from
 * @returns {String} - A random element from the array
 */
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Function to update the storyToSpeak variable and display the story
 */
function updateStory() {
    // Construct the story using selected words
    storyToSpeak = `${subjectSelected} ${actionSelected} ${descriptorSelected} ${objectSelected} ${settingSelected}`;
    generatedStory.textContent = storyToSpeak;
}

/**
 * Function to speak the text using Speech Synthesis
 * @param {String} text - The text to speak
 */
function speakNow(text) {
    // Check if speech synthesis is already speaking
    if (speechSynth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }

    if (text !== '') {
        var utterThis = new SpeechSynthesisUtterance(text);
        speechSynth.speak(utterThis);
    }
}

/**
 * Function to reset the generated story and selected words
 */
function resetStory() {
    // Clear selected words
    subjectSelected = '';
    actionSelected = '';
    descriptorSelected = '';
    objectSelected = '';
    settingSelected = '';

    // Reset the story to speak
    storyToSpeak = '';

    // Update the displayed story
    generatedStory.textContent = 'Your story will appear here.';

    // Optionally, reset button styles or disable speak button if implemented
    // For example:
    // speakButton.disabled = true;
}

/* Event Listeners
-------------------------------------------------- */
// Variables to hold selected words
var subjectSelected = '';
var actionSelected = '';
var descriptorSelected = '';
var objectSelected = '';
var settingSelected = '';

// Event listener for the subject button
document.getElementById('subjectBtn').addEventListener('click', function() {
    subjectSelected = getRandomWord(subjects);
    updateStory();
});

// Event listener for the action button
document.getElementById('actionBtn').addEventListener('click', function() {
    actionSelected = getRandomWord(actions);
    updateStory();
});

// Event listener for the descriptor button
document.getElementById('descriptorBtn').addEventListener('click', function() {
    descriptorSelected = getRandomWord(descriptors);
    updateStory();
});

// Event listener for the object button
document.getElementById('objectBtn').addEventListener('click', function() {
    objectSelected = getRandomWord(objects);
    updateStory();
});

// Event listener for the setting button
document.getElementById('settingBtn').addEventListener('click', function() {
    settingSelected = getRandomWord(settings);
    updateStory();
});

// Onclick handler for the speak button that speaks the generated story
speakButton.onclick = function() {
    if (storyToSpeak.trim() !== '') {
        speakNow(storyToSpeak);
    } else {
        alert('Please generate a story first by clicking the buttons above.');
    }
};

// Onclick handler for the reset button that resets the story
resetButton.onclick = function() {
    resetStory();
};
