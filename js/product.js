let productPage = document.getElementById("productPage");
let baseUrl = 'https://fakestoreapi.com/products';
let loginBtn = document.getElementById("loginBtn");
let categoryBtn = document.getElementById("category");
let priceBtn = document.getElementById("priceRange");
let searchBar = document.getElementById("searchDiv");

let res;

fetch(baseUrl)
.then(res => res.json())
.then(data => {
    appendData(data);
    categoryBtn.addEventListener('change', () => filterByCategory(data));
    priceBtn.addEventListener('change', () => filterByPrice(data));
})

.catch(function (err) {
    console.log("err:",err);
});

function appendData(items){
    let categoryData = [];
    productPage.innerHTML = "";

    items.forEach(item => {

    let card = document.createElement("div");
    card.className = "card";
    card.dataset.id = item.id;
    card.style.borderRadius = "20px";

    let cardImg = document.createElement("div");
    cardImg.className = "card-img";

    let img = document.createElement("img");
    img.src = item.image;
    img.alt = "product";
    

    cardImg.append(img);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let title = document.createElement("h5");
    title.className = "title";

    let productText = document.createElement("span");
    productText.className = "productText";
    productText.innerText = "Product:";
    productText.style.color = "DarkTurquoise";

    title.appendChild(productText);
    
    title.appendChild(document.createTextNode(` ${item.title}`));

    let info = document.createElement("p");
    info.className = "description";    

    let infoText = document.createElement("span");
    infoText.innerText="Description:"
    infoText.style.color = "cadetBlue";

    info.appendChild(infoText);

    info.appendChild(document.createTextNode(` ${item.description}`));

    let price = document.createElement("h5");
    price.className = "price";
    price.innerText = `Price: $ ${item.price}`;

    let category = document.createElement("h5");
    category.className = "category";
    category.innerText = `Category: ${item.category}`;

    cardBody.append(title,info,price,category);

    card.append(cardImg, cardBody);

    productPage.appendChild(card);
    });
}


function filterByPrice(items) {
    let selectedValue = priceBtn.value;
    console.log(`Selected Price is: ${selectedValue}`);
    let filteredItems;

    if(selectedValue === ""){
        filteredItems = items;
    } else if(selectedValue === "300") {
        filteredItems = items.filter(item => item.price >= 200);
    } else {
        let maxPrice = parseFloat(selectedValue);
        let minPrice = maxPrice === 50 ? 0 : maxPrice / 2;
        filteredItems = items.filter(item => item.price >= minPrice && item.price < maxPrice);
    }

    appendData(filteredItems);
}

function filterByCategory(items){
    let selectedCategory = categoryBtn.value;
    console.log(`Selected Category is: ${selectedCategory}`);
    let filteredItems;

    if(selectedCategory === ""){
        filteredItems = items;
    } else if(selectedCategory === "men's clothing") {
        filteredItems = items.filter(item => item.category === "men's clothing");
    } else if(selectedCategory === "women's clothing") {
        filteredItems = items.filter(item => item.category === "women's clothing");
    } else if(selectedCategory === "electronics") {
        filteredItems = items.filter(item => item.category === "electronics");
    } else if(selectedCategory === "jewelery") {
        filteredItems = items.filter(item => item.category === "jewelery");
    }

    appendData(filteredItems);
}