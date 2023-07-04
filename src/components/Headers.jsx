import React from "react";
import { LOCALES } from "../i18n/locales";

const Headers = ({ currentLocale, handleChange }) => {
  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Japanese", code: LOCALES.JAPANESE }
  ];

  return (
    <>
      <select value={currentLocale} onChange={handleChange}>
        {languages.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Headers;
