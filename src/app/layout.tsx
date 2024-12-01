type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
