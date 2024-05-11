
console.log('cart items');
// let card = JSON.parse(localStorage.getItem(cartitems))
let carditems = JSON.parse(localStorage.getItem('cartitems'));

// console.log(carditems);

let div = document.querySelector('.items')





function addquantity(index) {

    carditems[index].quantity += 1
    

    console.log(carditems[index].quantity);
    
    


}



function deletquantity(index) {

    carditems[index].quantity -= 1
    

    console.log(carditems[index].quantity);
    if (carditems[index].quantity < 1 ) 
        {
            carditems.splice(carditems[index],1,'')
        
    }


}   


// alert('thank you')


        
        
       
        
            function addQuantity (index){
                div.innerHTML = ''
                carditems[index].quantity += 1
                renderItems()
            }



            function deletQuantity (index){
                div.innerHTML = ''
                carditems[index].quantity -= 1
                renderItems()
                if(carditems[index].quantity === 0){
                    div.innerHTML = ''
                    carditems.splice(index , 1)
                    renderItems()
                }
            }











function renderItems (){



    if(carditems != null && carditems.length > 0 ){
        for(let i = 0; i < carditems.length; i++){




            
            console.log(carditems[i]);
            // div.innerHTML = ''
            div.innerHTML += `




            
            <div class="d-flex border border-dark rounded w-25   p-2  flex-wrap justify-content-between align-items-center ">




            

            <div class="w-100 flex-wrap ">
            
            <img src="${carditems[i].image}" class="card-img-top  w-75" alt="...">

            <h5>${carditems[i].name}</h5>
            <p>Camera: ${carditems[i].camera}</p>
            <p>Bettery: ${carditems[i].battery}</p>
            <p>Price: $${carditems[i].pric}</p>
           
            </div>





            <div class="w-100 justify-content-between">
            
            
            
            <button class="btn btn-danger" onclick="deletQuantity(${i})">--</button>
            ${carditems[i].quantity}
            <button class="btn btn-danger" onclick="addQuantity(${i})">+</button>
            
            <button class="btn btn-danger m-2" onclick="deletitems(${i})">Delet to cart</button>
            </div>


            `
            // renderItems()

        }
    }else{
        console.log('cart item empty ha maalik')
        div.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}



function deletitems(index) {

    
        div.innerHTML = ''
        carditems.splice(index , 1)
  localStorage.setItem('car' , JSON.stringify(carditems));

        renderItems()
    


      
//  carditems = JSON.parse(localStorage.getItem('cartitems'));


// renderItems()
}

renderItems()
