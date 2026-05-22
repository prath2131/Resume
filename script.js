// header fix

window.onscroll= function(){
  const doScrollTop = document.documentElement.scrollTop;  

  if (window.innerWidth > 991){
    if(doScrollTop > 100){
        document.querySelector("header").classList.add("fixed")    
    }
    else{
        document.querySelector("header").classList.remove("fixed")
    }
  }
}
