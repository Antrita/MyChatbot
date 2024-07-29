var outputArea = $("#chat-output");

/*$("#user-input-form").on("submit", function(e) {*/
$("#user-input-form").keypress(function (e) {
  if(e.which == 13) {  
    e.preventDefault();

    /* Get message from input field */
    $("#send-button").click(function() {
      var message = $("#user-input").val();
    /* Add inputted message in chat */
    outputArea.append(`
      <div class='user-message'>
        <div class='message'>
          ${message}
        </div>
      </div>
    `);
    scrollToBottom(); 
    setTimeout(function() {
      $(".typing-indicator").remove();
  
      // Add bot response
      outputArea.append(`
        <div class='bot-message'>
          <img src="https://img.icons8.com/?size=100&id=79UfeEN6JkZ8&format=png&color=000000" alt="Chatbot" width="45" height="45"/> 
          <div class='message'>
            Sorry, I can't answer that question yet...
          </div>
        </div>
      `);
  
      scrollToBottom();
    }, 200);
  });
    /* Clear input field */
    $("#user-input").val("");

    /* Set delay for typing indicator to start */
    setTimeout(function() {
      /* Add typing indicator to chat */
      outputArea.append(`
        <div class="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>`
      )});
      scrollToBottom(); //recently added
    
      /* Set delay for removing typing indicator */
      setTimeout(function() {
        $( ".typing-indicator" ).remove();

        /* Start timer to add response from bot.
           Keep time small for natural flow. */
          
        setTimeout(function() {
          /* Bot responses */
          if(message === '$message'){
            outputArea.append(`
              <div class='bot-message'>
                <img src="https://img.icons8.com/?size=100&id=79UfeEN6JkZ8&format=png&color=000000" alt="Chatbot" width="45" height="45"/> 
                <div class='message'>
                  $message
                </div>
              </div>
            `);
          }
          else {
            outputArea.append(`
              <div class='bot-message'>
                <img src="https://img.icons8.com/?size=100&id=79UfeEN6JkZ8&format=png&color=000000" alt="Chatbot" width="45" height="45"/> 
                <div class='message'>
                  Sorry, I can't answer that question yet...
                </div>
              </div>
            `);
          }
          scrollToBottom();
        }, 200);
      })

  }})