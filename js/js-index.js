// /////////////////// toggle icon navbar   ////////////////////////
$("#menu-icon").click(() => {
  $("#menu-icon").toggleClass("fa-xmark");
$(".navlist").toggleClass("open")
});

const scrollScale =document.querySelectorAll(".scroll-scale")
scrollScale.forEach((el)=>observer.observe(el));

// $("#menu-icon").click(() => {
//   $("#menu-icon").toggleClass("fa-xmark");
//   $(".navlist").toggleClass("open");
// });
$("#xz1").click(() => {
  $(".cvb1").fadeToggle(500);
});

$("#xz2").click(() => {
    $(".cvb2").fadeToggle(500);
  });
  
$("#xz3").click(() => {
    $(".cvb3").fadeToggle(500);
  });
  $("#xz4").click(() => {
      $(".cvb4").fadeToggle(500);
    });
    
$("#xz5").click(() => {
    $(".cvb5").fadeToggle(500);
  });
  $("#xz6").click(() => {
      $(".cvb6").fadeToggle(500);
    });
// const scrollBottom =document.querySelectorAll(".scroll-bottom")
// scrollBottom.forEach((el)=>observer.observe(el));

// const scrollTop =document.querySelectorAll(".scroll-top")
// scrollTop.forEach((el)=>observer.observe(el));


// $(".scroll-scale").scrollScale(()=>{
//   $("#menu-icon").toggleClass("fa-xmark");

// })