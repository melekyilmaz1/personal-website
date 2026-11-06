import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  return (
    <header className="flex justify-between items-center py-1 select-none">
      {/* Sol Menü Bağlantıları */}
      <nav className="flex items-center gap-6">
        <a
          href="#skills"
          className="text-gray-500 dark:text-gray-400 hover:text-[#4731B6] dark:hover:text-[#8F88FF] text-xs font-semibold"
        >
          {lang === "tr" ? "Yetenekler" : "Skills"}
        </a>
        <a
          href="#projects"
          className="text-gray-500 dark:text-gray-400 hover:text-[#4731B6] dark:hover:text-[#8F88FF] text-xs font-semibold"
        >
          {lang === "tr" ? "Projeler" : "Projects"}
        </a>
        <a
          href="mailto:meleky2307@gmail.com"
          className="px-3 py-1 rounded border border-[#3730A3] dark:border-[#8F88FF] text-[#3730A3] dark:text-[#8F88FF] text-xs font-bold hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#8F88FF] dark:hover:text-[#171026] transition-all"
        >
          {lang === "tr" ? "Bana Ulaş" : "Hire me"}
        </a>
      </nav>

      {/* Sağ Switch ve Dinamik Dil Butonu */}
      <div className="flex items-center gap-3 text-[11px] font-bold tracking-wider">
        <button
          onClick={toggleTheme}
          type="button"
          className="flex items-center gap-1.5 cursor-pointer text-gray-600 dark:text-gray-300"
          aria-label="Toggle Theme"
        >
          <span
            className={`w-8 h-4 flex items-center rounded-full p-0.5 duration-300 transition-colors ${
              isDark ? "bg-[#4731B6] justify-end" : "bg-gray-300 justify-start"
            }`}
          >
            <span className="bg-[#FFE86E] w-3 h-3 rounded-full shadow-md" />
          </span>
          <span className="uppercase">
            {isDark
              ? lang === "tr"
                ? "AYDINLIK MOD"
                : "LIGHT MODE"
              : lang === "tr"
              ? "KARANLIK MOD"
              : "DARK MODE"}
          </span>
        </button>

        <span className="text-gray-300 dark:text-gray-600">|</span>

        {/* Dil Butonu: Türkçe iken İngilizce'ye geçiş, İngilizce iken Türkçe'ye geçiş */}
        <button
          onClick={toggleLang}
          type="button"
          className="text-[#4731B6] dark:text-[#8F88FF] uppercase tracking-wider font-extrabold hover:underline"
        >
          {lang === "tr" ? "ENGLISH'E GEÇ" : "TÜRKÇE'YE GEÇ"}
        </button>
      </div>
    </header>
  );
}