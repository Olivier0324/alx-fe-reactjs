import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>
        {recipe.title}
        <FavoriteButton recipeId={recipe.id} />
      </h1>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;
