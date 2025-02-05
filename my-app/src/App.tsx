// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Counter} />
        <Route path="/form" exact component={UserForm} />
        <Route path="/editor" exact component={RichTextEditor} />
      </Routes>
    </Router>
  );
};

export default App;
