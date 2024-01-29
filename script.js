document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatArea = document.getElementById("chat-area");
    const loginModal = document.getElementById("loginModal");
    const loginButton = document.getElementById("loginButton");
    const loginForm = document.getElementById("loginForm");

    loginModal.style.display = "block";

    loginButton.addEventListener("click", function () {
        const usernameInput = document.getElementById("username");
        const username = usernameInput.value.trim();

        if (username !== "") {
            localStorage.setItem("username", username);

            loginModal.style.display = "none";
        }
    });

    sendButton.addEventListener("click", function () {
        if (!isLoggedIn()) {
            alert("Please login first!");
            loginModal.style.display = "block";
            return;
        }

        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const outgoingMessage = document.createElement("div");
            outgoingMessage.className = "outgoing-message";
            outgoingMessage.textContent = "You: " + messageText;
            chatArea.appendChild(outgoingMessage);
            simulateIncomingMessage();
            messageInput.value = "";
        }
    });

    function simulateIncomingMessage() {
        setTimeout(function () {
            if (!isLoggedIn()) {
                loginModal.style.display = "block";
                return;
            }

            const incomingMessage = document.createElement("div");
            incomingMessage.className = "incoming-message";
            incomingMessage.textContent = "Friend: " + generateRandomReply();
            chatArea.appendChild(incomingMessage);
        }, 1000);
    }

    function generateRandomReply() {
        const replies = [
            "Heyy!",
            "How's you?",
            "What's up?",
            "I'm here for you!",
            "Tell me more!",
            "That's interesting!",
            "How's your day going?",
            "Are you up for some gossips?",
            "All okay?",
            "Suspicious.... Spill more tea",
            "Good to see you!",
            "How can I help?",
            "You still online?",
            "OMG!! You looki' gorgeous.",
        ];

        const randomIndex = Math.floor(Math.random() * replies.length);
        return replies[randomIndex];
    }

    function isLoggedIn() {
        const storedUsername = localStorage.getItem("username");

        if (storedUsername) {
            return true;
        } else {
            return false;
        }
    }
});
