import Swal from "sweetalert2";

export default function Warning(err) {
  return Swal.fire({
    icon: "warning",
    title: err ? err : "Something went wrong",
    showConfirmButton: false,
    timer: 2000,
  });
}
