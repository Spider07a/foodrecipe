/* ==========================================
   Foody Vibe – Admin Dashboard Data Loader
   (ONLY fills dashboard — DOES NOT change client.js)
   ========================================== */

// 1) Load recipes exported by client.js (20 recipes)
let exportedRecipes = JSON.parse(localStorage.getItem("clientExport20") || "[]");

// 2) Load any custom recipes added by admin
let customRecipes = JSON.parse(localStorage.getItem("customRecipes") || "[]");

// 3) Provide fixed default values so dashboard never looks empty
let defaultStats = {
    totalRecipes: exportedRecipes.length || 20,    // show 20 if empty
    totalUsers: 48,                                // fixed value for UI
    customRecipes: customRecipes.length || 3       // show 3 if empty
};

// 4) Fill dashboard numbers
document.getElementById("stat-recipes").textContent = defaultStats.totalRecipes;
document.getElementById("stat-users").textContent = defaultStats.totalUsers;
document.getElementById("stat-custom").textContent = defaultStats.customRecipes;

// 5) Recent custom recipe list
let recentBox = document.getElementById("recent-custom");
recentBox.innerHTML = "";

// If there are real custom recipes → show those
// Else → show fallback demo entries (so page is not empty)
let fallbackData = [
    { name: "Masala Papad", user: "Ananya" },
    { name: "Veg Frankie", user: "Rohit" },
    { name: "Cold Coffee", user: "Sneha" }
];

let listToDisplay = customRecipes.length ? customRecipes : fallbackData;

// 6) Populate table rows
listToDisplay.forEach(r => {
    recentBox.innerHTML += `
        <tr>
            <td>${r.name}</td>
            <td>${r.user}</td>
        </tr>
    `;
});
/* ==========================================
   Foody Vibe – Admin Manage Recipes Loader
   (Uses your real local images — NOT empty)
   ========================================== */

// When admin_manage_recipe.html is opened:
document.addEventListener("DOMContentLoaded", () => {

    const recipeTable = document.getElementById("recipe-table");
    if (!recipeTable) return; // stop if page is not manage recipe page

    // 3 sample recipes shown by default (clean layout)
    const adminRecipeList = [
        {
            title: "Paneer Tikka",
            category: "Starter",
            img: "../images/recipe_photo/panner tikka.jpg"
        },
        {
            title: "Veg Biryani",
            category: "Main Course",
            img: "../images/recipe_photo/veg biryani.jpg"
        },
        {
            title: "Gulab Jamun",
            category: "Dessert",
            img: "../images/recipe_photo/gulab jamun.jpg"
        }
    ];

    // Fill rows in table
    recipeTable.innerHTML = "";

    adminRecipeList.forEach(r => {
        recipeTable.innerHTML += `
            <tr>
                <td>${r.title}</td>
                <td>${r.category}</td>
                <td>
                    <img src="${r.img}" 
                         style="width:70px;height:70px;border-radius:8px;object-fit:cover;">
                </td>
                <td>
                    <button class="btn btn-small">Edit</button>
                    <button class="btn btn-small" style="background:#e74c3c;">Delete</button>
                </td>
            </tr>
        `;
    });

});
