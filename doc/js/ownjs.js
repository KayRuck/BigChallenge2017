// Code Snipp made by Siraj from https://bootsnipp.com/snippets/9nVj

("#carousel-example-generic").carousel();
var winWidth = (window).innerWidth();
(window).resize(function () {  'use strict';

       
        if ((window).innerWidth() < winWidth) { ('.carousel-inner>.item>img').css({'min-width': winWidth, 'width': winWidth}); } else {winWidth = (window).innerWidth(); ('.carousel-inner>.item>img').css({'min-width': '', 'width': '' });
        }
                                });
