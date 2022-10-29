export function setupSticky() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {setupSticky()};

    // Get the header
    var header = document.getElementById('main-menu-container');
    console.log('sticky.js');
    console.log(header);

    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    console.log(sticky);

    // sticky to the drop down bar
    var drop_down_btn = document.getElementById('mturk-top-banner-drop-down-button');

//    console.log(drop_down_btn.classList[2]);

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function setupSticky() {
    console.log(drop_down_btn.classList[2]);
    if (drop_down_btn.classList[2] == 'none') {
        header.classList.add("sticky2");
    } else {
        header.classList.remove("sticky2");
    }

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }
}
