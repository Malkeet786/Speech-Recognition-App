const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('You can speak now!!!');
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    // speech.voice=voice;
    if(text.includes('time'))
    speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now";
    else if(text.includes('my birthday'))
    speech.text = 'Do you think you\'re famous! How the heck would I know your birthday!';
    else if(text.includes('love me'))
    speech.text = 'Of course, not! You piece of junk!';
    // else if(text.includes('sidhu'))
    // speech.voice='file:///C:/Users/abc/Downloads/Sin.mp3';
    window.speechSynthesis.speak(speech);
}