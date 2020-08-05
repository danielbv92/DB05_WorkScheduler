function time() {
    var momentCurrentDate = moment().format("MMMM Do YYYY h:mm:ss a");
    $("#currentDay").text(momentCurrentDate);
}
//created set interval method to run the time function to update time every 1000 miliseconds
time();
setInterval(time, 1000);

const keys = Object.entries(localStorage);

keys.forEach(function(key) {
    $("#" + key[0]).val(key[1]);
});

//locate button that is responsible for saving the note
$('.saveBtn').on('click', function ()
 { console.log('the button was clicked');
    var className = $(this).val();
    var inputId = $("#" + className); 
    var value = inputId.val();
    console.log(value); 
    localStorage.setItem(className, value)
    console.log(className);
});

function loadNotes() {
    var noteInputFields = $('note-field');
    for (var i = 0; i < noteInputFields.length; i++) {
        for (var j = 0; j < notes.length; j++) {
            if (noteInputFields[i].hasClass(notes[j].timeslot)) {
                noteInputfields[i].val(notes[j].note);
                break;
            }
        }
    }
}



//define a click listener that will execute some funcion that will save the note 
//use local storage to save the note