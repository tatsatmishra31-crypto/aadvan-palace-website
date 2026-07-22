const galleryImages = [
"images/gallery/gallery1.jpg",
"images/gallery/gallery2.jpg",
"images/gallery/gallery3.jpg",
"images/gallery/gallery4.jpg",
"images/gallery/gallery5.jpg",
"images/gallery/gallery6.jpg"
];


let currentImage = 0;

const gallery = document.getElementById("gallery-image");


setInterval(() => {

currentImage++;

if(currentImage >= galleryImages.length){
    currentImage = 0;
}

gallery.style.opacity = 0;

setTimeout(()=>{

gallery.src = galleryImages[currentImage];
gallery.style.opacity = 1;

},500);


},5000);
