export function setupSticky() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {setupSticky()};
    document.getElementById('mturk-top-banner-arrow').addEventListener('click', setupSticky)

    // Get the header
    var header = document.getElementById('main-menu-container');
    console.log('sticky.js');
    console.log(header);

    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    console.log(sticky);

    // sticky to the drop down bar
    var drop_down_btn = document.getElementById('mturk-top-banner-drop-down-button');

    let dropdown_top = document.getElementById("mturk-top-banner");
    let dropdown = document.getElementById("mturk-top-banner-drop-down-content");
    let offset = dropdown.offsetHeight + dropdown_top.offsetHeight
    console.log(offset)

    console.log(drop_down_btn.classList[2]);
    if (drop_down_btn.classList[2] == 'none') {
        header.classList.add("sticky2");
        header.style.marginTop = offset + "px";

    }

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function setupSticky() {
    console.log(drop_down_btn.classList[2]);
    if (drop_down_btn.classList[2] == 'none') {
        console.log('sticky2')
        header.classList.add("sticky2");
        header.style.marginTop = offset + "px";
    } else {
        header.classList.remove("sticky2");
        header.style.marginTop = "";
    }

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }
}
