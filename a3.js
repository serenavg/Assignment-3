$(document).ready(function () {

  var door = $("#greenglassdoor")
  var bad = $("#wrong")
  var correct = $('#correct2more');
  var almost = $("#correct1more")
  var win = $("#Youwon")
  var knob = $("#doorknob")


  var winletters = ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz"]
  var previousInputs = ['', '', '']; // Initialize an array to store the last two inputs

  bad.hide()
  correct.hide()
  almost.hide()
  win.hide()
  knob.show()

  function isWinningWord(word) {
    return winletters.includes(word);
  }


  let textbox = $('input[type="text"]');

  let doorknob = $('#doorknob');

  let previousInput = []; // Add this line to keep track of the previous input

  textbox.keydown(function (e) {   //EVENT LISTENER
    if (e.keyCode === 13) { // If 'Enter' key is pressed
      e.preventDefault(); // Prevent form submission
      var input = textbox.val().toLowerCase(); // Get the input value

      if (previousInputs.includes(input)) { // If the input already exists
        console.log('Repeated word');
        // Handle repeated word (e.g., show a message to the user)
        return; // Skip the rest of the code
      }

      if (/([a-zA-Z])\1/.test(input)) { // If the input contains any double letters
        console.log('Good');
        almost.hide()
        win.hide()
        door.hide()
        knob.hide()
        bad.hide()
        correct.show(); // Show the #correct2more element

        if (previousInputs.slice(1).every(val => /([a-zA-Z])\1/.test(val))) { // If the previous input also contains double letters
          almost.hide(); // Show the #correct1more element
          console.log('Good');
          correct.hide()
          win.show()
          bad.hide()
          knob.hide()
          door.hide()



        } else if (previousInputs[2] && /([a-zA-Z])\1/.test(previousInputs[2])) { // If the last input also contain double letters
          almost.show();
          console.log('Good');
          correct.hide()
          win.hide()
          bad.hide()
          knob.hide()
          door.hide()

        } else {
          correct.show(); // Show the #correct2more element
        }

      } else {
        bad.show();
        console.log('bad');
        almost.hide()
        win.hide()
        door.hide()
        knob.hide()
      }

      previousInputs = [previousInputs[1], previousInputs[2], input]; // Update the previous input

    }
  });
});
