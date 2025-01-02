export default function SearchBar()
{
    return (
        <form action="/config">
            <input 
                type="text" 
                placeholder="Search for preset." 
                className="min-w-full h-14 pl-4 bg-[#ECECEC] rounded-lg text-skm2-blue open-sans-500 placeholder:text-[#252525] placeholder:text-lg"/>
        </form>
    );
}