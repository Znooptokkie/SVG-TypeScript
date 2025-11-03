import { CreateSvgElements } from "../svg-core/CreateSvgElements.js";
export class SVGDefsElement {
    parentSvg;
    defSvgElement = null;
    constructor(parentSvg) {
        this.parentSvg = parentSvg;
    }
    createDefSVGElement() {
        if (!this.defSvgElement) {
            this.defSvgElement = CreateSvgElements.createSVGElement("defs");
            if (!this.defSvgElement) {
                console.error("Cannot create <defs> element.");
                return null;
            }
            this.parentSvg.appendSVGToHTMLId(this.defSvgElement);
        }
        return this.defSvgElement;
    }
}
//# sourceMappingURL=DefsElement.js.map