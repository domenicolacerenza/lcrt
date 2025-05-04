import Image from "next/image";
import Mailchimp from "@/components/mail"

export default function Home() {
  return (
    <main className="relative w-screen h-screen flex items-center justify-center">
      <div className=" absolute w-96 h-96">
        <Image
          src="/img/locky1.png"
          alt="LCRT Logo"
          width={400}
          height={400}
          priority
        />
      </div>
      <Mailchimp />
    </main>
  );
}
