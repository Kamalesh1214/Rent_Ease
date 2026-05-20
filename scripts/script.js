const products = [
    { 
        id: 1, 
        name: "3-Seater Sofa", 
        desc: "Velvet finish, includes cushions", 
        cat: "furniture", 
        img: "Images/sofa.jpeg", 
        price: "₹899", 
        deposit: "₹2,000 deposit" 
    },
    { 
        id: 2, 
        name: "Queen Bed Frame", 
        desc: "Wooden frame with headboard", 
        cat: "bedroom", 
        img: "Images/bed.jpeg", 
        price: "₹799", 
        deposit: "₹1,800 deposit" 
    },
    { 
        id: 3,
        name: "Refrigerator 280L", 
        desc: "Double door, frost-free", 
        cat: "appliances", 
        img: "Images/fridge.jpeg", 
        price: "₹1,099", 
        deposit: "₹3,000 deposit" 
    },
    { 
        id: 4, 
        name: "Washing Machine 7kg", 
        desc: "Front load, fully automatic", 
        cat: "appliances", 
        img: "Images/washing-machine.jpeg",  
        price: "₹999", 
        deposit: "₹2,500 deposit" 
    },
    { 
        id: 5, 
        name: "Smart LED TV 43", 
        desc: "Full HD, with remote", 
        cat: "appliances", 
        img: "Images/smart-tv.jpeg", 
        price: "₹1,299", 
        deposit: "₹2,800 deposit" 
    },
    { 
        id: 6, 
        name: "Study Table + Chair", 
        desc: "Ergonomic set for work/study", 
        cat: "furniture", 
        img: "Images/study-desk.jpeg", 
        price: "₹599", 
        deposit: "₹1,200 deposit" 
    },
    { 
        id: 7, 
        name: "Wardrobe 3-Door", 
        desc: "Sliding doors, spacious", 
        cat: "bedroom", 
        img: "Images/wardrobe.jpeg", 

        price: "₹899", 
        deposit: "₹2,000 deposit" 
    },
    { 
        id: 8, 
        name: "Dining Table 4-Seater", 
        desc: "Wooden top with chairs", 
        cat: "furniture", 
        img: "Images/dining-table.jpeg", 
        price: "₹749", 
        deposit: "₹1,600 deposit" 
    },
    {
        id: 9,
        name: "Shoe Rack",
        decs: "4 Layered Open Shoe Rack",
        cat: "furniture",
        img: "Images/shoe-rack.jpeg",
        price: "₹499",
        deposit: "₹1400"
    },
    {
        id: 10,
        name: "Dishwasher",
        decs: "Automatic Dishwasher with Smart Wash Technology",
        cat: "appliances",
        img: "Images/dishwasher.png",
        price: "₹1399",
        deposit: "₹3500"
    },
    {
        id: 11,
        name: "Air Conditioner",
        decs: "1.5 Ton Inverter Split AC with Fast Cooling",
        cat: "appliances",
        img: "Images/ac.jpg",
        price: "₹1699",
        deposit: "₹5000"
    },
    {
        id: 12,
        name: "Microwave Oven",
        decs: "Smart Microwave Oven with Multi Cooking Modes",
        cat: "appliances",
        img: "Images/oven.png",
        price: "₹799",
        deposit: "₹2200"
    }
];

function renderProducts(filter = 'all') 
{
    const grid = document.getElementById('productsGrid');
    const filtered = filter === 'all' ? products : products.filter(p => p.cat === filter);
    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
        <div class="prod-img">
            <img src="${p.img}" alt="${p.name}">
            <span class="prod-cat-tag">${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)}</span>
        </div>
        <div class="prod-body">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="prod-footer">
            <div class="prod-price">
                <strong>${p.price}</strong>
                <small>/month &nbsp;·&nbsp; ${p.deposit}</small>
            </div>
            <button class="prod-btn" onclick="addToCart('${p.name}')">Add to Cart</button>
            </div>
        </div>
        </div>
    `).join('');
}

function filterProducts(cat, btn) 
{
    document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(cat);
}

function addToCart(name) 
{
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = `"${name}" added to cart!`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
}

function openModal(type) 
{
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const sub = document.getElementById('modalSubtitle');
    const form = document.getElementById('modalForm');
    
    if (type === 'login') 
    {
        title.textContent = 'Welcome back';
        sub.textContent = 'Log in to manage your rentals.';
        form.innerHTML = 
        `
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="kamalesh@example.com">
            </div>
            <div class="form-group">
                <label>Enter Password</label>
                <input type="password" placeholder="Kamalesh@123">
            </div>
            <button class="form-submit" id="formSubmit" onclick="login()">Log In →</button>
        `
    }
    else
    {
        title.textContent = 'Create Account';
        sub.textContent = 'Start renting furniture and appliances today.';
        form.innerHTML = 
        `
            <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Kamalesh Jonnadula">
                    </div>
                    <div class="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="kamalesh@example.com">
                    </div>
                    <div class="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+91 98765 43210">
                    </div>
                    <div class="form-group">
                        <label>Create Password</label>
                        <input type="password" placeholder="Kamalesh@123">
                    </div>
                    <div class="form-group">
                        <label>City</label>
                        <select>
                            <option>Select your city</option>
                            <option>Bangalore</option>
                            <option>Mumbai</option>
                            <option>Hyderabad</option>
                            <option>Delhi</option>
                            <option>Chennai</option>
                            <option>Pune</option>
                        </select>
                    </div>
                    <button class="form-submit" id="formSubmit" onclick="signup()">Create My Account →</button>
        `
    } 
    overlay.classList.add('open');
}

function closeModal() 
{
    document.getElementById('modalOverlay').classList.remove('open');
}

document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

renderProducts();

const themeChange = document.getElementById('themeChange');
if(localStorage.getItem('theme') === 'dark')
{
    document.body.classList.add('dark-mode');
    themeChange.innerHTML = '☀️';
}
themeChange.addEventListener('click', () => 
{
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode'))
    {
        localStorage.setItem('theme','dark');
        themeChange.innerHTML = '☀️';
    }
    else
    {
        localStorage.setItem('theme','light');
        themeChange.innerHTML = '🌙';
    }
});

window.addEventListener('load', () => {
    const intro = document.getElementById('introScreen');

    setTimeout(() => {
        intro.classList.add('intro-hide');
        setTimeout(() => {
            intro.remove();
        }, 1000);
    }, 2600);
});

async function signup()
{
    const email = document.querySelector('input[type=\"email\"]').value;
    const password = document.querySelector('input[type=\"password\"]').value;

    try{
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        alert('Account created successfully');
        console.log(userCredential.user);
    }
    catch(error){

        alert(error.message);
    }
}

async function login()
{
    const email = document.querySelector('input[type=\"email\"]').value;
    const password = document.querySelector('input[type=\"password\"]').value;

    try{
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        alert('Login successful');
        console.log(userCredential.user);
    }
    catch(error){

        alert(error.message);
    }
}

async function rentProduct(productName)
{
    try{
        await addDoc(
            collection(db, 'rentals'),
            {
                product: productName,
                time: new Date()
            }
        );
        alert('Rental request submitted');
    }
    catch(error)
    {
        alert(error.message);
    }
}