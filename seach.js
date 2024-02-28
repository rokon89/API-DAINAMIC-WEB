
const lodephone = async (phonesearch) => {
    const res  = await fetch (`https://openapi.programming-hero.com/api/phones?search=${phonesearch}`)
    const data = await res.json()
    const phone = data.data; 
    displayPhones(phone)
}
const displayPhones = (phones) =>{

    const phoneConteinar = document.getElementById("phone-containar");
    phoneConteinar.innerText = ""
    phones.forEach(elements => {

        // CREACT A DIV
        const phoneCard = document.createElement('div');
        phoneCard.classList = (`card w-96 bg-indigo-100 shadow-xl p-4 `);
        phoneCard.innerHTML = `
        <figure><img src="${elements.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Name : ${elements.phone_name}</h2>
                <p> More Ditels : ${elements.slug}</p>
                <p> company : ${elements.brand}</p>

            <div class="card-actions justify-center pt-5">
                <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>`;
        phoneConteinar.appendChild(phoneCard);
       
    })
    
};

const button = ()=>{
        const search = document.getElementById("input")
        const searchtext = search.value
        lodephone(searchtext)
    }

//lodephone();