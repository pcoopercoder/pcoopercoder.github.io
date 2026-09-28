// Portia Cooper
// CSC 544

function isAlphabet(letter) {
    return /^[a-z]$/.test(letter);  // Matches single alphabetic characters
}

function computeSimilarityMatrix(data) {
    let keys = Object.keys(data);
    let rawScores = [];

    for (let i = 0; i < keys.length; i++) {
        for (let j = i + 1; j < keys.length; j++) {
            let key1 = keys[i];
            let key2 = keys[j];

            if (isAlphabet(key1) && isAlphabet(key2)) {
                let intersection = data[key1].filter(char => data[key2].includes(char));
                let score = intersection.length;
    
                // console.log(score)
                
    
                rawScores.push({
                    letter1: key1,
                    letter2: key2,
                    visSimScore: score
                });
    
                rawScores.push({
                    letter1: key2,
                    letter2: key1,
                    visSimScore: score
                });
            }
        }
    }
    return rawScores;
}


function computeIntersectionMatrix(data) {
    let keys = Object.keys(data);
    let rawScores = [];

    for (let i = 0; i < keys.length; i++) {
        for (let j = i + 1; j < keys.length; j++) {
            let key1 = keys[i];
            let key2 = keys[j];

            if (isAlphabet(key1) && isAlphabet(key2)) {
                let intersection = data[key1].filter(char => data[key2].includes(char));    
    
                rawScores.push({
                    letter1: key1,
                    letter2: key2,
                    intersection: intersection
                });
    
                rawScores.push({
                    letter1: key2,
                    letter2: key1,
                    intersection: intersection
                });
            }
        }
    }
    return rawScores;
}