document.addEventListener("DOMContentLoaded", function() {
        const predefinedResponses = {
            "hello": "Hello! How can I assist you?",
            "how are you": "I'm just a bot, but thanks for asking!",
            "goodbye": "Goodbye! Have a great day!",
            // Adicione mais respostas conforme necessário
        };

        const chatbotToggler = document.querySelector(".chatbot-toggler");
        const closeBtn = document.querySelector(".close-btn");
        const chatbox = document.querySelector(".chatbox");
        const chatInput = document.querySelector(".chat-input textarea");
        const sendChatBtn = document.querySelector(".chat-input span");

        const createChatLi = (message, className) => {
            const chatLi = document.createElement("li");
            chatLi.classList.add("chat", className);
            let chatContent = className === "outgoing" ? `<p></p>` : `<span class="fa fa-info"></span><p></p>`;
            chatLi.innerHTML = chatContent;
            chatLi.querySelector("p").textContent = message;
            return chatLi;
        }

        const handleChat = () => {
            const userMessage = chatInput.value.trim().toLowerCase(); // Converta para minúsculas para correspondência insensível a maiúsculas e minúsculas

            if (!userMessage) return;

            chatInput.value = "";
            chatInput.style.height = "55px"; // Voltar à altura padrão

            chatbox.appendChild(createChatLi(userMessage, "outgoing"));
            chatbox.scrollTo(0, chatbox.scrollHeight);

            setTimeout(() => {
                const incomingChatLi = createChatLi(getResponse(userMessage), "incoming");
                chatbox.appendChild(incomingChatLi);
                chatbox.scrollTo(0, chatbox.scrollHeight);
            }, 600);
        }

        const getResponse = (userMessage) => {
            // Verifique se a mensagem do usuário tem uma resposta predefinida
            return predefinedResponses[userMessage] || "I'm not sure how to respond to that.";
        }

        chatInput.addEventListener("input", () => {
            chatInput.style.height = "55px";
            chatInput.style.height = `${chatInput.scrollHeight}px`;
        });

        chatInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
                e.preventDefault();
                handleChat();
            }
        });

        sendChatBtn.addEventListener("click", handleChat);
        closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
        chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
    });

