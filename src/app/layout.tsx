type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="de">
      <body style={{ backgroundColor: "rgb(243 244 246)" }}>{children}</body>
    </html>
  );
}
