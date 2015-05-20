// -*- coding: utf-8 -*-
!function (){
    if (this.VisualData){  // include gurd
        return;
    }

    var VisualData = {
        version: "0.1.0",

        // selection
        draw: function(target, value, selector, tree){
            if (typeof tree === 'undefined') tree = document;
            var elms = tree.getElementsByTagName(selector);
            Array.prototype.forEach.call(elms, function (elm){
                elm.style.setProperty(target, value, null);
            });
        },

        // dynamic properties
        rainbow: function (selector){
            d3.selectAll(selector).style('color', function(){
                return 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
            });
        },

        super_rainbow: function (selector){
            var elms = d3.selectAll(selector);
            Array.prototype.forEach.call(elms, function (elm){
                var elm = elm[0];
                var data = elm.textContent;
                elm.textContent = '';
                Array.prototype.forEach.call(data, function (ch){
                    var tag = document.createElement('span');
                    tag.textContent = ch;
                    d3.select(tag).style('color', 'hsl(' + Math.random() * 360 + ', 100%, 50%)');
                    elm.appendChild(tag);
                });
            });
        },

        // dynamic properties
        zebra: function (selector){
            d3.selectAll(selector).style('color', function(d, i){
                return i % 2 ? "#115" : "#3cc";
            });
        },
    };
    this.VisualData = VisualData;
}();
