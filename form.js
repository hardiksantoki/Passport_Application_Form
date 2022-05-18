function check() {


    window.controll;
    controll = true;
    var l2 = new Date().getFullYear().toString().slice(-2);
    //File Number validation
    var filenumber1 = document.getElementById('filenumber1').value;
    if (filenumber1 == "") {
        document.getElementById('errors0').innerHTML = "* 0.1 enter file number.";
        controll = false;
    }
    else if (!filenumber1.match(/^([A-Z]{4})([0-9]+)$/)) {
        document.getElementById('errors0').innerHTML = "* 0.1 file number start with capital letter and last 2 digits must be current year last 2 digits.";
        controll = false;
    }
    else if (filenumber1.slice(-2)!=l2) {
        document.getElementById('errors0').innerHTML = "* 0.1 last 2 digits must be current year last 2 digits.";
        controll = false;
    }
    else if (filenumber1.length != 12) {
        document.getElementById('errors0').innerHTML = "* 0.1 file number length should be 12 characters.";
    }

    else {
        document.getElementById('errors0').innerHTML = "";
    }

    //1.1 radio button validation
    if (document.forms['form1']['p'].value == "") {
        document.getElementById('errors').innerHTML = "* 1.1 please select applying reason.";
        controll = false;
    }
    else {
        document.getElementById('errors').innerHTML = "";
    }

    //1.2 radio button validation
    if (document.getElementById('p1').checked == true) {
        if (document.forms['form1']['reason'].value == "") {
            document.getElementById('errors12').innerHTML = "* 1.2 please select reason.";
            controll = false;
        }
        else {
            document.getElementById('errors12').innerHTML = "";
        }
    }
    else {
        document.getElementById('errors12').innerHTML = "";
    }

    //1.3 radio button validation
    if (document.getElementById('reason-r3').checked == true) {
        if (document.querySelector('input[name="reason2"]:checked') == null) {
            document.getElementById('errors13').innerHTML = "* 1.3 specify reason.";
            controll = false;
        }
        else {
            document.getElementById('errors13').innerHTML = "";
        }
    }
    else {
        document.getElementById('errors13').innerHTML = "";
    }

    // input field
    if (document.getElementById('reason-r19').checked == true) {
        if (document.getElementById('reason-r20').value == "") {
            document.getElementById('errors131').innerHTML = "* 1.3 specify reason .";
            controll = false;
        }
        else {
            document.getElementById('errors131').innerHTML = "";
        }
    }
    else {
        document.getElementById('errors131').innerHTML = "";
    }
    //1.4 radio button validation
    if (document.forms['form1']['reason3'].value == "") {
        document.getElementById('errors14').innerHTML = "* 1.4 Select type of application.";
        controll = false;
    }
    else {
        document.getElementById('errors14').innerHTML = "";
    }

    //1.5 radio button validation
    if (document.forms['form1']['reason4'].value == "") {
        document.getElementById('errors15').innerHTML = "* 1.5 Select booklet type.";
        controll = false;
    }
    else {
        document.getElementById('errors15').innerHTML = "";
    }

    //1.6 radio button validation
    if (document.forms['form1']['reason5'].value == "") {
        document.getElementById('errors16').innerHTML = "* 1.6 Select validity.";
        controll = false;
    }
    else {
        document.getElementById('errors16').innerHTML = "";
    }

    //Photo validation
    if (document.getElementById('img').value == "") {
        document.getElementById('errors17').innerHTML = "* 1 upload your Photo.";
        controll = false;
    }
    else {
        document.getElementById('errors17').innerHTML = "";
    }

    //sign1 validation
    if (document.getElementById('sign1').value == "") {
        document.getElementById('errors18').innerHTML = "* 1 upload your signature.";
        controll = false;
    }
    else {
        document.getElementById('errors18').innerHTML = "";
    }

    //2.1 name validation
    var name21 = document.getElementById('name1').value;
    if (name21 == "") {
        document.getElementById('errors21').innerHTML = "* 2.1 enter name.";
        controll = false;
    }
    else if (!name21.match(/^[A-Z]*$/)) {
        document.getElementById('errors21').innerHTML = "* 2.1 enter Capital letter only.";
        controll = false;
    }
    else if (name21.length > 500) {
        document.getElementById('errors21').innerHTML = "* 2.1 maximum length 500 character.";
        controll = false;
    }
    else {
        document.getElementById('errors21').innerHTML = "";
    }

    //2.1 sirname validation
    var sname21 = document.getElementById('sirname1').value;
    if (sname21 == "") {
        document.getElementById('errors212').innerHTML = "* 2.1 enter sirname.";
        controll = false;
    }
    else if (!sname21.match(/^[A-Z]*$/)) {
        document.getElementById('errors212').innerHTML = "* 2.1 enter Capital letters only.";
        controll = false;
    }
    else {
        document.getElementById('errors212').innerHTML = "";
    }

    //2.2 radio button validation yes no
    if (document.forms['form1']['y'].value == "") {
        document.getElementById('errors22').innerHTML = "* 2.2 Select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors22').innerHTML = "";
    }

    //2.3 radio button validation yes no
    if (document.forms['form1']['y2'].value == "") {
        document.getElementById('errors23').innerHTML = "* 2.3 you changed your name  select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors23').innerHTML = "";
    }

    //2.4 birthdate validation
    if (document.getElementById('bd1').value == "") {
        document.getElementById('errors24').innerHTML = "* 2.4 enter date of birth.";
        controll = false;
    }
    else if (bdglobal) {
        document.getElementById('errors24').innerHTML = "* 2.4 birth date must be less then 1 month from current date.";
        controll = false;
    }
    else {
        document.getElementById('errors24').innerHTML = "";
    }









    //2.5 place of birth validation
    var place25 = document.getElementById('place1').value
    if (place25 == "") {
        document.getElementById('errors25').innerHTML = "* 2.5 enter place of birth.";
        controll = false;
    }
    else if (!place25.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors25').innerHTML = "* 2.5 enter Capital letter only.";
        controll = false;
    }
    else {
        document.getElementById('errors25').innerHTML = "";
    }

    //2.5 district validation
    var dist25 = document.getElementById('district').value;
    if (dist25 == "") {
        document.getElementById('errors252').innerHTML = "* 2.5 enter district.";
        controll = false;
    }
    else if (!dist25.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors252').innerHTML = "* 2.5 enter Capital letter only.";
        controll = false;
    }
    else {
        document.getElementById('errors252').innerHTML = "";
    }

    //2.5 state validation
    var state25 = document.getElementById('state').value;
    if (state25 == "") {
        document.getElementById('errors253').innerHTML = "* 2.5 enter state.";
        controll = false;
    }
    else if (!state25.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors253').innerHTML = "* 2.5 enter Capital letter only.";
        controll = false;
    }
    else if (dist25 == state25) {
        document.getElementById('errors253').innerHTML = "* 2.5 district and state name must be different.";
        controll = false;
    }
    else {
        document.getElementById('errors253').innerHTML = "";
    }

    //2.5 region validation
    var region25 = document.getElementById('region').value;
    if (region25 == "") {
        document.getElementById('errors254').innerHTML = "* 2.5 enter region.";
        controll = false;
    }
    else if (!region25.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors254').innerHTML = "* 2.5 enter Capital letter only.";
        controll = false;
    }
    else if (dist25 == region25 || state25 == region25) {
        document.getElementById('errors253').innerHTML = "* 2.5 district state and region name must be different.";
        controll = false;
    }
    else {
        document.getElementById('errors254').innerHTML = "";
    }

    //2.6 gender validation
    if (document.forms['form1']['g'].value == "") {
        document.getElementById('errors26').innerHTML = "* 2.6 select gender.";
        controll = false;
    }
    else {
        document.getElementById('errors26').innerHTML = "";
    }

    //2.7 marital status validation
    if (document.forms['form1']['m'].value == "") {
        document.getElementById('errors27').innerHTML = "* 2.7 select marital status.";
        controll = false;
    }
    else {
        document.getElementById('errors27').innerHTML = "";
    }

    //2.8 citizenship validation
    if (document.forms['form1']['ci'].value == "") {
        document.getElementById('errors28').innerHTML = "* 2.8 select citizenship.";
        controll = false;
    }
    else {
        document.getElementById('errors28').innerHTML = "";
    }

    //2.9 Pan number validation
    var pann29 = document.getElementById('pan-number').value
    if (pann29 == "") {
        document.getElementById('errors29').innerHTML = "* 2.9 enter PAN number.";
        controll = false;
    }
    else if (!pann29.match(/^[A-Z]{5}[0-9]{4}[A-Z]$/)) {
        document.getElementById('errors29').innerHTML = "* 2.9 enter Capital letter and numbers only format should be (AAAAA1234A).";
        controll = false;
    }
    else if (pann29.length != 10) {
        document.getElementById('errors29').innerHTML = "* 2.9 length must be 10.";
        controll = false;
    }
    else {
        document.getElementById('errors29').innerHTML = "";
    }

    //2.10 voter id validation
    var voter210 = document.getElementById('voter-id').value
    if (voter210 == "") {
        document.getElementById('errors210').innerHTML = "* 2.10 enter voter ID.";
        controll = false;
    }
    else if (!voter210.match(/^[A-Z]{3}[0-9]{7}$/)) {
        document.getElementById('errors210').innerHTML = "* 2.10 enter Capital letter and numbers only format should be (AAA1234567).";
        controll = false;
    }
    else if (voter210.length != 10) {
        document.getElementById('errors210').innerHTML = "* 2.10 length must be 10.";
        controll = false;
    }
    else {
        document.getElementById('errors210').innerHTML = "";
    }

    //2.11 citizenship validation
    if (document.forms['form1']['et'].value == "") {
        document.getElementById('errors211').innerHTML = "* 2.11 select employment type.";
        controll = false;
    }
    else {
        document.getElementById('errors211').innerHTML = "";
    }

    //2.12 specify organization name validation
    var orgname212 = document.getElementById('son').value;
    if (!orgname212.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors2-12').innerHTML = "* 2.12 enter Capital letter only.";
        controll = false;
    }
    else if (orgname212.length > 60) {
        document.getElementById('errors2-12').innerHTML = "* 2.12 maximum length must be 60 characters.";
        controll = false;
    }
    else {
        document.getElementById('errors2-12').innerHTML = "";
    }

    //2.13 government servant validation
    if (document.forms['form1']['pgs'].value == "") {
        document.getElementById('errors2-13').innerHTML = "* 2.13 either your parent a government servant? select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors2-13').innerHTML = "";
    }

    //2.14 Educational Qualification validation
    if (document.forms['form1']['education-q'].value == "") {
        document.getElementById('errors214').innerHTML = "* 2.14 select Educational Qualification.";
        controll = false;
    }
    else {
        document.getElementById('errors214').innerHTML = "";
    }

    //2.15 eligible for non ecr validation
    if (document.forms['form1']['necr'].value == "") {
        document.getElementById('errors215').innerHTML = "* 2.15 select you are eligible for non-NCR.";
        controll = false;
    }
    else {
        document.getElementById('errors215').innerHTML = "";
    }

    //2.16 Visible Distinguishing Mark validation
    if (document.getElementById('vdmark').value == "") {
        document.getElementById('errors216').innerHTML = "* 2.16 select Visible Distinguishing Mark.";
        controll = false;
    }
    else {
        document.getElementById('errors216').innerHTML = "";
    }

    //2.17 aadhaar number validation
    var aadhaar217 = document.getElementById('aadhaar-number').value
    if (aadhaar217 == "") {
        document.getElementById('errors217').innerHTML = "* 2.17 enter aadhaar number.";
        controll = false;
    }
    else if (!aadhaar217.match(/^[0-9]*$/)) {
        document.getElementById('errors217').innerHTML = "* 2.17 enter numbers only.";
        controll = false;
    }
    else if (aadhaar217.length != 12) {
        document.getElementById('errors217').innerHTML = "* 2.17 length must be 12 digits.";
        controll = false;
    }
    else {
        document.getElementById('errors217').innerHTML = "";
    }

    //3.1 father name validation
    var fathername31 = document.getElementById('name2').value;
    if (fathername31 == "") {
        document.getElementById('errors31').innerHTML = "* 3.1 enter father's name.";
        controll = false;
    }
    else if (!fathername31.match(/^[A-Z]*$/)) {
        document.getElementById('errors31').innerHTML = "* 3.1 enter Capital letters only.";
        controll = false;
    }
    else if (fathername31.length > 500) {
        document.getElementById('errors31').innerHTML = "* 3.1 maximum length 500 character.";
        controll = false;
    }
    else {
        document.getElementById('errors31').innerHTML = "";
    }

    //3.1 father sirname validation
    var fathersname31 = document.getElementById('sirname2').value
    if (fathersname31 == "") {
        document.getElementById('errors312').innerHTML = "* 3.1 enter father's sirname.";
        controll = false;
    }
    else if (!fathersname31.match(/^[A-Z]*$/)) {
        document.getElementById('errors312').innerHTML = "* 3.1 enter Capital letters only.";
        controll = false;
    }
    else if (fathername31.length > 500) {
        document.getElementById('errors312').innerHTML = "* 3.1 maximum length 500 character.";
        controll = false;
    }
    else {
        document.getElementById('errors312').innerHTML = "";
    }

    //3.2 mother name validation
    var mathername32 = document.getElementById('name3').value;
    if (mathername32 == "") {
        document.getElementById('errors321').innerHTML = "* 3.2 enter mother's name.";
        controll = false;
    }
    else if (!mathername32.match(/^[A-Z]*$/)) {
        document.getElementById('errors321').innerHTML = "* 3.2 enter Capital letters only.";
        controll = false;
    }
    else if (mathername32.length > 500) {
        document.getElementById('errors321').innerHTML = "* 3.2 maximum length 500 character.";
        controll = false;
    }
    else {
        document.getElementById('errors321').innerHTML = "";
    }

    //3.2 mother sirname validation
    var mothersirname32 = document.getElementById('sirname3').value;
    if (mothersirname32 == "") {
        document.getElementById('errors322').innerHTML = "* 3.2 enter mother's sirname.";
        controll = false;
    }
    else if (!mothersirname32.match(/^[A-Z]*$/)) {
        document.getElementById('errors322').innerHTML = "* 3.2 enter Capital letters only.";
        controll = false;
    }
    else if (mothersirname32.length > 500) {
        document.getElementById('errors322').innerHTML = "* 3.2 maximum length 500 character.";
        controll = false;
    }
    else {
        document.getElementById('errors322').innerHTML = "";
    }

    //3.3 Legal Guardian's Given Name validation
    var legalgname33 = document.getElementById('name4').value;
    if (!legalgname33.match(/^[A-Z]*$/)) {
        document.getElementById('errors331').innerHTML = "* 3.3 enter Legal Guardian's Given Name.";
        controll = false;
    }
    else if (legalgname33.length > 500) {
        document.getElementById('errors331').innerHTML = "* 3.3 maximum length 500 character.";
        controll = false;
    }
    else {
        document.getElementById('errors331').innerHTML = "";
    }

    //3.3 Legal Guardian's Given sirName validation
    var legalgsirname33 = document.getElementById('sirname4').value;
    if (!legalgsirname33.match(/^[A-Z]*$/)) {
        document.getElementById('errors332').innerHTML = "* 3.3 enter sirname.";
        controll = false;
    }
    else if (legalgsirname33.length > 500) {
        document.getElementById('errors332').innerHTML = "* 3.3 maximum length 500 character.";
        controll = false;
    }
    else {
        document.getElementById('errors332').innerHTML = "";
    }

    //3.4 Spouse's Given Name validation
    var spousename34 = document.getElementById('name5').value;
    if (spousename34 == "") {
        document.getElementById('errors341').innerHTML = "* 3.4 enter Spouse's Given Name.";
        controll = false;
    }
    else if (!spousename34.match(/^[A-Z]*$/)) {
        document.getElementById('errors341').innerHTML = "* 3.4 enter Capital letters.";
        controll = false;
    }
    else if (spousename34.length > 500) {
        document.getElementById('errors341').innerHTML = "* 3.4 maximum length 500 character.";
        controll = false;
    }
    else {
        document.getElementById('errors341').innerHTML = "";
    }

    //3.4 Spouse's Given sirName validation
    var spousesirname34 = document.getElementById('sirname5').value;
    if (spousesirname34 == "") {
        document.getElementById('errors342').innerHTML = "* 3.4 enter Spouse's Given sirname.";
        controll = false;
    }
    else if (!spousesirname34.match(/^[A-Z]*$/)) {
        document.getElementById('errors342').innerHTML = "* 3.4 enter Capital letters.";
        controll = false;
    }
    else if (spousesirname34.length > 500) {
        document.getElementById('errors342').innerHTML = "* 3.4 maximum length 500 character.";
        controll = false;
    }
    else {
        document.getElementById('errors342').innerHTML = "";
    }

    //3.5 father passport number
    var passportno61 = document.getElementById('fpno351').value;
    console.log(passportno61);
    if (!passportno61.match(/^[A-Z0-9]*$/)) {
        document.getElementById('errors351').innerHTML = "* 3.5 enter number and capital letter only.";
        controll = false;
    }
    else if (passportno61.length == 0) {
        document.getElementById('errors351').innerHTML = "";
    }
    else if (passportno61.length != 8) {
        document.getElementById('errors351').innerHTML = "* 3.5 length must be 8 character.";
        controll = false;
    }
    else {
        document.getElementById('errors351').innerHTML = "";
    }

    //3.5 father nationality
    var spousesirname34 = document.getElementById('fathern352').value;
    if (!spousesirname34.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors352').innerHTML = "* 3.5 enter Capital letters only.";
        controll = false;
    }
    else {
        document.getElementById('errors352').innerHTML = "";
    }


    //3.5 mother passport number
    var passportno61 = document.getElementById('mpno353').value;
    if (!passportno61.match(/^[A-Z0-9]*$/)) {
        document.getElementById('errors353').innerHTML = "* 3.5 enter number and capital letter only.";
        controll = false;
    }
    else if (passportno61.length == 0) {
        document.getElementById('errors353').innerHTML = "";
    }
    else if (passportno61.length != 8) {
        document.getElementById('errors353').innerHTML = "* 3.5 length must be 8 character.";
        controll = false;
    }
    else {
        document.getElementById('errors353').innerHTML = "";
    }

    //3.5 mother nationality
    var spousesirname34 = document.getElementById('mothern354').value;
    if (!spousesirname34.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors354').innerHTML = "* 3.5 enter Capital letters only.";
        controll = false;
    }
    else {
        document.getElementById('errors354').innerHTML = "";
    }


    //4.1 House No. validation
    var hno41 = document.getElementById('h-number').value;
    if (hno41 == "") {
        document.getElementById('errors41').innerHTML = "* 4.1 enter House No. and street name.";
        controll = false;
    }
    else if (!hno41.match(/^[A-Z0-9\s,-]*$/)) {
        document.getElementById('errors41').innerHTML = "* 4.1 enter number capital letter and (,-) only.";
        controll = false;
    }
    else if (hno41.length < 10) {
        document.getElementById('errors41').innerHTML = "* 4.1 minimum length must be 10 character.";
        controll = false;
    }
    else {
        document.getElementById('errors41').innerHTML = "";
    }

    //4.1 city name validation
    var city41 = document.getElementById('city1').value;
    if (city41 == "") {
        document.getElementById('errors413').innerHTML = "* 4.1 enter city name.";
        controll = false;
    }
    else if (!city41.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors413').innerHTML = "* 4.1 enter Capital letter only.";
        controll = false;
    }
    else if (city41.length > 500) {
        document.getElementById('errors413').innerHTML = "* 4.1 maximum length 500 letters.";
        controll = false;
    }
    else {
        document.getElementById('errors413').innerHTML = "";
    }

    //4.1 district name validation
    var district41 = document.getElementById('district1').value;
    if (district41 == "") {
        document.getElementById('errors414').innerHTML = "* 4.1 enter district name.";
        controll = false;
    }
    else if (!district41.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors414').innerHTML = "* 4.1 enter Capital letter only.";
        controll = false;
    }
    else if (district41.length > 500) {
        document.getElementById('errors414').innerHTML = "* 4.1 maximum length 500 letters.";
        controll = false;
    }
    else {
        document.getElementById('errors414').innerHTML = "";
    }

    //4.1 police station name validation
    var polices41 = document.getElementById('ps1').value;
    if (polices41 == "") {
        document.getElementById('errors415').innerHTML = "* 4.1 enter police station name.";
        controll = false;
    }
    else if (!polices41.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors415').innerHTML = "* 4.1 enter Capital letter only.";
        controll = false;
    }
    else if (polices41.length > 500) {
        document.getElementById('errors415').innerHTML = "* 4.1 maximum length 500 letters.";
        controll = false;
    }
    else {
        document.getElementById('errors415').innerHTML = "";
    }

    //4.1 state name validation
    var state41 = document.getElementById('state1').value;
    if (state41 == "") {
        document.getElementById('errors416').innerHTML = "* 4.1 enter state name.";
        controll = false;
    }
    else if (!state41.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors416').innerHTML = "* 4.1 enter Capital letter only.";
        controll = false;
    }
    else if (state41 == district41) {
        document.getElementById('errors253').innerHTML = "* 4.1 district state and region must be different.";
        controll = false;
    }
    else {
        document.getElementById('errors416').innerHTML = "";
    }

    //4.1 pin validation
    var pin41 = document.getElementById('pin1').value;
    if (pin41 == "") {
        document.getElementById('errors417').innerHTML = "* 4.1 enter PIN.";
        controll = false;
    }
    else if (!pin41.match(/^[0-9]*$/)) {
        document.getElementById('errors417').innerHTML = "* 4.1 enter only digits.";
        controll = false;
    }
    else if (pin41.length != 6) {
        document.getElementById('errors417').innerHTML = "* 4.1 length must be 6 digit.";
        controll = false;
    }
    else {
        document.getElementById('errors417').innerHTML = "";
    }

    //4.1 mobile number validation
    var monumber41 = document.getElementById('mn1').value;
    if (monumber41 == "") {
        document.getElementById('errors418').innerHTML = "* 4.1 enter mobile number.";
        controll = false;
    }
    else if (!monumber41.match(/^\d*$/)) {
        document.getElementById('errors418').innerHTML = "* 4.1 enter only digits.";
        controll = false;
    }
    else if (monumber41.length != 10) {
        document.getElementById('errors418').innerHTML = "* 4.1 length must be 10 digit.";
        controll = false;
    }
    else {
        document.getElementById('errors418').innerHTML = "";
    }

    //4.1 telephone number validation
    var tnumber41 = document.getElementById('tn1').value;
    if (tnumber41 == "") {
        document.getElementById('errors419').innerHTML = "* 4.1 enter telephone number.";
        controll = false;
    }
    else if (!tnumber41.match(/^\d*$/)) {
        document.getElementById('errors419').innerHTML = "* 4.1 enter only digits.";
        controll = false;
    }
    else if (tnumber41.length != 11) {
        document.getElementById('errors419').innerHTML = "* 4.1 length must be 11 digits.";
        controll = false;
    }
    else {
        document.getElementById('errors419').innerHTML = "";
    }

    //4.1 email validation
    var email41 = document.getElementById('email1').value;
    if (email41 == "") {
        document.getElementById('errors4110').innerHTML = "* 4.1 enter email.";
        controll = false;
    }
    else if (!email41.match(/^([a-z0-9]+)@([a-z0-9]+).([a-z]+)$/)) {
        document.getElementById('errors4110').innerHTML = "* 4.1 enter only small letter, number and (@.).";
        controll = false;
    }
    else {
        document.getElementById('errors4110').innerHTML = "";
    }

    //4.2 present address same or not validation

    if (document.forms['form1']['paddress'].value == "") {
        document.getElementById('errors421').innerHTML = "* 4.2 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors421').innerHTML = "";
    }

    //4.2 House No. and Street name validation
    if (document.getElementById('y42').checked == true) {
        var houses42 = document.getElementById('h-number2').value;
        if (houses42 == "") {
            document.getElementById('errors42').innerHTML = "* 4.2 enter House No. and Street name.";
            controll = false;
        }
        else if (!houses42.match(/^[A-Z0-9\s,-]*$/)) {
            document.getElementById('errors42').innerHTML = "* 4.2 enter number capital letter and (,-) only.";
            controll = false;
        }
        else if (houses42.length > 500 || hno41.length < 10) {
            document.getElementById('errors42').innerHTML = "* 4.2 minimum length 10 and maximum length 500 character.";
            controll = false;
        }
        else {
            document.getElementById('errors42').innerHTML = "";
        }

        //4.2 city name validation
        var cityn42 = document.getElementById('city2').value;
        if (cityn42 == "") {
            document.getElementById('errors423').innerHTML = "* 4.2 enter city name.";
            controll = false;
        }
        else if (!cityn42.match(/^[A-Z\s]*$/)) {
            document.getElementById('errors423').innerHTML = "* 4.2 enter Capital letter only.";
            controll = false;
        }
        else if (cityn42.length > 500) {
            document.getElementById('errors423').innerHTML = "* 4.2 maximum length 500 letters.";
            controll = false;
        }
        else {
            document.getElementById('errors423').innerHTML = "";
        }

        //4.2 district name validation
        var district42 = document.getElementById('district2').value;
        if (district42 == "") {
            document.getElementById('errors424').innerHTML = "* 4.2 enter district name.";
            controll = false;
        }
        else if (!district42.match(/^[A-Z\s]*$/)) {
            document.getElementById('errors424').innerHTML = "* 4.2 enter Capital letter only.";
            controll = false;
        }
        else if (district42.length > 500) {
            document.getElementById('errors424').innerHTML = "* 4.2 maximum length 500 letters.";
            controll = false;
        }
        else {
            document.getElementById('errors424').innerHTML = "";
        }

        //4.2 police station name validation
        var polices42 = document.getElementById('ps2').value;
        if (polices42 == "") {
            document.getElementById('errors425').innerHTML = "* 4.2 enter police station name.";
            controll = false;
        }
        else if (!polices42.match(/^[A-Z\s]*$/)) {
            document.getElementById('errors425').innerHTML = "* 4.2 enter Capital letter only.";
            controll = false;
        }
        else if (polices42.length > 500) {
            document.getElementById('errors425').innerHTML = "* 4.2 maximum length 500 letters.";
            controll = false;
        }
        else {
            document.getElementById('errors425').innerHTML = "";
        }

        //4.2 state name validation
        var state42 = document.getElementById('state2').value;
        if (state42 == "") {
            document.getElementById('errors426').innerHTML = "* 4.2 enter state name.";
            controll = false;
        }
        else if (!state42.match(/^[A-Z\s]*$/)) {
            document.getElementById('errors426').innerHTML = "* 4.2 enter Capital letter only.";
            controll = false;
        }
        else if (state42.length > 500) {
            document.getElementById('errors426').innerHTML = "* 4.2 maximum length 500 letters.";
            controll = false;
        }
        else if (state42 == district42) {
            document.getElementById('errors253').innerHTML = "* 4.1 district state and region must be different.";
            controll = false;
        }
        else {
            document.getElementById('errors426').innerHTML = "";
        }

        //4.2 pin validation
        var pin42 = document.getElementById('pin2').value
        if (pin42 == "") {
            document.getElementById('errors427').innerHTML = "* 4.2 enter PIN.";
            controll = false;
        }
        else if (!pin42.match(/^[0-9]*$/)) {
            document.getElementById('errors427').innerHTML = "* 4.2 enter only digits.";
            controll = false;
        }
        else if (pin42.length != 6) {
            document.getElementById('errors427').innerHTML = "* 4.2 length must be 6 digit.";
            controll = false;
        }
        else {
            document.getElementById('errors427').innerHTML = "";
        }



        //5 name validation
        var name5 = document.getElementById('name51').value;
        if (name5 == "") {
            document.getElementById('errors51').innerHTML = "* 5 name.";
            controll = false;
        }
        else if (!name5.match(/^[A-Z0-9\s,-]*$/)) {
            document.getElementById('errors51').innerHTML = "* 5 enter number capital letter and (,-) only.";
            controll = false;
        }
        else if (name5.length > 500) {
            document.getElementById('errors51').innerHTML = "* 5 maximum length 500 character.";
            controll = false;
        }
        else {
            document.getElementById('errors51').innerHTML = "";
        }

        //5 mobile number validation
        var monumber5 = document.getElementById('mn51').value;
        if (monumber5 == "") {
            document.getElementById('errors52').innerHTML = "* 5 enter mobile number.";
            controll = false;
        }
        else if (!monumber5.match(/^\d*$/)) {
            document.getElementById('errors52').innerHTML = "* 5 enter only digits.";
            controll = false;
        }
        else if (monumber5.length != 10) {
            document.getElementById('errors52').innerHTML = "* 5 length must be 10 digit.";
            controll = false;
        }
        else {
            document.getElementById('errors52').innerHTML = "";
        }

        //5 telephone number validation
        var telnumber5 = document.getElementById('tn51').value;
        if (telnumber5 == "") {
            document.getElementById('errors53').innerHTML = "* 5 enter telephone number.";
            controll = false;
        }
        else if (!telnumber5.match(/^\d*$/)) {
            document.getElementById('errors53').innerHTML = "* 5 enter only digits.";
            controll = false;
        }
        else if (telnumber5.length != 11) {
            document.getElementById('errors53').innerHTML = "* 5 length must be 11 digit.";
            controll = false;
        }
        else {
            document.getElementById('errors53').innerHTML = "";
        }

        //5 email validation
        var email5 = document.getElementById('email51').value;
        if (email5 == "") {
            document.getElementById('errors54').innerHTML = "* 5 enter email.";
            controll = false;
        }
        else if (!email5.match(/^([a-z0-9]+)@([a-z0-9]+).([a-z]+)$/)) {
            document.getElementById('errors54').innerHTML = "* 5 enter only small letter, number and (@.).";
            controll = false;
        }
        else {
            document.getElementById('errors54').innerHTML = "";
        }
    }
    else {
        document.getElementById('errors42').innerHTML = "";
        document.getElementById('errors423').innerHTML = "";
        document.getElementById('errors424').innerHTML = "";
        document.getElementById('errors425').innerHTML = "";
        document.getElementById('errors426').innerHTML = "";
        document.getElementById('errors427').innerHTML = "";
        document.getElementById('errors51').innerHTML = "";
        document.getElementById('errors52').innerHTML = "";
        document.getElementById('errors53').innerHTML = "";
        document.getElementById('errors54').innerHTML = "";
    }

    //6.1 Passport/ Identity Certificate Number validation
    if (document.getElementById('p1').checked == true) {
        var passportno61 = document.getElementById('passportnumber61').value;
        if (passportno61 == "") {
            document.getElementById('errors611').innerHTML = "* 6.1 enter passport number.";
            controll = false;
        }
        else if (!passportno61.match(/^[A-Z0-9]*$/)) {
            document.getElementById('errors611').innerHTML = "* 6.1 enter number and capital letter only.";
            controll = false;
        }
        else if (passportno61.length != 8) {
            document.getElementById('errors611').innerHTML = "* 6.1 length must be 8 character.";
            controll = false;
        }
        else {
            document.getElementById('errors611').innerHTML = "";
        }

        //6.1 Date of Issue validation

        var datei61 = document.getElementById('d61').value;
        if (datei61 == "") {
            document.getElementById('errors612').innerHTML = "* 6.1 enter Date of Issue.";
            controll = false;
        }
        else if (z) {
            document.getElementById('errors612').innerHTML = "* 6.1 Date of Issue must be past date.";
            controll = false;
        }
        else {
            document.getElementById('errors612').innerHTML = "";
        }

        //6.1 Date of Expiry validation
        var dateexp61 = document.getElementById('d612').value;
        if (dateexp61 == "") {
            document.getElementById('errors613').innerHTML = "* 6.1 enter Date of Expiry.";
            controll = false;
        }
        else if (expglobal) {
            document.getElementById('errors613').innerHTML = "* 6.1 Date of expiry must be grater than Date of Issue.";
            controll = false;
        }
        else {
            document.getElementById('errors613').innerHTML = "";
        }

        //6.1 Place of Issue validation
        var place61 = document.getElementById('pi61').value;
        if (place61 == "") {
            document.getElementById('errors614').innerHTML = "* 6.1 enter Place of Issue.";
            controll = false;
        }
        else if (!place61.match(/^[A-Z\s]*$/)) {
            document.getElementById('errors614').innerHTML = "* 6.1 enter capital letters only.";
            controll = false;
        }
        else if (place61.length > 500) {
            document.getElementById('errors614').innerHTML = "* 6.1 length must be less then 500 character.";
            controll = false;
        }
        else {
            document.getElementById('errors614').innerHTML = "";
        }
    }
    else {
        document.getElementById('errors611').innerHTML = "";
        document.getElementById('errors612').innerHTML = "";
        document.getElementById('errors613').innerHTML = "";
        document.getElementById('errors614').innerHTML = "";
    }

    //6.2 Have you ever applied for passport, but not issued? validation

    if (document.forms['form1']['applyp'].value == "") {
        document.getElementById('errors621').innerHTML = "* 6.2 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors621').innerHTML = "";
    }

    //6.2 file number validation
    if (document.getElementById('y5').checked == true) {
        var filenumber62 = document.getElementById('fn622').value;
        if (filenumber62 == "") {
            document.getElementById('errors622').innerHTML = "* 6.2 enter file number.";
            controll = false;
        }
        else if (!filenumber62.match(/^([A-Z]{4})([0-9]+)([2]{2})$/)) {
            document.getElementById('errors622').innerHTML = "* 6.2 file number start with capital letter and last 2 digits must be current year last 2 digits.";
            controll = false;
        }
        else if (filenumber62.slice(-2)!=l2) {
            document.getElementById('errors0').innerHTML = "* 6.2 last 2 digits must be current year last 2 digits.";
            controll = false;
        }
        else if (filenumber1.length != 12) {
            document.getElementById('errors622').innerHTML = "* 6.2 file number length between 12 and 15 characters.";
        }
        else {
            document.getElementById('errors622').innerHTML = "";
        }

        //6.2 Month and Year of applying validation
        if (document.getElementById('d623').value == "") {
            document.getElementById('errors623').innerHTML = "* 6.2 enter Month and Year of applying.";
            controll = false;
        }
        else {
            document.getElementById('errors623').innerHTML = "";
        }

        //6.2 Name of passport office where applied validation
        var passportofc62 = document.getElementById('npo624').value;
        if (passportofc62 == "") {
            document.getElementById('errors624').innerHTML = "* 6.2 enter Name of passport office where applied.";
            controll = false;
        }
        else if (!passportofc62.match(/^[A-Z\s]*$/)) {
            document.getElementById('errors624').innerHTML = "* 6.2 enter capital letter only.";
            controll = false;
        }
        else if (passportofc62.length > 500) {
            document.getElementById('errors624').innerHTML = "* 6.2 length must be less then 500 character.";
            controll = false;
        }
        else {
            document.getElementById('errors624').innerHTML = "";
        }
    }
    else {
        document.getElementById('errors622').innerHTML = "";
        document.getElementById('errors623').innerHTML = "";
        document.getElementById('errors624').innerHTML = "";
    }
    //7.1 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['criminal'].value == "") {
        document.getElementById('errors711').innerHTML = "* 7.1 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors711').innerHTML = "";
    }

    //7.1 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['warrant'].value == "") {
        document.getElementById('errors712').innerHTML = "* 7.1 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors712').innerHTML = "";
    }

    //7.1 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['arrest'].value == "") {
        document.getElementById('errors713').innerHTML = "* 7.1 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors713').innerHTML = "";
    }

    //7.1 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['prohibiting'].value == "") {
        document.getElementById('errors714').innerHTML = "* 7.1 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors714').innerHTML = "";
    }

    //7.2 Have yoportu ever applied for pass, but not issued? validation
    if (document.forms['form1']['twoyears'].value == "") {
        document.getElementById('errors721').innerHTML = "* 7.2 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors721').innerHTML = "";
    }

    //7.3 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['refused'].value == "") {
        document.getElementById('errors731').innerHTML = "* 7.3.1 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors731').innerHTML = "";
    }

    //7.3 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['impounded'].value == "") {
        document.getElementById('errors732').innerHTML = "* 7.3.2 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors732').innerHTML = "";
    }

    //7.3 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['revoked'].value == "") {
        document.getElementById('errors733').innerHTML = "* 7.3.3 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors733').innerHTML = "";
    }

    //7.4.1 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['grantedc'].value == "") {
        document.getElementById('errors741').innerHTML = "* 7.4.1 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors741').innerHTML = "";
    }

    //7.4.2 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['otherregion'].value == "") {
        document.getElementById('errors742').innerHTML = "* 7.4.2 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors742').innerHTML = "";
    }

    //7.4.3 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['surrendered'].value == "") {
        document.getElementById('errors743').innerHTML = "* 7.4.3 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors743').innerHTML = "";
    }

    //7.4.4 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['renunciation'].value == "") {
        document.getElementById('errors744').innerHTML = "* 7.4.4 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors744').innerHTML = "";
    }

    //7.5.1 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['Emergencyc'].value == "") {
        document.getElementById('errors751').innerHTML = "* 7.5.1 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors751').innerHTML = "";
    }

    //7.5.2 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['deported'].value == "") {
        document.getElementById('errors7521').innerHTML = "* 7.5.2 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors7521').innerHTML = "";
    }

    //7.5.2 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['refunded'].value == "") {
        document.getElementById('errors7522').innerHTML = "* 7.5.2 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors7522').innerHTML = "";
    }

    //7.5.3 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['repatriated'].value == "") {
        document.getElementById('errors7531').innerHTML = "* 7.5.3 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors7531').innerHTML = "";
    }

    //7.5.3 Have you ever applied for passport, but not issued? validation
    if (document.forms['form1']['costborne'].value == "") {
        document.getElementById('errors7532').innerHTML = "* 7.5.3 select yes or no.";
        controll = false;
    }
    else {
        document.getElementById('errors7532').innerHTML = "";
    }

    //8.1 fees
    var fee81 = document.getElementById('fee81').value;
    if (fee81 == "") {
        document.getElementById('errors81').innerHTML = "* 8.1 enter fees in rs..";
        controll = false;
    }
    else if (!fee81.match(/^[0-9\.]*$/)) {
        document.getElementById('errors81').innerHTML = "* 8.1 enter decimal value.";
        controll = false;
    }
    else {
        document.getElementById('errors81').innerHTML = "";
    }

    //8.2 DD number
    var dd82 = document.getElementById('ddn821').value;
    if (!dd82.match(/^[0-9]*$/)) {
        document.getElementById('errors821').innerHTML = "* 8.2 enter only numbers.";
        controll = false;
    }
    else {
        document.getElementById('errors821').innerHTML = "";
    }

    //8.2 Date of Issue validation

    var datei82 = document.getElementById('d821').value;
    if(datei82==""){
        document.getElementById('errorsi822').innerHTML = "";
    }
    else if (z82) {
        document.getElementById('errorsi822').innerHTML = "* 8.2 Date of Issue must be past date.";
        controll = false;
    }
    else {
        document.getElementById('errorsi822').innerHTML = "";
    }

    //8.2 Date of Expiry validation
    var dateexp82 = document.getElementById('d822').value;
    if (dateexp82 == "") {
        document.getElementById('errorse822').innerHTML = "";
    }
    else if (expglobal82) {
        document.getElementById('errorse822').innerHTML = "* 8.2 Date of expiry must be grater than Date of Issue.";
        controll = false;
    }
    else {
        document.getElementById('errorse822').innerHTML = "";
    }

    //8.2 bank name
    var bank82 = document.getElementById('bankname82').value;
    if (!bank82.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors822').innerHTML = "* 8.2 enter capital letters.";
        controll = false;
    }
    else if (bank82.length > 500) {
        document.getElementById('errors822').innerHTML = "* 8.2 maximum length must be 500.";
    }
    else {
        document.getElementById('errors822').innerHTML = "";
    }

    //8.2 branch
    var branch82 = document.getElementById('branch82').value;
    if (!branch82.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors823').innerHTML = "* 8.2 enter capital letters.";
        controll = false;
    }
    else if (branch82.length > 500) {
        document.getElementById('errors823').innerHTML = "* 8.2 maximum length must be 500.";
    }
    else {
        document.getElementById('errors823').innerHTML = "";
    }

    //9 enclosures validation
    if (document.getElementById('enclosures9').value == "") {
        document.getElementById('errors91').innerHTML = "* 9 upload enclosures.";
        controll = false;
    }
    else {
        document.getElementById('errors91').innerHTML = "";
    }

    //9.1 enclosures validation
    var enc91 = document.getElementById('e91').value;
    if (enc91 == "") {
        document.getElementById('errors911').innerHTML = "* 9 enter Name of document.";
        controll = false;
    }
    else if (!enc91.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors911').innerHTML = "* 9 enter capital letters only.";
        controll = false;
    }
    else {
        document.getElementById('errors911').innerHTML = "";
    }


    //10 place validation
    var place10 = document.getElementById('place101').value;
    if (place10 == "") {
        document.getElementById('errors101').innerHTML = "* 10 enter place.";
        controll = false;
    }
    else if (!place10.match(/^[A-Z\s]*$/)) {
        document.getElementById('errors101').innerHTML = "* 10 enter capital letters.";
        controll = false;
    }
    else if (place10.length > 500) {
        document.getElementById('errors101').innerHTML = "* 10 maximum length must be 500.";
    }
    else {
        document.getElementById('errors101').innerHTML = "";
    }

    //10 date validation
    if (document.getElementById('d102').value == "") {
        document.getElementById('errors102').innerHTML = "* 10 enter date.";
        controll = false;
    }
    else if (cd10) {
        document.getElementById('errors102').innerHTML = "* 10 enter current date.";
        controll = false;
    }
    else {
        document.getElementById('errors102').innerHTML = "";
    }

    //10 signature validation
    if (document.getElementById('sign103').value == "") {
        document.getElementById('errors103').innerHTML = "* 10 upload signature image.";
        controll = false;
    }
    else {
        document.getElementById('errors103').innerHTML = "";
    }

}



