import Logo from './Logo';
import Paragraph from './Paragraph';

export const Main = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Logo size="500px" />
      <Logo />
      <Paragraph>Hello React World</Paragraph>
      <Paragraph size={20} color="blue">
        Very Funny React World
      </Paragraph>
    </div>
  );
};
