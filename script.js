// ============================================
// XORIJIY TAOMLAR RASMLARI (script.js da)
// ============================================
const xorijiyRasmlar = {
    "pizza margherita": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600",
    "pizza pepperoni": "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600",
    "pasta carbonara": "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600",
    "pasta bolognese": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
    "lasagna": "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600",
    "risotto": "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600",
    "tiramisu": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600",
    "panna cotta": "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",
    "ravioli": "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=600",
    "gnocchi": "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=600",
    "focaccia": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600",
    "bruschetta": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600",
    "croissant": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600",
    "baguette": "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600",
    "ratatouille": "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=600",
    "coq au vin": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    "french onion soup": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    "crème brûlée": "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600",
    "macaron": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600",
    "quiche lorraine": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    "bouillabaisse": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    "tarte tatin": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600",
    "paella": "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600",
    "tapas": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    "gazpacho": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    "churros": "https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=600",
    "tortilla española": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    "sangria": "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=600",
    "burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    "cheeseburger": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
    "hot dog": "https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=600",
    "fried chicken": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600",
    "bbq ribs": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    "buffalo wings": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600",
    "mac and cheese": "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600",
    "clam chowder": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    "cheesecake": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600",
    "brownie": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
    "tacos": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600",
    "burrito": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600",
    "quesadilla": "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600",
    "enchilada": "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=600",
    "nachos": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600",
    "guacamole": "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=600",
    "chili con carne": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    "fajita": "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=600",
    "fish and chips": "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=600",
    "shepherd's pie": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    "borscht": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    "goulash": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    "sushi": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600",
    "sashimi": "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600",
    "ramen": "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600",
    "udon": "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600",
    "tempura": "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=600",
    "miso sho'rva": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    "katsu curry": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600",
    "onigiri": "https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=600",
    "yakitori": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600",
    "gyoza": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600",
    "kung pao tovuq": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600",
    "sweet and sour pork": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600",
    "fried rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
    "chow mein": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600",
    "spring rolls": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600",
    "dumplings": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600",
    "peking duck": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    "mapo tofu": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    "chicken tikka masala": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    "butter chicken": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    "biryani": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600",
    "samosa": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    "naan": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    "tandoori tovuq": "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600",
    "palak paneer": "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=600",
    "dal curry": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    "kimchi": "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?w=600",
    "bibimbap": "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600",
    "bulgogi": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    "korean bbq": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    "japchae": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600",
    "pad thai": "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600",
    "tom yum": "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600",
    "green curry": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600",
    "mango sticky rice": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600",
    "som tum": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    "massaman curry": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600",
    "doner": "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600",
    "lahmacun": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    "baklava": "https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=600",
    "kebab": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600",
    "pide": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    "menemen": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    "shawarma": "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600",
    "falafel": "https://images.unsplash.com/photo-1593001874117-c99c800e3eb8?w=600",
    "hummus": "https://images.unsplash.com/photo-1637943985354-3d0a8e1e4b5c?w=600",
    "tabbouleh": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    "shakshuka": "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=600",
    "gyros": "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600",
    "souvlaki": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600",
    "moussaka": "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600",
    "greek salad": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",
    "spanakopita": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    "pierogi": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600",
    "pho": "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600"
};

