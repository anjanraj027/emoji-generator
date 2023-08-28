//Initially thought to call emoji API directly but it was not available as image so plan dropped
let url = "https://emojihub.yurace.pro/api/random";

//selecting both buttons
let btn1 = document.querySelector("#gen");
let btn2 = document.querySelector("#down");

//selecting image displayer in html
let display = document.querySelector("#image");

//just to check if the addevent was working or not
// let para = document.querySelector("p");

//adding eventlistener for generate button
btn1.addEventListener("click", () => {
  console.log("Generate button clicked");
  getEmoji();
  //   console.log(result)
});

//i don't see if i need it at all
// btn2.addEventListener("click", () => {
//   console.log("Download button clicked");
// });

// async function to generate random number to display image
function getEmoji() {
  //   let link = await fetch(url);
  //   let result = await link.json();

  //   console.log(result);
  //   console.log(result.htmlCode);
  //   display.innerHTML = result.htmlCode;
  //   para.innerHTML = result.htmlCode;

  let randNo = Math.floor(Math.random() * 127) + 1;
  console.log(randNo);

  //   let randEmoji = "./assets/emoji" + (randNo) + png;
  let randEmoji = "./assets/emoji " + "(" + randNo + ")" + ".png";

  //random Emoji
  display.setAttribute("src", randEmoji);

  //Download Emoji
  btn2.setAttribute("href", randEmoji);
}
