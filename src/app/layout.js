"use client"

import LanguageContext from "@/contexts/LanguageContext";
import { useState } from "react";
import "./globals.css";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Mahbubur Rahman",
//   description: "Mahbubur Rahman Portfolio Website",
// };

export default function RootLayout({ children }) {
  const [language, setLanguage] = useState('en');

  const languageHandler = () => {
    if(language === 'en'){
      setLanguage('bn');
    }
    if(language === 'bn'){
      setLanguage('en');
    }
  }
  return (
      <html lang="en">
          <body className={`${language === 'bn' ? 'font-hindSiliguri' : 'font-ubuntu'} dark`}>
              <LanguageContext.Provider value={{ language, languageHandler}}>
                  {children}
              </LanguageContext.Provider>
          </body>
      </html>
  );
}
