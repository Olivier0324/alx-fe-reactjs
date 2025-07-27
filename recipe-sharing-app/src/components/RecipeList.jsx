import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => {
    const searchTerm = state.searchTerm?.toLowerCase();
    return searchTerm
      ? state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchTerm)
        )
      : state.recipes;
  });

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', margin: '1rem 0', padding: '1rem' }}>
            <h3>
              {recipe.title}
              <FavoriteButton recipeId={recipe.id} />
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
