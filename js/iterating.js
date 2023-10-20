(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
     let  names = ['Joe', 'Mary', 'Ann', 'Bob']
    
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
       console.log("There four elements in the 'names' array");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
      console.log(names)

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let name = 0; name < names.length; name++){
        console.log("Index, "  +  name  + names[name]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
     names.forEach(function(name) {
         console.log(name);
     });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    let arr=[1, 2, 3, 4,];

    function first() {
        if(arr === first);{
            console.log(first());
        }
    }

    function sec(){
        if(arr);{
            return [2];
        }
    }

    function last(){
         console.log(last.length);
        }

})();
