// Калькуляторы фигур

// №1
// let p1 = document.querySelector('#p1')
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let but1 = document.querySelector('#but1')
// let but2 = document.querySelector('#but2')
// let p2 = document.querySelector('#p2')
// let p3 = document.querySelector('#p3')

// but1.addEventListener("click", function () {
//     p2.textContent = input1.value * input1.value  
// })

// but2.addEventListener("click", function () {
//     p3.textContent = input2.value * 4  
// })
// №2
// let p1 = document.querySelector('#p1')
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let but1 = document.querySelector('#but1')
// let but2 = document.querySelector('#but2')
// let p2 = document.querySelector('#p2')
// let p3 = document.querySelector('#p3')

//  but1.addEventListener("click", function () {
//         p2.textContent = input1.value * input2.value
//      })
//      but2.addEventListener("click", function () {
//         p3.textContent = (Number(input1.value ) + Number(input2.value)) *2
//      })    

// №3
// let p1 = document.querySelector('#p1')
// let input1 = document.querySelector('#input1')
// let but1 = document.querySelector('#but1')
// let but2 = document.querySelector('#but2')
// let p2 = document.querySelector('#p2')
// let p3 = document.querySelector('#p3')

// let p = 3.14;

// but1.addEventListener("click", function () {
//             p2.textContent = (input1.value * input1.value) * p
//           })

// but2.addEventListener("click", function () {
//             p3.textContent = (input1.value * p) * 2
//           })  

  
//   // №4
// (function () {
//   function squareTriangle(num, num2, num3) {
//     let p = (num + num2 + num3) / 2;
//     return Math.sqrt(p * (p - num) * (p - num2) * (p - num3));
//   }

//   function equation(num, num2, num3) {
//     let discreminant = num2 ** 2 - 4 * num * num3;
//     if (discreminant > 0) {
//       let x1 = (-num2 + Math.sqrt(discreminant)) / (2 * num);
//       let x2 = (-num2 - Math.sqrt(discreminant)) / (2 * num);
//       return "Первый корень: " + x1 + " второй корень: " + x2;
//     }
//   }

//   function pithagTriples(num, num2, num3) {
//     if (num ** 2 + num2 ** 2 == num3 ** 2) {
//       return (
//         "Числа: " +
//         num +
//         ", " +
//         num2 +
//         ", " +
//         num3 +
//         ", являются Пифагорами тройками"
//       );
//     } else {
//       return (
//         "Числа: " +
//         num +
//         ", " +
//         num2 +
//         ", " +
//         num3 +
//         ", не являются Пифагорами тройками"
//       );
//     }
//   }
//   window.module = {
//     squareTriangle,
//     equation,
//     pithagTriples,
//   };
// })();

//   let inp6 = document.querySelector("#inp6");
//   let inp7 = document.querySelector("#inp7");
//   let inp8 = document.querySelector("#inp8");
//   let p7 = document.querySelector("#p7");
//   let button4 = document.querySelector("#button4");
  
//   button4.addEventListener("click", function func() {
//     p7.textContent += module.squareTriangle(
//       +inp6.value,
//       +inp7.value,
//       +inp8.value
//     );
//     button4.removeEventListener("click", func);
//   });
  
//   // Математические калькуляторы
//   // №1
//   let inp9 = document.querySelector("#inp9");
//   let inp10 = document.querySelector("#inp10");
//   let inp11 = document.querySelector("#inp11");
//   let p8 = document.querySelector("#p8");
//   let button5 = document.querySelector("#button5");
//   button5.addEventListener("click", function func() {
//     p8.textContent += module.equation(+inp9.value, +inp10.value, +inp11.value);
//     button5.removeEventListener("click", func);
//   });
  
//   // №2
//   let inp12 = document.querySelector("#inp12");
//   let inp13 = document.querySelector("#inp13");
//   let inp14 = document.querySelector("#inp14");
//   let p9 = document.querySelector("#p9");
//   let button6 = document.querySelector("#button6");
//   button6.addEventListener("click", function func() {
//     p9.textContent += module.pithagTriples(
//       +inp12.value,
//       +inp13.value,
//       +inp14.value
//     );
//     button6.removeEventListener("click", func);
//   });
  
//   // №3
//   let inp15 = document.querySelector("#inp15");
//   let button7 = document.querySelector("#button7");
  
