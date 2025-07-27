import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  );
}

// Wrapper to extract the recipe ID from the URL param and pass it as a prop
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;
