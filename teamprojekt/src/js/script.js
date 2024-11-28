// Event Listener für den "Weiter"-Button, der das Popup anzeigt
document.getElementById('continue-button').addEventListener('click', function(event) {
    event.preventDefault(); // Verhindert das Absenden des Formulars
    document.getElementById('popup').style.display = 'flex'; // Popup anzeigen
});

// Event Listener für den "Speichern"-Button im Popup
document.getElementById('save-button').addEventListener('click', function() {
    const options = document.getElementsByName('reminder');
    let selectedOption = null;

    // Überprüfen, ob eine Option im Popup ausgewählt wurde
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i].value;
            break;
        }
    }

    // Wenn eine Auswahl getroffen wurde, Popup schließen und zur nächsten Seite weiterleiten
    if (selectedOption) {
        console.log(`Selected: ${selectedOption}`);
        document.getElementById('popup').style.display = 'none'; // Popup schließen
        // Weiterleitung zur nächsten Seite
        const nextPage = "../../html/schlaf/Schlaf01.html"; // Korrigierter Pfad
        console.log("Navigating to:", nextPage);

        // Weiterleitung zur nächsten Seite
        window.location.href = nextPage;
    } else {
        // Wenn keine Auswahl getroffen wurde, wird die Option hervorgehoben
        document.querySelector('.popup-options').classList.add('highlight');
        setTimeout(() => {
            document.querySelector('.popup-options').classList.remove('highlight');
        }, 2000);
    }
});
