import { createContext, useContext, useEffect, useState } from "react";
import type { Langs } from "../translations/types/estrutura";
import { loadDicionario } from "../translations";

//*************************************************************
//* Tipagens para o contexto
//*************************************************************
function useTradProvider() {
  const [lang, setLang] = useState<Langs>("en");
  const [dicionarioLoaded, setDicionarioLoaded] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      await loadDicionario();
      setLang("pt-BR");
      setDicionarioLoaded(true);
    };
    fetch();
  }, []);

  return { lang, setLang, dicionarioLoaded };
}
export type TradContextType = ReturnType<typeof useTradProvider>;

//*************************************************************
//* Criando o contexto, com base no tipo acima
//*************************************************************
//! mantem privado pra forçar o uso de useTradContext
const TradContext = createContext<TradContextType | undefined>(undefined);

//*************************************************************
//* Componente Provider do contexto (onde são iniciadas as
//* variáveis de estado e as funções que serão passadas no value)
//* E então passadas no value para serem usadas pelos componentes filhos
//*************************************************************
export function TradProvider({ children }: { children: React.ReactNode }) {
  const trad = useTradProvider();
  return <TradContext.Provider value={trad}>{children}</TradContext.Provider>;
}

//*************************************************************
//* Wrappers para o contexto, de modo que não precise ser chamado
//* useContext([name]Context) diretamente. Mas sim 'use' abaixo
//* que já faz a verificação de undefined e retorna o contexto
//*************************************************************
export function useTradContext() {
  const context = useContext(TradContext);
  if (context === undefined) {
    throw new Error("useTrad must be used within a TradProvider");
  }
  return context;
}
