import React from 'react';
import './ImgDownloadComponent.css';

const ImgDownloadComponent = ({ href }) => {
  return (
    <a href={href} className="downButton" download="banner-image.png">
      Download
    </a>
  );
};

export default ImgDownloadComponent;
