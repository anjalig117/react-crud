export default async function Page({params}: {params: {id: string}}){
    const id = params.id;
    return (
        <>
            <h1>{id} edit page entry</h1>
        </>
    )
}