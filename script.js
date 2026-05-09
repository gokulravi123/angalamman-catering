// Menu Data
const menuData = [
    {
        category: "FRIES",
        items: [
            { id: "v1", name: "POTATO", desc: "Crispy fried spiced potato wedges", price: 20 },
            { id: "v2", name: "CARROT & BEANS", desc: "Tossed with mild spices and coconut", price: 25 },
            { id: "v3", name: "BOTTLE GOURD", desc: "Traditional home-style seasoning", price: 20 },
            { id: "v4", name: "SNAKE GOURD", desc: "Crispy and light", price: 20 },
            { id: "v5", name: "YAM", desc: "Golden fried yam with traditional spices", price: 30 },
            { id: "v6", name: "CABBAGE", desc: "Crunchy cabbage with mustard seeds", price: 20 },
            { id: "v7", name: "BRINJAL", desc: "Spiced and roasted eggplant", price: 25 },
            { id: "v8", name: "PUMPKIN", desc: "Sweet and spicy roasted pumpkin", price: 20 },
            { id: "v9", name: "BEETROOT", desc: "Healthy and vibrant spiced beetroot", price: 25 },
            { id: "v10", name: "LADIES FINGER", desc: "Crispy okra with aromatic spices", price: 30 },
            { id: "v11", name: "VAALAKAI", desc: "Raw banana spiced rounds", price: 25 },
            { id: "v12", name: "MUSHROOM", desc: "Battered and crispy fried mushrooms", price: 40 }
        ]
    },
    {
        category: "VADAI & BAJJI",
        items: [
            { id: "va1", name: "PARUPU VADA", desc: "Crunchy lentil patties", price: 10 },
            { id: "va2", name: "MEDHU VADA", desc: "Fluffy urad dal donuts", price: 12 },
            { id: "va3", name: "BONDAA", desc: "Spiced potato balls", price: 15 },
            { id: "va4", name: "MASAL BONDA", desc: "Masala infused bonda", price: 15 },
            { id: "va5", name: "PAKKODA", desc: "Onion and gram flour fritters", price: 10 },
            { id: "va6", name: "ONION BAJJI", desc: "Sliced onions in batter", price: 12 },
            { id: "va7", name: "POTATO BAJJI", desc: "Thinly sliced potato fritters", price: 12 },
            { id: "va8", name: "MOLAGA BAJJI", desc: "Spicy green chili fritters", price: 15 },
            { id: "va9", name: "KATHIRIKA BAJJI", desc: "Brinjal slices in batter", price: 12 },
            { id: "va10", name: "VAALAKA BAJJI", desc: "Raw banana slices in batter", price: 12 }
        ]
    },
    {
        category: "BIRIYANI (VEG)",
        items: [
            { id: "vb1", name: "VEG BRINIYANI", desc: "Fragrant rice with vegetables", price: 90 },
            { id: "vb2", name: "MUSHROOM BRINIYANI", desc: "Basmati rice with mushrooms", price: 110 }
        ]
    },
    {
        category: "KOLAMBUU (SAMBAR)",
        items: [
            { id: "ks1", name: "DRUMSTICK SAMBAR", desc: "Lentil curry with drumsticks", price: 40 },
            { id: "ks2", name: "CARROT&BEANS SAMBAR", desc: "Lentil curry with mixed veg", price: 40 },
            { id: "ks3", name: "BRINJAL SAMBAR", desc: "Eggplant and lentil stew", price: 40 },
            { id: "ks4", name: "RADDISH SAMBAR", desc: "Radish infused lentil curry", price: 40 }
        ]
    },
    {
        category: "KOLAMBUU (PULI)",
        items: [
            { id: "kp1", name: "LADISH FINGER PULI KOLAMBU", desc: "Tangy tamarind curry with okra", price: 50 },
            { id: "kp2", name: "BRINJAL PULI KOLAMBU", desc: "Sour tamarind eggplant curry", price: 50 },
            { id: "kp3", name: "SUNDAKAA PULI KOLAMBU", desc: "Traditional turkey berry stew", price: 60 }
        ]
    },
    {
        category: "RICE & OTHERS",
        items: [
            { id: "r1", name: "RICE(IF SPECIFIED)", desc: "Steamed premium rice", price: 30 },
            { id: "r2", name: "MOR KOLAMBU", desc: "Buttermilk based spiced curry", price: 45 },
            { id: "r3", name: "RASAM", desc: "Peppery tamarind soup", price: 20 },
            { id: "r4", name: "CURD", desc: "Creamy home-made thick curd", price: 15 },
            { id: "r5", name: "APPLAM", desc: "Crispy lentil crackers", price: 5 },
            { id: "r6", name: "VADAGAM", desc: "Traditional spiced rice crisps", price: 7 }
        ]
    },
    {
        category: "PAYASAM",
        items: [
            { id: "p1", name: "PARUPU PAYASAM", desc: "Lentil and jaggery sweet", price: 35 },
            { id: "p2", name: "SEMMIYA PAYASAM", desc: "Milk based vermicelli sweet", price: 35 },
            { id: "p3", name: "JAWARUSI PAYASM", desc: "Sago and milk sweet", price: 35 }
        ]
    },
    {
        category: "CHILLI",
        items: [
            { id: "c1", name: "CAULIFLOWER CHILLI", desc: "Spicy and crispy Gobi 65", price: 60 },
            { id: "c2", name: "MUSHROOM CHILLI", desc: "Crispy battered mushrooms", price: 80 },
            { id: "c3", name: "BABYCORN CHILLI", desc: "Crunchy babycorn spicy", price: 75 }
        ]
    },
    {
        category: "NON VEG - SPECIALS",
        items: [
            { id: "nv1", name: "RATHHA PORIYAL", desc: "Traditional spiced blood fry", price: 120 },
            { id: "nv2", name: "BOATY", desc: "Savory organ meat fry", price: 150 },
            { id: "nv3", name: "EGG", desc: "Perfectly seasoned eggs", price: 15 },
            { id: "nv4", name: "MUTTON CHUKKA", desc: "Dry roasted spicy mutton", price: 220 },
            { id: "nv5", name: "MUTTON VARUVAL", desc: "Deep fried marinated mutton", price: 220 },
            { id: "nv6", name: "CHICKEN PALLIPALAYAM", desc: "Spicy chicken with coconut", price: 160 },
            { id: "nv7", name: "CHETTINAD CHICKEN", desc: "Authentic pepper chicken gravy", price: 170 },
            { id: "nv8", name: "PICHUPOTTA CHICKEN", desc: "Shredded chicken fry", price: 160 },
            { id: "nv9", name: "CHICKEN SINDHAMANI", desc: "Chicken fried with dry chillies", price: 160 },
            { id: "nv10", name: "KOSAI KARI", desc: "Unique local style meat preparation", price: 180 },
            { id: "nv11", name: "FISH", desc: "Fresh fish fry or curry", price: 140 }
        ]
    },
    {
        category: "NON VEG - BIRIYANI",
        items: [
            { id: "nb1", name: "CHICKEN BIRIYANI", desc: "Authentic home-style chicken biriyani", price: 180 },
            { id: "nb2", name: "MUTTON BIRIYANI", desc: "Slow-cooked mutton biriyani", price: 250 }
        ]
    }
];

