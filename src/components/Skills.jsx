import { useLang } from "../context/LangContext";

export default function Skills() {
  const { content } = useLang();

  return (
    <section id="skills" className="py-6 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] mb-6">
        {content.skills.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {content.skills.list.map((skill, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-base font-bold text-[#4338CA]">
              {skill.name}
            </h3>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}