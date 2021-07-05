const htmlCatalogue = document.getElementById('catalogue');


fetch(`http://localhost:3000/api/cameras`)
    .then(function(res){
        if(res.ok){
            console.log( res.ok)
            return res.json();
        }    
    })
    //produits dans la réponse
    .then(function(res){
        console.log( res.length)

        for(let produit of res){
            console.log( produit)

	   

	    //Partie HTML
		htmlCatalogue.innerHTML += 
        `
            <div class="container">
              <div class="camera">
               <a href="fiche-produit.html?given_id=${produit._id}">
                <img src=${produit.imageUrl} alt="${produit.name}">
                <div class="text-info">
                    <h4 class="text-info">${produit.name}</h4>
                    <p class="text-info">${produit.price/100} €</p>
                </div>
                </div>
                </a>
        </div>
        `
        }
    })
    .catch(function() {
        window.location.href = 'error';
    })