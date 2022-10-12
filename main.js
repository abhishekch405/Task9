const form = document.getElementById('my-form');
const name = document.getElementById('name');

const email = document.getElementById('email');
form.addEventListener('click', submit);

function submit(e) {
    if (e.target.id === 'submitbtn') {
        e.preventDefault();
        if (name.value == '' || email.value == '') {
            const msg = document.getElementById('msg');
            msg.innerHTML = '<b>Enter all fields</b>'
            msg.style.color = 'red';
            setTimeout(() => msg.remove(), 3000);
        }
        else {

            console.log(name.value, email.value)
            localStorage.setItem(name.value, email.value)
            name.value = '';
            email.value = '';

        }
    }
}
