import Intro from "@/app/ui/intro";
import SectionDivider from "@/app/ui/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
    </main>
  );
}
