window.onload = () => {

    var body = document.body;
    var html = document.documentElement;



    /* SHOW CONTACT */

    var contactButton = document.getElementById("contact-button");
    var contactBox = document.getElementById("contact");




   



    // Type Effect 

    var i = 0;
    var txt = 'Visualiser. Executer. Developer.'; /* The text */
    var speed = 100; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typeText").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);

            typeText.style.height = "100%";
            typeText.style.opacity = "1";
        }
    }

    typeWriter();

    
    

}