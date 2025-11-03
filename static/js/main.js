"use strict";
// import { CreateSvgElements } from "./svg-core/CreateSvgElements.js";
// import { SVGFilterElement } from "./svg-elements/Filter.js";
// import { SVGFeDropShadow } from "./svg-elements/FeDropShadow.js";
// import { SVGClipPathElement } from "./svg-elements/ClipPath.js";
// import { SVGCircle } from "./svg-elements/Circle.js";
// import { SVGGroup } from "./svg-elements/Group.js";
// import { SVGLine } from "./svg-elements/Line.js";
// import { SVGPath } from "./svg-elements/Path.js";
// import { CalcCircleProperties } from "./svg-calculations/CalcCircleProperties.js";
// const circumference: number = CalcCircleProperties.calcCircleCircumference(375); 
// console.log(CalcCircleProperties.calcStrokeDasharray(200, circumference));
// const circleSvg = new CreateSvgElements(
//     "circle-1",
//     { 
//         viewBox: "0 0 500 500", 
//         preserveAspectRatio: "xMidYMid" 
//     },
//     true
// );
// const filter = new SVGFilterElement(circleSvg, {
//     id: "shadow",
//     x: "-50%",
//     y: "-50%",
//     width: "200%",
//     height: "200%"
// }); 
// // console.log(filter);
// // filter.getFilterElement();
// const feDropShadow = new SVGFeDropShadow(filter, {
//     dx: "2",
//     dy: "3",
//     stdDeviation: "5",
//     "flood-color": "rgba(0, 0, 0, 0.5)",
//     "flood-apacity": "0.6"
// });
// // console.log(feDropShadow);
// feDropShadow.createFeDropShadowElement();
// const clipPath = new SVGClipPathElement(circleSvg, {
//     id: "circle-inner"
// });
// // clipPath.createClipPathSVGElement();
// const circleInClipPath = new SVGCircle(clipPath, {
//     cx: 550,
//     cy: 550,
//     r: 275
// })
// circleInClipPath.createCircleElement()
// const groupWhiteHollowFirst = new SVGGroup(circleSvg, {
//     class: "white-hollow-deco-first"
// })
// // groupWhiteHollowFirst.createGroupSVGElement()
// const firstGroupFirstLine = new SVGLine(groupWhiteHollowFirst, {
//     x1: 400,
//     y1: 200,
//     x2: 550,
//     y2: 550,
//     stroke: "rgba(255, 255, 255, 1)",
//     "stroke-width": 2
// })
// firstGroupFirstLine.createLineElement();
// const firstGroupSecondLine = new SVGLine(groupWhiteHollowFirst, {
//     x1: 1000,
//     y1: 400,
//     x2: 550,
//     y2: 550,
//     stroke: "rgba(255, 255, 255, 1)",
//     "stroke-width": 2
// })
// firstGroupSecondLine.createLineElement();
// // console.log(circleInClipPath);
// const firstGroupFirstPath = new SVGPath(groupWhiteHollowFirst, {
//     d: "M 400 200 A 447.2136 447.2136 0 0 1 1000 400",
//     fill: "none",
//     stroke: "rgba(255, 255, 255, 1)",
//     "stroke-width": 2
// })
// firstGroupFirstPath.createPathElement();
//# sourceMappingURL=main.js.map