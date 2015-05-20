// -*- coding: utf-8 -*-
!function (){
    if (this.VisualData){  // include gurd
        return;
    }

    var VisualData = {
        version: "0.1.0",
        tutorial_selection: function (tree){
            // all red
            var paragraphs = tree.getElementsByTagName('p');  // HTMLCollection object
            Array.prototype.forEach.call(paragraphs, function (paragraph){
                paragraph.style.setProperty('color', 'red', null);
            });

            // all yellow
            d3.selectAll('p').style('color', 'yellow');

            // body black
            d3.select('body').style('background-color', 'black');
        },
        tutorial_dynamic_properties: function (){
            // rainbow
            d3.selectAll('p').style('color', function(){
                return 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
            });
            // zabra
            d3.selectAll('p').style('color', function(d, i){
                return i % 2 ? "#115" : "#3cc";
            });
        },
    };
    this.VisualData = VisualData;
}();
