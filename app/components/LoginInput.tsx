interface LoginInputProps {
    type: string;
    field: string;
}

export default function LoginInput({type, field}: LoginInputProps)
{
    return (
        <input type={type} name={field} placeholder={field} className="h-12 border-2 border-slate-500 rounded-md pl-2 min-w-16 text-skm2-blue placeholder:text-skm2-blue placeholder:text-lg"/>
    )
}