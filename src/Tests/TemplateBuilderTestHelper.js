const templateBuilder = require("../Templates/TemplateBuilder");
const templateBuilderObj = new templateBuilder();

let templateInfoCorrect = false;
let templateFieldsCorrect = false;
let templateTitle = "titleOfTheTemplate";
let templateDescription = "descriptionOfTheTemplate";
let fieldTitle = "myFieldTitle";
let fieldDescription = "MyfieldDescription";

templateBuilderObj.addTemplateInfo(templateTitle, templateDescription);
templateBuilderObj.addField("myFieldTitle", "MyfieldDescription", true);

const templateObject = templateBuilderObj.buildTemplate();

const templateFields = templateObject["fields"];

if (
    templateObject["templateInfo"]["title"] == templateTitle &&
    templateObject["templateInfo"]["description"] == templateDescription
) {
    templateInfoCorrect = true;
}

for (i in templateFields) {
    if (
        templateFields[i]["title"] == fieldTitle &&
        templateFields[i]["description"] == fieldDescription
    ) {
        templateFieldsCorrect = true;
    }
}

module.exports = {
    templateFieldsCorrect: templateFieldsCorrect,
    templateInfoCorrect: templateInfoCorrect,
};
