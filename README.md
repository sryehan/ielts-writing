# IELTS Writing Room

ব্যক্তিগত IELTS Writing অনুশীলনের ওয়েবসাইট। কোনো ইন্টারনেট বা সার্ভার লাগে না।

## কীভাবে খুলবে
- zip খুলে `index.html` ডাবল-ক্লিক করো (Task 2)। উপরের মেনু থেকে Task 1-এ যাও।
- অনলাইনে রাখতে চাইলে পুরো ফোল্ডারটা Netlify-তে drag-and-drop করো, অথবা তোমার সাইটের একটা সাব-ফোল্ডারে আপলোড করো (যেমন `sryehan.com/ielts`)।

## ভেতরে যা আছে
- **Task 2 (`index.html`)**: ৫ ধরনের প্রশ্ন। প্রতিটার Structure, ৩–৫টা Band 9 model, Vocabulary আর ২০টা practice প্রশ্ন। সাথে Topic vocabulary (১২টা বিষয়) আর My error list।
- **Task 1 (`task1.html`)**: Method (pyramid, ৯ ধাপ, checklist) আর ৭ ধরনের visual: line, bar, pie, table, mixed, map, process। প্রতিটার model, vocabulary আর practice চার্ট।
- **Practice window**: timer, word count, plan বক্স, checklist, আর "Copy for marking" (Claude-কে পাঠানোর জন্য)।

## মনে রাখো
- লেখা, plan আর "Done" চিহ্ন **শুধু এই ব্রাউজারেই** সেভ থাকে। অন্য ফোন বা কম্পিউটারে দেখা যাবে না, আর ব্রাউজারের data মুছলে মুছে যাবে।
- প্রশ্ন বা model যোগ করতে চাইলে `assets/task2-data.js` আর `assets/task1-data.js` এডিট করো।
- Task 1-এর সব চার্টের data অনুশীলনের জন্য বানানো, বাস্তব পরিসংখ্যান নয়।
