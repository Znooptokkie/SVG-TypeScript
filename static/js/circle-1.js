import { CreateSvgElements } from "./svg-core/CreateSvgElements.js";
import { SVGDefsElement } from "./svg-elements/Defs.js";
import { CustomSVGFilter } from "./svg-elements/Filter.js";
import { SVGFeDropShadow } from "./svg-elements/FeDropShadow.js";
import { SVGClipPathElement } from "./svg-elements/ClipPath.js";
import { SVGCircle } from "./svg-elements/Circle.js";
import { SVGGroup } from "./svg-elements/Group.js";
import { SVGLine } from "./svg-elements/Line.js";
import { SVGPath } from "./svg-elements/Path.js";
import { SVGImage } from "./svg-elements/Image.js";
import { CalcCircleProperties } from "./svg-calculations/CalcCircleProperties.js";
function firstFilterElement() {
    const filterShadow = new CustomSVGFilter(defsElement, {
        id: "shadow",
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%"
    });
    const feDropShadowFirstFilter = new SVGFeDropShadow(filterShadow, {
        dx: 2,
        dy: 3,
        stdDeviation: 5,
        "flood-color": "rgba(0, 0, 0, 0.5)",
        "flood-opacity": 0.6
    });
    feDropShadowFirstFilter.createFeDropShadowElement();
}
function secondFilterElement() {
    const filterBottomShadow = new CustomSVGFilter(defsElement, {
        id: "bottom-shadow",
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%"
    });
    const feDropShadowSecondFilter = new SVGFeDropShadow(filterBottomShadow, {
        dx: 0,
        dy: 2,
        stdDeviation: 5,
        "flood-color": "rgba(0, 0, 0, 1)"
    });
    feDropShadowSecondFilter.createFeDropShadowElement();
}
function createClipPath() {
    const newClipPathElement = new SVGClipPathElement(firstPrototypeSVG, {
        id: "circle-inner"
    });
    const newCircleInClipPath = new SVGCircle(newClipPathElement, {
        cx: 600,
        cy: 600,
        r: 300
    });
    newCircleInClipPath.createCircleElement();
}
function groupWhiteHollowFirst() {
    const firstGroup = new SVGGroup(firstPrototypeSVG, {
        class: "white-hollow-deco-first"
    });
    const firstLine = new SVGLine(firstGroup, {
        x1: 400,
        y1: 200,
        x2: 600,
        y2: 600,
        stroke: "rgba(255, 255, 255, 0.75)",
        "stroke-width": 2
    });
    firstLine.createLineElement();
    const secondLine = new SVGLine(firstGroup, {
        x1: 1000,
        y1: 400,
        x2: 600,
        y2: 600,
        stroke: "rgba(255, 255, 255, 0.75)",
        "stroke-width": 2
    });
    secondLine.createLineElement();
    const pathElement = new SVGPath(firstGroup, {
        d: "M 400 200 A 447.2136 447.2136 0 0 1 1000 400",
        fill: "none",
        stroke: "rgba(255, 255, 255, 0.75)",
        "stroke-width": 2
    });
    pathElement.createPathElement();
}
function groupWhiteHollowSecond() {
    const firstGroup = new SVGGroup(firstPrototypeSVG, {
        class: "white-hollow-deco-second"
    });
    const firstLine = new SVGLine(firstGroup, {
        x1: 400,
        y1: 200,
        x2: 600,
        y2: 600,
        stroke: "rgba(255, 255, 255, 0.75)",
        "stroke-width": 2
    });
    firstLine.createLineElement();
    const secondLine = new SVGLine(firstGroup, {
        x1: 1000,
        y1: 400,
        x2: 600,
        y2: 600,
        stroke: "rgba(255, 255, 255, 0.75)",
        "stroke-width": 2
    });
    secondLine.createLineElement();
    const pathElement = new SVGPath(firstGroup, {
        d: "M 400 200 A 447.2136 447.2136 0 0 1 1000 400",
        fill: "none",
        stroke: "rgba(255, 255, 255, 0.75)",
        "stroke-width": 2
    });
    pathElement.createPathElement();
}
function groupSmallBorders() {
    const firstGroup = new SVGGroup(firstPrototypeSVG, {
        class: "small-borders"
    });
    const firstInnerBlock = new SVGCircle(firstGroup, {
        class: "inner-1",
        cx: 600,
        cy: 600,
        r: 300,
        stroke: "rgba(46,204,113,1)",
        "stroke-width": 20,
        fill: "none",
        "stroke-dasharray": "250 1697.79",
        "stroke-dashoffset": 0,
        filter: "url(#shadow)"
    });
    firstInnerBlock.createCircleElement();
    const secondInnerBlock = new SVGCircle(firstGroup, {
        class: "inner-2",
        cx: 600,
        cy: 600,
        r: 300,
        stroke: "rgba(46,204,113,1)",
        "stroke-width": 20,
        fill: "none",
        "stroke-dasharray": "375 1572.79",
        "stroke-dashoffset": 600,
        filter: "url(#shadow)"
    });
    secondInnerBlock.createCircleElement();
    const thirdInnerBlock = new SVGCircle(firstGroup, {
        class: "inner-3",
        cx: 600,
        cy: 600,
        r: 300,
        stroke: "rgba(46,204,113,1)",
        "stroke-width": 20,
        fill: "none",
        "stroke-dasharray": "250 1697.79",
        "stroke-dashoffset": 1000,
        filter: "url(#shadow)"
    });
    thirdInnerBlock.createCircleElement();
    const fourthInnerBlock = new SVGCircle(firstGroup, {
        class: "inner-4",
        cx: 600,
        cy: 600,
        r: 300,
        stroke: "rgba(46,204,113,1)",
        "stroke-width": 20,
        fill: "none",
        "stroke-dasharray": "200 1747.79",
        "stroke-dashoffset": 1350,
        filter: "url(#shadow)"
    });
    fourthInnerBlock.createCircleElement();
    const fifthInnerBlock = new SVGCircle(firstGroup, {
        class: "inner-5",
        cx: 600,
        cy: 600,
        r: 300,
        stroke: "rgba(46,204,113,1)",
        "stroke-width": 20,
        fill: "none",
        "stroke-dasharray": "50 1897.79",
        "stroke-dashoffset": 1550,
        filter: "url(#shadow)"
    });
    fifthInnerBlock.createCircleElement();
}
function groupInnerBorders() {
    const firstGroup = new SVGGroup(firstPrototypeSVG, {
        class: "inner-borders"
    });
    const BGfirstCircleBlock = new SVGCircle(firstGroup, {
        class: "bg-circle-1",
        cx: 600,
        cy: 600,
        r: radiusFirstRowBG,
        stroke: greenBGColor,
        // stroke: "red",
        "stroke-width": 100,
        fill: "none",
        // "stroke-dasharray": "200 2156.20",
        "stroke-dasharray": CalcCircleProperties.calcStrokeDasharray(200, circumferenceInnerBorderBG),
        "stroke-dashoffset": 25,
        filter: "url(#shadow)"
    });
    BGfirstCircleBlock.createCircleElement();
    const firstCircleBlock = new SVGCircle(firstGroup, {
        class: "circle-1",
        cx: 600,
        cy: 600,
        r: radiusFirstRow,
        stroke: "rgba(46,204,113,1)",
        "stroke-width": 100,
        fill: "none",
        // "stroke-dasharray": "200 2156.20",
        "stroke-dasharray": CalcCircleProperties.calcStrokeDasharray(200, circumferenceInnerBorder),
        "stroke-dashoffset": 0,
        filter: "url(#shadow)"
    });
    firstCircleBlock.createCircleElement();
    const BGsecondCircleBlock = new SVGCircle(firstGroup, {
        class: "bg-circle-1",
        cx: 600,
        cy: 600,
        r: radiusFirstRowBG,
        stroke: greenBGColor,
        // stroke: "red",
        "stroke-width": 100,
        fill: "none",
        // "stroke-dasharray": "200 2156.20",
        "stroke-dasharray": CalcCircleProperties.calcStrokeDasharray(200, circumferenceInnerBorderBG),
        "stroke-dashoffset": 1100,
        filter: "url(#shadow)"
    });
    BGsecondCircleBlock.createCircleElement();
    const secondCircleBlock = new SVGCircle(firstGroup, {
        class: "circle-2",
        cx: 600,
        cy: 600,
        r: radiusFirstRow,
        stroke: "rgba(46,204,113,1)",
        "stroke-width": 100,
        fill: "none",
        // "stroke-dasharray": "200 2156.20",
        "stroke-dasharray": CalcCircleProperties.calcStrokeDasharray(200, circumferenceInnerBorder),
        "stroke-dashoffset": 1000,
        filter: "url(#shadow)"
    });
    secondCircleBlock.createCircleElement();
    const BGThirdCircleBlock = new SVGCircle(firstGroup, {
        class: "bg-circle-1",
        cx: 600,
        cy: 600,
        r: radiusFirstRowBG,
        stroke: greenBGColor,
        // stroke: "red",
        "stroke-width": 100,
        fill: "none",
        // "stroke-dasharray": "200 2156.20",
        "stroke-dasharray": CalcCircleProperties.calcStrokeDasharray(200, circumferenceInnerBorderBG),
        "stroke-dashoffset": 1850,
        filter: "url(#shadow)"
    });
    BGThirdCircleBlock.createCircleElement();
    const thirdCircleBlock = new SVGCircle(firstGroup, {
        class: "circle-3",
        cx: 600,
        cy: 600,
        r: radiusFirstRow,
        stroke: "rgba(46,204,113,1)",
        "stroke-width": 100,
        fill: "none",
        // "stroke-dasharray": "200 2156.20",
        "stroke-dasharray": CalcCircleProperties.calcStrokeDasharray(200, circumferenceInnerBorder),
        "stroke-dashoffset": 1700,
        filter: "url(#shadow)"
    });
    thirdCircleBlock.createCircleElement();
}
function groupMiddleBorders() {
    const firstGroup = new SVGGroup(firstPrototypeSVG, {
        class: "middle-borders"
    });
    const BGFirstCircleBlock = new SVGCircle(firstGroup, {
        class: "bg-circle-1",
        cx: 600,
        cy: 600,
        r: radiusSecondRowBG,
        stroke: greenBGColor,
        // stroke: "blue",
        // stroke: "red",
        "stroke-width": 100,
        fill: "none",
        // "stroke-dasharray": "200 2156.20",
        "stroke-dasharray": CalcCircleProperties.calcStrokeDasharray(200, circumferenceMiddleBorderBG),
        "stroke-dashoffset": 325,
        filter: "url(#shadow)"
    });
    BGFirstCircleBlock.createCircleElement();
    const firstCircleBlock = new SVGCircle(firstGroup, {
        class: "middle-1",
        cx: 600,
        cy: 600,
        r: radiusSecondRow,
        stroke: "rgba(46,204,113,1)",
        // stroke: "red",
        "stroke-width": 100,
        fill: "none",
        // "stroke-dasharray": "200 2156.20",
        "stroke-dasharray": CalcCircleProperties.calcStrokeDasharray(200, circumferenceMiddleBorder),
        "stroke-dashoffset": 275,
        filter: "url(#shadow)"
    });
    firstCircleBlock.createCircleElement();
    const BGSecondCircleBlock = new SVGCircle(firstGroup, {
        class: "bg-circle-2",
        cx: 600,
        cy: 600,
        r: radiusSecondRowBG,
        stroke: greenBGColor,
        // stroke: "blue",
        // stroke: "red",
        "stroke-width": 100,
        fill: "none",
        // "stroke-dasharray": "200 2156.20",
        "stroke-dasharray": CalcCircleProperties.calcStrokeDasharray(200, circumferenceMiddleBorderBG),
        "stroke-dashoffset": 825,
        filter: "url(#shadow)"
    });
    BGSecondCircleBlock.createCircleElement();
    const secondCircleBlock = new SVGCircle(firstGroup, {
        class: "middle-1",
        cx: 600,
        cy: 600,
        r: radiusSecondRow,
        stroke: "rgba(46,204,113,1)",
        // stroke: "red",
        "stroke-width": 100,
        fill: "none",
        // "stroke-dasharray": "200 2156.20",
        "stroke-dasharray": CalcCircleProperties.calcStrokeDasharray(200, circumferenceMiddleBorder),
        "stroke-dashoffset": 750,
        filter: "url(#shadow)"
    });
    secondCircleBlock.createCircleElement();
}
// IMAGE
function imageElement() {
    const image = new SVGImage(firstPrototypeSVG, {
        class: "svg-image",
        href: "./myself.webp",
        x: 300,
        y: 300,
        width: 600,
        height: 600,
        "clip-path": "url(#circle-inner)",
        preserveAspectRatio: "xMidYMid slice"
    });
    image.createimageElement();
}
// ///////////////////  //
//                      //
//    CALCULATIONS      //
//                      //
// ///////////////////  //
const radiusFirstRow = 400;
const circumferenceInnerBorder = CalcCircleProperties.calcCircleCircumference(radiusFirstRow);
const radiusFirstRowBG = 430;
const circumferenceInnerBorderBG = CalcCircleProperties.calcCircleCircumference(radiusFirstRowBG);
const radiusSecondRow = 435;
const circumferenceMiddleBorder = CalcCircleProperties.calcCircleCircumference(radiusSecondRow);
const radiusSecondRowBG = 465;
const circumferenceMiddleBorderBG = CalcCircleProperties.calcCircleCircumference(radiusSecondRowBG);
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
    viewBox: "0 0 1200 1200",
    preserveAspectRatio: "xMidYMid meet"
}, true);
const defsElement = new SVGDefsElement(firstPrototypeSVG);
defsElement.createDefSVGElement();
firstFilterElement();
secondFilterElement();
createClipPath();
groupWhiteHollowFirst();
groupWhiteHollowSecond();
groupSmallBorders();
groupInnerBorders();
groupMiddleBorders();
imageElement();
//# sourceMappingURL=circle-1.js.map