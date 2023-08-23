const form = document.querySelector(".calculator__form")
const res = document.querySelectorAll(".result")

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData(form)

  const priceline = [25, 30, 45, 50, 60]
  const priceWidth = [[710, 750, 1100, 1200, 1200],[4300, 5600, 8400, 9500, 0],[16000, 16000, 16000, 16000, 0]]
  let width =  Number(formData.get('width'))
  let height = Number(formData.get('height'))
  let line = Number(formData.get('line')) || 0.00000000001
  let mat = formData.get('check') === null ? true : false;
  let abres = Number(formData.get('abres')) || 0.00000000001
  let select = Number(formData.get('select')) 
  let material = Number(formData.get('material'))

  let resWidth = mat ? width : 0.01
  let resHeight = mat ? height : 0.01

  console.log(mat)
  console.log(resWidth)
  console.log(resHeight)

  if(!resWidth || !resHeight || !line) {
    res[0].innerHTML= "Где то ошибка!!!"
    res[0].style.backgroundColor = "red"
  } else {
    let result =Math.floor(priceWidth[material][select] / 2.25 * (resWidth * resHeight) + line * priceline[select] + abres * 15)
  res[0].innerHTML =`${result} р.`
  res[0].style.backgroundColor = "green"
  res[1].innerHTML =`${Math.floor(line * priceline[select] * 0.3)} р.`
  res[1].style.backgroundColor = "blue"

  } 
})