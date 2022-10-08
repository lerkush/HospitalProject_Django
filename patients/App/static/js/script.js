/*---------------------------------------------------------------------
# All scripts here it will extends to all the pages
-------------------------------------------------------------------- */
// 1) If no patient, show the message

$(document).ready(function(){
    var verify = $("#chk_td").length;
        if (verify == 0) {
            $("#no-data").text("No patient found");
        }
});

// 2) Time running at real time
setInterval(function(){
    var date = new Date();
    $("#clock").html(
        (date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + date.getMinutes() + ":" + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
    );
}, 500);

// 3) Validate all <inputs>
function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function validateAll() {

    var name = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var age = $("#age").val();
    var gender = $("#gender").val();

    if (name == '') {
        swal("Opsss !", "Name field cannot be empty.", "error")
        return false;
    }
    
    else if (name == name.toUpperCase()) {
        swal("Opsss !", "Name cannot be uppercase", "error")
        //$("#name").val("");
        return false;
    }

    else if (name.split(' ').length < 2) {
        swal("Opsss !", "Put at least the last name .", "info")
        return false;
    }

    else if (phone == '') {
        swal("Opsss !", "Phone field cannot be empty.", "error")
        return false;
    }
    
    else if (email == '') {
        swal("Opsss !", "Email field cannot be empty.", "error")
        return false;
    }

    else if (!(validateEmail(email))) {
        swal("Opsss !", "Put a valid email address.", "error")
        $("#email").val("");
        return false;
    }

    else if (age == '') {
        swal("Opsss !", "Age field cannot be empty.", "error")
        return false;
    }

 /*   else if (age > 150) {
        swal("Denied !", "The maximum value is 150 years old.", "info")
        $("#age").val("");
        return false;
    }
*/
    else if (gender == '') {
        swal("Opsss !", "Gender field cannot be empty.", "error")
        return false;
    }
    else {
        return true;
    }
}
$("#btn-add").bind("click", validateAll);

//4) Script - Only letters is allowed
$(document).ready(function() {
    jQuery('input[name="name"]').keyup(function() {
        var letter = jQuery(this).val();
        var allow = letter.replace(/[^a-zA-ZğüşöçİĞÜŞÖÇ _]/g,'');
        jQuery(this).val(allow);
    });
    //Prevent starting with space
    $("input").on("keypress", function(e) {
        if (e.which == 32 && !this.value.length)
        e.preventDefault();
    });
});

//Only the first and last name(prevent full name)
$(document).ready(function() {
    $("#name").keyup(function() {
        var name = $("#name").val();
        if (name.split(' ').length == 3) {
            swal("Opss !", "Only Name and Last name.", "info");
            $("#name").val("");
            return false;
        }
    });
});

//6) First letter capitalized (first name and last name)
$("#name").keyup(function() {
    var txt = $(this).val();
    $(this).val(txt.replace(/^(.)|\s(.)/g, function($1) {
        return $1.toUpperCase();
    }))
});

//7) Phone mask (inputmask)
$(document).ready(function(){
    $("#phone").inputmask("(99) 999-999-9999", {"onincomplete": function(){
        swal("Opss !", "incomplete phone. Please review !", "info");
        return false;

        }
    });
});

//8) Script to LOWERCASE <input> email
$(document).ready(function() {
    $("#email").keyup(function() {
        this.value = this.value.toLowerCase();
    });
});

//9) If AGE has number greater than 150, auto clear (second method)
$(document).ready(function() {
    $("#age").keyup(function() {
        var age = $("#age").val();
        if(age > 150) {
            swal("Denied !", "The maximum value is 150 years old.", "error");
            $("#age").val("");
            return false;
        }
    });
});

// 10) Script to allow only numbers in AGE
$("#age").keyup(function(){
    if (!/^[0-9]*$/.test(this.value)) {
        this.value = this.value.split(/[^0-9]/).join('');
    }
});

// 11) Prevent starting by zero in AGE field
$("#age").on("input", function(){
    if(/^0/.test(this.value)) {
        this.value = this.value.replace(/^0/, "")
    }
});