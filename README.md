<p align="center">
  <img src="src/assets/LogoHHReadme.png" alt="Logo del Proyecto" width="300">
</p>

# HelpHub: "Uniendo talentos, creando comunidad" | Frontend

HelpHub es una plataforma de **intercambio de habilidades comunitarias**, diseñada como una iniciativa sin ánimo de lucro.

## 🎯 Objetivo

Proporcionar una interfaz de usuario intuitiva y accesible que permita a los usuarios interactuar con las funcionalidades de la plataforma HelpHub. Este frontend está diseñado para optimizar la experiencia del usuario y facilitar el acceso a herramientas de intercambio de habilidades.

## 👥 Audiencia

HelpHub está diseñado para una audiencia diversa, incluyendo:

- **Comunidad local:** Vecinos y ciudadanos que buscan colaborar entre sí.
- **Profesionales y expertos:** Compartir conocimiento y ampliar su red profesional.
- **Organizaciones sin ánimo de lucro:** Unir esfuerzos para ayudar a comunidades específicas.
- **Grupos de voluntarios:** Coordinar iniciativas y compartir habilidades dentro de sus redes.
- **Aprendices y mentores:** Fomentar relaciones de mentoría en múltiples disciplinas.
- **Emprendedores y pequeñas empresas:** Resolver necesidades puntuales y colaborar para crecer.

## 🛠️ Funcionalidades

- **Registro de Usuario con 2FA:** 🛡️ Los nuevos usuarios pueden registrarse proporcionando su información básica. Se implementa un sistema de autenticación de dos factores (2FA) para mayor seguridad.
- **Inicio de Sesión:** 🔐 Los usuarios pueden iniciar sesión con su correo y contraseña. Compatibilidad con el sistema 2FA para confirmar la identidad del usuario en cada inicio de sesión.
- **Perfil:** 🧑‍💼 Los usuarios pueden crear, editar, ver y eliminar su perfil personal.
- **Habilidades:** 💡 Los usuarios pueden añadir, editar, listar y eliminar habilidades que desean ofrecer.
- **Solicitar Intercambio (En proceso):** 🤝 Los usuarios podrán enviar solicitudes de intercambio a otros miembros de la plataforma. Un sistema de notificaciones informará al receptor de la solicitud.
- **Petición de Ayuda (En proceso):** 🆘 Los usuarios podrán realizar una petición de ayuda si tienen algo específico que quieren resolver sin solicitar un intercambio.
- **Chat en Tiempo Real (En proceso):** 💬 Comunicación directa entre usuarios para coordinar los intercambios.
- **Filtrar por Categorías:** 🔍 Herramienta de búsqueda avanzada para encontrar habilidades o usuarios específicos.
- **Valoración del Intercambio:** ⭐ Los usuarios pueden añadir una breve reseña describiendo su experiencia y calificando el intercambio.

## ⚙️ Tecnologías y herramientas

