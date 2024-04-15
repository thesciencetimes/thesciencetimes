var img = document.getElementById('image'); 
var container = document.getElementById('container');
//or however you get a handle to the IMG
var img_width = img.clientWidth;
var img_height = img.clientHeight;
var container_width = container.clientWidth;
if (img_width>container_width){
    img_width = container_width;
}
