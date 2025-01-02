import { Children } from "react"

export default function PathTree({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <section className="text-black text-2xl underline underline-offset-4 open-sans-400 antialiased mx-14 mt-14">
            { children }
        </section>
    )
}