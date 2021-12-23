const randomNum = Math.ceil(Math.random() * 10);

const userNum = Number(
  prompt(
    `Men 1 dan 10 gacha sonlardan birini o'yladim.\nSiz bu sonni topishga harakat qiling.`
  )
);

if (userNum == randomNum) {
  alert(`Qoyil siz to'g'ri topdingiz. Bu son ${randomNum} edi.`);
} else {
  alert(
    `Men ${randomNum} sonini o'ylagan edim.\nSiz ${userNum} sonini tanladingiz.`
  );
}

alert(`O'yinni boshidan boshlash uchun sahifani yangilang !`);
