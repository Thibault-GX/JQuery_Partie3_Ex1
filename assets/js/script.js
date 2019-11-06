$('#button')
    .data('clicks', 1) // Crée une donnée nommée counter qui vaut 1
    .click(function() {
        var counter = $(this).data('clicks'); // Crée une variable counter qui se base sur la valeur de clicks
        $(this).data('clicks', counter + 1); // A chaque fois qu'on déclenche la fonction de button, la valeur de counter augmente de 1.
        $('#cumulatedClicks').text(counter); // Affiche la valeur de counter avec du texte dans l'élément avec l'id cumulatedClicks, qui se trouve être un paragraphe, ça tombe bien, non ?
    });
