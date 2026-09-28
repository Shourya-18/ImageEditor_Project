let filters = {

    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation:{
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    blur: {
        value: 0, 
        min: 0,
        max: 20,
        unit: "px"
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
}

const filterContainer = document.querySelector(".container");
const imageCanvas = document.querySelector("#image-canvas");
const imageInput = document.querySelector("#image-input");
const canvasCtx = imageCanvas.getContext("2d");
let file = null;
let image = null;
const resetbtn = document.querySelector("#reset");
const downloadbtn = document.querySelector("#dow");
const buttonContainer = document.querySelector(".buttons")

function createfilter(name , unit = "%", value , min , max){
    const div = document.createElement("div");
    div.classList.add("filter");

    const input = document.createElement("input");
    input.type = "range";
    input.min = min;
    input.max = max;
    input.value = value;
    input.id = name;

    const p = document.createElement("p");
    p.textContent = name;

    div.appendChild(p);
    div.appendChild(input);

    input.addEventListener("input" , (event) => {
        filters[name].value = input.value;
        applyFilter();
    })

    return div;
}

function createInput(){
    Object.keys(filters).forEach(key => {
        const filterElement = createfilter(key , filters[key].unit , filters[key].value , filters[key].min , filters[key].max);
        filterContainer.appendChild(filterElement);
    });
}

createInput();

imageInput.addEventListener("change" ,(event) => {
    file = event.target.files[0];
    const imagePlaceholder = document.querySelector(".placeholder");
    imagePlaceholder.style.display = "none";

    const img = new Image();
    img.src =  URL.createObjectURL(file);

    img.onload = () => {
        image = img;
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        canvasCtx.drawImage(img , 0 , 0 ,)
    }
} )

function applyFilter() {

    canvasCtx.clearRect(0 , 0 , imageCanvas.width , imageCanvas.height);

    canvasCtx.filter = `
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    invert(${filters.invert.value}${filters.invert.unit})
    `;

    canvasCtx.drawImage(image , 0 , 0);
}

resetbtn.addEventListener("click" , () => {
    filters = {

        brightness: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        contrast: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        saturation:{
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        hueRotation: {
            value: 0,
            min: 0,
            max: 360,
            unit: "deg"
        },
        blur: {
            value: 0, 
            min: 0,
            max: 20,
            unit: "px"
        },
        grayscale: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        sepia: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        opacity: {
            value: 100,
            min: 0,
            max: 100,
            unit: "%"
        },
        invert: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
    };

    applyFilter();

    filterContainer.innerHTML = "";

    createInput()
})

downloadbtn.addEventListener("click" , () => {
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = imageCanvas.toDataURL();
    link.click();
})

const presets = {

    drama: {
        brightness: 90,
        contrast: 150,
        saturation: 120,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    vintage: {
        brightness: 105,
        contrast: 90,
        saturation: 80,
        hueRotation: 15,
        blur: 0,
        grayscale: 0,
        sepia: 35,
        opacity: 100,
        invert: 0
    },

    oldschool: {
        brightness: 100,
        contrast: 85,
        saturation: 65,
        hueRotation: 10,
        blur: 0,
        grayscale: 10,
        sepia: 25,
        opacity: 100,
        invert: 0
    },

    noir: {
        brightness: 100,
        contrast: 140,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    vibrant: {
        brightness: 110,
        contrast: 110,
        saturation: 180,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    cool: {
        brightness: 100,
        contrast: 105,
        saturation: 110,
        hueRotation: 190,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    warm: {
        brightness: 105,
        contrast: 100,
        saturation: 120,
        hueRotation: 25,
        blur: 0,
        grayscale: 0,
        sepia: 15,
        opacity: 100,
        invert: 0
    },

    faded: {
        brightness: 110,
        contrast: 65,
        saturation: 70,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 5,
        opacity: 100,
        invert: 0
    },

    dreamy: {
        brightness: 120,
        contrast: 80,
        saturation: 110,
        hueRotation: 5,
        blur: 1,
        grayscale: 0,
        sepia: 5,
        opacity: 100,
        invert: 0
    },

    negative: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 100
    }

};

Object.keys(presets).forEach(preset => {
    const presentButton = document.createElement("button");
    presentButton.classList.add("press-btn");
    presentButton.innerHTML = preset;
    buttonContainer.appendChild(presentButton);

    presentButton.addEventListener("click" , () => {

        const press = presets[preset];

        Object.keys(press).forEach(filterName => {
            filters[filterName].value = press[filterName]; 
        })

        applyFilter();
        filterContainer.innerHTML = "";
        createInput();
    })
})

