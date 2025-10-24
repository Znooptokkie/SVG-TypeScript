import { SVG } from "./SvgElement.js";
export class CreateSvgElements extends SVG {
    constructor(svgHTMLIdElement, svgWidth, svgHeight) {
        super(svgHTMLIdElement, svgWidth, svgHeight);
    }
    // -- elementName: is een Tag van SVGElementTagNameMap
    // -- 
    // -- return: het HTML element van de <svg>
    createSVG_NS(elementName) {
        if (!elementName) {
            console.error("Er zijn geen elementen gevonden!");
            return null;
        }
        return document.createElementNS(SVG.getSVG_NS(), elementName);
    }
    appendChildToSVG(element) {
        if (!element) {
            console.error("De SVG kan niet aan de DOM worden toegevoegd!");
            return null;
        }
        const svgContainer = this.getSvgHTMLIdElement();
        if (svgContainer) {
            return svgContainer.appendChild(element);
        }
        return null;
    }
    // -- attributes: zijn alle waardes die meegegeven worden samen met elementName
    createSVGElement(elementName, attributes) {
        const element = this.createSVG_NS(elementName);
        if (!element) {
            console.error("Er is geen (elementName) gevonden!");
            return null;
        }
        if (attributes) {
            for (const [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, String(value));
            }
        }
        return element;
    }
}
//# sourceMappingURL=CreateSvgElements.js.map