export default function Sidebar({ pageSelected }){

    function goToPage(pages){
        // alert('Home page called.')
        pageSelected(pages)
    }

    return(
        <>
            <div className = "mb-2">
                <h1 className="text-light"> Wiki</h1>
            </div>
            <div className = "mt-2 text-light">
                <div role = "button" onClick = { () => goToPage('home') }>Home</div>
                {/* <div role = "button" onClick = { () => goToPage('new page') }>New Page</div> */}
                <div role = "button" onClick = { () => goToPage('random page') }>Random Page</div>
            </div>
        </>
    )
}