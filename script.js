const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt");

yesBtn.addEventListener("click", () => {
  question.innerHTML =
    "á à còn anh số 2, số 3 nữa chứ gìiiiiii=))<br>Dỗiiiii em tệ quáaa😒";

  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnE1N2RhcWZ4ZDB5N3liM3k3czYydjR1ZnViNWVwYm4yYmk4bDV1ciZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/q4YtFJ9Inq3UQDlPEF/giphy.gif";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none";

  createHearts(); // Gọi hiệu ứng tim bay
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("touchstart", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Tạo hiệu ứng tim bay
function createHearts() {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.innerText = "💖";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 200);

  // Dừng hiệu ứng sau 3 giây
  setTimeout(() => {
    clearInterval(interval);
  }, 3000);
}
