function organ() {
  let audio = new Audio('audio/organ.mp3');
audio.play();
}

function batSwing() {
  let audio = new Audio('audio/baseballhit.mp3');
audio.play();
}

function calculateAverage() {
  let atBats = document.getElementById('calculatorInnerShell__inputs--atBats').value;
  let hits = document.getElementById('calculatorInnerShell__inputs--hits').value;
  let walks = document.getElementById('calculatorInnerShell__inputs--walks').value;

  var w = atBats;
  var x = hits;
  var y = walks;

  const battingAverage = (x - y) / (w - y);

  if (battingAverage <= .999) {
    let z = battingAverage.toFixed(3);
    document.getElementById('average').innerHTML = "Average" + ' ' + z + "%";
  } else {
    let z = battingAverage.toFixed(4);
    document.getElementById('average').innerHTML = "Average" + ' ' + z + "%";
  }

}



