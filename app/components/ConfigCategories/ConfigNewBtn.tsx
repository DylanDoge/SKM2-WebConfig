import Link from "next/link";

export default function ConfigNewBtn()
{
    return (
        <Link href={"/config/new"} className="flex justify-center items-center bg-skm2-orange rounded-lg text-lg">
            <h2>New</h2>
        </Link>
    )
}