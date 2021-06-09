const dataApi = fetch("http://localhost:3000/api/cameras");

dataApi.then(async (responseData) => {
    console.log(responseData);

    const response = await responseData.json();
    console.log(response);

    try {
        //Obejt 0 nom  et prix api
        const name = response[0].name;
        const description = response[0].description;
        const price = response[0].price;

        console.log(name);
        console.log(description);
        console.log(price);
        

        const affichage_name = document.querySelector('#name');
        const affichage_description = document.querySelector('#description');
        const affichage_price = document.querySelector('#price');

        affichage_name.innerHTML = name;
        affichage_description.innerHTML = description;
        affichage_price.innerHTML = price;



    } catch (err) {
        console.log(err);
    }
})

.catch((err) => {
    console.log(err);
});