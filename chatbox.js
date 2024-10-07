document.getElementById('chat-send').addEventListener('click', async function() {
  const inputField = document.getElementById('chat-input');
  const message = inputField.value;
  if (message.trim() === '') return;

  // Add the user's message to the chatbox
  const messagesContainer = document.getElementById('chatbox-messages');
  messagesContainer.innerHTML += `<div class="user-message">${message}</div>`;
  inputField.value = '';

  try {
    console.log('Sending message to API:', message);

    // Call the API
    const response = await fetch('/api/chat', { // Adjust the endpoint to your backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const aiMessage = data.choices[0].text.trim();
    console.log('Received response from API:', aiMessage);

    // Add the AI's response to the chatbox
    messagesContainer.innerHTML += `<div class="ai-message">${aiMessage}</div>`;
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
  } catch (error) {
    console.error('Error:', error);
    messagesContainer.innerHTML += `<div class="ai-message">Sorry, something went wrong. Please try again later.</div>`;
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
  }
});
