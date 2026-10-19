import React from 'react';
import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return <h2 className="text-blue-600">Home Page</h2>;
}

function About() {
  return <h2 className="text-green-600">About Page</h2>;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">
        React Router Types
      </h1>

      <div className="mb-6 rounded bg-white p-5 shadow">
        <h2 className="mb-3 text-xl font-bold">1. HashRouter</h2>

        <HashRouter>
          <nav className="mb-4 space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </HashRouter>

        <p className="mt-3 text-gray-600">
          Use: Static websites.
        </p>
      </div>

      <div className="mb-6 rounded bg-white p-5 shadow">
        <h2 className="mb-3 text-xl font-bold">2. MemoryRouter</h2>

        <MemoryRouter>
          <nav className="mb-4 space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MemoryRouter>

        <p className="mt-3 text-gray-600">
          Use: Testing applications.
        </p>
      </div>

      <div className="rounded bg-white p-5 shadow">
        <h2 className="mb-3 text-xl font-bold">3. StaticRouter</h2>
        <h3 className="text-purple-600">About Page</h3>

        <p className="mt-3 text-gray-600">
          Use: Server-side rendering.
        </p>
      </div>
    </div>
  );
}

export default App;