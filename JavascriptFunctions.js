function calculate_age(dBirthday) {
    //get all the information from today's date and their birthday:
    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();
    var birth_year = dBirthday.getFullYear();
    var birth_month = dBirthday.getMonth();
    var birth_day = dBirthday.getDay();

    //rough guess of age:
    var age = today_year - birth_year;

    //if before current month
    if (today_month < (birth_month - 1)) {
        age--;
    }
    // if current month, date
    if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
        age--;
    }
    return age;
}

function changeMessage() {
    document.getElementById("pageText").innerHTML = sUserName + " is currently " + calculate_age(birth_month, birth_day, birth_year) + " years old";
}