function radio1d() {

    if (document.getElementById('p').checked == true) {
        document.getElementById('reason').disabled = true;
        document.getElementById('reason-r2').disabled = true;
        document.getElementById('reason-r3').disabled = true;
        document.getElementById('reason-r4').disabled = true;
        document.getElementById('reason-r5').disabled = true;
        document.getElementById('reason-r6').disabled = true;
        document.getElementById('reason-r11').disabled = true;
        document.getElementById('reason-r12').disabled = true;
        document.getElementById('reason-r13').disabled = true;
        document.getElementById('reason-r14').disabled = true;
        document.getElementById('reason-r15').disabled = true;
        document.getElementById('reason-r16').disabled = true;
        document.getElementById('reason-r17').disabled = true;
        document.getElementById('reason-r18').disabled = true;
        document.getElementById('reason-r19').disabled = true;
        document.getElementById('reason-r20').disabled = true;
        document.getElementById('passportnumber61').disabled = true;
        document.getElementById('d61').disabled = true;
        document.getElementById('d612').disabled = true;
        document.getElementById('pi61').disabled = true;
    }
    else {

        document.getElementById('reason').disabled = false;
        document.getElementById('reason-r2').disabled = false;
        document.getElementById('reason-r3').disabled = false;
        document.getElementById('reason-r4').disabled = false;
        document.getElementById('reason-r5').disabled = false;
        document.getElementById('reason-r6').disabled = false;
        document.getElementById('passportnumber61').disabled = false;
        document.getElementById('d61').disabled = false;
        document.getElementById('d612').disabled = false;
        document.getElementById('pi61').disabled = false;
        if (document.getElementById('reason-r3').checked == true) {
            document.getElementById('reason-r11').disabled = false;
            document.getElementById('reason-r12').disabled = false;
            document.getElementById('reason-r13').disabled = false;
            document.getElementById('reason-r14').disabled = false;
            document.getElementById('reason-r15').disabled = false;
            document.getElementById('reason-r16').disabled = false;
            document.getElementById('reason-r17').disabled = false;
            document.getElementById('reason-r18').disabled = false;
            document.getElementById('reason-r19').disabled = false;
            if (document.getElementById('reason-r19').checked == true) {
                document.getElementById('reason-r20').disabled = false;
            }
            else {
                document.getElementById('reason-r20').disabled = true;
            }
        }
        else {
            document.getElementById('reason-r11').disabled = true;
            document.getElementById('reason-r12').disabled = true;
            document.getElementById('reason-r13').disabled = true;
            document.getElementById('reason-r14').disabled = true;
            document.getElementById('reason-r15').disabled = true;
            document.getElementById('reason-r16').disabled = true;
            document.getElementById('reason-r17').disabled = true;
            document.getElementById('reason-r18').disabled = true;
            document.getElementById('reason-r19').disabled = true;
            document.getElementById('reason-r20').disabled = true;
        }
    }
}


