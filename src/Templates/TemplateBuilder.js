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

let templBuilder = new TemplateBuiler();
templBuilder.addTemplateInfo(
    "Whole template title",
    "Whole template description"
);
templBuilder.addField("Field title", "field description", true);
templBuilder.addField("Second field title", "field description 2", false);
console.log(templBuilder.buildTemplate());
