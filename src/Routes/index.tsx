import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}