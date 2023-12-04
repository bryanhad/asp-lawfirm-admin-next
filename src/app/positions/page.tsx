import PageTitle from '@/components/PageTitle'
import SearchBar from './SearchBar'
import AddPositionForm from './AddPositionForm'

export default function PositionsPage() {
  return (
    <div>
        <PageTitle>Positions</PageTitle>
        <SearchBar placeholder='Search...'/>
        <AddPositionForm/>
    </div>
  )
}
