export function superEval(lang = 'en-us', local = 'sanFran') {
  let text = ''

  const languages = ['en-us', 'pt-br']

  const globals = {
    place: {
      sanFran: {
        'pt-br': ['da Praia Baker'],
        'en-us': ['to Baker Beach'],
      },
      london: {
        'pt-br': shuffle(['de Bibury', 'de Wiltshire']),
        'en-us': shuffle(['to Bibury', 'to Wiltshire']),
      },
      rome: {
        'pt-br': shuffle(['de Veneza', 'do Vaticano']),
        'en-us': shuffle(['to Venice', 'to Vatican']),
      },
    },
  }

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

  function append(str) {
    console.log('STR', str)
    text += /*html*/ `
    <p>
      ${str.trim()}
    <p>
    `
  }

  intro()

  function intro() {
    const message = shuffle([
      {
        'pt-br': 'Um telegrama',
        'en-us': 'A telegram',
      },
      {
        'pt-br': 'Um bilhete com letras estranhas',
        'en-us': 'A note with strange letters',
      },
      {
        'pt-br': 'Uma carta com letras de sangue',
        'en-us': 'A letter with blood letters',
      },
    ])

    const options = {
      'pt-br': `Você está a caminho ${globals.place[local][lang]}. ${message[lang]} que você recebeu sem remetente lhe informou para se encontrar neste local. Na mensagem há um símbolo estranho desenhado na parte de trás.`,
      'en-us': `You are on your way ${globals.place[local][lang]}. ${message[lang]} that you received without a sender informed you to meet at this location. In the message there is a strange strange symbol on the back.`,
    }

    append(options[lang])

    nextLocal()
  }

  function nextLocal() {
    const locals = {
      sanFran: {
        'pt-br':
          'Antes de ir o seu contato na cidade disse para tomar cuidado, pois o local em questão é um lugar perigoso. Ele lhe deu algumas dicas dos arredores e para prestar atenção em alguns sinais que podem indicar perigo. Aprimore <span class="icon observation" />',
        'en-us':
          'Before going, your contact in town told you to be careful, as the place in question is a dangerous place. He gave you some hints of the surroundings and to watch out for some signs that might indicate danger. Improve <span class="icon observation" />',
      },

      arkham: {
        'pt-br':
          'No trem, estudando a mensagem você percebeu que uma mensagem criptografada <span class="icon observation" />. Se passar você descobre um cântico de uma antiga tribo que invoca uma magia perdida. Receba uma magia.',
        'en-us':
          'On the train, studying the message you noticed an encrypted message <span class="icon observation" />. If you pass, you discover a chant from an ancient tribe that summons a lost magic. Gain a spell.',
      },

      buenosAires: {
        'pt-br':
          'No trem, estudando a mensagem você percebeu que uma mensagem criptografada <span class="icon observation" />. Se passar você descobre um cântico de uma antiga tribo que invoca uma magia perdida. Receba uma magia.',
        'en-us':
          'On the train, studying the message you noticed an encrypted message <span class="icon observation" />. If you pass, you discover a chant from an ancient tribe that summons a lost magic. Gain a spell.',
      },

      london: {
        'pt-br':
          'O símbolo pertence a uma ordem arcana extinta. Isso gerou algumas especulações sobre a origem da mensagem. Faça aparecer uma pista.',
        'en-us':
          'The symbol belongs to an extinct arcane order. This has generated some speculation about the origin of the message. Make appear a clue.',
      },

      rome: shuffle([
        {
          'pt-br':
            'O padre falou que o lugar que você está se dirigindo é amaldiçoado pela igreja. Preocupado com sua segurança e a da importância da sua missão, ele abençoa sua jornada. Receba uma condição de abençoado.',
          'en-us':
            "The priest said the place you're heading to is cursed by the church. Concerned about your safety and the importance of your mission, he blesses your journey. Receive a blessed condition.",
        },
        {
          'pt-br':
            'O escriba da igreja reconheceu o símbolo sendo um brasão de uma família fundadora da cidade. Ele lhe conta a história da família que lutou contra um antigo mal parecido com o que você está enfrentando agora. Aprimore <span class="icon will" />',
          'en-us':
            'The church scribe recognized the symbol as a coat of arms of a founding family of the city. He tells you the story of the family who struggled with an ancient evil similar to the one you are now facing. Improve <span class="icon will" />',
        },
      ]),

      istambul: {
        'pt-br':
          'Ao mostrar isso para o seu contato, ele reconhece o símbolo de uma ordem secreta que fundou a cidade. Ele lhe apresentou alguns membros da ordem, figuras importantes na cidade. Aprimore <span class="icon influence" />',
        'en-us':
          'Your contact recognized the symbol of a secret order that founded the city. He introduced you to some members of the order, important figures in the city. Improve <span class="icon influence" />',
      },

      shanghai: {
        'pt-br':
          'O monge que lhe entregou a mensagem lhe disse para ir com cautela, pois há um grande mal à espreita. Ele lhe ensina um ritual para espantar o mal. As palavras do ritual tem um significado mais profundo. Aprimore <span class="icon lore" />',
        'en-us':
          'The monk who delivered the message told you to go with caution as there is great evil lurking. He teaches you a ritual to ward off evil. The words of the ritual have a deeper meaning. Improve <span class="icon lore" />',
      },

      tokyo: {
        'pt-br':
          'Você se recorda de ver o mesmo símbolo em um emblema no elmo samurai de um museu. Você mostrou a mensagem para o diretor do museu. Ele então lhe contou de uma lenda de um espírito vingador que protegeu a humanidade. Descarte um monstro não épico da sua escolha em espaço com um Portal azul.',
        'en-us':
          "You recall seeing the same symbol on an emblem on a museum's samurai helmet. You showed the message to the museum director. He then told you of a legend of an avenging spirit that protected mankind. Discard a non-epic monster of your choice into space with a blue Portal.",
      },

      sidney: {
        'pt-br':
          '<i>"Lugar perigoso, melhor levar munição extra colega…"</i>, seu contato lhe advertiu antes de ir. Aprimore <span class="icon strength" />',
        'en-us':
          '<i>"Dangerous place, better take extra ammo, mate…"</i>, your contact warned you before you go. Improve <span class="icon strength" />',
      },
    }

    append(locals[local][lang])

    arrival()
  }

  function arrival() {
    const options = {
      'pt-br':
        'Quando você chegou no local marcado, você sentiu uma certa apreensão e começou a prestar atenção nos arredores.',
      'en-us':
        'When you arrived at the appointed place, you felt a certain apprehension and began to pay attention to your surroundings.',
    }

    append(options[lang])

    shuffle([fate1, fate2, fate3])()
  }

  function fate1() {}

  function fate2() {}

  function fate3() {}

  return text
}

// export const data = JSON.stringify(superEval)
