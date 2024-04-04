// Extract the hash part of the current window location (URL)
const { hash } = window.location;

// Decode the hash using base64 decoding to get the secret message.
// The hash includes the '#' character, so it's removed before decoding.
const message = atob(hash.replace('#', ''));

// Check if there is a message present (after decoding)
if (message) {
    // If a message exists, hide the message input form
    document.querySelector('#message-form').classList.add('hide');
    // And show the message display card
    document.querySelector('#message-show').classList.remove('hide');
    // Then set the message as the content of the <h1> tag within the message display card
    document.querySelector('h1').innerHTML = message;
}

// Listen for the submit event on the form
document.querySelector('form').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Hide the message input form after submission
    document.querySelector('#message-form').classList.add('hide');
    // Show the link generation form
    document.querySelector('#link-form').classList.remove('hide');

    // Get the user's input from the message input field
    const input = document.querySelector('#message-input');
    // Encrypt the input message using base64 encoding
    const encrypted = btoa(input.value);

    // Select the input field that will display the generated link
    const linkInput = document.querySelector('#link-input');
    // Set the value of the link input field to the current location with the encrypted message appended as a hash
    linkInput.value = `${window.location}#${encrypted}`;
    // Select the text of the generated link to make it easy to copy
    linkInput.select();
});
