const jss = (function () {
  "use strict";
  /// Constructor 
  /// params el string the query selector 
  //// params props object of property and values
  function Constructor(el, props) {
	  /// save the query selector 
	this.el = el;
	/// save elements in selector variable
	this.NodeList = document.querySelectorAll(el);
	/// call the style function to apply the styles passed  in  props object 
 this.style(props)
 
  }


  //// style function 

  /// params props object of property and values
  Constructor.prototype.style = function(props){

	/// get the array of keys
	let keys = Object.keys(props);

	//// run this function for element 
    this.NodeList.forEach(function (item) {

		//// run this code for each key
      keys.forEach((key) => {

		//// change the style

		item.style[key] = props[key];

		
      });
    });
  }
  

  //// return a function that returns new constructor  

  return function (el, props) {
    return new Constructor(el, props);
  };
})();
