import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Exemple } from "./components/exemple";

function App() {
  // useState garante a mesma instância entre re-renders, senão o cache seria perdido a cada render
  const [queryClient] = useState(() => new QueryClient());
  const [showExemple, setShowExemple] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShowExemple((prev) => !prev)}>{showExemple ? "Desmontar" : "Montar"} Exemple</button>
      {showExemple && <Exemple />}
    </QueryClientProvider>
  );
}

export default App;
