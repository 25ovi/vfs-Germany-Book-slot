// Delay function to pause execution to next line
const delay = ms => new Promise(res => setTimeout(res, ms));

const time = 300; // 5 hours

// Stay logged in button prompt
const stayLoggedInButton = $(".mat-focus-indicator.mat-btn-lg.btn-block.btn-brand-orange.mat-raised-button.mat-button-base");

// Boolean to check if continue button is disabled
const isContinueButtonDisabled = $('.mat-focus-indicator.btn.mat-btn-lg.btn-block.btn-brand-orange.mat-raised-button.mat-button-base').attr('disabled');

(async () => {
    // Click the dropdown for choosing a VFS center
    $(".mat-form-field-infix.ng-tns-c58-9").trigger("click");
    // Wait for 1 second
    await delay(1000);
    // Select New delhi center
    $("#mat-option-27").trigger('click');

    // Wait for 3 seconds
    await delay(3000);
    // Loop for `time` in minutes
    for(let i=0; i <= time; i++) {
        if(stayLoggedInButton){
            // Click to stay logged in
            stayLoggedInButton.trigger('click');
        }
        // Click Visa category dropdown
        $("#mat-select-8").trigger('click');
        
        // Wait for 5 seconds
        await delay(5000);

        // Scroll to bottom of page, just for keeping continue button in screen area
        window.scrollTo(0, 1000);
        
        // Select visa category self employment(whatever you don't want to book for)
        $("#mat-option-38").trigger('click');
        
        // Wait for 3 seconds
        await delay(3000);

        // Click Visa category dropdown again
        $("#mat-select-8").trigger('click');
        
        // Wait for 10 seconds
        await delay(10000);
        
        // Select visa subcategory Blue card(whatever you want to book for)
        $("#mat-option-35").trigger('click');

        // Wait for 10 seconds
        await delay(10000);
        
        // Select Visa sub-category 
        $(".mat-form-field-flex.ng-tns-c58-13").trigger('click');
        
        // Wait for 10 seconds
        await delay(10000);

        $("#mat-option-45").trigger('click');        
        await delay(19000);
        
        // If continue button is enabled(slot is enabled) for chosen category
        if(!isContinueButtonDisabled && $("#mat-select-8").children()[0].innerText == 'Blue Card and its Dependents\t') {
            // Play loud music
            window.open("https://youtu.be/bRJKrwCrfY0?t=29");
            alert("Slot is available, book now")
            return true;
        };
    }
})();
