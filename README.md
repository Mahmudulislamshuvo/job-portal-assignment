# Job Portal

A modern and feature-rich job portal application built with React, Vite, and Tailwind CSS.

## Features

*   User authentication (login, registration)
*   Company and user registration
*   Create, edit, and manage job postings
*   Search and filter job postings
*   Apply for jobs
*   User and company dashboards
*   User and company profile management
*   Responsive design

## Technologies Used

*   **Frontend:**
    *   [React](https://reactjs.org/)
    *   [Vite](https://vitejs.dev/)
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [Redux](https://redux.js.org/)
    *   [React Router](https://reactrouter.com/)
    *   [React Hook Form](https://react-hook-form.com/)
    *   [React Icons](https://react-icons.github.io/react-icons/)
    *   [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
*   **Linting:**
    *   [ESLint](https://eslint.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v14 or later)
*   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/job-portal.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root directory and add the following environment variables:
    ```
    VITE_API_URL=your_api_url
    ```

### Running the Application

```sh
npm run dev
```

This will run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the code using ESLint.
*   `npm run preview`: Serves the production build locally.

## Folder Structure

```
.
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── commonComponents
│   │   ├── companyComponents
│   │   ├── navbar
│   │   ├── public
│   │   ├── registration
│   │   ├── skelitons
│   │   └── userComponents
│   ├── features
│   │   ├── api
│   │   └── auth
│   ├── hooks
│   ├── pages
│   ├── provider
│   ├── routes
│   └── utils
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.