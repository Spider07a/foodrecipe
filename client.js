// client/client.js
// Full client-side logic: 20 vegetarian recipes, placeholder images, auth, save for later, validations

// helper: placeholder images (picsum seed by id)
function placeholderImage(id, w = 800, h = 500) {
    return `https://picsum.photos/seed/${encodeURIComponent(id)}/${w}/${h}`;
}

// 20 vegetarian recipes
const RECIPES = {

    /* ----------- STARTERS ----------- */
    samosa: {
        id: "samosa",
        title: "Samosa",
        category: "Starter",
        // Path corrected: uses samosa.jpg
        img: "images/recipe_photo/samosa.jpg",
        ingredients: ["Potatoes", "Peas", "Flour", "Spices"],
        steps: ["Prepare dough", "Make filling", "Shape triangles", "Deep fry"]
    },

    masala_papad: {
        id: "masala_papad",
        title: "Masala Papad",
        category: "Starter",
        // Path corrected: Fixed typo 'papaad' to 'papad'
        img: "images/recipe_photo/masala papad.jpg",
        ingredients: ["Papad", "Onion", "Tomato", "Spices"],
        steps: ["Roast papad", "Mix topping", "Assemble and serve"]
    },

    paneer_tikka: {
        id: "paneer_tikka",
        title: "Paneer Tikka",
        category: "Starter",
        // Path corrected: uses panner tikka.jpg
        img: "images/recipe_photo/panner tikka.jpg",
        ingredients: ["Paneer", "Yogurt", "Spices"],
        steps: ["Marinate paneer", "Skewer", "Grill"]
    },

    veg_seekh_kebab: {
        id: "veg_seekh_kebab",
        title: "Veg Seekh Kebab",
        category: "Starter",
        // Path corrected: uses seekh kebaba.jpg
        img: "images/recipe_photo/seekh kebaba.jpg",
        ingredients: ["Veggies", "Spices", "Besan"],
        steps: ["Mix ingredients", "Shape skewers", "Cook"]
    },

    kachori: {
        id: "kachori",
        title: "Kachori",
        category: "Starter",
        // Path corrected: uses kachori.jpg
        img: "images/recipe_photo/kachori.jpg",
        ingredients: ["Flour", "Urad dal", "Spices"],
        steps: ["Make dough", "Prepare filling", "Shape", "Deep fry"]
    },

    /* ----------- MAIN COURSE ----------- */

    aloo_gobi: {
        id: "aloo_gobi",
        title: "Aloo Gobi",
        category: "Main Course",
        // Path corrected: uses aloo gobi.jpg
        img: "images/recipe_photo/aloo gobi.jpg",
        ingredients: ["Potatoes", "Cauliflower", "Spices"],
        steps: ["Sauté veggies", "Cook till soft", "Serve"]
    },

    chole_bhature: {
        id: "chole_bhature",
        title: "Chole Bhature",
        category: "Main Course",
        // Path corrected: uses chole bhature.jpg
        img: "images/recipe_photo/chole bhature.jpg",
        ingredients: ["Chickpeas", "Onion", "Tomato", "Flour"],
        steps: ["Cook chole", "Make bhature dough", "Fry and serve"]
    },

    dal_tadka: {
        id: "dal_tadka",
        title: "Dal Tadka",
        category: "Main Course",
        // Path corrected: uses dal tadka.jpg
        img: "images/recipe_photo/dal tadka.jpg",
        ingredients: ["Dal", "Ghee", "Spices"],
        steps: ["Pressure cook dal", "Prepare tadka", "Mix and serve"]
    },

    matar_paneer: {
        id: "matar_paneer",
        title: "Matar Paneer",
        category: "Main Course",
        // Path corrected: uses matar panner.jpg
        img: "images/recipe_photo/matar panner.jpg",
        ingredients: ["Paneer", "Peas", "Masala"],
        steps: ["Make gravy", "Add paneer & peas", "Cook"]
    },

    palak_paneer: {
        id: "palak_paneer",
        title: "Palak Paneer",
        category: "Main Course",
        // Path corrected: uses palak panner.jpg
        img: "images/recipe_photo/palak panner.jpg",
        ingredients: ["Spinach", "Paneer", "Garlic"],
        steps: ["Blanch spinach", "Blend", "Cook paneer"]
    },

    shahi_paneer: {
        id: "shahi_paneer",
        title: "Shahi Paneer",
        category: "Main Course",
        // Path corrected: uses sahi panner.jpg
        img: "images/recipe_photo/sahi panner.jpg",
        ingredients: ["Paneer", "Cream", "Cashew"],
        steps: ["Prepare gravy", "Add paneer", "Simmer"]
    },

    veg_biryani: {
        id: "veg_biryani",
        title: "Veg Biryani",
        category: "Main Course",
        // Path corrected: was 'biryani.jpg', now 'veg biryani.jpg'
        img: "images/recipe_photo/veg biryani.jpg",
        ingredients: ["Rice", "Veggies", "Spices"],
        steps: ["Cook rice", "Layer", "Dum cook"]
    },

    thali: {
        id: "thali",
        title: "Indian Veg Thali",
        category: "Main Course",
        // Path corrected: uses thali.jpg
        img: "images/recipe_photo/thali.jpg",
        ingredients: ["Rice", "Dal", "Veggies", "Roti"],
        steps: ["Prepare all dishes", "Serve together"]
    },

    /* ----------- DESSERTS ----------- */

    gulab_jamun: {
        id: "gulab_jamun",
        title: "Gulab Jamun",
        category: "Dessert",
        // Path corrected: uses gulab jamun.jpg
        img: "images/recipe_photo/gulab jamun.jpg",
        ingredients: ["Khoya", "Sugar Syrup"],
        steps: ["Make dough", "Fry balls", "Soak in syrup"]
    },

    besan_ladoo: {
        id: "besan_ladoo",
        title: "Besan Ladoo",
        category: "Dessert",
        // Path corrected: uses besan ladoo.jpg
        img: "images/recipe_photo/besan ladoo.jpg",
        ingredients: ["Besan", "Ghee", "Sugar"],
        steps: ["Roast besan", "Add ghee", "Shape ladoos"]
    },

    rasgulla: {
        id: "rasgulla",
        title: "Rasgulla",
        category: "Dessert",
        // Path corrected: uses rasgulla.jpg
        img: "images/recipe_photo/rasgulla.jpg",
        ingredients: ["Chenna", "Sugar Syrup"],
        steps: ["Make chenna", "Shape balls", "Boil in syrup"]
    },

    kulfi_falooda: {
        id: "kulfi_falooda",
        title: "Kulfi Falooda",
        category: "Dessert",
        // Path corrected: uses kulfi falooda.jpg
        img: "images/recipe_photo/kulfi falooda.jpg",
        ingredients: ["Kulfi", "Falooda", "Rose Syrup"],
        steps: ["Boil falooda", "Add kulfi", "Garnish"]
    }
};


