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
    
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    return {
        getInput: function() {
            
            return {
            type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            };
           
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMstrings();
    
   var ctrlAddItem = function() {
       
       // 1. get the field input data
       
       var input = UICtrl.getInput();
       console.log(input);
       
       
   }
   
   document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event){
        
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    })
    
    
})(budgetController, UIController);