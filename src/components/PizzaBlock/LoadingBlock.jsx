import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="133" cy="120" r="120" />
      <rect x="0" y="253" rx="6" ry="6" width="280" height="24" />
      <rect x="0" y="292" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="395" rx="6" ry="6" width="92" height="27" />
      <rect x="128" y="386" rx="25" ry="25" width="151" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;
