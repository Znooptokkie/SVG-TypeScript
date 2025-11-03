import { CreateSvgElements } from "../svg-core/CreateSvgElements.js";
import { SVGDefsElement } from "./Defs.js";
export class SVGFilterElement extends SVGDefsElement {
    attributes;
    constructor(parentSvg, attributes) {
        super(parentSvg);
        this.attributes = attributes;
    }
    createFilterElement() {
        const filterElement = CreateSvgElements.createSVGElement("filter", this.attributes);
        const defsElement = this.createDefSVGElement();
        if (!filterElement || !defsElement) {
            console.error("Can not create <filter> SVG Element");
            return null;
        }
        return defsElement.appendChild(filterElement);
    }
}
//# sourceMappingURL=Filter.js.map