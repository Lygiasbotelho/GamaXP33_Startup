
function cadastroAlune()
{
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfzR0lGRrPDk-lpQ38pWE5ZQnpKAPOlx40Ls2bokIuao87U4w/viewform");
}
function cadastroEmpresa()
{
    window.open("https://forms.gle/mMAKZAALQRMHuAhd6");
}
function logar()
{
    window.open("https://plural.glideapp.io/");
}


class Email{
    constructor(query){
        const form = document.querySelector(query)
        const name = form.querySelector('[name=name]')
        const email = form.querySelector('[name=email]')
        const countUrl = ''
        const mailUrl = ''

        const counterUp = () => $.ajax({
            type: 'POST',
            url: countUrl,
            data: form.serialize(), // serializes the form's elements.  
            dataType: "jsonp",
            success: function(data)
            {    
               alert(data); // show response from the php script.
            }
        })
        
        form.onsubmit = (e) => {
            e.preventDefault()
            $("#modalSucesso").modal('show')
            
            $.ajax({
                url: mailUrl,
                method: 'POST',
                data: {
                    u: '', 
                    id: '', 
                    EMAIL: email.value, 
                    NAME: name.value
                },
                dataType: 'jsonp',
                success: function(data)
                {    
                   counterUp()
                }
            });
        }
    }
}


(function Main(){
    const email1 = new Email('#emailForm')
    window.data = dataEvento
})()

/*let btn = document.getElementById("cadastroAlune");
btn.addEventListener("click", cadastroAlune);

*/
/*function cadastrarAluno()
{
    window.open("https://plural.glideapp.io/");
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfzR0lGRrPDk-lpQ38pWE5ZQnpKAPOlx40Ls2bokIuao87U4w/viewform");
}*/