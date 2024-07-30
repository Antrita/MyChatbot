var outputArea = $("#chat-output");

// Default response message
const DEFAULT_BOT_RESPONSE = "Sorry, I can't answer that question yet...";

// Event listeners
$(document).ready(function() {
    // Handle Enter key press in input field
    $("#user-input-form").keypress(function (e) {
        if (e.which == 13) { // Check for Enter key
            e.preventDefault(); // Prevent default enter behavior
            sendMessage(); // Trigger sendMessage function
        }
    });

    // Handle Send button click
    $("#send-button").click(sendMessage); // Allow sending message via button

    // Initially add a default bot message (if needed)
    outputArea.append(`
        <div class='bot-message'>
            <div class='message'>${DEFAULT_BOT_RESPONSE}</div>
        </div>
    `);
});

// Function to send message
function sendMessage() {
    var message = $("#user-input").val().trim(); // Get the user input and trim any whitespace
    if (message === "") return; // Do not process if input is empty

    $("#user-input").val(""); // Clear input field

    // Add the user's message to the chat output
    outputArea.append(`
        <div class='user-message'>
            <div class='message'>${message}</div>
        </div>
    `);
    scrollToBottom(); // Scroll to the newest message

    // Show typing indicator
    outputArea.append(`
        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `);
    scrollToBottom();

    // Simulate a delay for typing indicator before processing the response
    setTimeout(function() {
        $(".typing-indicator").remove(); // Remove typing indicator
        
        // Handle bot response logic here
        $.ajax({
            url: '/api/message', // Call your backend API
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ message: message }), // Send user input to the server
            success: function(data) {
                outputArea.append(`
                    <div class='bot-message'>
                        <img src="D:\icons8-chatbot-windows-11-color\icons8-chatbot-96.png" alt="Chatbot" width="45" height="45"/> 
                        <div class='message'>${data.response || DEFAULT_BOT_RESPONSE}</div>
                    </div>
                `);
                scrollToBottom(); // Scroll to the bot's response
            },
            error: function() {
                outputArea.append(`
                    <div class='bot-message'>
                        <div class='message'>Error occurred. Please try again.</div>
                    </div>
                `);
                scrollToBottom(); // Scroll to show error message
            }
        });
    }, 200); // Adjust delay for a realistic typing effect
}
