class TemplateBuiler {
    constructor() {
        this.templateObj = {};
        this.templateObj["fields"] = [];
        this.orderNo = 0;
    }
    addTemplateInfo(templateTitle, templateDescription) {
        this.templateObj["templateInfo"] = {
            title: templateTitle,
            description: templateDescription,
        };
    }
    addField(fieldTitle, fieldDescription, isFieldRequired) {
        this.orderNo = this.orderNo + 1;
        this.templateObj["fields"].push({
            title: fieldTitle,
            description: fieldDescription,
            isRequired: isFieldRequired,
            orderNumber: this.orderNo,
        });
    }
    buildTemplate() {
        return this.templateObj;
    }
}

module.exports = TemplateBuiler;
