import { useLang } from "../context/LangContext";

export default function Projects() {
  const { content } = useLang();

  return (
    <section id="projects" className="py-2 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-base md:text-lg font-bold text-[#1F2937] dark:text-white mb-3">
        {content.projects.title}
      </h2>

      {/* 4 kart tek satırda yan yana */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-stretch">
        {content.projects.list.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E293B] shadow-xs"
          >
            {/* Küçük görsel */}
            <div className="w-full h-24 overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-2.5 flex flex-col flex-grow">
              <h3 className="text-xs font-bold text-[#4338CA] dark:text-[#7B61FF] mb-1.5 leading-snug">
                {project.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-[10px] leading-snug mb-3 flex-grow">
                {project.description}
              </p>

              {/* Etiketler */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-1.5 py-0.5 rounded border border-[#3730A3] dark:border-[#7B61FF] text-[#3730A3] dark:text-[#7B61FF] text-[8px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Alt bağlantılar: viewSite varsa iki yana yaslar, yoksa sadece Github'ı sola hizalar */}
              <div className={`flex items-center text-[10px] font-bold underline mt-auto pt-1 ${project.viewSite ? "justify-between" : "justify-start"}`}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-900 dark:text-white hover:text-[#4338CA]"
                >
                  {content.projects.github}
                </a>

                {/* Yalnızca viewSite tanımlıysa Siteyi Gör butonunu göster */}
                {project.viewSite && (
                  <a
                    href={project.viewSite}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-900 dark:text-white hover:text-[#4338CA]"
                  >
                    {content.projects.viewSite}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}