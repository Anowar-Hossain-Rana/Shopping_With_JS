
const cartArray = [];

function display(cartProduct){

   let totalPrice = 0;
    const tablebody = document.getElementById('products-cart');
    tablebody.innerHTML = " ";
    for (let i = 0; i < cartProduct.length; i++ )
    {
        console.log(cartArray[i]);
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;

        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML =`
            <th>${ i + 1 }</th>
            <td>${name}</td>
            <td>${price}</td>        
        `;
        
        tablebody.appendChild(tr);

    }
    const tr = document.createElement('tr');
        tr.innerHTML =`
        <th></th>
        <td>Total Price</td>
        <td>${totalPrice}</td>              
        `;
        tablebody.appendChild(tr);

}

function aaddToCart(element){
// console.log(element.parentNode.parentNode.children)
// console.log(element.parentNode.parentNode.children[0].innerText)
// console.log(element.parentNode.parentNode.children[1].children[0].innerText)

const productName = element.parentNode.parentNode.children[0].innerText;
// console.log(productName)

const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
// console.log(productprice)

const productObj ={
    productName: productName,
    productPrice: parseFloat(productPrice)
}
cartArray.push(productObj);

// console.log(cartArray)

document.getElementById('total-products').innerText = cartArray.length;

display(cartArray);

};