import React from 'react';

import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="139" cy="133" r="119" />
      <rect x="-1" y="269" rx="6" ry="6" width="280" height="26" />
      <rect x="5" y="302" rx="6" ry="6" width="280" height="84" />
      <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
      <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
    </ContentLoader>
  );
}

export default LoadingBlock;
