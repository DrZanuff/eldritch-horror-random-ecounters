export function superEval() {
  let text = ''

  function shuffle(a) {
    for (let j, i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }

    return a[0]
  }

  function append(str) {
    text += /*html*/ `
    <p>
      ${str.trim()}
    <p>
    `
  }

  intro()

  function intro() {
    const person1 = shuffle([
      'um meliante',
      'um mendingo',
      'um catador de lixo',
    ])

    append(
      `Você está em uma rua escura, então vê ${person1} em canto escuro. <b>Teste inteligência</b>`
    )

    shuffle([outCome1, outCome2, outCome3])()
  }

  function outCome1() {
    append('Ele te oferece ajuda em troca de dinheiro.')
  }

  function outCome2() {
    append('Ele te oferece uma arma em troca de sanidade.')
  }

  function outCome3() {
    const weapon = shuffle(['adaga', 'espada', 'bomba'])
    append(`Ele te ataca com uma ${weapon}`)

    shuffle([fate1, fate2])()
  }

  function fate1() {
    append('Você defende e nada acontece')
  }

  function fate2() {
    append('Ele te fere. <b>Perca 1 de vida</b>')
  }

  return text
}

// export const data = JSON.stringify(superEval)
