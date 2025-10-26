import React from "react";
// Import all child components
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// Import the blog data object (using the provided variable name 'blogData')
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      {/* 1. Header: Pass the blog name */}
      <Header name={blogData.name} />
      
      {/* 2. About: Pass the blog image and description */}
      <About image={blogData.image} about={blogData.about} />
      
      {/* 3. ArticleList: Pass the array of posts */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

