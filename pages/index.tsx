import Demo from "@/components/views/Demo/Demo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Demo>Hello component! Our first component has been rendered!</Demo>
    </main>
  );
}