// State
let orderItems = {};

// Initialize Menu
function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    menuData.forEach(cat => {
        const catDiv = document.createElement('div');
        catDiv.className = 'menu-category';
        
        const catTitle = document.createElement('div');
        catTitle.className = 'menu-category-title';
        catTitle.innerText = cat.category;
        catDiv.appendChild(catTitle);

        cat.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';
            itemDiv.id = `item-container-${item.id}`;

            itemDiv.innerHTML = `
                <div class="item-info">
                    <input type="checkbox" class="item-checkbox" id="check-${item.id}" onchange="toggleItem('${item.id}', ${item.price})">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p>${item.desc} &middot; <span class="item-price">₹${item.price.toFixed(2)}/person</span></p>
                    </div>
                </div>
                <div class="item-controls">
                    <button type="button" class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
                    <input type="number" class="order-section qty-input" id="qty-${item.id}" value="10" min="10" onchange="calculateTotal()" readonly>
                    <button type="button" class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
                </div>
            `;
            catDiv.appendChild(itemDiv);
        });

        container.appendChild(catDiv);
    });
}

function toggleItem(id, price) {
    const checkbox = document.getElementById(`check-${id}`);
    const container = document.getElementById(`item-container-${id}`);
    
    if (checkbox.checked) {
        container.classList.add('selected');
        // sync with main guest count if present
        const guestCountVal = document.getElementById('guestCount').value;
        const qtyInput = document.getElementById(`qty-${id}`);
        if(guestCountVal >= 10) {
            qtyInput.value = guestCountVal;
        }
        
        orderItems[id] = {
            price: price,
            qty: parseInt(qtyInput.value)
        };
    } else {
        container.classList.remove('selected');
        delete orderItems[id];
    }
    calculateTotal();
}

