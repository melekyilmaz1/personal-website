import { useLang } from "../context/LangContext";
import profilFoto from "../assets/IMG_7151.JPG";

export default function Footer() {
  const { content } = useLang();

  return (
    <footer className="pt-16 pb-8 relative border-t border-gray-200">
      {/* Ortadaki Mini Avatar Rozeti */}
      <div className="flex justify-center -mt-24 mb-8">
        <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={profilFoto}
            alt="Profile Avatar"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] max-w-sm leading-tight">
          {content.footer.cta}
        </h2>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">👉</span>
            <a
              href={`mailto:${content.footer.email}`}
              className="text-[#AF0C48] text-sm md:text-base font-bold underline underline-offset-4"
            >
              {content.footer.email}
            </a>
          </div>

          <div className="flex gap-5 text-xs font-semibold">
            {content.footer.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-[#1F2937] hover:text-[#4338CA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}