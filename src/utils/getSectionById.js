import {sections} from "../sections.config";

export const getSectionById = (id) => {
    return sections.find(section=> section.id === id);
}