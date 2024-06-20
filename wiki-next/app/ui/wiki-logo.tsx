import { BeakerIcon } from "@heroicons/react/24/outline"

export default function WikiLogo(){
    return(
        <>
            <div className="flex flex-row items-center leading-none text-white">
                <BeakerIcon className="h-12 w-12 rotate-[15deg]"></BeakerIcon>
                <p className="text-[44px]">Wiki</p>
            </div>
        </>
    )
}