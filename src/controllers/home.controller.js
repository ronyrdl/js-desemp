import ReservationCard from "@components/ReservationCard";
import { getReservations } from "@services/reservation.service";
import { getSession } from "@/utils";

export const homeController = async () => {
  const container = document.querySelector("#reservationsContainer");
  if (!container) return;

  container.innerHTML = `<p class="text-gray-400 col-span-2">Cargando...</p>`;

  const user = getSession();
  const all = await getReservations();

  const filtered =
    user.role === "admin"
      ? all
      : all.filter((r) => r.userId === user.id);

  container.innerHTML = filtered.length
    ? filtered.map((r) => ReservationCard(r)).join("")
    : `<p class="text-gray-400 col-span-2 text-center py-6">No hay reservas</p>`;
};
