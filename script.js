
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");

// Dynamic response function that tries to detect any category in the user's message
function generateBotReply(userMessage) {
  const userMessageLower = userMessage.toLowerCase();
  
  // Detect product category by looking for keywords (simplified version)
  const productCategories = [
    "laptop", "phone", "mobile", "shoes", "dress", "dresses", "kurta", "kurtas", "ring", "rings", 
    "watch", "jewelry", "bags", "books", "furniture", "electronics", "clothes"
  ];
  
  let foundCategory = null;

  // Check if any category is mentioned in the user input
  for (let category of productCategories) {
    if (userMessageLower.includes(category)) {
      foundCategory = category;
      break;
    }
  }

  // If a category is detected, return a response
  if (foundCategory) {
    return `We have a great selection of ${foundCategory}! What specific type are you looking for?`;
  } else {
    return "I wasn't sure what product you're looking for. Could you please ask about something specific like 'laptop', 'shoes', or 'clothes'?";
  }
}

function handleUserInput() {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage(userMessage, "user");

  // Generate dynamic response
  const botReply = generateBotReply(userMessage);

  setTimeout(() => {
    addMessage(botReply, "bot");
  }, 500);

  input.value = "";
}

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}
