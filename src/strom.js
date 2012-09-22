(function () {
    // save a reference to the global object (window)
    var root = this;
    // top-level namespace which exposes strom functionality
    var Strom = root.Strom = {};
    
    
    
    /*
     * Prepare code for extend based on Backbone's one
     *
     * http://ejohn.org/blog/simple-javascript-inheritance/
     
    // The self-propagating extend function that Backbone classes use.
    var extend = function (protoProps, classProps) {
        var child = inherits(this, protoProps, classProps);
        child.extend = this.extend;
        
        return child;
    };

    // Set up inheritance for the model, collection, and view.
    Model.extend = Collection.extend = Router.extend = View.extend = extend;
    */
}());