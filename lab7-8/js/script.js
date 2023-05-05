const form = document.querySelector('form')
form.addEventListener('submit', event =>{
    event.preventDefault();
});
// function sprawdzi(){
//     var liczba = document.getElementsByClassName('input')
//     var wart=input.value
// }
const input = from.querySelector('input')

from.addEventListener('submit', e => {





if (input.value.length >= 3){
    form.submit();
    console.log('Good')

} else{
        alert('...')
}
})
var now = new Date();
var today = new Date((now.getDate, now.getMonth, now.getFullYear));
var dob = document.getElementById('date').value
var dohow = new Date()