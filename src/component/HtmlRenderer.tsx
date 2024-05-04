import React from 'react';

const HtmlRenderer = ({ htmlContent }) => {

  const openInNewTab = () => {
    const newWindow = window.open('', '', 'width=600,height=400');
    newWindow.document.write(htmlContent);
    newWindow.document.close();
  };

  return (
    <div>
    <button onClick={openInNewTab}>Open in New Tab</button>
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default HtmlRenderer;
