

let phrases = ["WELCOME TO THE OFFICIAL WEBSITE OF IIC TMSL.", "THANKS FOR VISITING OUR WEBSITE"]
let typo = document.getElementsByClassName('typo')[0]

let currentPhrase = []
let i = 0
let j = 0
let isDeleting = false
let isEnd = false

function loop() {
  isEnd = false
  typo.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      typo.innerHTML = currentPhrase.join('')
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      typo.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }


  const time = isEnd ? 900 : isDeleting ? 30 : 100
  setTimeout(loop, time)
}

loop()


