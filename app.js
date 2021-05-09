const url = "https://api.covid19api.com/summary";
const countries = document.querySelector(".countries");
const newConfirmed = document.querySelector(".new-confirmed");
const newDeaths = document.querySelector(".new-deaths");
const newRecovered = document.querySelector(".new-recovered");
const totalConfirmed = document.querySelector(".total-confirmed");
const totalDeaths = document.querySelector(".total-deaths");
const totalRecovered = document.querySelector(".total-recovered");
const newConfirmedMobile = document.querySelector(".new-confirmed-mobile");
const newDeathsMobile = document.querySelector(".new-deaths-mobile");
const newRecoveredMobile = document.querySelector(".new-recovered-mobile");
const totalConfirmedMobile = document.querySelector(".total-confirmed-mobile");
const totalDeathsMobile = document.querySelector(".total-deaths-mobile");
const totalRecoveredMobile = document.querySelector(".total-recovered-mobile");

const showData = async ()=>{
  try {
    const response = await fetch(url)
    const data = await response.json()  
    newConfirmed.textContent = data.Global.NewConfirmed;
    newDeaths.textContent = data.Global.NewDeaths;
    newRecovered.textContent = data.Global.NewRecovered;
    totalConfirmed.textContent = data.Global.TotalConfirmed;
    totalDeaths.textContent = data.Global.TotalDeaths;
    totalRecovered.textContent = data.Global.TotalRecovered;

    newConfirmedMobile.textContent = data.Global.NewConfirmed;
    newDeathsMobile.textContent = data.Global.NewDeaths;
    newRecoveredMobile.textContent = data.Global.NewRecovered;
    totalConfirmedMobile.textContent = data.Global.TotalConfirmed;
    totalDeathsMobile.textContent = data.Global.TotalDeaths;
    totalRecoveredMobile.textContent = data.Global.TotalRecovered;
    for (let i = 0; i <= 189; i++) {
      countries.innerHTML += `<div><p>${data.Countries[i].Country}</p>
                              <p>${data.Countries[i].NewConfirmed}</p>
                              <p>${data.Countries[i].NewDeaths}</p>
                              <p>${data.Countries[i].NewRecovered}</p>
                              <p>${data.Countries[i].TotalConfirmed}</p>
                              <p>${data.Countries[i].TotalDeaths}</p>
                              <p>${data.Countries[i].TotalRecovered}</p></div>`;
    }
  } catch (error) {
    document.body.innerHTML = "Error 404"
  }
}
showData()