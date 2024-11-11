const openButtonEl = document.getElementById('open-button');
const closeButtonEl = document.getElementById('close-button');
const dialogEl = document.getElementById('dialog');

function  handleOpenButtonClick() {
    if(dialogEl === null) {
     return;
    }

    dialogEl.showModal();
}

if(openButtonEl !== null) {
    openButtonEl.addEventListener("click", handleOpenButtonClick);
}

