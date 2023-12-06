import ContentContainer from "@/components/ContentContainer"
import PageTitle from "@/components/PageTitle"
import { Button } from "@/components/form/Buttons"
import SearchBar from "@/components/form/SearchBar"
import MembersTable from "@/components/tables/MembersTable"
import Pagination from "@/components/tables/Pagination"
import { fetchMembersPage } from "@/lib/data"

export default async function MembersPage({
    searchParams,
}: {
    searchParams?: {
        q?: string
        page?: string
    }
}) {
    const query = searchParams?.q || ""
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchMembersPage(query)

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
            <MembersTable query={query} currentPage={currentPage} />
            <Pagination totalPages={totalPages}/>
        </ContentContainer>
    )
}
