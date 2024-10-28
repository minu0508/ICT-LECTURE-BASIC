import * as S from './Text.style';

export const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  delete: del,
  color,
  mark,
  code,
  ...props
}) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span';

  const fontStyle = {
    fontWeight: strong ? 'bold' : undefined,
    fontSize: typeof size === 'number' ? size : undefined,
    textDecoration: underline ? 'underline' : undefined,
  };

  if (mark) {
    children = <mark>{children}</mark>;
  }

  if (code) {
    children = <code>{children}</code>;
  }

  if (del) {
    children = <del>{children}</del>;
  }

  return (
    <>
      <S.TextBox>
        <Tag
          className={typeof size === 'string' ? `Text--size-${size}` : undefined}
          style={{ ...props.style, ...fontStyle }}
          {...props}
        >
          {children}
        </Tag>
      </S.TextBox>
    </>
  );
};
