import ContentLoader from "react-content-loader";

export default function Loader(props) {
  return (
    <ContentLoader
      viewBox="0 0 400 475"
      height={475}
      width={400}
      speed={2}
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
    </ContentLoader>
  );
}
