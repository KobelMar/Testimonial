// let btnRight = document.getElementById('rightButton');
// btnRight.innerHTML = '<i class="fas fa-arrow-right fa-2x "></i>';
// let btnLeft = document.getElementById('leftButton');
// btnLeft.innerHTML = '<i class="fas fa-arrow-left fa-2x"></i>';

let clients = [
    {
      pictureSource: 'images/profile1.jpg',
      name: "Max Marcisiak",
      stars: 5,
      text: 'Hallo ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugiat aspernatur harum aperiam, quis eos officia.' 
    },
    {
        name: "Bernie Sanders",
        pictureSource: 'images/profile2.jpg',
        stars: 1,
        text: 'Der Gerät ist immer pünktlich consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugiat aspernatur harum aperiam, quis eos officia.' 
      }
]
let counter = 0;

let customerPicture = document.getElementById('image');
let customerName = document.getElementsByTagName('h3')[0];
let customerText = document.getElementById('text');

let divStars = document.getElementById('divStars');

for (i=0; i < clients[counter].stars; i++) {
    let star = document.createElement('i');
    star.classList.add('fas', 'fa-star');
    divStars.appendChild(star);
}

customerPicture.src = clients[counter].pictureSource;
customerName.textContent = clients[counter].name;
customerText.textContent = clients[counter].text;

document.getElementById('rightButton').addEventListener('click', ()=> {

    if (counter == 1) {
        counter = -1};

    counter ++;

    while (divStars.firstChild) {
        divStars.removeChild(divStars.lastChild);
      }

    customerPicture.src = clients[counter].pictureSource;
    customerName.textContent = clients[counter].name;
    customerText.textContent = clients[counter].text;

    for (i=0; i < clients[counter].stars; i++) {
        let star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        divStars.appendChild(star);
    }
})

document.getElementById('leftButton').addEventListener('click', ()=> {

    if (counter == 0) {
        counter = 2};

    counter --;

    while (divStars.firstChild) {
        divStars.removeChild(divStars.lastChild);
      }

    customerPicture.src = clients[counter].pictureSource;
    customerName.textContent = clients[counter].name;
    customerText.textContent = clients[counter].text;

    for (i=0; i < clients[counter].stars; i++) {
        let star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        divStars.appendChild(star);
    }
})





