import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  // Use map() to transform the array of post objects into Article components
  const articleElements = posts.map((post) => {
    // The key prop is REQUIRED and set to the post's unique id
    // Use the spread operator ({...post}) to pass all post properties as props
    return <Article key={post.id} {...post} />;
  });

  return (
    <main>
      {articleElements}
    </main>
  );
}

export default ArticleList;