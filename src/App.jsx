import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Blog'
import Projects from './pages/Projects'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/blog"
          element={<Post />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;