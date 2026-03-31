import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import bg from "./assets/bg.png";

function App() {
  return (
    <div className="min-h-screen py-12 px-6 md:px-16 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="mx-auto">
        <Header />
        <RecipeList />
      </div>
    </div>
  );
}

export default App;