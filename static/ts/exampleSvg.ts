// 
// -- **Creates an <svg> with optional attributes and children**
// -- **Calls the CreateSvgElements class to make the <svg> HTML Element**
// -- **Creates a group**
// -- **Creates a line which is added to the group**
// -- **Add line to group**
// -- **Add group to <svg>**
// 

import { CreateSvgElements } from "./svg-core/CreateSvgElements.js";


/*

function exampleSVG(): SVGElement | null
{
    // Create an instance for the <svg>
    const svg = new CreateSvgElements(
        "svg-container", // Grab the ID from the HTML <svg> container
        {
            viewBox: "0 0 750 750", // Creates a view box. better then width/height for responsive (xStart: 0, yStart: 0, xEnd: 750, yEnd: 750)
            preserveAspectRatio: "xMidYMid" // Make sure that al elements scale correct when smaller screen
        },
        true // Default styling for responsive. Works together with above attribute: preserveAspectRatio 
    );

    // Error for TypeScript
    // If svg instance cannot be created
    if (!svg) 
    {
        console.error("Cannot create instance of CreateSvgElements class");
        return null;
    }


    const group = svg.createSVGElement("g"); // Make an group SVG Element
    const createSvgLine = svg.createSVGElement("line", // Make an line SVG Element with attributes
    {
        x1: "375",
        y1: "250",
        x2: "300",
        y2: "300",
        stroke: "red",
        "stroke-width": "4"
    });

    // Error for TypeScript
    // If group SVG Element and line SVG Element cannot be created
    if (!group && !createSvgLine) 
    {
        console.error("No elements could be created");
        return null;
    }

    // If group SVG Element is correct
    if (group) 
    {
        if (createSvgLine) 
            group.appendChild(createSvgLine); // If line SVG Element created, then add <line> to <group> as a child
        svg.appendChildToSVG(group); // Add <group> to <svg> as a child
        return group; // Return group SVG Element
    } 
    // If line SVG Element is correct
    else if (createSvgLine) 
    {
        svg.appendChildToSVG(createSvgLine); // Add <line> to <svg> as a child
        return createSvgLine; // Return line SVG Element
    }

    return null;
}

exampleSVG()

*/