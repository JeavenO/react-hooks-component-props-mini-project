import React from "react";

// Helper function for the 'Minutes to Read' bonus feature
function calculateReadTime(minutes) {
  if (minutes < 30) {
    // Less than 30 minutes: Coffee Cup (☕️) for every 5 minutes (rounded up)
    const cups = Math.ceil(minutes / 5);
    const emoji = "☕️".repeat(cups);
    return `${emoji} ${minutes} min read`;
  } else {
    // 30 minutes or more: Bento Box (🍱) for every 10 minutes (rounded up)
    const boxes = Math.ceil(minutes / 10);
    const emoji = "🍱".repeat(boxes);
    return `${emoji} ${minutes} min read`;
  }
}

// Destructure props and provide a default value for 'date'
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      
      {/* Small tag displays the date prop (or default value) and the read time */}
      <small>
        {date} &bull; {calculateReadTime(minutes)}
      </small>
      
      <p>{preview}</p>
    </article>
  );
}

export default Article;