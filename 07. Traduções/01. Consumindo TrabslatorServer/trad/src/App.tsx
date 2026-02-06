import "./App.css";
import { LangsList } from "./translations/types/estrutura";
import { dicionario, formatTranslation } from "./translations";
import { useTradContext } from "./context/TradContext";

function App() {
  const { lang, setLang, getLangName, dicionarioLoaded } = useTradContext();

  if (!dicionarioLoaded) {
    return <div className="loading">Carregando dicionário...</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Exemplo de Traduções</h1>
        <p className="subtitle">Visualização das chaves e exemplos de substituição</p>
      </header>

      <section className="controls">
        <div className="lang-list">
          {LangsList.map((language) => (
            <button
              key={language}
              className={"lang-button " + (language === lang ? "active" : "")}
              onClick={() => setLang(language)}
            >
              {getLangName(language)}
            </button>
          ))}
        </div>
        <div className="selected">
          Idioma: <strong>{getLangName(lang)}</strong>
        </div>
      </section>

      <main className="cards">
        <div className="card">
          <h2>Traduções — Usuários</h2>

          <div className="row">
            <div className="label">{dicionario["pt-BR"].usuarios["Bem-vindo, {{name}}"]}</div>
            <div className="value">{dicionario[lang].usuarios["Bem-vindo, {{name}}"]}</div>
            <div className="example">Ex.: {formatTranslation(dicionario[lang].usuarios["Bem-vindo, {{name}}"], { name: "Pedro" })}</div>
          </div>

          <div className="row">
            <div className="label">{dicionario["pt-BR"].usuarios["Minha Super Chave"]}</div>
            <div className="value">{dicionario[lang].usuarios["Minha Super Chave"]}</div>
            <div className="example">Ex.: {dicionario[lang].usuarios["Minha Super Chave"]}</div>
          </div>

          {/* <div className="row">
            <div className="label">{dicionario["pt-BR"]["usuarios"]["Minha Nova Chave"]}</div>
            <div className="value">{dicionario[lang]["usuarios"]["Minha Nova Chave"]}</div>
            <div className="example">Ex.: {dicionario[lang]["usuarios"]["Minha Nova Chave"]}</div>
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default App;
