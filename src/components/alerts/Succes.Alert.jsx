import Swal from "sweetalert2";

const Success = (message) =>
  Swal.fire({
    icon: "success",
    title: "SUCCESS",
    text: `${message ? message : "Success"}`,
    showConfirmButton: false,
    timer: 2000,
  });

export default Success;
