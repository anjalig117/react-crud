import { useState } from "react"
import AllPages from "./AllPages"
import SinglePage from "./SinglePage"

export default function Home({home}){

    // console.log('home value is ', home)
    const [isAllPage, setIsAllPage] = useState(home)
    const [ids, setIds] = useState(0)

    function singlePageSelected(ids){
        // console.log('single page is selected', ids)
        setIsAllPage(false)
        setIds(ids)
    }

    return (
        <>
            { isAllPage ? <AllPages singlePageSelect = { singlePageSelected }/> : <SinglePage id = {ids}/>}
        </>
    )
}