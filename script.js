// Menu Data
const menuData = [
    {
        category: "Starters",
        items: [
            { id: "s1", name: "Vadai", desc: "Savory fried lentil donuts with cumin and spices", price: 5 },
            { id: "s2", name: "Pakora", desc: "Crispy fried vegetables in gram flour batter", price: 10 },
            { id: "s3", name: "Medu Vada", desc: "Soft, fluffy fried lentil fritters", price: 10 }
        ]
    },
    {
        category: "Main Courses",
        items: [
            { id: "m1", name: "Chettinad Chicken", desc: "Spiced chicken with coconut and regional spices", price: 150 },
            { id: "m2", name: "Biryani", desc: "Fragrant rice with meat and aromatic spices", price: 100 },
            { id: "m3", name: "Sambar Rice", desc: "Rice with lentil curry and vegetables", price: 60 }
        ]
    },
    {
        category: "Desserts",
        items: [
            { id: "d1", name: "Payasam", desc: "Traditional sweet pudding with jaggery and nuts", price: 30 },
            { id: "d2", name: "Jaggery Pongal", desc: "Sweet rice and lentil pudding with sesame seeds", price: 30 }
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
document.getElementById('catering-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if(Object.keys(orderItems).length === 0) {
        alert("Please select at least one menu item for your event.");
        return;
    }
    
    // Show success modal
    document.getElementById('success-modal').classList.add('active');
});

function closeModal() {
    document.getElementById('success-modal').classList.remove('active');
    document.getElementById('catering-form').reset();
    orderItems = {};
    calculateTotal();
    renderMenu(); // re-render to reset visual state
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

// Init
window.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});
