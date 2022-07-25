import Swal from "sweetalert2";

export const requiredFieldsError = () => {
  Swal.fire({
    title: "Error",
    text: "Por favor, rellena todos los campos",
    icon: "error",
    confirmButtonText: "Ok",
  });
};

export const restartGiveUpDate = () => {
  const result = Swal.fire({
    title: "Es normal tener recaidas, lo importante es aprender.",
    text: "¿Quieres restablecer tu fecha de inicio a hoy?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, restablecer",
    cancelButtonText: "Cancelar",
  }).then((result) => result.value);

  return result;
};
