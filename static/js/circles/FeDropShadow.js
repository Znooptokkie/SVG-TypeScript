import { CreateSvgElements } from "../svg-core/CreateSvgElements.js";
export class SVGFeDropShadow {
    parentFilter;
    attributes;
    constructor(parentFilter, attributes) {
        this.parentFilter = parentFilter;
        this.attributes = attributes;
    }
    createFeDropShadowElement() {
        const feDropShadowElement = CreateSvgElements.createSVGElement("feDropShadow", this.attributes);
        const filterElement = this.parentFilter.createFilterElement();
        if (!feDropShadowElement || !filterElement) {
            console.error("Can not create <filter? SVG Element");
            return null;
        }
        return filterElement.appendChild(feDropShadowElement);
    }
}
//# sourceMappingURL=FeDropShadow.js.map