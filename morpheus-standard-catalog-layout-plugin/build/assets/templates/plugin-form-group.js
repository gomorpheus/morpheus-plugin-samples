//# sourceMappingURL=plugin-form-group.js.map
(function(){var h=HandlebarsCustom.template;(HandlebarsCustom.templates=HandlebarsCustom.templates||{})["plugin-form-group"]=h({1:function(f,a,c,g,d){return"collapsed"},3:function(f,a,c,g,d){return' collapsible="" '},compiler:[7,">= 4.0.0"],main:function(f,a,c,g,d){var e,b;return'<fieldset>\n\t<legend class="'+(null!=(e=c["if"].call(a,null!=a?a.isCollapsed:a,{name:"if",hash:{},fn:f.program(1,d,0),inverse:f.noop,data:d}))?e:"")+'" '+(null!=(e=c["if"].call(a,null!=a?a.isCollapsible:a,{name:"if",hash:{},
fn:f.program(3,d,0),inverse:f.noop,data:d}))?e:"")+">"+(null!=(e=(b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(a,{name:"name",hash:{},data:d}):b))?e:"")+'</legend>\n\t<div group-code="'+(null!=(e=(b=null!=(b=c.code||(null!=a?a.code:a))?b:c.helperMissing,"function"===typeof b?b.call(a,{name:"code",hash:{},data:d}):b))?e:"")+'"></div>\n</fieldset>'},useData:!0})})();