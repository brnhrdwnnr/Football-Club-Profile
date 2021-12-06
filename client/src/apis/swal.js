import Swal from "sweetalert2";

function alertSuccess(message) {
  const data = {
    title: "Yash!",
    text: message,
    icon: "success",
  };

  Swal.fire(data);
}

function alertError(message) {
  const data = {
    title: "Ooof...",
    text: message,
    icon: "error",
  };

  Swal.fire(data);
}

function alertLoading() {
  Swal.fire({
    title: "Please Wait!",
    html: "Processing...",
    allowEscapeKey: false,
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
}



function swalDone() {
  Swal.close();
}

export { alertSuccess, alertError, alertLoading, swalDone };
