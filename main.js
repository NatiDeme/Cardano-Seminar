const speakers = [
  {
    id: 0,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
  },
  {
    id: 1,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
  },
  {
    id: 2,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
  },
  {
    id: 3,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
  },
  {
    id: 4,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
  },
  {
    id: 5,
    name: 'Natnael Demelash',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
  },
];

const speaker = document.getElementById('speaker');
const speakerDetail = document.createElement('ul');
speakerDetail.className = 'list';
let speakerElement = '';
for (let i = 0; i < speakers.length; i += 1) {
  speakerElement += `
  <ul class="flex flex-col flex-no-wrap items-center md:items-start md:max-h-96 md:flex-wrap md:ml-52" >
  <li>
  <div class="flex ml-5 gap-5 my-6">
      <div class="bg-[url('images/speakerbg.jpg')] bg-no-repeat speaker w-52">
          <img src="images/conference.jpg" class="h-24 mt-8 pl-5" alt="">
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
