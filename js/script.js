// Prelaoder
window.addEventListener("load", function(){
  document.querySelector(".preloader").classList.add("opacity-0");

  setTimeout(function(){
    document.querySelector(".preloader").style.display="none";
  },1000);
})


// Portfolio Item Filter

// Untuk select kategori| 56:26 #4 Personal Portfolio Complete Website using only Html Css Javascript
// Menampilkan portfolio berdasarkan kategorinya

const filterContainter=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainter.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem=portfolioItems.length; 
      
      for(let i=0; i<totalFilterBtn; i++)
      {
        filterBtns[i].addEventListener("click",function(){
          filterContainter.querySelector(".active").classList.remove("active");
          this.classList.add("active");

          const filterValue=this.getAttribute("data-filter");
          for(let k=0; k<totalPortfolioItem; k++){
            if(filterValue === portfolioItems[k].getAttribute("data-category")){
              portfolioItems[k].classList.remove("hide");
              portfolioItems[k].classList.add("show");
            }else{
              portfolioItems[k].classList.remove("show");
              portfolioItems[k].classList.add("hide");
            }
            if(filterValue === "all"){
              portfolioItems[k].classList.remove("hide");
              portfolioItems[k].classList.add("show");
            }
          }
        })
      }


// Portfolio Lightbox
const lightbox = document.querySelector(".lightbox"),
      lightboxClose = lightbox.querySelector(".lightbox-close"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex=0;

for(let i=0; i<totalPortfolioItem; i++){
  portfolioItems[i].addEventListener("click", function(){
    itemIndex=i;
    changeItem();
    toggleLightBox();
  })
}

function nextItem(){
  if(itemIndex === totalPortfolioItem-1){
    itemIndex=0;
  }else{
    itemIndex++;
  }
  changeItem();
}
function prevItem(){
  if(itemIndex === 0){
    itemIndex=totalPortfolioItem-1;
  }else{
    itemIndex--;
  }
  changeItem();
}

function toggleLightBox(){
  lightbox.classList.toggle("open");
}

function changeItem(){
  imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
  lightboxImg.src=imgSrc;
  lightboxImg.src=imgSrc;
  lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
  lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;
}


// Close Lightbox
lightbox.addEventListener("click", function(event){
  if(event.target === lightboxClose || event.target === lightbox){
    toggleLightBox();
  }
})

// Aside navbar
const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length;

for(let i=0; i<totalNavList; i++){
  const a=navList[i].querySelector("a");
  a.addEventListener("click", function(){
    for(let j=0; j<totalNavList; j++){
      navList[j].querySelector("a").classList.remove("active");
    }
  this.classList.add("active");
  })
}