import { useState } from "react";
import { people } from "./data"
import { getImageUrl } from "./utils"

export default function SinglePage({ random = false, id = 0 }){

    const rdmPage = (Math.floor(Math.random() * people.length));

    const pageInfo = people[random ? rdmPage : id]
    // console.log('page info is ', pageInfo)

    return (
        <>
            <div className="row align-items-center mb-4">
                <div className="col-md-1">
                    <img src = { getImageUrl(pageInfo) } alt = { pageInfo.name } height = { 70 } width = { 70 } className="rounded-circle"/>
                </div>
                <div className="col-md-11">
                    <h1> { pageInfo.name } </h1>
                </div>
            </div>

            <div className="mt-1">
            <span className="text-success text-capitalize">{ pageInfo.profession }</span>
                <br/>
                <p className="text-capitalize">
                { pageInfo.accomplishment }
                </p>
            </div>

        </>
    )
}