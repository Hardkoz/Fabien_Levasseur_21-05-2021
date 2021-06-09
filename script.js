const dataApi = fetch("http://localhost:3000/api/cameras");

dataApi.then(async (responseData) => {
    console.log(responseData);

    const response = await responseData.json();
    console.log(response);

    try {
        //Obejt 0 nom  et prix api
        const picture = response [0].imageUrl;
        const name = response[0].name;
        const price = response[0].price;
        
        //carte2
        const picture1 = response [1].imageUrl;
        const name1 = response[1].name;
        const price1= response[1].price;

        //carte3
        const picture2 = response [2].imageUrl;
        const name2 = response[2].name;
        const price2 = response[2].price;

         //carte4
         const picture3 = response [3].imageUrl;
         const name3 = response[3].name;
         const price3 = response[3].price;

        //carte5
        const picture4 = response [4].imageUrl;
        const name4 = response[4].name;
        const price4 = response[4].price;
        
        //carte1
        console.log(picture);
        console.log(name);
         console.log(price);
         
         //carte2
         console.log(picture1);
         console.log(name1);
         console.log(price1);

         //carte3
         console.log(picture2);
         console.log(name2);
         console.log(price2);

         //carte4
         console.log(picture3);
         console.log(name3);
         console.log(price3);

         //carte5
         console.log(picture4);
         console.log(name4);
         console.log(price4);

        
        //carte1
        const affichage_picture = document.querySelector('#picture');
        const affichage_name = document.querySelector('#name');
        const affichage_price = document.querySelector('#price');
        
        //carte2
        const affichage_picture1 = document.querySelector('#picture1');
        const affichage_name1 = document.querySelector('#name1');
        const affichage_price1 = document.querySelector('#price1');

        //carte3
        const affichage_picture2 = document.querySelector('#picture2');
        const affichage_name2 = document.querySelector('#name2');
        const affichage_price2 = document.querySelector('#price2');

        //carte4
        const affichage_picture3 = document.querySelector('#picture3');
        const affichage_name3 = document.querySelector('#name3');
        const affichage_price3 = document.querySelector('#price3');

        //carte5
        const affichage_picture4 = document.querySelector('#picture4');
        const affichage_name4 = document.querySelector('#name4');
        const affichage_price4 = document.querySelector('#price4');
        
        //carte1
        affichage_picture.innerHTML = picture;
        affichage_name.innerHTML = name;
         affichage_price.innerHTML = price;
        
         //carte2
         affichage_picture1.innerHTML = picture1;
         affichage_name1.innerHTML = name1;
         affichage_price1.innerHTML = price1;

         //carte3
         affichage_picture2.innerHTML = picture2;
         affichage_name2.innerHTML = name2;
         affichage_price2.innerHTML = price2;

          //carte4
          affichage_picture3.innerHTML = picture3;
          affichage_name3.innerHTML = name3;
          affichage_price3.innerHTML = price3;

           //carte4
           affichage_picture4.innerHTML = picture4;
         affichage_name4.innerHTML = name4;
         affichage_price4.innerHTML = price4;

        //affichages des photos
        const picture = '<img src="${picture}">';
        affichage_picture.insertAdjacentHTML(picture);


    } catch (err) {
        console.log(err);
    }
})

.catch((err) => {
    console.log(err);
});
    
    
      
