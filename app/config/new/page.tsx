import { assets } from "@/utils/assets-utils"
import PathTree from "@/app/components/PathTree"
import TwoPage from "@/app/components/TwoPageTemplate"
import ConfigForm from "@/app/components/ConfigCategories/ConfigForm"
import Link from "next/link"

export default function newConfig()
{
    return (
        <TwoPage>
            <section className="grid gap-y-6 px-32 content-center 
                                bg-white shadow-2xl rounded-lg">
                <img src={assets.skm2_model_sideView} alt="Side view of 3D Volume Knob MK2 model" className=""/>
            </section>
            <section className="flex flex-col 
                                bg-white shadow-2xl rounded-lg 
                                h-full overflow-y-hidden">
                <PathTree>
                    <Link href="/home">/</Link>
                    <span> </span>
                    <Link href="/config">presets</Link>
                    <span> </span>
                    <Link href="/config/new">/create</Link>
                </PathTree>
                <h1 className="text-black text-3xl open-sans-500 font-bold 
                                ml-12 mt-8">Create New Preset</h1>
                <ConfigForm></ConfigForm>
            </section>
        </TwoPage>
    )
}