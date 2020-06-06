function cadastroAlune() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfzR0lGRrPDk-lpQ38pWE5ZQnpKAPOlx40Ls2bokIuao87U4w/viewform");
}
function cadastroEmpresa() {
    window.open("https://forms.gle/mMAKZAALQRMHuAhd6");
}
function logar() {
    window.open("https://plural.glideapp.io/");
}

$('#email_form').submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: 'https://postmail.invotes.com/send',
        method: 'POST',
        data: $(this).serialize(),
        success: function (data) {
            $("#modalSucesso").modal('show');
        }
    });
});
