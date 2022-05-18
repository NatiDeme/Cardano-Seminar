const speakers = [
  {
    id: 0,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/conference.jpg', alt: 'cover picture' },
  },
  {
    id: 1,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/conference.jpg', alt: 'cover picture' },
  },
  {
    id: 2,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/conference.jpg', alt: 'cover picture' },
  },
  {
    id: 3,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/conference.jpg', alt: 'cover picture' },
  },
  {
    id: 4,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/conference.jpg', alt: 'cover picture' },
  },
  {
    id: 5,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/conference.jpg', alt: 'cover picture' },
  },
];

const speaker = document.getElementById('speaker');
const speakerDetail = document.createElement('ul');
speakerDetail.className = 'list';
let speakerElement = '';

if (window.innerWidth > 768) {
  speakerElement = '';
  for (let i = 0; i < speakers.length; i += 1) {
    speakerElement += `
  <ul class="flex flex-col flex-no-wrap items-center md:items-start" >
  <li>
  <div class="flex gap-4 my-4">
      <div class="bg-[url('images/speakerbg.jpg')] bg-no-repeat speaker w-52">
          <img src="${speakers[i].image.link}" class="h-24 mt-8 pl-5" alt="">
      </div>
      <div class="md:w-52">
          <h3 class="font-black text-base">${speakers[i].name}</h3>
          <p class="text-brandorange">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="mt-2">
              <div class="bg-brandgray h-0.5 w-8"></div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
  </div>
</li>
</ul>
  `;
  }
} else {
  speakerElement = '';
  for (let i = 0; i < 2; i += 1) {
    speakerElement += `
  <ul class="flex flex-col flex-no-wrap items-center md:items-start md:max-h-96 md:flex-wrap md:ml-52" >
  <li>
  <div class="flex ml-5 gap-5 my-6">
      <div class="bg-[url('images/speakerbg.jpg')] bg-no-repeat speaker w-52">
          <img src="${speakers[i].image.link}" class="h-24 mt-8 pl-5" alt="">
      </div>
      <div class="">
          <h3 class="font-black text-base">${speakers[i].name}</h3>
          <p class="text-brandorange">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="mt-2">
              <div class="bg-brandgray h-0.5 w-8"></div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
  </div>
</li>
</ul>
  `;
  }
}

const more = document.getElementById('loadMore');
const partners = document.getElementById('partners');
const footer = document.getElementById('footer');
// eslint-disable-next-line no-unused-vars
function showMore() {
  speakerElement = '';
  more.style.display = 'none';
  partners.style.display = 'block';
  footer.style.display = 'block';
  for (let i = 2; i < speakers.length; i += 1) {
    speakerElement += `
  <ul class="flex flex-col flex-no-wrap items-center md:items-start md:max-h-96 md:flex-wrap md:ml-52" >
  <li>
  <div class="flex ml-5 gap-5 my-6">
      <div class="bg-[url('images/speakerbg.jpg')] bg-no-repeat speaker w-52">
          <img src="${speakers[i].image.link}" class="h-24 mt-8 pl-5" alt="">
      </div>
      <div class="">
          <h3 class="font-black text-base">${speakers[i].name}</h3>
          <p class="text-brandorange">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="mt-2">
              <div class="bg-brandgray h-0.5 w-8"></div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
  </div>
</li>
</ul>
  `;
  }
  speaker.appendChild(speakerDetail);
  speakerDetail.innerHTML += speakerElement;
}

window.addEventListener('resize', () => {
  window.location.reload();
});

let isClicked = false;
speaker.appendChild(speakerDetail);
speakerDetail.innerHTML += speakerElement;

function display() {
  if (!isClicked) {
    document.getElementById('mnc').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menu2').style.display = 'block';
    isClicked = true;
  } else {
    document.getElementById('mnc').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('menu2').style.display = 'none';
    isClicked = false;
  }
}

// eslint-disable-next-line no-unused-vars
function menuClicked() {
  display();
}