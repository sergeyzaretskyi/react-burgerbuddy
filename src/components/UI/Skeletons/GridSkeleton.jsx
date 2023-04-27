import ContentLoader from 'react-content-loader';

export const GridSkeleton = () => (
  <ContentLoader
    speed={2}
    width={340}
    height={396}
    viewBox="0 0 340 396"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="15" ry="15" width="340" height="220" />
    <rect x="60" y="230" rx="15" ry="15" width="220" height="30" />
    <rect x="10" y="270" rx="15" ry="15" width="320" height="50" />
    <rect x="45" y="335" rx="15" ry="15" width="80" height="35" />
    <rect x="165" y="330" rx="15" ry="15" width="165" height="45" />
  </ContentLoader>
);
