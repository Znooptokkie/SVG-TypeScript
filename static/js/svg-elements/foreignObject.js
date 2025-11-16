import { CreateSvgElements } from "../svg-core/CreateSvgElements.js";
import { SVGGroup } from "./Group.js";
export class SVGForeignObject {
    parentSvg;
    attributes;
    foreignObjectElement = null;
    constructor(parentSvg, attributes) {
        this.parentSvg = parentSvg;
        this.attributes = attributes;
        this.attributes = attributes;
    }
    createForeignObjectElement() {
        if (!this.foreignObjectElement) {
            this.foreignObjectElement = CreateSvgElements.createSVGElement("foreignObject", this.attributes);
            if (!this.foreignObjectElement) {
                console.error("Cannot create <foreignObject> element.");
                return null;
            }
            if (this.parentSvg instanceof CreateSvgElements) {
                this.parentSvg.appendSVGToHTMLId(this.foreignObjectElement);
            }
            else if (this.parentSvg instanceof SVGGroup) {
                if (!this.parentSvg.element) {
                    this.parentSvg.createGroupSVGElement();
                }
                this.parentSvg.element?.appendChild(this.foreignObjectElement);
            }
        }
        return this.foreignObjectElement;
    }
    get element() {
        return this.foreignObjectElement;
    }
}
//# sourceMappingURL=foreignObject.js.map