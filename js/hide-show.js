// Put all the descendant divs of the div # container in a jQuery variable named "divs", 
//and store this variable
let divs = $('#container').find('div');
// console.log(divs);

// For the first of the divs (use the .eq () method), hide it immediately (.hide ()).
// Check in the inspector that the element is has the attribute value display: none;
divs.eq(0).hide();

// For the 2nd of the divs (.eq () method), using chaining: hide it slowly (.hide ("slow"))
//, then show it "quickly" (.show ("fast"))
divs.eq(1).hide('slow').show('fast');

// For the 3rd of the divs, hide it in 5000ms with the fading effect (ie by its opacity, 
//.fadeOut (5000)). Then pause the subsequent animations for 4000 ms. Then make the element 
//reappear in 4000ms (.fadeIn (4000))
divs.eq(2).fadeOut(5000).delay(4000).fadeIn(4000);

// For the 4th of the div, bring it up to a final opacity of 0.3 in 5000ms with a
// "swing" effect (.fadeTo (5000, 0.3, "swing", function () {...})). 
//When the effect is complete, assign the CSS class "active" to the element. 
//For that, use the last argument which is a function "callback". 
//This function will be called at the end of the animation. In the code of the function, 
//put the CSS class to the element. Finally, chained to the fadeOut () method, 
//return this element to an opacity of 0.6 in 4000ms .fadeTo (4000, 0.6)
divs.eq(3).fadeTo(5000, 0.3, "swing", function () {
    $(this).addClass('active');
}).fadeTo (4000,0.6);


// Close the 5th div in 4000ms (.slideUp ()) and when the closure is complete,
// reopen it in 4000ms (.slideDown ())
divs.eq(4).slideUp(4000).slideDown(4000);