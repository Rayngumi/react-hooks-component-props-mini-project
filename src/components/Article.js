import React from "react";

function Article({ post }) {
  const emojis =
    post.minutes <= 6
      ? '☕️'.repeat(Math.ceil(post.minutes / 5))
      : '🍱'.repeat(Math.ceil(post.minutes / 10));

  const formattedDate = post.date || "January 1, 1970";

  return (
    <article>
      <h3>{post.title}</h3>
      <small>{formattedDate}</small>
      <p>{post.preview}</p>
      <p>
        {emojis} {post.minutes} min read
      </p>
    </article>
  );
}

export default Article;
