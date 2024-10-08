
async function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".model-overlay-loading");
  const success = document.querySelector(".model-overlay-success");
  loading.classList += " model-overlay-visible";
  await emailjs
    .sendForm(
      "zzou2000@gmail.com",
      "template_drsfg04",
      event.target,
      "ep75yApWgMkp9UDV6"
    )
    .then(() => {
      loading.classList.remove("model-overlay-visible");
      success.classList += " model-overlay-visible";
    })
    .catch(() => {
      loading.classList.remove("model-overlay-visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on zzou2000@gmail.com"
      );
    });
}

function toggleModal() {
  document.body.classList.toggle("model__open");
}

let contrastToggle = false;
function toggleContrast(){
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

const scaleFactor = 1 / 20;
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX / 20;
  const y = event.clientY / 20;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}