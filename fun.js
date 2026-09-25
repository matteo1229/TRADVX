function say_porcamadonna(){
    var testo = document.getElementById('text-palle').value;
    var testo_tradotto = trans_dvx(testo);
    document.getElementById('msg').textContent = testo_tradotto;
    var state = document.getElementById('start_stop_btn').textContent;
    
    if (state == 'Start'){
      start_recording();
      state = 'Stop';
    } else if (state == 'Stop') {
      stop_recording();
      state = 'Start';
    }

    document.getElementById('start_stop_btn').textContent = state;
}

function trans_dvx(testo){
  // inserire traduttore
  return testo;
}

function start_recording(){
  // start recording audio from the microphone
  mic.start();
}

function stop_recording(){
  // stop recording audio
  mic.stop();
}
