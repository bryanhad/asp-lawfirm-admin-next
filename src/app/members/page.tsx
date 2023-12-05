import { Button } from "@/components/form/Buttons"
import SearchBar from "@/components/form/SearchBar"
import MembersTable from "@/components/tables/MembersTable"

export default function MembersPage() {
    return (
        <div>
            MembersPage
            <div className="flex gap-2">
                <SearchBar placeholder="Search..." />
                <Button isLink href="/members/add" buttonType="add" type="submit">
                    Add New
                </Button>
            </div>
            <MembersTable />
        </div>
    )
}
