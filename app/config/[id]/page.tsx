export default function Config({ params }: {
    params: { id: string }
})
{
    return <h1>Config ID: {params.id}</h1>;
}