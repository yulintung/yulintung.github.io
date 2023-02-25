var wine = [
        'Cabernet Sauvignon (R)',
        'Cabernet Franc (R)',
        'Pinot Noir (R)',
        'Merlot (R)',
        'Zinfandel (R)',
        'Gamay (R)',
        'Syrah (R)',
        'Grenache (R)',
        'Tempranillo (R)',
        'Sangiovese (R)',
        'Nebbiolo (R)',
        'Chadonnay (W)',
        'Sauvignon Blanc (W)',
        'Riesling (W)',
        'Gewurztraminer (W)',
        'Muscat (W)',
        'Pinot Gris (W)',
        'Chenin Blanc (W)'
    ];

    var region = [
        'FR-Bordeaux-Haut Medoc,FR-Bordeaux-Pauillac,FR-Bordeaux-Margaux,CA-Napa Valley,SA-Coonawarra,AU-McLaren Vale,AU-Barossa Valley, AU-Margaret River',
        'FR-Loire Vally,FR-Bordeaux,IT-NE,CA',
        'FR-Burgundy,FR-Burgundy-Vougeot,FR-Burgundy-Vosne-Romanee,FR-Burgundy-Gevrey-Chambertin,FR-Champagne,US-Oregon,NZ-Martinborough,NZ-Central Otago,CA-Santa Barbara,CA-Carneros,CA-Russian River Valley',
        'FR-Bordeaux-St. Emilion,FR-Bordeaux-Pomerol,CA,WA-Columbia Valley,Italt,NZ',
        'CA-Dry Creek Valley,CA-Sonoma Vally,CA-Amador County, IT-South',
        'FR-Beaujolais',
        'FR-Rhone-Hermitage,FR-Rhone-Cote-Rotie,FR-Rhone-Chateauneuf-du-pape(教皇新堡),AU-Barosa Valley,AU-McLaren Vale,AU-Hunter Valley',
        'FR-Rhone-Chateauneuf-du-pape(教皇新堡),FR-Rhone-Cotes du Rhone(隆河),SP',
        'SP-Rioja,SP-Ribera del Duero',
        'IT-Chianti,IT-Brunello di Montaicino',
        'IT-Barolo,IT-Barbaresco',
        'FR-Burgundy-Chablis,FR-Burgundy-Meursault,FR-Burgundy-Pouilly Fuisse,FR-Champagne,CA(桶),AU(熱帶水果)',
        'FR-Loire Valley-Sancerre,FR-Loire Valley-Pouilly Fume,FR-Bordeaux-Sauternes,NZ-Marlborough,CA(Fume Blanc)',
        'DE-Mosel,DE-Rheingau,FR-Alsace,Austria,AU-Clare Valley,AU-Eden Valley',
        'FR-Alsace,Germany',
        'FR-Alsace,IT-Asti,IT-Moscato dAsti,Greece',
        'FR-Alsace,IT,US-Oregon-Willamette Vally,NZ-Central Otago',
        'FR-Loire Valley, South Africa'
    ];

    var vinyardCont = [
        '<font class="highlight">果皮厚</font>-萌芽晚-晚熟-梗上結實,抵抗力強-白粉黴,漫長生長週期-冷熱皆可-未成熟很<font class="highlight">青椒</font>,礫石-特羅莎紅土-石灰石-沖積土',
        '萌芽早-早熟-果皮薄-果粒大-果串鬆散,白粉黴-霜黴,適應寒冷,黏土-砂礫土-砂石-適應涼爽濕潤',
        '萌芽早-早熟-<font class="highlight">果皮薄</font>,真菌,喜涼爽-短成長周期-高溫失去水果風味,石灰石-泥灰土',
        '萌芽早-早熟-果皮薄-果粒大-果串鬆散<br /><font class="highlight">(跟CS相反)</font>,黴菌-霜害,喜涼爽-太暖會停止生長,黏土-砂石',
        '<font class="highlight">生長不均勻</font>-晚熟-果粒大-<font class="highlight">高糖</font>-高產量,黴菌-乾化,溫暖生長期,排水好沖積土',
        '<font class="highlight">紫色</font>-生長茂盛-中果粒-中產量,灰黴,耐寒,沙土-黏土-<font class="highlight">花崗岩</font>(薄酒萊特色)',
        '<font class="highlight">果皮厚</font>-萌芽晚-早熟-中果粒-中產量,灰黴-整串黴菌-抵抗力強,需要溫暖-季晚酸度下降快,無',
        '萌芽早-晚熟-果皮薄-果串大且鬆散-抗旱,霜黴-整串黴菌-落果,炎熱乾燥,岩石-排水佳土壤',
        '皮厚-早熟-果串大-中果粒,無,適應寒冷-短成熟期,黏土-石灰石',
        '宙斯之血-邱比特之血<br />Piccolo小果粒果串緊湊-Grosso晚熟大果粒果串鬆散,抵抗力強,溫暖生長期-涼爽夜晚,黏土-石灰石-<font class="highlight">頁岩</font>',
        '萌芽早-晚熟-果串大-中果粒,霜黴-落果-抵抗力強,<font class="highlight">霧</font>-長生長期,石灰質黏土',
        '萌芽早-早熟-易種植,白粉黴-霜害-採收酸度下降快,氣候廣泛,適應各種土壤',
        '萌芽晚-早熟-酸度高-特別茂盛,Botrytis-白粉黴-黑黴,涼又不能太冷,白堊土-礫石-肥土-火石-泥灰土',
        '萌芽早-晚熟-果粒小而緊湊,灰黴-貴腐黴-落果,喜涼爽-高溫失去水果風味,蓄熱佳貧脊土-板岩-沙質沃土',
        '<font class="highlight">果粒藍色</font>-萌芽早-果串小-很甜低酸度,黴菌-寒害-落果,溫暖-成熟期長,排水佳沃土-黏土',
        '<font class="highlight">小粒白麝香</font>,無,溫暖生長茂盛,適應多種土壤',
        '<font class="highlight">果皮色深</font>-<font class="highlight">粉紅藍果粒</font>-低酸,Botrytis-抵抗力強,適應各種氣候,溫暖深層土',
        '萌芽早-晚熟,Botrytis-整串易感染黴菌,喜涼爽-長成長周期,石灰岩-片岩-杜佛岩'
    ];

    var winary = [
        '與皮長時間接觸-顏色深丹寧多-常與Merlot-CF混調,橡木桶加香草香料味-頂級做法,大部分放過更好-頂級十年',
        '與皮接觸取丹寧-波爾多混調中增香氣,橡木桶增加巧克力香氣,中等',
        'Chaptalization天冷<font class="highlight">加糖</font>增加酒精-<font class="highlight">頂部開口木製容器</font>-<font class="highlight">踩皮取色</font>-很少混調,新舊桶並用,範圍廣',
        '與皮接觸取色-常與CS混-<font class="highlight">什麼都是中等的</font>,頂級會用新橡木桶,時間比CS短',
        '各種風格-粉紅微甜白金芬黛-dry濃郁-Sweet Red-加烈,舊的大橡木桶新的小橡木桶,短時間窖藏改善',
        '<font class="highlight">二氧化碳浸漬法</font>-限時浸皮,不常用桶-用桶是頂級酒,大部分出售即飲',
        '與皮接觸取色與丹寧-+G增加結構-+CS增加酒體,傳統大橡木桶-新世界小橡木桶,大部分年輕喝-頂級十年',
        '<font class="highlight">二氧化碳浸漬法釀早飲酒</font>-粉紅色-常釀粉紅酒-常與Syrah混-GSM,少用新橡木桶-<font class="highlight">甜型且酒精度高</font>,沒有跟Syrah一起就要快點喝',
        '<font class="highlight">二氧化碳浸漬法釀早飲酒</font>-長時間浸漬-與G混,品質由橡木熟成時間而定-使用<font class="highlight">美國橡木桶</font>,大部分在酒廠窖藏-成熟後上市',
        '延長浸漬時間-<font class="highlight">加白葡萄酒柔化</font>-新作法加CS,傳統用大橡木桶-法國橡木桶,頂級十年',
        '延長浸漬時間-現代限制與皮接觸時間-混Barbera,傳統用大橡木桶-也有使用小法國桶,需要長時間成年',
        'malolactic 乳酸發酵(奶油),oak 橡木桶熟成-惰性容器-不鏽鋼、舊桶(深色-礦物質和水果風味),大部分馬上飲用-頂級十年',
        '經乳酸保酸-未經乳酸口感柔和-增加<font class="highlight">Semillion</font>柔化口感,不鏽鋼新鮮-橡木桶烤土司,大部分馬上喝-Sauternes十年',
        '很多甜度-終止發酵或加甜液-低溫保芳香,少用新橡木桶-年輕就出酒廠,頂級瓶中有發展',
        '很多甜度-低溫保芳香-與皮短接觸取黃銅色調,無,出廠1-2年飲用',
        '很多甜度-加烈酒,無,無',
        '很多甜度-保酸度提前採摘-與皮短接觸取黃銅色調-可能橡木桶中發酵,<font class="highlight">新世界愛用桶(US)</font>,出廠後盡快飲用-<font class="highlight">油油口感</font>',
        '很多甜度-低溫保芳香,少用新橡木桶,最好的可放五年'
    ];

    var regions = [
        'notable regions 著名產區'
    ];

    var glass = [
        'appearance 外觀',
        'nose 氣味',
        'palate 口感',
        'food paring 食物搭配'
    ];