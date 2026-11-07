/* Task 1 content: method + 7 visual types. All data is illustrative (made up for practice). */
var M = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
window.T1 = {
instruction: "Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
method: {
  pyramid: [
    ["Introduction", "1 sentence. Paraphrase the question prompt only. No data."],
    ["Overview", "Start with 'Overall,'. The 2–4 most important features. NO numbers. The most important paragraph: without a clear overview the score stays around 5–6."],
    ["Details 1", "Key features with data (approximations are fine)."],
    ["Details 2", "Remaining key features + comparisons, with data."]
  ],
  steps: [
    ["Read the prompt", "Understand every word. An unknown place name does not matter."],
    ["Read the surround", "Title, axes, units (millions? %?), key, time span: is it dynamic (over time) or static (one moment)?"],
    ["High-level view (1–3 min)", "Pick 2–4 main features: What would the newspaper headline be? If you could say only 2–4 things? What would you tell your boss?"],
    ["Chunk the data", "Split each line or category into a few phases (rise → plateau → sharp rise). Ignore small wiggles."],
    ["Find comparisons", "Who led at the start vs the end? Any crossover? Biggest and smallest?"],
    ["Write the introduction", "Paraphrase in chunks: The graph shows → The line graph presents; between 2010 and 2017 → from 2010 to 2017."],
    ["Write the overview", "Overall, + the features from step 3. Obvious features are usually correct."],
    ["Plan the details", "Choose the most logical split for the reader: by category, by time period, or main trend vs comparison."],
    ["Write the details + check", "Start, turning points, peaks, end. Then check data, grammar, vocabulary, spelling."]
  ],
  rules: [
    "Do Task 2 first (40 min), then Task 1 in the last 20 minutes.",
    "Just describe what you see: no opinion, no reasons, no 'this is because'.",
    "No conclusion in Task 1. The overview does that job.",
    "150–200 words. Under 150 is a serious problem; over 220 means too much detail.",
    "Use approximations: around 2,500 / just over 2,500 / approximately a quarter. Never guess an exact figure.",
    "Leave a blank line between paragraphs."
  ],
  checklist: [
    "Introduction means exactly the same as the prompt",
    "Overview is a separate paragraph and starts with 'Overall,'",
    "Overview has 2–4 key features and no numbers",
    "Details are organised logically; only key data, not every number",
    "Every number checked against the chart (units too)",
    "Comparisons made where relevant",
    "No opinion, no reasons, no conclusion",
    "150–200 words",
    "Grammar and spelling checked (rose by vs rose to, the number of… is)"
  ],
  bn: [
    "পুরো data বিশ্লেষণ করতে যেও না। এটা PhD নয়, ইংরেজি দক্ষতার পরীক্ষা।",
    "Overview-এ কোনো সংখ্যা নয়। Details-এ সংখ্যা, কিন্তু সব সংখ্যা নয়।",
    "Chart-এর একক (visits, members, %, million) ঠিক রাখো। তোমার mock-এ visits-কে members লেখা হয়েছিল।",
    "'কেন হলো' লিখবে না। শুধু 'কী দেখা যাচ্ছে'।"
  ]
},
types: [
/* ============================================================ LINE */
{
  id:"line", label:"Line graph", bn:"লাইন গ্রাফ",
  purpose:"Shows change over time. Usually compares 2–4 lines.",
  plan:[["Overview","Overall trend of each line + the biggest change or a crossover."],["Details 1","The main line(s): start → turning points → peak → end."],["Details 2","The other line(s) + comparisons (who overtook whom, when)."]],
  tips:["প্রতিটা লাইনকে ৩টা অংশে ভাগ করো: শুরু, মাঝের পরিবর্তন, শেষ।","কে কাকে কখন ছাড়িয়ে গেল (overtake) — এটা প্রায় সবসময় overview-তে যায়।","Projection থাকলে (future) 'is expected to / is predicted to' ব্যবহার করো।"],
  vocab:[
    ["rise / increase / grow / climb","বাড়া","Metro journeys climbed steadily."],
    ["fall / decrease / decline / drop","কমা","Bus use declined gradually."],
    ["peak at / reach a peak of","সর্বোচ্চে পৌঁছানো","Car use peaked at 150 million in 2010."],
    ["hit a low of / bottom out at","সর্বনিম্নে নামা","Sales hit a low of 200 in 2020."],
    ["level off / plateau / remain stable","স্থির হয়ে যাওয়া","The figure levelled off after 2015."],
    ["fluctuate between X and Y","ওঠানামা করা","Demand fluctuated between 300 and 450."],
    ["overtake / surpass","ছাড়িয়ে যাওয়া","The metro overtook buses after 2010."],
    ["sharply / dramatically / significantly","দ্রুত / ব্যাপকভাবে",""],
    ["steadily / gradually / slightly","ধীরে ধীরে / সামান্য",""],
    ["a sharp rise in / a gradual decline in","noun form","There was a sharp rise in metro use."],
    ["rose BY 20% vs rose TO 2 million","by = পরিবর্তনের পরিমাণ, to = শেষ মান",""],
    ["almost doubled / tripled / halved","প্রায় দ্বিগুণ / তিনগুণ / অর্ধেক",""],
    ["over the period / by 2020 / in the final year","সময়ের শব্দ",""]
  ],
  model:{
    q:"The line graph below shows the number of journeys made by bus, metro and private car in a city between 2000 and 2020.",
    chart:{type:"line", title:"Journeys in a city by type of transport, 2000–2020", y:"Millions of journeys", x:["2000","2005","2010","2015","2020"],
      series:[{name:"Bus",values:[120,110,95,90,80]},{name:"Metro",values:[20,45,90,130,160]},{name:"Private car",values:[100,130,150,140,120]}], note:"Illustrative data"},
    paras:[
      "The line graph compares the number of journeys made by bus, metro and private car in a city from 2000 to 2020.",
      "Overall, metro use rose dramatically throughout the period, while bus travel declined steadily. Car journeys increased at first but fell back after 2010, and by the end of the period the metro had become the most popular form of transport.",
      "In 2000, buses were the most common means of transport, with around 120 million journeys, followed by cars at 100 million. The figure for buses then fell gradually, dropping to about 80 million in 2020. Car journeys, by contrast, climbed to a peak of 150 million in 2010 before decreasing to around 120 million by the final year.",
      "The metro started from a much lower base of just 20 million journeys in 2000. However, it grew rapidly over the next two decades, overtaking buses between 2010 and 2015 and cars between 2015 and 2020. By 2020, it accounted for approximately 160 million journeys, eight times its original level and the highest figure for any form of transport."
    ]
  },
  practice:[
    {q:"The graph below shows the percentage of households in a country with internet access, a landline phone and a mobile phone from 2000 to 2020.",
     chart:{type:"line", title:"Households with each technology (%)", y:"% of households", x:["2000","2005","2010","2015","2020"], max:100,
       series:[{name:"Internet",values:[20,45,70,85,95]},{name:"Landline phone",values:[90,80,60,40,25]},{name:"Mobile phone",values:[35,65,85,95,98]}]}},
    {q:"The graph below shows the average monthly rainfall in two cities over a year.",
     chart:{type:"line", title:"Average monthly rainfall", y:"Rainfall (mm)", x:M,
       series:[{name:"City A",values:[80,70,60,40,20,10,5,8,25,55,75,85]},{name:"City B",values:[10,12,20,45,90,180,250,230,150,60,20,10]}]}},
    {q:"The graph below shows the number of international students at three universities between 2015 and 2025.",
     chart:{type:"line", title:"International students (thousands)", y:"Thousands of students", x:["2015","2017","2019","2021","2023","2025"],
       series:[{name:"University A",values:[5,6,7,4,8,10]},{name:"University B",values:[8,8.5,9,6,7,7.5]},{name:"University C",values:[2,3,4.5,3,6,9]}]}},
    {q:"The graph below shows sales of three types of drink in a country from 2004 to 2024.",
     chart:{type:"line", title:"Drink sales (million litres)", y:"Million litres", x:["2004","2008","2012","2016","2020","2024"],
       series:[{name:"Soft drinks",values:[300,320,310,270,230,200]},{name:"Bottled water",values:[100,150,210,280,350,420]},{name:"Fruit juice",values:[150,160,170,160,140,120]}]}},
    {q:"The graph below shows electricity generated from coal, gas and renewable sources in a country from 1990 to 2020, with a projection for 2030.",
     chart:{type:"line", title:"Electricity generation by source (TWh)", y:"Terawatt hours", x:["1990","2000","2010","2020","2030*"],
       series:[{name:"Coal",values:[200,220,180,120,50]},{name:"Gas",values:[50,90,150,170,140]},{name:"Renewables",values:[10,20,50,120,250]}], note:"* projected"}},
    {q:"The graph below shows the unemployment rate in three countries between 2008 and 2020.",
     chart:{type:"line", title:"Unemployment rate (%)", y:"% of workforce", x:["2008","2010","2012","2014","2016","2018","2020"],
       series:[{name:"Country X",values:[5,9,8,7,6,4,8]},{name:"Country Y",values:[7,8,11,12,10,9,10]},{name:"Country Z",values:[3,4,4,5,5,4,6]}]}},
    {q:"The graph below shows average house prices in three cities from 2000 to 2025.",
     chart:{type:"line", title:"Average house price (thousand dollars)", y:"Thousand $", x:["2000","2005","2010","2015","2020","2025"],
       series:[{name:"City A",values:[150,220,190,250,320,400]},{name:"City B",values:[100,130,140,150,170,180]},{name:"City C",values:[200,260,230,240,260,300]}]}},
    {q:"The graph below shows electricity demand in a city over 24 hours on a typical summer day and a typical winter day.",
     chart:{type:"line", title:"Electricity demand during one day (megawatts)", y:"Megawatts", x:["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00","24:00"],
       series:[{name:"Summer day",values:[300,250,280,450,600,650,550,450,320]},{name:"Winter day",values:[400,350,500,550,480,470,700,600,420]}]}}
  ]
},
/* ============================================================ BAR */
{
  id:"bar", label:"Bar chart", bn:"বার চার্ট",
  purpose:"Compares categories. If it has years, it can also show change.",
  plan:[["Overview","Highest / lowest category + the general pattern (e.g. year 2 higher in every month)."],["Details 1","The biggest or most important group of bars."],["Details 2","The other group + clear comparisons (twice as many, the gap widened)."]],
  tips:["প্রতিটা বার আলাদা করে বর্ণনা কোরো না; একই রকম বারগুলো একসাথে বলো।","সবচেয়ে বড়, সবচেয়ে ছোট আর ব্যতিক্রম (যেমন একমাত্র মাস যেখানে উল্টো) খোঁজো।","Chart-এর একক (visits, %, millions) ঠিক রাখো।"],
  vocab:[
    ["the highest / lowest figure","সর্বোচ্চ / সর্বনিম্ন সংখ্যা",""],
    ["X was the most popular, followed by Y","X সবচেয়ে জনপ্রিয়, তারপর Y",""],
    ["twice / three times as many … as","দ্বিগুণ / তিনগুণ","Women did twice as many hours as men."],
    ["considerably more / slightly fewer than","অনেক বেশি / সামান্য কম",""],
    ["the gap between X and Y widened / narrowed","ব্যবধান বাড়ল / কমল",""],
    ["respectively","যথাক্রমে","…at 40% and 25% respectively."],
    ["in contrast / by comparison / similarly","বিপরীতে / তুলনায় / একইভাবে",""],
    ["the second most / least common","দ্বিতীয় সর্বোচ্চ / সর্বনিম্ন",""],
    ["in every category except…","… ছাড়া সব ক্ষেত্রে",""],
    ["the figures for X and Y were almost identical","X আর Y প্রায় সমান",""],
    ["fewer visits (countable) / less traffic (uncountable)","fewer vs less",""]
  ],
  model:{
    q:"The bar chart below shows the number of visits to a community website in the first and second years of use.",
    chart:{type:"bar", title:"Number of visits to a community website", y:"Number of visits", x:["Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],
      series:[{name:"First year of use",values:[2000,4500,10000,10000,3500,1000,1000,4500,7000,11500,12500,14500]},{name:"Second year of use",values:[3500,5000,17000,17000,15500,10000,10000,12500,20000,22500,22500,12500]}], note:"Your mock test chart (values read approximately)"},
    paras:[
      "The bar chart compares the number of monthly visits to a community website during its first and second years of use, from September to August.",
      "Overall, the website received considerably more visits in the second year in every month except August. In both years, visits rose sharply in November and December, fell to their lowest level in February and March, and then climbed again towards the summer.",
      "In the first year, visits started at around 2,000 in September and rose to about 10,000 in both November and December. They then dropped steeply, reaching a low of roughly 1,000 in February and March. From April onwards, the figure recovered steadily and finished the year at its highest point of approximately 14,500 in August.",
      "The second year followed a similar pattern but at a much higher level. Visits grew from about 3,500 in September to 17,000 in November and December, before falling to 10,000 in February and March. They then surged to a peak of around 22,500 in June and July. However, in August the number fell sharply to about 12,500, the only month in which it was lower than the first-year figure."
    ]
  },
  practice:[
    {q:"The chart below shows the percentage of men and women in a country who did regular exercise, by age group.",
     chart:{type:"bar", title:"People doing regular exercise (%)", y:"%", x:["16–24","25–34","35–44","45–54","55–64","65+"], max:100,
       series:[{name:"Men",values:[65,55,45,40,35,30]},{name:"Women",values:[50,48,44,42,38,25]}]}},
    {q:"The chart below shows the number of tourists who visited four countries in 2015 and 2025.",
     chart:{type:"bar", title:"International tourists (millions)", y:"Millions", x:["Country A","Country B","Country C","Country D"],
       series:[{name:"2015",values:[85,68,30,20]},{name:"2025",values:[95,90,40,38]}]}},
    {q:"The chart below shows the average number of hours per week that secondary school students in five countries spend on homework.",
     chart:{type:"bar", title:"Homework per week (hours)", y:"Hours", x:["Country A","Country B","Country C","Country D","Country E"],
       series:[{name:"Hours",values:[3,5,6,13,9]}]}},
    {q:"The chart below shows a company's sales of laptops, tablets and phones in each quarter of one year.",
     chart:{type:"bar", title:"Sales by quarter (thousand units)", y:"Thousand units", x:["Q1","Q2","Q3","Q4"],
       series:[{name:"Laptops",values:[20,25,22,40]},{name:"Tablets",values:[15,14,18,30]},{name:"Phones",values:[50,48,55,70]}]}},
    {q:"The chart below shows the main reason for studying given by students of different ages.",
     chart:{type:"bar", title:"Main reason for studying (% of students)", y:"%", x:["Under 26","26–29","30–39","40–49","Over 49"], max:100,
       series:[{name:"For their career",values:[80,70,40,20,15]},{name:"For interest",values:[10,15,30,50,70]}]}},
    {q:"The chart below shows the percentage of household waste that was recycled in five cities in 2010 and 2025.",
     chart:{type:"bar", title:"Household waste recycled (%)", y:"%", x:["City A","City B","City C","City D","City E"], max:100,
       series:[{name:"2010",values:[20,35,10,45,25]},{name:"2025",values:[50,55,30,60,28]}]}},
    {q:"The chart below shows the number of cars, bicycles and motorbikes per 1,000 people in four countries.",
     chart:{type:"bar", title:"Vehicles per 1,000 people", y:"Per 1,000 people", x:["Country A","Country B","Country C","Country D"],
       series:[{name:"Cars",values:[600,450,200,80]},{name:"Bicycles",values:[300,800,250,150]},{name:"Motorbikes",values:[50,40,300,350]}]}},
    {q:"The chart below shows average daily screen time by age group on weekdays and at weekends.",
     chart:{type:"bar", title:"Average daily screen time (hours)", y:"Hours", x:["5–10","11–15","16–20","21–30","31–50","51+"],
       series:[{name:"Weekdays",values:[2,4,5,4.5,3.5,3]},{name:"Weekends",values:[4,6,7,5.5,4,3.5]}]}}
  ]
},
/* ============================================================ PIE */
{
  id:"pie", label:"Pie chart", bn:"পাই চার্ট",
  purpose:"Shows proportions (parts of a whole). Two pies usually mean a comparison between years or groups.",
  plan:[["Overview","Largest segment(s) + the biggest change between the pies."],["Details 1","Segments that grew (from X% to Y%)."],["Details 2","Segments that shrank or stayed the same."]],
  tips:["দুই বছরের pie হলে, বেড়েছে এমন অংশগুলো একসাথে আর কমেছে এমনগুলো একসাথে লেখো।","% এর বদলে মাঝে মাঝে ভগ্নাংশ ব্যবহার করো: a quarter, a third, half।","'Percent' নয়, '%' বা 'per cent'; 'percentage of' + noun।"],
  vocab:[
    ["accounted for / made up / comprised","অংশ ছিল","Food accounted for 30% of spending."],
    ["the proportion / share / percentage of","অনুপাত / অংশ",""],
    ["a quarter (25%) · a third (≈33%) · half (50%)","ভগ্নাংশ",""],
    ["two thirds (≈66%) · three quarters (75%)","ভগ্নাংশ",""],
    ["just over / just under / nearly / roughly","একটু বেশি / একটু কম / প্রায়","just under half (48%)"],
    ["the majority / a small minority","বেশিরভাগ / অল্প অংশ",""],
    ["the largest / smallest segment","সবচেয়ে বড় / ছোট অংশ",""],
    ["rose from X% to Y% / fell from X% to Y%","বাড়ল / কমল",""],
    ["doubled / halved","দ্বিগুণ / অর্ধেক হলো",""],
    ["remained unchanged at","অপরিবর্তিত থাকল","Transport remained unchanged at 15%."],
    ["by far the largest","অনেক বেশি বড়",""],
    ["the remaining 8%","বাকি ৮%",""]
  ],
  model:{
    q:"The pie charts below show how households in a country spent their money in 1980 and 2020.",
    chart:{type:"pie", title:"Household spending by category", pies:[
      {label:"1980", slices:[["Housing",25],["Food",30],["Transport",15],["Leisure",10],["Clothing",12],["Other",8]]},
      {label:"2020", slices:[["Housing",35],["Food",15],["Transport",15],["Leisure",18],["Clothing",7],["Other",10]]}], note:"Illustrative data"},
    paras:[
      "The pie charts compare how households in a country divided their spending between six categories in 1980 and 2020.",
      "Overall, housing and leisure took a much larger share of household budgets in 2020, while the proportion spent on food and clothing fell considerably. Housing became the largest single expense by the end of the period.",
      "In 1980, food accounted for the biggest share of spending, at 30%, followed by housing at a quarter. By 2020, however, the share spent on food had halved to 15%, which put it in joint third place with transport. Housing costs, by contrast, had risen to 35%, making them by far the largest category and more than double the proportion spent on food.",
      "Leisure also grew in importance, almost doubling from 10% to 18% and becoming the second largest category. In contrast, spending on clothing dropped from 12% to just 7%, the smallest share in 2020. The proportion spent on transport remained unchanged at 15%, while other expenses rose slightly from 8% to 10%."
    ]
  },
  practice:[
    {q:"The pie charts below show the main sources of energy in a country in 2000 and 2025.",
     chart:{type:"pie", title:"Energy sources (%)", pies:[{label:"2000",slices:[["Oil",45],["Coal",30],["Gas",15],["Nuclear",7],["Renewables",3]]},{label:"2025",slices:[["Oil",30],["Coal",12],["Gas",25],["Nuclear",10],["Renewables",23]]}]}},
    {q:"The pie charts below show how undergraduate and postgraduate students at a university spend their monthly budget.",
     chart:{type:"pie", title:"Student monthly spending (%)", pies:[{label:"Undergraduates",slices:[["Rent",40],["Food",25],["Transport",10],["Books",10],["Entertainment",10],["Other",5]]},{label:"Postgraduates",slices:[["Rent",50],["Food",20],["Transport",8],["Books",12],["Entertainment",5],["Other",5]]}]}},
    {q:"The pie charts below show how land was used in a region in 1950 and 2020.",
     chart:{type:"pie", title:"Land use (%)", pies:[{label:"1950",slices:[["Farmland",55],["Forest",30],["Urban",5],["Water and wetland",10]]},{label:"2020",slices:[["Farmland",45],["Forest",18],["Urban",28],["Water and wetland",9]]}]}},
    {q:"The pie chart below shows how electricity is used in an average home in a country.",
     chart:{type:"pie", title:"Household electricity use (%)", pies:[{label:"",slices:[["Heating",40],["Water heating",20],["Cooking",10],["Lighting",8],["TV and computers",12],["Other",10]]}]}},
    {q:"The pie charts below show the types of waste produced by a city in 2005 and 2025.",
     chart:{type:"pie", title:"City waste by type (%)", pies:[{label:"2005",slices:[["Food",35],["Paper",25],["Plastic",15],["Glass",10],["Metal",5],["Other",10]]},{label:"2025",slices:[["Food",30],["Paper",15],["Plastic",28],["Glass",7],["Metal",5],["Other",15]]}]}},
    {q:"The pie charts below show the age structure of the population in two countries in 2025.",
     chart:{type:"pie", title:"Population by age group (%)", pies:[{label:"Country A",slices:[["0–14 years",35],["15–64 years",60],["65+ years",5]]},{label:"Country B",slices:[["0–14 years",14],["15–64 years",62],["65+ years",24]]}]}},
    {q:"The pie charts below show how people travelled to work in a city in 1990 and 2025.",
     chart:{type:"pie", title:"Main way of travelling to work (%)", pies:[{label:"1990",slices:[["Car",50],["Bus",25],["Train",10],["Bicycle",5],["Walking",10]]},{label:"2025",slices:[["Car",35],["Bus",20],["Train",18],["Bicycle",15],["Walking",12]]}]}},
    {q:"The pie chart below shows the reasons people gave for moving to a large city.",
     chart:{type:"pie", title:"Reasons for moving to the city (%)", pies:[{label:"",slices:[["Work",45],["Education",20],["Family",15],["Lifestyle",12],["Other",8]]}]}}
  ]
},
/* ============================================================ TABLE */
{
  id:"table", label:"Table", bn:"টেবিল",
  purpose:"Lots of numbers. Your job is to find the pattern, not to copy the numbers.",
  plan:[["Overview","Highest and lowest + the general pattern (e.g. rises with age)."],["Details 1","One group of rows or columns with similar behaviour."],["Details 2","The other group + the exceptions."]],
  tips:["টেবিলে সবচেয়ে বেশি সংখ্যা থাকে, তাই বেছে নেওয়াটাই আসল কাজ। ৬–১০টা সংখ্যাই যথেষ্ট।","সারি বা কলামে একই প্রবণতা (বয়সের সাথে বাড়ে / কমে) খোঁজো।","Overview-এ সংখ্যা নয়, শুধু প্রবণতা।"],
  vocab:[
    ["The table shows / compares / gives information about","টেবিলটি দেখায় / তুলনা করে",""],
    ["the highest figure in the table was…","টেবিলের সর্বোচ্চ সংখ্যা",""],
    ["X had the largest…, whereas Y had the smallest…","X-এ সবচেয়ে বেশি, Y-এ সবচেয়ে কম",""],
    ["…was the only… to…","একমাত্র","Fiction was the only category to fall every year."],
    ["a similar pattern can be seen in…","একই ধরন দেখা যায়",""],
    ["showed the opposite pattern","বিপরীত ধরন দেখাল",""],
    ["ranged from X to Y","X থেকে Y পর্যন্ত",""],
    ["three times as long as","তিনগুণ সময়",""],
    ["fell with age / rose with age","বয়সের সাথে কমল / বাড়ল",""],
    ["by contrast / whereas / while","বিপরীতে",""]
  ],
  model:{
    q:"The table below shows the average number of hours per week that people in three age groups spent on four free-time activities.",
    chart:{type:"table", title:"Average hours per week on free-time activities", columns:["Activity","Aged 13–18","Aged 19–40","Aged 41–65"],
      rows:[["Watching TV",8,10,15],["Social media",18,12,5],["Sport and exercise",6,4,3],["Reading",3,4,7]], note:"Illustrative data"},
    paras:[
      "The table shows the average number of hours per week that people in three age groups spent on four leisure activities.",
      "Overall, social media was by far the most popular activity among teenagers, while watching television was the main pastime for people aged 41 to 65. Older people also read more but exercised less than younger age groups.",
      "Teenagers spent around 18 hours a week on social media, three times as long as they spent on sport and exercise (6 hours). The figure for social media fell with age, to 12 hours for 19–40-year-olds and only 5 hours for the oldest group.",
      "Television showed the opposite pattern. It took up 8 hours a week for teenagers, rising to 10 hours for young adults and 15 hours for those aged 41 to 65. Similarly, time spent reading increased from 3 hours among teenagers to 7 hours in the oldest group. Sport and exercise, by contrast, declined steadily from 6 hours to just 3 hours."
    ]
  },
  practice:[
    {q:"The table below shows the percentage of people in different age groups who use four social media platforms.",
     chart:{type:"table", title:"Social media use by age group (%)", columns:["Platform","18–29","30–49","50–64","65+"], rows:[["Platform A",85,70,55,40],["Platform B",75,45,20,8],["Platform C",60,30,10,3],["Platform D",30,35,25,10]]}},
    {q:"The table below shows the number of visitors to four attractions in a city in 2015, 2020 and 2025.",
     chart:{type:"table", title:"Visitors to city attractions (thousands)", columns:["Attraction","2015","2020","2025"], rows:[["Museum",500,300,650],["Zoo",400,350,380],["Castle",250,100,420],["Aquarium (opened 2018)","–",200,350]]}},
    {q:"The table below shows the average annual salary for five jobs in three countries.",
     chart:{type:"table", title:"Average annual salary (thousand dollars)", columns:["Job","Country A","Country B","Country C"], rows:[["Teacher",45,30,20],["Nurse",50,28,15],["Engineer",80,55,30],["Doctor",150,90,40],["Shop assistant",28,18,10]]}},
    {q:"The table below shows the average weekly consumption of five types of food per person in a country in 1980 and 2020.",
     chart:{type:"table", title:"Food eaten per person per week (grams)", columns:["Food","1980","2020"], rows:[["Red meat",800,450],["Chicken",300,650],["Fish",250,280],["Fresh vegetables",1200,1000],["Processed food",500,1100]]}},
    {q:"The table below shows what school leavers in a country did after finishing school in four different years.",
     chart:{type:"table", title:"Destinations of school leavers (%)", columns:["Destination","2000","2010","2020","2025"], rows:[["University",30,38,45,48],["College",25,22,20,18],["Employment",40,35,28,25],["Unemployed",5,5,7,9]]}},
    {q:"The table below shows how water is used in four countries.",
     chart:{type:"table", title:"Water use by sector (%)", columns:["Country","Agriculture","Industry","Homes"], rows:[["Country A",70,20,10],["Country B",40,45,15],["Country C",85,5,10],["Country D",30,50,20]]}},
    {q:"The table below shows mobile phone ownership and average monthly data use in five countries in 2025.",
     chart:{type:"table", title:"Mobile phones in five countries, 2025", columns:["Country","Ownership (%)","Average data per month (GB)"], rows:[["Country A",95,15],["Country B",88,9],["Country C",72,5],["Country D",60,3],["Country E",99,20]]}},
    {q:"The table below shows the number of books borrowed from a city library by category in 2010, 2018 and 2025.",
     chart:{type:"table", title:"Library loans by category (thousands)", columns:["Category","2010","2018","2025"], rows:[["Fiction",120,90,70],["Non-fiction",80,70,65],["Children's books",60,75,90],["E-books",5,40,110]]}}
  ]
},
/* ============================================================ MIXED */
{
  id:"mixed", label:"Mixed charts", bn:"দুই ধরনের চার্ট",
  purpose:"Two visuals together (e.g. line + pie). Treat each one simply and link them if possible.",
  plan:[["Introduction","One sentence that introduces BOTH charts (…, and the pie chart illustrates…)."],["Overview","One key feature from each chart."],["Details 1 / 2","Details 1 = chart 1, Details 2 = chart 2."]],
  tips:["প্রতিটা চার্টের জন্য একটা করে details প্যারাগ্রাফ। এতে সংগঠন সহজ থাকে।","Overview-এ দুই চার্ট থেকেই অন্তত একটা করে মূল বৈশিষ্ট্য।","দ্বিতীয় চার্টে যেতে 'Turning to…' বা 'As for…' লেখো।"],
  vocab:[
    ["The line graph shows…, while the pie chart illustrates…","দুটো চার্টের পরিচয় এক বাক্যে",""],
    ["Turning to the pie chart, …","এবার pie chart-এ আসা যাক",""],
    ["As for… / In terms of…","… সম্পর্কে",""],
    ["Meanwhile, …","একই সময়ে",""],
    ["the most common way of…","… এর সবচেয়ে প্রচলিত উপায়",""],
    ["three times the proportion who…","… এর তিনগুণ অনুপাত",""]
  ],
  model:{
    q:"The line graph below shows the number of visitors to a national park between 2000 and 2025, and the pie chart shows how visitors travelled to the park in 2025.",
    chart:{type:"mixed", note:"Illustrative data", parts:[
      {type:"line", title:"Visitors to a national park (thousands)", y:"Thousands", x:["2000","2005","2010","2015","2020","2025"], series:[{name:"Visitors",values:[120,150,210,180,260,340]}]},
      {type:"pie", title:"How visitors travelled to the park, 2025 (%)", pies:[{label:"",slices:[["Car",60],["Bus",20],["Bicycle",12],["Other",8]]}]}]},
    paras:[
      "The line graph shows the number of visitors to a national park between 2000 and 2025, and the pie chart illustrates how visitors travelled there in 2025.",
      "Overall, visitor numbers almost tripled over the period, despite a temporary fall around 2015. In 2025, the car was clearly the most common way of reaching the park, while cycling and other forms of transport were used by only a small minority of visitors.",
      "In 2000, the park received around 120,000 visitors. This figure rose steadily to approximately 210,000 in 2010, before dipping to about 180,000 in 2015. After that, numbers grew rapidly, reaching 260,000 in 2020 and peaking at around 340,000 in 2025.",
      "Turning to transport, 60% of visitors in 2025 arrived by car, three times the proportion who came by bus (20%). Taken together, these two forms of transport were used by four out of five visitors. Cycling accounted for 12% of journeys, while the remaining 8% of visitors used other means of transport."
    ]
  },
  practice:[
    {q:"The pie chart below shows the main causes of absence from work in a country, and the bar chart shows the average number of days of absence per employee by company size.",
     chart:{type:"mixed", parts:[
       {type:"pie", title:"Causes of absence from work (%)", pies:[{label:"",slices:[["Illness",45],["Family responsibilities",20],["Stress",18],["Personal needs",12],["Other",5]]}]},
       {type:"bar", title:"Days absent per employee per year", y:"Days", x:["Small","Medium","Large","Very large"], series:[{name:"Days",values:[4,6,9,11]}]}]}},
    {q:"The bar chart below shows the number of students enrolled in four subjects at a college in 2015 and 2025, and the pie chart shows what graduates were doing in 2025.",
     chart:{type:"mixed", parts:[
       {type:"bar", title:"Students enrolled (hundreds)", y:"Hundreds", x:["Business","Engineering","Medicine","Arts"], series:[{name:"2015",values:[12,10,6,9]},{name:"2025",values:[18,9,8,5]}]},
       {type:"pie", title:"Graduate destinations, 2025 (%)", pies:[{label:"",slices:[["Employed",65],["Further study",20],["Unemployed",8],["Other",7]]}]}]}},
    {q:"The line graph below shows the average price of a cinema ticket in a country from 2000 to 2025, and the pie chart shows how people watched films in 2025.",
     chart:{type:"mixed", parts:[
       {type:"line", title:"Average cinema ticket price (dollars)", y:"$", x:["2000","2005","2010","2015","2020","2025"], series:[{name:"Price",values:[5,6.5,8,9,11,12]}]},
       {type:"pie", title:"Main way of watching films, 2025 (%)", pies:[{label:"",slices:[["Streaming at home",58],["Cinema",22],["Television",15],["Other",5]]}]}]}},
    {q:"The line graph below shows total smartphone sales worldwide from 2015 to 2025, and the pie chart shows the market share of five brands in 2025.",
     chart:{type:"mixed", parts:[
       {type:"line", title:"Smartphone sales worldwide (billions)", y:"Billions", x:["2015","2017","2019","2021","2023","2025"], series:[{name:"Sales",values:[1.4,1.5,1.4,1.3,1.2,1.25]}]},
       {type:"pie", title:"Market share by brand, 2025 (%)", pies:[{label:"",slices:[["Brand A",22],["Brand B",20],["Brand C",14],["Brand D",9],["Others",35]]}]}]}}
  ]
},
/* ============================================================ MAP */
{
  id:"map", label:"Map", bn:"ম্যাপ",
  purpose:"Before and after (or now and planned). Describe what changed and what stayed the same.",
  plan:[["Overview","The general change (more developed / residential / commercial) + what stayed the same."],["Details 1","One area (e.g. the west or north)."],["Details 2","The other area (e.g. the east or south)."]],
  tips:["এলাকা ধরে লেখো: উত্তর / দক্ষিণ / পূর্ব / পশ্চিম। এক জায়গা থেকে আরেক জায়গায় লাফাবে না।","অতীতের ম্যাপ হলে past passive (was replaced); পরিকল্পনা হলে will be / is planned to be।","কোনটা বদলায়নি সেটাও বলো (remained unchanged)।"],
  vocab:[
    ["was replaced by / made way for","প্রতিস্থাপিত হলো","The factory was knocked down to make way for a bus station."],
    ["was converted into / turned into","রূপান্তরিত হলো",""],
    ["was demolished / knocked down","ভেঙে ফেলা হলো",""],
    ["was built / constructed / added","নির্মিত / যোগ হলো",""],
    ["was extended / expanded / enlarged","বাড়ানো হলো",""],
    ["was relocated / moved to","স্থানান্তরিত হলো",""],
    ["remained unchanged / stayed the same","অপরিবর্তিত থাকল",""],
    ["in the north-east / to the south of","অবস্থান: উত্তর-পূর্বে / দক্ষিণে",""],
    ["next to / opposite / adjacent to / at the centre","পাশে / বিপরীতে / সংলগ্ন / কেন্দ্রে",""],
    ["became more residential / commercial / developed","আরও আবাসিক / বাণিজ্যিক / উন্নত হলো",""],
    ["will be built / is planned to be converted (future)","পরিকল্পনার ম্যাপে",""]
  ],
  model:{
    q:"The maps below show the centre of a town in 2000 and in 2025.",
    chart:{type:"map", title:"Town centre", note:"Illustrative maps", panels:[
      {label:"2000", cells:[[5,0,2,8,"road","Main\nStreet"],[0,0,5,2,"building","Houses"],[0,2,5,3,"parking","Car park"],[0,5,2,3,"building","Bank"],[2,5,3,3,"green","Park"],[7,0,5,2,"building","Shops"],[7,2,2,2,"building","Post\noffice"],[9,2,3,2,"building","Factory"],[7,4,5,4,"farm","Open land"]]},
      {label:"2025", cells:[[5,0,2,8,"ped","Pedestrian\nstreet"],[0,0,5,2,"building","Apartments"],[0,2,5,3,"building","Shopping centre"],[0,5,2,3,"building","Café"],[2,5,3,3,"green","Park +\nplayground"],[7,0,5,2,"building","Shops"],[7,2,2,2,"building","Post\noffice"],[9,2,3,2,"building","Bus\nstation"],[7,4,5,4,"building","New housing\nestate"]]}]},
    paras:[
      "The maps show how a town centre changed between 2000 and 2025.",
      "Overall, the centre became more modern and commercial. Several older buildings were replaced, a factory and open land were redeveloped, and the main street was closed to traffic, while the shops and post office in the north-east stayed the same.",
      "In the western part of the centre, the houses in the north were demolished and replaced with apartments, while the large car park was turned into a shopping centre. To the south, the bank became a café, although the park next to it remained and now includes a playground. Meanwhile, Main Street, which ran through the middle of the town, was converted into a pedestrian street.",
      "On the eastern side, the row of shops and the post office were unchanged. However, the factory was knocked down to make way for a bus station, and the open land in the south-east was developed into a new housing estate."
    ]
  },
  practice:[
    {q:"The maps below show a school in 2010 and today.",
     chart:{type:"map", title:"A school site", panels:[
       {label:"2010", cells:[[0,7,12,1,"road","Station Road"],[1,1,4,3,"building","Classrooms"],[6,1,5,3,"sand","Playground"],[1,4,3,3,"parking","Car park"],[5,4,6,3,"green","Sports field"]]},
       {label:"Today", cells:[[0,7,12,1,"road","Station Road"],[1,1,4,3,"building","Classrooms"],[6,1,3,3,"building","Science\nblock"],[9,1,2,3,"sand","Play\narea"],[1,4,3,3,"building","Library"],[5,4,4,3,"green","Sports\nfield"],[9,4,2,3,"parking","Car\npark"]]}]}},
    {q:"The maps below show a coastal village in 1990 and 2025.",
     chart:{type:"map", title:"A coastal village", panels:[
       {label:"1990", cells:[[0,0,3,8,"water","Sea"],[3,0,1,8,"sand","Beach"],[4,1,2,2,"building","Fishing\nhuts"],[7,1,3,2,"building","Houses"],[10,0,2,4,"green","Forest"],[4,4,8,1,"road","Coast road"],[4,5,8,3,"farm","Farmland"]]},
       {label:"2025", cells:[[0,0,3,8,"water","Sea"],[1,5,2,1,"building","Pier"],[3,0,1,8,"sand","Beach"],[4,1,2,2,"building","Restau-\nrants"],[7,1,3,2,"building","Hotel"],[10,0,2,4,"green","Golf\ncourse"],[4,4,8,1,"road","Coast road"],[4,5,4,3,"building","Holiday\napartments"],[8,5,4,3,"parking","Car park"]]}]}},
    {q:"The maps below show a university campus now and the planned changes for the future.",
     chart:{type:"map", title:"A university campus", panels:[
       {label:"Now", cells:[[0,0,3,3,"building","Library"],[4,0,4,3,"building","Lecture\nhalls"],[9,0,3,3,"parking","Car park"],[0,3,12,1,"road","Main road"],[0,4,4,4,"water","Lake"],[5,4,7,4,"green","Open grass"]]},
       {label:"Planned", cells:[[0,0,3,3,"building","Library"],[4,0,4,3,"building","Lecture\nhalls"],[9,0,3,3,"building","Student\ncentre"],[0,3,12,1,"ped","Pedestrian walkway"],[0,4,3,4,"water","Lake"],[3,4,1,2,"building","Café"],[5,4,3,4,"building","Sports\nhall"],[8,4,4,4,"building","Student\nhousing"]]}]}},
    {q:"The maps below show an island before and after it was developed for tourism.",
     chart:{type:"map", title:"A small island", panels:[
       {label:"Before", cells:[[0,0,12,1,"water",""],[0,7,12,1,"water",""],[0,1,1,6,"water",""],[11,1,1,6,"water",""],[1,1,10,1,"sand","Beach"],[1,2,10,5,"green","Trees"]]},
       {label:"After", cells:[[0,0,12,1,"water",""],[5,0,1,1,"building","Pier"],[0,7,12,1,"water",""],[0,1,1,6,"water",""],[11,1,1,6,"water",""],[1,1,10,1,"sand","Beach"],[1,2,3,2,"building","Huts"],[4,2,3,2,"building","Reception"],[7,2,4,2,"building","Huts"],[1,4,10,1,"ped","Footpath"],[1,5,3,2,"green","Trees"],[4,5,3,2,"building","Restaurant"],[7,5,4,2,"green","Trees"]]}]}},
    {q:"The maps below show a public park now and the proposed changes.",
     chart:{type:"map", title:"A public park", panels:[
       {label:"Present", cells:[[0,0,12,1,"road","North Road"],[4,1,1,7,"ped","Path"],[1,2,3,3,"water","Pond"],[1,6,1,1,"building","WC"],[5,2,6,5,"green","Grass"]]},
       {label:"Proposed", cells:[[0,0,12,1,"road","North Road"],[4,1,1,7,"ped","Path"],[1,2,3,3,"water","Pond"],[1,5,3,2,"building","Café"],[11,1,1,1,"building","WC"],[5,2,3,2,"sand","Playground"],[8,2,3,2,"sand","Sports\ncourts"],[5,4,6,3,"green","Flower gardens"]]}]}}
  ]
},
/* ============================================================ PROCESS */
{
  id:"process", label:"Process", bn:"প্রক্রিয়া",
  purpose:"Stages from start to finish (man-made) or a life cycle (natural). Here you mention EVERY stage.",
  plan:[["Overview","How many stages + where it starts and ends (+ whether it is a cycle)."],["Details 1","The first half of the stages, in order."],["Details 2","The second half of the stages, in order."]],
  tips:["চার্টের মতো বেছে নিতে হয় না। Process-এ প্রতিটা ধাপ উল্লেখ করতে হয়।","মানুষের তৈরি প্রক্রিয়া হলে present passive (is collected, are washed)।","প্রাকৃতিক চক্র হলে active voice (the frog lays eggs)।"],
  vocab:[
    ["The diagram illustrates how… is made / the life cycle of…","প্রক্রিয়ার পরিচয়",""],
    ["The process consists of X stages, beginning with… and ending with…","X ধাপ, শুরু… শেষ…",""],
    ["First, / To begin with,","প্রথমে",""],
    ["Next, / Then, / After that,","তারপর",""],
    ["Once…, …","একবার … হলে","Once the glass has melted, it is poured into moulds."],
    ["At the following stage, / Subsequently,","পরের ধাপে",""],
    ["Finally, / In the final stage,","শেষে",""],
    ["is collected / are washed / is heated","present passive",""],
    ["in order to / so that","উদ্দেশ্য বোঝাতে",""],
    ["which are then…","যা পরে…","…crushed into pieces, which are then melted."],
    ["the cycle begins again","চক্র আবার শুরু হয়",""]
  ],
  model:{
    q:"The diagram below shows how glass bottles are recycled.",
    chart:{type:"process", title:"Recycling glass bottles", note:"Illustrative process", cycle:true, steps:[
      "Used bottles collected from recycling bins","Taken by truck to a recycling plant","Washed with high-pressure water","Sorted by colour: clear, green, brown",
      "Crushed into small pieces","Melted in a furnace at about 1,500°C","Shaped in moulds into new bottles","Filled and sent to shops"]},
    paras:[
      "The diagram illustrates how used glass bottles are recycled to make new ones.",
      "Overall, the process consists of eight stages, beginning with the collection of used bottles from recycling bins and ending with new bottles being delivered to shops. It is a continuous cycle, as the new bottles can be recycled again after use.",
      "First, empty bottles are collected from recycling bins and transported by truck to a recycling plant. There, they are washed with high-pressure water to remove dirt and labels. The clean bottles are then sorted into three colours: clear, green and brown.",
      "Next, the sorted glass is crushed into small pieces, which are then melted in a furnace at a temperature of around 1,500°C. After that, the molten glass is poured into moulds and shaped into new bottles. In the final stage, these bottles are filled with drinks and sent to shops, where they are bought by consumers. Once they have been used, the empty bottles can be put into recycling bins, and the cycle begins again."
    ]
  },
  practice:[
    {q:"The diagram below shows how chocolate is produced.",
     chart:{type:"process", title:"Producing chocolate", steps:["Cocoa pods grow on trees in tropical regions","Ripe pods harvested and cut open","Beans removed and fermented for several days","Beans dried in the sun","Packed in sacks and shipped to factories","Roasted at high temperature","Shells removed; beans crushed into a paste","Paste mixed with sugar and milk, moulded into bars"]}},
    {q:"The diagram below shows how rainwater is collected and used in a house.",
     chart:{type:"process", title:"Rainwater collection at home", steps:["Rain falls on the roof","Water flows into gutters and pipes","Filter removes leaves and dirt","Water stored in an underground tank","Pump sends water to the house","Used for toilets, washing machines and the garden"]}},
    {q:"The diagram below shows the life cycle of a frog.",
     chart:{type:"process", title:"Life cycle of a frog", cycle:"Adult frogs return to the water to lay eggs (a cycle).", steps:["Adult frog lays eggs (frogspawn) in water","Tadpoles hatch after about 10 days","Back legs grow (about 5 weeks)","Front legs grow and the tail shrinks (about 9 weeks)","Young frog leaves the water (about 12 weeks)","Becomes an adult after 2–3 years"]}},
    {q:"The diagram below shows how paper is recycled.",
     chart:{type:"process", title:"Recycling paper", cycle:true, steps:["Waste paper collected","Sorted by type and grade","Soaked in water and chemicals to make pulp","Pulp cleaned to remove ink and glue","Pressed and rolled into thin sheets","Dried with heated rollers","Cut into rolls and sent to manufacturers"]}},
    {q:"The diagram below shows how old smartphones are recycled.",
     chart:{type:"process", title:"Recycling smartphones", steps:["Old phones collected at shops or by post","Personal data erased","Phones tested","Working phones repaired and resold","Broken phones taken apart by hand","Batteries removed and recycled separately","Metals such as gold and copper extracted","Materials sold to manufacturers for new devices"]}}
  ]
}
]
};
