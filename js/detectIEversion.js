/*based on http://farukat.es/journal/2009/05/245-ie8-and-the-x-ua-compatible-situation*/
var __IE__ = false;
/*@cc_on
   @if ( @_jscript_version >= 5.7 )
      __IE__ = true;
   @elif ( @_jscript_version == 5.6 )
      __IE__ = 6;
   @else
      __IE__ = 1;
   @end
@*/
if ( __IE__ === true) {
	if (!!window.atob && !!window.IDBObjectStore && !!window.matchMedia && !!window.navigator.msPointerEnabled) {  
		__IE__ = 10;
	}
	else{
		var elem = document.createElement('div');
		elem.innerHTML = '<!--[if IE 5]><div class="ie5"></div><![endif]--><!--[if IE 7]><div class="ie7"></div><![endif]--><!--[if IE 8]><div class="ie8"></div><![endif]--><!--[if IE 9]><div class="ie9"></div><![endif]-->';
		__IE__ = parseInt(elem.firstChild.className.substring(2), 0);
		elem = null;
	}   
}
