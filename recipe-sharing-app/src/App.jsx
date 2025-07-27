import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper'; // wraps RecipeDetails to extract route param

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <SearchBar />
        <RecipeList />
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
