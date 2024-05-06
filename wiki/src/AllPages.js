import { useState } from "react";
import { people } from "./data";
import SinglePage from "./SinglePage";

export default function AllPages({ singlePageSelect }){

    const [data, setData] = useState(people)
    const uniqueProfession = [...new Set(people.map(item => item.profession))];

    function singleInfo(ids){
        singlePageSelect(ids)
    }
    

    function getResult(e){
        if (e.target.value === 'all'){
            setData(people)
        }
        else{
            let a = people.filter((d) => d.profession === e.target.value)
            setData(a)
        }
    }

    return (
        <>
            <h1>All Pages</h1>
            <select className="form-control-sm" onChange={getResult}>
                <option value= 'all'>All</option>
                { uniqueProfession.map((prof, index) => {
                    return <option key = {index} value = {prof} >{prof}</option>
                })} 
            </select>
            <ul>
                { data.map((people) => {
                    return <li role="button" onClick={() => singleInfo(people.id)} key={people.id}>{people.name} - <span className="text-success">{people.profession}</span></li>
                })}
            </ul>
        </>
    )
}