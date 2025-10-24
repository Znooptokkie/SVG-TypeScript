export class SVG {
    static SVG_NS = "http://www.w3.org/2000/svg";
    svgHTMLIdElement;
    svgWidth;
    svgHeight;
    constructor(svgHTMLIdElement, svgWidth, svgHeight) {
        this.svgHTMLIdElement = svgHTMLIdElement;
        this.svgWidth = svgWidth;
        this.svgHeight = svgHeight;
    }
    static getSVG_NS() {
        return this.SVG_NS;
    }
    setSvgHTMLIdElement(svgHTMLIdElement) {
        if (!this.svgHTMLIdElement) {
            return null;
        }
        this.svgHTMLIdElement = svgHTMLIdElement;
    }
    getSvgHTMLIdElement() {
        if (!this.svgHTMLIdElement) {
            console.error("Geen HTML element gevonden met de ID:" + this.getSvgHTMLIdElement);
            return null;
        }
        if (!this.svgWidth && !this.svgHeight) {
            console.error("Geen breedte of hoogte meegegeven aan de SVG!");
            return null;
        }
        const htmlElement = document.getElementById(this.svgHTMLIdElement);
        htmlElement?.setAttribute("width", this.svgWidth);
        htmlElement?.setAttribute("height", this.svgHeight);
        return htmlElement;
    }
}
//# sourceMappingURL=SvgElement.js.map