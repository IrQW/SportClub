function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const getServerLoadingTime = () => {
            if (!document.cookie.includes('server-loading-time')) return -1;
            return parseInt(
                document.cookie.match(/server-loading-time=(.+?);*/)[1],
                10,
            );
        };
        const loadTime = window.performance.now().toFixed(2);
        document.getElementById(
            'LoadTime').innerText = `${loadTime} ms (client) + ${getServerLoadingTime()} ms (server)`;

    });
})();

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}