import { sql } from "@vercel/postgres";

import { unstable_noStore as noStore } from "next/cache";

import { WikiEntry } from "./definitions";

export async function fetchAllEntries(){
    noStore();
    try{
        console.log('fetching all entries from database');

        const data = await sql<WikiEntry>`SELECT * FROM entries`;

        return data.rows;
    } catch(error){
        console.log('Database error', error)
        throw new Error('Failed to fetch entries data.');
    }
}