function radio12e() {
    document.getElementById('reason-r11').disabled = false;
    document.getElementById('reason-r12').disabled = false;
    document.getElementById('reason-r13').disabled = false;
    document.getElementById('reason-r14').disabled = false;
    document.getElementById('reason-r15').disabled = false;
    document.getElementById('reason-r16').disabled = false;
    document.getElementById('reason-r17').disabled = false;
    document.getElementById('reason-r18').disabled = false;
    document.getElementById('reason-r19').disabled = false;
    if (document.getElementById('reason-r19').checked == true) {
        document.getElementById('reason-r20').disabled = false;
    }
    else {
        document.getElementById('reason-r20').disabled = true;
    }
}

function radio12d() {
    document.getElementById('reason-r11').disabled = true;
    document.getElementById('reason-r12').disabled = true;
    document.getElementById('reason-r13').disabled = true;
    document.getElementById('reason-r14').disabled = true;
    document.getElementById('reason-r15').disabled = true;
    document.getElementById('reason-r16').disabled = true;
    document.getElementById('reason-r17').disabled = true;
    document.getElementById('reason-r18').disabled = true;
    document.getElementById('reason-r19').disabled = true;
    document.getElementById('reason-r20').disabled = true;
}

function othercheck() {
    if (document.getElementById('reason-r19').checked == true) {
        document.getElementById('reason-r20').disabled = false;
    }
    else {
        document.getElementById('reason-r20').disabled = true;
    }
}

