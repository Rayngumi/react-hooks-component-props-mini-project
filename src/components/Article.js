import React from "react";

function Article({ i }) {
  const emojis =
    i.minutes <= 6
      ? "☕️".repeat(Math.ceil(i.minutes / 5))
      : "🍱".repeat(Math.ceil(i.minutes / 10));

  const formattedDate = i.date || "January 1, 1970";

  return (
    <article>
      <h3>{i.title}</h3>
      <small>{formattedDate}</small>
      <p>{i.preview}</p>
      <p>
        {emojis} {i.minutes} min read
      </p>
    </article>
  );
}

export default Article;
