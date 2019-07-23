getNavbar();

function getNavbar(){
    
    var navList = document.querySelector('#navList');

    navList.innerHTML +=
        `<li class="nav-item active" id="services">
        <a class = "nav-link"
        href = "#serviceTable"> Szolgáltatásaink </a>
        </li><br>
            <li class="nav-item active" id="themes">
                <a class = "nav-link"
                href = "#themesSection" >Témakörök</a>
            </li><br>
            <li class="nav-item active" id="training">
                <a class = "nav-link"
                href = "#trainingSection" >Tréningformák</a>
            </li><br>
            <li class="nav-item active" id="contact">
                <a class = "nav-link"
                href = "#contactSection" >Kapcsolat</a>
            </li><br>
            <li class="nav-item active" id="aboutUs">
                <a class = "nav-link"
                href = "#aboutUsSection" >Rólunk</a>
            </li>`


}