//   button7.addEventListener("click", function func() {
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     for (let i = 0; i <= inp15.value; i++) {
//       if (inp15.value % i == 0) {
//         let span = document.createElement("span");
//         span.append(i + ",");
//         li.appendChild(span);
//       }
//     }
//     ul.appendChild(li);
//     button7.insertAdjacentElement("afterend", ul);
//   });
  
//   // №4
//   let inp16 = document.querySelector("#inp16");
//   let inp17 = document.querySelector("#inp17");
//   let button8 = document.querySelector("#button8");
  
//   button8.addEventListener("click", function func() {
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     for (let i = 0; i < inp16.value || i < inp17.value; i++) {
//       if (inp16.value % i == 0 && inp17.value % i == 0) {
//         let span = document.createElement("span");
//         span.append(i + ",");
//         li.appendChild(span);
//       }
//     }
//     ul.appendChild(li);
//     inp17.insertAdjacentElement("afterend", ul);
//   });
  
//   // №5
//   let inp18 = document.querySelector("#inp18");
//   let inp19 = document.querySelector("#inp19");
//   let button9 = document.querySelector("#button9");
  
//   button9.addEventListener("click", function func() {
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     let arr = [];
//     for (let i = 0; i < inp18.value || i < inp19.value; i++) {
//       if (inp18.value % i == 0 && inp19.value % i == 0) {
//         arr.push(i);
//       }
//     }
//     let arr_max = Math.max.apply(null, arr);
//     li.textContent = arr_max;
//     ul.appendChild(li);
//     inp19.insertAdjacentElement("afterend", ul);
//   });
  
//   // №6
//   let inp20 = document.querySelector("#inp20");
//   let inp21 = document.querySelector("#inp21");
//   let button10 = document.querySelector("#button10");
  
//   button10.addEventListener("click", function func() {
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     let arr = [];
//     for (let i = 0; i < inp20.value || i < inp21.value; i++) {
//       if (inp20.value % i == 0 && inp21.value % i == 0) {
//         arr.push(i);
//       }
//     }
//     // console.log(arr)
//     let arr_max = Math.min.apply(null, arr);
//     li.textContent = arr_max;
//     ul.appendChild(li);
//     inp21.insertAdjacentElement("afterend", ul);
//   });
  
//   // Анализатор текста
//   let textarea = document.querySelector("#textarea");
//   let p10 = document.querySelector("#p10");
  
//   let checkbox = document.querySelector("#checkbox");
//   let checkbox2 = document.querySelector("#checkbox2");
//   let checkbox3 = document.querySelector("#checkbox3");
//   let checkbox4 = document.querySelector("#checkbox4");
  
//   textarea.addEventListener("blur", function () {
//     let arr = textarea.value.split(" ");
//     let arr2 = arr.join("");
//     arr2 = arr2.split("");
//     let arr3 = textarea.value.split("");
//     p10.textContent =
//       "В этом тексте столько слов: " +
//       arr.length +
//       " и столько символов: " +
//       arr3.length +
//       " и столько символов без пробела: " +
//       arr2.length;
  
//     let count = {};
//     for (let elem of arr2) {
//       if (count[elem] === undefined) {
//         count[elem] = 1;
//       } else {
//         count[elem]++;
//       }
//     }
//     // №5
//     let keys = Object.keys(count);
//     if ((checkbox.dataset.elem = keys.includes("a"))) {
//       checkbox.checked = true;
//     }
//     if ((checkbox2.dataset.elem = keys.includes("b"))) {
//       checkbox2.checked = true;
//     }
//     if ((checkbox3.dataset.elem = keys.includes("c"))) {
//       checkbox3.checked = true;
//     }
//     if ((checkbox4.dataset.elem = keys.includes("d"))) {
//       checkbox4.checked = true;
//     }
//   });
  
//   // Игра угадай число
//   function getRandomInt(min1, max1) {
//     return Math.floor(Math.random() * (max1 - min1) + min1);
//   }
//   let random = getRandomInt(1, 100);
//   console.log(random);
  
//   let inp22 = document.querySelector("#inp22");
//   inp22.addEventListener("focus", function () {
//     inp22.value = "";
//   });
//   inp22.addEventListener("blur", function () {
//     if (+inp22.value == random) {
//       inp22.value = "Вы угадали";
//     } else if (+inp22.value > random) {
//       inp22.value = "Введите число поменьше";
//     } else {
//       inp22.value = "Введите число побольше";
//     }
//   });
  
//   // Игра угадай ячейку
//   let table = document.querySelector("#table");
//   let td;
//   let k = 0;
//   let random2 = [];
//   let j = 0;
//   for (let i = 1; i <= 10; i++) {
//     let tr = document.createElement("tr");
//     for (let i = 1; i <= 10; i++) {
//       td = document.createElement("td");
//       td.innerHTML = k;
//       tr.append(td);
//       k++;
//       // console.log(k);
//     }
//     random2.push(getRandomInt(j, k));
//     j += 10;
//     table.append(tr);
//   }
//   console.log(random2);
//   let k2 = 0;
//   let tds = document.querySelectorAll("#table td");
//   for (let i of tds) {
//     i.addEventListener("click", function func(event) {
//       console.log(event.target.innerHTML);
//       if (random2.includes(+event.target.innerHTML) == true) {
//         k2++;
//         console.log(k2);
//         if (k2 == 10) {
//           table.textContent = "Вы победили";
//         }
//         i.setAttribute("class", "tbbgrdgreen");
//         i.removeEventListener("click", func);
//       }
//     });
//   }
  
//   // №2
//   let span = document.querySelector("#span");
//   let timerId = setInterval(function () {
//     span.textContent--;
//     if (+span.textContent <= 0) {
//       clearInterval(timerId);
//       table.textContent = "Вы проиграли!";
//     }
//   }, 1000);
  
//   // Экранная клавиатура
//   let but = document.querySelectorAll(".but");
//   let display = document.querySelector(".display");
//   let backspace = document.querySelector(".backspace");
//   let capslock = document.querySelector(".caps_lock");
//   let space = document.querySelector(".space");
  
//   for (let k of but) {
//     k.addEventListener("click", function () {
//       display.textContent += k.value;
//     });
//   }
  
//   let k3 = 1;
//   capslock.addEventListener("click", function () {
//     if (k3 == 1) {
//       for (let k of but) {
//         k.value = k.value.toUpperCase();
//       }
//       k3 += 1;
//     } else {
//       for (let k of but) {
//         k.value = k.value.toLowerCase();
//       }
//       k3 -= 1;
//     }
//   });
  
//   backspace.addEventListener("click", function () {
//     display.textContent = "";
//   });
  
//   space.addEventListener("click", function () {
//     display.textContent += " ";
//   });
  
//   // Линейный календарь
//   let previousMonth = document.querySelector(".previousMonth");
//   let monthText = document.querySelector(".monthText");
//   let yearText = document.querySelector(".yearText");
//   let nextMonth = document.querySelector(".nextMonth");
//   let days = document.querySelector("#days");
  
//   let nowDate = new Date();
//   let nowDay = nowDate.getDate();
//   let nowMonth = nowDate.getMonth();
//   let nowYear = nowDate.getFullYear();
//   let monthName = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь",
//   ];
  
//   let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
//   console.log(nowDate.getFullYear());
  
//   function setMonthCalendar(year, month) {
//     let lastDayMonth = new Date(year, month + 1, 0).getDate();
//     let lastDayPreviousMonth = new Date(year, month, 0).getDay();
//     let monthDaysText = "";
  
//     monthText.textContent = monthName[month];
//     yearText.textContent = year;
//     days.innerHTML = "";
  
//     if (lastDayPreviousMonth > 0) {
//       for (let i = 1; i <= lastDayPreviousMonth; i++) {
//         monthDaysText += "<li></li>";
//       }
//     }
//     for (let i = 1; i <= lastDayMonth; i++) {
//       monthDaysText += "<li>" + i + "</li>";
//     }
  
//     days.innerHTML = monthDaysText;
  
//     if (month == nowMonth && year == nowYear) {
//       let li = days.getElementsByTagName("li");
//       li[lastDayPreviousMonth + nowDay - 1].classList.add("date-now");
//     }
//   }
  
//   setMonthCalendar(nowYear, nowMonth);
  
//   previousMonth.onclick = function () {
//     let curDate = new Date(
//       yearText.textContent,
//       monthName.indexOf(monthText.textContent)
//     );
  
//     curDate.setMonth(curDate.getMonth() - 1);
  
//     let curYear = curDate.getFullYear(),
//       curMonth = curDate.getMonth();
  
//     setMonthCalendar(curYear, curMonth);
//   };
  
//   nextMonth.onclick = function () {
//     let curDate = new Date(
//       yearText.textContent,
//       monthName.indexOf(monthText.textContent)
//     );
  
//     curDate.setMonth(curDate.getMonth() + 1);
  
//     let curYear = curDate.getFullYear(),
//       curMonth = curDate.getMonth();
  
//     setMonthCalendar(curYear, curMonth);
//   };
  
//   // Поиск тегов
//   let inp23 = document.querySelector("#inp23");
//   let error = document.querySelector("#error");
//   let search_tag = document.querySelector(".search_tag");
  
//   function init() {
//     let block_textTag = document.querySelectorAll(".block_textTag");
//     for (let i = 0; i < block_textTag.length; i++) {
//       block_textTag[i].style.display = "none";
//     }
//   }
//   init();
  
//   inp23.addEventListener("keypress", function (event) {
//     let data = inp23.value;
//     if (event.key == "Enter") {
//       let block_textTag = document.querySelectorAll(".block_textTag");
//       for (let i = 0; i < block_textTag.length; i++) {
//         block_textTag[i].style.display = "none";
//       }
//       let block = document.querySelector('.block_textTag[data="' + data + '"]');
//       block.style.display = "block";
//       console.log(block);
//     }
//   });
  
//   // Поиск исторических события
//   let inp24 = document.querySelector("#inp24");
//   let table2 = document.querySelector("#table2");
  
//   let events = {
//     2023: [
//       {
//         date: "01.01.2023",
//         name: "событие 1",
//         text: "Вступление Хорватии в Шенгенскую зону, переход Хорватии на евро.",
//       },
//       {
//         date: "01.01.2023",
//         name: "событие 2",
//         text: "Вступление Луиса Инасиу Лулы да Силвы в должность президента Бразилии.",
//       },
//       {
//         date: "01.01.2023",
//         name: "событие 3",
//         text: "В Казахстане вместо Конституционного совета был восстановлен Конституционный суд, упразднённый в 1995 году.",
//       },
//       {
//         date: "06.01.2023",
//         name: "событие 4",
//         text: "Кевин Маккарти избран спикером Палаты представителей США.",
//       },
//     ],
//     2022: [
//       {
//         date: "01.01.2022",
//         name: "событие 1",
//         text: "Вступление в России в силу федерального закона о приземлении иностранных IT-компаний.",
//       },
//       {
//         date: "01.01.2022",
//         name: "событие 2",
//         text: "Вступление в силу 11 версии Международной классификации болезней (МКБ-11).",
//       },
//       {
//         date: "01.01.2022",
//         name: "событие 3",
//         text: "Вступление в РФ в силу запрета на экспорт необработанного круглого леса и запущена цифровая информационная система отслеживания оборота сырья.",
//       },
//       {
//         date: "01.01.2022",
//         name: "событие 4",
//         text: "Полное снятие в КНР ограничений на инвестиции иностранного капитала в местный автопром.",
//       },
//     ],
//     2021: [
//       {
//         date: "01.01.2021",
//         name: "событие 1",
//         text: "Запрет использования пластиковых пакетов в магазинах в крупных городах КНР.",
//       },
//       {
//         date: "01.01.2021",
//         name: "событие 2",
//         text: "Остановка поддержки и обновления «Flash Player» компанией «Adobe».",
//       },
//       {
//         date: "01.01.2021",
//         name: "событие 3",
//         text: "Прекращение выдачи бумажных трудовых книжек в Российской Федерации.",
//       },
//       {
//         date: "01.01.2021",
//         name: "событие 4",
//         text: "Начало поставки компанией «Газпром» природного газа в Сербию и Боснию и Герцеговину по новому маршруту.",
//       },
//     ],
//   };
  
//   inp24.addEventListener("keydown", function (event) {
//     if (event.key == "Enter") {
//       let year = inp24.value;
  
//       if (events[year]) {
//         table2.textContent = "";
  
//         for (let event of events[year]) {
//           let tr = document.createElement("tr");
  
//           let td;
  
//           td = document.createElement("td");
//           td.textContent = event.date;
//           tr.appendChild(td);
  
//           td = document.createElement("td");
//           td.textContent = event.name;
//           tr.appendChild(td);
  
//           td = document.createElement("td");
//           td.textContent = event.text;
//           tr.appendChild(td);
  
//           table2.appendChild(tr);
//         }
//       }
//     }
//   });
  
//   // Гороскоп
//   let inp25 = document.querySelector("#inp25");
//   let goroskop = document.querySelector(".goroskop");
  
//   let date = {
//     "03.01.2005": [
//       {
//         textToday:
//           "У Козерогов могут возникнуть проблемы с имуществом. Вероятны поломки ценных вещей, сложной техники, транспортных средств. Наиболее серьезные трудности возникнут у тех, кто находится в далеких поездках. Финансовая картина благоприятна, умение здраво оценивать свои возможности убережет вас от напрасных трат. Возможно получение приятных подарков от членов семьи и друзей. Этот день стоит посвятить общению с близкими людьми; погоня за новыми знакомствами не приведет ни к чему хорошему, а попытки наладить отношения с теми, кто может быть полезен, едва ли увенчаются успехом. Влюбленных ожидают приятные события, которые положат начало новому этапу их отношений.",
//         textTomorrow:
//           "Козероги преуспеют в делах, если не будут отказываться от проектов, не сулящих немедленного получения дохода. Усилия, приложенные сегодня, не будут напрасными, однако награды за труды придется немного подождать. Способность к разумному планированию и умение оценить последствия каждого совершенного шага сослужит вам прекрасную службу и позволит укрепить свой авторитет в профессиональных кругах. Однако наиболее удачливым представителям знака следует быть готовыми к проявлению зависти со стороны менее успешных коллег. Эмоциональный фон нестабилен, порой вы подвержены разрушительным настроениям. Пострадает от этого, в первую очередь, любимый человек. Наиболее сложной будет ситуация в парах, отношения которых основаны на психологической или материальной зависимости.",
//           textForAweek:
//           "Весьма серьезные проблемы возникнут в деловых отношениях.",
//       },
//     ],
//     "15.04.2005": [
//       {
//         textToday: "Финансовая ситуация очень непроста, Овнам предстоит расстаться с весьма значительными суммами, и не всегда по своей воле. ",
//         textTomorrow: "Овны не слишком внимательно относятся к исполнению своих обычных обязанностей, однако сегодня это наверняка сойдет им с рук.",
//         textForAweek:
//           "Эта неделя – благоприятное время для реализации планов, укрепления деловых и дружеских отношений, а также новых знакомств.",
//       },
//     ],
//   };
  
//   inp25.addEventListener("keydown", function (event) {
//     if (event.key == "Enter") {
//       let data = inp25.value;
//       goroskop.textContent = "";

  
//       if (date[data]) {
//         for (let elem of date[data]) {
//           let div = document.createElement("div");
//           div.className = "inpradio";
  
//           let input1 = document.createElement("input");
//           let input2 = document.createElement("input");
//           let input3 = document.createElement("input");
//           input1.type = "radio";
//           input1.checked = "checked";
//           input2.type = "radio";
//           input3.type = "radio";
//           input1.name = "data";
//           input2.name = "data";
//           input3.name = "data";
  
//           let div2 = document.createElement("div");
//           div2.className = "block";
  
//           let div3 = document.createElement("div");
//           div3.className = "block";
  
//           let div4 = document.createElement("div");
//           div4.className = "block";
  
//           let p2 = document.createElement("p");
//           p2.textContent = "Сегодня";
//           let p3 = document.createElement("p");
//           p3.textContent = "Завтра";
//           let p4 = document.createElement("p");
//           p4.textContent = "На неделю";
  
//           let p = document.createElement("p");
//           p.textContent = elem.textToday;
  
//           goroskop.append(div);
  
//           div2.appendChild(input1);
//           div2.appendChild(p2);
//           div.appendChild(div2);
  
//           div3.appendChild(input2);
//           div3.appendChild(p3);
//           div.appendChild(div3);
  
//           div4.appendChild(input3);
//           div4.appendChild(p4);
//           div.appendChild(div4);
//           goroskop.appendChild(p);
  
//           console.log(elem.textToday);
//           input1.addEventListener("change", function () {
//             p.textContent = elem.textToday;
//           });
//           input2.addEventListener("change", function () {
//             p.textContent = elem.textTomorrow;
//           });
//           input3.addEventListener("change", function () {
//             p.textContent = elem.textAterTomorrow;
//           });
//         }
//       }
//     }
//   });
  
//   // Сайт предсказаний
  
//   let good__predictions = [
//     "Вас сегодня ждёт 5 по экзамену",
//     "За твоей дверью уже стоит счастье.",
//     "Повезет в денежных вопросах.",
//     "Будешь много плакать, но только от радости.",
//     "Тебя ожидает интересная поездка.",
//     "Весь год будут помогать люди, которые сейчас рядом.",
//     "Успешным будет любое начатое дело.",
//   ];
  
//   let bad__predictions = [
//     "Вы отойдете в мир иной",
//     "Получите отрицательную новость",
//     "Сегодня Вы застрянете в лифте",
//     "Сегодня Вы наступите в лужу",
//     "Вы не найдете то, что ищете",
//     "Вечером вы попадёте под дождь",
//     "Вам не удастся избежать потерь в важном деле",
//   ];
  
//   let timer = document.querySelector("#timer");
//   let good__text = document.querySelector("#good__text");
//   let bad__text = document.querySelector("#bad__text");
//   let start = document.querySelector("#start");
//   let stop = document.querySelector("#stop");
  
//   let random3;
//   let timerId3;
//   start.addEventListener("click", function () {
//     this.classList.remove("active");
//     stop.classList.add("active");
  
//     timerId3 = setInterval(function () {
//       timer.textContent = random3 = getRandomInt(1, good__predictions.length);
//     }, 100);
//   });
  
//   stop.addEventListener("click", function () {
//     this.classList.remove("active");
//     clearInterval(timerId3);
  
//     good__text.textContent = good__predictions[random3 - 1];
//     bad__text.textContent = bad__predictions[random3 - 1];
//   });
  
//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
  // Автодополнение
  // let arr = [
  //   "Понедельник",
  //   "Вторник",
  //   "Среда",
  //   "Четверг",
  //   "Пятница",
  //   "Суббота",
  //   "Воскресенье"
  // ];
  
  // let elem = document.querySelector("#elem");
  // let list = document.querySelector("#list");
  
  // elem.addEventListener("input", function () {
  //   list.textContent = "";
  
  //   if (this.value !== "") {
  //     let matches = arr.filter((item) => item.startsWith(this.value));
  
  //     if (matches.length > 0) {
  //       for (let match of matches) {
  //         let li = document.createElement("li");
  //         li.textContent = match;
  //         list.appendChild(li);
  
  //         li.addEventListener("click", function () {
  //           elem.value = this.textContent;
  //           list.textContent = "";
  //         });
  //       }
  //     }
  //   }
  // });
  
  // Спойлер
  // let toggle2 = document.querySelectorAll(".toggle");
  
  // for (let elem of toggle2) {
  //   elem.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     elem.parentElement.nextElementSibling.classList.toggle('active');
  //   });
  // }
  
  
  // Вкладки      
  // let parent = document.querySelector('#parent-tabs');
  // let links  = parent.querySelectorAll('.menu a');
  // let tabs   = parent.querySelectorAll('.tab');
  
  // for (let i = 0; i < links.length; i++) {
  //   links[i].addEventListener('click', function(event) {
  //     let activeLink = parent.querySelector('.menu a.active');
  //     activeLink.classList.remove('active');
      
  //     let activeTab = parent.querySelector('.tab.active');
  //     activeTab.classList.remove('active');
      
  //     tabs[i].classList.add('active');
  //     this.classList.add('active');
      
  //     event.preventDefault();
  //   });
  // }
  
  // Аккордион           
  // let accordion = document.querySelector('#accordion');
  // let linkss  = accordion.querySelectorAll('.tab .link a'); 
  // for (let link of linkss) {
  //   link.addEventListener('click', function(event) {
  //     let activeTab = accordion.querySelector('.tab.active');     
  //     if (activeTab) {
  //       activeTab.classList.remove('active');
  //     }    
  //     let newTab = link.closest('.tab');
  //     if (newTab !== activeTab) {
  //       newTab.classList.add('active');
  //     }     
  //     event.preventDefault();
  //   });
  // }
  
  // Игра в города 
  // let field   = document.querySelector('#field');
  // let message = document.querySelector('#message');
  
  // let cities = [];
  
  // let robot = ['Алушта', 'Архыз','Феодосия','Ялта', 'Севастополь', 'Симферополь', 'Абакан', 'Адлер', 'Анапа', 'Ангарск', 'Архангельск', 
  // 'Астрахань', 'Барнаул', 'Белгород', 'Благовещенск','Чебоксары','Челябинск','Череповец','Черняховск','Чита','Екатеринбург',
  // 'Геленджик','Иркутск','Ижевск','Кабардинка','Калининград','Казань','Кемерово','Хабаровск','Ханты-Мансийск','Кисловодск','Комсомольск-на-Амуре',
  // 'Кострома','Краснодар','Красноярск','Курган','Курск','Липецк','Листвянка','Магадан','Магнитогорск','Махачкала','Минеральные Воды',
  // 'Москва','Мурманск','Находка','Нальчик','Нижневартовск','Нижний Новгород','Ноябрьск','Норильск','Новокузнецк','Новороссийск',
  // 'Новосибирск','Новый Уренгой','Омск','Оренбург','Пенза','Пермь','Петропавловск-Камчатский','Петрозаводск','Псков',
  // 'Пятигорск','Ростов-на-Дону','Рязань','Салехард','Самара','Саранск','Саратов','Саяногорск','Сочи','Санкт-Петербург','Ставрополь',
  // 'Сургут','Суздаль','Светлогорск','Сыктывкар','Таганрог','Тольятти','Томск','Тула','Тверь','Тюмень','Уфа','Углич','Ухта','Улан-Удэ', 
  // 'Ульяновск','Великий Новгород','Владикавказ','Владимир','Владивосток','Волгоград','Воркута','Воронеж','Выборг','Якутск','Ярославль','Йошкар-Ола',
  // 'Южно-Сахалинск','Химки','Калуга','Елабуга','Азов','Александров','Брянск','Вологда','Выкса','Грозный','Иваново','Киров',
  // 'Муром','Набережные Челны','Нижнекамск','Переславль-Залесский','Ростов Великий','Сергиев Посад','Смоленск','Старая Русса','Тамбов','Тобольск',
  // 'Шахты','Стрельна','Петергоф','Пушкин','Обнинск','Армавир','Гатчина','Зеленогорск','Репино','Солнечное','Шлиссельбург','Воскресенское',
  // 'Коломна','Рождествено','Октябрьский','Всеволожск','Бузулук','Ессентуки','Кировск','Новокуйбышевск','Приозерск','Рыбинск','Серпухов',
  // 'Стерлитамак','Ступино','Туапсе','Чайковский','Энгельс','Шуя','Сорочинск','Терскол','Кропоткин','Дзержинск','Тихвин','Шатура',
  // 'Златоуст','Горно-Алтайск','Великие Луки','Биробиджан','Волгодонск','Волжский','Ейск','Белокуриха','Кирово-Чепецк','Майкоп',
  // 'Нягань','Саров','Северодвинск','Старый Оскол','Троицк','Шадринск','Подольск','Дмитров','Дагомыс','Красная Поляна','Лазаревское',
  // 'Лоо','Хоста','Зеленоградск','Балашиха','Лысково','Витязево','Вельск','Великий Устюг','Кингисепп','Звенигород','Северобайкальск',
  // 'Первоуральск','Ногинск','Электросталь','Тихорецк','Ломоносов','Дубна','Брейтово','Железноводск','Голубицкая','Грязи',
  // 'Эсто-Садок','Ангелово','Знаменский','Архипо-Осиповка','Горячий Ключ','Домбай','Животино','Королёв','Курово','Мышкин','Небуг',
  // 'Никола','Шерегеш','Сукко','Янтарный','Морское','Гурзуф','Евпатория','Керчь','Коктебель','Курпаты','Черноморское','Крым',
  // 'Одинцово','Жуковский','Конаково','Петрово-Дальнее','Городец','Иноземцево','Тургояк',
  // ];
  
  
  // field.addEventListener('keypress', function(event){
  //   if(event.key == "Enter"){
  //     if(robot.includes(field.value)){
  //       field.value = field.value;
  //       if(cities.length == 0){
  //         cities.push(field.value);
  //         field.value = '';
          
  //         if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ'){
  //           field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
  //         }else{
  //           field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());
  //         }
          
  //       }else if(cities.includes(field.value)){
  //         field.value = '';
  //         field.placeholder = ('Этот город уже был!');
  //       }
  //       else{
          
  //         if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ' || cities.slice(-1).join("").slice(-1) == 'ы'){
  //           field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
  //           console.log(cities.slice(-1).join("").slice(-1));
  //           if(cities.slice(-1).join("").slice(-2, -1).toUpperCase() == field.value.slice(0, 1).toUpperCase()){
  //             cities.push(field.value);
  //             field.value = '';
  //             field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());
  //           }
  //         }else{
  //           if(cities.slice(-1).join("").slice(-1).toUpperCase() == field.value.slice(0, 1).toUpperCase()){
  //             cities.push(field.value);
  //             field.value = '';
  //             field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());
              
  //             if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ'){
  //               field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
  //             }
  //           }
  //         }
  //       }
  //       for(let i of robot){
  //         if(cities.includes(i)){
  //           field.value = '';
  //           field.placeholder = ('Этот город уже был!');
  //         }
  //         else{
      
  //           if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ' || cities.slice(-1).join("").slice(-1) == 'ы'){
  //             if(i.slice(0, 1).toUpperCase() == cities.slice(-1).join("").slice(-2, -1).toUpperCase()){
  //               cities.push(i);
  //               // field.value = '';
  //               field.placeholder = (i + ', напишите название города на ' + i.slice(-1).toUpperCase());
  //               break;
  //             }
  //             // break;
  //           }else{
  //             if(i.slice(0, 1).toUpperCase() == cities.slice(-1).join("").slice(-1).toUpperCase()){
  //               cities.push(i);
  //               // field.value = '';
  //               field.placeholder = (i + ', напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());
                
  //               if(i.slice(-1) == 'ь' || i.slice(-1) == 'ъ' || i.slice(-1) == 'ы'){
  //                 field.placeholder = (i + ', напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
  //                 // break;
  //               }
  //               break;
  //             }
  //           }
  //         }
  //       }
  //     }else{
  //       field.value = '';
  //       field.placeholder = 'Неверно написан город, ' + 'Напишите название города на' + cities.slice(-1).join("").slice(-1).toUpperCase();
  //     }
      
  //     console.log(cities);
  //   }
  // });
  
  // Чеклист
  // let input = document.querySelector('#input');
  // let list = document.querySelector('#list');
  
  // input.addEventListener('keypress', function(event) {
  //   if (event.key == 'Enter') {
  //     let li = document.createElement('li');
      
  //     let task = document.createElement('span');
  //     task.classList.add('task');
  //     task.textContent = this.value;
  //     task.addEventListener('dblclick', function() {
  //       let text = this.textContent;
  //       this.textContent = '';
        
  //       let edit = document.createElement('input');
  //       edit.value = text;
  //       this.appendChild(edit);
        
  //       let self = this;
  //       edit.addEventListener('keypress', function(event) {
  //         if (event.key == 'Enter') {
  //           self.textContent = this.value;
  //         }
  //       });
  //     });
  //     li.appendChild(task);
      
  //     let remove = document.createElement('span');
  //     remove.textContent = 'удалить';
  //     remove.classList.add('remove');
  //     remove.addEventListener('click', function() {
  //       this.parentElement.remove();
  //     });
  //     li.appendChild(remove);
      
  //     let mark = document.createElement('span');
  //     mark.textContent = 'сделано';
  //     mark.classList.add('mark');
  //     mark.addEventListener('click', function() {
  //       this.parentElement.classList.add('done');
  //     });
  //     li.appendChild(mark);
      
  //     list.appendChild(li);
      
  //     this.value = '';
  //   }
  // });
  
  
  // Калькулятор продуктов
  // let name   = document.querySelector('#name');
  // let price  = document.querySelector('#price');
  // let amount = document.querySelector('#amount');
  // let add    = document.querySelector('#add');
  // let tableProducts  = document.querySelector('#tableProducts');
  // let total  = document.querySelector('#total');
  
  // add.addEventListener('click', function() {
  //     let tr = document.createElement('tr');
      
  //   allowEdit(createCell(tr, name.value, 'name'));
  //   allowEdit(createCell(tr, price.value, 'price'));
  //   allowEdit(createCell(tr, amount.value, 'amount'));
  //     createCell(tr, price.value * amount.value, 'cost');
  //     createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
  //     // удалим ряд таблицы
  //     tr.remove();
  //     recountTotal(); // пересчитаем общую сумму
  //   });
      
  //     tableProducts.appendChild(tr);
  //   recountTotal(); // пересчитаем общую сумму
  // });
  
  // function createCell(tr, value, name) {
  //   td = document.createElement('td');
  //   td.textContent = value;
  //   td.classList.add(name);
  //   return tr.appendChild(td);
  // } 
  
  // function recountTotal() {
  //     let costs = tableProducts.querySelectorAll('.cost');
      
  //     if (costs) {
  //     let sum = 0;
  //     for(let i of costs){
  //       console.log(i);
  //       sum += +i.textContent;
  //     }
  //     total.textContent = sum;
  //     }
  // }
  
  // function allowEdit(td) {
  //   td.addEventListener('dblclick', function() {
  //         let text = td.textContent
  //         td.textContent = '';
          
  //         let input = document.createElement('input');
  //         input.value = text;
  //         input.focus();
  //         td.appendChild(input);
          
  //         input.addEventListener('keydown', function(event) {
  //             if (event.key == 'Enter') {
  //                 td.textContent = this.value;
                  
  //                 if (td.classList.contains('price') || td.classList.contains('amount')) {
  //                     let priceTr = td.parentElement.querySelector('.price').textContent;
  //                     let amountTr = td.parentElement.querySelector('.amount').textContent;
  //                     let costTr = td.parentElement.querySelector('.cost');
  
  //           costTr.textContent = +amountTr * +priceTr;
            
  //           recountTotal(); // пересчитаем общую сумму
  //                 }
  //             }
  //         });
  //     });
  // }

  // Тесты
  // let dataRight = document.querySelectorAll('[data-right]');
  // let testBtn = document.querySelector('.testBtn');
  // let answers = [
  //     '4',
  //     '1',
  //     '6',
  // ];
  // testBtn.addEventListener('click',function(){
  //   for(let i in answers){
  //     if(dataRight[i].value == answers[i]){
  //       dataRight[i].setAttribute('class', 'right');
  //     }else{
  //       dataRight[i].setAttribute('class', 'wrong');
  //     }
  //   }
  // });
  // let questions = [
  //     'Сколько будет 10-6?',
  //     'Сколько будет 3-2?',
  //     'Сколько будет 2+2*2?'
  // ];
  // let test2 = document.querySelector('#test2');
  // let testBtn2 = document.querySelector('#testBtn2');
  // for(let i of questions){
  //   let div = document.createElement('div');
  //   let p = document.createElement('p');
  //   p.textContent = i;
  //   let input = document.createElement('input');
  //   div.appendChild(p);
  //   div.appendChild(input);
  //   test2.appendChild(div);
  // }
  // testBtn2.addEventListener('click', function(){
  //   check(test2.querySelectorAll('input'));
  // });
  // function check(input){
  //   for(let i in answers){
  //     if(input[i].value == answers[i]){
  //       input[i].setAttribute('class', 'right');
  //     }else{
  //       input[i].setAttribute('class', 'wrong');
  //     }
  //   }
  // }

  // Слайдеры
  // let textsSlider = ['text1', 'text2', 'text3'];
  // let leftSlider = document.querySelector('#left');
  // let rightSlider = document.querySelector('#right');
  // let slider = document.querySelector('#slider');
  
  // //смена по времени
  // // let l = 0;
  // // let timerIds = setInterval(function() {
  // //   slider.textContent = textsSlider[l++];
  // //   if(l > 2){
  // //     l = 0;
  // //   }
  // // }, 1000);
  
  // // смена по стрелочкам
  // let o = 0; // внешняя переменная
  
  // left.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   slider.textContent = textsSlider[o--];
  
  //   // По кругу
  //   // if(o < 0){
  //     // o = 2;
  //   // }
  //   // 
  //   if(o <= 0){
  //     o = 0;
  //   }
  // });
  
  // right.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   slider.textContent = textsSlider[o++];
    
  //   // По кругу
  //   // if(o > 2){
  //     // o = 0;
  //   // }
  
  //   if(o >= 2){
  //     o = 2;
  //   }
  // });


/////////Игра найди число/////////
// let field = document.querySelector('#field');
// start(2);

// function start(size) {
//  activate(build(field, prepare(size)), size);
// }

// function build(field, arr) {
//  field.textContent = '';
//  let cells = [];
  
//  for (let sub of arr) {
//    let tr = document.createElement('tr');
    
//    for (let num of sub) {
//      let td = document.createElement('td');
//      td.textContent = num;
//      tr.appendChild(td);
      
//      cells.push(td);
//    }
    
//    field.appendChild(tr);
//  }
  
//  return cells;
// }

// function activate(cells, size) {
//  let counter = 1;
  
//  for (let cell of cells) {
//    cell.addEventListener('click', function() {
//      if (this.textContent == counter) {
//        this.classList.add('active');
        
//        if (counter == size * size) {
//          start(++size);
//        }
        
//        counter++;
//      }
//    });
//  }
// }

// function prepare(size) {
//  let arr = [];
  
//  arr = range(size * size);
//  arr = shuffle(arr);
//  arr = chunk(arr, size);
  
//  return arr;
// }

// function range(count) {
//  let arr = [];
  
//  for (let i = 1; i <= count; i++) {
//    arr.push(i);
//  }
  
//  return arr;
// }

// function shuffle(arr) {
//  let result = [];
//  let length = arr.length;
  
//  for (let i = 0; i < length; i++) {
//    let random = getRandomInt(0, arr.length - 1);
//    let elem = arr.splice(random, 1)[0];
//    result.push(elem);
//  }
  
//  return result;
// }

// function chunk(arr, n) {
//  let result = [];
//  let count = Math.ceil(arr.length / n);
  
//  for (let i = 0; i < count; i++) {
//    let elems = arr.splice(0, n);
//    result.push(elems);
//  }
  
//  return result;
// }

// function getRandomInt(min, max) {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// Игра крестики-нолики
// let rectangles = document.querySelectorAll(".rectangle");
// let message = document.getElementById("message");
// let newGameButton = document.getElementById("newgame");
// let currentPlayer = "X";
// let gameStatus = "";
// let moves = 0;
// function handleSquareClick(event) {
//   let rectangles = event.target;

//   if (rectangles.textContent === "" && gameStatus === "") {
//     rectangles.classList.add(currentPlayer);
//     rectangles.textContent = currentPlayer;
//     checkGameStatus();
//     togglePlayer();
//     if (gameStatus === "" && currentPlayer === "O") {
//       setTimeout(function() {
//         botMove();
//       }, 200);
//     }
//   }
// }

// function botMove() {
//   let emptySquares = [];
//   for (let i = 0; i < rectangles.length; i++) {
//     if (rectangles[i].textContent === "") {
//       emptySquares.push(rectangles[i]);
//     }
//   }

//   if (emptySquares.length === 0) {
//     return;
//   }

//   let randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
//   randomSquare.classList.add(currentPlayer);
//   randomSquare.textContent = currentPlayer;
//   checkGameStatus();
//   togglePlayer();
// }

// function checkGameStatus() {
//   moves++;
//   if (checkWin("X")) {
//     gameStatus = "X";
//   } else if (checkWin("O")) {
//     gameStatus = "O";
//   } else if (moves === 9) {
//     gameStatus = "tie";
//   }

//   if (gameStatus !== "") {
//     if (gameStatus === "tie") {
//       message.textContent = "Ничья!";
//     } else {
//       message.textContent = `${gameStatus} выиграл!`;
//     }
//   }
// }

// function checkWin(player) {
//   let winConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];

//   return winConditions.some(function(condition) {
//     return condition.every(function(index) {
//       return rectangles[index].classList.contains(player);
//     });
//   });
// }

// function togglePlayer() {
//   if (currentPlayer === "X") {
//     currentPlayer = "O";
//   } else {
//     currentPlayer = "X";
//   }
// }

// function newGame() {
//     for (let i = 0; i < rectangles.length; i++) {
//       rectangles[i].classList.remove("X", "O");
//       rectangles[i].textContent = "";
//     }
//     gameStatus = "";
//     moves = 0;
//     message.textContent = "";
//     currentPlayer = "X";
//   }
  
//   for (let i = 0; i < rectangles.length; i++) {
//     rectangles[i].addEventListener("click", handleSquareClick);
//   }
  
//   newGameButton.addEventListener("click", newGame);



// Игра смена цветов
// function changeColors() {
//   let colors = ["red", "yellow", "green"];
//   let cells = document.getElementsByClassName("cell");
//   let index = 0; 
//   let clicks = 0; 
//   let itog = document.getElementById("itog");
//   function changeColor() {
//     clicks++;
//     this.style.backgroundColor = colors[index]; 
//     index = (index + 1) % colors.length; 
//     checkTable(); 
//     document.getElementById("clicks").innerHTML = clicks; 
//    }
   
//    for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener("click", changeColor); 
//    }
   
//    function checkTable() {
//     let firstColor = cells[0].style.backgroundColor; 
//     for (let i = 1; i < cells.length; i++) {
//      if (cells[i].style.backgroundColor != firstColor) {
//       return; 
//      }
//     }
//     itog.textContent = "Вы выиграли за " + clicks + " кликов!"; 
//    }
   
//    function reset() {
//     for (let i = 0; i < cells.length; i++) {
//      cells[i].style.backgroundColor = ""; 
//     }
//     index = 0; 
//     clicks = 0;
//     document.getElementById("clicks").innerHTML = clicks; 
//    }
// }


// Календарь
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');



// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

// draw(body, year, month);

// function draw(body, year, month) {
// 	let arr = range(getLastDay(year, month));
	
// 	let firstWeekDay = getFirstWeekDay(year, month);
// 	let lastWeekDay  = getLastWeekDay(year, month);
	
// 	let nums = chunk(normalize(arr, firstWeekDay, 
// 		6 - lastWeekDay), 7); 
// 	createTable(body, nums)
// }

// function createTable(parent, arr) {
// 	parent.textContent = '';
// 	let cells = [];
	
// 	for (let sub of arr) {
// 		let tr = document.createElement('tr');
		
// 		for (let num of sub) {
// 			let td = document.createElement('td');
// 			td.textContent = num;
// 			tr.appendChild(td);
			
// 			cells.push(td);
// 		}
		
// 		parent.appendChild(tr);
// 	}
	
// 	return cells;
// }

// function normalize(arr, left, right) {
// 	for (let i = 0; i < left; i++) {
// 		arr.unshift('');
// 	}
// 	for (var i = 0; i < right; i++) {
// 		arr.push('');
// 	}
	
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }

// function range(count) {
// 	let arr = [];
	
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
	
// 	return arr;
// }

// function chunk(arr, n) {
// 	let result = [];
// 	let count = Math.ceil(arr.length / n);
	
// 	for (let i = 0; i < count; i++) {
// 		let elems = arr.splice(0, n);
// 		result.push(elems);
// 	}
	
// 	return result;
// }
