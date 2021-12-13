"use strict";

var store = {
  indexCurrentRiver: 1,
  filter: "",
  rivers: [{
    title: "Аму-Дарья",
    images: ["./img/rives of evrasia/Amu_darya.jpg", "./img/rives of evrasia/Amu_darya_delta.jpg"],
    texts: ["Амударья (устар. Аму-Дарья) — вторая по длине и крупнейшая по полноводности река в Средней Азии.", "Длина 1415 км (2620 км — от истока Пянджа с рекой Вахандарья). Площадь бассейна (выше города Керки, 1045 км от устья) 309 тысяч км² (без бассейнов рек Зеравшан и Кашкадарья, сток которых практически не поступает в Амударью), сток воды осуществляется с 227 тыс. км².", "Образуется слиянием рек Пяндж и Вахш, впадает в Аральское море, образуя дельту. В среднем течении в Амударью впадают три крупных правых притока (Кафирниган, Сурхандарья, Шерабад) и один левый приток (Кундуз). Далее до бывшего Аральского моря она не получает ни одного притока.", "Питание реки в основном составляют талыеснеговые и ледниковые воды, поэтому максимальные расходы наблюдаются летом, а наименьшие — в январе — феврале. Протекая по равнине, от Керки до Нукуса, Амударья теряет большую часть своего стока на испарение, и орошение. По мутности Амударья занимает первое место в Центральной Азии и одно из первых мест в мире. Основной сток Амударьи формируется на территории Таджикистана (80 %) и частично в Северном Афганистане. Затем река протекает вдоль границы Афганистана с Узбекистаном, пересекает Туркменистан и вновь возвращается в Узбекистан и впадает в Аральское море. В настоящее время воды реки не доходят до Аральского моря, так как забираются на орошение."]
  },{
    title: "Амур",
    images: ["./img/rives of evrasia/Reka-Amur.jpg"],
    texts: ["Амур — река на Дальнем Востоке в Восточной Азии. Протекает по территории России и границе России и КНР. Длина — 2824 км (от слияния Шилки и Аргуни). Впадает в Охотское море или Японское море. Годовой сток составляет 403,66 км³.", "Наименование реки произошло от общей для тунгусо-маньчжурских языков основы амар, дамур — «большая река». Китайцы называли Амур «Хэйхэ» (кит. 黑河) — «чёрная река», затем «Хэйлунцзян» — (кит. 黑龙江) — «Река чёрного дракона». Согласно легенде, в давние времена чёрный дракон, обитавший в реке и олицетворявший добро, победил злого, белого, дракона, который топил лодки на реке, мешал людям рыбачить и вообще нападал на любое живое существо. Победитель остался жить на дне реки в районе Хинганских щёк, что на границе Амурской и Еврейской автономной областей. С тех пор эта река и называется рекой Чёрного Дракона.", "Бассейн реки Амур расположен в умеренных широтах Восточной Азии. В пределах бассейна Амура представлены четыре физико-географические зоны: лесная (с подзонами хвойно-широколиственных лесов, средней и южной тайги), лесостепная, степная и полупустынная (с северной подзоной полупустынь и подзоной сухих степей). Количество годовых осадков колеблется от 250—300 миллиметров в наиболее аридной юго-западной части бассейна истоков Амура и до 750 миллиметров в юго-восточной части хребта Сихотэ-Алинь."]
  }, {
    title: "Брахмапутра",
    images: ["./img/rives of evrasia/Brahmaputra.jpg", "./img/rives of evrasia/Брахмапутра.jpg", "./img/rives of evrasia/Брахмапутра2.jpg"],
    texts: ["Брахмапутра — река в Китае, Индии и Бангладеш, левый приток Ганга; одна из крупнейших водных артерий в Южной Азии.", "Длина — 2896 км, в различных источниках даются разные площади бассейна от 530 тыс. до 935 тыс. км², наиболее часто используемое значение — 651 тыс. км². Бассейн реки располагается на территории четырёх стран — КНР (50,5 %), Индии (33,6 %), Бангладеш (8,1 %) и Бутана (7,8 %). С географической точки зрения бассейн подразделяется на часть, приходящуюся на Тибетское нагорье (44,4 %) с абсолютными высотами от 3500 м, на часть, относящуюся к Гималайскому хребту (28,6 %) с высотами 100-3500 м над уровнем моря, оставшиеся 27 % приходятся на нижнюю часть бассейна с муссонным климатом и годовым количеством осадков, в среднем равным 2354 мм.", "Истоками Брахмапутры являются Джангци и Чема-Юндунг, стекающие с северного склона Гималаев и южного склона хребта Кайлас, соединяющиеся в одно русло на высоте в 4872 м[6]. Отсюда Брахмапутра на протяжении более 1100 км течёт параллельно Гималаям по дну продольного грабена широтного направления, принимает много притоков, питающихся за счёт муссонных дождей и таяния льдов в горах. Уклон оси продольного грабена сравнительно невелик, поэтому Брахмапутра большей частью течёт здесь спокойно и доступна для местного судоходства. Ниже места впадения реки Джамды, в районе приблизительно 95° в. д., Брахмапутра прорывается через отроги хребта Тангла и Гималаи в глубочайших ущельях, имеет бурное течение, образует многочисленные пороги и местами низвергается каскадами быстрин и невысоких водопадов."]
  }, {
    title: "Вента",
    images: ["./img/rives of evrasia/Вента.jpg", "./img/rives of evrasia/Venta.jpg", "./img/rives of evrasia/Вента2.jpg"],
    texts: ["Вента — река в Литве (где называется Вянта) и Латвии, впадает в Балтийское море. Длина — 346 км (из них в Литве 28%), площадь водосборного бассейна — 11 800 км². Истекает из озёр Мядайнис и Вяню на Жямайтской возвышенности. Весной половодье до 7 метров. Средний расход воды 95,5 м³/сек. Вента течёт с юга на север, поэтому, в отличие от других рек Латвии, ледоход на ней начинается с верховьев. Ширина Венты у границы с Литвой — 40—50 м, а в устье реки — 150—200 м. Поэтому расположенный в её устье Вентспилс стал важным морским портом Латвии.", "Наиболее крупные притоки — Абава, Вирвите, Вардува, Вадаксте и Циецере.", "На территории Литвы на Вянте города Ужвентис, Куршенай, Вянта, Векшняй и Мажейкяй. В Латвии на Венте стоят города Кулдига, Пилтене и Вентспилс.", "На Венте расположен самый широкий водопад Европы."]
  }, {
    title: "Висла",
    images: ["./img/rives of evrasia/Висла1.jpg", "./img/rives of evrasia/Висла2.jpg", "./img/rives of evrasia/Висла3.jpg"],
    texts: ["Висла — наиболее важная и протяжённая река Польши (протекает через всю страну с юга на север), а также наиболее длинная и вторая по водности (после Невы) река бассейна Балтийского моря.", "Длина Вислы составляет 1068 км, площадь водосборного бассейна — 198,5 тыс. км².", "Истоки реки находятся на высоте 1106 метров над уровнем моря на западном склоне Бараньей горы (Barania Góra) в Моравско-Силезских Бескидах (Западные Карпаты). Главные истоки: Белая Виселка (Biała Wisełka) и считающаяся основным истоком Чёрная Виселка (Czarna Wisełka). Висла впадает в Гданьский залив Балтийского моря в 15 км восточнее города Гданьска.", "В верховьях до выхода из Бескид (60 км) Висла — бурный горный поток; ниже города Кракова, приняв ряд притоков с Карпат, становится многоводной; ширина русла ниже впадения Дунайца составляет 200 м, ниже Сана — 600—1000 м. В среднем течении (до реки Брда (Brda)), а также в нижнем — типичная равнинная река, протекающая преимущественно в широкой, местами террасированной долине. Русло на большом протяжении извилистое, местами дробится на рукава и протоки, отличается неустойчивостью, большим количеством мелей и перекатов. От города Торунь до моря русло полностью зарегулировано, выше Торуня укреплены участки, подверженные угрозе значительного размыва берегов. В 50 км от моря Висла разделяется на рукава (Ногат, Мёртвая Висла и др.), образуя обширную дельту (Жулавы). Часть дельты, лежащая ниже уровня моря, защищена дамбами. В устье Мёртвой Вислы расположен морской порт Гданьск.", "Большинство главных притоков впадают справа: Дунаец, Вислока, Сан, Вепш, Западный Буг, Нарев; из левых наиболее крупные — Пилица и Брда."]
  }]
}