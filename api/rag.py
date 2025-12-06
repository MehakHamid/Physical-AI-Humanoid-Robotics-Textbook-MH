
## **🤖 STEP 3: RAG CHATBOT (Next 2-3 Hours)**

### **3.1 Create Chatbot Component** (`src/components/Chatbot.jsx`)
```javascript
import React, { useState } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  
  const askQuestion = async () => {
    const res = await fetch('http://localhost:8000/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: query })
    });
    const data = await res.json();
    setResponse(data.answer);
  };
  
  return (
    <div className="chatbot">
      <h3>Ask about Physical AI</h3>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={askQuestion}>Ask</button>
      {response && <div className="response">{response}</div>}
    </div>
  );
}