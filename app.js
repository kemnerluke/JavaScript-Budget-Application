var budgetController = (function () {
    
    var x = 23;
    
    var add = function(a) {
        return x + a;
    }
    
    return {
        publicTest: function(b) {
            return add(b);
        }
    }
    
})();

var UIController = (function() {
    
    // some code
    
})();


var controller = (function(budgetCtrl, UICtrl) {
    
   
    
    
})(budgetController, UIController);