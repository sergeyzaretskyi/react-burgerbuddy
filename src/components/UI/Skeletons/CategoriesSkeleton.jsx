import ContentLoader from 'react-content-loader';

export const CategoriesSkeleton = () => (
  <ContentLoader
    speed={2}
    width={415}
    height={95}
    viewBox="0 0 415 95"
    backgroundColor="#e4292a"
    foregroundColor="#ffb90f"
  >
    <rect x="0" y="0" rx="15" ry="15" width="115" height="95" />
    <rect x="150" y="0" rx="15" ry="15" width="115" height="95" />
    <rect x="300" y="0" rx="15" ry="15" width="115" height="95" />
  </ContentLoader>
);
