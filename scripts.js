let products = [       
    {imgloc:`./photos/_.jpeg`, name:`red matching bracelets`, price:`2kd`, addtocart:`addtocart`,},
    {imgloc:`./photos/Bead_Bracelets.jpeg`, name:`3 blue&white bracelets`, price:`2.5kd`, addtocart:`addtocart`,},
    {imgloc:`./photos/blue_butterfly_pearl_necklace.jpeg`, name:` blue butterfly pearl <br> bracelet`, price:`2.5kd`, addtocart:`addtocart`,},

    ] 

 
    let productlist = document.getElementById("carrd") 

    products.forEach(element => {
    
      productlist.innerHTML += `<div class="card">
      <img src=${element.imgloc} >
       <h3> ${element.name}</h3>
      <p class="price">2.5KD</p>
       <p></p>
       <p><button class="btn-danger"><span class="text">add to cart</span></button></p>
       </div>`
    });

var removeCartItemButtons = document.getElementsByClassName("btn-danger")
console.log(removeCartItemButtons );


for (var i = 0; i < removeCartItemButtons.length; i++)  {
    var button = removeCartItemButtons [i]
    button.addEventListener("click", function(event){
 var buttonClicked = event.target
 buttonClicked.parentELement.parentELement.remove()
    })
    
    }

