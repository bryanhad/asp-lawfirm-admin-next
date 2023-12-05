import React from "react"

export default function Table({
    headers,
    children,
    actionCollumn,
}: {
    headers: string[]
    actionCollumn?: boolean
    children: React.ReactNode
}) {
    return (
        <div className="overflow-x-auto bg-slate-100 p-2 rounded-xl">
            <table className="w-full">
                {/* head */}
                <thead className="rounded-lg text-left">
                    <tr>
                        {headers.map((header) => (
                            <th className="px-6 py-4" key={header}>{header}</th>
                        ))}
                        {actionCollumn && (
                            <th scope="col" className="relative">
                                <span className="sr-only">Edit</span>
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}
