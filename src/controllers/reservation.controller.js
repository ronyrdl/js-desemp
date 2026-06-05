import { createReservation } from "@services/reservation.service";
import { getSession } from "@/utils";
import { navigateTo } from "@/router/router";

// Maneja el submit del formulario de nueva reserva
export const reservationController = () => {
  const form = document.querySelector("#reservationForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = getSession();

    const data = {
      userId: user.id,
      workspace: form.workspace.value.trim(),
      date: form.date.value,
      startHour: form.startHour.value,
      endHour: form.endHour.value,
      reason: form.reason.value.trim(),
      status: "pending",
    };

    try {
      await createReservation(data);
      alert("Reserva creada exitosamente");
      navigateTo("/home");
    } catch {
      alert("Error al crear la reserva");
    }
  });
};
