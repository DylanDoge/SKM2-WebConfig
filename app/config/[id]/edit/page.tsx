export default function Edit({ params }: {
    params: { id: string }
})
{
    return <div>Config Edit { params.id }</div>;
}