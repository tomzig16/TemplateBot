class WizardStep {
    constructor(wizardId, stepId, stepTitle, stepDescription) {
        // Set information as properties of that instance.
        this.wizardId = wizardId;
        this.stepId = stepId;
        this.stepTitle = stepTitle;
        this.stepDescription = stepDescription;
    }
    saveStepInput(response) {
        // Save the response as a property and in a JSON
        this.stepResponse = response;
    }
    printStepInfo() {
        console.log(this.stepInfoObject);
    }
}
