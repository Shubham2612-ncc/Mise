let productPage = document.getElementById("productPage");
        let baseUrl = 'https://fakestoreapi.com/products';
        let categoryBtn = document.getElementById("category");
        let priceBtn = document.getElementById("priceRange");

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                appendData(data);
                categoryBtn.addEventListener('change', () => filterProducts(data));
                priceBtn.addEventListener('change', () => filterProducts(data));
            })
            .catch(err => {
                console.log("err:", err);
            });

        function appendData(items) {
            productPage.innerHTML = "";

            items.forEach(item => {
                let card = document.createElement("div");
                card.className = "card";
                card.dataset.id = item.id;

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
                infoText.innerText = "Description:";
                infoText.style.color = "cadetBlue";

                info.appendChild(infoText);
                info.appendChild(document.createTextNode(` ${item.description}`));

                let price = document.createElement("h5");
                price.className = "price";
                price.innerText = `Price: $ ${item.price}`;

                let category = document.createElement("h5");
                category.className = "category";
                category.innerText = `Category: ${item.category}`;

                cardBody.append(title, info, price, category);
                card.append(cardImg, cardBody);

                productPage.appendChild(card);
            });
        }

        function filterProducts(items) {
            let selectedCategory = categoryBtn.value;
            let selectedPriceRange = priceBtn.value;
        
            let filteredItems = items;
        
            if (selectedCategory !== "") {
                filteredItems = filteredItems.filter(item => item.category === selectedCategory);
            }
        
            if (selectedPriceRange !== "") {
                if (selectedPriceRange === "200-above") {
                    filteredItems = filteredItems.filter(item => item.price >= 200);
                } else {
                    let [minPrice, maxPrice] = selectedPriceRange.split('-').map(parseFloat);
                    filteredItems = filteredItems.filter(item => item.price >= minPrice && item.price < (maxPrice || Infinity));
                }
            }
        
            appendData(filteredItems);
        }