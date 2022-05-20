import React from "react";
import toast, { Toaster } from "react-hot-toast";

const UrlResult = ({ url }) => {
    
  const onCopyClick = () => {
    navigator.clipboard
      .writeText(url)
      .then((res) => {
        toast.success("URL Copied to clipboard");
      })
      .catch((err) => {
        toast.error("Failed to copy");
      });
  };

  return (
    <div className="result-container">
      <Toaster />
      <label className="result-url">{url}</label>
      <label className="copy-button" onClick={onCopyClick}>
        Copy
      </label>
    </div>
  );
};

export default UrlResult;