function radio62e() {
    if (document.getElementById('y5').checked == true) {
        document.getElementById('fn622').disabled = false;
        document.getElementById('d623').disabled = false;
        document.getElementById('npo624').disabled = false;
    }
    else {
        document.getElementById('fn622').disabled = true;
        document.getElementById('d623').disabled = true;
        document.getElementById('npo624').disabled = true;
    }
}

function pa42() {
    if (document.getElementById('y42').checked == true) {
        document.getElementById('h-number2').disabled = false;
        document.getElementById('city2').disabled = false;
        document.getElementById('district2').disabled = false;
        document.getElementById('ps2').disabled = false;
        document.getElementById('state2').disabled = false;
        document.getElementById('pin2').disabled = false;


        document.getElementById('name51').disabled = false;
        document.getElementById('mn51').disabled = false;
        document.getElementById('tn51').disabled = false;
        document.getElementById('email51').disabled = false;
    }
    else {
        document.getElementById('h-number2').disabled = true;
        document.getElementById('city2').disabled = true;
        document.getElementById('district2').disabled = true;
        document.getElementById('ps2').disabled = true;
        document.getElementById('state2').disabled = true;
        document.getElementById('pin2').disabled = true;

        document.getElementById('name51').disabled = true;
        document.getElementById('mn51').disabled = true;
        document.getElementById('tn51').disabled = true;
        document.getElementById('email51').disabled = true;
    }

}


