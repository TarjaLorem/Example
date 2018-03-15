var eventObj = {
    addEvent: function (elem, type, fn) {
        if (typeof addEventListener !== 'undefined') {
            elem.addEventListener(type, fn, false);
        } else if (typeof attachEvent !== 'undefined') {
            elem.attachEvent ('on' + type, fn);
        } else {
            elem['on' + type] = fn;
        }
    },
    
    getTarget: function (event) {
        if (typeof event.target !== 'undefined') {
            return event.target;
        } else {
            return event.srcElement;
        }
    },
    
    preventDefault: function (event) {
        if (typeof event.preventDefault !== 'undefined') {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
};