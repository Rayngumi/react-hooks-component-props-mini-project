import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList() {
  return (
    <main>
      {blogData.posts.map((x) => (
        <Article key={x.id} i={x} />
      ))}
    </main>
  );
}

export default ArticleList;
