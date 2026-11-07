/* Task 2 page */
(function(){
'use strict';
var A = window.App, h = A.h, Store = A.Store, D = window.T2;
var app = document.getElementById('app');
var SUBS = [['structure','Structure'],['models','Models'],['vocab','Vocabulary'],['practice','Practice']];
var EXTRA = [{id:'topics', label:'Topic vocabulary', bn:'বিষয়ভিত্তিক শব্দ'}, {id:'errors', label:'My error list', bn:'আমার ভুলের তালিকা'}];
var filter = 'all';

function typeById(id){ for (var i=0;i<D.types.length;i++) if (D.types[i].id === id) return D.types[i]; return null; }
function isExtra(id){ return EXTRA.some(function(e){ return e.id === id; }); }
function state(){
  var parts = decodeURIComponent(location.hash.slice(1)).split('/');
  var t = parts[0], s = parts[1];
  if (!t) { var u = Store.get('ui','t2'); if (u) { parts = u.split('/'); t = parts[0]; s = parts[1]; } }
  if (!typeById(t) && !isExtra(t)) t = D.types[0].id;
  if (!SUBS.some(function(x){ return x[0] === s; })) s = 'structure';
  return {t:t, s:s};
}
function go(t, s){ var hsh = '#' + t + (s ? '/' + s : ''); if (location.hash === hsh) render(); else location.hash = hsh; }
function pid(ty, i){ return 't2-' + ty.id + '-' + i; }
function doneCount(ty){ return ty.practice.filter(function(p,i){ return Store.get('done', pid(ty,i)); }).length; }
function progress(){
  var done = 0, total = 0;
  D.types.forEach(function(ty){ total += ty.practice.length; done += doneCount(ty); });
  var el = document.getElementById('progress'); if (el) el.textContent = done + ' / ' + total + ' practised';
}

function strip(){
  return h('div', {class:'strip'},
    h('h1', null, 'Task 2 · Essay'),
    h('div', {class:'rules'}, h('span', null, '40 minutes'), h('span', null, '250–300 words'), h('span', null, 'Worth 2/3 of Writing'), h('span', null, 'Do it first')),
    h('p', {class:'bn'}, 'প্রশ্নের ধরন বেছে নাও → Structure পড়ো → Model দেখো → Practice-এ নিজে লেখো। লেখা এই ব্রাউজারেই সেভ থাকে।'));
}
function typeNav(cur){
  var nav = h('nav', {class:'typenav', 'aria-label':'Question types'});
  D.types.forEach(function(ty){
    nav.appendChild(h('button', {class: cur === ty.id ? 'on' : '', type:'button', onclick:function(){ go(ty.id, state().s); }},
      ty.label, h('small', {class:'bn'}, ty.bn + ' · ' + doneCount(ty) + '/' + ty.practice.length)));
  });
  EXTRA.forEach(function(ex){
    nav.appendChild(h('button', {class:'extra' + (cur === ex.id ? ' on' : ''), type:'button', onclick:function(){ go(ex.id); }}, ex.label, h('small', {class:'bn'}, ex.bn)));
  });
  return nav;
}
function typeHead(ty){
  return h('div', {class:'thead'},
    h('h2', null, ty.label),
    h('p', {class:'tag'}, ty.tagline),
    h('div', {class:'signals'}, ty.signals.map(function(s){ return h('span', null, s); })));
}
function subNav(ty, cur){
  var counts = {models: ty.models.length, practice: doneCount(ty) + '/' + ty.practice.length};
  return h('div', {class:'subnav', role:'tablist'}, SUBS.map(function(s){
    return h('button', {class: cur === s[0] ? 'on' : '', type:'button', role:'tab', 'aria-selected': cur === s[0] ? 'true' : 'false', onclick:function(){ go(ty.id, s[0]); }},
      s[1], counts[s[0]] !== undefined ? h('span', {class:'count'}, counts[s[0]]) : null);
  }));
}

/* ---------- views ---------- */
function viewStructure(ty, box){
  box.appendChild(h('div', {class:'card'},
    h('h3', null, 'Paragraph plan'),
    h('div', {class:'plan-rows'}, ty.paragraphs.map(function(p){ return h('div', {class:'plan-row'}, h('b', null, p[0]), h('div', {class:'what'}, p[1])); }))));
  box.appendChild(h('div', {class:'grid2'},
    h('div', {class:'card'},
      h('h3', null, 'Templates'),
      h('h4', null, 'Introduction'), h('div', {class:'tpl-box'}, A.tpl(ty.introTpl)),
      h('h4', null, 'Body paragraphs'), h('div', {class:'tpl-box'}, A.tpl(ty.bodyTpl)),
      h('h4', null, 'Conclusion'), h('div', {class:'tpl-box'}, A.tpl(ty.conclTpl)),
      h('p', {class:'note bn'}, 'টেমপ্লেট মুখস্থ করবে না। কাঠামোটা মনে রাখো, প্রতিবার শব্দ বদলাও (argue / believe / claim)।')),
    h('div', {class:'card'},
      h('h3', null, 'Every body paragraph'),
      h('div', {class:'tpl-box'}, D.pee),
      h('h4', null, 'Tips for this type'),
      h('ul', {class:'tips bn'}, ty.tips.map(function(t){ return h('li', null, t); })))));
  box.appendChild(h('div', {class:'card'},
    h('h3', null, 'Self-check list'),
    h('ul', {class:'checklist'}, D.universalChecklist.map(function(c){ return h('li', null, h('input', {type:'checkbox'}), h('span', null, c)); }))));
}

function essayBlock(ty, m){
  var roles = m.roles || ['Introduction'].concat(ty.roles, ['Conclusion']);
  var n = A.words(m.paras.join(' '));
  return h('div', {class:'essay'},
    m.paras.map(function(p, j){ return h('div', {class:'para'}, h('div', {class:'para-tag'}, roles[j] || ''), h('p', null, p)); }),
    h('div', {class:'wc'}, n + ' words'));
}
function viewModels(ty, box){
  var allBtn = h('button', {class:'btn quiet sm', type:'button'}, 'Show all essays');
  box.appendChild(h('div', {class:'ptools'}, h('span', {class:'note bn'}, 'আগে প্রশ্ন পড়ে নিজে plan করো বা লেখো, তারপর model খুলে মেলাও।'), h('span', {style:'flex:1'}), allBtn));
  var toggles = [];
  ty.models.forEach(function(m, i){
    var essay = essayBlock(ty, m); essay.hidden = true;
    var showBtn = h('button', {class:'btn ghost sm', type:'button'}, 'Show model essay');
    function set(v){ essay.hidden = !v; showBtn.textContent = v ? 'Hide model essay' : 'Show model essay'; }
    showBtn.addEventListener('click', function(){ set(essay.hidden); });
    toggles.push(set);
    var id = 't2m-' + ty.id + '-' + i;
    var tryBtn = h('button', {class:'btn sm', type:'button', onclick:function(){ openW(ty, id, m.q, 'Model ' + (i+1) + ' · try it first'); }}, 'Try it first (40 min)');
    box.appendChild(h('article', {class:'model'},
      h('div', {class:'model-top'},
        h('div', {class:'num'}, 'Model ' + (i+1)),
        h('h3', null, m.title),
        h('p', {class:'q'}, m.q),
        h('span', {class:'plan-chip'}, m.plan),
        h('div', {class:'actions'}, tryBtn, showBtn)),
      essay));
  });
  var allOn = false;
  allBtn.addEventListener('click', function(){ allOn = !allOn; toggles.forEach(function(f){ f(allOn); }); allBtn.textContent = allOn ? 'Hide all essays' : 'Show all essays'; });
}

function vgrid(items){
  return h('div', {class:'vgrid'}, items.map(function(v){ return h('div', {class:'vitem'}, h('div', {class:'p'}, v[0]), h('div', {class:'m bn'}, v[1])); }));
}
function viewVocab(ty, box){
  box.appendChild(h('div', {class:'sec-title'}, 'Language for this question type'));
  box.appendChild(h('div', {class:'flist'}, ty.language.map(function(r){ return h('div', {class:'frow'}, h('div', {class:'p'}, r[0]), h('div', {class:'m bn'}, r[1])); })));
  box.appendChild(h('div', {class:'sec-title'}, 'Useful phrases from the models'));
  box.appendChild(vgrid(ty.vocabModels));
  box.appendChild(h('p', {class:'note'}, 'More words by topic: ', h('a', {href:'#topics'}, 'Topic vocabulary'), '.'));
}

function viewPractice(ty, box){
  var list = h('ol', {class:'plist'});
  var seg = h('div', {class:'seg', role:'group', 'aria-label':'Filter'});
  [['all','All'],['todo','Not done'],['done','Done']].forEach(function(f){
    seg.appendChild(h('button', {type:'button', class: filter === f[0] ? 'on' : '', onclick:function(){ filter = f[0]; render(); }}, f[1]));
  });
  var rnd = h('button', {class:'btn sm', type:'button', onclick:function(){
    var pool = ty.practice.map(function(p,i){ return i; }).filter(function(i){ return !Store.get('done', pid(ty,i)); });
    if (!pool.length) pool = ty.practice.map(function(p,i){ return i; });
    var i = pool[Math.floor(Math.random() * pool.length)];
    openW(ty, pid(ty,i), ty.practice[i].q, ty.label + ' · Question ' + (i+1));
  }}, 'Random question');
  box.appendChild(h('div', {class:'ptools'}, seg, h('span', {style:'flex:1'}), rnd));
  ty.practice.forEach(function(p, i){
    var id = pid(ty, i), done = !!Store.get('done', id), draft = A.words(Store.get('drafts', id) || '');
    if (filter === 'todo' && done) return;
    if (filter === 'done' && !done) return;
    list.appendChild(h('li', {class:'pitem' + (done ? ' is-done' : '')},
      h('span', {class:'n'}, String(i+1).padStart(2,'0')),
      h('div', null, h('div', {class:'txt'}, p.q),
        h('div', {class:'tags'}, h('span', {class:'tagc'}, p.t),
          p.tried ? h('span', {class:'tagc tried'}, 'tried in chat') : null,
          done ? h('span', {class:'tagc done'}, '✓ done') : draft ? h('span', {class:'tagc draft'}, 'draft · ' + draft + ' words') : null)),
      h('button', {class:'btn sm' + (done ? ' quiet' : ''), type:'button', onclick:function(){ openW(ty, id, p.q, ty.label + ' · Question ' + (i+1)); }}, draft ? 'Continue' : 'Write')));
  });
  if (!list.children.length) list.appendChild(h('li', {class:'note'}, 'Nothing here yet.'));
  box.appendChild(list);
}

function viewTopics(){
  var box = h('section', {class:'panel'});
  box.appendChild(h('div', {class:'thead'}, h('h2', null, 'Topic vocabulary'), h('p', {class:'tag bn'}, 'IELTS-এ বারবার আসা ১২টা বিষয়ের collocation। শুধু সেগুলোই লেখায় ব্যবহার করো, যেগুলোর অর্থ আর বানান নিশ্চিত।')));
  D.topics.forEach(function(tp, i){
    box.appendChild(h('details', {class:'card topic', open: i === 0 ? true : null}, h('summary', null, tp.name, h('small', {class:'bn'}, tp.bn)), vgrid(tp.items)));
  });
  return box;
}
function viewErrors(){
  var box = h('section', {class:'panel'});
  box.appendChild(h('div', {class:'thead'}, h('h2', null, 'My error list'), h('p', {class:'tag'}, 'Mistakes from my own practice. Check every answer against this list before you finish.')));
  box.appendChild(h('div', {style:'height:14px'}));
  box.appendChild(A.errorsView());
  return box;
}

/* ---------- writer ---------- */
function openW(ty, id, q, kicker){
  A.openWriter({
    id: id, kicker: kicker, question: q, minutes: 40, min: 250, max: 300,
    copyTitle: 'IELTS Writing Task 2 (' + ty.label + ')',
    plan: ty.plan,
    hint: h('div', null,
      h('div', {class:'plan-rows', style:'margin-top:8px'}, ty.paragraphs.map(function(p){ return h('div', {class:'plan-row'}, h('b', null, p[0]), h('div', {class:'what'}, p[1])); })),
      h('div', {class:'tpl-box'}, A.tpl(ty.introTpl))),
    checklist: D.universalChecklist,
    onChange: function(){ progress(); var st = state(); if (st.s === 'practice') render(); }
  });
}

/* ---------- render ---------- */
var lastT = null;
function render(){
  var st = state();
  Store.set('ui', 't2', st.t + '/' + st.s);
  var y = window.scrollY;
  app.innerHTML = '';
  app.appendChild(strip());
  app.appendChild(typeNav(st.t));
  var ty = typeById(st.t);
  if (ty) {
    app.appendChild(typeHead(ty));
    app.appendChild(subNav(ty, st.s));
    var box = h('section', {class:'panel', role:'tabpanel'});
    app.appendChild(box);
    ({structure:viewStructure, models:viewModels, vocab:viewVocab, practice:viewPractice})[st.s](ty, box);
  } else if (st.t === 'topics') app.appendChild(viewTopics());
  else app.appendChild(viewErrors());
  progress();
  if (lastT !== null && lastT === st.t) window.scrollTo(0, y);
  lastT = st.t;
}
window.addEventListener('hashchange', render);
A.theme();
render();
})();
