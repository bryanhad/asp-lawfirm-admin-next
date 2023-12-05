import PageTitle from "@/components/PageTitle"
import SearchBar from "../../components/form/SearchBar"
import AddPositionForm from "./AddPositionForm"
import PositionsTable from "@/components/tables/PositionsTable"
import { Suspense } from "react"
import PositionsTableSkeleton from "@/components/skeletons/PositionsTableSkeleton"

export default function PositionsPage() {
    return (
        <div className="">
            <PageTitle>Positions</PageTitle>
            <div className="px-2 flex flex-col gap-3">
                <SearchBar placeholder="Search..." />
                <AddPositionForm />
                <Suspense fallback={<p>Loading...</p>}>
                    <PositionsTable />
                </Suspense>
            </div>
        </div>
    )
}
