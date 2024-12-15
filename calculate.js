// Triangle base & height:

function calculateTriangle() {
    //console.log('kaj krse');

    // Get the triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const baseText = triangleBase.value;
    const base = parseFloat(baseText);
    //console.log(base);

    // Get the triangle height value
    const triangleHeight = document.getElementById('triangle-height');
    const heightText = triangleHeight.value;
    const height = parseFloat(heightText);
    //console.log(height);

    // Calculate the triangle area
    const area = 0.5 * base * height;
    console.log('Area of the triangle is: ', area);

    // Display triangle area
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}