function sub() {
    if (controll == false) {
        return false;
    }
    else {
        return true;
    }

}

function currentdate() {
    window.z;
    var today = new Date();
    var year = today.getUTCFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    month++;
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var cdate = year + "" + month + "" + day;
    let x = document.getElementById('d61').value;
    let y = x.replace(/\D/g, "");
    if (y > cdate) {
        z = true;
    }
    else {
        z = false;
    }
}

function expdate1() {
    window.expglobal;

    let a = document.getElementById('d61').value;
    let b = a.replace(/\D/g, "");
    b++;

    let x = document.getElementById('d612').value;
    let y = x.replace(/\D/g, "");
    if (y < b) {
        expglobal = true;
    }
    else {
        expglobal = false;
    }
}

function bdate() {
    window.bdglobal;
    var today = new Date();
    var year = today.getUTCFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    month++;
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var cdate = year + "" + month + "" + day;

    let x = document.getElementById('bd1').value;
    let y = x.replace(/\D/g, "");
    cdate = cdate - 31;
    if (y > cdate) {
        bdglobal = true;
    }
    else {
        bdglobal = false;
    }
}

//10
function currentdate10() {
    window.cd10;
    var today = new Date();
    var year = today.getUTCFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    month++;
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var cdate = year + "" + month + "" + day;
    let x = document.getElementById('d102').value;
    let y = x.replace(/\D/g, "");
    if (y != cdate) {
        cd10 = true;
    }
    else {
        cd10 = false;
    }
}


//8.2 DD
function currentdate82() {
    window.z82;
    var today = new Date();
    var year = today.getUTCFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    month++;
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var cdate = year + "" + month + "" + day;
    let x = document.getElementById('d821').value;
    let y = x.replace(/\D/g, "");
    if (y > cdate) {
        z82 = true;
    }
    else {
        z82 = false;
    }
}

function expdate82() {
    window.expglobal82;

    let a = document.getElementById('d821').value;
    let b = a.replace(/\D/g, "");
    b++;

    let x = document.getElementById('d822').value;
    let y = x.replace(/\D/g, "");
    if (y < b) {
        expglobal82 = true;
    }
    else {
        expglobal82 = false;
    }
}