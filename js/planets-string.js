(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|")

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */




    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

var planetsString2 = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
var planets2 = planetsString2.split('|').join('<br>')
console.log(planets2)
    // this would be useful for HTML in the future


    var planetsString3 = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsList3 = "<ul><li>" + (planetsString3.split('|').join('</li><li>')) + "</li></ul>";
    console.log(planetsList3);

})();
