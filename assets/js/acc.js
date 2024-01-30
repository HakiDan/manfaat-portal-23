const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});

$(document).ready(function(){

  $('.ondemand').hide();
  $('.showmore').show();
  $('.showless').hide();
  
  $('.showmore').on('click', function(){
  	$('.ondemand').slideDown("slow", "swing");
    $('.showmore').hide();
  	$('.showless').show();
  });
  
  $('.showless').on('click', function(){
  	$('.ondemand').slideUp("slow", "swing");
    $('.showmore').show();
  	$('.showless').hide();
  });
  
  
});