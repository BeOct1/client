# Betmora Frontend Client

This is the React frontend client application for Betmora - BeTech Movie Recommendation App.

## Project Structure

- `public/` - Static assets including `index.html` and images.
- `src/` - React source code including components, pages, styles, and context.
- `src/components/` - Reusable React components like Navbar and MovieCard.
- `src/pages/` - Page components for routing.
- `src/styles/` - CSS stylesheets.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies.

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Notes

- The app uses React Router for navigation and context for authentication state.
- The public folder contains static assets and must be present for the app to run correctly.
- CSS uses absolute paths for images referencing the public folder.

## How to Run

1. Navigate to the `frontend/client` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Open your browser at `http://localhost:3000`.

## Troubleshooting

- If you encounter missing files errors, verify the `public` folder exists in `frontend/client`.
- For any issues with authentication context, ensure the correct imports of `AuthProvider` and `useAuth`.
