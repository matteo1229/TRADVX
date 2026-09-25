import Microphone from '@gkt/microphone';

navigator.mediaDevices.getUserMedia({audio: true}).then((stream) => {
  const mic = new Microphone(stream);

  // periodically export a Blob containing WAV data of the audio recorded since the last export
  const blob = mic.export();
});