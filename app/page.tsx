import { assets } from "@/utils/assets-utils"
import LoginInput from "./components/LoginInput";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-48 py-56 fixed inset-0 grid place-items-center min-h-full"
      style={{
        backgroundColor: "#E8E5E0",
      }}>
      <section className="grid grid-cols-2 bg-white text-base text-black min-h-full min-w-full shadow-xl rounded-lg">
        <section className="flex flex-col gap-y-6">
            <h1 className="pt-14 pl-14 text-5xl antialiased text-skm2-orange font-bold open-sans-700">SKM2 Web Config</h1>
            <img src={assets.skm2_model_topView} alt="Top view of 3D Volume Knob MK2 model" className="max-w-md min-w-96 pl-28 pt-6"/>
        </section>

        <section className="flex flex-col gap-y-16">
            <section className="self-end pt-3.5 pr-10">
              <h2 className="font-bold open-sans-700 text-2xl">AUTHENTICATION</h2>
            </section>

            <section className="flex flex-col gap-y-12 px-28">
              <h2 className="open-sans-400 text-3xl">Welcome.</h2>
              <form action="/" method="post" className="flex flex-col gap-y-12">
                <LoginInput type="text" field="ID" />
                <LoginInput type="password" field="PSK" />
                {/* <input type="submit" value="Sign In" className="text-white open-sans-500 text-2xl bg-skm2-orange w-fit px-4 py-2 hover:bg-skm2-dark-orange transition rounded-md" /> */}
                <Link href="config">config</Link>
              </form>
            </section>
        </section>
        
      </section>
    </main>
  );
}