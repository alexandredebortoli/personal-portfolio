type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
