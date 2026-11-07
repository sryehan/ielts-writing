/* Simple SVG/HTML renderers for Task 1 visuals: line, bar, pie, table, map, process, mixed */
(function(){
'use strict';
var NS = 'http://www.w3.org/2000/svg';
function S(tag, attrs, parent, style){
  var e = document.createElementNS(NS, tag);
  if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
  if (style) for (var s in style) e.style[s] = style[s];
  if (parent) parent.appendChild(e);
  return e;
}
function H(tag, cls, text){ var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
function niceMax(v){
  if (!(v > 0)) return 1;
  var p = Math.pow(10, Math.floor(Math.log10(v))), n = v / p;
  var m = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return m * p;
}
function fmt(n){ return Number(n).toLocaleString('en-GB', {maximumFractionDigits:2}); }
var DASH = ['', '8 5', '2 5', '12 4 3 4', '5 5', '1 4'];
function col(i){ return 'var(--c' + ((i % 6) + 1) + ')'; }

function wrap(spec, content, legendEl){
  var f = H('div', 'figure');
  if (spec.title) f.appendChild(H('div', 'fig-title', spec.title));
  f.appendChild(content);
  if (legendEl) f.appendChild(legendEl);
  if (spec.note) f.appendChild(H('div', 'fig-note', spec.note));
  return f;
}
function boxLegend(names){
  var ul = H('ul', 'legend');
  names.forEach(function(n, i){ var li = H('li'); var sw = H('span', 'sw'); sw.style.background = col(i); li.appendChild(sw); li.appendChild(document.createTextNode(n)); ul.appendChild(li); });
  return ul;
}
function lineLegend(names){
  var ul = H('ul', 'legend');
  names.forEach(function(n, i){
    var li = H('li');
    var sv = S('svg', {width:30, height:12, viewBox:'0 0 30 12', 'aria-hidden':'true'});
    S('line', {x1:1, x2:29, y1:6, y2:6, 'stroke-width':3, 'stroke-dasharray':DASH[i] || ''}, sv, {stroke:col(i)});
    S('circle', {cx:15, cy:6, r:3}, sv, {fill:col(i)});
    li.appendChild(sv); li.appendChild(document.createTextNode(n)); ul.appendChild(li);
  });
  return ul;
}
function axes(svg, W, H_, m, max, yLabel){
  var pw = W - m.l - m.r, ph = H_ - m.t - m.b, g = S('g', {class:'ax'}, svg), ticks = 5;
  for (var i = 0; i <= ticks; i++) {
    var v = max * i / ticks, y = m.t + ph - (v / max) * ph;
    S('line', {x1:m.l, x2:W - m.r, y1:y, y2:y, class: i === 0 ? 'base' : 'grid'}, g);
    var t = S('text', {x:m.l - 8, y:y + 4, 'text-anchor':'end'}, g); t.textContent = fmt(v);
  }
  if (yLabel) {
    var yy = m.t + ph / 2;
    var tl = S('text', {x:14, y:yy, 'text-anchor':'middle', transform:'rotate(-90 14 ' + yy + ')', class:'ylab'}, g); tl.textContent = yLabel;
  }
  return {pw:pw, ph:ph, g:g};
}

function line(spec){
  var W = 680, Hh = 340, m = {l:66, r:24, t:14, b:40};
  var svg = S('svg', {viewBox:'0 0 ' + W + ' ' + Hh, class:'chart', role:'img', 'aria-label':spec.title || 'Line graph'});
  var all = []; spec.series.forEach(function(s){ s.values.forEach(function(v){ if (v != null) all.push(v); }); });
  var max = spec.max || niceMax(Math.max.apply(null, all));
  var a = axes(svg, W, Hh, m, max, spec.y);
  var n = spec.x.length;
  function X(i){ return m.l + (n === 1 ? a.pw / 2 : i * a.pw / (n - 1)); }
  function Y(v){ return m.t + a.ph - (v / max) * a.ph; }
  spec.x.forEach(function(lab, i){ var t = S('text', {x:X(i), y:Hh - m.b + 20, 'text-anchor':'middle'}, a.g); t.textContent = lab; });
  spec.series.forEach(function(s, si){
    var pts = [];
    s.values.forEach(function(v, i){ if (v != null) pts.push(X(i) + ',' + Y(v)); });
    S('polyline', {points:pts.join(' '), fill:'none', 'stroke-width':2.8, 'stroke-linejoin':'round', 'stroke-linecap':'round', 'stroke-dasharray':DASH[si] || ''}, svg, {stroke:col(si)});
    s.values.forEach(function(v, i){ if (v != null) S('circle', {cx:X(i), cy:Y(v), r:3.8}, svg, {fill:col(si)}); });
  });
  return wrap(spec, svg, spec.series.length > 1 ? lineLegend(spec.series.map(function(s){ return s.name; })) : null);
}

function bar(spec){
  var n = spec.x.length, k = spec.series.length;
  var W = 680, Hh = 340, m = {l:66, r:14, t:14, b:44};
  var svg = S('svg', {viewBox:'0 0 ' + W + ' ' + Hh, class:'chart', role:'img', 'aria-label':spec.title || 'Bar chart'});
  var all = []; spec.series.forEach(function(s){ all = all.concat(s.values); });
  var max = spec.max || niceMax(Math.max.apply(null, all));
  var a = axes(svg, W, Hh, m, max, spec.y);
  var band = a.pw / n, inner = band * (k > 1 ? 0.8 : 0.6), bw = inner / k;
  function Y(v){ return m.t + a.ph - (v / max) * a.ph; }
  spec.x.forEach(function(lab, i){
    var cx = m.l + band * (i + 0.5);
    var t = S('text', {x:cx, y:Hh - m.b + 20, 'text-anchor':'middle'}, a.g); t.textContent = lab;
    spec.series.forEach(function(s, si){
      var v = s.values[i], x = m.l + band * i + (band - inner) / 2 + si * bw, y = Y(v);
      S('rect', {x:x + 1, y:y, width:Math.max(bw - 2, 2), height:Math.max(m.t + a.ph - y, 0), rx:2}, svg, {fill:col(si)});
    });
  });
  return wrap(spec, svg, k > 1 ? boxLegend(spec.series.map(function(s){ return s.name; })) : null);
}

function pie(spec){
  var holder = H('div', 'pies');
  var names = spec.pies[0].slices.map(function(s){ return s[0]; });
  spec.pies.forEach(function(p){
    var box = H('div', 'pie');
    var svg = S('svg', {viewBox:'0 0 240 240', role:'img', 'aria-label':(p.label || 'Pie chart')});
    var cx = 120, cy = 120, R = 108, total = p.slices.reduce(function(a, s){ return a + s[1]; }, 0), ang = -Math.PI / 2;
    p.slices.forEach(function(s, i){
      var frac = s[1] / total, a1 = ang + frac * 2 * Math.PI;
      if (frac >= 0.9999) S('circle', {cx:cx, cy:cy, r:R}, svg, {fill:col(i)});
      else {
        var x0 = cx + R * Math.cos(ang), y0 = cy + R * Math.sin(ang), x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
        S('path', {d:'M' + cx + ',' + cy + ' L' + x0 + ',' + y0 + ' A' + R + ',' + R + ' 0 ' + (a1 - ang > Math.PI ? 1 : 0) + ' 1 ' + x1 + ',' + y1 + ' Z', 'stroke-width':2}, svg, {fill:col(i), stroke:'var(--surface)'});
      }
      if (frac >= 0.045) {
        var mid = (ang + a1) / 2, rr = R * 0.66;
        var t = S('text', {x:cx + rr * Math.cos(mid), y:cy + rr * Math.sin(mid) + 4, 'text-anchor':'middle'}, svg);
        t.textContent = fmt(s[1]) + (spec.unit === undefined ? '%' : spec.unit);
      }
      ang = a1;
    });
    if (p.label) box.appendChild(H('div', 'cap', p.label));
    box.appendChild(svg);
    holder.appendChild(box);
  });
  var small = [];
  spec.pies.forEach(function(p){ p.slices.forEach(function(s){ if (s[1] / 100 < 0.045) small.push((p.label ? p.label + ': ' : '') + s[0] + ' ' + s[1] + '%'); }); });
  if (small.length && !spec.note) spec = Object.assign({}, spec, {note:'Small segments: ' + small.join(' · ')});
  return wrap(spec, holder, boxLegend(names));
}

function table(spec){
  var outer = H('div', 'tscroll'), t = H('table', 'dtable'), thead = H('thead'), tr = H('tr');
  spec.columns.forEach(function(c){ tr.appendChild(H('th', null, c)); });
  thead.appendChild(tr); t.appendChild(thead);
  var tb = H('tbody');
  spec.rows.forEach(function(r){
    var row = H('tr');
    r.forEach(function(c, i){ row.appendChild(H(i === 0 ? 'th' : 'td', null, typeof c === 'number' ? fmt(c) : c)); });
    tb.appendChild(row);
  });
  t.appendChild(tb); outer.appendChild(t);
  return wrap(spec, outer, null);
}

var KIND = {building:'Buildings', green:'Park / trees / grass', water:'Water', road:'Road', parking:'Car park', ped:'Pedestrian area / path', sand:'Beach / play area', farm:'Farmland'};
function map(spec){
  var gw = spec.w || 12, gh = spec.h || 8, cs = 40, holder = H('div', 'maps'), used = {};
  spec.panels.forEach(function(p){
    var pane = H('div', 'map-panel');
    pane.appendChild(H('div', 'map-label', p.label));
    var svg = S('svg', {viewBox:'0 0 ' + gw * cs + ' ' + gh * cs, role:'img', 'aria-label':'Map: ' + p.label});
    S('rect', {x:0, y:0, width:gw * cs, height:gh * cs, rx:6}, svg, {fill:'var(--m-land)'});
    p.cells.forEach(function(c){
      used[c[4]] = true;
      S('rect', {x:c[0] * cs + 1, y:c[1] * cs + 1, width:c[2] * cs - 2, height:c[3] * cs - 2, rx:4, class:'cell'}, svg, {fill:'var(--m-' + c[4] + ')'});
      if (c[5]) {
        var lines = String(c[5]).split('\n'), cx = (c[0] + c[2] / 2) * cs, cy = (c[1] + c[3] / 2) * cs - (lines.length - 1) * 7;
        var t = S('text', {x:cx, y:cy + 4, 'text-anchor':'middle'}, svg);
        lines.forEach(function(ln, i){ var ts = S('tspan', {x:cx, dy: i === 0 ? 0 : 14}, t); ts.textContent = ln; });
      }
    });
    var nx = gw * cs - 18;
    S('path', {d:'M' + nx + ',8 l7,16 l-7,-5 l-7,5 z'}, svg, {fill:'var(--ink)'});
    var nt = S('text', {x:nx, y:36, 'text-anchor':'middle'}, svg); nt.textContent = 'N';
    pane.appendChild(svg);
    holder.appendChild(pane);
  });
  var ul = H('ul', 'legend');
  Object.keys(used).forEach(function(k){ var li = H('li'), sw = H('span', 'sw'); sw.style.background = 'var(--m-' + k + ')'; sw.style.border = '1px solid var(--m-stroke)'; li.appendChild(sw); li.appendChild(document.createTextNode(KIND[k] || k)); ul.appendChild(li); });
  return wrap(spec, holder, ul);
}

function process(spec){
  var outer = H('div'), ol = H('ol', 'process');
  spec.steps.forEach(function(s, i){
    var li = H('li'), card = H('div', 'step');
    card.appendChild(H('b', null, 'Stage ' + (i + 1)));
    card.appendChild(document.createTextNode(s));
    li.appendChild(card);
    if (i < spec.steps.length - 1) li.appendChild(H('span', 'arrow', '→'));
    ol.appendChild(li);
  });
  outer.appendChild(ol);
  if (spec.cycle) outer.appendChild(H('div', 'cycle-note', '↻ ' + (spec.cycle === true ? 'The last stage leads back to Stage 1 (a cycle).' : spec.cycle)));
  return wrap(spec, outer, null);
}

function mixed(spec){
  var holder = H('div', 'mixed');
  spec.parts.forEach(function(p){ holder.appendChild(render(p)); });
  return wrap({title:spec.title, note:spec.note}, holder, null);
}

function render(spec){
  var fn = {line:line, bar:bar, pie:pie, table:table, map:map, process:process, mixed:mixed}[spec.type];
  return fn ? fn(spec) : H('div', 'note', 'Unknown chart type');
}
window.Charts = {render:render};
})();
