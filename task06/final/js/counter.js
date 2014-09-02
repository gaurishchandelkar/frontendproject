var Counter = (function() {
    var my = {};
    var counter = 0;
    
    my.increment = function () {
        counter = counter + 1;
    }
    
    my.get = function () {
        return counter;
    }
    
    my.reset = function () {
        counter = 0
    }
    return my;
}())