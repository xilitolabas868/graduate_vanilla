const imgAddress = String(Math.floor(Math.random() * 3) + 1);
const bg = `url('bg/${imgAddress}.jpg')`;

document.body.style.backgroundImage = bg;
document.body.style.backgroundSize = "cover";
