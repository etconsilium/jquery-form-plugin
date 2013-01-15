/**
 * jQuery plugin
 * form to object (json)
 * @example
 * 	var data = $('#form').serializeJSON();
 * 		$('#form').clear();
 * 		$('#form').restoreJSON(data);
 * 
 * & fill form from json
 * & clear form
 * & reset
 * 
 * @require jQuery
 * @origin serialize http://stackoverflow.com/questions/5603117/jquery-create-object-from-form-fields
 * @see also variant http://bitovi.com/blog/2010/06/convert-form-elements-to-javascript-object-literals-with-jquery-formparams-plugin.html
 * @origin clear http://www.hardcode.nl/archives_139/article_588-clear-form-with-jquery.htm
 *
 * @license BSDLv2
 * @copyright (cc-by) VS
 * 
 */
(function( $ ){
    $.fn.serializeJSON=function() {
        var json = {};
        jQuery.map($(this).serializeArray(), function(n, i){
            json[n['name']] = n['value'];
        });
        return json;
    };
})( jQuery );
(function( $ ){
    $.fn.clear=function() {
    	$(this).find(':input').each(function(){
			var type = this.type, tag = this.tagName.toLowerCase();
			if ('text'==type || 'password'==type || 'textarea'==tag)
				this.value = '';
			else if ('checkbox'==type ||'radio'==type)
				this.checked = false;
			else if ('select'==tag)
				this.selectedIndex = -1;
		})
        return this;
    };
})( jQuery );
(function( $ ){
    $.fn.reset=function() {
    	$(this).each(function(){
			this.reset();
		}
        return this;
    };
})( jQuery );

(function( $ ){
    $.fn.restoreJSON=function(json) {
    	$(this).find(':input').each(function(){
			var type = this.type, tag = this.tagName.toLowerCase(), name = this.name.toLowerCase();
    		console.log(tag,name,json[name]);
			if ('text'==type || 'password'==type || 'textarea'==tag)
				this.value = json[name];
			else if ('checkbox'==type)
				this.checked = json[name];
            else if ('radio'==type)
                this.checked = (json[name] == this.value);
			else if ('select'==tag)
				this.selectedIndex = json[name];
		})
        return this;
    };
})( jQuery );