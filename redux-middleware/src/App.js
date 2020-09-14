import React from 'react';
import PostListContainer from './container/PostListContainer';
import { Route } from 'react-router-dom';
import PostContainer from './container/PostContainer';
import CounterContainer from './container/CounterContainer';

function App() {
  return (
    <>
      <CounterContainer />
      <Route path='/' component={PostListContainer} exact />
      <Route path='/:id' component={PostContainer} />
    </>
  );
}

export default App;
