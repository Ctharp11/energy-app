import React from 'react';
import ReactDom from 'react-dom';
import './app.css';

const Index = () => {
    return <div className="index">Hello React working with weasasdadbpack</div>;
  };

ReactDom.render(<Index />, document.querySelector('#root'));
