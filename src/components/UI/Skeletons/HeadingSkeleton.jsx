import ContentLoader from 'react-content-loader';

export const HeadingSkeleton = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={40}
    viewBox="0 0 200 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="15" ry="15" width="200" height="40" />
  </ContentLoader>
);
