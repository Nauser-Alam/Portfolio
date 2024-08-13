var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove active classes from all tab links
    for (var tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    // Remove active classes from all tab contents
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active class to the clicked tab link
    document.querySelector(`.tab-links[onclick="opentab('${tabname}')"]`).classList.add("active-links");
    // Add active class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}
// *************************************  My Works/Projects********
