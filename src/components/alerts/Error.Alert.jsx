import Swal from "sweetalert2";

export default function Error(err) {
  // console.log(err);
  return Swal.fire({
    icon: "error",
    title: err ? err : "Something went wrong",
    showConfirmButton: false,
    timer: 2000,
  });
}
