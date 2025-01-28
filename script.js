document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the scores from the input fields
    const assignmentScore = parseFloat(document.getElementById('assignment').value);
    const midtermScore = parseFloat(document.getElementById('midterm').value);
    const finalScore = parseFloat(document.getElementById('final').value);

    // Calculate the final grade (assuming equal weight for simplicity)
    const finalGrade = (assignmentScore + midtermScore + finalScore) / 3;

    // Determine the letter grade
    let letterGrade;
    if (finalGrade >= 90) {
        letterGrade = 'A';
    } else if (finalGrade >= 80) {
        letterGrade = 'B';
    } else if (finalGrade >= 70) {
        letterGrade = 'C';
    } else if (finalGrade >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    // Display the result
    document.getElementById('result').innerText = `Your final grade is: ${finalGrade.toFixed(2)} (${letterGrade})`;
});