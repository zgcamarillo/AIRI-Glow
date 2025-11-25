// announcement bar 
const announcements = [ 
    "FREE STANDARD US SHIPPING W $50 ORDER", 
    "AIRI GIFTS: SHOP NOW", 
    "25% OFF SITEWIDE LIVE NOW",
    "FREE INTERNATIONAL SHIPPING W $60 ORDER"
]
//we are starting at 0 index
let index = 0;
//adding roate announcements function
function rotateAnnouncements() {
    //find by ID
    const announcementText = document.querySelector("#announcementText");
    announcementText.classList.remove("fade");
    //restart animaton when text changes
    //adding delay to let computer catch up w animation
    setTimeout(() => {
        announcementText.innerHTML = announcements[index];
        announcementText.classList.add("fade");
    }, 50);
    //move unto the next announcament, and loop around.
    index = (index +1) % announcements.length;
}
rotateAnnouncements();
//rotate every 4 seconds
setInterval(rotateAnnouncements, 4000);