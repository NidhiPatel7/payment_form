// function changme()
//  {

//     var isValid = false;
//     var sValue = this.value;

    // if (sValue == '') 
    // {
    //     this.nextElementSibling.innerHTML = 'Please add value';
    //     this.nextElementSibling.className = 'message-error';
    // }
    //else
    // {
    //     this.nextElementSibling.innerHTML = 'Thank you';
    //     this.nextElementSibling.className = 'message-success';
    //     isValid = true;

    //     var sTarget = this.id + 'Output';
    //     console.log(sTarget);

    //     var oName = document.querySelector('#'+sTarget);
        // if (oName == 'ccv') {
        //     var oCard = document.querySelector('.card');
        //     oCard.style.transform = 'rotateX(90deg)';

        // }s
//         oName.innerHTML = sValue;
//     }
    

    
// }

//validation function for name
function checkName() 
{
    var isValid = false;
    var sValue = this.value;

    if (sValue == '') 
    {
        this.nextElementSibling.innerHTML = 'Please add value';
        this.nextElementSibling.className = 'message-error';
    }
    else
    {
        var nameExp = /^[A-Za-z]*$/;
        var bTest = nameExp.test(sValue);

        if (bTest == false) 
        {
            this.nextElementSibling.innerHTML = 'Enter valid name';
            this.nextElementSibling.className = 'message-error';
        }
        else
        {
            this.nextElementSibling.innerHTML = '<i class="fas fa-check"></i>';
            this.nextElementSibling.className = 'message-success';
            isValid = true;

             var sTarget = this.id + 'Output';
            console.log(sTarget);

            var oName = document.querySelector('#'+sTarget);
            oName.innerHTML = sValue;
        }
        

    }

    return isValid;
}

//validation function for Number
function checkNumber() 
{
    var isValid = false;
    var sValue = this.value;

    if (sValue == '') 
    {
        this.nextElementSibling.innerHTML = 'Please add value';
        this.nextElementSibling.className = 'message-error';
    }
    else
    {
        var numberExp = /^(\d{4}[- ]){3}\d{4}|\d{16}$ /;
        var bTest = numberExp.test(sValue);

        if (bTest == false) 
        {
            this.nextElementSibling.innerHTML = 'Enter valid Number';
            this.nextElementSibling.className = 'message-error';
        }
        else
        {
            this.nextElementSibling.innerHTML = '<i class="fas fa-check"></i>';
            this.nextElementSibling.className = 'message-success';
            isValid = true;

             var sTarget = this.id + 'Output';
            console.log(sTarget);

            var oName = document.querySelector('#'+sTarget);
            oName.innerHTML = sValue;
        }
    }
    return isValid;
}

//validation function for Date
function checkDate() 
{
    var isValid = false;
    var sValue = this.value;

    if (sValue == '') 
    {
        this.nextElementSibling.innerHTML = 'Please add value';
        this.nextElementSibling.className = 'message-error';
    } 
    else
    {
        var dateExp = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
        var bTest = dateExp.test(sValue);

        if (bTest == false) 
        {
            this.nextElementSibling.innerHTML = 'Enter valid Date';
            this.nextElementSibling.style.display = 'message-error';
        }
        else
        {
            this.nextElementSibling.innerHTML = '<i class="fas fa-check"></i>';
            this.nextElementSibling.className = 'message-success';
            isValid = true;

            var sTarget = this.id + 'Output';
            // console.log(sTarget);

            var oName = document.querySelector('#'+sTarget);
            oName.innerHTML = sValue;

            
            
            var oCardForRotet = document.querySelector('.card');
            var oCardForRotetBack = document.querySelector('.back');
            // console.log(oCardForRotet.classList.contains('card_rotate'));
            if (oCardForRotet.classList.contains('card_front')) 
            {
                oCardForRotet.classList.add('card_rotate');
                oCardForRotet.classList.remove('card_front');
                // oCardForRotet.style.transform = 'perspective(40em) rotateY(180deg);';
               
            }
            if (oCardForRotetBack.classList.contains('back_front')) 
            {
                oCardForRotetBack.classList.add('back_rotate');
                oCardForRotetBack.classList.remove('back_front');
            }
        
        }
    }

    return isValid;
}

//validation function for Ccv
function checkCcv() 
{
    
    var isValid = false;
    var sValue = this.value;

    if (sValue == '') 
    {
        this.nextElementSibling.innerHTML = 'Please add value';
        this.nextElementSibling.className = 'message-error';
    } 
    else
    {
        var ccvExp = /^([0-9]{3,4})$/;
        var bTest = ccvExp.test(sValue);

        if (bTest == false) 
        {
            this.nextElementSibling.innerHTML = 'Enter valid CCV Number';
            this.nextElementSibling.className = 'message-error';
        }
        else
        {
            this.nextElementSibling.innerHTML = '<i class="fas fa-check"></i>';
            this.nextElementSibling.className = 'message-success';
            isValid = true;

            var sTarget = this.id + 'Output';
            console.log(sTarget);
            
            var oName = document.querySelector('#'+sTarget);
            oName.innerHTML = sValue;


            // var sTarget = this.id + 'Output';
            // console.log(sTarget);

            // var oName = document.querySelector('#'+sTarget);
            // oName.innerHTML = sValue;
        }
    }

    return isValid;
}

//for submit button
function checkAll(e) 
{

    var isNameValid = checkName.call(oName);
    var isNumberValid = checkNumber.call(oNumber);
    var isDateValid = checkDate.call(oDate);
    var isCcvNumberValid = checkCcv.call(occv);

    var isAllValid = isNameValid && isNumberValid && isDateValid && isCcvNumberValid;
    if (isAllValid == false) 
    {
        e.preventDefault();
    }
}

// var oForm = document.querySelector('#paymentform');
// for all children
// for (var i = 0; i < oForm.children.length; i++) {
    
//     oForm.children[i].children[1].addEventListener('blur',changme);
// }

var oName = document.querySelector('.formname');
oName.addEventListener('blur',checkName);

var oNumber = document.querySelector('.formnumber');
oNumber.addEventListener('blur',checkNumber);

var oDate = document.querySelector('.formdate');
oDate.addEventListener('blur',checkDate);

var occv = document.querySelector('.formccv');
occv.addEventListener('blur',checkCcv);

var oForm = document.querySelector('#paymentform');
oForm.addEventListener('submit',checkAll);

// for number => ^(\d{4}[- ]){3}\d{4}|\d{16}$ 
//  Matches 1234-1234-1234-1234 | 1234123412341234
// Non-Matches	1234123412345


// pattern
// ^([0-9]{3,4})$
//Description	
// Allows you to check the length of a number (in this case either 3 or 4 digits). I found it useful when validating Credit Card Identification Codes (CVV2/CVC2/CID) which are either 3 or 4 numerical digits.
// Matches	
// 123 | 1234
// Non-Matches	
// 12 | 12345

