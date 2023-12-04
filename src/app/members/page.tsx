import MembersTable from "@/components/tables/MembersTable";
import Link from 'next/link'
export default function MembersPage() {
  return (
    <div>
      MembersPage
      <Link href='/members/add' className="bg-accent text-white p-4">
        add Member
      </Link>
      <MembersTable/>
    </div>
  )
}
