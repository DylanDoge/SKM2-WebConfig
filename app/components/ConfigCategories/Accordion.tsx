"use client"
import React, { useState } from "react";
export default function Accordion({
    children,
    categoryName,
  }: Readonly<{
        children: React.ReactNode;
        categoryName: string;
    }>)
{   
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (   
        <section className="flex flex-col gap-y-2 mt-2">
                <section
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    className="flex justify-between cursor-pointer">
                    <h3 className="text-2xl">{categoryName}</h3>
                    {accordionOpen ? <span>-</span> : <span>+</span>}
                </section>
                    <section className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        accordionOpen ? 'mb-3 max-h-fit opacity-100' : 'max-h-0 invisible opacity-0 cursor-none' 
                    }`}>
                        { children }
                    </section>
        </section>
    )
}