// ============================================
// MILLIY TAOMLAR UCHUN INGLIZCHA NOMLAR (API uchun)
// ============================================
const milliyEn = {
    "to'y palovi": "pilaf",
    "samarqand palovi": "pilaf",
    "buxoro palovi": "pilaf",
    "toshkent palovi": "pilaf",
    "xiva palovi": "pilaf",
    "nigor osh": "rice",
    "zafaron palovi": "pilaf",
    "qovoqli palov": "pilaf",
    "chayxona palovi": "pilaf",
    "kavkaz palovi": "pilaf",
    "bahor palovi": "pilaf",
    "qishki palov": "pilaf",
    "qazi palov": "pilaf",
    "tovuq palov": "chicken",
    "baliq palov": "fish",
    "no'xat palov": "rice",
    "mayizli palov": "rice",
    "anor palov": "rice",
    "zira palov": "rice",
    "bedana palov": "rice",
    "shurpa": "soup",
    "mastava": "soup",
    "mosh xordiq": "soup",
    "lag'mon sho'rva": "noodle soup",
    "chuchvara sho'rva": "dumpling soup",
    "qaynatma": "broth",
    "dumba sho'rva": "soup",
    "tovuq sho'rva": "chicken soup",
    "baliq sho'rva": "fish soup",
    "qo'ziqorin sho'rva": "mushroom soup",
    "karam sho'rva": "cabbage soup",
    "no'xat sho'rva": "pea soup",
    "sabzavotli sho'rva": "vegetable soup",
    "ugra sho'rva": "noodle soup",
    "kalla-pocha": "soup",
    "manti": "dumplings",
    "somsa": "samosa",
    "xonim": "dumplings",
    "chuchvara": "dumplings",
    "norin": "noodles",
    "xasip": "sausage",
    "beshbarmak": "noodles",
    "ugra osh": "noodles",
    "kesma lag'mon": "noodles",
    "bug'lama somsa": "dumplings",
    "qatlama": "bread",
    "patir": "bread",
    "loochira": "bread",
    "suzma": "yogurt",
    "chalpak": "bread",
    "qo'y kabob": "kebab",
    "mol kabob": "kebab",
    "tovuq kabob": "chicken kebab",
    "lula kabob": "kebab",
    "jigar kabob": "liver",
    "dumba kabob": "kebab",
    "tandir go'sht": "roast",
    "qazi": "sausage",
    "qarta": "sausage",
    "kabob assorti": "kebab",
    "tovuq tandir": "roast chicken",
    "qovurma": "beef",
    "jaz": "beef",
    "tovuq qanotchalari": "chicken wings",
    "baliq kabob": "fish",
    "achichuk": "salad",
    "shakarob": "salad",
    "assorti": "salad",
    "ko'k salat": "salad",
    "baqlajon salat": "salad",
    "dimlama": "stew",
    "sabzavot qovurma": "vegetables",
    "tovuq sabzavotli": "chicken",
    "karam dolma": "cabbage rolls",
    "qalampir dolma": "stuffed peppers",
    "qovoq qovurma": "pumpkin",
    "kartoshka qovurma": "potato",
    "sabzi qovurma": "carrot",
    "baqlajon qovurma": "eggplant",
    "karam qovurma": "cabbage",
    "navvat": "candy",
    "holva": "halwa",
    "chak-chak": "dessert",
    "pahlava": "baklava",
    "somsa shirin": "dessert",
    "nisholda": "dessert",
    "qandolat": "sweets",
    "shirin palov": "rice",
    "uchqun": "dessert",
    "bodomli shirinlik": "dessert",
    "yong'oqli holva": "halwa",
    "mayizli shirinlik": "dessert",
    "quruq mevali": "dried fruit",
    "asalli tort": "cake",
    "sutli shirinlik": "dessert",
    "ko'k choy": "tea",
    "qora choy": "tea",
    "ayron": "ayran",
    "qatiq": "yogurt",
    "sharbat": "juice"
};

// ============================================
// CACHE — takroriy so'rovlarni oldini olish
// ============================================
const rasmCache = {};

// ============================================
// KARTOCHKA YARATISH
// ============================================
function createCard(taom, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = (index * 0.03) + 's';
    card.dataset.tur = taom.tur;
    card.dataset.nom = taom.nom.toLowerCase();

    const turNomi = { milliy: "Milliy", xorijiy: "Xorijiy" };
    
    const hue1 = (index * 37) % 360;
    const hue2 = (index * 37 + 60) % 360;
    const gradient = 'linear-gradient(135deg, hsl(' + hue1 + ', 70%, 55%), hsl(' + hue2 + ', 70%, 45%))';

    card.innerHTML = 
        '<div class="card-img-wrapper" style="height:200px; position:relative; overflow:hidden;">' +
            '<div style="width:100%;height:100%;background:' + gradient + ';display:flex;align-items:center;justify-content:center;font-size:6rem;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.3));">🍽️</div>' +
            '<span class="card-badge ' + taom.tur + '">' + turNomi[taom.tur] + '</span>' +
        '</div>' +
        '<div class="card-body">' +
            '<h3>' + taom.nom + '</h3>' +
            '<div class="card-info">' +
                '<span>⏱️ ' + taom.vaqt + '</span>' +
                '<span>👥 ' + taom.porsiya + '</span>' +
            '</div>' +
            '<p class="card-desc">' + taom.tavsif + '</p>' +
        '</div>';

    card.addEventListener('click', function() { openModal(taom, index); });
    return card;
}

// ============================================
// RENDER
// ============================================
function renderCards() {
    const milliyGrid = document.getElementById('milliyGrid');
    const xorijiyGrid = document.getElementById('xorijiyGrid');

    if (!milliyGrid || !xorijiyGrid) return;

    milliyGrid.innerHTML = '';
    xorijiyGrid.innerHTML = '';

    milliyTaomlar.forEach(function(t, i) { 
        milliyGrid.appendChild(createCard(t, i)); 
    });
    
    xorijiyTaomlar.forEach(function(t, i) { 
        xorijiyGrid.appendChild(createCard(t, i + milliyTaomlar.length)); 
    });

    console.log("✅ " + milliyTaomlar.length + " milliy va " + xorijiyTaomlar.length + " xorijiy taom yuklandi!");
}

