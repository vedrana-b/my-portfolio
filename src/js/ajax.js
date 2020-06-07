

$("#submit").click(function (event) {
    event.preventDefault();
    let body = {
        name: $('#name').val(),
        email: $('#email').val(),
        phoneNumber: $('#phonenumber').val(),
        budget: $('#budget option:selected').val(),
        message: $('#message').val()
    };
    if(checkValidity(body).length) {
        return;
    }

    $.ajax({
        url: "https://us-central1-portfolio-b448f.cloudfunctions.net/services/contact",
        type: "POST",
        data: JSON.stringify(body),
        contentType: 'application/json',
        success: function() {
            $('#submit').val('Message sent');
            $('#submit').addClass('button--sent');
            $('#submit').attr('disabled', true);
        },
        error: function() {
            $('#submit').val('Unfortunately message is not sent. Please try later!');
            $('#submit').addClass('button--not-sent');
        }
    });
});

let checkValidity = function(body) {
    let errors = [];
    if(!body.name) {
        $('#name').siblings('.error').css('display', 'block');
        errors.push(
            {
                field: 'name',
                error: 'required'
            }
        )
    } else {
        $('#name').siblings('.error').css('display', 'none');
    }

    if(!body.email) {
        $('#email').siblings('.error').css('display', 'block');
        errors.push(
            {
                field: 'email',
                error: 'required'
            }
        )
    } else {
        $('#email').siblings('.error').css('display', 'none');
    }

    if(!body.phoneNumber) {
        $('#phonenumber').siblings('.error').css('display', 'block');
        errors.push(
            {
                field: 'phoneNumber',
                error: 'required'
            }
        )
    } else {
        $('#phonenumber').siblings('.error').css('display', 'none');
    }
    
    if(!body.budget) {
        $('#budget').siblings('.error').css('display', 'block');
        errors.push(
            {
                field: 'budget',
                error: 'required'
            }
        )
    } else {
        $('#budget').siblings('.error').css('display', 'none');
    }

    if(!body.message) {
        $('#message').siblings('.error').css('display', 'block');
        errors.push(
            {
                field: 'message',
                error: 'required'
            }
        )
    } else {
        $('#message').siblings('.error').css('display', 'none');
    }

    return errors;
}



