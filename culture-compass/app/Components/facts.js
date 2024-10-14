const facts2 = [
    {
      "fact": "The Bloomsbury area near St. Pancras has ties to the West Indian Students’ Centre, a gathering place for Black students in London during the 1950s and 1960s.",
      "question": "What is a famous fact about this location?",
      "options": ["It was home to the West Indian Students' Centre", "It hosted a Black Lives Matter march", "It was a key location for civil rights protests"],
      "answer": "It was home to the West Indian Students' Centre",
      "picture": "doodle_placeholder",
      "lat": 51.5212,
      "lng": -0.1276
    },
    {
      "fact": "Pan African leader and activist Marcus Garvey spoke at various locations around King’s Cross to rally support for Black rights during his visits to London.",
      "question": "What is a famous fact about this location?",
      "options": ["Marcus Garvey gave speeches here", "Nelson Mandela stayed here", "It was the site of a Black Panther protest"],
      "answer": "Marcus Garvey gave speeches here",
      "picture": "doodle_placeholder",
      "lat": 51.5301,
      "lng": -0.1230
    },
    {
      "fact": "The area around Caledonian Road was once the site of protests for justice for the Windrush generation in the 2010s, calling for recognition of Black contributions to Britain.",
      "question": "What is a famous fact about this location?",
      "options": ["It was a protest site for the Windrush generation", "Olaudah Equiano lived here", "It was home to the first Black museum in London"],
      "answer": "It was a protest site for the Windrush generation",
      "picture": "doodle_placeholder",
      "lat": 51.5385,
      "lng": -0.1197
    },
    {
      "fact": "St. Pancras Station was a key transit point for Black soldiers arriving in Britain during both World Wars.",
      "question": "What is a famous fact about this location?",
      "options": ["It was a key transit point for Black soldiers", "It hosted a Black culture festival", "It was home to a famous Black boxer"],
      "answer": "It was a key transit point for Black soldiers",
      "picture": "doodle_placeholder",
      "lat": 51.5306,
      "lng": -0.1262
    },
    {
      "fact": "The British Museum houses several artefacts from Africa and the African diaspora, including items from the Benin Empire.",
      "question": "What is a famous fact about this location?",
      "options": ["It houses artefacts from the Benin Empire", "It holds Nelson Mandela's letters", "It was the location of a Black history protest"],
      "answer": "It houses artefacts from the Benin Empire",
      "picture": "doodle_placeholder",
      "lat": 51.5194,
      "lng": -0.1270
    },
    {
      "fact": "The George Padmore Institute in Finsbury Park archives the works of Black writers and activists, contributing to Black British culture.",
      "question": "What is a famous fact about this location?",
      "options": ["It archives works of Black writers and activists", "It is the birthplace of Mary Seacole", "It was a meeting point for the Black Panthers"],
      "answer": "It archives works of Black writers and activists",
      "picture": "doodle_placeholder",
      "lat": 51.5645,
      "lng": -0.1087
    },
    {
      "fact": "The Africa Centre in Covent Garden, founded in the 1960s, was a key institution for Black cultural exchange in the UK.",
      "question": "What is a famous fact about this location?",
      "options": ["It was the founding location of the Africa Centre", "It hosted Black Panther meetings", "It was a key site for Windrush gatherings"],
      "answer": "It was the founding location of the Africa Centre",
      "picture": "doodle_placeholder",
      "lat": 51.5128,
      "lng": -0.1216
    },
    {
      "fact": "The Institute of Commonwealth Studies near Russell Square offers important studies on Black history and colonialism.",
      "question": "What is a famous fact about this location?",
      "options": ["It focuses on studies of Black history", "It was home to Nelson Mandela", "It is where the Windrush generation first arrived"],
      "answer": "It focuses on studies of Black history",
      "picture": "doodle_placeholder",
      "lat": 51.5217,
      "lng": -0.1298
    },
    {
      "fact": "A large mural celebrating the diversity of Camden, featuring Black figures, was painted on a nearby street in 2017.",
      "question": "What is a famous fact about this location?",
      "options": ["A mural celebrating Black figures was painted here", "Nelson Mandela spoke here", "It was home to a famous Black author"],
      "answer": "A mural celebrating Black figures was painted here",
      "picture": "doodle_placeholder",
      "lat": 51.5406,
      "lng": -0.1426
    },
    {
      "fact": "The Notting Hill Carnival, a significant event in Black British culture, was inspired by Caribbean traditions and started nearby.",
      "question": "What is a famous fact about this location?",
      "options": ["Notting Hill Carnival started nearby", "It was home to a famous Black church", "It hosted early Black Panther meetings"],
      "answer": "Notting Hill Carnival started nearby",
      "picture": "doodle_placeholder",
      "lat": 51.5145,
      "lng": -0.2058
    },
    {
      "fact": "During the 19th century, Black abolitionist Frederick Douglass gave speeches across London, including in areas near St. Pancras.",
      "question": "What is a famous fact about this location?",
      "options": ["Frederick Douglass gave speeches here", "It was the birthplace of Mary Seacole", "It housed Black activists in the 20th century"],
      "answer": "Frederick Douglass gave speeches here",
      "picture": "doodle_placeholder",
      "lat": 51.5303,
      "lng": -0.1224
    },
    {
      "fact": "The nearby Camden Roundhouse has been used for various cultural performances, including events highlighting Black British music.",
      "question": "What is a famous fact about this location?",
      "options": ["Black British music events were held here", "It was a Black cultural center", "It hosted the first Windrush conference"],
      "answer": "Black British music events were held here",
      "picture": "doodle_placeholder",
      "lat": 51.5416,
      "lng": -0.1517
    },
    {
      "fact": "Woolf Hall near King's Cross hosted meetings of the League of Coloured Peoples, a pioneering civil rights organization in Britain.",
      "question": "What is a famous fact about this location?",
      "options": ["The League of Coloured Peoples met here", "It was home to Mary Seacole", "It hosted the first Notting Hill Carnival"],
      "answer": "The League of Coloured Peoples met here",
      "picture": "doodle_placeholder",
      "lat": 51.5311,
      "lng": -0.1246
    },
    {
      "fact": "The King's Place gallery near St. Pancras has hosted several exhibitions of African and Caribbean art, celebrating Black culture.",
      "question": "What is a famous fact about this location?",
      "options": ["It hosted African and Caribbean art exhibitions", "It was home to Black British soldiers", "It was a key site for Black activism"],
      "answer": "It hosted African and Caribbean art exhibitions",
      "picture": "doodle_placeholder",
      "lat": 51.5333,
      "lng": -0.1218
    },
    {
      "fact": "The London Transport Museum highlights the contributions of Caribbean immigrants who helped build the London transport network.",
      "question": "What is a famous fact about this location?",
      "options": ["It highlights contributions of Caribbean immigrants", "It housed a famous Black hospital", "It was home to the first Black business in London"],
      "answer": "It highlights contributions of Caribbean immigrants",
      "picture": "doodle_placeholder",
      "lat": 51.5110,
      "lng": -0.1196
    },
    {
      "fact": "The London School of Economics has held numerous events focused on African and Caribbean development, contributing to Black academic scholarship.",
      "question": "What is a famous fact about this location?",
      "options": ["It held events on African and Caribbean development", "It was home to Nelson Mandela", "It hosted the first Black Lives Matter march"],
      "answer": "It held events on African and Caribbean development",
      "picture": "doodle_placeholder",
      "lat": 51.5144,
      "lng": -0.1161
    },
    {
        "fact": "The British Library near St. Pancras houses archives related to Olaudah Equiano, a freed slave who became an influential abolitionist and writer.",
        "question": "What is a famous fact about this location?",
        "options": ["Olaudah Equiano's archives are here", "Nelson Mandela's statue is here", "A famous Black Panther meeting was held here"],
        "answer": "Olaudah Equiano's archives are here",
        "picture": "doodle_placeholder",
        "lat": 51.5297,
        "lng": -0.1272
      },
      {
        "fact": "The area around King's Cross was a historic site for protests against colonialism and for civil rights, especially linked to Black communities in the 20th century.",
        "question": "What is a famous fact about this location?",
        "options": ["A protest for Black civil rights took place here", "It was the site of a famous boxing match", "It was home to Mary Seacole"],
        "answer": "A protest for Black civil rights took place here",
        "picture": "doodle_placeholder",
        "lat": 51.5308,
        "lng": -0.1238
      },
      {
        "fact": "The Black Cultural Archives, founded by Black activists, is a key institution near the St. Pancras area, preserving important records of Black British history.",
        "question": "What is a famous fact about this location?",
        "options": ["It houses the Black Cultural Archives", "It was once a cattle market", "It was the site of the first Black British concert"],
        "answer": "It houses the Black Cultural Archives",
        "picture": "doodle_placeholder",
        "lat": 51.5321,
        "lng": -0.1232
      },
      {
        "fact": "The Mary Seacole statue is located nearby at St. Thomas’ Hospital. She was a pioneering nurse during the Crimean War and a key figure in Black British history.",
        "question": "What is a famous fact about this location?",
        "options": ["Mary Seacole's statue is here", "Olaudah Equiano was born here", "It was once the home of the Black Panthers"],
        "answer": "Mary Seacole's statue is here",
        "picture": "doodle_placeholder",
        "lat": 51.4985,
        "lng": -0.1187
      },
      {
        "fact": "Nelson Mandela’s bust can be found near the Royal Festival Hall. It was erected while he was still in prison, symbolizing hope for Black liberation.",
        "question": "What is a famous fact about this location?",
        "options": ["Nelson Mandela's bust is located here", "It's the birthplace of a Black musical legend", "A Black history library is located here"],
        "answer": "Nelson Mandela's bust is located here",
        "picture": "doodle_placeholder",
        "lat": 51.5055,
        "lng": -0.1162
      },
      {
        "fact": "Oliver Tambo, a leader of the African National Congress, lived in North London. His bust is placed near Alexandra Palace in recognition of his contribution to the anti-apartheid movement.",
        "question": "What is a famous fact about this location?",
        "options": ["Oliver Tambo lived here", "It was home to Marcus Garvey", "It's where the Black Power movement started in London"],
        "answer": "Oliver Tambo lived here",
        "picture": "doodle_placeholder",
        "lat": 51.5968,
        "lng": -0.1300
      },
      {
        "fact": "The Bronze Woman statue near Stockwell honors Black women and was the first statue of a Black woman erected in London.",
        "question": "What is a famous fact about this location?",
        "options": ["The first statue of a Black woman is here", "Nelson Mandela spoke here", "It was home to the Black Panthers"],
        "answer": "The first statue of a Black woman is here",
        "picture": "doodle_placeholder",
        "lat": 51.4703,
        "lng": -0.1223
      },
      {
        "fact": "All Saints Road in Notting Hill was once the headquarters of the west London Black Panthers and a hub for Black political activism.",
        "question": "What is a famous fact about this location?",
        "options": ["It was the headquarters of the Black Panthers", "A Black civil rights march started here", "Olaudah Equiano once lived here"],
        "answer": "It was the headquarters of the Black Panthers",
        "picture": "doodle_placeholder",
        "lat": 51.5167,
        "lng": -0.2001
      },
      {
        "fact": "The Mangrove restaurant in Notting Hill was a key meeting place for Black activists and hosted many civil rights leaders.",
        "question": "What is a famous fact about this location?",
        "options": ["The Mangrove was a hub for Black activism", "It was once a Black music hall", "Mary Seacole worked here"],
        "answer": "The Mangrove was a hub for Black activism",
        "picture": "doodle_placeholder",
        "lat": 51.5170,
        "lng": -0.2005
      },
      {
        "fact": "Frank Crichlow, owner of The Mangrove, provided legal help to Black men arrested unfairly. His activism was central to the local civil rights movement.",
        "question": "What is a famous fact about this location?",
        "options": ["Frank Crichlow supported civil rights activism", "It was home to Marcus Garvey", "It was the birthplace of the Black Panther Party"],
        "answer": "Frank Crichlow supported civil rights activism",
        "picture": "doodle_placeholder",
        "lat": 51.5169,
        "lng": -0.2006
      }
  ]

  export default facts2;
  