window.onload = () =>{

    document.getElementById("billboard").style.minHeight = window.innerHeight + 'px';

    
/* Change Image for mobile */
    const windowResize = window.onresize = () =>{

    const adSectionImageOne = document.getElementById("ad-section-image-1");
    const mq = window.matchMedia( "(max-width: 500px)" ); /* Save the media query match rule in a variable*/

    if (mq.matches){ /* If the rule MATCHES*/
        adSectionImageOne.src = "images/section-1-bg-m.jpg"; /* Change image */
    } else{
        adSectionImageOne.src = "images/section-1-bg.jpg";
    }

}

windowResize();

/* End of change image for mobile*/

}