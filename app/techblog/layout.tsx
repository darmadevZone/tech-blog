export default function TechBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container w-full h-full">{children}</div>;
}
