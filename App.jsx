import Clienti from "./pages/clienti";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestionale WAIP</h1>
      <p className="mb-6">Benvenuto! Il gestionale è online.</p>

      {/* Qui inseriamo la pagina clienti */}
      <Clienti />
    </div>
  );
}

export default App;
