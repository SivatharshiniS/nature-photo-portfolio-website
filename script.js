let images=[];
let index=0;

function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openGallery(type){

  if(type==="animals"){
    images=[
      "https://picsum.photos/id/237/500",
      "https://picsum.photos/id/219/500",
      "https://picsum.photos/id/433/500",
      "https://picsum.photos/id/593/500"
    ];
  }

  if(type==="birds"){
    images=[
      "https://picsum.photos/id/1024/500",
      "https://picsum.photos/id/1062/500",
      "https://picsum.photos/id/1074/500",
      "https://picsum.photos/id/1025/500"
    ];
  }

  if(type==="mountain"){
    images=[
      "https://picsum.photos/id/1018/500",
      "https://picsum.photos/id/1002/500",
      "https://picsum.photos/id/1003/500",
      "https://picsum.photos/id/1015/500"
    ];
  }

  if(type==="forest"){
    images=[
      "https://picsum.photos/id/1011/500",
      "https://picsum.photos/id/1036/500",
      "https://picsum.photos/id/1020/500",
      "https://picsum.photos/id/103/500"
    ];
  }

  if(type==="trees"){
    images=[
      "https://picsum.photos/id/1040/500",
      "https://picsum.photos/id/1039/500",
      "https://picsum.photos/id/1056/500",
      "https://picsum.photos/id/1043/500"
    ];
  }

  if(type==="hills"){
    images=[
      "https://picsum.photos/id/1043/500",
      "https://picsum.photos/id/1050/500",
      "https://picsum.photos/id/1069/500",
      "https://picsum.photos/id/1070/500"
    ];
  }

  if(type==="frame"){
    images=[
      "https://picsum.photos/id/200/500",
      "https://picsum.photos/id/201/500",
      "https://picsum.photos/id/202/500",
      "https://picsum.photos/id/203/500"
    ];
  }

  if(type==="book"){
    images=[
      "https://picsum.photos/id/210/500",
      "https://picsum.photos/id/211/500",
      "https://picsum.photos/id/212/500",
      "https://picsum.photos/id/213/500"
    ];
  }

  index=0;
  show();
}

function show(){
  document.getElementById("gallery").style.display="flex";
  document.getElementById("img").src=images[index];
}

function next(){
  index=(index+1)%images.length;
  show();
}

function prev(){
  index=(index-1+images.length)%images.length;
  show();
}
/* KEYBOARD ARROW CONTROL */
document.addEventListener("keydown", function(e){

  let gallery = document.getElementById("gallery");

  // gallery open இருந்தா மட்டும் work ஆகும்
  if(gallery.style.display === "flex"){

    if(e.key === "ArrowRight"){
      next();   // next image
    }

    if(e.key === "ArrowLeft"){
      prev();   // previous image
    }

  }

});

function closeGallery(){
  document.getElementById("gallery").style.display="none";
}

function contactOptions(type){
  let c=confirm(type==="phone"?"Call?\nCancel=Copy":"Mail?\nCancel=Copy");
  if(c){
    window.location.href= type==="phone"?"tel:9876543210":"mailto:abcd@gmail.com";
  }else{
    navigator.clipboard.writeText(type==="phone"?"9876543210":"abcd@gmail.com");
    alert("Copied");
  }
}