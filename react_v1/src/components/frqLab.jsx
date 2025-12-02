//(10 pts) Use useEffect to fetch an image from: https://picsum.photos/id/100/info
//(10 pts) Store the image URL in state
//(10 pts) Display the image on the page
//(10 pts) Add a “Load New Image” button that fetches another random Picsum image (hint: use a random ID)

import { useState, useEffect } from "react";

export default function PicsumFetcher() {
  const [imageUrl, setImageUrl] = useState("");

  // useEffect goes here
  useEffect(() => {
    async function fetchImage() {
      const randomId = Math.floor(Math.random() * 1000); 
      const response = await fetch("https://picsum.photos/v2/list?page=2&limit=100" + randomId + "/info");
      const data = await response.json();
      setImageUrl(data.download_url);
    }

    fetchImage();
  }, []);

  return (
    <div>
      <h1>Picsum Image Viewer</h1>

      {/* Display the image here */}
      <img src={imageUrl} alt="Random Picsum" width="400" />

      <button onClick = {PicsumFetcher}>
        Load New Image
      </button>

    </div>
)
}

