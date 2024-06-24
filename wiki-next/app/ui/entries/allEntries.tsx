import Image from "next/image";
import { fetchAllEntries } from "@/app/lib/data";

export default async function AllEntries() {
  const entries = await fetchAllEntries();

  return (
    <>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            {/* <ul>
                            { entries.map((entry) => (
                                <li key={entry.id}>
                                    { entry.name }
                                </li>
                            )) }
                        </ul> */}

            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              {entries.map((entry) => (
                <li key={entry.id} className="pb-3 sm:pb-4 p-2 ">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8 rounded-full"
                        src={entry.image_url}
                        alt={entry.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xl font-medium text-sky-500 truncate ">
                        { entry.name }
                      </p>
                      <p className="text-base text-gray-500 truncate dark:text-gray-400">
                        { entry.content }
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
