const certificates = {
  "DL001": "images/deloitte.jpg",
  "HR001": "images/talentghar.jpg",
  "AI001": "images/aifortechies.jpg",
  "PB001": "images/powerbi.jpg",
  "AI002": "images/be10x.jpg",
  "AP001": "images/aptitude.jpg",
  "FS001": "images/skillected.jpg",
  "GU001": "images/guvi.jpg",
  "AW001": "images/award.jpg",
  
};

function checkCertificate() {
  const id = document.getElementById("certInput").value.trim();
  const result = document.getElementById("result");

  if (certificates[id]) {
    result.innerHTML =
      `<img src="${certificates[id]}" style="max-width:300px;border-radius:8px;">`;
  } else {
    result.innerHTML = "<p>Certificate not found</p>";
  }
}
