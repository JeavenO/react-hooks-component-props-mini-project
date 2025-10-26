import React from "react";

const defaultImage = "https://via.placeholder.com/215";

// Destructure props and provide a default value for 'image'
function About({ image = defaultImage, about }) {
  return (
    <aside>
      {/* Use the image prop, falling back to defaultImage if undefined */}
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
