// Portia Cooper
// CSC 544


// spawn in 4 datasets
let data = [letters, computeSimilarityMatrix(unicodeStd), computeSimilarityMatrix(human), computeSimilarityMatrix(gpt)];
data = data.map((matrix) => {
    return matrix.filter(item => isAlphabet(item.letter1) && isAlphabet(item.letter2));
});

let titles = ["Letter Visual Similarities Quantified", "Homoglyph Commonalities | Unicode Std", "Homoglyph Commonalities | Human", "Homoglyph Commonalities | GPT"]
let matrixIds = {0: true, 1: true, 2: true, 3: true};
let checkboxes;
let margin = { top: 50, right: 50, bottom: 50, left: 50 };
let intersections = [computeIntersectionMatrix(unicodeStd), computeIntersectionMatrix(human), computeIntersectionMatrix(gpt)];
const width = d3.select('.viz-container').node().getBoundingClientRect().width;
const height = window.innerHeight;

const max2SVGWidth = Math.floor(width / 2);
const maxSVGHeight = Math.floor(height);
const max2SVGSize = Math.min(max2SVGWidth, maxSVGHeight);
const max1SVGSize = Math.min(width, maxSVGHeight);

let originalOrder = Array.from(new Set(data[0].map(d => d.letter1)));
let currentOrder = [...originalOrder];  // for the sorted order managment
console.log(currentOrder)
let inZoomView = [];
let isZoomed = false;
let xScale;
let yScale;

let highlightLetter = "";

const blueScaleHex = ['#ADD8E6', '#4682B4'];  // Light Blue to Dark Blue
const greenScaleHex = ['#90EE90', '#006400']; // Light Green to Dark Green
const redScaleHex = ['#FFCCCB', '#8B0000'];   // Light Red to Dark Red

function getMinMax(dataset) {
    const visSimScores = dataset.map(item => item.visSimScore);
    const min = Math.min(...visSimScores);
    const max = Math.max(...visSimScores);
    return { min, max };
}

// Create a color scale for each dataset
let colorScales = data.map((dataset, index) => {
    const { min, max } = getMinMax(dataset);
    let colorScale;

    if (index == 0) {
        colorScale = d3.scaleSequential(d3.interpolateRgb(blueScaleHex[0], blueScaleHex[1]))
        .domain([min, max]);      

    }
    else if (index == 1) {
        colorScale = d3.scaleSequential(d3.interpolateRgb(redScaleHex[0], redScaleHex[1]))
        .domain([min, max]);                     
    }
    else {
        colorScale = d3.scaleSequential(d3.interpolateRgb(greenScaleHex[0], greenScaleHex[1]))
        .domain([min, max]);      
    }
    return colorScale;
});


// hover tooltip
let tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("display", "none")
    .style("z-index", "9999");

let mouseover = function(event, d) {
    tooltip.style("display", "block")
        .html(`${d.letter2} ${d.letter1} Score: ${d.visSimScore}`);

    d3.selectAll(".heatmapMatrix-rect")
    .each(function(re) {
        if (re.letter1 == d.letter1 && re.letter2 == d.letter2) {
            d3.select(this)
                .attr("stroke", "black");
        } 
        else {
            d3.select(this)
                .attr("stroke", null);
        }
    });
}

let mousemove = function(event, d) {
    tooltip.style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY + 10) + "px");
}

let mouseout = function(event, d) {
    tooltip.style("display", "none");

    d3.selectAll(".heatmapMatrix-rect")
    .each(function(re) {
        if (re.letter1 == d.letter1 && re.letter2 == d.letter2) {
            d3.select(this)
                .attr("stroke", null);
        }
    });
}


function updateLetterOverlay(event, d) {
    let sidebar = d3.select("#letterOverlay");
    sidebar.selectAll(".cellClick").remove();

    // container for actual overlapping letters
    let overlayCharContainer = sidebar.append("div")
        .attr("class", "cellClick")
        .style("position", "relative")
        .style("width", "100%")
        .style("height", "80px")
        .style("display", "flex")
        .style("align-items", "center")
        .style("justify-content", "center");

    // First letter
    overlayCharContainer.append("div")
        .text(d.letter1)
        .style("position", "absolute")
        .style("font-size", "50px")
        .style("font-weight", "bold")
        .style("color", "black")
        .style("opacity", 0)
        .transition()
        .duration(500)
        .style("opacity", 0.5);

    // Second letter
    overlayCharContainer.append("div")
        .text(d.letter2)
        .style("position", "absolute")
        .style("font-size", "50px")
        .style("font-weight", "bold")
        .style("color", "blue")
        .style("opacity", 0)
        .transition()
        .duration(500)
        .delay(500)
        .style("opacity", 0.5);

    let vSimScore = data[0].filter(entry => entry.letter1 == d.letter1 && entry.letter2 == d.letter2)[0].visSimScore;    
    // sim score info
    overlayCharContainer.append("p")
        .text(`Similarity Score: ${vSimScore}`)
        .style("margin-top", "100px")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("color", "#333");
}


function listToString(list) {
    return list.length > 0 ? list.join(', ') : ' ';
}


