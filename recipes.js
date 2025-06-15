export const recipes = [
    {
    id: 1,
    name: "炒高麗菜",
    category: "配菜",
    main_ingredients: ["高麗菜", "蒜頭"],
    seasonings: ["鹽", "油"],
    steps: [
      { name: "炒菜", tool: "炒鍋", time: 10 }
    ]
  },
  {
    id: 2,
    name: "牛肉咖哩飯",
    category: "主食",
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
    main_ingredients: ["節瓜"],
    seasonings: ["鹽", "油"],
    steps: [
      { name: "煎節瓜", tool: "炒鍋", time: 10 }
    ]
  },
  {
    id: 7,
    name: "煎牛排",
    category: "主菜",
    main_ingredients: ["牛排"],
    seasonings: ["鹽", "黑胡椒", "油"],
    steps: [
      { name: "煎牛排", tool: "炒鍋", time: 15 }
    ]
  },
  {
    id: 8,
    name: "牛丼飯",
    category: "主食",
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
    main_ingredients: ["嫩豆腐", "蔥"],
    seasonings: ["醬油", "柴魚片"],
    steps: [
      { name: "備豆腐", tool: null, time: 5 }
    ]
  },
  {
    id: 12,
    name: "白飯",
    category: "主食",
    main_ingredients: ["白飯"],
    seasonings: [],
    steps: [
      { name: "煮飯", tool: "電鍋", time: 40 }
    ]
  },
  {
    id: 13,
    name: "味噌湯",
    category: "湯品",
    main_ingredients: ["味噌", "豆腐", "海帶"],
    seasonings: [],
    steps: [
      { name: "煮味噌湯", tool: "湯鍋", time: 15 }
    ]
  },
  {
    id: 14,
    name: "涼拌小黃瓜",
    category: "配菜",
    main_ingredients: ["小黃瓜", "蒜頭"],
    seasonings: ["鹽", "醋", "糖"],
    steps: [
      { name: "備料", tool: null, time: 5 }
    ]
  }
];
