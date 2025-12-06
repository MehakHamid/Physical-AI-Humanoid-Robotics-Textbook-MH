import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ChatbotSection() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(0, 173, 181, 0.1), rgba(9, 151, 167, 0.1))',
      border: '2px solid #00adb5',
      borderRadius: '15px',
      padding: '30px',
      margin: '40px 0',
      textAlign: 'center'
    }}>
      <h3 style={{color: '#00adb5', marginBottom: '20px'}}>
        <i className="fas fa-robot"></i> Interactive AI Assistant
      </h3>
      
      <p style={{fontSize: '1.1rem', marginBottom: '25px', color: '#333'}}>
        Ask questions, get code examples, and receive guidance on robotics projects.
      </p>
      
      <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <a 
          href={useBaseUrl('/chatbot')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, #00adb5, #0097a7)',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <i className="fas fa-comments"></i>
          Open AI Assistant
        </a>
        
        <a 
          href={useBaseUrl('/docs/intro')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#f5f5f5',
            color: '#333',
            padding: '15px 30px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
            border: '1px solid #ddd',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#e9e9e9'}
          onMouseOut={(e) => e.currentTarget.style.background = '#f5f5f5'}>
          <i className="fas fa-book"></i>
          Continue Reading
        </a>
      </div>
    </div>
  );
}
EOF