// Define function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Define function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Define function to switch between modals
function switchModal(currentModalId, newModalId) {
    closeModal(currentModalId);
    openModal(newModalId);
}

// Add an event listener to close the modal when clicking outside of it
window.addEventListener("click", function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
