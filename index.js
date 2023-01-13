const form = document.querySelector(".calculator__form")
const res = document.querySelector(".result")

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData(form)

  const priceline = [25, 30, 35]
  const priceWidth = [600, 800, 1000]


  let width =  Number(formData.get('width'))
  let height = Number(formData.get('height'))
  let line = Number(formData.get('line')) || 0.00000000001
  let select = Number(formData.get('select')) 
  if(!width || !height || !line) {
    res.innerHTML= "Где то ошибка!!!"
    res.style.backgroundColor = "red"
  } else {
    let result =Math.floor(priceWidth[select] / 2.25 * (width * height) + line * priceline[select])
  res.innerHTML =`${result} р.`
  res.style.backgroundColor = "green"
  form.reset()
  }

  
})