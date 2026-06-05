import { removeSession } from "@/utils";
import { navigateTo } from "@/router/router";

export default function Sidebar() {
  
  setTimeout(() => {
    document.querySelector("#logoutBtn")?.addEventListener("click", () => {
      removeSession();
      navigateTo("/");
    });
  });

  return `
    <aside class="w-52 bg-gray-500 text-white min-h-screen p-4 flex flex-col gap-4">
      <h2 class="text-lg font-bold">Reservas</h2>
      <nav class="flex flex-col gap-2">
        <a href="/home" data-link class="px-3 py-2 bg-indigo-700 rounded hover:bg-indigo-950">Inicio</a>
        <a href="/reservations" data-link class="px-3 py-2 bg-indigo-700 rounded hover:bg-indigo-950">Reservas</a>
      </nav>
      <button id="logoutBtn" class="mt-auto text-left px-3 py-2 text-red-600 hover:bg-red-950 hover:text-white rounded">
        Cerrar sesión
      </button>
    </aside>
  `;
}