![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongo Atlas](https://img.shields.io/badge/mongoatlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongo Compass](https://img.shields.io/badge/mongo_compass-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/jwt-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Trello](https://img.shields.io/badge/trello-0079BF?style=for-the-badge&logo=trello&logoColor=white)
![Discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![GitHub](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)

## 🎨 Estructura de Componentes

El frontend de HelpHub está organizado en módulos y componentes reutilizables, diseñados para maximizar la escalabilidad y la legibilidad del código. Las principales vistas y componentes incluyen:

### **Vistas principales:**

- **Login:** Primera página que aparece al abrir la aplicación. Permite a los usuarios iniciar sesión o acceder al flujo de registro si no tienen una cuenta creada.
- **Registro y Autenticación:** 
  - Flujo de registro de nuevos usuarios, incluyendo la validación con autenticación de dos factores (2FA) para mayor seguridad.
  - Acceso al restablecimiento de contraseña en caso de que el usuario la haya olvidado.
- **Home:** Página principal a la que acceden los usuarios tras iniciar sesión. Incluye:
  - Resumen del perfil del usuario.
  - Vista para gestionar habilidades (añadir, editar, eliminar).
  - Acceso rápido a solicitudes de intercambio y peticiones de ayuda.
- **Creación de Perfil:** Flujo inicial tras el registro donde los usuarios configuran su perfil básico y añaden su primera habilidad.
- **Lista de Habilidades:** Página donde los usuarios pueden buscar y filtrar habilidades ofrecidas por otros miembros de la comunidad.
- **Solicitudes de Intercambio:** Pantalla para gestionar solicitudes enviadas y recibidas.
- **Petición de Ayuda:** Página para enviar solicitudes específicas a la comunidad.
- **Reset Password:** Página dedicada para que los usuarios puedan restablecer su contraseña mediante un enlace enviado por correo electrónico.

### **Componentes reutilizables:**

- **Navbar:** Barra de navegación superior.
- **Footer:** Pie de página con enlaces útiles.
- **Cards:** Tarjetas para mostrar habilidades, usuarios o solicitudes.
- **Modals:** Ventanas emergentes para formularios o confirmaciones.
- **Botones y Formularios:** Elementos interactivos diseñados con TailwindCSS.
- **Notificaciones:** Componente para mostrar alertas, confirmaciones o errores en tiempo real.
- **Autenticación 2FA:** Flujo visual para validar un segundo factor de autenticación tras el login.

## ✅ Requisitos previos

Antes de comenzar con el desarrollo o ejecución del frontend web, asegúrate de cumplir con los siguientes requisitos:

- **Node.js y npm:** Asegúrate de tener instalados Node.js (versión recomendada: LTS) y npm, que se instala automáticamente con Node.js.
- **Vite:** Herramienta de desarrollo incluida en el proyecto para optimizar el tiempo de carga y la compilación de la aplicación.
- **React:** La biblioteca principal utilizada para construir la interfaz de usuario.
- **TypeScript:** Aunque TypeScript se incluye como dependencia en el proyecto, puedes instalarlo globalmente si deseas ejecutar comandos como `tsc` fuera del proyecto:
  ```bash
  npm install -g typescript
- **Git:** Necesario para clonar el repositorio y gestionar versiones del código.
- **Acceso al Backend:** Asegúrate de tener el backend en funcionamiento, ya que el frontend depende de sus endpoints para mostrar datos.
- **MongoDB:** Aunque el frontend no interactúa directamente con la base de datos, el proyecto utiliza MongoDB a través del backend. Instala MongoDB en tu máquina local desde MongoDB Community Server. Opcionalmente, descarga e instala MongoDB Compass para una interfaz gráfica que facilite la visualización y manipulación de datos.
- **Editor de código:** Un editor como Visual Studio Code (VS Code) recomendado para una experiencia de desarrollo óptima.

## 📦 Dependencias principales

- **axios:** Cliente HTTP para realizar solicitudes al backend y consumir los endpoints.
- **jwt-decode:** Utilidad para decodificar tokens JWT y extraer información útil, como datos de autenticación.
- **react:** Biblioteca principal utilizada para construir la interfaz de usuario.
- **react-confetti:** Componente para agregar efectos visuales como confeti en momentos clave (e.g., éxito en un registro).
- **react-dom:** Soporte para manejar el DOM en React.
- **react-icons:** Colección de iconos populares para enriquecer la experiencia visual de la aplicación.
- **react-router-dom:** Herramienta para gestionar la navegación y rutas en la aplicación React.
- **react-world-flags:** Biblioteca para mostrar banderas de diferentes países, útil para localización o perfiles internacionales.

## 🚀 Instalación Local

Sigue estos pasos para ejecutar el frontend localmente en tu máquina:

### 1. Clona este repositorio

Primero, clona el repositorio en tu máquina local utilizando Git:

```bash
git clone https://github.com/AdoptaUnJuniorPlatform/GT-HelpHub-Front.git
```

### 2. Instala las dependencias

Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

### 3. Configura el entorno

Crea un archivo .env en la raíz del proyecto para configurar las variables de entorno necesarias.

```plaintext
VITE_API_URL=http://localhost:3000
```

### 4. Inicia el servidor de desarrollo

Ejecuta el siguiente comando para iniciar la aplicación en modo de desarrollo:

```bash
npm run dev
```

### 5. Prueba el sistema

Una vez que el frontend esté funcionando:

- Interactúa con la aplicación: Accede al frontend desde tu navegador en la dirección proporcionada.

- Comprueba el backend: Asegúrate de que el backend esté activo para que los datos se carguen correctamente.

## 🔗 Proyectos Relacionados

Echa un vistazo a los demás repositorios y componentes del proyecto HelpHub:

- 🖥️ **Backend - HelpHub Back:** [Repositorio del backend](https://github.com/AdoptaUnJuniorPlatform/GT-HelpHub-Back)
- 🤖 **Mobile - Android:** Repositorio en desarrollo (próximamente disponible)
- 📱 **Mobile - iOS:** Repositorio en desarrollo (próximamente disponible)

## 🙏 Agradecimientos

Queremos expresar nuestra profunda gratitud a toda la comunidad de **Adopta Un Junior**, quienes hacen posible este proyecto con su apoyo, feedback y compromiso constante.

Un agradecimiento especial a nuestros compañeros del equipo de trabajo HelpHub:

- **Equipo de UX/UI**
- **Equipo de Backend**
- **Equipo de Mobile iOS y Android**
- **Equipo de Voluntarios de AdoptaUnJunior**
- **Equipo de Ciberseguridad**

Cuyos talentos, esfuerzo y colaboración han sido claves para superar los retos técnicos y llevar este proyecto al siguiente nivel.

## 👩‍💻 Colaboradores

Desarrollado y mantenido por:

- **[Gloria Rangel](https://github.com/NorimNori)** - [LinkedIn](https://www.linkedin.com/in/gloria-rangel-06b960306/)
- **[Reyes Morales](https://github.com/ReyesMorales)** - [LinkedIn](https://www.linkedin.com/in/reyes-morales-dguez/)
- **[María Laura Luraschi](https://github.com/marialauraluraschi)** - [LinkedIn](https://www.linkedin.com/in/malalu/)