// helper: current user stored in sessionStorage
function getCurrentUser() { return JSON.parse(sessionStorage.getItem('currentUser') || 'null'); }
function setCurrentUser(u) { if (u) sessionStorage.setItem('currentUser', JSON.stringify(u)); else sessionStorage.removeItem('currentUser'); }

// notification
function showNotification(text) {
    const n = document.createElement('div'); n.className = 'notification'; n.textContent = text; document.body.appendChild(n);
    requestAnimationFrame(() => { n.style.opacity = '1'; n.style.transform = 'translateY(0)'; });
    setTimeout(() => { n.style.opacity = '0'; n.style.transform = 'translateY(-10px)'; setTimeout(() => n.remove(), 300); }, 2800);
}

// render user area in header
function renderUserArea() {
    const ua = document.getElementById('user-area'); if (!ua) return;
    const u = getCurrentUser();
    if (u) {
        ua.innerHTML = `<span style="color:#fff;margin-right:10px;">Hi, ${u.name}</span><button id="logout-btn" class="btn secondary">Logout</button>`;
        document.getElementById('logout-btn').onclick = () => { setCurrentUser(null); sessionStorage.removeItem('welcomeShown'); showNotification('Logged out'); window.location.href = 'index.html'; };
        if (!sessionStorage.getItem('welcomeShown')) { showNotification(`Welcome, ${u.name}!`); sessionStorage.setItem('welcomeShown', '1'); }
    } else {
        ua.innerHTML = `<a class="btn" href="login.html">Login</a> <a style="margin-left:8px;color:#fff;text-decoration:underline;" href="signup.html">Sign up</a>`;
    }
}

