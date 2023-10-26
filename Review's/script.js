const reviews = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    text: "The iPhone 15 is a game-changer! The camera quality is stunning, and the battery life is significantly improved. I love the sleek design and the vibrant display. Definitely worth the upgrade!",
  },
  {
    id: 2,
    img: 'girl-7847557_1280.jpg',
    text: "I am impressed with the performance of the iPhone 15. The processor is lightning-fast, and the new features make multitasking seamless. The 5G connectivity is a game-changer, especially for streaming and downloading large files on the go.",
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT694rUc_5j_70El53xkrC6boywDG5pEyCkpg&usqp=CAU',
    text: "The iPhone 15's enhanced security features give me peace of mind, and the privacy settings provide better control over my data. The display is vivid and sharp, making it a pleasure to watch videos and play games. Overall, a great device for everyday use.",
  },
  {
    id: 4,
    img: 'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg',
    text: "The iPhone 15's improved durability is a standout feature for me. The device feels robust, and the water and dust resistance add an extra layer of protection. The updated iOS offers a user-friendly experience, and the customizable widgets make it easy to stay organized.",
  },
];
const img = document.getElementById('person');
const info = document.getElementById('text');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson();
})

function showPerson() {
  let item = reviews[currentItem];
  img.src = item.img;
  info.textContent = item.text;
}

nextBtn.addEventListener('click',function(){
  currentItem++;
  if(currentItem>reviews.length-1){
    currentItem=0;
  }
  showPerson();
})
prevBtn.addEventListener('click',function(){
  currentItem--;
  if(currentItem<0){
    currentItem=reviews.length-1;
  }
  showPerson();
})
randomBtn.addEventListener('click',function(){
  currentItem=Math.floor(Math.random()*reviews.length);
  showPerson();
})
