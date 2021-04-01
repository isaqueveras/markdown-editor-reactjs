import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('# Markdown editor: created by isaque Véras');

  return (
    <div className="markdown__container">
      <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
    
      <ReactMarkdown source={markdown} className="markdown__preview" />
    </div>
  );
}
export default App;

