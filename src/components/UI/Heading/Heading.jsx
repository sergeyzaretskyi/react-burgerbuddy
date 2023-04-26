import styles from './Heading.module.scss';

export const Heading = ({ tag, text }) => {
  const Tag = tag;
  const className = styles[Tag];

  return (
    <>
      <Tag className={className}>{text}</Tag>
    </>
  );
};
