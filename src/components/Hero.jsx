import { useLang } from "../context/LangContext";
import profilFoto from "../assets/IMG_7151.JPG";

export default function Hero() {
  const { content } = useLang();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 pt-2">
      {/* Sol Metin Alanı */}
      <div className="w-full md:w-7/12 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-[1.5px] bg-[#3730A3]" />
          <span className="text-xs font-bold tracking-wider text-[#3730A3]">
            {content.hero.name}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1F2937] leading-tight tracking-tight">
          {content.hero.title}
        </h1>

        <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-lg">
          {content.hero.description}
        </p>

        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <a
            href={`mailto:${content.footer.email}`}
            className="px-5 py-2 rounded-md bg-[#3730A3] text-white text-xs font-semibold hover:bg-[#2e2888] shadow-sm transition-colors"
          >
            {content.hero.hireMe}
          </a>
          <a
            href={content.footer.links.find((l) => l.label.toLowerCase().includes("git"))?.url || "https://github.com/melekyilmaz1?tab=repositories"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-md border border-[#3730A3] text-[#3730A3] text-xs font-semibold hover:bg-gray-50 transition-colors"
          >
            Github
          </a>
          <a
            href={content.footer.links.find((l) => l.label.toLowerCase().includes("link"))?.url || "https://www.linkedin.com/in/melek-yilmaz02"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-md border border-[#3730A3] text-[#3730A3] text-xs font-semibold hover:bg-gray-50 transition-colors"
          >
            <span className="font-extrabold text-[#0A66C2]">in</span>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Sağ Resim Kutusu */}
      <div className="w-full md:w-5/12 flex justify-center md:justify-end">
        <div className="w-56 h-60 md:w-60 md:h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
          <img
            src={profilFoto}
            alt={content.hero.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}