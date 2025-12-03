//(10 pts) Use useEffect to fetch an image from: https://picsum.photos/id/100/info
//(10 pts) Store the image URL in state
//(10 pts) Display the image on the page
//(10 pts) Add a “Load New Image” button that fetches another random Picsum image (hint: use a random ID)

import React, { useState, useEffect } from "react";

export default function PicsumFetcher() {
  const [imageUrl, setImageUrl] = useState("");

  // Function to fetch an image
  async function fetchImage() {
    const randomId = Math.floor(Math.random() * 1000); // Generate a random ID
    const response = await fetch(`https://picsum.photos/id/${randomId}/info`);
    const data = await response.json();
    setImageUrl(data.download_url); // Set the image URL in state
  }

  // useEffect to fetch an initial image
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <h1>Picsum Image Viewer</h1>

      {/* Display the image here */}
      {imageUrl && <img src={imageUrl} alt="Random Picsum" width="400" />}
      <br/>
      <button onClick={fetchImage}>
        Load New Image
      </button>
    </div>
  );
}

