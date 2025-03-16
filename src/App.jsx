import React from "react";
import { useEffect, useState } from "react";


const App = () => {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function Get() {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
      );
      if (response.ok) {
        setUrl(response.url);
      }
    }
    Get();
  }, [input]);

  return (
    <div className="app">
      <div className="center">
        {url ? (
          <img src={url} alt="" />
        ) : (
          <img src="https://qrcode.co.uk/themes/altum/assets/images/qr_code.svg"></img>
        )}
        <input
          type="text"
          placeholder="Enter name or url"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <h1>{
        url &&
<a href={url} download={url}>Download</a>
      }
      </h1>
    </div>
  );
};

export default App;
