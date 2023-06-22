export const ipPattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export function addAlphaToRGB(rgb, alpha) {
    if (alpha < 0) {
        alpha = 0;
    } else if (alpha > 1) {
        alpha = 1;
    }
    let colorArray = rgb.match(/\d+/g);
    return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${alpha})`;
}

export function formatDuration(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    let duration = [];
    if (days > 0) {
        duration.push(`${days}d`);
    }
    if (hours > 0) {
        duration.push(`${hours}h`);
    }
    if (minutes > 0) {
        duration.push(`${minutes}min`);
    }
    if (seconds > 0) {
        duration.push(`${seconds}s`);
    }

    return duration.join(" ");
}
  

export function roundToStep(num, step) {
    return Math.ceil(num / step) * step;
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

export function getDeviceIP() {
    return new URL(window.location.href).searchParams.get("ip");
}

export function getDeviceURL() {
    const deviceIP = getDeviceIP();
    if(deviceIP) {
        return `http://${deviceIP}`;
    }
}

export async function fetchRestAPI(url, method = "GET", requestData, timeoutMilliseconds = 10000) {
    const options = {
        signal: AbortSignal.timeout(timeoutMilliseconds),
        method,
        headers: {
            "Content-Type": "application/json"
        }
    };
    if(requestData !== undefined) {
        options.body = JSON.stringify(requestData);
    }
    const response = await fetch(url, options);
    const responseData = await response.json();
    if(!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status} `;
        if(responseData.error) {
            errorMessage += `message: ${responseData.error}`;
        }
        throw new Error(errorMessage);
    }
    return responseData;
}  