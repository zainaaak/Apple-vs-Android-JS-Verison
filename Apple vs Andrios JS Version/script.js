// Controlling CSS & Attributes from JS
// document.getElementById("some-id").style; // accesess CSS rule from something in style
// document.getElementById("some-id").style.border = "2px solid black";
// document.getElementById("some-image").src = "images/newpic.jpg"  //chanegs an image
// document.getElementById("some-a-tag").href = "http://newlink.com" //change the hyperlink in HTML
// Changing an Image vs Adding a New Image
// to add an image where ther wasnt one before you ned a container for the image.
// containers are mepty paragraphs, h1 or div elements. usualy divs
// for e.g. in html: <div id="imge-contianer"></div>
// document.getElementById("image-container").innerHTML = "<img src="images/pic.jpg">";

// Apple vs Android
document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  //change the Android vs Apple image into andoid logo in the images folder
  document.getElementById("logo").src = "images/Android-Logo.jpg";

  // Change the 'Explore the Debate' link so that the link says 'Android Home'

  function changeLink() {
    document.getElementById("the-link").innerHTML = "Android Home";
  }

  // Change the 'Explore the Debate' link so that the background color is #a4c93b
  document.getElementById("the-link").style.background = "#a4c93b";

  // Change the 'Explore the Debate' link so that the href is now 'https://www.android.com/&#39;
  document.getElementById("the-link").href = "https://www.android.com/&#39";

  // Change the background color of the html to #a4c93b
  document.getElementById("the-html").style.background = " #a4c93b";

  //Change the base font-family to 'Roboto', sans-serif
  document.getElementById("the-body").style.fontFamily =
    " 'Roboto', sans-serif";

  // Add the class 'active' to the Android button.
  document.getElementById("android").classList.add("redborder");

  //Remove the class 'active' from the Apple button.
  document.getElementById("apple").classList.remove("redborder");
}

document.getElementById("apple").addEventListener("click", changetoApple);

function changetoApple() {
  document.getElementById("logo").src = "images/Apple-Logo.jpg";

  // Change the 'Explore the Debate' link so that the link says 'Apple Home'
  document.getElementById("the-link").innerHTML = "Apple Home";

  // Change the 'Explore the Debate' link so that the background color is #b6bcca
  document.getElementById("the-link").style.background = " #b6bcca";

  //Change the 'Explore the Debate' link so that the href is now 'https://www.apple.com/&#39;
  document.getElementById("the-link").href = "https://www.apple.com/&#39;";

  //Change the background color of the body to #b6bcca
  document.getElementById("the-html").style.background = "#b6bcca";

  //Change the base font family to 'Brygada 1918', serif
  document.getElementById("the-body").style.fontFamily =
    "'Brygada 1918', serif";

  //Add the class 'redborder' to the Apple button
  document.getElementById("apple").classList.add("redborder");

  //Remove the class 'redborder' from the Android button.
  document.getElementById("android").classList.remove("redborder");
}
