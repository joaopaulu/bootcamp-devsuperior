import React from 'react';
import ContentLoader from 'react-content-loader';
import { generateList } from 'core/utils/list';

const ClientCardLoader = () => {
  const loaderItems = generateList(1);
  return (
    <>
      {loaderItems.map(item => (
        <ContentLoader
          key={item}
          speed={1}
          width={1000}
          height={175}
          viewBox="0 0 1000 175"
          backgroundColor="#ecebeb"
          foregroundColor="#d6d2d2"
        >
          <rect x="0" y="2" rx="10" ry="10" width="1000" height="175" />
        </ContentLoader>
      ))}
    </>
  );
};

export default ClientCardLoader;
