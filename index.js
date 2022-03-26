const schemeForm = document.querySelector(".scheme-gen-form")
const getSchemeBtn = document.querySelector('#get-scheme-btn')
const colorInputEl = document.querySelector('#seed-color')
const schemeModeEl = document.querySelector('#scheme-mode')
const colorSchemeEl = document.querySelector('.color-scheme')

schemeForm.addEventListener("submit", (event) => {
  event.preventDefault()

  // Get user input
  const seedColor = colorInputEl.value.substring(1)
  const schemeMode = schemeModeEl.value

  // getting the scheme colors and hex values to display
  fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}`)
    .then(res => res.json())
    .then(data => {
      let palleteHtml = ""
      data.colors.map(color => {
       palleteHtml += `
        <div class="pallete">
            <div class="pallete-color" style="background:${color.hex.value}"></div>
            <div class="pallete-color__text">
              <a href="#">${color.hex.value}</a>
            </div>
        </div> `
      })
      colorSchemeEl.innerHTML = palleteHtml

    })
})

