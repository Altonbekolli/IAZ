function setLanguage(lang) {
    const label = lang === 'al' ? 'AL' : 'DE';
    document.getElementById("current-lang").innerText = label;
  
    console.log("Sprache gewählt:", label);
  }
  
  
fetch('https://api.aladhan.com/v1/timingsByCity?city=Ulm&country=Germany&method=2')
.then(res => res.json())
.then(data => {
  const times = data.data.timings;
  document.getElementById("fajr").textContent = times.Fajr;
  document.getElementById("sunrise").textContent = times.Sunrise;
  document.getElementById("dhuhr").textContent = times.Dhuhr;
  document.getElementById("asr").textContent = times.Asr;
  document.getElementById("maghrib").textContent = times.Maghrib;
  document.getElementById("isha").textContent = times.Isha;

  const today = new Date().toLocaleDateString('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  document.getElementById("heute-datum").textContent = today;
})
.catch(err => {
  console.error("Fehler beim Laden der Gebetszeiten:", err);
});
