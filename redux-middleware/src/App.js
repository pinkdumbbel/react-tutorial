import React from 'react';
import PostListContainer from './container/PostListContainer';
import { Route } from 'react-router-dom';
import PostContainer from './container/PostContainer';

function App() {
  return (
    <>
      <Route path='/' component={PostListContainer} exact />
      <Route path='/:id' component={PostContainer} />
    </>
  );
}

export default App;
