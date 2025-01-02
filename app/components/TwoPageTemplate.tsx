import { Children } from "react";

export default function TwoPage({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <main className="px-64 py-20 inset-0 min-h-full h-screen"
        style={{
          backgroundColor: "#E8E5E0",
        }}>
            <section className="grid grid-cols-2 gap-x-8 min-h-full min-w-full max-h-full">
                { children }
            </section>
        </main>
    )
}