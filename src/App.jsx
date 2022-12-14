import Calculadora from "./components/Calculadora/calculadora"
import AppProvider from "./context/context"

function App() {

  return (
    <AppProvider>
      <Calculadora/>
    </AppProvider>
  )
}

export default App