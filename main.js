const loadBtn = document.getElementById("loadSentence");
const sentenceBox = document.getElementById("sentenceBox");
const speakBtn = document.getElementById("speakBtn");
const listenBtn = document.getElementById("listenBtn");
const feedback = document.getElementById("feedback");

let currentSentence = "";

loadBtn.addEventListener("click", async () => {
  const lang = document.getElementById("language").value;
  const res = await fetch(`http://localhost/readalong/get_story.php?lang=${lang}`);
  const data = await res.json();

  currentSentence = data.sentence;
  sentenceBox.textContent = currentSentence;
  feedback.textContent = "";
});

speakBtn.addEventListener("click", () => {
    const lang = document.getElementById("language").value;
    const voices = speechSynthesis.getVoices();
  
    // Get the closest matching voice
    const voice = voices.find(v => v.lang.startsWith(lang));
  
    const utterance = new SpeechSynthesisUtterance(currentSentence);
    utterance.lang = lang === "hi" ? "hi-IN" : lang === "kn" ? "kn-IN" : "en-US";
  
    if (voice) {
      utterance.voice = voice;
      speechSynthesis.speak(utterance);
    } else {
      alert("This language's voice is not available on your system. Try using Chrome browser on desktop.");
    }
  });
  

listenBtn.addEventListener("click", () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  const lang = document.getElementById("language").value;
  recognition.lang = lang === "hi" ? "hi-IN" : lang === "kn" ? "kn-IN" : "en-US";

  recognition.onresult = (event) => {
    const spoken = event.results[0][0].transcript.trim();
    if (spoken === currentSentence.trim()) {
      feedback.textContent = "🌟 Well done!";
    } else {
      feedback.textContent = `❌ Try again! You said: "${spoken}"`;
    }
  };

  recognition.start();
});
