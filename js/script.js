const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
    
    flipEffect: {
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
   
  direction: 'horizontal',
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }

// const dropbutton=document.getElementById("dropbtn");
// const dropbtncontent=document.getElementById("myDropdown");
 
// dropbutton.addEventListener("click", () => {
//             if (dropbtncontent.style.display === "block") {
//                 dropbtncontent.style.display = "none";
//             } else {
//                 dropbtncontent.style.display = "block";
//             }
//         });
//  document.addEventListener("click", (event) => {
//             if (!event.target.closest(".dropdown")) {
//                 dropbtncontent.style.display = "none";
//             }
//         });

function dropDown(){
  const content=document.getElementById("myDropdown");
  if(content.style.display == "block"){
    content.style.display ="none";
  }
  else{
    content.style.display="block";
  }
}
window.onclick=function(event){
  if(!event.target.matches('.dropbtn')){
    document.getElementById('myDropdown').style.dispaly="none";
  }
}


function emidropbtn(){
  const cont=document.getElementById("dropdown-emi");
  if(cont.style.display == "block"){
    cont.style.display ="none";
  }
  else{
    cont.style.display="block";
  }
}
window.onclick=function(event){
  if(!event.target.matches('.drpbtn')){
    document.getElementById('dropdown-emi').style.dispaly="none";
  }
}



const tabBody=document.querySelector(".tab-body");
const tabs=document.querySelector(".tabs");
const tabButtons=tabs.querySelectorAll("[role='tab']");
const tabPanels=Array.from(tabBody.querySelectorAll("[role='tabpanel']"));

function tabclickhandler(event){

  tabPanels.forEach(panel=>(panel.hidden = true));
  
  tabButtons.forEach(button=>button.setAttribute("aria-selected",false));

  event.currentTarget.setAttribute("aria-selected",true);

  const{id}=event.currentTarget;
  console.log(id);

  const tabpanel=tabBody.querySelector(`[aria-labelledby="${id}"]`);
  tabpanel.hidden=false;

}

tabButtons.forEach(button => button.addEventListener("click",tabclickhandler));