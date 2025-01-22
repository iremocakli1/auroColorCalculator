let selectedGender = '';

// Doğum tarihini sıfırlamak için fonksiyon
function resetForm() {
    document.getElementById("birthdate").value = '';  
    selectedGender = '';
    document.getElementById("auraResult").style.display = 'none'; 
    document.getElementById("male").style.borderColor = "#9c4baf";
    document.getElementById("female").style.borderColor = "#9c4baf";
    document.getElementById("auraColor").style.backgroundColor = '';
    document.getElementById("auraImage").src = '';
    document.getElementById("genderIcon").style.display = 'none';
}

// Cinsiyet seçimi fonksiyonu
function selectGender(gender) {
    selectedGender = gender;

    // Cinsiyet seçildiğinde, butonların renklerini güncelle
    if (gender === 'male') {
        document.getElementById("male").style.borderColor = "#9c4baf";
        document.getElementById("female").style.borderColor = "#ccc";  // Dişi butonu gri
    } else if (gender === 'female') {
        document.getElementById("female").style.borderColor = "#9c4baf";
        document.getElementById("male").style.borderColor = "#ccc";  // Erkek butonu gri
    }
}

// Aura rengi hesaplama fonksiyonu
function calculateAura() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Lütfen bir doğum tarihi girin.");
        return;
    }
    if (!selectedGender) {
        alert("Lütfen cinsiyetinizi seçin.");
        return;
    }

    // Numerolojik hesaplamayı yap
    const totalSum = getNumerologySum(birthdate);
    const finalNumber = reduceToSingleDigit(totalSum);

    // Aura rengini ve resmini al
    const auraColor = getAuraColor(finalNumber);
    const auraImage = getAuraImage(auraColor);
    const genderIcon = getGenderIcon(selectedGender);

    // Sonuçları göster
    // document.getElementById("auraColor").style.backgroundColor = auraColor;
    document.getElementById("auraImage").src = auraImage;
    document.getElementById("auraResult").style.display = "block";
    
    // Cinsiyet ikonunu göster
    document.getElementById("genderIcon").src = genderIcon;
    document.getElementById("genderIcon").style.display = "block";
}

// Numeroloji toplamını hesaplamak için fonksiyon
function getNumerologySum(birthdate) {
    const dateParts = birthdate.split("-");
    let sum = 0;

    // Tüm tarih bileşenlerini (gün, ay, yıl) sayısal olarak topla
    dateParts.forEach(part => {
        part.split("").forEach(digit => {
            sum += parseInt(digit);  // Her rakamı topla
        });
    });

    return sum;
}

// 2 basamağa kadar indirgeme fonksiyonu
function reduceToSingleDigit(sum) {
    while (sum > 9) {
        sum = sum.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return sum;
}

// Aura rengini belirleme fonksiyonu
function getAuraColor(number) {
    switch (number) {
        case 1: return "red";      // Kırmızı
        case 2: return "orange";   // Turuncu
        case 3: return "yellow";   // Sarı
        case 4: return "green";    // Yeşil
        case 5: return "blue";     // Mavi
        case 6: return "indigo";   // İndigo
        case 7: return "purple";   // Mor
        case 8: return "pink";     // Pembe
        case 9: return "bronze";   // Bronz
        default: return "white";   // Varsayılan renk (herhangi bir hata durumunda)
    }
}

// Aura resmini belirleme fonksiyonu
function getAuraImage(color) {
    switch (color) {
        case "red": return "images/red.jpg";      // Kırmızı aura resmi
        case "orange": return "images/orange.jpg";  // Turuncu aura resmi
        case "yellow": return "images/yellow.jpg";  // Sarı aura resmi
        case "green": return "images/green.jpg";    // Yeşil aura resmi
        case "blue": return "images/blue.jpg";      // Mavi aura resmi
        case "indigo": return "images/indigo.jpg";  // İndigo aura resmi
        case "purple": return "images/purple.jpg";  // Mor aura resmi
        case "pink": return "images/pink.jpg";      // Pembe aura resmi
        case "bronze": return "images/bronze.jpg";  // Bronz aura resmi
        default: return "images/default-aura.jpg";       // Varsayılan bir resim
    }
}

// Cinsiyet simgesini belirleme fonksiyonu
function getGenderIcon(gender) {
    if (gender === 'male') {
        return "https://media.istockphoto.com/id/1407436459/tr/vekt%C3%B6r/male-gender-symbol.jpg?s=2048x2048&w=is&k=20&c=e-uoaqiIjHGChzo3ah8EQHh2lNtgfTDW7mE3eY4MrNU=";
    } else if (gender === 'female') {
        return "https://media.istockphoto.com/id/1407435383/tr/vekt%C3%B6r/female-gender-symbol.jpg?s=2048x2048&w=is&k=20&c=xCtjdZvlWy8wTP7OiAegJHxAO4N-lDn65il5lh_5A-E=";
    }
}

  
  document.addEventListener("mouseout", function() {
    var cursorTail = document.getElementById("cursor-tail");
    cursorTail.classList.remove("visible");
  });
  
  document.addEventListener("mousemove", function(event) {
    var cursorTail = document.getElementById("cursor-tail");
    var xPos = event.clientX;
    var yPos = event.clientY;
  
    setTimeout(function() {
      cursorTail.style.left = (xPos - 75) + "px";
      cursorTail.style.top = (yPos - 75) + "px";
    }, 50);
  });
  
  const numStars =500; // Adjust the number of stars as needed
  
  for (let i = 0; i < numStars; i++) {
    createStar(i);
  }
  
  function createStar(index) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(star);
  }
  
  function validateDate(input) {
    const value = input.value;
    const regex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD formatında kontrol et
    if (value.match(regex)) {
        // Tarih doğru formatta
        input.style.borderColor = '#9b5ef0';  // Doğru tarih, mor çerçeve
    } else {
        // Yanlış tarih formatı
        input.style.borderColor = 'red';  // Yanlış tarih, kırmızı çerçeve
    }
}
