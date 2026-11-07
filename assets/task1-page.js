/* Task 1 page */
(function(){
'use strict';
var A = window.App, h = A.h, Store = A.Store, D = window.T1;
var app = document.getElementById('app');
var SUBS = [['structure','Structure'],['model','Model'],['vocab','Vocabulary'],['practice','Practice']];
var EXTRA = [{id:'errors', label:'My error list', bn:'আমার ভুলের তালিকা'}];
var filter = 'all';

function typeById(id){ for (var i=0;i<D.types.length;i++) if (D.types[i].id === id) return D.types[i]; return null; }
function state(){
  var parts = decodeURIComponent(location.hash.slice(1)).split('/');
  var t = parts[0], s = parts[1];
  if (!t) { var u = Store.get('ui','t1'); if (u) { parts = u.split('/'); t = parts[0]; s = parts[1]; } }
  if (t !== 'method' && !typeById(t) && !EXTRA.some(function(e){ return e.id === t; })) t = 'method';
  if (!SUBS.some(function(x){ return x[0] === s; })) s = 'structure';
  return {t:t, s:s};
}
function go(t, s){ var hsh = '#' + t + (s ? '/' + s : ''); if (location.hash === hsh) render(); else location.hash = hsh; }
function pid(ty, i){ return 't1-' + ty.id + '-' + i; }
function doneCount(ty){ return ty.practice.filter(function(p,i){ return Store.get('done', pid(ty,i)); }).length; }
function progress(){
  var done = 0, total = 0;
  D.types.forEach(function(ty){ total += ty.practice.length; done += doneCount(ty); });
  var el = document.getElementById('progress'); if (el) el.textContent = done + ' / ' + total + ' practised';
}

function strip(){
  return h('div', {class:'strip'},
    h('h1', null, 'Task 1 · Academic report'),
    h('div', {class:'rules'}, h('span', null, '20 minutes'), h('span', null, '150–200 words'), h('span', null, 'Worth 1/3 of Writing'), h('span', null, 'Do it second')),
    h('p', {class:'bn'}, 'আগে Method পড়ো, তারপর চার্টের ধরন বেছে Model আর Practice। সব data অনুশীলনের জন্য বানানো।'));
}
function typeNav(cur){
  var nav = h('nav', {class:'typenav', 'aria-label':'Chart types'});
  nav.appendChild(h('button', {class:'extra' + (cur === 'method' ? ' on' : ''), type:'button', onclick:function(){ go('method'); }}, 'Method', h('small', {class:'bn'}, 'পদ্ধতি · checklist')));
  D.types.forEach(function(ty){
    nav.appendChild(h('button', {class: cur === ty.id ? 'on' : '', type:'button', onclick:function(){ go(ty.id, state().s); }},
      ty.label, h('small', {class:'bn'}, ty.bn + ' · ' + doneCount(ty) + '/' + ty.practice.length)));
  });
  EXTRA.forEach(function(ex){
    nav.appendChild(h('button', {class:'extra' + (cur === ex.id ? ' on' : ''), type:'button', onclick:function(){ go(ex.id); }}, ex.label, h('small', {class:'bn'}, ex.bn)));
  });
  return nav;
}
function subNav(ty, cur){
  var counts = {practice: doneCount(ty) + '/' + ty.practice.length};
  return h('div', {class:'subnav', role:'tablist'}, SUBS.map(function(s){
    return h('button', {class: cur === s[0] ? 'on' : '', type:'button', role:'tab', 'aria-selected': cur === s[0] ? 'true' : 'false', onclick:function(){ go(ty.id, s[0]); }},
      s[1], counts[s[0]] !== undefined ? h('span', {class:'count'}, counts[s[0]]) : null);
  }));
}
function planRows(rows){ return h('div', {class:'plan-rows'}, rows.map(function(p){ return h('div', {class:'plan-row'}, h('b', null, p[0]), h('div', {class:'what'}, p[1])); })); }

/* ---------- method ---------- */
function viewMethod(){
  var M = D.method, box = h('section', {class:'panel'});
  box.appendChild(h('div', {class:'thead'}, h('h2', null, 'One structure for every Task 1'), h('p', {class:'tag'}, 'The pyramid: no detail at the top, more detail as you go down. Line graph, bar chart, pie, table, map or process — the same four paragraphs.')));
  box.appendChild(h('div', {style:'height:14px'}));
  box.appendChild(h('div', {class:'card'}, h('h3', null, 'The pyramid'), planRows(M.pyramid)));
  box.appendChild(h('div', {class:'card'}, h('h3', null, 'The 9 steps'),
    h('ol', {class:'tips'}, M.steps.map(function(s){ return h('li', null, h('b', null, s[0] + ': '), s[1]); }))));
  box.appendChild(h('div', {class:'grid2'},
    h('div', {class:'card'}, h('h3', null, 'Rules'), h('ul', {class:'tips'}, M.rules.map(function(r){ return h('li', null, r); }))),
    h('div', {class:'card'}, h('h3', null, 'মনে রাখো'), h('ul', {class:'tips bn'}, M.bn.map(function(r){ return h('li', null, r); })))));
  box.appendChild(h('div', {class:'card'}, h('h3', null, 'Self-check list'),
    h('ul', {class:'checklist'}, M.checklist.map(function(c){ return h('li', null, h('input', {type:'checkbox'}), h('span', null, c)); }))));
  var tpl = h('div', {class:'card'}, h('h3', null, 'Sentence frames'),
    h('h4', null, 'Introduction'), h('div', {class:'tpl-box'}, A.tpl('The [line graph / bar chart / table] [compares / illustrates / gives information about] [what, in new words] [where] [from / between X and Y].')),
    h('h4', null, 'Overview'), h('div', {class:'tpl-box'}, A.tpl('Overall, [main feature 1], while [main feature 2]. [Main feature 3 or the biggest comparison].')),
    h('h4', null, 'Details'), h('div', {class:'tpl-box'}, A.tpl('In [year], [X] stood at around [figure], [compared with / followed by] [Y]. [X] then [rose / fell] to [figure] in [year] before [peaking / levelling off] at [figure].')));
  box.appendChild(tpl);
  return box;
}

/* ---------- type views ---------- */
function viewStructure(ty, box){
  box.appendChild(h('div', {class:'card'}, h('h3', null, 'What this visual is for'), h('p', {style:'margin:0'}, ty.purpose)));
  box.appendChild(h('div', {class:'card'}, h('h3', null, 'Paragraph plan'), planRows([['Introduction','1 sentence: paraphrase the prompt.']].concat(ty.plan.filter(function(p){ return p[0] !== 'Introduction'; })))));
  box.appendChild(h('div', {class:'card'}, h('h3', null, 'Tips for this type'), h('ul', {class:'tips bn'}, ty.tips.map(function(t){ return h('li', null, t); }))));
  box.appendChild(h('p', {class:'note'}, 'The full method and checklist: ', h('a', {href:'#method'}, 'Method'), '.'));
}
function viewModel(ty, box){
  var m = ty.model, id = 't1m-' + ty.id;
  var essay = h('div', {class:'essay'},
    ['Introduction','Overview','Details 1','Details 2'].map(function(r, j){ return h('div', {class:'para'}, h('div', {class:'para-tag'}, r), h('p', null, m.paras[j])); }),
    h('div', {class:'wc'}, A.words(m.paras.join(' ')) + ' words'));
  essay.hidden = true;
  var showBtn = h('button', {class:'btn ghost sm', type:'button'}, 'Show model answer');
  showBtn.addEventListener('click', function(){ essay.hidden = !essay.hidden; showBtn.textContent = essay.hidden ? 'Show model answer' : 'Hide model answer'; });
  var tryBtn = h('button', {class:'btn sm', type:'button', onclick:function(){ openW(ty, id, m.q, m.chart, ty.label + ' · Model · try it first'); }}, 'Try it first (20 min)');
  box.appendChild(h('article', {class:'model'},
    h('div', {class:'model-top'},
      h('div', {class:'num'}, 'Model · ' + ty.label),
      h('p', {class:'q'}, m.q),
      Charts.render(m.chart),
      h('div', {class:'actions'}, tryBtn, showBtn)),
    essay));
}
function viewVocab(ty, box){
  box.appendChild(h('div', {class:'sec-title'}, 'Language for ' + ty.label.toLowerCase() + 's'));
  box.appendChild(h('div', {class:'vgrid'}, ty.vocab.map(function(v){
    return h('div', {class:'vitem'}, h('div', {class:'p'}, v[0]), h('div', {class:'m bn'}, v[1]), v[2] ? h('div', {class:'ex'}, v[2]) : null);
  })));
}
function viewPractice(ty, box){
  var seg = h('div', {class:'seg', role:'group', 'aria-label':'Filter'});
  [['all','All'],['todo','Not done'],['done','Done']].forEach(function(f){
    seg.appendChild(h('button', {type:'button', class: filter === f[0] ? 'on' : '', onclick:function(){ filter = f[0]; render(); }}, f[1]));
  });
  var rnd = h('button', {class:'btn sm', type:'button', onclick:function(){
    var pool = ty.practice.map(function(p,i){ return i; }).filter(function(i){ return !Store.get('done', pid(ty,i)); });
    if (!pool.length) pool = ty.practice.map(function(p,i){ return i; });
    var i = pool[Math.floor(Math.random() * pool.length)];
    openW(ty, pid(ty,i), ty.practice[i].q, ty.practice[i].chart, ty.label + ' · Question ' + (i+1));
  }}, 'Random question');
  box.appendChild(h('div', {class:'ptools'}, seg, h('span', {style:'flex:1'}), rnd));
  var list = h('ol', {class:'plist'});
  ty.practice.forEach(function(p, i){
    var id = pid(ty, i), done = !!Store.get('done', id), draft = A.words(Store.get('drafts', id) || '');
    if (filter === 'todo' && done) return;
    if (filter === 'done' && !done) return;
    list.appendChild(h('li', {class:'pitem' + (done ? ' is-done' : '')},
      h('span', {class:'n'}, String(i+1).padStart(2,'0')),
      h('div', null, h('div', {class:'txt'}, p.q),
        h('div', {class:'tags'}, h('span', {class:'tagc'}, p.chart.title || ty.label),
          done ? h('span', {class:'tagc done'}, '✓ done') : draft ? h('span', {class:'tagc draft'}, 'draft · ' + draft + ' words') : null)),
      h('button', {class:'btn sm' + (done ? ' quiet' : ''), type:'button', onclick:function(){ openW(ty, id, p.q, p.chart, ty.label + ' · Question ' + (i+1)); }}, draft ? 'Continue' : 'Write')));
  });
  if (!list.children.length) list.appendChild(h('li', {class:'note'}, 'Nothing here yet.'));
  box.appendChild(list);
}
function viewErrors(){
  var box = h('section', {class:'panel'});
  box.appendChild(h('div', {class:'thead'}, h('h2', null, 'My error list'), h('p', {class:'tag'}, 'Same list as on the Task 2 page. In Task 1, also check units and numbers.')));
  box.appendChild(h('div', {style:'height:14px'}));
  box.appendChild(A.errorsView());
  return box;
}

/* ---------- writer ---------- */
function openW(ty, id, q, chart, kicker){
  A.openWriter({
    id: id, kicker: kicker, question: q, instruction: D.instruction, minutes: 20, min: 150, max: 200,
    copyTitle: 'IELTS Writing Task 1 (' + ty.label + ')',
    visual: function(){ return Charts.render(chart); },
    plan: [['ov','Overview: 2–4 main features (no numbers)',''],['d1','Details 1 will cover…',''],['d2','Details 2 will cover…','']],
    hint: h('div', null, planRows([['Introduction','1 sentence: paraphrase the prompt.']].concat(ty.plan.filter(function(p){ return p[0] !== 'Introduction'; })))),
    checklist: D.method.checklist,
    onChange: function(){ progress(); var st = state(); if (st.s === 'practice') render(); }
  });
}

/* ---------- render ---------- */
var lastT = null;
function render(){
  var st = state();
  Store.set('ui', 't1', st.t + '/' + st.s);
  var y = window.scrollY;
  app.innerHTML = '';
  app.appendChild(strip());
  app.appendChild(typeNav(st.t));
  var ty = typeById(st.t);
  if (ty) {
    app.appendChild(h('div', {class:'thead'}, h('h2', null, ty.label), h('p', {class:'tag', style:'margin:0'}, ty.purpose)));
    app.appendChild(subNav(ty, st.s));
    var box = h('section', {class:'panel', role:'tabpanel'});
    app.appendChild(box);
    ({structure:viewStructure, model:viewModel, vocab:viewVocab, practice:viewPractice})[st.s](ty, box);
  } else if (st.t === 'method') app.appendChild(viewMethod());
  else app.appendChild(viewErrors());
  progress();
  if (lastT !== null && lastT === st.t) window.scrollTo(0, y);
  lastT = st.t;
}
window.addEventListener('hashchange', render);
A.theme();
render();
})();
