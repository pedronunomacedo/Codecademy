var w = window.innerWidth;
var image1 = document.getElementById('orientation_date_image');
var image2 = document.getElementById('our_campus_image');
var image3 = document.getElementById('special_guest_lecture_image');

if (w <= 900) {
    image1.src = "resources/images/information-orientation-mobile.jpg";
    image2.src= "resources/images/information-campus-mobile.jpg";
    image3.src= "resources/images/information-guest-lecture-mobile.jpg";
}
else {
    image1.src = "resources/images/information-orientation.jpg";
    image2.src= "resources/images/information-campus.jpg";
    image3.src= "resources/images/information-guest-lecture.jpg";
}


var image1 = document.getElementById('software_engineering_img');
var image2 = document.getElementById('computer_art_img');
var image3 = document.getElementById('design_img');
var image4 = document.getElementById('data_img');
var image5 = document.getElementById('business_img');
var image6 = document.getElementById('marketing_img');

if (w <= 900) {
    image1.hidden = true;
    image2.hidden = true;
    image3.hidden = true;
    image4.hidden = true;
    image5.hidden = true;
    image6.hidden = true;
}