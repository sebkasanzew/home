import "../../globals.css";
import Container from "./components/Container";
import FontSettings from "./components/FontSettings";
import Header from "./components/Header";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function AdventLayout(props: Props) {
  const { children } = props;

  return (
    <Container>
      <FontSettings>
        <Header />

        <main>{children}</main>
      </FontSettings>
    </Container>
  );
}
