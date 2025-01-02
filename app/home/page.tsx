import TwoPage from "@/app/components/TwoPageTemplate"
import Link from "next/link"
import PathTree from "../components/PathTree"

export default function Home()
{
    return (
        <TwoPage>
            <section className="grid gap-y-6 content-center bg-white shadow-2xl rounded-lg">
                <h2 className="text-black text-7xl open-sans-500 font-bold text-skm2-orange text-center">002</h2>
                <span className="text-black text-3xl open-sans-500 font-bold text-black text-center">"DylanDoge"</span>
            </section>
            <section className="flex flex-col bg-white shadow-2xl rounded-lg h-full overflow-y-hidden">
                <PathTree>
                    <Link href="/home">/</Link>
                </PathTree>
                <h1 className="text-black text-3xl open-sans-500 font-bold text-black ml-12 mt-8">Home</h1>
                <section className="flex flex-col gap-y-2 text-black text-xl open-sans-400 text-black ml-12 mt-8">
                    <Link href={"/config"} className="text-black">1. Presets</Link>
                    <Link href={"/home"} className="text-black">2. Wallpaper</Link>
                </section>
            </section>
        </TwoPage>
    )
}