const mobilePhones = [
    { name: "iPhone 13 Pro Max", price: 1099, camera: "Triple 12 MP", battery: "4352 mAh",image:"https://f.nooncdn.com/p/pnsku/N53432154A/45/_/1694762142/f90bc74a-79d0-4546-8881-52014588a850.jpg?format=avif&width=240", },
    { name: "Samsung Galaxy S21", price: 1199, camera: "Quad 108 MP", battery: "5000 mAh",image:"https://f.nooncdn.com/p/v1687521063/N43692686A_1.jpg?format=avif&width=240" },
    { name: "Google Pixel 6 Pro", price: 899, camera: "Triple 50 MP", battery: "5003 mAh",image:"https://f.nooncdn.com/p/pzsku/Z9448F80994D2AFFADF74Z/45/_/1681323625/0cb96612-8adb-419a-bf61-5f48da41b650.jpg?format=avif&width=240" },
    { name: "OnePlus 9 Pro", price: 969, camera: "Quad 48 MP", battery: "4500 mAh",image:"https://f.nooncdn.com/p/pzsku/Z7DD50BEAF0E1135FB957Z/45/_/1650978472/140b2ed9-1c5e-4fec-a40f-0d92b6d4418c.jpg?format=avif&width=240" },
    { name: "Xiaomi Mi 11 Ultra", price: 1199, camera: "Triple 50 MP", battery: "5000 mAh",image:"https://f.nooncdn.com/p/pzsku/Z874E34BC06983F35ECD0Z/45/_/1711243608/5cc48eeb-d9ac-46c9-9936-d158428002cd.jpg?format=avif&width=240" },
    { name: "Sony Xperia 1 III", price: 1299, camera: "Triple 12 MP", battery: "4500 mAh",image:"https://f.nooncdn.com/p/pzsku/Z147C8823C19CA9365FF4Z/45/_/1643453991/75d28d19-4ccd-42c1-8352-a6a08afffe4c.jpg?format=avif&width=240" },
    { name: "Apple iPhone 13", price: 799, camera: "Dual 12 MP", battery: "3095 mAh",image:"https://f.nooncdn.com/p/v1686205678/N50838836A_1.jpg?format=avif&width=240" },
    { name: "Samsung Galaxy Z Fold 3", price: 1799, camera: "Triple 12 MP", battery: "4400 mAh" ,image:"https://f.nooncdn.com/p/pzsku/ZAAB3EBB14BBAD73C5811Z/45/_/1707332064/a1d139f9-42e3-42c2-818d-ac278cd599c3.jpg?format=avif&width=240"},
    { name: "Xiaomi Mi 11i", price: 699, camera: "Triple 108 MP", battery: "4520 mAh",image:"https://f.nooncdn.com/p/pzsku/ZE1B91450AB0F4FAA22BDZ/45/_/1711242202/2a5d42d3-3897-41b1-82dd-c6628b035c88.jpg?format=avif&width=800" },
    { name: "OnePlus 9", price: 729, camera: "Triple 48 MP", battery: "4500 mAh" ,image:"https://f.nooncdn.com/p/pzsku/Z45B5903C941D13201A66Z/45/_/1650630831/a0797752-c1e3-43f2-b249-f9db6cf17777.jpg?format=avif&width=240"},
    { name: "Google Pixel 5a", price: 449, camera: "Dual 12.2 MP", battery: "4680 mAh" ,image:"https://f.nooncdn.com/p/pzsku/Z5A03BB425DB9B6A84FF9Z/45/_/1686161200/3e6c4dd3-a3fe-42bd-9c3c-8b1187b7474c.jpg?format=avif&width=240"},
    { name: "Sony Xperia 5 III", price: 999, camera: "Triple 12 MP", battery: "4500 mAh" ,image:"https://f.nooncdn.com/p/pzsku/ZC1F3835D858A835222FBZ/45/_/1700776372/f812664f-0281-4ce3-8389-649c21efa17d.jpg?format=avif&width=240"},
    { name: "iPhone SE (2020)", price: 399, camera: "Single 12 MP", battery: "1821 mAh",image:"https://f.nooncdn.com/p/v1686205657/N41222422A_1.jpg?format=avif&width=240" },
    { name: "Samsung Galaxy A52", price: 349, camera: "Quad 64 MP", battery: "4500 mAh" ,image:"https://f.nooncdn.com/p/pzsku/Z2837F2C306601735D05EZ/45/_/1686296393/8c51bae3-f784-47f9-a3d1-616ce0e4b97b.jpg?format=avif&width=240"},
    { name: "Redmi Note 10 Pro", price: 279, camera: "Quad 108 MP", battery: "5020 mAh",image:"https://f.nooncdn.com/p/v1650430888/N52352202A_8.jpg?format=avif&width=240" },
    { name: "OnePlus Nord 2", price: 399, camera: "Triple 50 MP", battery: "4500 mAh" ,image:"https://f.nooncdn.com/p/pzsku/Z13268985E6CCA1C8B234Z/45/_/1710058803/b51bf28c-3dfb-4374-9ee8-003acc9614be.jpg?format=avif&width=240"},
    // { name: "Google Pixel 4a", price: 349, camera: "Single 12.2 MP", battery: "3140 mAh",image:"" },
    // { name: "Sony Xperia 10 III", price: 499, camera: "Triple 12 MP", battery: "4500 mAh",image:"" },
    // { name: "iPhone 12 Mini", price: 699, camera: "Dual 12 MP", battery: "2227 mAh" ,image:""},
    // { name: "Samsung Galaxy S20 FE", price: 699, camera: "Triple 12 MP", battery: "4500 mAh",image:"" }
];

let div = document.querySelector('.phones')
for (let i = 0; i < mobilePhones.length; i++) {

    // console.log(mobilePhones[i]);

    div.innerHTML += `

    <div class="card" style="width: 18rem;">

    <img src="${mobilePhones[i].image}" class="card-img-top w-75 m-auto" alt="...">
                
                <div class="card-body">
                  <h5 class="card-title"><h4>${mobilePhones[i].name}</h4></h5>
      </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Camera : ${mobilePhones[i].camera}</li>
                  <li class="list-group-item">Bettery : ${mobilePhones[i].battery}</li>
                <li class="list-group-item"> <h5>Price :  $${mobilePhones[i].price}</h5></li>
                </ul>
                <div class="card-body">
            <button class="btn btn-danger" onclick="addtocart(${i})">Add to Cart</button>

                
                </div>
              </div>
    
    
    
    
    `


}



// addarray = []



let addarray;
let items = JSON.parse(localStorage.getItem('cartItems'));
if(items === null){
  addarray = [] ;
}else{
  addarray = items;
}


// if (window.location('relord')) {
//   addarray = ''
  
// }



function addtocart(index) {
alert('thank you')

 if (addarray.includes(mobilePhones[index])) {

  mobilePhones[index].quantity += 1 
}
 else{
  addarray.push(mobilePhones[index])
mobilePhones[index].quantity = 1
  }
  console.log(addarray);

 }












 function showitems() {

  window.location = 'cart.html'

  localStorage.setItem('cartitems' , JSON.stringify(addarray));

  // localStorage.setItem('cartItems', JSON.stringify(addarray))

//  localStorage.getItem('cartitems',JSON.parse(addarray))


  
 }