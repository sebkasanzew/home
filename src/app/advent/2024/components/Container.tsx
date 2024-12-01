type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function Container(props: Props) {
  const { children } = props;

  return (
    <div className="min-h-screen w-full px-4 bg-gray-100 py-8">
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}
