function tossCoin() {
    return Math.random() > .5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === 'heads') {
                headsCount++
            } else {
                headsCount = 0
            }
            attempts >= 100 && reject('No more tries')
        }
        resolve(`It took ${attempts} tries to flip five "heads"`)
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
