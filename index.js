const sec = document.querySelector(".sec")
const min = document.querySelector(".min")
const hr = document.querySelector(".hr")

const updateTime = () => {
    
    let date = new Date(),
      secToDeg = (date.getSeconds() / 60) * 360,
      minToDeg = (date.getMinutes() / 60) * 360,
      hrToDeg = (date.getHours() / 12) * 360;
   
    sec.style.transform = `rotate(${secToDeg}deg)`;
    min.style.transform = `rotate(${minToDeg}deg)`;
    hr.style.transform = `rotate(${hrToDeg}deg)`;
  };

  setInterval(updateTime, 1000);
 
  updateTime();