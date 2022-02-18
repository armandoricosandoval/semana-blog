import { AuthProvider } from "./firebase/contexts/AuthContext";
import AppRouter from "./routers/AppRouter";

//por tiempo no alcance, pero la idea es tener el authProvider o temas de authenticacion token o demas

function App() {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  );
}

export default App;
