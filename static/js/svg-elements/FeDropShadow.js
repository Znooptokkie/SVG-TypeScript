import { CreateSvgElements } from "../svg-core/CreateSvgElements.js";
export class SVGFeDropShadow {
    parentSvgElement;
    attributes;
    constructor(parentSvgElement, attributes) {
        this.parentSvgElement = parentSvgElement;
        this.attributes = attributes;
    }
    createFeDropShadowElement() {
        const feDropShadowElement = CreateSvgElements.createSVGElement("feDropShadow", this.attributes);
        if (!feDropShadowElement || !this.parentSvgElement) {
            console.error("Cannot create <feDropShadow> SVG Element");
            return null;
        }
        const filterElement = this.parentSvgElement.createFilterElement();
        filterElement?.appendChild(feDropShadowElement);
    }
}
//# sourceMappingURL=FeDropShadow.js.map