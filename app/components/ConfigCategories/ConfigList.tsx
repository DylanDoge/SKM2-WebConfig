import { Children } from "react";

export default function ConfigList({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <section className="text-black mt-5 h-full">
            <section className="grid grid-cols-[70px_1fr_120px] justify-between content-center bg-[#272727] mx-14 px-6 h-12 rounded-t-lg text-white text-2xl open-sans-500">
                <h2>ID</h2>
                <h2>Title</h2>
                <h2>Date</h2>
            </section>
            <section className="bg-[#ECECEC] mx-14 pl-6 pr-4 h-full max-h-[20em] rounded-b-lg text-[#252525] text-xl open-sans-400 overflow-y-scroll">
                { children }
            </section>
        </section>
    );
}