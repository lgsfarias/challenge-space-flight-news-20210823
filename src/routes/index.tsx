import { Button } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import useThemeContext from '../hooks/useThemeContext';


export default function AppRoutes() {
  const {toggleTheme} = useThemeContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Button variant="contained" onClick={toggleTheme}>Toggle Theme</Button>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}