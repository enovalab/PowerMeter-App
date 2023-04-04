export function addAlphaToRGB(rgb, alpha) {
    if (alpha < 0) {
        alpha = 0;
    } else if (alpha > 1) {
        alpha = 1;
    }
    let colorArray = rgb.match(/\d+/g);
    return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${alpha})`;
}


export function averageArray(array) {
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length || 0;
}


export function inputTypeCast(type, value) {
    switch(type) {
        case "number":
            return Number(value);
        case "checkbox":
            console.log(Boolean(value));
            return Boolean(value);
        default: 
            return value;
    }
}


export async function callRestAPI(url, method = "GET", data) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    }

    if(data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();    
}