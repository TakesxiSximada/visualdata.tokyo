// -*- coding: utf-8 -*-
!function (){
    if (this.VisualData){  // include gurd
        return;
    }

    var VisualData = {
        version: "0.1.0",
        tutorial_selection: function (tree){
            var paragraphs = tree.getElementsByTagName('p');  // HTMLCollection object
            Array.prototype.forEach.call(paragraphs, function (paragraph){
                paragraph.style.setProperty('color', 'red', null);
            });
        },
    };
    this.VisualData = VisualData;
}();
