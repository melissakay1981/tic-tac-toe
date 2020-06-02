let currentPlayer = 'X'; // X is the starting player.
let nextPlayer = 'O'
let playerXSelections = [];
let playerOSelections = [];
let playerSelectionX = []

winnningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];


// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll('.grid-cell');
let checkForWIn = []

// Loop over each element in our cellElementArray:
for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    const currentCellElement = cellElementArray[elementIndex]

    currentCellElement.addEventListener('click', function (event) {

        const clickedCellElement = event.target;

        if (currentPlayer == "X") {
            currentPlayer = "0"
            clickedCellElement.innerHTML = "X"
            playerXSelections.push(clickedCellElement.id)

        }
        else {
            currentPlayer = "X"
            nextPlayer = "0"
            clickedCellElement.innerHTML = "O"
            playerOSelections.push(clickedCellElement.id)

        }


        // Log the ID of the cell which was just clicked:
        console.log("You clicked on cell number: " + clickedCellElement.id)

        let playerOSelections = []
        let playerXSelections = []
    });


    function checkForWIn(winnningCombinations, playerSelectionX) {

        for (let index = 0; index < winnningCombinations.lenght; index += 1) {
            let matches = 0

            for (let i = 0; i < winnningCombinations[index]; i += 1) {

                if (playerSelection = winnningCombinations[index][i]) {
                    matches += 1
                }
            }
        }
    }
}