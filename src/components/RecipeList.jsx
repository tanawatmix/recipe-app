import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  const recipes = [
    {
      id: 1,
      title: "Noodle",
      time: "20 mins",
      servings: "1 servings",
      image: "/foodImgs/noodle.jpg",
    },
    {
      id: 2,
      title: "eggfriedrice",
      time: "30 mins",
      servings: "2 servings",
      image: "/foodImgs/eggfriedrice.jpg",
    },
    {
      id: 3,
      title: "papayasalad",
      time: "15 mins",
      servings: "3 servings",
      image: "/foodImgs/papayasalad.jpg",
    },
    {
      id: 4,
      title: "Fried chicken",
      time: "25 mins",
      servings: "2 servings",
      image: "/foodImgs/Fried chicken.jpg",
    },
    {
      id: 5,
      title: "Tom Yum Goong",
      time: "40 mins",
      servings: "4 servings",
      image: "/foodImgs/tom-yum-goong.jpg",
    },
    {
      id: 6,
      title: "Noodle",
      time: "20 mins",
      servings: "1 servings",
      image: "/foodImgs/noodle.jpg",
    },
    {
      id: 7,
      title: "eggfriedrice",
      time: "30 mins",
      servings: "2 servings",
      image: "/foodImgs/eggfriedrice.jpg",
    },
    {
      id: 8,
      title: "papayasalad",
      time: "15 mins",
      servings: "3 servings",
      image: "/foodImgs/papayasalad.jpg",
    },
    {
      id: 9,
      title: "Fried chicken",
      time: "25 mins",
      servings: "2 servings",
      image: "/foodImgs/Fried chicken.jpg",
    },
    {
      id: 10,
      title: "Tom Yum Goong",
      time: "40 mins",
      servings: "4 servings",
      image: "/foodImgs/tom-yum-goong.jpg",
    },
  ];

return (
    <div 
        className="flex overflow-x-auto gap-6 pb-10 pt-4 px-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onWheel={(e) => {
            e.preventDefault();
            e.currentTarget.scrollLeft += e.deltaY;
        }}
    >
        {recipes.map((recipe) => (
            <RecipeCard
                key={recipe.id}
                title={recipe.title}
                time={recipe.time}
                servings={recipe.servings}
                image={recipe.image}
            />
        ))}
    </div>
);
}
