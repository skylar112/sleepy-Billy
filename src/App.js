import React from 'react';
import Wrapper from './component/Wrapper';
import Header from './component/Header';
import Main from './component/Main';
import "./App.css"

function App() {
  return (
    <div className="App">
     <Wrapper>
       <Header></Header>
       <Main></Main>
     </Wrapper>
    </div>
  );
}

export default App;
