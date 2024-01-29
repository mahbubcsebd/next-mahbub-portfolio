"use client"

import { useContext } from "react";
import { bnNavLinks } from "../../public/locales/bn/common";
import { enNavLinks } from "../../public/locales/en/common";
import LanguageContext from "../contexts/LanguageContext";
import ThemeMode from "./globals/ThemeMode";




const Navbar = () => {
    const context = useContext(LanguageContext);
    const { language, languageHandler } = context;

    const myNav = language === 'bn' ? bnNavLinks : enNavLinks;

  return (
      <div className="bg-primary-0 dark:bg-black">
          <div className="container">
              <div className="py-12 flex justify-between items-center">
                  <div>
                      <a
                          href="#home"
                          className={`text-black font-bold text-3xl dark:text-primary-main ${
                              language === 'bn' ? 'font-hindSiliguri' : 'font-ubuntu'
                          }`}
                      >
                          {language === 'bn' ? 'মাহবুব' : 'Mahbub'}
                      </a>
                  </div>
                  <div>
                      <ul className="flex items-center gap-8">
                          {myNav.map((navLink) => {
                              const { id, name } = navLink;
                              return (
                                  <li key={id}>
                                      <a
                                          href={`#${name}`}
                                          className="text-lg text-black font-normal capitalize   dark:text-primary-main"
                                      >
                                          {name}
                                      </a>
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
                  <div className="flex gap-4">
                      <button
                          type="button"
                          className="text-lg text-white px-[30px] py-4 rounded-sm bg-primary-main"
                      >
                          {language === 'bn' ? 'চলুন কথা বলি' : "Let's Talk"}
                      </button>
                      <button
                          type="button"
                          onClick={languageHandler}
                          className="text-lg text-white px-[30px] py-4 rounded-sm bg-primary-main"
                      >
                          {language === 'bn' ? 'English' : 'বাংলা'}
                      </button>
                      <ThemeMode />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Navbar