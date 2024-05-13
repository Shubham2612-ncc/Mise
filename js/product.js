let productPage = document.getElementById("productPage");
let baseUrl = 'https://fakestoreapi.com/products';
let loginBtn = document.getElementById("loginBtn");

// let res;

fetch(baseUrl)
.then(function (res){
return res.json();
})
.then(function (res) {
    appendData(res);
})
.catch(function (err) {
    console.log("err:",err);
});

function appendData(items){

    items.forEach(function (item)  {

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
    productText.style.color = "DarkTurquoise"; // Set the color to red or any other desired style

    // Append the productText span to the title element
    title.appendChild(productText);

    // Append the product name after the "Product:" span
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
    price.innerText = `Price: ${item.price}`;

    let category = document.createElement("h5");
    category.className = "category";
    category.innerText = `Category: ${item.category}`;

    cardBody.append(title,info,price,category);

    card.append(cardImg,cardBody);

    productPage.append(card);
    }); 
}