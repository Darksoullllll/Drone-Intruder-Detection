const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);
function showImages() {
    document.getElementById('imageContainer').style.display = 'grid';
    document.getElementById('btn').style.display = 'none';
}
function showName(name, id) {
    document.getElementById(id).innerHTML = '<p>' + name + '</p>';
}
function uploadImage() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`; 
    imageView.textContent=" ";
    imageView.style.border=0;
}

dropArea.addEventListener( "dragover", function (e){
    e.preventDefault();
});
dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});
