import React, {useState} from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [posts, setPosts] = useState([]);

  function handleCreatePostClick() {
    if (title.length !== 0 && description.length !== 0) {
      // Create new post
      const newPost = {
        title: title,
        description: description,
        id: Date.now() // Simple way to generate unique id
      };
      
      setPosts([...posts, newPost]); // Add new post to posts array
      
      // Clear inputs
      setTitle('');
      setDescription('');
    }
  }

  function handleTitleInput(value) {
    setTitle(value);  
  }

  function handleDescriptionInput(value) {
    setDescription(value);
  }

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input 
          onTitleChange={ handleTitleInput } theTitle={ title }
          onDescriptionChange={ handleDescriptionInput } theDescription={ description }
        />
        <button onClick={handleCreatePostClick}
        data-testid="create-button" className="mt-10">
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} />
      </div>
    </div>
  );
}

export default Home;