function updateCommonHomoglyphs(event, d) {
    let rows = [];
    for (let i = 0; i < intersections.length; i++) {
        let intersect = intersections[i].filter(entry => entry.letter1 == d.letter1 && entry.letter2 == d.letter2)[0].intersection;
        if (intersect.length == 0) {
            document.getElementById('ch'+i.toString()).textContent = "n = 0 | N/A";
        }
        else {
            document.getElementById('ch'+i.toString()).textContent = "n = " + intersect.length + " | " + listToString(intersect);
        }
    }
    
}


// letter overlay
let cellClick = function(event, d) {
    updateLetterOverlay(event, d);
    updateCommonHomoglyphs(event, d);

    d3.selectAll(".heatmapMatrix-rect")
        .attr("stroke", null); // Clear all strokes first

    d3.selectAll(".heatmapMatrix-rect")
        .filter(re => re.letter1 === d.letter1 && re.letter2 === d.letter2)
        .attr("stroke", "black")
        .attr("stroke-width", 2);
};



function setUpCheckBoxes() {
    checkboxes = document.querySelectorAll('.checkbox');
    // checkboxes[0].checked = true;
    
    for (const [key, value] of Object.entries(matrixIds)) {
        checkboxes[key].checked = value;
        console.log(key, value)
    }

    // console.log(checkboxes[0])

    // Add an event listener to each checkbox
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            matrixIds[index] = checkbox.checked;
            updateViz();
        });
    });
}


function updateViz() {
    console.log(matrixIds);

    [0, 1, 2, 3].forEach(item => {
        let slot = d3.select("#slot" + item);
        // Remove all SVG elements inside the slot
        slot.selectAll("svg").remove();
    });

    let selectedIdxs = [];

    for (const [key, value] of Object.entries(matrixIds)) {
        if (value) {
            selectedIdxs.push(key);
        }
    }

    // Render visualizations based on the selected checkboxes
    if (selectedIdxs.length == 1) {
        spawn1(selectedIdxs[0]);
    } else if (selectedIdxs.length > 1) {
        spawn2OrMore(selectedIdxs);
    }
}

function spawn2OrMore(ids) {
    let slotIdx = 0;
    let colors = ["blue", "pink", "green", "red"]

    ids.forEach(id => {
        let svg = d3.select("#slot"+slotIdx)
        .append("svg")
        .attr("width", max2SVGSize)
        .attr("height", max2SVGSize)
        .attr("class", "m"+id)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        addTitle(svg, id, max2SVGSize, 15);
        buildHeatMapMatrix(svg, max2SVGSize, id); 
        slotIdx += 1;
    });
}

function spawn1(id) {
    let svg = d3.select("#slot0")
        .append("svg")
        .attr("width", max1SVGSize)
        .attr("height", max1SVGSize)
        .attr("class", "m"+id)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    addTitle(svg, id, max1SVGSize, 25);
    buildHeatMapMatrix(svg, max1SVGSize, id); 
}

function addTitle(svg, index, s, scale) {
    svg.append("text")
        .attr("x", s / 2 - 40)
        .attr("y", -15)
        .attr("text-anchor", "middle")
        .style("font-size", scale + "px")
        .text(titles[index]);
}


// spawns the viz Sim and nothing else
function initViz() {
    spawn2OrMore([0, 1, 2, 3]);
}


function buildHeatMapMatrix(svg, s, i) { 
    s = s*0.95;   

    xScale = d3.scaleBand()
        .domain(currentOrder)
        .range([0, s - s*0.1])
        .padding(0.2);
    
    yScale = d3.scaleBand()
        .domain(currentOrder)
        .range([0, s - s*0.1])
        .padding(0.2);
            
    svg.selectAll(".heatmapMatrix-rect")
        .data(data[i])
        .enter()
        .append("rect")
        .attr("x", d => xScale(d.letter1))
        .attr("y", d => yScale(d.letter2))
        .attr("width", xScale.bandwidth())
        .attr("height", yScale.bandwidth())
        .attr("fill", d => colorScales[i](d.visSimScore))
        .attr("class", "heatmapMatrix-rect")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseout)
        .on("click", cellClick);
    
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(" + 0 + "," + (s-s*.1) + ")")
        .call(d3.axisBottom(xScale));
    
    svg.append("g")
        .attr("class", "y-axis")
        .attr("transform", "translate(" + 0 + "," + "0)")
        .call(d3.axisLeft(yScale));

    }

    document.getElementById('maxClusterForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from actually submitting
    
        const selectedOption = document.querySelector('input[name="options"]:checked');
    
        if (selectedOption.value == "reset") {
            currentOrder = originalOrder;
        }
        else {
            let letters = Array.from(new Set(data[parseInt(selectedOption.value)].map(d => d.letter1)));
            let newOrder;

            let matrix = {};
            data[parseInt(selectedOption.value)].forEach(d => {
                if (!matrix[d.letter1]) matrix[d.letter1] = {};
                matrix[d.letter1][d.letter2] = d.visSimScore;
            });
          
          let letterScores = {};
          letters.forEach(letter1 => {
            let maxScore = 0;
            letters.forEach(letter2 => {
              let score = matrix[letter1][letter2];
              if (score > maxScore) {
                maxScore = score;
              }
            });
            letterScores[letter1] = maxScore;
          });

          currentOrder = [...letters].sort((a, b) => letterScores[b] - letterScores[a]);
        }
    
        // Update scales
        xScale.domain(currentOrder);
        yScale.domain(currentOrder);
    
        d3.selectAll(".heatmapMatrix-rect")
            .transition()
            .duration(1000)
            .attr("x", d => xScale(d.letter1))
            .attr("y", d => yScale(d.letter2));
    
        [0, 1, 2, 3].forEach(slotIdx => {
            if (matrixIds[slotIdx]) {
                d3.select("#slot" + slotIdx).select("g.x-axis")
                    .transition()
                    .duration(1000)
                    .call(d3.axisBottom(xScale));
            
                d3.select("#slot" + slotIdx).select("g.y-axis")
                    .transition()
                    .duration(1000)
                    .call(d3.axisLeft(yScale));
                }
        });
        
    });



