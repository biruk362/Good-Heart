$(document).ready(function(){
    $('#invoices').html('loading...');
    $.ajax({
        url: window.location.origin+'/invoices-list',
        type: 'GET',
        dataType: "json",
        data: {
            
        },
        complete: function(){
            
        },
        success: async function(response){
            console.log(response);
            if(response.length && response.length > 0){
                let InvoiceHTML = "<div>"
                for(var i = 0; i <= (response.length - 1); i++){
                    InvoiceHTML += `<div class='item'>
                        
                        <div>Doner Name: `+response[i].fromname+`</div>
                        <div>Doner Phone No.: `+response[i].from+`</div>
                        <div>amount: `+response[i].amount+`</div>
                        
                        <div>date: `+response[i].date+`</div>
                        <div>description: `+response[i].description+`</div>
                        
                       
                    </div>`;
                    if((response.length - 1) === i){
                        InvoiceHTML += "</div>"
                        $('#invoices').html(InvoiceHTML);
                    }
                };
            };
        },
        error: function(error){
            console.log(error);
            $('#invoices').text(error);
        }
    });
});