export default function formatDate(date:Date):string {
    return date.toLocaleDateString('id-ID', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
}