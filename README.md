# PLATFORM FOR EVENT

This project consists of a single-page application

This application simulates a workspace reservation system where users can log in and navigate simulated routes

- SPA architecture
- Authentication
- Role management
- Route protection
- Session persistence
- API consumption
- DOM manipulation
- Code modularization

A company has various shared workspaces:

- Meeting rooms
- Private offices
- Coworking spaces
- Auditoriums

To avoid scheduling conflicts and improve internal organization, a platform is needed to manage reservations for these spaces.

The application must support two roles:

### Administrator (admin)

Can:

- View all reservations
- Create reservations
- Edit reservation statuses
- Access administrative modules


### User (user)

Can:

- Check available spaces
- Create reservations
- View only their own reservations

## Technologies used

- JavaScript ES6+
- Vite
- TailwindCSS
- JSON Server
- Concurrently
- HTML5
- CSS3

```txt
.
├── db.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── api
│   │   └── http.js
│   ├── components
│   │   ├── ReservationCard.js
│   │   └── Sidebar.js
│   ├── controllers
│   │   ├── home.controller.js
│   │   ├── login.controller.js
│   │   └── reservation.controller.js
│   ├── main.js
│   ├── router
│   │   └── router.js
│   ├── services
│   │   └── reservation.service.js
│   ├── style.css
│   ├── utils.js
│   └── views
│       ├── homeView.js
│       ├── loginView.js
│       ├── notFound.js
│       └── reservations.js
└── vite.config.js
```
## for execute
To run it, just open a terminal

### Step 1: 
Run `npm install`

### Step 2: 
Run `npm run dev`

Then open the generated localhost link, and you're all set




