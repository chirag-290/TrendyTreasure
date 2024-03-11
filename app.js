//   **************************

//    searchbar
//   **************





document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const productItemsContainer = document.querySelector('.col-lg-9 .row');
    const allProductItems = Array.from(document.querySelectorAll('.product__item'));

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const productItems = Array.from(document.querySelectorAll('.product__item'));

        if (searchTerm !== '') {
            const matchingItems = productItems.filter(item => {
                const itemName = item.querySelector('.itemname').innerText.toLowerCase();
                return itemName.includes(searchTerm);
            });
            productItems.forEach(item => {
                if (!matchingItems.includes(item)) {
                    item.style.display = 'none';
                }
            });
            matchingItems.forEach(item => {
                item.style.display = 'block';
                productItemsContainer.prepend(item);
            });
        } else {
            allProductItems.forEach(item => {
                item.style.display = 'block';
                productItemsContainer.appendChild(item); 
            });
        }
    });
});




// ******************************

// sorting

// ***********************



    const sortSelect = document.getElementById('sortSelect');
    const cardContainer = document.querySelector('.card-conatiner');
    const productItems = Array.from(document.querySelectorAll('.product__item'));

    const originalOrder = Array.from(productItems);

    
    sortSelect.addEventListener('change', function () {
       
        const selectedValue = parseInt(sortSelect.value);


        switch (selectedValue) {
            case 1:
               
                productItems.sort((a, b) => {
                    const priceA = parseFloat(a.querySelector('.price').innerText.slice(1));
                    const priceB = parseFloat(b.querySelector('.price').innerText.slice(1));
                    return priceA - priceB;
                });
                break;
            case 2:
                
                productItems.sort((a, b) => {
                    const priceA = parseFloat(a.querySelector('.price').innerText.slice(1));
                    const priceB = parseFloat(b.querySelector('.price').innerText.slice(1));
                    return priceB - priceA;
                });
                break;
            default:
             
                productItems.sort((a, b) => originalOrder.indexOf(a) - originalOrder.indexOf(b));
                break;
        }


        cardContainer.innerHTML = '';


        productItems.forEach(item => cardContainer.appendChild(item));
    });


