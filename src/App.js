import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <div className="text">
        <h1 className="title">
          <span>H</span>ello StackBlitz!
        </h1>
        <p
          contentEditable="true"
          className="edit"
          data-placeholder="Edit me"
          id="editMe"
        ></p>
      </div>
    </div>
  );
}
