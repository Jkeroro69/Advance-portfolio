//template_drsfg04
//zzou2000@gmail.com
//ep75yApWgMkp9UDV6

async function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.model-overlay-loading');
    const success = document.querySelector('.model-overlay-success');
    loading.classList += " model-overlay-visible";
    await emailjs.sendForm(
        'zzou2000@gmail.com',
        'template_drsfg04',
        event.target,
        'ep75yApWgMkp9UDV6'
    ).then(() => {
        loading.classList.remove("model-overlay-visible");
        success.classList += " model-overlay-visible";
    }).catch(() => {
        loading.classList.remove("model-overlay-visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on zzou2000@gmail.com"
        )    
    });
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
    isModalOpen = false;
      return  document.body.classList.remove("model__open");
    } 
    isModalOpen = !isModalOpen;
    document.body.classList += ("model__open");
}