// save for user
function getSavedForUser(email) { if (!email) return []; return JSON.parse(localStorage.getItem(`saved_${email}`) || '[]'); }
function toggleSaveForUser(email, recipeId) { if (!email) return null; const key = `saved_${email}`; const arr = JSON.parse(localStorage.getItem(key) || '[]'); const ix = arr.indexOf(recipeId); if (ix === -1) { arr.push(recipeId); localStorage.setItem(key, JSON.stringify(arr)); return true; } arr.splice(ix, 1); localStorage.setItem(key, JSON.stringify(arr)); return false; }

// create card
function makeRecipeCard(r) {
    const el = document.createElement('div'); el.className = 'card';
    el.innerHTML = `<img src="${r.img}" alt="${r.title}"><div class="card-body"><h3><a href="recipe_details.html?name=${r.id}">${r.title}</a></h3><div class="meta">${r.prep ? 'Prep: ' + r.prep + ' • ' : ''}${r.cook ? 'Cook: ' + r.cook + ' • ' : ''}${r.difficulty ? r.difficulty : ''}</div><p>${r.steps && r.steps[0] ? r.steps[0] : ''}</p><div style="display:flex;gap:8px;justify-content:center;margin-top:8px;"><a class="btn" href="recipe_details.html?name=${r.id}">View</a><button class="save-btn" data-id="${r.id}">Save</button></div></div>`;
    return el;
}

// wire save buttons
function wireUpSaveButtons() { const user = getCurrentUser(); const saved = user ? getSavedForUser(user.email) : []; document.querySelectorAll('.save-btn').forEach(btn => { const id = btn.dataset.id; if (saved.includes(id)) { btn.classList.add('saved'); btn.textContent = 'Saved'; } else { btn.classList.remove('saved'); btn.textContent = 'Save'; } btn.onclick = () => { if (!user) { alert('Please login to save recipes.'); window.location.href = 'login.html'; return; } const now = toggleSaveForUser(user.email, id); if (now) { btn.classList.add('saved'); btn.textContent = 'Saved'; showNotification('Saved for later'); } else { btn.classList.remove('saved'); btn.textContent = 'Save'; showNotification('Removed from saved'); } }; }); }

// render popular
function renderPopular() { const cont = document.getElementById('popular-grid'); if (!cont) return; cont.innerHTML = ''; const keys = Object.keys(RECIPES).slice(0, 6); keys.forEach(k => cont.appendChild(makeRecipeCard(RECIPES[k]))); wireUpSaveButtons(); }

// render all with filter
function renderAllRecipes(filter = 'all') { const cont = document.getElementById('recipes-list'); if (!cont) return; cont.innerHTML = ''; Object.keys(RECIPES).forEach(k => { const r = RECIPES[k]; if (filter !== 'all' && r.category !== filter) return; cont.appendChild(makeRecipeCard(r)); }); wireUpSaveButtons(); }

// recipe details
function renderRecipeDetailsFromQuery() { const el = document.getElementById('recipe-detail'); if (!el) return; const params = new URLSearchParams(location.search); const name = params.get('name'); if (!name || !RECIPES[name]) { el.innerHTML = '<p>Recipe not found.</p>'; return; } const r = RECIPES[name]; const user = getCurrentUser(); const saved = user ? getSavedForUser(user.email) : []; const isSaved = saved.includes(r.id); el.innerHTML = `<div class="card"><img src="${r.img}" alt="${r.title}"><div class="card-body"><h2>${r.title}</h2><div class="meta">Category: ${r.category} • Prep: ${r.prep || '-'} • Cook: ${r.cook || '-'} • ${r.difficulty || ''}</div><h4>Ingredients</h4><ul>${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul><h4>Steps</h4><ol>${r.steps.map(s => `<li>${s}</li>`).join('')}</ol><div style="margin-top:12px;"><button id="detail-save" class="save-btn ${isSaved ? 'saved' : ''}">${isSaved ? 'Saved' : 'Save'}</button></div></div></div>`; const btn = document.getElementById('detail-save'); if (btn) { btn.onclick = () => { if (!user) { alert('Please login to save recipes.'); window.location.href = 'login.html'; return; } const now = toggleSaveForUser(user.email, r.id); if (now) { btn.classList.add('saved'); btn.textContent = 'Saved'; showNotification('Saved for later'); } else { btn.classList.remove('saved'); btn.textContent = 'Save'; showNotification('Removed from saved'); } }; } }

