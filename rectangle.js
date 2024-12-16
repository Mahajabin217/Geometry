// Rectangle Weight & Length calculation:

function calculateRectangle(){
    //console.log('rectangle connected');

    // Get the rectangle weight value:
    const rectangleWeight = document.getElementById('rectangle-weight');
    const weightText = rectangleWeight.value;
    const weight = parseFloat(weightText);
    console.log(weight);

    // Get the rectangle length value:
    const rectangleLength = document.getElementById('rectangle-length');
    const lengthText = rectangleLength.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // Calculate the rectangle area:
    const area = weight * length;
    console.log('The area of the rectangle is: ',area);

    // Display the rectangle area:
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}