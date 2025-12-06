// Simple AI responses
const responses = {
    "kinematics": "🤖 Kinematics studies motion without forces. Forward kinematics calculates position from joint angles, inverse kinematics finds angles for desired position.",
    
    "python": "💻 Python code for forward kinematics:\n```python\nimport math\n\ndef forward_kinematics(theta1, theta2, l1=1, l2=1):\n    x = l1*math.cos(theta1) + l2*math.cos(theta1+theta2)\n    y = l1*math.sin(theta1) + l2*math.sin(theta1+theta2)\n    return x, y\n```",
    
    "ai robotics": "🧠 AI in robotics includes computer vision, reinforcement learning, neural networks, and natural language processing for human-robot interaction.",
    
    "project": "💡 Project ideas: Line-following robot, obstacle avoiding robot, robotic arm, voice-controlled robot, computer vision robot."
};

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Get response
    setTimeout(() => {
        let response = "I can help with robotics concepts, code examples, and project ideas. Try asking about kinematics, Python code, AI in robotics, or project ideas.";
        
        if (message.toLowerCase().includes('kinematic')) {
            response = responses.kinematics;
        } else if (message.toLowerCase().includes('python') || message.toLowerCase().includes('code')) {
            response = responses.python;
        } else if (message.toLowerCase().includes('ai') || message.toLowerCase().includes('artificial')) {
            response = responses["ai robotics"];
        } else if (message.toLowerCase().includes('project') || message.toLowerCase().includes('idea')) {
            response = responses.project;
        }
        
        addMessage(response, 'bot');
    }, 500);
}

function askQuestion(question) {
    document.getElementById('userInput').value = question;
    sendMessage();
}

function addMessage(text, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `
        <div class="avatar">${sender === 'bot' ? '🤖' : '👤'}</div>
        <div class="text">
            <strong>${sender === 'bot' ? 'Assistant:' : 'You:'}</strong> 
            ${text.replace(/\n/g, '<br>').replace(/```python\n([\s\S]*?)```/g, '<pre>$1</pre>')}
        </div>
    `;
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Enter key support
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});