$('#Checkout').modal('hide');

var DonerName = null;
var Name = null;
var Description = null;
var Price = null;
$(document).on('click', '.Donate', function(){
    Name = $(this).parent().attr('data-name');
    Description = $(this).parent().attr('data-description');
    Price = $(this).parent().attr('data-price');
    $('#Checkout .modal-title').text(' '+Description+' '+Name+' | Donate '+Price+'Birr');
    $('.BuyNow').attr('disabled', false);
    $('.DonerName').val('');
    $('.EmailName').val('');
    $('.PhoneNumber').val('');
    $('.MSG').hide();
    $('.MSG.alert-danger').text('');
    $('.MSG.alert-success').text('');
    $('#Checkout').modal('toggle');
});

var DonerName = null;
var PhoneNumber = null;
$(document).on('click', '.DonateNow', function(){
    DonerName = $('.DonerName').val();
    PhoneNumber = $('.PhoneNumber').val();
    $('.MSG').hide();
    if(DonerName === ""){
        $('.MSG.alert-danger').text('Your name is required!').show();
    }else if(PhoneNumber === ""){
        $('.MSG.alert-danger').text('Phone required!').show();
    }else{
        $('.DonateNow').attr('disabled', true).text('Processing...');
        $.ajax({
            url: window.location.origin+"/donate-now",
            type: 'POST',
            dataType: "json",
            data: {
                DonerName: DonerName,
                Name: Name,
                Description: Description,
                Price: Price,
                PhoneNumber: PhoneNumber
            },
            success: async function(response){
                console.log(response);
                if(response.error){
                    $('.DonateNow').attr('disabled', false).text('Donate Now');
                    $('.MSG.alert-danger').text(response.error.details).show();
                }else{
                    $('.DonateNow').attr('disabled', true).text('Donate Now');
                    $('.MSG.alert-success').html(`ID/Invoice Code: <strong>`+response.code+`</strong><br>
                    Please pay us using your HelloCash account or go to any HelloCash agent to pay
                    እባክዎን የሄሎካሽ አካውንትዎን በመጠቀም ይክፈሉን ወይም ለመክፈል ወደ ማንኛውም ሄሎካሽ ወኪል ይሂዱ
                    <br>የመታወቂያ / የክፍያ መጠየቂያ ኮድ:`+response.code+``).show();
                }
            },
            error: function(error){
                $('.DonateNow').attr('disabled', false).text('Donate Now');
                console.log(error);
            }
        });
    }
});

$(document).ready(function(){
    
});