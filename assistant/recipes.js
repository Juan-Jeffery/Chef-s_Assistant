export const recipes = [
  {
    id: 1,
    name: "炒高麗菜",
    category: "配菜",
    description: "熱油鍋後放入蒜末爆香，加入高麗菜快速翻炒至稍軟，撒鹽調味即可出鍋。",
    main_ingredients: ["高麗菜", "蒜頭"],
    seasonings: ["鹽", "油"],
    steps: [{ name: "炒菜", tool: "炒鍋", time: 10 }]
  },
  {
    id: 2,
    name: "牛肉咖哩飯",
    category: "主食",
    description: "電鍋煮飯同時，將牛肉與蔬菜炒過後加水與咖哩塊燉煮，最後淋在飯上。",
    main_ingredients: ["白飯", "馬鈴薯", "紅蘿蔔", "洋蔥", "牛肉"],
    seasonings: ["咖哩塊"],
    steps: [
      { name: "煮飯", tool: "電鍋", time: 40 },
      { name: "燉咖哩", tool: "湯鍋", time: 10, dependsOn: 0 }
    ]
  },
  {
    id: 3,
    name: "豬肉咖哩飯",
    category: "主食",
    description: "豬肉切塊與馬鈴薯燉煮至軟爛，加入咖哩塊調勻，配上電鍋剛煮好的白飯。",
    main_ingredients: ["白飯", "馬鈴薯", "紅蘿蔔", "洋蔥", "豬肉"],
    seasonings: ["咖哩塊"],
    steps: [
      { name: "煮飯", tool: "電鍋", time: 40 },
      { name: "燉咖哩", tool: "湯鍋", time: 10, dependsOn: 0 }
    ]
  },
  {
    id: 4,
    name: "雞肉咖哩飯",
    category: "主食",
    description: "使用雞腿肉口感更嫩，與洋蔥紅蘿蔔同煮，完成後即是香味濃郁的家常咖哩。",
    main_ingredients: ["白飯", "馬鈴薯", "紅蘿蔔", "洋蔥", "雞肉"],
    seasonings: ["咖哩塊"],
    steps: [
      { name: "煮飯", tool: "電鍋", time: 40 },
      { name: "燉咖哩", tool: "湯鍋", time: 10, dependsOn: 0 }
    ]
  },
  {
    id: 5,
    name: "蛋炒飯",
    category: "主食",
    description: "白飯煮好放涼，先炒散雞蛋，再下飯與蔥花，大火翻炒至粒粒分明。",
    main_ingredients: ["雞蛋", "白飯", "蔥"],
    seasonings: ["醬油", "鹽"],
    steps: [
      { name: "煮飯", tool: "電鍋", time: 40 },
      { name: "炒飯", tool: "炒鍋", time: 10, dependsOn: 0 }
    ]
  },
  {
    id: 6,
    name: "煎節瓜",
    category: "配菜",
    description: "節瓜切片，中小火煎至兩面金黃微焦，撒上少許鹽與黑胡椒即可享用。",
    main_ingredients: ["節瓜"],
    seasonings: ["鹽", "油"],
    steps: [{ name: "煎節瓜", tool: "炒鍋", time: 10 }]
  },
  {
    id: 7,
    name: "煎牛排",
    category: "主菜",
    description: "牛排回溫後擦乾水分，大火熱鍋煎至喜歡的熟度，靜置 5 分鐘後切塊。",
    main_ingredients: ["牛排"],
    seasonings: ["鹽", "黑胡椒", "油"],
    steps: [{ name: "煎牛排", tool: "炒鍋", time: 15 }]
  },
  {
    id: 8,
    name: "牛丼飯",
    category: "主食",
    description: "洋蔥絲炒軟，加入牛肉片與醬油、味醂煮至入味，鋪在剛煮好的熱騰騰白飯上。",
    main_ingredients: ["白飯", "牛肉片", "洋蔥"],
    seasonings: ["醬油", "味醂", "糖"],
    steps: [
      { name: "煮飯", tool: "電鍋", time: 40 },
      { name: "煮牛丼", tool: "炒鍋", time: 15, dependsOn: 0 }
    ]
  },
  {
    id: 9,
    name: "白醬義大利麵",
    category: "主食",
    description: "湯鍋煮麵同時，炒鍋製作奶油白醬，最後將麵條與醬汁合體拌炒。",
    main_ingredients: ["義大利麵", "牛奶", "奶油", "麵粉", "洋蔥"],
    seasonings: ["鹽", "黑胡椒"],
    steps: [
      { name: "煮麵", tool: "湯鍋", time: 40 },
      { name: "煮白醬", tool: "炒鍋", time: 10, dependsOn: 0 },
      { name: "麵炒醬", tool: "炒鍋", time: 10, dependsOn: 1 }
    ]
  },
  {
    id: 10,
    name: "炒泡麵",
    category: "主食",
    description: "泡麵煮至半熟撈起，加入配料快速熱炒，吸乾醬汁後口感Q彈。",
    main_ingredients: ["泡麵", "雞蛋", "蔥"],
    seasonings: ["醬油", "油"],
    steps: [
      { name: "煮麵", tool: "湯鍋", time: 40 },
      { name: "炒泡麵", tool: "炒鍋", time: 10, dependsOn: 0 }
    ]
  },
  {
    id: 11,
    name: "涼拌豆腐",
    category: "配菜",
    description: "嫩豆腐切塊，撒上蔥花、肉鬆與柴魚片，淋上醬油膏即可，免動火。",
    main_ingredients: ["嫩豆腐", "蔥"],
    seasonings: ["醬油", "柴魚片"],
    steps: [{ name: "備豆腐", tool: null, time: 5 }]
  },
  {
    id: 12,
    name: "白飯",
    category: "主食",
    description: "標準白飯煮法，米水比例 1:1，是所有家常料理的最佳搭檔。",
    main_ingredients: ["白飯"],
    seasonings: [],
    steps: [{ name: "煮飯", tool: "電鍋", time: 40 }]
  },
  {
    id: 13,
    name: "味噌湯",
    category: "湯品",
    description: "水滾後加入豆腐與海帶，熄火前攪散味噌，避免過度滾煮失去香味。",
    main_ingredients: ["味噌", "豆腐", "海帶"],
    seasonings: [],
    steps: [{ name: "煮味噌湯", tool: "湯鍋", time: 15 }]
  },
  {
    id: 14,
    name: "涼拌小黃瓜",
    category: "配菜",
    description: "小黃瓜拍碎後用鹽醃出水，加入蒜末、醋、糖醃製半小時最入味。",
    main_ingredients: ["小黃瓜", "蒜頭"],
    seasonings: ["鹽", "醋", "糖"],
    steps: [{ name: "備料", tool: null, time: 5 }]
  },
  {
    id: 15,
    name: "番茄炒蛋",
    category: "配菜",
    description: "番茄切塊炒軟出汁，混入事先炒好的嫩蛋，加入少許番茄醬與糖增加層次感。",
    main_ingredients: ["番茄", "雞蛋"],
    seasonings: ["油", "糖", "番茄醬"],
    steps: [{ name: "炒菜", tool: "炒鍋", time: 12 }]
  },
  {
    id: 16,
    name: "麻婆豆腐",
    category: "主菜",
    description: "炒香豬絞肉與豆瓣醬，加入豆腐塊與水小火燒入味，最後用芡粉勾芡。",
    main_ingredients: ["豆腐", "豬絞肉"],
    seasonings: ["豆瓣醬", "醬油", "糖"],
    steps: [{ name: "燒豆腐", tool: "炒鍋", time: 15 }]
  },
  {
    id: 17,
    name: "清燉蘿蔔湯",
    category: "湯品",
    description: "白蘿蔔去皮切塊，與排骨一同燉煮至蘿蔔透明軟爛，湯頭清甜解膩。",
    main_ingredients: ["白蘿蔔", "排骨"],
    seasonings: ["鹽", "胡椒粉"],
    steps: [{ name: "燉湯", tool: "湯鍋", time: 45 }]
  },
  {
    id: 18,
    name: "蒜泥白肉",
    category: "主菜",
    description: "五花肉煮熟後切薄片，淋上由蒜末、醬油膏、糖、香油調製而成的濃厚醬汁。",
    main_ingredients: ["豬五花肉", "蒜頭"],
    seasonings: ["醬油膏", "糖", "香油"],
    steps: [{ name: "煮肉", tool: "湯鍋", time: 25 }]
  },
  {
    id: 19,
    name: "九層塔烘蛋",
    category: "配菜",
    description: "九層塔葉切碎混入蛋液中，油稍多熱鍋後倒入，煎至兩面金黃蓬鬆。",
    main_ingredients: ["雞蛋", "九層塔"],
    seasonings: ["油", "鹽"],
    steps: [{ name: "烘蛋", tool: "炒鍋", time: 8 }]
  },
  {
    id: 20,
    name: "蒸蛋",
    category: "配菜",
    description: "蛋水比例 1:2，過篩後放入電鍋，鍋蓋留縫隙，蒸出如布丁般平滑的口感。",
    main_ingredients: ["雞蛋"],
    seasonings: ["鹽", "水", "香油"],
    steps: [{ name: "蒸蛋", tool: "電鍋", time: 15 }]
  }
];