// ============================================
// MODAL OCHISH
// Xorijiy — script.js dan
// Milliy — API dan
// ============================================
async function openModal(taom, index) {
    const modal = document.getElementById('modal');
    const imgEl = document.getElementById('modalImg');
    
    const oldGrad = document.getElementById('modalGradient');
    if (oldGrad) oldGrad.remove();
    
    const kalit = taom.nom.toLowerCase().trim();
    
    // 1️⃣ XORIJIY TAOM — script.js dan rasm
    if (taom.tur === "xorijiy" && xorijiyRasmlar[kalit]) {
        imgEl.style.display = 'block';
        imgEl.src = xorijiyRasmlar[kalit];
    }
    // 2️⃣ MILLIY TAOM — API dan rasm
    else if (taom.tur === "milliy") {
        const qidiruvNomi = milliyEn[kalit] || taom.nom;
        
        // Cache tekshirish
        if (rasmCache[qidiruvNomi]) {
            imgEl.style.display = 'block';
            imgEl.src = rasmCache[qidiruvNomi];
        } else {
            imgEl.style.display = 'block';
            imgEl.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600";
            
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(qidiruvNomi));
                const data = await response.json();
                
                if (data.meals && data.meals.length > 0) {
                    const rasmUrl = data.meals[0].strMealThumb;
                    imgEl.src = rasmUrl;
                    rasmCache[qidiruvNomi] = rasmUrl;
                } else {
                    // Topilmadi — gradient
                    imgEl.style.display = 'none';
                    const hue1 = ((index || 0) * 37) % 360;
                    const hue2 = ((index || 0) * 37 + 60) % 360;
                    const grad = document.createElement('div');
                    grad.id = 'modalGradient';
                    grad.className = 'modal-gradient';
                    grad.style.cssText = 'width:100%;height:250px;border-radius:15px;margin-bottom:20px;display:flex;align-items:center;justify-content:center;font-size:6rem;background:linear-gradient(135deg, hsl(' + hue1 + ', 70%, 55%), hsl(' + hue2 + ', 70%, 45%));';
                    grad.innerHTML = '🍽️';
                    imgEl.parentNode.insertBefore(grad, imgEl);
                }
            } catch (error) {
                imgEl.style.display = 'none';
                const hue1 = ((index || 0) * 37) % 360;
                const hue2 = ((index || 0) * 37 + 60) % 360;
                const grad = document.createElement('div');
                grad.id = 'modalGradient';
                grad.className = 'modal-gradient';
                grad.style.cssText = 'width:100%;height:250px;border-radius:15px;margin-bottom:20px;display:flex;align-items:center;justify-content:center;font-size:6rem;background:linear-gradient(135deg, hsl(' + hue1 + ', 70%, 55%), hsl(' + hue2 + ', 70%, 45%));';
                grad.innerHTML = '🍽️';
                imgEl.parentNode.insertBefore(grad, imgEl);
            }
        }
    }
    // 3️⃣ ZAXIRA
    else {
        imgEl.style.display = 'block';
        imgEl.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600";
    }
    
    document.getElementById('modalTitle').textContent = taom.nom;
    document.getElementById('modalTime').textContent = '⏱️ ' + taom.vaqt;
    document.getElementById('modalPortion').textContent = '👥 ' + taom.porsiya;
    document.getElementById('modalType').textContent = '🍽️ ' + taom.tur;

    const ul = document.getElementById('modalIngredients');
    ul.innerHTML = '';
    taom.masalliqlar.forEach(function(m) {
        const li = document.createElement('li');
        li.textContent = m;
        ul.appendChild(li);
    });

    document.getElementById('modalRecipe').textContent = taom.retsept;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================
// MODAL YOPISH
// ============================================
function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// QIDIRUV
// ============================================
function setupSearch() {
    const input = document.getElementById('searchInput');
    if (!input) {
        console.error("❌ searchInput topilmadi!");
        return;
    }
    
    input.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        let topildi = 0;
        
        document.querySelectorAll('.card').forEach(function(card) {
            const nom = card.dataset.nom || '';
            if (nom.includes(query)) {
                card.style.display = '';
                topildi++;
            } else {
                card.style.display = 'none';
            }
        });
        
        console.log('🔍 "' + query + '" uchun ' + topildi + ' ta taom topildi');
    });
    
    console.log("✅ Qidiruv tayyor!");
}

// ============================================
// FILTER
// ============================================
function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(function(b) { 
                b.classList.remove('active'); 
            });
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            document.querySelectorAll('.card').forEach(function(card) {
                card.style.display = (filter === 'all' || card.dataset.tur === filter) ? '' : 'none';
            });
        });
    });
}

// ============================================
// MOBIL MENYU
// ============================================
function setupMenu() {
    const toggle = document.getElementById('menuToggle');
    if (toggle) {
        toggle.addEventListener('click', function() {
            document.querySelector('.nav').classList.toggle('active');
        });
    }
}

// ============================================
// ISHGA TUSHIRISH
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Jasurbek Al Oshxonasi ishga tushdi!");
    
    renderCards();
    setupSearch();
    setupFilters();
    setupMenu();

    const closeBtn = document.getElementById('closeModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target.id === 'modal') closeModal();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
});
