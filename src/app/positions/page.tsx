import PageTitle from "@/components/PageTitle"
import SearchBar from "../../components/form/SearchBar"
import AddPositionForm from "./AddPositionForm"
import PositionsTable from "@/components/tables/PositionsTable"
import { Suspense } from "react"
import PositionsTableSkeleton from "@/components/skeletons/PositionsTableSkeleton"
import ContentContainer from "@/components/ContentContainer"

export default function PositionsPage() {
    return (
            <ContentContainer className="flex flex-col gap-3">
                <PageTitle>Positions</PageTitle>
                <SearchBar placeholder="Search Position..." />
                <AddPositionForm />
                <Suspense fallback={<p>Loading...</p>}>
                    <PositionsTable />
                </Suspense>
            </ContentContainer>
    )
}
