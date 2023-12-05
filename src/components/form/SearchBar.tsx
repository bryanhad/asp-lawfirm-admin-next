"use client"
import { FiSearch } from "react-icons/fi"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import InputWithLabel from "@/components/form/InputWithLabel";

export default function SearchBar({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set("q", term)
        } else {
            params.delete("q")
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-4 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:outline-slate-400"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                // so the input will be in sync base on url
                defaultValue={searchParams.get('query')?.toString()}
            />
            <FiSearch className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-slate-700" />
        </div>
    )
}
