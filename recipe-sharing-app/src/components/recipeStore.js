import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecipeStore = create(persist(
    (set, get) => ({
        recipes: [],
        searchTerm: '',
        favorites: [],
        recommendations: [],

        // Standard actions
        setSearchTerm: (term) => set({ searchTerm: term }),

        addRecipe: (newRecipe) =>
            set((state) => ({ recipes: [...state.recipes, newRecipe] })),

        updateRecipe: (updatedRecipe) =>
            set((state) => ({
                recipes: state.recipes.map((recipe) =>
                    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
                ),
            })),

        deleteRecipe: (id) =>
            set((state) => ({
                recipes: state.recipes.filter((recipe) => recipe.id !== id),
                favorites: state.favorites.filter((favId) => favId !== id), // cleanup
            })),

        // Favorites
        addFavorite: (recipeId) =>
            set((state) => ({
                favorites: state.favorites.includes(recipeId)
                    ? state.favorites
                    : [...state.favorites, recipeId],
            })),

        removeFavorite: (recipeId) =>
            set((state) => ({
                favorites: state.favorites.filter((id) => id !== recipeId),
            })),

        // Recommendations (simple mock)
        generateRecommendations: () => {
            const state = get();
            const favTags = state.favorites
                .map((id) => state.recipes.find((r) => r.id === id))
                .flatMap((r) => (r?.tags || []));

            const recommended = state.recipes.filter((r) =>
                favTags.some((tag) => r.tags?.includes(tag))
            );

            set({ recommendations: recommended });
        },
    }),
    {
        name: 'recipe-storage',
    }
));
