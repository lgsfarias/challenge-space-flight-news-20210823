import { useContext } from 'react';
import { ThemeContext } from '../contexts';

export default function useThemeContext() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useAuth must be used inside a CompanyContext Provider');
  }

  return themeContext;
}
