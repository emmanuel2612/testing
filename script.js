window.onload = () => {


    const modal = document.querySelector(".modal-container");
    const close = document.querySelector(".close");

    const showModal = () => {

        setTimeout(() => {
            modal.style.display = "flex";
        }, 5000);

        setTimeout(() => {
            modal.style.opacity = "1";
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            modal.body.style.overflow = "hidden";
        }, 6000);
    }



    close.onclick = () => {

        modal.style.opacity = "0";
        document.documentElement.style.overflow = "visible";
            document.body.style.overflow = "visible";
            modal.body.style.overflow = "visible";

        setTimeout(() => {
            modal.style.display = "none"
        }, 300);
    }

    showModal();


}


