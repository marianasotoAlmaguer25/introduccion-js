

// 1. Array to store recipes
let recipes = [
    {
        nombre: "Pizza Margarita",
        ingredientes: ["harina", "tomate", "queso mozzarella"],
        pasos: ["Mezclar ingredientes", "Hornear"],
        categoria: "Main Dish",
        imagen: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=500"
    }
];

// 2. Select Elements
const recipeForm = document.getElementById('recipe-form');
const recipeList = document.getElementById('recipe-list');
const searchInput = document.getElementById('search-input');

// 3. Function to Display Recipes
function displayRecipes(filteredRecipes) {
    recipeList.innerHTML = ''; // Clear current list

    filteredRecipes.forEach((recipe, index) => {
        const card = `
            <div class="col">
                <div class="card h-100 shadow-sm border-0 position-relative">
                    <button class="btn btn-danger btn-sm btn-delete" onclick="deleteRecipe(${index})">X</button>
                    <img src="${recipe.imagen}" class="card-img-top recipe-img" alt="${recipe.nombre}">
                    <div class="card-body">
                        <span class="badge bg-info text-dark mb-2">${recipe.categoria}</span>
                        <h5 class="card-title fw-bold">${recipe.nombre}</h5>
                        <p class="card-text"><strong>Ingredients:</strong> ${recipe.ingredientes.join(', ')}</p>
                        <p class="card-text"><strong>Steps:</strong> ${recipe.pasos.join(' -> ')}</p>
                    </div>
                </div>
            </div>
        `;
        recipeList.innerHTML += card;
    });
}

// 4. Function to Add Recipe
recipeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Create New Object
    const newRecipe = {
        nombre: document.getElementById('name').value,
        ingredientes: document.getElementById('ingredients').value.split(','),
        pasos: document.getElementById('steps').value.split(','),
        categoria: document.getElementById('category').value,
        imagen: document.getElementById('image-url').value
    };

    recipes.push(newRecipe); // Add to Array
    recipeForm.reset();      // Clear Form
    displayRecipes(recipes); // Update DOM
});

// 5. Function to Delete Recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes(recipes);
}

// 6. Search Functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = recipes.filter(r =>
        r.nombre.toLowerCase().includes(term) ||
        r.categoria.toLowerCase().includes(term)
    );
    displayRecipes(filtered);
});

// Initial Render
displayRecipes(recipes);