// Function to open the print dialog
function openPrintDialog() {
    window.print();
}

// Add event listener to the "Generate PDF Report" button
document.getElementById("generate-report-btn").addEventListener("click", openPrintDialog);
