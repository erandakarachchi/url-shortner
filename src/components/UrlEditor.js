import React, { useState } from "react";
import { getShortenUrl } from "../Network/APIClient";
import toast, { Toaster } from "react-hot-toast";

const UrlEditor = ({ setShortUrl }) => {
  const [url, setUrl] = useState("");

  const onConvertClick = () => {
    if (url) {
      const getUrl = getShortenUrl(url).then((result) => {
        setShortUrl(result.result_url);
      });
      toast.promise(getUrl, {
        loading: "Getting URL ...",
        success: "URL generated successfully",
        error: "Failed to generate URL",
      });
    }
  };

  return (
    <div className="editor-container">
      <input
        className="input-box"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      ></input>
      <button className="input-button" onClick={onConvertClick}>
        Convert
      </button>
    </div>
  );
};

export default UrlEditor;
