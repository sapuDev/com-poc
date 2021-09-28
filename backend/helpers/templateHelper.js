const SetTemplate = (template) => {
    console.log("template", template);
    try {
        let newTemplate = null;
        switch (template) {
            case "birthdays":
                newTemplate = "Happy birthday to you ";
                break;
            case "christmas":
                newTemplate = "Merry christmas to you ";
                break;
            case "newyear":
                newTemplate = "Happy new year to you ";
                break;

            default:
                break;
        }
        return newTemplate;
    } catch (error) {
        console.log("error select template", error);
        return null;
    }
};
module.exports = {
    SetTemplate,
};
