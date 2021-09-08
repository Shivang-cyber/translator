var b = document.getElementById('OUT')


async function tra() {
 var a = document.getElementById('IN').value

 var aFR = document.getElementById('F-s').value
 var bTO = document.getElementById('T-s').value

 console.log(a,aFR,bTO);

var res = await fetch('https://libretranslate.de/translate', {
  method: 'POST',
  body: JSON.stringify({
    q: a,
    source: aFR,
    target: bTO,
  }),
  headers: { 'Content-Type': 'application/json' },
})

var data = await res.json()

b.innerHTML = data.translatedText
}