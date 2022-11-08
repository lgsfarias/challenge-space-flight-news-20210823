import { ThemeContextProvider } from "./contexts"
import AppRoutes from "./routes"

function App() {

  return (
    <ThemeContextProvider>
      <AppRoutes/>
    </ThemeContextProvider>
  )
}

export default App
