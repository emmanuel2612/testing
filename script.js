window.onload = () => {


    const menu = document.querySelector(".menu");
    const modal = document.querySelector(".modal-container");
    const close = document.querySelector(".close");


    const showModal = () => {


        setTimeout(() => {
            modal.style.display = "flex";
        }, 5000);

        setTimeout(() => {
            modal.style.opacity = "1";
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            modal.style.overflow = "hidden";
        }, 6000);

        console.log("hey");
    }


    close.onclick = () => {

        modal.style.opacity = "0";

        setTimeout(() => {
            modal.style.display = "none"
        }, 300);
    }

    showModal();



}