document.getElementById('clusterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from actually submitting

    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption.value == "reset") {
        currentOrder = originalOrder;
    }
    else {
        let letters = Array.from(new Set(data[parseInt(selectedOption.value)].map(d => d.letter1)));
        let newOrder;
    
        let matrix = {};
        data[parseInt(selectedOption.value)].forEach(d => {
            if (!matrix[d.letter1]) matrix[d.letter1] = {};
                matrix[d.letter1][d.letter2] = d.visSimScore;
        });
    
        let letterScores = {};
            letters.forEach(letter => {
                let total = 0;
                letters.forEach(other => {
                  if (matrix[letter][other]) {
                    total += matrix[letter][other];
                  }
                  else {
                    total += 0;
                  }
                });
                letterScores[letter] = total / letters.length;
        });
        newOrder = [...letters].sort((a, b) => letterScores[b] - letterScores[a]);
        currentOrder = newOrder;       
    }

    // Update scales
    xScale.domain(currentOrder);
    yScale.domain(currentOrder);

    d3.selectAll(".heatmapMatrix-rect")
        .transition()
        .duration(1000)
        .attr("x", d => xScale(d.letter1))
        .attr("y", d => yScale(d.letter2));

    [0, 1, 2, 3].forEach(slotIdx => {
        if (matrixIds[slotIdx]) {
            d3.select("#slot" + slotIdx).select("g.x-axis")
                .transition()
                .duration(1000)
                .call(d3.axisBottom(xScale));
        
            d3.select("#slot" + slotIdx).select("g.y-axis")
                .transition()
                .duration(1000)
                .call(d3.axisLeft(yScale));
            }
    });
    
});


document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const input1 = document.getElementById('search-input1').value;
    const input2 = document.getElementById('search-input2').value;

    if (input1 && input2 && input1.length >= 1 && input2.length >= 1) {
        // get the two characters from the inputs
        let c1 = input1.charAt(0);
        let c2 = input2.charAt(0);

        d3.selectAll(".heatmapMatrix-rect")
        .each(function(re) {
            if (re.letter2 === c1 && re.letter1 === c2) {
                d3.select(this)
                    .attr("stroke", "black");
            } else {
                d3.select(this)
                    .attr("stroke", null);
            }
        });  

        let rows = [];
        for (let i = 0; i < intersections.length; i++) {
            let intersect = intersections[i].filter(entry => entry.letter1 == c1 && entry.letter2 == c2)[0].intersection;
            if (intersect.length == 0) {
                document.getElementById('ch'+i.toString()).textContent = "n = 0 | N/A";
            }
            else {
                document.getElementById('ch'+i.toString()).textContent = "n = " + intersect.length + " | " + listToString(intersect);
            }
        }

        let sidebar = d3.select("#letterOverlay");
        sidebar.selectAll(".cellClick").remove();

        // container for actual overlapping letters
        let overlayCharContainer = sidebar.append("div")
            .attr("class", "cellClick")
            .style("position", "relative")
            .style("width", "100%")
            .style("height", "80px")
            .style("display", "flex")
            .style("align-items", "center")
            .style("justify-content", "center");

        // First letter
        overlayCharContainer.append("div")
            .text(c1)
            .style("position", "absolute")
            .style("font-size", "50px")
            .style("font-weight", "bold")
            .style("color", "black")
            .style("opacity", 0)
            .transition()
            .duration(500)
            .style("opacity", 0.5);

        // Second letter
        overlayCharContainer.append("div")
            .text(c2)
            .style("position", "absolute")
            .style("font-size", "50px")
            .style("font-weight", "bold")
            .style("color", "blue")
            .style("opacity", 0)
            .transition()
            .duration(500)
            .delay(500)
            .style("opacity", 0.5);

        let vSimScore = data[0].filter(entry => entry.letter1 == c1 && entry.letter2 == c2)[0].visSimScore;
        // console.log(vSimScore)
        
        // sim score info
        overlayCharContainer.append("p")
            .text(`Similarity Score: ${vSimScore}`)
            .style("margin-top", "100px")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .style("color", "#333");
        }
});


setUpCheckBoxes();
initViz();

