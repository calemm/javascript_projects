/* This is a modification of codecademy's
 * JavaScript Unit 3 lesson "Search Text for Your Name"
 * https://www.codecademy.com/learn/javascript
 *
 * Author: Sabrina Ip
 * Date: April 9, 2016
 *
 */

/*jshint multistr:true */

var text = "Text text text more text Sabrina text random words Sabrona text Sab text \
Sabrina text other wordsSabrina and Sabrinaas \
ok cool end of text";

var myName = "Sabrina";

var nameCount = 0;

for (i = 0; i < text.length; i++) {
    for (j = 0; j < myName.length; j++) {
        if (text[i] != myName[j]) {
            break;
        } else {
        	i++;
            if (j === (myName.length - 1)) {
                nameCount++;
            }
        }
    }
}

console.log("Sabrina was found " + nameCount + " times");