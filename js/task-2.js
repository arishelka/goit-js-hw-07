const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

const gallery = document.querySelector('.gallery');

const markup = images
    .map(image =>
        `<li><img src="${image.url}" alt="${image.alt}"></li>`
    )
    .join('');

gallery.insertAdjacentHTML('beforeend', markup);
