<!-- Add this script tag to the head of your HTML file -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="https://unpkg.com/@openai/openai-js@0.27.0/dist/openai.js"></script>

<!-- Add this script to the end of your body or in an external JS file -->
<script>
  // Initialize the OpenAI API client with your API key
  const openai = new OpenAI('YOUR_OPENAI_API_KEY');

  // Function to handle user input and get a response from the chatbot
  async function getChatbotResponse(userInput) {
    // Make a request to the OpenAI API
    const response = await openai.complete({
      engine: 'text-davinci-002',
      prompt: userInput,
      max_tokens: 150,
    });

    // Get the generated message from the response
    const message = response.choices[0].text.trim();

    // Display the chatbot response in your chat window
    displayChatbotMessage(message);
  }

  // Function to display the chatbot's response in the chat window
  function displayChatbotMessage(message) {
    // Customize this based on how you want to display messages
    const chatContainer = document.getElementById('chat-container');
    const chatMessage = document.createElement('div');
    chatMessage.textContent = message;
    chatContainer.appendChild(chatMessage);
  }

  // Example: Call this function when the user sends a message
  function handleUserInput() {
    const userInput = /* Get user input from your input field */;
    getChatbotResponse(userInput);
  }
</script>
