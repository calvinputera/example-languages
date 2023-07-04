// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Headers from "./components/Headers";
import { useState } from "react";

function App() {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
    localStorage.setItem("locale", e.target.value);
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={currentLocale}
    >
      <Headers currentLocale={currentLocale} handleChange={handleChange} />
      <br />
      <Card />
    </IntlProvider>
  );
}

export default App;
