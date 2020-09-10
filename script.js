window.onload = () => {

    const cardOne = document.getElementById("cardOne");
    const demo = document.getElementById("demo");
    const originalInnerHTML = demo.innerHTML;

cardOne.onclick = () => {


    cardOne.classList.toggle("flipToAnswer");

    if (cardOne.classList.contains("flipToAnswer")){

        setTimeout(() => {
            demo.innerHTML = "hello";
        }, 150);
    }

    else{
        setTimeout(() => {
            demo.innerHTML = originalInnerHTML;
        }, 150);
        
    }
    

}





}
