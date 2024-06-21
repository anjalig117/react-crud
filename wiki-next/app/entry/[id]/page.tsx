export default async function Page({ params }: { params: { id: string } }){
    const id = params.id;
    console.log('id is ', id)

    return (
        <>
            <h1>{id} entry page</h1>
        </>
    )
}