import { CreateSvgElements } from "../svg-core/CreateSvgElements.js";
export class SVGGroup {
    parentSvg;
    attributes;
    groupSvgElement = null;
    constructor(parentSvg, attributes
    // TODO!: Moet nog zorgen dat die ook in zichezelf <g> kan groeperen
    ) {
        this.parentSvg = parentSvg;
        this.attributes = attributes;
        this.attributes = attributes;
    }
    createGroupSVGElement() {
        if (!this.groupSvgElement) {
            this.groupSvgElement = CreateSvgElements.createSVGElement("g", this.attributes);
            if (!this.groupSvgElement) {
                console.error("Cannot create <defs> element.");
                return null;
            }
            this.parentSvg.appendSVGToHTMLId(this.groupSvgElement);
        }
        return this.groupSvgElement;
    }
}
//# sourceMappingURL=Group.js.map