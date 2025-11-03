import { CreateSvgElements } from "../svg-core/CreateSvgElements.js";
export class SVGClipPathElement {
    parentSvg;
    attributes;
    clipPathSvgElement = null;
    constructor(parentSvg, attributes) {
        this.parentSvg = parentSvg;
        this.attributes = attributes;
        this.attributes = attributes;
    }
    createClipPathSVGElement() {
        this.clipPathSvgElement = CreateSvgElements.createSVGElement("clipPath", this.attributes);
        if (!this.clipPathSvgElement) {
            console.error("Cannot create <clipPath> element.");
            return null;
        }
        return this.parentSvg.appendSVGToHTMLId(this.clipPathSvgElement);
    }
}
//# sourceMappingURL=ClipPath.js.map