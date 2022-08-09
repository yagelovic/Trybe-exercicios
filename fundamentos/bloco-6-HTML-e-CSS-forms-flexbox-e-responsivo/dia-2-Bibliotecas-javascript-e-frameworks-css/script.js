const botao = document.querySelector("#button-submit");

function impedeSubmit(event) {
    event.preventDefault();
}
botao.addEventListener("click", impedeSubmit);
// Pikaday
// // var picker = new Pikaday({ field: document.getElementById('datepicker') });
// picker.toString('DD-MM-YYYY');
// picker.getDate();




let picker = new Pikaday({
    field: $('#datepicker')[0], format: 'D/M/YYYY', toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});