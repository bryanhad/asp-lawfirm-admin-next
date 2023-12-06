import Swal, { SweetAlertResult } from "sweetalert2"

export function showConfirm(
    str: string,
    onConfirmed: (result: SweetAlertResult) => void,
) {
    Swal.fire({
        title: "Are you sure?",
        text: str,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(onConfirmed)
}
