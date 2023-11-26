const notif = document.querySelector('.notification');
const profile = document.querySelector('.profile-menu');
const Alert = document.querySelector('.alert_dropdown');
const davii = document.querySelector('.davii');

notif.addEventListener("click", (e) => {
if(Alert.classList.contains("hidden")){
    Alert.classList.remove("hidden");
    davii.classList.add("hidden");
}
});

profile.addEventListener("click", (e) => {
    if(davii.classList.contains("hidden")){
            davii.classList.remove("hidden");
    Alert.classList.add("hidden");
    }

});