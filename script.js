const button = document.getElementById('btn');
const pListen = document.getElementById('listen');
const text = document.getElementById('name');
const alertText = document.getElementById('alert');

let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

button.addEventListener('click', () => {
    let num = parseInt(Math.random() * 1000 + 1);
    let rand = parseInt(Math.random() * 25)
    const userName = text.value.toString().toLowerCase();
    if (userName === '') {
        alertText.innerHTML = 'Please Enter your Name Blank field is not be proceed.**';
    }else if (userName.length < 5) {
        alertText.innerHTML = 'Please enter you name atleast 5 Characters.**';
    }else {
        alertText.innerHTML = ''
        pListen.insertAdjacentHTML('beforeend', `<li class="list">${arr[rand] + userName + num}@gmail.com </li>`);;
        button.innerHTML = 'Regenrate'
    }
})



