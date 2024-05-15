
console.log('cart items');
// let card = JSON.parse(localStorage.getItem(cartitems))
let carditems = JSON.parse(localStorage.getItem('cartitems'));

// console.log(carditems);

let divs = document.querySelector('.items')
let total = document.querySelector('#total')






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
                divs.innerHTML = ''
                carditems[index].quantity += 1

                renderItems()
            }



            function deletQuantity (index){
                divs.innerHTML = ''
                carditems[index].quantity -= 1

                renderItems()

                if(carditems[index].quantity === 0){
                    divs.innerHTML = ''
                    total.innerHTML=""
                    carditems.splice(index , 1)
                    renderItems()
                }
            }











function renderItems(){
    



    if(carditems != null && carditems.length > 0 ){
        let totalprice = 0;
        for(let i = 0; i < carditems.length; i++){

            totalprice += carditems[i].price * carditems[i].quantity
            





            
            console.log(carditems[i]);
            // div.innerHTML = ''
            divs.innerHTML += `




            <div class="card m-1" style="width: 18rem;">

            <div class="d-flex border border-dark rounded w-100   p-2  flex-wrap justify-content-between align-items-center ">




            

            <div class="w-100 flex-wrap ">
            
            <img src="${carditems[i].image}" class="card-img-top  w-75" alt="...">

            <h5>${carditems[i].name}</h5>
            <p>Camera: ${carditems[i].camera}</p>
            <p>Bettery: ${carditems[i].battery}</p>
            <p>Price: $${carditems[i].price }</p>

            

           
            </div></div>





            <div class="w-100 justify-content-between">
            
            
            
            <button  onclick="deletQuantity(${i})">--</button>
            ${carditems[i].quantity}
            <button  onclick="addQuantity(${i})">+</button>
            
            <button  onclick="deletitems(${i})">Delet to cart</button>
            </div>





            `
            total.innerHTML = `
            <p>Bettery: ${totalprice}</p>


            
            `
            // renderItems()
            console.log(i);

        }
    }else{
        console.log('cart item empty ha maalik')
        divs.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}



function deletitems(index) {

    
        divs.innerHTML = ''
        total.innerHTML=''

        carditems.splice(index , 1)
  localStorage.setItem('car' , JSON.stringify(carditems));
  

        renderItems()
    


      
//  carditems = JSON.parse(localStorage.getItem('cartitems'));


renderItems()
}

renderItems()