import { useRef, useState } from "react";
import halfDay from "../components/halfDay.module.css";

export default function ImageReloader() {
  const reloadCount = useRef(0);
  const [imgUrl, setImgUrl] = useState("https://picsum.photos/200/200?random=1");

  function reloadImage() {
    // TODO: increase reloadCount.current
    reloadCount.current += 1;
    
    // TODO: change image URL (use random number)
    const rand = Math.floor(Math.random() * 1000);
    setImgUrl(`https://picsum.photos/200/200?random = ${rand}`);
  }

  function logCount() {
    // TODO: console.log the count
    console.log("Image reloaded" + reloadCount.current + "times");
  }

  return (
    <>
    <div> 
      <img src={imgUrl} />
      <br /><br />
      <button onClick={reloadImage}>Reload Image</button>
      <button onClick={logCount}>Log Count</button>
      </div>
    </>
  );
}
