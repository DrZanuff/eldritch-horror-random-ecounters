export function superEval(lang = 'en-us', local = 'sanFran') {

  const languages = ['en-us', 'pt-br']

  if (!languages.includes(lang)) {
    lang = 'en-us'
  }

  function shuffle(a) {
    for (let j, i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }

    return a[0]
  }

  const place = shuffle([
    {
      'pt-br' : 'em um quarto escuro. Você lembra de ter tomado uma poção mágica que o curandeiro preparou. Após isso tudo é um borrão na sua memória.',
      'en-us' : 'at a dark room. You remember drinking a magic potion that the healer prepared for you. After that everything is a blur in your memory.'
    },
    {
      'pt-br' : 'em um leito hospitalar. Você se lembra de ter sido atacado por um criatura na noite anterior.',
      'en-us' : 'in a hospital bed. You remember being attacked by a creature the night before.'
    },
    {
      'pt-br' : 'em uma cela de cadeia. Na noite anterior o estranho policial te prendeu sem nenhum motivo. Você reparou na tatuagem estranha que ele tinha na mão.',
      'en-us' : 'in a jail cell. Last night the strange cop arrested you for no reason. You noticed the weird tattoo he had on his hand.'
    },
  ])

  const reward = shuffle([
    {
      'pt-br' : 'você reparou que alguém deixou um pergaminho de baixo de sua cama. Ao pronunciar as palavras rapidamente, as chamas se desfazem e você acorda do terrivel pesadelo.',
      'en-us' : 'you noticed someone left a scroll under your bed. When you pronounce the words quickly, the flames go out and you wake up from the terrible nightmare.'
    },
    {
      'pt-br' : 'você resolveu inspecionar as chamas. Ao tocar nas chamas, você percebe que elas são falsas. Você desperta do feitiço de ilusão que jogaram em você.',
      'en-us' : 'you decided to inspect the flames. Upon touching the flames, you realize that they are fake. You wake up from the illusion spell cast upon you.'
    }
  ])

  const fail = shuffle([
    {
      'pt-br' : 'as chamas te consome e você grita de horror despertando do pesadelo. Você entende que o sonho significa que o fim está próximo. Perca 1 de sanidade para cada portal verde aberto.',
      'en-us' : 'the flames consume you and you scream in horror awakening from the nightmare. You understand that the dream means that the end is near. Lose 1 sanity for each open green portal.'
    },
    {
      'pt-br' : 'ao tocar nas chamas, você ouve um risada de gelar a alma. O fogo começa a tomar forma e uma criatura surge através das labaredas esverdeadas, avançando na sua direção. Um monstro de arma uma emboscada.',
      'en-us' : 'touching the flames, you hear a soul-freezing laugh. The fire begins to take shape and a creature appears through the green flames, advancing towards you. A monster ambushes you.'
    }
  ])

  

  const options = {
    'pt-br' : /*html*/`
      <p>
        Você acorda ${place[lang]}. De repente a cela que você se encontra começa a pegar fogo, porém o fogo é de uma cor esverdeada. VocÊ precisar achar uma saida o mais rápido possivel.
        <span class="icon observation" /> <br/>
      </p>
      <p>
        Se passar, ${reward[lang]} <br/>
      </p>
      <p>
        Se falhar ${fail[lang]}
      </p>
    `,

  }

  return options[lang]
}

// export const data = JSON.stringify(superEval)
