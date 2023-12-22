let currentScene = 0;

const scenes = {
  0: {
    text: '"Путь магических загадок" — захватывающее путешествие по Академии Магии, где игроки встречают таинственные вызовы и загадки, открывая древние секреты и мощь магии. Используя свои знания и интуицию, они исследуют учебные помещения, находят ключи к замысловатым задачам и принимают решения, влияющие на развитие исследования. Открытие каждой загадки расшифровывает новые уровни, где игроки сталкиваются с увлекательными вызовами, раскрывая тайны древних артефактов и магических сил.',
    image: "/images/8.png",
    choices: [{ text: "Начать игру", nextScene: 1 }],
  },
  1: {
    text: "Вы просыпаетесь в своей скромной комнате в Академии Магии. Что вы сделаете?",
    image: "/images/1.jpg",
    choices: [
      { text: "Изучить свитки", nextScene: 2 },
      { text: "Осмотреться в комнате", nextScene: 1_1 },
    ],
  },
  1_1: {
    text: "Вы забыли про свитки и решили покушать. Игра окончена!",
    image: "/images/1.jpg",
    choices: [{ text: "Начать игру заново", nextScene: 1 }],
  },
  2: {
    text: "Изучив свитки, вы обнаруживаете следующую загадку: 'Чтобы продвинуться вперед, найди ключ в библиотеке забытых томов'. Как вы поступите?",
    image: "/images/2.jpg",
    choices: [
      { text: "Направиться в библиотеку", nextScene: 3 },
      { text: "Спросить у старших студентов совета", nextScene: 2_1 },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  2_1: {
    text: "Старшие студенты посоветовали вам обратится к книгам!",
    image: "/images/2_1.jpg",
    choices: [
      { text: "Пойти в библиотеку", nextScene: 4 },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  3: {
    text: "В библиотеке перед вами множество книг и переплетенных свитков. Где начать поиск ключа?",
    image: "/images/3.png",
    choices: [
      { text: "Просмотреть старые тома в отдаленном углу", nextScene: 3_1 },
      {
        text: "Поискать подсказки на полках с магическими артефактами",
        nextScene: 4,
      },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  3_1: {
    text: "Фуф, прошло уже много времени за изучением книг, что не дало результата",
    image: "/images/3_1.png",
    choices: [
      {
        text: "Поискать подсказки на полках с магическими артефактами",
        nextScene: 4,
      },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },

  4: {
    text: "В процессе поиска вы обнаруживаете старинный ключ, украшенный символами древних магов. Что вы сделаете?",
    image: "/images/4.png",
    choices: [
      { text: "Взять ключ", nextScene: 5 },
      {
        text: "Изучить ключ подробнее",
        nextScene: 4_1,
      },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  4_1: {
    text: "Очень красивый предмет",
    image: "/images/4_1.png",
    choices: [
      { text: "Взять ключ", nextScene: 5 },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  5: {
    text: 'Вы взяли ключ, и вас осенило: "Этот ключ открывает дверь в забытую комнату древних магических артефактов". Как вы действуете?',
    image: "/images/5.png",
    choices: [
      { text: "Отправиться к двери", nextScene: 6 },
      { text: "Попытаться найти дополнительные подсказки", nextScene: 5_1 },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  5_1: {
    text: "Вас нашел преподаватель и не дал дальше разгадывать загадки. Игра закончена!",
    image: "/images/4.png",
    choices: [{ text: "Начать игру заново", nextScene: 1 }],
  },
  6: {
    text: "Подойдя к двери, вы видите древний артефакт внутри комнаты, излучающий мощную магию. Каков ваш следующий шаг?",
    image: "/images/6.png",
    choices: [
      { text: "Подойти ближе", nextScene: 7 },
      { text: "Уйти обратно в комнату", nextScene: 6_1 },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  6_1: {
    text: "Ощущение мощной магии наполняет вас неуверенностью. Вы решаете вернуться в свою комнату, оставив древний артефакт позади. Ваше путешествие закончено, но вы чувствуете, что упустили что-то важное. Это решение оставляет вас смутно подумывать о том, что могло бы произойти, если бы вы приняли смелость и подошли ближе к артефакту. Игра окончена!",
    image: "/images/6.png",
    choices: [{ text: "Начать игру заново", nextScene: 1 }],
  },
  7: {
    text: 'Приблизившись, вы видите надпись: "Разгадай загадку для доступа к следующему уровню". Как вы решите загадку?',
    image: "/images/6.png",
    choices: [
      { text: "Использовать знания магии для разгадки", nextScene: 8 },
      { text: "Искать подсказки в окружающих предметах", nextScene: 7_1 },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  7_1: {
    text: "Спустя много времени подсказки вы не нашли. Что делать дальше?",
    image: "/images/4.png",
    choices: [
      { text: "Использовать знания магии для разгадки", nextScene: 8 },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  8: {
    text: "С умением применить свои знания, вы разгадываете загадку, активируя артефакт. Что дальше?",
    image: "/images/7.png",
    choices: [
      { text: "Пройти через открывшуюся дверь", nextScene: 9 },
      { text: "Попробовать изучить артефакт поближе", nextScene: 8_1 },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  8_1: {
    text: "Изучение артефакта ничем не помогло, что делать дальше?",
    image: "/images/6.png",
    choices: [
      { text: "Пройти через открывшуюся дверь", nextScene: 8 },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  9: {
    text: "Проходя через дверь, вы обнаруживаете новую комнату с другой загадкой. Что будете делать?",
    image: "/images/8.png",
    choices: [
      { text: "Продолжить разгадывать загадки", nextScene: 10 },
      { text: "Попытаться вернуться обратно", nextScene: 9_1 },
    ],
  },
  9_1: {
    text: "Вы вернулись и встретили огромного паука! Вас съели! Игра закончена!",
    image: "/images/8_1.png",
    choices: [{ text: "Начать игру заново", nextScene: 1 }],
  },
  10: {
    text: "Скоро вы сталкиваетесь с последней загадкой, препятствующей пути к цели. Как вы попытаетесь ее решить?",
    image: "/images/9.png",
    choices: [
      { text: "Использовать все свои знания и интуицию", nextScene: 10_1 },
      { text: "Попросить помощи у друга", nextScene: 10_2 },
      { text: "Начать игру заново", nextScene: 1 },
    ],
  },
  10_1: {
    text: "Вы стали героем магического мира!",
    image: "/images/10.png",
    choices: [{ text: "Начать игру заново", nextScene: 1 }],
  },
  10_2: {
    text: "Ваш друг стал героем магического мира!",
    image: "/images/10.png",
    choices: [{ text: "Начать игру заново", nextScene: 1 }],
  },
};

function showScene() {
  const scene = scenes[currentScene];
  const sceneText = document.getElementById("scene-text");
  sceneText.textContent = scene.text;

  const body = document.querySelector("body");
  body.style.backgroundImage = `url(${scene.image})`;

  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "center";
  body.style.backgroundColor = "black";
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.alignItems = "center";
  body.style.justifyContent = "center";

  const choicesDiv = document.querySelector(".choices");
  choicesDiv.innerHTML = "";
  choicesDiv.style.display = "flex";
  choicesDiv.style.flexDirection = "column";
  choicesDiv.style.alignItems = "center";

  scene.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = `${choice.text}`;
    button.onclick = () => makeChoice(index + 1);
    choicesDiv.appendChild(button);
  });
}

function makeChoice(choice) {
  const scene = scenes[currentScene];
  const selectedChoice = scene.choices[choice - 1];

  if (selectedChoice.nextScene) {
    currentScene = selectedChoice.nextScene.toString();
    showScene();
  } else if (selectedChoice.ending) {
    alert(selectedChoice.ending);
  }
}

showScene();
