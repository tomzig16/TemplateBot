class WizardStep {
    constructor(wizardId, stepId, stepTitle, stepDescription) {
        // Set information as properties of that instance.
        this.wizardId = wizardId;
        this.stepId = stepId;
        this.stepTitle = stepTitle;
        this.stepDescription = stepDescription;
    }
    saveStepInput(response) {
        // Save the response as a property.
        this.stepResponse = response;
        this.stepInfoObject = {
            wizardId: this.wizardId,
            stepId: this.stepId,
            stepTitle: this.stepTitle,
            stepDescription: this.stepDescription,
        };
    }
    printStepInfo() {
        console.log(this.stepInfoObject);
    }
}