// show saved recipes in list
function showSavedRecipesInList() { const user = getCurrentUser(); if (!user) { alert('Please login to view saved recipes.'); window.location.href = 'login.html'; return; } const arr = getSavedForUser(user.email); const cont = document.getElementById('recipes-list') || document.getElementById('popular-grid'); if (!cont) { window.location.href = 'recipes.html'; return; } cont.innerHTML = ''; if (arr.length === 0) { cont.innerHTML = '<p>No saved recipes yet.</p>'; return; } arr.forEach(id => { if (RECIPES[id]) cont.appendChild(makeRecipeCard(RECIPES[id])); }); wireUpSaveButtons(); }

// contact validation
function setupContactValidation() { const cf = document.getElementById('contact-form'); if (!cf) return; cf.addEventListener('submit', e => { e.preventDefault(); const name = document.getElementById('cname').value.trim(); const email = document.getElementById('cemail').value.trim(); const msg = document.getElementById('cmessage').value.trim(); const err = document.getElementById('contact-error'); err.textContent = ''; if (!name || !email || !msg) { err.textContent = 'All fields are required.'; return; } const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if (!re.test(email)) { err.textContent = 'Enter a valid email.'; return; } alert('Thanks — your message has been received (mock).'); cf.reset(); }); }

// signup validation
function setupSignupValidation() { const sf = document.getElementById('signup-form'); if (!sf) return; sf.addEventListener('submit', e => { e.preventDefault(); const name = document.getElementById('sname').value.trim(); const email = document.getElementById('semail').value.trim(); const pass = document.getElementById('spass').value; const passConfirm = document.getElementById('spass_confirm').value; const err = document.getElementById('signup-error'); err.textContent = ''; if (!name || !email || !pass || !passConfirm) { err.textContent = 'All fields required.'; return; } if (pass.length < 6) { err.textContent = 'Password must be at least 6 characters.'; return; } if (pass !== passConfirm) { err.textContent = 'Passwords do not match.'; return; } const users = JSON.parse(localStorage.getItem('mockUsers') || '[]'); if (users.find(u => u.email === email)) { err.textContent = 'Email already registered.'; return; } users.push({ name, email, pass }); localStorage.setItem('mockUsers', JSON.stringify(users)); localStorage.setItem(`saved_${email}`, JSON.stringify([])); alert('Registration successful (mock). Please login.'); sf.reset(); window.location.href = 'login.html'; }); }

// login handling
function setupLogin() { const lf = document.getElementById('login-form'); if (!lf) return; lf.addEventListener('submit', e => { e.preventDefault(); const email = document.getElementById('login-email').value.trim(); const pass = document.getElementById('login-password').value; const err = document.getElementById('login-error'); err.textContent = ''; if (email === 'admin@admin.com' && pass === 'admin123') { sessionStorage.removeItem('welcomeShown'); setCurrentUser({ name: 'Admin', email, role: 'admin' }); window.location.href = '../admin/admin_dashboard.html'; return; } if (email === 'user@user.com' && pass === 'user123') { sessionStorage.removeItem('welcomeShown'); setCurrentUser({ name: 'Anurag', email, role: 'user' }); window.location.href = 'index.html'; return; } const users = JSON.parse(localStorage.getItem('mockUsers') || '[]'); const found = users.find(u => u.email === email && u.pass === pass); if (found) { sessionStorage.removeItem('welcomeShown'); setCurrentUser({ name: found.name, email: found.email, role: 'user' }); window.location.href = 'index.html'; return; } err.textContent = 'Invalid credentials. Register or use demo user user@user.com / user123'; }); }

// init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    renderUserArea();
    renderPopular();
    const catFilter = document.getElementById('category-filter');
    if (catFilter) { catFilter.addEventListener('change', () => renderAllRecipes(catFilter.value === 'all' ? 'all' : catFilter.value)); const savedBtn = document.getElementById('view-saved'); if (savedBtn) savedBtn.addEventListener('click', showSavedRecipesInList); renderAllRecipes('all'); }
    renderRecipeDetailsFromQuery();
    setupContactValidation();
    setupSignupValidation();
    setupLogin();
    setInterval(() => { renderUserArea(); wireUpSaveButtons(); }, 1200);
});



