/* IELTS Writing Room — shared helpers: storage, DOM, writer, error list */
(function(){
'use strict';

/* ---------- storage (this browser only) ---------- */
var KEY = 'ielts-room-v1';
var mem = {drafts:{}, done:{}, plans:{}, ui:{}};
try {
  var raw = localStorage.getItem(KEY);
  if (raw) { var o = JSON.parse(raw); for (var k in mem) if (o && o[k]) mem[k] = o[k]; }
} catch (e) {}
var saveT = null;
function persist(){
  clearTimeout(saveT);
  saveT = setTimeout(function(){ try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) {} }, 150);
}
var Store = {
  get: function(k, id){ return mem[k][id]; },
  set: function(k, id, v){
    if (v === undefined || v === null || v === '' || v === false) delete mem[k][id]; else mem[k][id] = v;
    persist();
  },
  all: function(k){ return mem[k]; }
};

/* ---------- DOM helpers ---------- */
function h(tag, props){
  var e = document.createElement(tag);
  if (props) for (var key in props) {
    var v = props[key];
    if (v === null || v === undefined || v === false) continue;
    if (key === 'class') e.className = v;
    else if (key === 'html') e.innerHTML = v;
    else if (key.slice(0,2) === 'on') e.addEventListener(key.slice(2), v);
    else e.setAttribute(key, v === true ? '' : v);
  }
  var kids = Array.prototype.slice.call(arguments, 2);
  (function add(list){
    list.forEach(function(kid){
      if (kid === null || kid === undefined || kid === false) return;
      if (Array.isArray(kid)) return add(kid);
      e.appendChild(typeof kid === 'string' || typeof kid === 'number' ? document.createTextNode(String(kid)) : kid);
    });
  })(kids);
  return e;
}
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
function tpl(s){ return h('span', {class:'tpl', html: esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>')}); }
function words(t){ var m = String(t || '').trim().match(/\S+/g); return m ? m.length : 0; }
function bn(text){ return h('span', {class:'bn'}, text); }

function copyText(text){
  function fallback(){
    var ta = h('textarea', {style:'position:fixed;left:-9999px;top:0'});
    ta.value = text; document.body.appendChild(ta); ta.select();
    var ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
    ta.remove(); return ok;
  }
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(function(){ return true; }, function(){ return fallback(); });
  }
  return Promise.resolve(fallback());
}
function toast(msg){
  var t = document.querySelector('.toast');
  if (!t) { t = h('div', {class:'toast', role:'status'}); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._t); t._t = setTimeout(function(){ t.classList.remove('show'); }, 2000);
}
function theme(){
  var btn = document.getElementById('theme');
  if (!btn || btn._bound) return; btn._bound = true;
  btn.addEventListener('click', function(){
    var root = document.documentElement;
    var cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('ielts-theme', next); } catch (e) {}
  });
}

/* ---------- my repeated errors (from marked practice) ---------- */
var ERRORS = {
  grammar: [
    ['people thinks / people wants', 'people think / people want', 'People সবসময় plural, তাই verb-এ -s হবে না।'],
    ['technologies has changed', 'technologies have changed', 'Plural subject হলে plural verb।'],
    ['the number of cars are', 'the number of cars is', 'the number of = singular; a (growing) number of = plural।'],
    ['can causes / may causes', 'can cause / may cause', 'Modal (can, may, should, will)-এর পরে verb-এর base form।'],
    ['when they will compare', 'when they compare', 'when / if / before / after-এর পরে will বসে না।'],
    ['the main disadvantages, which is', 'the main disadvantage, which is', 'একটা হলে singular।'],
    ['a persons data', "a person's data", 'মালিকানা বোঝাতে apostrophe।'],
    ["don't / it's / can't", 'do not / it is / cannot', 'Formal essay-তে contraction নয়।'],
    ['shortage of money', 'a shortage of money', 'Singular countable noun-এর আগে a / the লাগবে।'],
    ['less visits', 'fewer visits', 'Countable noun-এ fewer, uncountable-এ less।'],
    ['rather than play', 'rather than playing', 'rather than / instead of / without + -ing।'],
    ['experience employee', 'experienced employees', '-ed adjective: experienced = অভিজ্ঞ।'],
    ['the loss of species are', 'the loss of species is', 'আসল subject খোঁজো (loss), সেটার সাথে verb মেলাও।'],
    ['It is cheap, people like it.', 'It is cheap, so people like it.', 'দুটো বাক্য শুধু comma দিয়ে জোড়া যায় না (comma splice)।'],
    ['Global trends provoke people', 'Global trends influence people', 'Provoke মানে রাগানো/উসকে দেওয়া। নিশ্চিত না হলে সহজ শব্দ লেখো।'],
    ['september, Humans, Global (মাঝখানে)', 'September, humans, global', 'মাসের নাম capital; বাক্যের মাঝে সাধারণ শব্দ small।']
  ],
  spelling: [
    ['teparature','temperature'],['prassure','pressure'],['protien','protein'],['ragular','regular'],
    ['wheather','whether'],['leasure','leisure'],['metarials','materials'],['maintainace','maintenance'],
    ['vehichles','vehicles'],['enviromental','environmental'],['polutions','pollution'],['bidiversity','biodiversity'],
    ['harrasement','harassment'],['sallary','salary'],['suffereing','suffering'],['begining','beginning'],
    ['memebers','members'],['popolar','popular'],['dicreased','decreased'],['fishing (online)','phishing'],
    ['meditration','meditation'],['budhism','Buddhism'],['wheares','whereas'],['angegement','engagement'],
    ['satisfiying','satisfying'],['loose (হারানো)','lose'],
    ['neccessary','necessary'],['goverment','government'],['accomodation','accommodation'],['oppurtunity','opportunity'],['seperate','separate'],['benificial','beneficial']
  ]
};

function errorsView(){
  var box = h('div', null);
  box.appendChild(h('div', {class:'card'},
    h('h3', null, 'Grammar mistakes I have made'),
    h('p', {class:'note bn'}, 'এগুলো তোমার practice থেকে নেওয়া। প্রতিটা লেখা শেষে এই তালিকা ধরে চেক করো।'),
    h('div', {class:'tscroll'},
      h('table', {class:'etable'},
        h('thead', null, h('tr', null, h('th', null, 'I wrote'), h('th', null, 'Correct'), h('th', null, 'Rule'))),
        h('tbody', null, ERRORS.grammar.map(function(r){
          return h('tr', null, h('td', {class:'bad'}, r[0]), h('td', {class:'good'}, r[1]), h('td', {class:'bn'}, r[2]));
        }))
      )
    )
  ));
  box.appendChild(h('div', {class:'card'},
    h('h3', null, 'Spelling: mostly vowels inside words'),
    h('p', {class:'note bn'}, 'শেষ ৩ মিনিটে লম্বা শব্দগুলোর vowel (a, e, i, o, u) আলাদা করে দেখো। শেষের কয়েকটা IELTS-এর সাধারণ ভুল।'),
    h('div', {class:'spell'}, ERRORS.spelling.map(function(s){ return h('span', null, h('s', null, s[0]), '→ ', h('b', null, s[1])); }))
  ));
  return box;
}

/* ---------- writer (timer + word count + plan + autosave) ---------- */
function openWriter(o){
  var id = o.id;
  var prevFocus = document.activeElement;
  var total = o.minutes * 60, remain = total, running = false, iv = null;

  var timeEl = h('span', {class:'time', 'aria-live':'off'});
  function drawTime(){
    var neg = remain < 0, a = Math.abs(remain);
    timeEl.textContent = (neg ? '+' : '') + String(Math.floor(a/60)).padStart(2,'0') + ':' + String(a%60).padStart(2,'0');
    timeEl.classList.toggle('over', neg);
    timeEl.classList.toggle('low', !neg && remain <= 120);
  }
  var startBtn = h('button', {class:'btn sm', type:'button'}, 'Start');
  function start(){ running = true; startBtn.textContent = 'Pause';
    iv = setInterval(function(){ remain--; drawTime(); if (remain === 0) toast("Time's up. Finish the sentence and check your work."); }, 1000); }
  function pause(){ running = false; startBtn.textContent = 'Start'; clearInterval(iv); }
  startBtn.addEventListener('click', function(){ running ? pause() : start(); });
  var resetBtn = h('button', {class:'btn sm ghost', type:'button', onclick:function(){ pause(); remain = total; drawTime(); }}, 'Reset');

  var doneChk = h('input', {type:'checkbox'}); doneChk.checked = !!Store.get('done', id);
  doneChk.addEventListener('change', function(){ Store.set('done', id, doneChk.checked); if (o.onChange) o.onChange(); });

  var ov = h('div', {class:'writer-ov', role:'dialog', 'aria-modal':'true', 'aria-label':'Writing practice'});
  var closeBtn = h('button', {class:'icon-btn', type:'button', 'aria-label':'Close', title:'Close (Esc)'}, '✕');
  var head = h('div', {class:'w-head'},
    h('div', {class:'w-kicker'}, o.kicker || ''),
    h('div', {class:'w-tools'},
      h('span', {class:'timer'}, timeEl, startBtn, resetBtn),
      h('label', {class:'done-tog'}, doneChk, ' Done'),
      closeBtn));

  /* left column */
  var left = h('div', {class:'w-left'});
  left.appendChild(h('div', {class:'w-q'}, h('p', {class:'q'}, o.question), o.instruction ? h('div', {class:'instr'}, o.instruction) : null));
  if (o.visual) left.appendChild(o.visual());
  if (o.plan && o.plan.length) {
    var saved = Store.get('plans', id) || {};
    var pd = h('details', {open:true}, h('summary', null, 'Plan first (1–3 min)'));
    o.plan.forEach(function(f){
      var inp = h('input', {type:'text', placeholder:f[2] || ''}); inp.value = saved[f[0]] || '';
      inp.addEventListener('input', function(){ var cur = Store.get('plans', id) || {}; cur[f[0]] = inp.value; Store.set('plans', id, cur); });
      pd.appendChild(h('label', {class:'plan-field'}, h('span', null, f[1]), inp));
    });
    left.appendChild(pd);
  }
  if (o.hint) left.appendChild(h('details', null, h('summary', null, 'Structure reminder'), o.hint));
  if (o.checklist && o.checklist.length) {
    left.appendChild(h('details', null, h('summary', null, 'Check before you finish'),
      h('ul', {class:'checklist'}, o.checklist.map(function(c){ return h('li', null, h('input', {type:'checkbox'}), h('span', null, c)); }))));
  }
  left.appendChild(h('details', null, h('summary', null, 'My usual mistakes'),
    h('ul', {class:'tips'}, ERRORS.grammar.slice(0, 9).map(function(r){ return h('li', null, h('b', null, r[1]), ' — ', bn(r[2])); }))));

  /* right column */
  var ta = h('textarea', {spellcheck:'false', autocapitalize:'sentences', placeholder:'Write your answer here. Spell-check is off, like the real test.'});
  ta.value = Store.get('drafts', id) || '';
  var wc = h('span', {class:'wcount'});
  var savedEl = h('span', {class:'saved'});
  function count(){
    var n = words(ta.value);
    wc.textContent = n + ' words';
    wc.className = 'wcount ' + (n === 0 ? '' : n < o.min ? 'under' : n <= o.max + 20 ? 'ok' : 'long');
    wc.title = 'Aim: ' + o.min + '–' + o.max + ' words';
  }
  var t2 = null;
  ta.addEventListener('input', function(){
    count(); clearTimeout(t2);
    t2 = setTimeout(function(){ Store.set('drafts', id, ta.value); savedEl.textContent = 'Draft saved'; if (o.onChange) o.onChange(); }, 400);
  });
  var copyBtn = h('button', {class:'btn quiet sm', type:'button'}, 'Copy for marking');
  copyBtn.addEventListener('click', function(){
    var text = (o.copyTitle || 'IELTS Writing practice') + ' — please mark strictly (target Band 9)\n\nQuestion:\n' + o.question +
      '\n\nMy answer (' + words(ta.value) + ' words):\n' + ta.value;
    copyText(text).then(function(ok){ toast(ok ? 'Copied. Paste it to Claude for marking.' : 'Copy failed. Select the text and copy it manually.'); });
  });
  var clearBtn = h('button', {class:'btn ghost sm', type:'button'}, 'Clear');
  clearBtn.addEventListener('click', function(){
    if (!ta.value || confirmClear()) { ta.value = ''; Store.set('drafts', id, ''); count(); if (o.onChange) o.onChange(); }
  });
  function confirmClear(){ return clearBtn.dataset.armed === '1' ? true : (clearBtn.dataset.armed = '1', clearBtn.textContent = 'Click again to clear', setTimeout(function(){ clearBtn.dataset.armed = ''; clearBtn.textContent = 'Clear'; }, 2500), false); }

  var right = h('div', {class:'w-right'}, ta,
    h('div', {class:'w-foot'}, wc, h('span', {class:'note'}, 'Aim ' + o.min + '–' + o.max), h('span', {class:'grow'}), savedEl, clearBtn, copyBtn));

  ov.appendChild(h('div', {class:'writer'}, head, h('div', {class:'w-body'}, left, right)));
  document.body.appendChild(ov);
  document.body.classList.add('noscroll');
  drawTime(); count();
  setTimeout(function(){ ta.focus(); }, 50);

  function close(){
    pause(); clearTimeout(t2); Store.set('drafts', id, ta.value);
    document.removeEventListener('keydown', onKey);
    ov.remove(); document.body.classList.remove('noscroll');
    if (o.onChange) o.onChange();
    if (prevFocus && prevFocus.focus) prevFocus.focus();
  }
  function onKey(e){ if (e.key === 'Escape') close(); }
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', onKey);
}

window.App = {Store:Store, h:h, esc:esc, tpl:tpl, words:words, bn:bn, copyText:copyText, toast:toast, theme:theme, openWriter:openWriter, ERRORS:ERRORS, errorsView:errorsView};
})();
