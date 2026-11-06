import { useLang } from "../context/LangContext";

export default function Profile() {
  const { content } = useLang();
  const { profile } = content;

  return (
    <section className="py-8 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] mb-6">
        {profile.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Sol Kolon: Temel Bilgiler */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#4338CA]">
            {profile.basicTitle}
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 w-28 shrink-0">
                {profile.labels.birthDate}
              </span>
              <span className="text-gray-800 font-medium">
                {profile.values.birthDate}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 w-28 shrink-0">
                {profile.labels.city}
              </span>
              <span className="text-gray-800 font-medium">
                {profile.values.city}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 w-28 shrink-0">
                {profile.labels.education}
              </span>
              <span className="text-gray-800 font-medium">
                {profile.values.education}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 w-28 shrink-0">
                {profile.labels.role}
              </span>
              <span className="text-gray-800 font-medium">
                {profile.values.role}
              </span>
            </div>
          </div>
        </div>

        {/* Sağ Kolon: Hakkımda */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#4338CA]">
            {profile.aboutTitle}
          </h3>
          {profile.aboutParagraphs.map((par, i) => (
            <p
              key={i}
              className="text-gray-800 font-normal text-xs md:text-sm leading-relaxed"
            >
              {par}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}