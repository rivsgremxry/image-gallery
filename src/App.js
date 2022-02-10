import React, {useState} from 'react';
import Gallery from './components/Gallery';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, body: 'Body 1' },
    { id: 2, body: 'Body 2' },
    { id: 3, body: 'Body 3' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <h1 className='AppName'> TEST APP </h1>
      <Gallery />
      <PostForm create={createPost}/>
      <PostList posts={posts} title="Post list 1" />
    </div>
  );
}

export default App;