/* Task 2 content: 5 question types, models, vocabulary, practice questions */
window.T2 = {
universalChecklist: [
  "Introduction: paraphrase + direct answer + both main ideas (2–3 sentences)",
  "No hook, no background sentence, no 'This essay will discuss'",
  "Each body paragraph has ONE idea, stated in the first sentence",
  "Explanation is one logical chain (why → so what), not a list of reasons",
  "Example is real and general: no invented statistics, not too personal",
  "My position is the same in the introduction, body and conclusion",
  "Conclusion repeats the answer; no new idea",
  "250–300 words",
  "people think / one disadvantage / can + base verb / no contractions",
  "Long words checked for vowel spelling"
],
pee: "Point (topic sentence = the idea from the introduction) → Explain (one chain: because… → as a result… → so…) → Example (For example, … real and general) → (optional) link back to the question.",

types: [
/* =========================================================== OPINION */
{
  id: "opinion", label: "Opinion", bn: "একমত / দ্বিমত",
  tagline: "Pick one side and give two reasons that support it.",
  signals: ["To what extent do you agree or disagree?", "Do you agree or disagree?", "What is your opinion?"],
  roles: ["Reason 1", "Reason 2"],
  plan: [["pos","My position","agree / disagree"],["i1","Reason 1 → Body 1",""],["i2","Reason 2 → Body 2",""]],
  paragraphs: [
    ["Introduction", "Paraphrase the statement + your position + reason 1 + reason 2."],
    ["Body 1", "Reason 1: Point → Explain → Example."],
    ["Body 2", "Reason 2: Point → Explain → Example."],
    ["Conclusion", "In conclusion + your position again + both reasons. No new idea."]
  ],
  introTpl: "Some people argue that [the statement in new words]. I [completely / strongly] [agree / disagree] with this view because [reason 1], and [reason 2].",
  bodyTpl: "The main reason I [support / oppose] [X] is that [reason 1]. [Explain: because… As a result…]. For example, [real example].",
  conclTpl: "In conclusion, I firmly believe that [your position] because [reason 1] and [reason 2].",
  tips: [
    "এক পক্ষ বেছে নাও। মাঝামাঝি থাকলে position অস্পষ্ট হয়।",
    "দুটো কারণই একই পক্ষের হবে।",
    "Body-র প্রথম বাক্যটাই intro-র কারণ, অন্য কথায়।",
    "Disagree করাও সমান ভালো; যে পক্ষে সহজে ব্যাখ্যা আর উদাহরণ দিতে পারবে, সেটাই নাও।"
  ],
  models: [
    { title: "Free university education",
      q: "Some people believe that university education should be free for all students. To what extent do you agree or disagree?",
      plan: "Body 1 = equal chance for poor students · Body 2 = benefits the economy",
      paras: [
        "Some people argue that university education should be provided free of charge to every student. I completely agree with this view because free tuition gives talented students from poor families an equal chance to succeed, and a more educated population benefits the whole economy.",
        "The main reason I support free university education is that it gives every capable student the same opportunity. When universities charge high fees, many intelligent young people from low-income families cannot afford to study, even if their exam results are excellent. As a result, places go to those whose parents can pay rather than to those with the most ability. Free tuition removes this barrier, so students are selected on merit. For example, public universities in Germany charge almost no tuition fees, which allows students from all backgrounds to study subjects such as engineering and medicine.",
        "Free university education also benefits the economy as a whole. Graduates usually earn higher salaries, which means they pay more tax over their working lives. In addition, a country needs skilled professionals, such as doctors, engineers and teachers, to provide public services and attract international companies. If cost prevents people from studying, the country will face shortages of these workers. Therefore, the money a government spends on tuition is not simply a cost but an investment that is returned through a stronger and more productive workforce.",
        "In conclusion, I strongly believe that university education should be free for all students. This would allow talented young people from any background to fulfil their potential, and it would provide the country with the skilled workers it needs to grow."
      ] },
    { title: "Music brings people together",
      q: "Some people say that music is a good way of bringing people of different cultures and ages together. To what extent do you agree or disagree with this opinion?",
      plan: "Body 1 = no language needed · Body 2 = shared events for all ages",
      paras: [
        "Some people believe that music is an effective way to bring together people from different cultures and age groups. I strongly agree with this view because music can be enjoyed without understanding a particular language, and events such as concerts and festivals allow people of all ages to share the same experience.",
        "Firstly, music can connect people even when they do not share a language. A melody or a rhythm can make listeners feel happy, sad or excited, whatever country they come from. This means that people can enjoy the same song and feel the same emotion without translating a single word. As a result, music creates common ground between strangers from very different backgrounds. For example, Korean pop songs are popular with millions of young people in Europe and South America, many of whom do not understand Korean but still sing along at concerts.",
        "Secondly, musical events give people of different generations a reason to spend time together. At a concert or a local festival, grandparents, parents and children often stand side by side and enjoy the same performance. Shared experiences like these create memories and topics of conversation that families can return to later, which helps to reduce the gap between older and younger people. For instance, at weddings in many countries, guests of every age dance to the same traditional songs, and these moments are often remembered for years.",
        "In conclusion, I firmly believe that music brings people of different cultures and ages together. It does not depend on any single language, and the events built around it allow people of all generations to enjoy the same moment."
      ] },
    { title: "Banning junk food adverts for children",
      q: "Some people think that governments should ban advertisements for unhealthy food that are aimed at children. To what extent do you agree or disagree?",
      plan: "Body 1 = adverts create unhealthy habits · Body 2 = children cannot judge adverts",
      paras: [
        "Some people believe that advertisements for unhealthy food that target children should be banned by the government. I agree with this view because such advertising encourages children to develop poor eating habits, and young children are not able to judge advertising critically.",
        "The main reason I support a ban is that these advertisements push children towards unhealthy diets. Fast-food and snack companies spend large amounts of money making their products look fun and exciting, often using cartoon characters and free toys. As a result, children ask their parents for these products and begin to prefer sugary and fatty foods to healthier meals. Since habits formed in childhood often continue into adulthood, this can lead to long-term health problems such as obesity and diabetes. For example, the United Kingdom restricts advertisements for foods high in fat, sugar and salt during children's television programmes for this reason.",
        "Furthermore, children are too young to understand the purpose of advertising. Adults usually know that an advert is designed to persuade them to spend money, so they can ignore exaggerated claims. Young children, however, often believe what they see on screen and cannot separate entertainment from marketing. This makes advertising aimed at them unfair, because they cannot make an informed choice. For instance, a six-year-old who sees a favourite cartoon character eating a chocolate bar is likely to believe that the product is good for him.",
        "In conclusion, I agree that governments should ban unhealthy food advertising aimed at children. Such adverts encourage harmful eating habits, and children are not old enough to recognise that they are being persuaded."
      ] },
    { title: "Compulsory community work for students",
      q: "Some people think that all secondary school students should be required to do unpaid work in their local community. To what extent do you agree or disagree?",
      plan: "Body 1 = practical skills · Body 2 = caring about others",
      paras: [
        "Some people believe that secondary school students should be required to do unpaid work in their local community. I agree with this idea because it teaches young people practical skills that classrooms cannot provide, and it encourages them to care about other people.",
        "Firstly, community work helps students develop skills that are useful in their future careers. In a classroom, students mainly learn theory and are tested through exams. When they volunteer, however, they have to communicate with strangers, work in a team and take responsibility for real tasks. These are exactly the skills that employers look for, so students who have done community work are better prepared for the workplace. For example, a student who helps to organise a charity food collection learns how to plan, manage time and solve problems when things go wrong.",
        "Secondly, unpaid work in the community teaches young people to think about others. Many teenagers spend most of their time focused on their studies, their friends and their phones, and they may not notice the difficulties faced by people around them. Helping elderly residents, cleaning public parks or teaching younger children shows them how their actions can improve someone else's life. This experience can make them more responsible citizens as adults. For instance, some students who volunteer at a care home continue to visit elderly residents even after their required hours are finished.",
        "In conclusion, I believe that unpaid community work should be compulsory for secondary school students. It gives them practical skills for their future careers and helps them become caring members of society."
      ] },
    { title: "Space exploration vs problems on Earth",
      q: "Some people think that the money spent on space exploration should be used to solve problems on Earth instead. To what extent do you agree or disagree?",
      plan: "Body 1 = space research creates useful technology · Body 2 = its cost is small",
      paras: [
        "Some people argue that governments should stop spending money on space exploration and use it to solve problems on Earth. I disagree with this view because space research produces technology that improves life on Earth, and the amount spent on it is small compared with other areas of government spending.",
        "The main reason I support space exploration is that it leads to useful inventions. To send people and machines into space, scientists must solve extremely difficult problems, and their solutions are often later used in everyday life. Satellites, which are a direct result of space programmes, now help us to forecast the weather, navigate with GPS and monitor climate change. Without investment in space, many of these technologies would not exist. For example, satellite images allow countries such as Bangladesh to warn coastal communities days before a cyclone arrives, which has greatly reduced the number of deaths.",
        "Furthermore, space exploration takes only a small share of public money. Most governments spend far more on health care, education, defence and social welfare than they do on space agencies. This means that cancelling space programmes would not provide enough money to solve major problems such as poverty or disease. These problems have many complex causes, and money alone cannot fix them. For instance, even NASA, the largest space agency in the world, receives only a tiny fraction of the US federal budget.",
        "In conclusion, I disagree that money for space exploration should be redirected to problems on Earth. Space research creates technology that benefits everyone, and its cost is too small to make a real difference to other problems."
      ] }
  ],
  vocabModels: [
    ["provided free of charge","বিনামূল্যে দেওয়া"],["an equal chance to succeed","সফল হওয়ার সমান সুযোগ"],
    ["low-income families","নিম্ন আয়ের পরিবার"],["selected on merit","মেধার ভিত্তিতে নির্বাচিত"],
    ["not simply a cost but an investment","শুধু খরচ নয়, বিনিয়োগ"],["a skilled / productive workforce","দক্ষ কর্মীবাহিনী"],
    ["fulfil their potential","নিজের সম্ভাবনা পূরণ করা"],["create common ground","মিলের জায়গা তৈরি করা"],
    ["reduce the gap between generations","প্রজন্মের দূরত্ব কমানো"],["push children towards unhealthy diets","শিশুদের অস্বাস্থ্যকর খাবারের দিকে ঠেলে দেওয়া"],
    ["long-term health problems","দীর্ঘমেয়াদি স্বাস্থ্য সমস্যা"],["make an informed choice","জেনে-বুঝে সিদ্ধান্ত নেওয়া"],
    ["better prepared for the workplace","কর্মক্ষেত্রের জন্য বেশি প্রস্তুত"],["responsible citizens","দায়িত্বশীল নাগরিক"],
    ["lead to useful inventions","দরকারি আবিষ্কারের পথ তৈরি করা"],["a small share of public money","সরকারি অর্থের ছোট অংশ"],
    ["a tiny fraction of the budget","বাজেটের খুব সামান্য অংশ"],["face shortages of workers","কর্মীর ঘাটতিতে পড়া"]
  ],
  language: [
    ["I completely / strongly agree with this view because…","আমি সম্পূর্ণ / দৃঢ়ভাবে একমত, কারণ…"],
    ["I disagree with this view because…","আমি একমত নই, কারণ…"],
    ["The main reason I support / oppose … is that…","… সমর্থন / বিরোধিতার প্রধান কারণ হলো…"],
    ["Firstly, … / Secondly, …","প্রথমত / দ্বিতীয়ত (প্রতিটি body-র শুরুতে)"],
    ["Furthermore, / In addition, … also …","তাছাড়া (দ্বিতীয় কারণ শুরু করতে)"],
    ["This means that… / As a result, …","এর মানে… / ফলে… (ব্যাখ্যার শৃঙ্খল)"],
    ["For example, / For instance, …","উদাহরণস্বরূপ"],
    ["In conclusion, I firmly believe that…","উপসংহারে, আমি দৃঢ়ভাবে মনে করি…"],
    ["Although some people argue that…, I believe…","আংশিক একমত হলে: যদিও কেউ বলেন…, আমি মনে করি…"]
  ],
  practice: [
    {q:"Some people believe that children should be taught how to manage money at school. To what extent do you agree or disagree?", t:"Education"},
    {q:"Online learning is now as effective as learning in a classroom. To what extent do you agree or disagree?", t:"Education"},
    {q:"Governments should spend more money on public transport than on building new roads. To what extent do you agree or disagree?", t:"Transport"},
    {q:"Some people believe that famous athletes and entertainers are paid too much money. To what extent do you agree or disagree?", t:"Society"},
    {q:"Museums and art galleries should be free for everyone. To what extent do you agree or disagree?", t:"Culture"},
    {q:"The best way to improve public health is to increase the number of sports facilities. To what extent do you agree or disagree?", t:"Health"},
    {q:"Children today spend too much time on organised activities and not enough time playing freely. To what extent do you agree or disagree?", t:"Children"},
    {q:"Unpaid internships are a good way for young people to start their careers. To what extent do you agree or disagree?", t:"Work"},
    {q:"Social media companies should be responsible for removing false information from their platforms. To what extent do you agree or disagree?", t:"Media"},
    {q:"It is more important to protect historic buildings than to build new housing. To what extent do you agree or disagree?", t:"Cities"},
    {q:"University students should study only subjects that will help them get a job. To what extent do you agree or disagree?", t:"Education"},
    {q:"Plastic bags and plastic bottles should be banned. To what extent do you agree or disagree?", t:"Environment"},
    {q:"A four-day working week would benefit both employees and companies. To what extent do you agree or disagree?", t:"Work"},
    {q:"Parents should limit the time their children spend playing computer games. To what extent do you agree or disagree?", t:"Technology"},
    {q:"Learning a foreign language is a waste of time because translation apps can do the job. To what extent do you agree or disagree?", t:"Technology"},
    {q:"Public libraries are no longer necessary in the digital age. To what extent do you agree or disagree?", t:"Culture"},
    {q:"Older people should be encouraged to keep working after the official retirement age. To what extent do you agree or disagree?", t:"Work"},
    {q:"Cities should ban private cars from their centres. To what extent do you agree or disagree?", t:"Transport"},
    {q:"Some people think that the government should pay for everyone's health care. To what extent do you agree or disagree?", t:"Health"},
    {q:"Some people believe that all scientific research should be shared freely with the public. To what extent do you agree or disagree?", t:"Science"}
  ]
},

/* =========================================================== DISCUSS */
{
  id: "discuss", label: "Discuss both views", bn: "দুই মত + নিজের মত",
  tagline: "Explain why other people hold the view you reject, then explain and support your own view.",
  signals: ["Discuss both views and give your own opinion.", "Some people think…, while others believe…"],
  roles: ["View I reject", "My view"],
  plan: [["a","View I reject + its reason → Body 1",""],["b","My view + my reason → Body 2",""]],
  paragraphs: [
    ["Introduction", "View you reject + its reason. However, I believe [your view] because [your reason]."],
    ["Body 1", "Why OTHER people hold the view you reject: Those who… argue that… → Explain → Example."],
    ["Body 2", "Your view: However, I agree with those who believe… → Explain → Example."],
    ["Conclusion", "In conclusion, although [view A + reason], I believe [view B + reason]."]
  ],
  introTpl: "Some people believe that [view you reject] because [their reason]. However, I believe (that) [view you accept] because [your reason].",
  bodyTpl: "Body 1: Those who [support view A] argue that… · Body 2: However, I agree with those who believe that…",
  conclTpl: "In conclusion, although [view A] because [reason A], I believe [view B] because [reason B].",
  tips: [
    "যে মত তুমি মানো না সেটা আগে, নিজের মত শেষে। তাহলে essay তোমার পক্ষে শেষ হয়।",
    "Body 1-এ নিজের মত দেবে না; শুধু অন্যদের যুক্তি ভালোভাবে ব্যাখ্যা করবে।",
    "Body 2-এর প্রথম বাক্যেই পরিষ্কার: 'However, I agree with those who…'",
    "প্রশ্নের অস্পষ্ট অংশ (যেমন 'other ways') intro-তে নির্দিষ্ট করো।"
  ],
  models: [
    { title: "When to start a foreign language",
      q: "Some people think children should start learning a foreign language at primary school, while others believe they should begin at secondary school. Discuss both views and give your opinion.",
      plan: "Body 1 = secondary (master first language first) · Body 2 = primary (children learn easily) + I agree",
      paras: [
        "Some people believe that children should begin learning a foreign language at secondary school because they first need to master their own language. However, I believe it is better to start at primary school because young children learn new languages much more easily than teenagers.",
        "Those who prefer a later start argue that young children should focus on their first language. At primary school, children are still learning to read and write properly, and adding a second language may confuse them or slow down their progress. They also have other basic subjects to learn, such as mathematics. By secondary school, students have a strong foundation in their own language, so they can understand grammar rules and learn a foreign language more systematically. For example, a teenager can compare the structure of an English sentence with a sentence in their own language, which a six-year-old cannot do.",
        "However, I agree with those who believe that language learning should begin at primary school. Young children learn languages naturally through songs, games and repetition, without feeling embarrassed about making mistakes. They are also much better at copying new sounds, so they are more likely to develop clear pronunciation. In addition, an early start gives them several more years of practice before they finish school. For instance, children in the Netherlands and the Scandinavian countries usually begin English at primary school, and many of them speak it fluently by the time they are teenagers.",
        "In conclusion, although some people think foreign languages should wait until secondary school so that children can master their first language, I believe primary school is the better time to start because young children learn languages more naturally and have more years to practise."
      ] },
    { title: "Accept a bad situation or improve it",
      q: "Some people believe that it is best to accept a bad situation, such as an unsatisfactory job or a shortage of money. Others argue that it is better to try and improve such situations. Discuss both views and give your opinion.",
      plan: "Body 1 = accepting avoids risk and stress · Body 2 = careful action improves life + I agree",
      paras: [
        "Some people believe it is wiser to accept difficult circumstances, such as an unsatisfying job or a shortage of money, because trying to change them can be stressful and risky. However, I believe it is better to try to improve such situations because taking action usually leads to a better quality of life.",
        "People who prefer to accept a bad situation argue that change brings risk. Leaving an unsatisfying job may mean losing a regular income, and there is no guarantee of finding a better position. Similarly, trying to earn more money by starting a business can lead to debt if the plan fails. For many people, especially those supporting a family, this uncertainty causes more stress than the original problem. For example, during an economic downturn, many workers choose to stay in jobs they dislike because new jobs are hard to find.",
        "However, I agree with those who think people should try to improve their circumstances. If someone simply accepts an unsatisfying job or a lack of money, the situation is likely to stay the same for years, and their frustration may grow. Taking small, careful steps, on the other hand, can gradually open new opportunities without great risk. Learning new skills, asking for a promotion or looking for a better job while still employed are all realistic ways to improve one's life. For instance, millions of people now take low-cost online courses in the evenings, which allows them to move into better-paid careers without leaving their current jobs first.",
        "In conclusion, although accepting a bad situation may seem safer because change involves risk, I believe it is better to try to improve it, since careful action usually leads to a more satisfying life."
      ] },
    { title: "Trains and subways or more roads",
      q: "Some people think that governments should spend money on building train and subway lines to reduce traffic congestion. Others believe that building more and wider roads is the better way to reduce traffic. Discuss both views and give your opinion.",
      plan: "Body 1 = trains carry many people without road space · Body 2 = roads are cheaper and serve all vehicles + I agree",
      paras: [
        "Some people believe that governments should invest in train and subway lines to reduce traffic congestion because these systems can carry large numbers of passengers without using road space. However, I believe that building more and wider roads is a better option because it is cheaper to build and maintain.",
        "Supporters of rail systems argue that trains are the most efficient way to move people in crowded cities. A single train can carry hundreds or even thousands of passengers, while each car on the road usually carries only one or two people. If more commuters travel by train, fewer cars are needed, and the roads become less crowded. Subways also run underground, so they do not compete with cars and buses for limited space on the streets. For example, the Dhaka Metro Rail now allows large numbers of commuters to travel across the city without sitting in traffic.",
        "However, I believe that improving the road network is the more practical solution. Building a subway requires tunnels, stations and expensive trains, and it can take many years to complete. Roads, by contrast, can be widened or extended at a much lower cost, and they are also cheaper to maintain. In addition, roads benefit every type of vehicle, including buses, delivery lorries and ambulances, which cannot use a railway. For instance, many cities have built ring roads that allow lorries and long-distance traffic to avoid the city centre completely, which reduces congestion for local drivers.",
        "In conclusion, although train and subway lines can carry large numbers of passengers, I believe building more and wider roads is a better way to reduce traffic because it costs less and serves all kinds of vehicles."
      ] },
    { title: "Loss of species or other problems",
      q: "Some people say that the main environmental problem of our time is the loss of particular species of plants and animals. Others say that there are more important environmental problems. Discuss both views and give your opinion.",
      plan: "Body 1 = ecosystems depend on biodiversity · Body 2 = pollution harms humans and causes species loss + I agree",
      paras: [
        "Some people argue that the loss of plant and animal species is the most serious environmental problem today because every ecosystem depends on biodiversity. However, I believe that air and water pollution are more important problems because they directly harm human health and are also one of the causes of species loss.",
        "Those who see species loss as the main problem point out that all living things depend on one another. When one species disappears, the animals that eat it and the plants it helps to grow are also affected, and the whole ecosystem can become unstable. Humans are part of these systems too, so the loss of species can eventually threaten our own food supply. For example, bees pollinate many of the fruits and vegetables that people eat, and a sharp fall in bee populations could reduce crop yields around the world.",
        "However, I agree with those who believe that pollution is a more urgent problem. Polluted air and water affect human health every day, causing diseases of the lungs, heart and stomach, particularly in crowded cities. Moreover, pollution is one of the reasons why species are disappearing in the first place, as chemicals and waste damage the rivers, seas and forests where animals live. This means that reducing pollution would protect both people and wildlife at the same time. For instance, plastic waste in the oceans kills large numbers of seabirds, turtles and fish every year, while smog in cities such as Delhi causes serious breathing problems for millions of residents.",
        "In conclusion, although the loss of species is a serious threat because ecosystems depend on biodiversity, I believe pollution is the more important problem, since it harms human health directly and also contributes to the disappearance of species."
      ] },
    { title: "Longer prison sentences or other ways",
      q: "Some people think that the best way to reduce crime is to give longer prison sentences. Others, however, believe there are better alternative ways of reducing crime. Discuss both views and give your opinion.",
      plan: "Body 1 = fear of punishment deters crime · Body 2 = education and training tackle the causes + I agree",
      paras: [
        "Some people believe that longer prison sentences are the most effective way to reduce crime because they discourage people from breaking the law. However, I believe that education and training programmes are a better solution because they deal with the reasons why people commit crimes.",
        "Those who support longer sentences argue that the fear of punishment stops people from committing crimes. If criminals know that they could spend many years in prison, they are more likely to think carefully before breaking the law. In addition, while dangerous offenders are in prison, they cannot harm the public. As a result, society is kept safer, at least for the length of their sentence. For example, some countries give very long sentences for drug trafficking in order to send a strong message to anyone thinking of becoming involved.",
        "However, I agree with those who believe there are better ways to reduce crime. Many people commit crimes because they are poor, unemployed or poorly educated, and a longer prison sentence does nothing to change these conditions. In fact, prisoners often leave prison with no new skills and a criminal record, which makes it even harder for them to find honest work. Education and job training, both in prison and in poor communities, give people a realistic alternative to crime. For instance, Norway focuses on education and job training for prisoners rather than harsh punishment, and it has one of the lowest reoffending rates in the world.",
        "In conclusion, although longer prison sentences may discourage some people from committing crimes, I believe education and training are a better way to reduce crime because they address the reasons why people break the law."
      ] }
  ],
  vocabModels: [
    ["master their own language","নিজের ভাষা ভালোভাবে আয়ত্ত করা"],["learn more systematically","আরও নিয়মতান্ত্রিকভাবে শেখা"],
    ["develop clear pronunciation","স্পষ্ট উচ্চারণ গড়ে তোলা"],["difficult circumstances","কঠিন পরিস্থিতি"],
    ["a regular income","নিয়মিত আয়"],["there is no guarantee of…","… এর কোনো নিশ্চয়তা নেই"],
    ["an economic downturn","অর্থনৈতিক মন্দা"],["open new opportunities","নতুন সুযোগ তৈরি করা"],
    ["carry large numbers of passengers","বিপুল যাত্রী বহন করা"],["compete for limited space","সীমিত জায়গার জন্য প্রতিযোগিতা"],
    ["a more practical solution","আরও বাস্তবসম্মত সমাধান"],["every ecosystem depends on biodiversity","প্রতিটি বাস্তুতন্ত্র জীববৈচিত্র্যের ওপর নির্ভরশীল"],
    ["threaten our food supply","খাদ্য সরবরাহ হুমকিতে ফেলা"],["in the first place","মূলত / শুরুতেই"],
    ["the fear of punishment","শাস্তির ভয়"],["a realistic alternative to crime","অপরাধের বাস্তব বিকল্প"],
    ["reoffending rates","পুনরায় অপরাধের হার"],["address the reasons why…","… এর কারণগুলোর সমাধান করা"]
  ],
  language: [
    ["Some people believe that…, while others argue that…","কেউ মনে করেন…, আবার কেউ বলেন…"],
    ["Those who support … argue that…","যারা … সমর্থন করেন তারা বলেন…"],
    ["Supporters of … point out that…","… এর সমর্থকরা দেখান যে…"],
    ["People who prefer … argue that…","যারা … পছন্দ করেন তাদের যুক্তি…"],
    ["However, I agree with those who believe that…","তবে আমি তাদের সাথে একমত যারা মনে করেন…"],
    ["I believe that … is the better / more practical option because…","আমি মনে করি … ভালো বিকল্প, কারণ…"],
    ["By contrast, / On the other hand, …","অন্যদিকে"],
    ["In conclusion, although…, I believe…","উপসংহারে, যদিও…, আমি মনে করি…"]
  ],
  practice: [
    {q:"Some people think that children should start school at a very early age, while others believe they should not begin until they are at least seven. Discuss both views and give your opinion.", t:"Education"},
    {q:"Some people believe that it is better to live in a big city, while others prefer to live in the countryside. Discuss both views and give your opinion.", t:"Cities"},
    {q:"Some people think governments should spend money on the arts, while others believe this money should go to health and education. Discuss both views and give your opinion.", t:"Government"},
    {q:"Some people believe that success in life comes from hard work, while others think that luck and family background are more important. Discuss both views and give your opinion.", t:"Society"},
    {q:"Some people think that students should study at home using the internet, while others believe they should attend school. Discuss both views and give your opinion.", t:"Education"},
    {q:"Some people believe that the main purpose of prisons is to punish criminals, while others think it should be to educate them. Discuss both views and give your opinion.", t:"Crime"},
    {q:"Some people prefer to work for a large company, while others would rather work for a small company. Discuss both views and give your opinion.", t:"Work"},
    {q:"Some people think that parents should teach children how to be good members of society, while others believe that school is the best place for this. Discuss both views and give your opinion.", t:"Children"},
    {q:"Some people say that technology has made our lives more complicated, while others believe it has made life easier. Discuss both views and give your opinion.", t:"Technology"},
    {q:"Some people think that tourists should adapt to local customs, while others believe local people should accept visitors' behaviour. Discuss both views and give your opinion.", t:"Tourism"},
    {q:"Some people believe that zoos are cruel and should be closed, while others think they help to protect endangered animals. Discuss both views and give your opinion.", t:"Environment"},
    {q:"Some people think that news media should focus on good news, while others believe it is important to report problems. Discuss both views and give your opinion.", t:"Media"},
    {q:"Some people believe that team sports teach children more than individual sports. Others disagree. Discuss both views and give your opinion.", t:"Children"},
    {q:"Some people think that young people should be free to choose their own careers, while others believe parents should guide their choices. Discuss both views and give your opinion.", t:"Family"},
    {q:"Some people think that the government should provide housing for those who cannot afford it, while others believe people should be responsible for their own housing. Discuss both views and give your opinion.", t:"Government"},
    {q:"Some people argue that it is more important to save money for the future, while others believe it is better to enjoy money now. Discuss both views and give your opinion.", t:"Society"},
    {q:"Some people believe that exams are the best way to assess students, while others prefer continuous assessment through coursework. Discuss both views and give your opinion.", t:"Education"},
    {q:"Some people think that international aid helps developing countries, while others believe it makes them dependent. Discuss both views and give your opinion.", t:"Globalisation"},
    {q:"Some people believe that it is better to buy locally produced food, while others think imported food gives consumers more choice. Discuss both views and give your opinion.", t:"Environment"},
    {q:"Some people think that artificial intelligence will create more jobs than it destroys, while others believe it will lead to widespread unemployment. Discuss both views and give your opinion.", t:"Technology"}
  ]
},

/* =========================================================== PROBLEM / SOLUTION */
{
  id: "problem", label: "Cause / Problem + Solution", bn: "কারণ / সমস্যা + সমাধান",
  tagline: "Explain one main cause (or problem) clearly, then one solution that fixes it.",
  signals: ["What are the causes? What can be done?", "What problems does this cause? What solutions can you suggest?", "Why is this happening? How can it be solved?"],
  roles: ["Cause", "Solution"],
  plan: [["a","Main cause / problem → Body 1",""],["b","Main solution (who + what) → Body 2",""]],
  paragraphs: [
    ["Introduction", "Paraphrase the trend + the main cause (or problem) + the main solution."],
    ["Body 1", "One cause / problem: Point → Explain (how it creates the problem) → Example."],
    ["Body 2", "One solution that fixes THAT cause: who does it + how it works → Example."],
    ["Conclusion", "In conclusion + cause + solution again."]
  ],
  introTpl: "[The trend in new words: X is becoming increasingly serious / A growing number of…]. The main cause is [cause], and the most effective solution is for [governments / schools / parents] to [action].",
  bodyTpl: "Body 1: The main reason why [problem] is that… · Body 2: The most effective way to address this problem is to…",
  conclTpl: "In conclusion, [problem] mainly because [cause]. [Who] can solve this by [action], which would [result].",
  tips: [
    "Solution অবশ্যই Body 1-এর cause-কে সমাধান করবে।",
    "একটা cause আর একটা solution ভালোভাবে ব্যাখ্যা করাই যথেষ্ট, প্রশ্নে 'causes' বহুবচন থাকলেও।",
    "Solution-এ কে করবে বলো: governments, schools, parents, companies।",
    "Cause আর solution একই প্যারাগ্রাফে মিশিয়ে ফেলবে না।"
  ],
  models: [
    { title: "Traffic congestion",
      q: "In many cities, traffic congestion is getting worse. What are the causes of this problem, and what measures could be taken to solve it?",
      plan: "Body 1 = too many private cars · Body 2 = cheap, reliable public transport",
      paras: [
        "Traffic jams are becoming increasingly serious in many urban areas. The main cause is the growing number of private cars on the roads, and the most effective solution is for governments to invest in cheap and reliable public transport.",
        "The main reason for worsening congestion is that more people now own and drive their own cars. As incomes rise, many families can afford a car for the first time, and they see it as more comfortable and convenient than crowded buses. However, city roads were not designed for so many vehicles, and each car usually carries only one or two people. As a result, the roads fill up, especially during the morning and evening rush hours, and journeys that should take minutes can take more than an hour. For example, in Dhaka, the number of private cars has increased rapidly in recent years, and commuters often spend several hours a day stuck in traffic.",
        "The most effective solution is to provide public transport that people actually want to use. If buses and trains are cheap, frequent and comfortable, many drivers will leave their cars at home, because public transport will be faster and less stressful than driving. Governments can also give buses their own lanes so that they are not delayed by other traffic. This would reduce the number of cars on the road and make journeys quicker for everyone. For instance, London has an extensive network of buses and Underground trains, and most people who work in the city centre travel there by public transport rather than by car.",
        "In conclusion, traffic congestion is worsening mainly because more people are driving private cars. Governments can solve this by investing in affordable and reliable public transport, which would encourage people to leave their cars at home."
      ] },
    { title: "Rising childhood obesity",
      q: "In many countries, the number of overweight children is increasing. What are the causes of this, and what can be done to solve the problem?",
      plan: "Body 1 = processed food and sugary drinks · Body 2 = tax on sugary food and drinks",
      paras: [
        "In many parts of the world, a growing number of children are overweight. The main cause is a diet high in processed food and sugary drinks, and the most effective solution is for governments to tax these products so that healthier options become more attractive.",
        "The main reason why children are gaining weight is that they eat too much processed food. Products such as crisps, biscuits and fizzy drinks are cheap, easy to find and heavily advertised, so children consume them every day. Many parents also work long hours and have little time to cook, so they rely on ready meals and fast food, which contain large amounts of fat, salt and sugar. Because children's bodies cannot use all this extra energy, it is stored as fat. For example, a single can of a typical fizzy drink contains several teaspoons of sugar, and many children drink more than one can a day.",
        "The most effective way to address this problem is to tax unhealthy food and drinks. A higher price would discourage families from buying these products regularly, while the money raised could be spent on healthy school meals or sports facilities. A tax also encourages manufacturers to reduce the amount of sugar in their products so that they can avoid paying it. As a result, children would consume less sugar without needing to change their habits completely. For instance, after the United Kingdom introduced a tax on sugary soft drinks, many companies reduced the sugar content of their drinks.",
        "In conclusion, more children are becoming overweight mainly because their diets contain too much processed food and sugar. Governments can tackle this by taxing unhealthy products, which would make healthier choices cheaper and encourage companies to make their products healthier."
      ] },
    { title: "Richer and healthier but less happy",
      q: "In some countries, young people have become richer, healthier, and live longer but are less happy. What are the causes? What can be done to address this situation?",
      plan: "Body 1 = social media comparison and criticism · Body 2 = offline activities such as reading, meditation and volunteering",
      paras: [
        "In some countries, young people today are wealthier, healthier and expected to live longer than previous generations, yet many of them feel less happy. I believe the main cause is the pressure created by social media, and the most effective solution is to encourage young people to spend more time on offline activities such as reading, meditation and helping others.",
        "The main reason why many young people are unhappy is that social media makes them compare themselves with others all the time. Platforms such as Instagram and TikTok mostly show the best moments of other people's lives, such as expensive holidays and successful careers. As a result, young users often feel that their own lives are not good enough, even when they are comfortable and healthy. Social media can also expose them to harsh criticism from strangers. For example, many young content creators earn a good income from YouTube or TikTok, but they also receive a constant stream of negative comments, which can seriously damage their mental health.",
        "The most effective way to address this problem is to encourage meaningful offline activities. Reading books, practising meditation or prayer, and volunteering give people a sense of calm and purpose that money and good health alone cannot provide. Schools and families can support this by limiting screen time and setting aside regular time for these activities. For instance, students who join a reading club or volunteer at a local charity spend less time scrolling online and build real friendships, which makes them feel more connected and valued.",
        "In conclusion, young people are less happy mainly because social media pushes them to compare themselves with others and exposes them to online criticism. Encouraging offline activities such as reading, meditation and volunteering would help them feel calmer and more satisfied with their lives."
      ] }
  ],
  vocabModels: [
    ["traffic jams are becoming increasingly serious","যানজট ক্রমেই গুরুতর হচ্ছে"],["as incomes rise","আয় বাড়ার সাথে সাথে"],
    ["during the rush hours","ব্যস্ত সময়ে (অফিস যাতায়াতের সময়)"],["stuck in traffic","যানজটে আটকে"],
    ["cheap, frequent and comfortable","সস্তা, ঘনঘন ও আরামদায়ক"],["a diet high in processed food","প্রক্রিয়াজাত খাবারে ভরা খাদ্যাভ্যাস"],
    ["heavily advertised","ব্যাপকভাবে বিজ্ঞাপিত"],["rely on ready meals","তৈরি খাবারের ওপর নির্ভর করা"],
    ["discourage families from buying…","পরিবারকে কিনতে নিরুৎসাহিত করা"],["reduce the sugar content","চিনির পরিমাণ কমানো"],
    ["compare themselves with others","অন্যদের সাথে নিজেদের তুলনা করা"],["harsh criticism","কঠোর সমালোচনা"],
    ["damage their mental health","মানসিক স্বাস্থ্যের ক্ষতি করা"],["a sense of calm and purpose","প্রশান্তি ও উদ্দেশ্যের অনুভূতি"],
    ["limit screen time","স্ক্রিন টাইম সীমিত করা"],["give buses their own lanes","বাসের জন্য আলাদা লেন দেওয়া"]
  ],
  language: [
    ["The main cause of … is… / This is largely due to…","প্রধান কারণ… / মূলত … এর কারণে"],
    ["… leads to / results in …","… এর ফলে … হয়"],
    ["As a result, / Consequently, …","ফলে"],
    ["The most effective solution is for [governments] to…","সবচেয়ে কার্যকর সমাধান হলো [সরকার]…"],
    ["This problem could be tackled by + -ing…","এই সমস্যা … করে মোকাবিলা করা যায়"],
    ["address the issue / tackle the problem","সমস্যার সমাধানে কাজ করা"],
    ["raise awareness of… / introduce stricter laws","সচেতনতা বাড়ানো / কঠোর আইন চালু করা"],
    ["invest in… / provide incentives for…","বিনিয়োগ করা / প্রণোদনা দেওয়া"],
    ["If …, people would…","যদি…, তাহলে মানুষ… (সমাধানের ফল)"]
  ],
  practice: [
    {q:"Many young people today are unable to buy their own homes. What are the causes of this problem, and what can be done to solve it?", t:"Society"},
    {q:"In many countries, people are throwing away more food than ever before. Why is this happening? What can be done to reduce food waste?", t:"Environment"},
    {q:"Many students find it difficult to concentrate in class. What are the reasons for this, and how can the problem be solved?", t:"Education"},
    {q:"In many cities, air pollution is becoming a serious problem. What are the causes, and what measures can be taken to tackle it?", t:"Environment"},
    {q:"Fewer people are reading books for pleasure. What are the causes of this, and what can be done to encourage reading?", t:"Culture"},
    {q:"Many people feel stressed at work. What are the causes of work-related stress, and what can be done to reduce it?", t:"Work"},
    {q:"In some countries, the number of elderly people is increasing rapidly. What problems does this cause, and what solutions can you suggest?", t:"Society"},
    {q:"Many animal species are close to extinction. What are the causes, and what can be done to protect them?", t:"Environment"},
    {q:"Crime among teenagers is increasing in some areas. Why is this happening, and what can be done about it?", t:"Crime"},
    {q:"Many people do not get enough exercise. What are the reasons for this, and how can people be encouraged to be more active?", t:"Health"},
    {q:"In many countries, young people are leaving rural areas to live in cities. What problems does this cause, and how can they be solved?", t:"Cities"},
    {q:"Online bullying has become a serious problem among schoolchildren. What are the causes, and what can be done to prevent it?", t:"Technology"},
    {q:"The amount of plastic waste in the oceans is increasing. What are the causes of this problem, and what solutions can you suggest?", t:"Environment"},
    {q:"Many graduates cannot find jobs that match their qualifications. Why is this the case, and what can be done?", t:"Work"},
    {q:"Fewer young people are choosing to study science subjects at university. What are the reasons, and how can more students be encouraged?", t:"Education"},
    {q:"In many places, local languages are disappearing. What are the causes, and what can be done to protect them?", t:"Culture"},
    {q:"Many people spend more money than they earn and fall into debt. What are the causes, and what can be done to help them?", t:"Society"},
    {q:"Road accidents are increasing in many developing countries. What are the causes, and what measures can reduce them?", t:"Transport"},
    {q:"Many people today feel lonely, even though they live in crowded cities. What are the causes of this, and what can be done?", t:"Society"},
    {q:"In many workplaces, employees do not get enough sleep and are often tired at work. What are the causes, and what can employers do about it?", t:"Health"}
  ]
},

/* =========================================================== ADV / DISADV */
{
  id: "advdis", label: "Advantages vs disadvantages", bn: "সুবিধা বনাম অসুবিধা",
  tagline: "One main advantage, one main disadvantage, and a clear verdict on which is greater.",
  signals: ["Do the advantages outweigh the disadvantages?", "Do the disadvantages outweigh the advantages?", "What are the advantages and disadvantages?"],
  roles: ["Advantage", "Disadvantage"],
  plan: [["a","Main advantage → Body 1",""],["b","Main disadvantage (+ how it can be reduced) → Body 2",""],["v","Verdict: which is greater?","advantage outweighs disadvantage"]],
  paragraphs: [
    ["Introduction", "Paraphrase + I believe the main advantage, which is that…, outweighs the main disadvantage, which is that…"],
    ["Body 1", "Advantage: The greatest benefit of… is that… → Explain → Example."],
    ["Body 2", "Disadvantage: The main drawback is that… → Explain → Example → However, this problem can be reduced by…"],
    ["Conclusion", "In conclusion, although [disadvantage], I believe the advantages are greater because [advantage]."]
  ],
  introTpl: "[The trend in new words]. I believe the main advantage, which is that [advantage], outweighs the main disadvantage, which is that [disadvantage].",
  bodyTpl: "Body 1: The greatest benefit of [X] is that… · Body 2: The main drawback is that… However, this problem can be reduced by…",
  conclTpl: "In conclusion, although [X] can [disadvantage], I believe its advantages are greater because [advantage], and [disadvantage] can be managed by [solution].",
  tips: [
    "Intro-তে একটা advantage আর একটা disadvantage দুটোই লাগবে; 'disadvantage' singular।",
    "Body 2-এর শেষে ঝুঁকি কমানোর উপায় দিলে তোমার verdict প্রমাণ হয়।",
    "'What are the advantages and disadvantages?' প্রশ্নে verdict বাধ্যতামূলক নয়, তবে দিলে ক্ষতি নেই।",
    "যদি disadvantage বড় মনে হয়, intro-র দুই অংশ উল্টে দাও।"
  ],
  models: [
    { title: "Working from home",
      q: "More and more people are working from home instead of in an office. Do the advantages of this outweigh the disadvantages?",
      plan: "Body 1 = no commuting saves time and money · Body 2 = isolation, which can be reduced",
      paras: [
        "A growing number of employees now work from home rather than travelling to an office. I believe the main advantage, which is that workers save time and money by not commuting, outweighs the main disadvantage, which is that they may feel isolated from their colleagues.",
        "The greatest benefit of working from home is that employees no longer need to travel to work. In large cities, commuting by car or public transport can take one or two hours a day and cost a considerable amount in fuel or tickets. When people work from home, this time and money can be spent on their families, exercise or rest instead. As a result, many employees feel less tired and more productive during their working hours. For example, a worker in a busy city such as Paris or Dhaka who previously spent ten hours a week travelling can use that time to cook healthy meals or spend evenings with their children.",
        "The main drawback is that home workers may feel lonely and disconnected from their team. In an office, colleagues chat during breaks, share ideas informally and learn from one another, especially when new staff are learning the job. At home, these daily interactions disappear, which can affect both motivation and team spirit. However, this problem can be reduced quite easily. Video calls, team messaging apps and regular office days allow people to stay in contact while keeping most of the benefits of remote work. For instance, many companies now use a hybrid model, in which staff work from home for three days a week and meet in the office on the other two.",
        "In conclusion, although working from home can make employees feel isolated, I believe its advantages are greater, because saving time and money on commuting improves people's lives, and isolation can be managed with technology and occasional office days."
      ] },
    { title: "Online shopping replacing shops",
      q: "These days, more and more people are shopping online instead of in shops. Do the advantages of this development outweigh the disadvantages?",
      plan: "Body 1 = convenience and wider choice · Body 2 = local shops close, but many adapt",
      paras: [
        "Many people now buy goods on the internet rather than visiting shops in person. I believe the main advantage, which is that online shopping is more convenient and offers a wider choice of products, outweighs the main disadvantage, which is that some local shops are forced to close.",
        "The biggest benefit of online shopping is that customers can buy almost anything from home at any time. Instead of travelling to several shops to compare products and prices, they can do this in a few minutes on their phone and have the goods delivered to their door. This is especially valuable for people who live far from large towns, as well as for elderly or disabled people who find it difficult to travel. For example, a family in a small village can order the same books, electronics and clothes that are available to people living in a capital city.",
        "The main disadvantage is that traditional shops lose customers, and some of them close down. When this happens, shop workers lose their jobs, and town centres can become empty and less lively. This is a real concern for local communities. However, many shop owners are adapting rather than disappearing. By selling their products through their own websites or social media pages, small businesses can now reach customers far beyond their own town. For instance, many small clothing and food businesses in Bangladesh take orders through Facebook pages and deliver across the country.",
        "In conclusion, although online shopping has caused some local shops to close, I believe its advantages outweigh this problem, because it gives customers greater convenience and choice, and many small businesses are using the internet to grow."
      ] },
    { title: "International tourism",
      q: "International tourism has brought enormous benefits to many places. At the same time, there is concern about its impact on local inhabitants and the environment. Do the disadvantages of international tourism outweigh the advantages?",
      plan: "Body 1 = jobs and income · Body 2 = environmental damage, which can be controlled",
      paras: [
        "International tourism has brought economic growth to many destinations, but it has also raised concerns about its effects on local people and nature. I believe the main advantage, which is the jobs and income it creates, outweighs the main disadvantage, which is the damage it can cause to the environment.",
        "The most important benefit of tourism is that it provides work and money for local communities. Foreign visitors spend money on hotels, restaurants, transport, guided tours and souvenirs, and each of these businesses needs local staff. This income allows families to improve their living standards and send their children to school. In addition, governments collect taxes from the tourism industry, which can be spent on roads, hospitals and other public services. For example, tourism is one of the largest sources of income in Thailand, supporting millions of jobs across the country.",
        "The main drawback is that large numbers of tourists can damage the natural environment. Beaches become polluted with litter, coral reefs are harmed by boats and swimmers, and hotels use large amounts of water in places where it is scarce. If this continues, the attractions that bring visitors in the first place may be destroyed. However, this damage can be controlled through careful management, such as limiting visitor numbers and protecting fragile areas. For instance, Thailand closed Maya Bay to tourists for several years so that its coral could recover, and it reopened with strict limits on the number of daily visitors.",
        "In conclusion, although international tourism can harm the environment, I believe its advantages are greater, because it creates jobs and income for local people, and its environmental impact can be reduced through sensible rules."
      ] },
    { title: "Online banking (your practice question)",
      q: "More and more people are using online banking instead of visiting a bank. Do the advantages of this outweigh the disadvantages?",
      plan: "Body 1 = saves time · Body 2 = phishing risk, reduced by OTP and two-step verification",
      paras: [
        "A growing number of customers now use internet banking rather than visiting a bank. I believe the main advantage, which is that people do not need to wait in long queues, outweighs the main disadvantage, which is that online banking may expose customers to fraud and hacking.",
        "The greatest benefit of online banking is that it saves customers a great deal of time. In the past, even a simple task such as paying a bill meant travelling to a branch during office hours and waiting in a long queue. With internet banking, customers can complete the same tasks on their phone in a few minutes, at any time of the day or night. As a result, they no longer need to take time off work, and they can spend the time they save on their families or rest. For instance, many banks now allow customers to transfer money, pay bills and open a new account through a mobile app.",
        "However, the main drawback of online banking is the risk of fraud. Criminals often send customers messages that appear to come from their bank and ask them to log in through a link. This link leads to a fake website that looks almost identical to the real one, so customers may enter their password without realising, and the criminals can then empty their accounts. For example, many people have received fake text messages claiming that their account has been blocked. Nevertheless, this risk can be greatly reduced, because most banks now use one-time passwords and two-step verification.",
        "In conclusion, although online banking can expose customers to fraud, I believe its advantages are greater because it saves people a great deal of time, and the risk can be reduced through simple security measures."
      ] }
  ],
  vocabModels: [
    ["save time and money by not commuting","যাতায়াত না করে সময় ও টাকা বাঁচানো"],["more productive","বেশি কর্মক্ষম"],
    ["feel isolated from colleagues","সহকর্মীদের থেকে বিচ্ছিন্ন বোধ করা"],["team spirit","দলগত মনোভাব"],
    ["a hybrid model","মিশ্র পদ্ধতি (বাড়ি + অফিস)"],["a wider choice of products","পণ্যের বেশি বিকল্প"],
    ["delivered to their door","দরজায় পৌঁছে দেওয়া"],["forced to close","বন্ধ হতে বাধ্য হওয়া"],
    ["adapting rather than disappearing","হারিয়ে না গিয়ে খাপ খাইয়ে নেওয়া"],["reach customers far beyond their town","শহরের বাইরের গ্রাহকের কাছে পৌঁছানো"],
    ["improve living standards","জীবনযাত্রার মান উন্নত করা"],["one of the largest sources of income","আয়ের অন্যতম বড় উৎস"],
    ["where water is scarce","যেখানে পানি দুষ্প্রাপ্য"],["careful management","সতর্ক ব্যবস্থাপনা"],
    ["expose customers to fraud","গ্রাহককে প্রতারণার ঝুঁকিতে ফেলা"],["two-step verification","দুই ধাপের যাচাই"]
  ],
  language: [
    ["The greatest / biggest benefit of … is that…","… এর সবচেয়ে বড় সুবিধা হলো…"],
    ["The main drawback / disadvantage is that…","প্রধান অসুবিধা হলো…"],
    ["… outweighs …","… এর গুরুত্ব … এর চেয়ে বেশি"],
    ["However, this problem can be reduced by…","তবে এই সমস্যা … দিয়ে কমানো যায়"],
    ["This is a real concern. However, …","এটা সত্যিকারের দুশ্চিন্তা। তবে…"],
    ["On balance, the benefits are greater.","সব দিক বিবেচনায় সুবিধাই বেশি।"],
    ["Although … can …, I believe its advantages are greater because…","যদিও … হতে পারে, আমি মনে করি সুবিধাই বেশি, কারণ…"]
  ],
  practice: [
    {q:"More and more people are using cashless payment methods instead of cash. Do the advantages of this outweigh the disadvantages?", t:"Technology"},
    {q:"Many students now take a gap year between school and university. Do the advantages of this outweigh the disadvantages?", t:"Education"},
    {q:"Some companies allow employees to choose their own working hours. What are the advantages and disadvantages of this?", t:"Work"},
    {q:"In some countries, many young adults continue to live with their parents after they finish their education. Do the advantages outweigh the disadvantages?", t:"Family"},
    {q:"Robots and artificial intelligence are increasingly used in the workplace. Do the advantages of this outweigh the disadvantages?", t:"Technology"},
    {q:"Many people now choose to buy second-hand clothes and furniture. What are the advantages and disadvantages of this?", t:"Environment"},
    {q:"More people are choosing to study online rather than attend university in person. Do the advantages outweigh the disadvantages?", t:"Education"},
    {q:"New technologies change the way children spend their free time. Do the advantages of these changes outweigh the disadvantages?", t:"Children", tried:true},
    {q:"Many people now use smartphone apps and smartwatches to track their health, such as their daily steps, sleep and heart rate. Do the advantages of this development outweigh the disadvantages?", t:"Health", tried:true},
    {q:"More and more people are using online banking instead of visiting a bank. Do the advantages of this outweigh the disadvantages?", t:"Technology", tried:true},
    {q:"Some cities are building very tall buildings. Do the advantages of this outweigh the disadvantages?", t:"Cities"},
    {q:"Many children now have a mobile phone from an early age. Do the advantages of this outweigh the disadvantages?", t:"Children"},
    {q:"Many people now get their news from social media rather than from newspapers or television. Do the advantages outweigh the disadvantages?", t:"Media"},
    {q:"Some schools are replacing printed textbooks with tablets. Do the advantages of this outweigh the disadvantages?", t:"Education"},
    {q:"Large international sports events such as the Olympic Games are held in different countries. Do the advantages for the host country outweigh the disadvantages?", t:"Society"},
    {q:"More people are choosing to live in small apartments in city centres rather than houses in the suburbs. Do the advantages outweigh the disadvantages?", t:"Cities"},
    {q:"Many businesses now hold meetings online instead of in person. Do the advantages of this outweigh the disadvantages?", t:"Work"},
    {q:"In many countries, English is taught as a compulsory subject from primary school. Do the advantages of this outweigh the disadvantages?", t:"Education"},
    {q:"Some people choose to start their own business rather than work for an employer. What are the advantages and disadvantages of this?", t:"Work"},
    {q:"Many people now use self-service machines in supermarkets and airports instead of dealing with staff. Do the advantages outweigh the disadvantages?", t:"Technology"}
  ]
},

/* =========================================================== DOUBLE */
{
  id: "double", label: "Double question", bn: "দুই প্রশ্ন / Positive-negative",
  tagline: "Answer each question directly, then give each answer its own body paragraph.",
  signals: ["Why is this? Is it a positive or negative development?", "Why…? What problems…?", "How has…? Do you think this is positive or negative?"],
  roles: ["Answer to Q1", "Answer to Q2"],
  plan: [["a","Answer to question 1 → Body 1",""],["b","Answer to question 2 → Body 2",""]],
  paragraphs: [
    ["Introduction", "Paraphrase + This is mainly because [answer 1], and I believe it is a [positive / negative] development because [answer 2]."],
    ["Body 1", "Answer to question 1 only: Point → Explain → Example."],
    ["Body 2", "Answer to question 2 only: Point → Explain → Example."],
    ["Conclusion", "In conclusion + answer 1 + answer 2 (same reasons as the introduction)."]
  ],
  introTpl: "[The trend in new words]. This is mainly because [answer to question 1], and I believe it is a [positive / negative] development because [reason].",
  bodyTpl: "Body 1: The main reason why [trend] is that… · Body 2: I believe this is a [positive / negative] development because…",
  conclTpl: "In conclusion, [trend] mainly because [answer 1]. I believe this is a [positive / negative] development, as [reason].",
  tips: [
    "লেখার আগে দুই লাইনে plan: Q1 → Body 1, Q2 → Body 2।",
    "দুটো body দিয়ে একটা প্রশ্নের উত্তর দেবে না। তোমার global fashion essay-তে এই ভুল হয়েছিল।",
    "Intro, body আর conclusion-এ একই কারণ থাকবে।",
    "শুধু 'positive or negative?' প্রশ্ন হলে দুটো body-তেই দুটো কারণ দাও (Opinion-এর মতো)।"
  ],
  models: [
    { title: "Young people and smartphones",
      q: "Many young people today spend several hours a day on their smartphones. Why is this the case? Is this a positive or negative development?",
      plan: "Body 1 = social life and entertainment are online · Body 2 = negative: less sleep and face-to-face contact",
      paras: [
        "Many young people now spend several hours every day using their smartphones. This is mainly because their social lives and entertainment have moved online, and I believe it is a negative development because it reduces the time they spend sleeping and meeting people face to face.",
        "The main reason why young people use their phones so much is that their friendships and free time now depend on them. Teenagers arrange meetings, share news and keep in touch through messaging apps and social media, so a young person who is not online may feel left out. At the same time, phones provide endless entertainment, including videos, games and music, all available at any moment. As a result, it is very easy to spend hours on a phone without noticing. For example, many students check their group chats as soon as they wake up and continue watching short videos until late at night.",
        "I believe this is a negative development because heavy phone use takes time away from sleep and real relationships. Young people need plenty of sleep to concentrate at school and stay healthy, but scrolling late into the night often delays bedtime by an hour or more. Moreover, time spent on a screen is time not spent talking to family or friends in person, which is important for developing social skills. For instance, it is now common to see a family sitting together at dinner while each member looks at their own phone instead of talking.",
        "In conclusion, young people spend so much time on smartphones because their social lives and entertainment are online. I believe this trend is negative, as it reduces both their sleep and their face-to-face contact with others."
      ] },
    { title: "Choosing self-employment",
      q: "Nowadays, many people choose to be self-employed rather than to work for a company or organisation. Why might this be the case? What could be the disadvantages of being self-employed?",
      plan: "Body 1 = freedom to make their own decisions · Body 2 = no experienced colleagues to learn from",
      paras: [
        "Many people today choose to work for themselves rather than for a company or organisation. This is mainly because they want the freedom to make their own decisions without a manager, but the main disadvantage is that they lose the chance to learn from experienced colleagues.",
        "The main reason why people become self-employed is that they want control over their own work. In a company, employees usually have to follow their manager's instructions, work fixed hours and accept decisions they may not agree with. Self-employed people, by contrast, can choose which projects to take, when to work and how much to charge. For many people, this independence is more satisfying than a regular salary. For example, many graphic designers and software developers now work as freelancers, choosing clients from around the world through online platforms.",
        "However, the biggest disadvantage of self-employment is that there is no one to learn from. In a company, junior staff work alongside experienced colleagues who can answer their questions, check their work and share practical knowledge gained over many years. Self-employed people, on the other hand, must learn mostly through trial and error, which can be slow and expensive. A mistake that a senior colleague could have prevented in minutes may cost a freelancer a client. For instance, a newly qualified engineer in a large firm receives regular feedback from senior engineers, whereas an engineer working alone has to discover problems for themselves.",
        "In conclusion, people choose self-employment mainly because it gives them the freedom to make their own decisions. However, its main drawback is that they miss the opportunity to learn from more experienced colleagues."
      ] },
    { title: "Global fashion (your practice question)",
      q: "Many aspects of the way people dress today are influenced by global fashion trends. How has global fashion become such a strong influence on people's lives? Do you think this is a positive or negative development?",
      plan: "Body 1 = social media spreads celebrity styles quickly · Body 2 = positive: stylish, affordable clothes for everyone",
      paras: [
        "Today, global fashion trends shape many aspects of how people dress. This is mainly because social media allows styles worn by celebrities to spread around the world within days, and I believe this is a positive development because it gives ordinary people easy access to stylish and affordable clothes.",
        "The main reason why global fashion has become so influential is social media. Celebrities and influencers on platforms such as Instagram and TikTok share photos of their outfits with millions of followers every day. Many young people want to look like the people they admire, and some also hope to build their own following and earn money from promotions. As a result, a style worn by a famous person in one country can be copied by young people on the other side of the world within a few days. For example, international brands such as Zara quickly produce affordable versions of outfits that appear online, so these looks soon become common in shops and online stores worldwide.",
        "I believe this is a positive development because it makes it easier for people to dress well. In the past, fashionable clothes were often expensive or only available in large cities. Now, global brands and online shops offer similar designs at lower prices and deliver them to almost any town. This is especially helpful for busy professionals, such as doctors and bank officers who often work from dawn to dusk, because they can order smart, up-to-date clothes online without spending hours in shopping centres.",
        "In conclusion, global fashion has become a strong influence mainly because social media spreads trends quickly from celebrities to ordinary people. I believe this is a positive development, as it allows people everywhere to find stylish and affordable clothes with little time and effort."
      ] },
    { title: "Studying abroad",
      q: "Increasing numbers of students are choosing to study at universities in other countries. Why is this happening? Is it a positive or negative development?",
      plan: "Body 1 = better career opportunities · Body 2 = positive: independence and international experience",
      paras: [
        "More and more students are now attending universities outside their own country. This is mainly because a foreign degree can lead to better career opportunities, and I believe it is a positive development because students gain independence and international experience that benefit them throughout their lives.",
        "The main reason why students go abroad is that they believe it will improve their career prospects. Universities in countries such as the United Kingdom, Australia and Germany are well known around the world, and employers often value their degrees highly. Some students also want to study subjects or use laboratories that are not available in their home country. As a result, they see studying abroad as an investment in their future. For example, many engineering students from Bangladesh and India apply to German universities because of their strong reputation in technical subjects.",
        "I believe this trend is positive because living in another country teaches students skills that a classroom alone cannot. Away from their families, they must manage their own money, solve everyday problems and adapt to a new culture, which makes them more independent and confident. They also learn to work with people from many different backgrounds, which is an important skill in today's global workplace. For instance, students on the European Erasmus programme often say that their time abroad improved their language skills and helped them build friendships across many countries.",
        "In conclusion, students increasingly study abroad because they hope it will lead to better careers. I believe this is a positive development, as it helps young people become more independent and gain valuable international experience."
      ] },
    { title: "More people living alone (one question)",
      q: "In many countries, more and more people are choosing to live alone. Is this a positive or negative development?",
      plan: "Body 1 = loneliness and mental health · Body 2 = more pressure on housing",
      roles: ["Introduction", "Reason 1", "Reason 2", "Conclusion"],
      paras: [
        "In many parts of the world, a growing number of people now live on their own. I believe this is a negative development because it can lead to loneliness, and it increases the demand for housing in cities that are already crowded.",
        "The main reason I see this trend as negative is that living alone can make people lonely. Without family members or housemates to talk to at the end of the day, some people can go for days without a real conversation, particularly if they work from home or are elderly. Over time, this lack of contact can affect both their mental and physical health. It also means that no one is nearby to help if they fall ill or have an accident. For example, the United Kingdom appointed a minister for loneliness in 2018, which shows how seriously the government views the problem.",
        "In addition, more people living alone puts greater pressure on housing. When people share a home, several of them use one kitchen, one bathroom and one set of heating and electricity. When each person lives separately, many more homes are needed for the same population. In cities where land is limited, this increases demand and pushes up rents for everyone, including families. For instance, in many large European cities, small one-bedroom flats are among the most sought-after and expensive types of housing.",
        "In conclusion, I believe the increase in people living alone is a negative development. It can leave people lonely and without support, and it makes housing shortages in crowded cities even worse."
      ] }
  ],
  vocabModels: [
    ["their social lives have moved online","সামাজিক জীবন অনলাইনে চলে গেছে"],["feel left out","বাদ পড়ে যাওয়ার অনুভূতি"],
    ["endless entertainment","অফুরন্ত বিনোদন"],["delay bedtime","ঘুমাতে দেরি করা"],
    ["face to face / in person","সামনাসামনি / সরাসরি"],["control over their own work","নিজের কাজের ওপর নিয়ন্ত্রণ"],
    ["through trial and error","ভুল করে করে শেখা"],["improve their career prospects","ক্যারিয়ারের সম্ভাবনা বাড়ানো"],
    ["an investment in their future","ভবিষ্যতের জন্য বিনিয়োগ"],["adapt to a new culture","নতুন সংস্কৃতিতে খাপ খাওয়ানো"],
    ["spread around the world within days","কয়েক দিনেই বিশ্বজুড়ে ছড়িয়ে পড়া"],["stylish and affordable","স্টাইলিশ ও সাশ্রয়ী"],
    ["work from dawn to dusk","সকাল থেকে সন্ধ্যা পর্যন্ত কাজ করা"],["put greater pressure on housing","বাসস্থানের ওপর বাড়তি চাপ"],
    ["push up rents","ভাড়া বাড়িয়ে দেওয়া"],["sought-after","চাহিদাসম্পন্ন"]
  ],
  language: [
    ["The main reason why … is that…","… এর প্রধান কারণ হলো…"],
    ["This is mainly because…","এর মূল কারণ…"],
    ["I believe this is a positive / negative development because…","আমি মনে করি এটা ইতিবাচক / নেতিবাচক, কারণ…"],
    ["This trend is positive / negative, as…","এই প্রবণতা ইতিবাচক / নেতিবাচক, কারণ…"],
    ["The main effect of this is that…","এর প্রধান প্রভাব হলো…"],
    ["However, the biggest disadvantage of … is that…","তবে … এর সবচেয়ে বড় অসুবিধা হলো…"],
    ["In conclusion, … mainly because…. I believe this is…, as…","উপসংহারে দুটো উত্তরই আবার"]
  ],
  practice: [
    {q:"Many people today prefer to watch films at home rather than go to the cinema. Why is this? Is this a positive or negative development?", t:"Technology"},
    {q:"Many aspects of the way people dress today are influenced by global fashion trends. How has global fashion become such a strong influence on people's lives? Do you think this is a positive or negative development?", t:"Globalisation", tried:true},
    {q:"More and more people are choosing to keep pets. Why is this? Is it a positive or negative development?", t:"Society"},
    {q:"In many countries, people are getting married later in life than in the past. Why is this happening? Is this a positive or negative trend?", t:"Family"},
    {q:"Many people now change jobs several times during their careers. Why is this? Is it a positive or negative development?", t:"Work"},
    {q:"Fewer people today write letters by hand. Why is this the case? Is this a positive or negative development?", t:"Technology"},
    {q:"In some countries, more people are choosing to work part-time. What are the reasons for this? What are the effects on society?", t:"Work"},
    {q:"Many young people today want to become social media influencers. Why is this? Is this a positive or negative development?", t:"Media"},
    {q:"People are travelling abroad for holidays more than ever before. Why is this the case? What problems can it cause?", t:"Tourism"},
    {q:"Many children now spend less time outdoors than in the past. Why is this happening? What effects does this have on their development?", t:"Children"},
    {q:"More and more people are using artificial intelligence tools to help them write. Why is this? Is this a positive or negative development?", t:"Technology"},
    {q:"In many cities, people know very few of their neighbours. Why is this the case? What can be done to build stronger communities?", t:"Cities"},
    {q:"Many people are choosing to eat less meat. What are the reasons for this? Is it a positive or negative development?", t:"Health"},
    {q:"Many workers now have a long journey to work every day. What problems does this cause? What can be done to make commuting easier?", t:"Transport"},
    {q:"Some people spend large amounts of money on luxury brands. Why do people do this? Is it a good use of money?", t:"Society"},
    {q:"Many university graduates move abroad to work. Why is this happening? Is it a positive or negative development for their home countries?", t:"Globalisation"},
    {q:"In many towns, fewer people are shopping in local markets. Why is this? Is it a positive or negative development?", t:"Society"},
    {q:"Many young people today are more interested in their careers than in starting a family. Why is this? Is it a positive or negative development?", t:"Family"},
    {q:"Some people choose to live in a different country from their family. Why do they make this choice? What are the effects on the family?", t:"Family"},
    {q:"Many old buildings in cities are being replaced by modern ones. Why is this happening? Is it a positive or negative development?", t:"Cities"}
  ]
}
],

topics: [
  { name:"Education", bn:"শিক্ষা", items:[
    ["primary / secondary schooling","প্রাথমিক / মাধ্যমিক শিক্ষা"],["academic performance","পড়াশোনার ফলাফল"],["tuition fees","টিউশন ফি"],
    ["practical skills","হাতে-কলমে দক্ষতা"],["critical thinking","সমালোচনামূলক চিন্তা"],["rote learning","মুখস্থ বিদ্যা"],
    ["educational establishments","শিক্ষাপ্রতিষ্ঠান"],["gifted children","মেধাবী শিশু"],["selected on merit","মেধার ভিত্তিতে নির্বাচিত"],
    ["lifelong learning","আজীবন শিক্ষা"],["continuous assessment","নিরবচ্ছিন্ন মূল্যায়ন"],["outperform their peers","সহপাঠীদের চেয়ে ভালো করা"]]},
  { name:"Technology", bn:"প্রযুক্তি", items:[
    ["screen time","স্ক্রিনে কাটানো সময়"],["social media platforms","সামাজিক মাধ্যম"],["online safety","অনলাইন নিরাপত্তা"],
    ["cyberbullying","অনলাইনে হয়রানি"],["artificial intelligence","কৃত্রিম বুদ্ধিমত্তা"],["automation","যন্ত্রায়ন"],
    ["digital skills","ডিজিটাল দক্ষতা"],["access to information","তথ্যে প্রবেশাধিকার"],["personal data / privacy","ব্যক্তিগত তথ্য / গোপনীয়তা"],
    ["addictive","আসক্তিকর"],["technological advances","প্রযুক্তিগত অগ্রগতি"],["keep in touch","যোগাযোগ রাখা"]]},
  { name:"Health", bn:"স্বাস্থ্য", items:[
    ["a balanced diet","সুষম খাদ্য"],["processed food","প্রক্রিয়াজাত খাবার"],["a sedentary lifestyle","বসে থাকা জীবনযাপন"],
    ["obesity","স্থূলতা"],["mental health","মানসিক স্বাস্থ্য"],["physical activity","শারীরিক পরিশ্রম"],
    ["the health care system","স্বাস্থ্যসেবা ব্যবস্থা"],["preventive measures","প্রতিরোধমূলক ব্যবস্থা"],["life expectancy","গড় আয়ু"],
    ["a detrimental effect on","ক্ষতিকর প্রভাব"],["nutritional value","পুষ্টিগুণ"],["unwind after work","কাজের পর বিশ্রাম নেওয়া"]]},
  { name:"Environment", bn:"পরিবেশ", items:[
    ["carbon emissions","কার্বন নিঃসরণ"],["renewable energy","নবায়নযোগ্য শক্তি"],["fossil fuels","জীবাশ্ম জ্বালানি"],
    ["climate change","জলবায়ু পরিবর্তন"],["biodiversity","জীববৈচিত্র্য"],["plastic waste","প্লাস্টিক বর্জ্য"],
    ["air / water pollution","বায়ু / পানি দূষণ"],["endangered species","বিপন্ন প্রজাতি"],["deforestation","বন উজাড়"],
    ["recycle and reuse","পুনর্ব্যবহার"],["natural habitats","প্রাকৃতিক আবাসস্থল"],["energy consumption","শক্তি খরচ"]]},
  { name:"Work & business", bn:"কাজ ও ব্যবসা", items:[
    ["work-life balance","কাজ ও জীবনের ভারসাম্য"],["job security","চাকরির নিরাপত্তা"],["career prospects","ক্যারিয়ারের সম্ভাবনা"],
    ["a skilled workforce","দক্ষ কর্মীবাহিনী"],["remote work","দূর থেকে কাজ"],["unemployment","বেকারত্ব"],
    ["productivity","উৎপাদনশীলতা"],["job satisfaction","কাজে সন্তুষ্টি"],["self-employed","স্বনিয়োজিত"],
    ["a stable income","স্থিতিশীল আয়"],["professional competence","পেশাগত দক্ষতা"],["workplace harassment","কর্মক্ষেত্রে হয়রানি"]]},
  { name:"Crime & law", bn:"অপরাধ ও আইন", items:[
    ["commit a crime","অপরাধ করা"],["reoffend","আবার অপরাধ করা"],["rehabilitation","পুনর্বাসন"],
    ["a deterrent","প্রতিরোধক"],["a prison sentence","কারাদণ্ড"],["law enforcement","আইন প্রয়োগ"],
    ["juvenile crime","কিশোর অপরাধ"],["be held accountable for","… এর জন্য দায়ী থাকা"],["community service","সমাজসেবামূলক শাস্তি"],
    ["strict penalties","কঠোর শাস্তি"],["a criminal record","অপরাধের রেকর্ড"],["crime rates","অপরাধের হার"]]},
  { name:"Government & society", bn:"সরকার ও সমাজ", items:[
    ["public expenditure","সরকারি ব্যয়"],["allocate resources","সম্পদ বণ্টন করা"],["tax revenue","কর রাজস্ব"],
    ["public services","সরকারি সেবা"],["social inequality","সামাজিক বৈষম্য"],["raise awareness","সচেতনতা বাড়ানো"],
    ["introduce legislation","আইন প্রণয়ন করা"],["affordable housing","সাশ্রয়ী আবাসন"],["the public / private sector","সরকারি / বেসরকারি খাত"],
    ["a fundamental right","মৌলিক অধিকার"],["an ageing population","বয়স্ক জনসংখ্যা বৃদ্ধি"],["provide incentives","প্রণোদনা দেওয়া"]]},
  { name:"Media & advertising", bn:"গণমাধ্যম ও বিজ্ঞাপন", items:[
    ["target audience","লক্ষ্য দর্শক"],["persuade consumers","ক্রেতাকে প্ররোচিত করা"],["misleading information","বিভ্রান্তিকর তথ্য"],
    ["mass media","গণমাধ্যম"],["celebrity endorsement","তারকাদের দিয়ে প্রচার"],["influence public opinion","জনমতকে প্রভাবিত করা"],
    ["fake news","ভুয়া খবর"],["consumerism","ভোগবাদ"],["commercial interests","বাণিজ্যিক স্বার্থ"],
    ["informative programmes","তথ্যবহুল অনুষ্ঠান"],["go viral","দ্রুত ছড়িয়ে পড়া"],["exaggerated claims","অতিরঞ্জিত দাবি"]]},
  { name:"Transport & cities", bn:"যাতায়াত ও শহর", items:[
    ["traffic congestion","যানজট"],["public transport","গণপরিবহন"],["urban areas","শহরাঞ্চল"],
    ["infrastructure","অবকাঠামো"],["commute","যাতায়াত করা"],["rush hour","ব্যস্ত সময়"],
    ["urbanisation","নগরায়ণ"],["overcrowding","অতিরিক্ত ভিড়"],["pedestrian zones","পথচারী এলাকা"],
    ["reliable and affordable","নির্ভরযোগ্য ও সাশ্রয়ী"],["rural areas","গ্রামাঞ্চল"],["green spaces","সবুজ এলাকা"]]},
  { name:"Family & children", bn:"পরিবার ও শিশু", items:[
    ["upbringing","লালন-পালন"],["a role model","আদর্শ ব্যক্তি"],["parental guidance","বাবা-মায়ের নির্দেশনা"],
    ["peer pressure","সমবয়সীদের চাপ"],["working parents","কর্মজীবী বাবা-মা"],["the extended family","যৌথ পরিবার"],
    ["childcare","শিশু-যত্ন"],["the generation gap","প্রজন্মের ব্যবধান"],["spend quality time","মানসম্মত সময় কাটানো"],
    ["discipline","শৃঙ্খলা"],["independent","স্বাবলম্বী"],["supervise children","শিশুদের দেখাশোনা করা"]]},
  { name:"Globalisation & culture", bn:"বিশ্বায়ন ও সংস্কৃতি", items:[
    ["cultural identity","সাংস্কৃতিক পরিচয়"],["traditions and customs","ঐতিহ্য ও রীতিনীতি"],["globalisation","বিশ্বায়ন"],
    ["multinational companies","বহুজাতিক কোম্পানি"],["cultural diversity","সাংস্কৃতিক বৈচিত্র্য"],["local heritage","স্থানীয় ঐতিহ্য"],
    ["embrace other cultures","অন্য সংস্কৃতি গ্রহণ করা"],["international trade","আন্তর্জাতিক বাণিজ্য"],["a global village","বিশ্বগ্রাম"],
    ["lose its uniqueness","স্বকীয়তা হারানো"],["brain drain","মেধা পাচার"],["cultural exchange","সাংস্কৃতিক বিনিময়"]]},
  { name:"Tourism", bn:"পর্যটন", items:[
    ["a tourist destination","পর্যটন গন্তব্য"],["the local economy","স্থানীয় অর্থনীতি"],["mass tourism","গণপর্যটন"],
    ["environmental damage","পরিবেশের ক্ষতি"],["ecotourism","পরিবেশবান্ধব পর্যটন"],["local inhabitants","স্থানীয় বাসিন্দা"],
    ["seasonal jobs","মৌসুমি কাজ"],["preserve historic sites","ঐতিহাসিক স্থান সংরক্ষণ"],["souvenirs","স্মারক জিনিস"],
    ["limit visitor numbers","দর্শনার্থী সীমিত করা"],["living standards","জীবনযাত্রার মান"],["fragile areas","ভঙ্গুর এলাকা"]]}
]
};