function updateQty(id, change) {
    const qtyInput = document.getElementById(`qty-${id}`);
    let currentQty = parseInt(qtyInput.value);
    
    if (currentQty + change >= 10) {
        currentQty += change;
        qtyInput.value = currentQty;
        
        if (orderItems[id]) {
            orderItems[id].qty = currentQty;
            calculateTotal();
        }
    }
}

function calculateTotal() {
    let total = 0;
    for (const key in orderItems) {
        total += orderItems[key].price * orderItems[key].qty;
    }
    document.getElementById('total-price').innerText = '₹' + total.toFixed(2);
}

// Sync global guest count to all selected items
document.getElementById('guestCount').addEventListener('input', function(e) {
    const val = parseInt(e.target.value);
    if(val >= 10) {
        for (const key in orderItems) {
            orderItems[key].qty = val;
            document.getElementById(`qty-${key}`).value = val;
        }
        calculateTotal();
    }
});

// Form Submission
document.getElementById('catering-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if(Object.keys(orderItems).length === 0) {
        alert("Please select at least one menu item for your event.");
        return;
    }
    
    // Prepare order details
    const selectedItemsList = [];
    for (const key in orderItems) {
        // Find item name from menuData
        let itemName = "";
        menuData.forEach(cat => {
            const item = cat.items.find(i => i.id === key);
            if(item) itemName = item.name;
        });
        selectedItemsList.push({
            name: itemName,
            qty: orderItems[key].qty,
            price: orderItems[key].price
        });
    }

    const formData = {
        fullName: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        eventType: document.getElementById('eventType').value,
        guestCount: document.getElementById('guestCount').value,
        eventDate: document.getElementById('eventDate').value,
        eventTime: document.getElementById('eventTime').value,
        address: document.getElementById('address').value,
        items: selectedItemsList,
        total: document.getElementById('total-price').innerText
    };

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "Processing...";
    submitBtn.disabled = true;

    try {
        const response = await fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Order Success:', result);
            // Show success modal
            document.getElementById('success-modal').classList.add('active');
        } else {
            alert('Failed to submit order. Please check if the backend server is running.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error connecting to server. Please ensure the backend (server.js) is started.');
    } finally {
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
    }
});

function closeModal() {
    document.getElementById('success-modal').classList.remove('active');
    document.getElementById('catering-form').reset();
    orderItems = {};
    calculateTotal();
    renderMenu(); // re-render to reset visual state
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Filter Highlights
function filterMenu(type) {
    const vegGrid = document.getElementById('veg-highlights');
    const nonVegGrid = document.getElementById('nonveg-highlights');
    const btns = document.querySelectorAll('.tab-btn');

    btns.forEach(btn => btn.classList.remove('active'));

    if (type === 'veg') {
        vegGrid.classList.add('active');
        nonVegGrid.classList.remove('active');
        btns[0].classList.add('active');
    } else {
        vegGrid.classList.remove('active');
        nonVegGrid.classList.add('active');
        btns[1].classList.add('active');
    }
}

// Init
window.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});
