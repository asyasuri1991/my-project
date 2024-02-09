const validator = new JustValidate('#questionnaire');

validator.addRequiredGroup('#radiobox', [
    {
        rule: "required",
    }
]).addField('#textInput',[
    {
        rule: "required",
    },
    {
        errorMessage:"error",
    }
])