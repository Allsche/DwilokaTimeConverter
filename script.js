const toHours = {
  hour:1,
  day:24,
  week:168,
  month:720,
  year:8760
}

const valInput = document.getElementById("val")
const unitSelect = document.getElementById("unit")
const outDiv = document.getElementById("out")
const btn = document.getElementById("convertBtn")
const toggle = document.getElementById("themeToggle")

function convert(){
  const v = +valInput.value
  if(!v) return outDiv.innerHTML = ""

  const h = v * toHours[unitSelect.value]
  const d = h / 240
  const w = d / 10
  const m = w / 3
  const y = m / 12

  outDiv.innerHTML = `
    <div class="item">Hari<span class="value">${d.toFixed(2)}</span></div>
    <div class="item">Minggu<span class="value">${w.toFixed(2)}</span></div>
    <div class="item">Bulan<span class="value">${m.toFixed(2)}</span></div>
    <div class="item">Tahun<span class="value">${y.toFixed(4)}</span></div>
  `
}

btn.onclick = convert

toggle.onchange = e => {
  document.body.classList.toggle("dark", e.target.checked)
}