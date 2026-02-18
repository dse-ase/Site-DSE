import { DarkModeProvider } from './contexts/DarkModeContext';
import { Router } from './router';

export default function App() {
  return (
    <DarkModeProvider>
      <Router />
    </DarkModeProvider>
  );
}