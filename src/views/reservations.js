import Sidebar from "@components/Sidebar";
import { reservationController } from "@controllers/reservation.controller";


export default function reservationsView() {
  setTimeout(() => reservationController());

  return `
    <div class="flex">
      ${Sidebar()}
      <main class="flex-1 p-6 bg-indigo-900 min-h-screen">
        <h1 class="text-xl font-bold mb-4 text-white">Nueva Reserva</h1>
        <form id="reservationForm" class="bg-indigo-300  p-6 rounded border max-w-lg flex flex-col gap-4">

          <div>
            <label class="block text-sm font-medium mb-1">Espacio</label>
            <input type="text" name="workspace" placeholder="Ej: Sala A" required
              class="border w-full px-3 py-2 rounded" />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Fecha</label>
            <input type="date" name="date" required class="border w-full px-3 py-2 rounded" />
          </div>

          <div class="flex gap-4">
            <div class="flex-1">
              <label class="block text-sm font-medium mb-1">Hora inicio</label>
              <input type="time" name="startHour" required class="border w-full px-3 py-2 rounded" />
            </div>
            <div class="flex-1">
              <label class="block text-sm font-medium mb-1">Hora fin</label>
              <input type="time" name="endHour" required class="border w-full px-3 py-2 rounded" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Motivo</label>
            <input type="text" name="reason" placeholder="Ej: Sprint Planning" required
              class="border w-full px-3 py-2 rounded" />
          </div>

          <button type="submit" class="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-900">
            Crear Reserva
          </button>
        </form>
      </main>
    </div>
  `;
}
