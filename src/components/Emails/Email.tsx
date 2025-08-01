import { Html, Text, Body, Head, Preview } from '@react-email/components';

type Props = {
  message: string;
  name: string;
};

export const Email = ({ name, message }: Props) => {
  return (
    <Html lang="en">
      <Head />
      <Preview>Thank you {name} for reaching out!</Preview>
      <Body>
        <Text>{message}</Text>
      </Body>
    </Html>
  );
};
