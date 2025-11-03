import { CreateSvgElements } from "../svg-core/CreateSvgElements.js";
import { SVGGroup } from "./Group.js";
export class SVGPath {
    parentSvgElement;
    attributes;
    constructor(parentSvgElement, attributes) {
        this.parentSvgElement = parentSvgElement;
        this.attributes = attributes;
    }
    createPathElement() {
        const pathElement = CreateSvgElements.createSVGElement("path", this.attributes);
        if (!pathElement || !this.parentSvgElement) {
            console.error("Can not create <path> SVG Element");
            return null;
        }
        if (this.parentSvgElement instanceof CreateSvgElements) {
            this.parentSvgElement.appendSVGToHTMLId(pathElement);
        }
        else if (this.parentSvgElement instanceof SVGGroup) {
            const groupElement = this.parentSvgElement.createGroupSVGElement();
            groupElement?.appendChild(pathElement);
        }
    }
}
//# sourceMappingURL=Path.js.map