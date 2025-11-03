import { SVGClipPathElement } from "./ClipPath.js";
import { CreateSvgElements } from "../svg-core/CreateSvgElements.js";
export class SVGCircle {
    parentSvg;
    attributes;
    constructor(parentSvg, attributes) {
        this.parentSvg = parentSvg;
        this.attributes = attributes;
        this.parentSvg = parentSvg;
        this.attributes = attributes;
    }
    createCircleElement() {
        const circleElement = CreateSvgElements.createSVGElement("circle", this.attributes);
        if (!circleElement || !this.parentSvg) {
            console.error("Can not create <circle> SVG Element");
            return null;
        }
        if (this.parentSvg instanceof CreateSvgElements) {
            this.parentSvg.appendSVGToHTMLId(circleElement);
        }
        else if (this.parentSvg instanceof SVGClipPathElement) {
            const clipPath = this.parentSvg.createClipPathSVGElement();
            clipPath?.appendChild(circleElement);
        }
    }
}
//# sourceMappingURL=Circle.js.map