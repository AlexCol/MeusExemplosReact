import "./App.css";
import { LangsList } from "./translations/types/estrutura";
import { dicionario, formatTranslation } from "./translations";
import { useTradContext } from "./context/TradContext";

function App() {
  const { lang, setLang, dicionarioLoaded } = useTradContext();

  if (!dicionarioLoaded) {
    return <div>Carregando dicionário...</div>;
  }

  return (
    <div>
      {LangsList.map((language) => (
        <button
          key={language}
          onClick={() => setLang(language)}
        >
          {language}
        </button>
      ))}

      <div>Idioma selecionado: {lang}</div>

      <div>{dicionario[lang].usuarios["Bem-vindo, {{name}}"]}</div>
      <div>{formatTranslation(dicionario[lang].usuarios["Bem-vindo, {{name}}"], { name: "Pedro" })}</div>
      <div>{dicionario[lang].usuarios["nova chave"]}</div>
    </div>
  );
}

export default App;
