(function() {
  
var changeColor = function (event) {
    eventObj.preventDefault(event);
    
    var elem = eventObj.getTarget(event),
        colorData = elem.getAttribute('data-color');
    
    if (event.type === 'click') {
        
        document.body.className = '';
    } else if (event.type === 'mouseover') {
        
        document.body.className = colorData;
    }
};
 
    
eventObj.addEvent(document, 'click', changeColor);
eventObj.addEvent(document, 'mouseover', changeColor);

})();