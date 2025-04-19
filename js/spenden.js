// js/spenden.js

const hadithe = [
    `„Wer für Allah eine Moschee baut, dem baut Allah ein Haus im Paradies.“
     Überliefert von al-Bukhari (Hadith Nr. 450) und Muslim (Hadith Nr. 533) (Sahih, mutawâtir in Bedeutung)`,
  
    `„Jeden Morgen kommen zwei Engel herab. Der eine sagt: ‚O Allah, gib dem, der spendet, Ersatz!‘ Und der andere sagt: ‚O Allah, vernichte das Vermögen des Geizhalses!‘“
    Sahih al-Bukhari (Hadith Nr. 1442), Sahih Muslim (Hadith Nr. 1010)`,
  
    `„Die Sadaqa (Almosen) löscht die Sünde so, wie Wasser das Feuer löscht.“
    Tirmidhi (Hadith Nr. 614), authentifiziert von al-Albani (Sahih)`,
  
    `„Schützt euch vor dem Höllenfeuer, selbst wenn es nur durch die Gabe einer halben Dattel ist.“
    Sahih al-Bukhari (Hadith Nr. 1413), Sahih Muslim (Hadith Nr. 1016)`,
  
    `„Die beste Sadaqa ist die, die du gibst, während du gesund bist, sparsam bist und Angst vor Armut hast, in der Hoffnung auf Reichtum.“
    Sahih al-Bukhari (Hadith Nr. 1419), Sahih Muslim (Hadith Nr. 1032)`
  ];
  
  let currentHadith = 0;
  
  const hadithText = document.getElementById("hadith-text");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  
  function updateHadith() {
    hadithText.textContent = hadithe[currentHadith];
  }
  
  nextBtn.addEventListener("click", () => {
    currentHadith = (currentHadith + 1) % hadithe.length;
    updateHadith();
  });
  
  prevBtn.addEventListener("click", () => {
    currentHadith = (currentHadith - 1 + hadithe.length) % hadithe.length;
    updateHadith();
  });
  updateHadith();
