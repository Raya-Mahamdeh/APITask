

async function getProducts(){
    const response = await fetch("https://dummyjson.com/products");
    const product = await response.json();
    const Products = product.products;
    
   

    const result = Products.map(function(products){
        return `
        <div class="product">         
        <h2>${products.title}</h2>
        <p>Price: ${products.price}$</p>
        <img src="${products.thumbnail}"/>
        <p>${products.description}</p>
        </div> 
        `      
    });
    document.querySelector(".productSection").innerHTML = result;

   
}

getProducts();