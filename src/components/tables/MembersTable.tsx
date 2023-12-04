import Link from "next/link"
import Image from "next/image"
import {prisma} from '@/lib/db/prisma'

export default async function MembersTable() {
    const members = await prisma.user.findMany()
    console.log(members)

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {members?.map((member) => (
                            <div
                                key={member.id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            {/* <Image
                                                src={member.image_url}
                                                className="mr-2 rounded-full"
                                                width={28}
                                                height={28}
                                                alt={`${member.name}'s profile picture`}
                                            /> */}
                                            <p>{member.name}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            {member.email}
                                        </p>
                                    </div>
                                    {/* <InvoiceStatus status={invoice.status} /> */}
                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div>
                                        <p className="text-xl font-medium">
                                            hehe
                                            {/* {formatCurrency(invoice.amount)} */}
                                        </p>
                                        <p>
                                            hehee
                                            {/* {formatDateToLocal(invoice.date)} */}
                                        </p>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <UpdateInvoice id={member.id} />
                                        <DeleteInvoice id={member.id} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-4 py-5 font-medium sm:pl-6"
                                >
                                    Member
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Position
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Role
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Joined Date
                                </th>
                                <th
                                    scope="col"
                                    className="relative py-3 pl-6 pr-3"
                                >
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {members?.map((member) => (
                                <tr
                                    key={member.id}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex items-center gap-3">
                                            <Image
                                    src={member.profilePicture ?? DEFAULT_PROFILE_PIC}
                                    className="rounded-full bg-slate-200"
                                    width={35}
                                    height={35}
                                    alt={`${member.name}'s profile picture`}
                                />
                                            <p>{member.name}</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {member.email}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {/* {formatCurrency(member.amount)} */}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {member.role}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                    {formatDate(member.createdAt)}
                                    </td>
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex justify-end gap-3">
                                            <UpdateInvoice id={member.id} />
                                            <DeleteInvoice id={member.id} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

import { FaRegTrashAlt } from "react-icons/fa"
import { LuPencil } from "react-icons/lu"
import { DEFAULT_PROFILE_PIC } from "@/constants"
import formatDate from "@/utils/formatDate"

function UpdateInvoice({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/invoices/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <LuPencil className="w-5" />
        </Link>
    )
}

function DeleteInvoice({ id }: { id: string }) {
    // const deleteInvoiceWithId = deleteInvoice.bind(null, id)
    return (
        <form>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <FaRegTrashAlt className="w-5" />
            </button>
        </form>
    )
}
