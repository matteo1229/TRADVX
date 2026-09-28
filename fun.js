function say_porcamadonna(){
    var testo = document.getElementById('text-palle').value;
    var testo_tradotto = trans_dvx(testo);
    var start_stop_btn = document.getElementById('start_stop_btn');
    document.getElementById('msg').textContent = testo_tradotto;
    
    if (start_stop_btn.textContent == 'Start'){
      //start_recording();
      start_stop_btn.textContent = 'Stop';
    } else if (start_stop_btn.textContent == 'Stop') {
      //stop_recording();
      start_stop_btn.textContent = 'Start';
    }
}

function trans_dvx(testo){
  // inserire traduttore
  return testo;
}
/*
function start_recording(){
  // start recording audio from the microphone
  mic.start();
}

function stop_recording(){
  // stop recording audio
  mic.stop();
}*/
