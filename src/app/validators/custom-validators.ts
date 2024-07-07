import { AbstractControl, Form, FormControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {

    //whitespace validation
    static notOnlyWhitespace(control : AbstractControl) :ValidationErrors |null     {

        if((control.value != null) && (control.value.trim().length===0)){
            return {'notOnlyWhitespace' : true};
        }
        else
        {
            return  null;
        }
        
    }
}
