export default function RecipeCard({ title, time, servings, image }) {
  return (
    <div className="relative w-[220px] sm:w-[250px] lg:w-[280px] h-[320px] sm:h-[400px] shrink-0 rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white snap-center">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>

      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 text-white flex flex-col group-hover:items-center group-hover:text-center transform transition-transform duration-500">
        <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
          {time}
          <span>|</span>
          {servings}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-red-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full font-bold">
          View Recipe
        </div>
      </div>
    </div>
  );
}
