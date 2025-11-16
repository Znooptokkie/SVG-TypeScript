import { CreateSvgElements } from "./svg-core/CreateSvgElements.js";
import { SVGDefsElement } from "./svg-elements/Defs.js";
import { CustomSVGFilter } from "./svg-elements/Filter.js";
import { SVGClipPathElement } from "./svg-elements/ClipPath.js";
import { SVGGroup } from "./svg-elements/Group.js";
import { SVGPath } from "./svg-elements/Path.js";
import { SVGForeignObject } from "./svg-elements/foreignObject.js";
// ///////////////////  //
//                      //
//     VARIABLES        //
//                      //
// ///////////////////  //
const greenBGColor = "rgba(12, 30, 19, 1)";
// ///////////////////  //
//                      //
//      INSTANCES       //
//                      //
// ///////////////////  //
const firstPrototypeSVG = new CreateSvgElements("proto-1", {
    viewBox: "-3 -3 1006 782",
    preserveAspectRatio: "xMidYMid meet"
}, true);
function createBigMainBorder() {
    // 1. Maak clipPath in <defs>
    const clipPathId = "border-clip-path";
    const defs = new SVGDefsElement(firstPrototypeSVG);
    defs.createDefSVGElement();
    const clipPath = new SVGClipPathElement(defs, { id: clipPathId });
    clipPath.createClipPathSVGElement();
    const borderTop = "M25,0 L200,0 L250,50 L750,50 L800,0 L975,0";
    const borderRight = "L1000,25 L1000,200 L975,225 L975,550 L1000,575 L1000,750 L975,775";
    const borderBottom = "L800,775 L775,750 L225,750 L200,775 L25,775";
    const borderLeft = "L0,750 L0,575 L25,550 L25,225 L0,200 L0,25";
    const borderD = `${borderTop} ${borderRight} ${borderBottom} ${borderLeft} Z`;
    const clipShape = new SVGPath(clipPath.element, { d: borderD, fill: "white" });
    clipShape.createPathElement();
    // 2. Groep met overflow hidden
    const borderGroup = new SVGGroup(firstPrototypeSVG, {
        class: "big-main-border-group",
        style: "overflow: hidden;" // Belangrijk!
    });
    borderGroup.createGroupSVGElement();
    // 3. Path met clip-path + filter
    const mainPath = new SVGPath(borderGroup, {
        id: "big-main-border",
        d: borderD,
        fill: "none",
        stroke: "rgba(51, 81, 142, 0.25)",
        "stroke-width": "4",
        "stroke-opacity": "0.3",
        "clip-path": `url(#${clipPathId})`,
        filter: "url(#glass-effect)"
    });
    mainPath.createPathElement();
}
function createTextInSVG() {
    const textGroup = new SVGGroup(firstPrototypeSVG, {
        class: "main-border-text-group"
    });
    const foreignObject = new SVGForeignObject(textGroup, {
        x: 50,
        y: 50,
        width: 900,
        height: 680
    });
    foreignObject.createForeignObjectElement();
    if (foreignObject.element) {
        const div = document.createElement("div");
        div.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.lineHeight = "1.75";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.fontSize = "54px";
        div.style.color = "rgb(51, 81, 142)";
        div.innerText = '"Ik beschik over een goede basis in meerdere programmeertalen, vooral in Python en JavaScript. En ik blijf mijn kennis verder uitbreiden."';
        foreignObject.element.appendChild(div);
    }
}
function createGlassEffect() {
    const defs = new SVGDefsElement(firstPrototypeSVG);
    defs.createDefSVGElement();
    const filter = new CustomSVGFilter(defs, {
        id: "glass-effect",
        x: "-10%", y: "-10%", width: "120%", height: "120%"
    });
    filter.createFilterElement();
    if (!filter.element)
        return;
    // Very subtle blur — simuleert backdrop-filter: blur(5px)
    const blur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
    blur.setAttribute("stdDeviation", "3");
    blur.setAttribute("in", "SourceGraphic");
    blur.setAttribute("result", "blur");
    filter.element.appendChild(blur);
    // Koude donkerblauwe glas tint — extreem subtiel
    const tint = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
    tint.setAttribute("flood-color", "rgba(51, 81, 142, 0.005)");
    tint.setAttribute("result", "tint");
    filter.element.appendChild(tint);
    const tintComp = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
    tintComp.setAttribute("in", "tint");
    tintComp.setAttribute("in2", "blur");
    tintComp.setAttribute("operator", "atop");
    tintComp.setAttribute("result", "glass");
    filter.element.appendChild(tintComp);
    // Blauwe inner shadow – sterker aanwezig
    const innerShadow = document.createElementNS("http://www.w3.org/2000/svg", "feDropShadow");
    innerShadow.setAttribute("dx", "0"); // horizontale offset
    innerShadow.setAttribute("dy", "0"); // verticale offset
    innerShadow.setAttribute("stdDeviation", "10"); // meer blur = groter effect
    innerShadow.setAttribute("flood-color", "rgba(51, 81, 142, 1)"); // blauwer en meer aanwezig
    innerShadow.setAttribute("flood-opacity", "0.8");
    innerShadow.setAttribute("in", "SourceAlpha"); // werkt op de vorm zelf
    innerShadow.setAttribute("result", "inner-shadow");
    filter.element.appendChild(innerShadow);
    // Merge met bestaande glass effect
    const merge2 = document.createElementNS("http://www.w3.org/2000/svg", "feMerge");
    ["inner-shadow", "glass"].forEach(r => {
        const node = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        node.setAttribute("in", r);
        merge2.appendChild(node);
    });
    filter.element.appendChild(merge2);
}
// volgorde van aanroepen:
createGlassEffect();
createBigMainBorder();
createTextInSVG();
//# sourceMappingURL=con-1.js.map