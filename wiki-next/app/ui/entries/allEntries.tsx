import Image from "next/image";
import { fetchAllEntries } from "@/app/lib/data";

export default async function AllEntries(){
    const entries = await fetchAllEntries();

    return (
        <>
            <div className="mt-6 flow-root">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                        <ul>
                        {/* { entries?.map((entry) => (

                        ))} */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}