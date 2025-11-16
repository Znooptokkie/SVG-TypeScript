// svg-elements/Path.ts
import { CreateSvgElements } from "../svg-core/CreateSvgElements.js";
import { SVGGroup } from "./Group.js";
export class SVGPath {
    parent;
    attributes;
    pathElement = null;
    constructor(
    // Accepteer: wrapper (CreateSvgElements, SVGGroup) OF DOM-element (zoals <clipPath>)
    parent, attributes) {
        this.parent = parent;
        this.attributes = attributes;
    }
    createPathElement() {
        this.pathElement = CreateSvgElements.createSVGElement("path", this.attributes);
        if (!this.pathElement || !this.parent) {
            console.error("Cannot create <path> SVG element or parent missing.");
            return null;
        }
        // 1. Als parent een wrapper is → gebruik appendSVGToHTMLId
        if (this.parent instanceof CreateSvgElements) {
            this.parent.appendSVGToHTMLId(this.pathElement);
        }
        // 2. Als parent een SVGGroup is → gebruik .element
        else if (this.parent instanceof SVGGroup) {
            const groupEl = this.parent.element;
            if (groupEl) {
                groupEl.appendChild(this.pathElement);
            }
        }
        // 3. Als parent een echt DOM-element is (bijv. <clipPath>) → appendChild
        else if (this.parent instanceof SVGElement) {
            this.parent.appendChild(this.pathElement);
        }
        return this.pathElement;
    }
    // Correct type: SVGPathElement
    get element() {
        return this.pathElement;
    }
}
//# sourceMappingURL=Path.js.map