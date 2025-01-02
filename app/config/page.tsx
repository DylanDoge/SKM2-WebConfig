import Link from "next/link";
import SearchBar from "../components/SearchBar";
import ConfigList from "../components/ConfigCategories/ConfigList";
import ConfigNewBtn from "../components/ConfigCategories/ConfigNewBtn";
import TwoPage from "../components/TwoPageTemplate";
import PathTree from "../components/PathTree";

export default function Config()
{
    return (
        <TwoPage>
            <section className="grid gap-y-6 content-center bg-white shadow-2xl rounded-lg">
                <h2 className="text-black text-7xl open-sans-500 font-bold text-skm2-orange text-center">002</h2>
                <span className="text-black text-3xl open-sans-500 font-bold text-center">"DylanDoge"</span>
            </section>
            <section className="flex flex-col bg-white shadow-2xl rounded-lg h-full overflow-y-hidden">
                <PathTree>
                    <Link href="/home">/</Link>
                    <span> </span>
                    <Link href="/config">presets</Link>
                </PathTree>
                <h1 className="text-black text-3xl open-sans-500 font-bold ml-12 mt-8">Presets</h1>
                <section className="max-w-full grid grid-cols-[80%_1fr] gap-x-2 mx-14 mt-14">
                    <SearchBar />
                    <ConfigNewBtn />
                </section>
                <ConfigList>
                    <div className="grid grid-cols-[70px_1fr_120px] justify-between content-center py-2.5">
                        <h2>1</h2>
                        <a>Example</a>
                        <span className="justify-self-center">1945-09-02</span>
                    </div>
                </ConfigList>
            </section>
            {/* <section className="grid grid-cols-2 bg-white text-base text-black min-h-full min-w-full shadow-xl rounded-lg"> */}

            {/* </section> */}
        </TwoPage>
    );
}