import { loginController } from "@controllers/login.controller";


export default function loginView() {
  setTimeout(() => loginController());

  return `
    <div class="min-h-screen flex items-center justify-center bg-indigo-900">
      <div class="bg-indigo-600 border rounded p-8 w-80">
        <h1 class="text-xl font-bold mb-5 text-white">Iniciar Sesión</h1>
        <form id="loginForm" class="flex flex-col gap-3">
          <input type="email" name="email" placeholder="Correo" required
            class="border px-3 py-2 rounded w-full text-white" />
          <input type="password" name="password" placeholder="Contraseña" required
            class="border px-3 py-2 rounded w-full text-white" />
          <button type="submit" class="bg-indigo-950 text-white py-2 rounded hover:bg-indigo-900">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  `;
}
