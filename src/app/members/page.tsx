import ContentContainer from "@/components/ContentContainer"
import PageTitle from "@/components/PageTitle"
import { Button } from "@/components/form/Buttons"
import SearchBar from "@/components/form/SearchBar"
import MembersTable from "@/components/tables/MembersTable"

export default function MembersPage() {
    return (
        <ContentContainer className="flex flex-col gap-3">
            <PageTitle>Members</PageTitle>
            <div className="flex gap-2">
                <SearchBar placeholder="Search Member..." />
                <Button
                    isLink
                    href="/members/add"
                    buttonType="add"
                    type="submit"
                >
                    Add New
                </Button>
            </div>
            <MembersTable />
        </ContentContainer>
    )
}
