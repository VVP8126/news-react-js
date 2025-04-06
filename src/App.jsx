import React from 'react';
import Header from './component/Header/Header';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
