let draftTitle = "Annals of Zhilong";
let draft = ""

$("#tang1").click(function () {

    draft = draft + "<h1>Tang Shi - Brief History</h1>";
    draft = draft + "<p>Tang Shi was the third son of the the Tang merchant family of Zhilong. At an estimated age of 14, he was sent to the Enternal Star Sect to study the path of martial arts. After numerous promotions and eventually becoming an Elder, Tang Shi decided to stay within the sect, aiming for the position of Sect Master. At the age of 78, succeeded the previous Sect Master until death at the age of 187 years old. </p>";
    draft = draft + "<p>His cause of death is currently unknown.</p>"

    $("#environment-output").html(draft);

});

$("#tang2").click(function () {

    draft = draft + "<h1>Tang Shi - Description</h1>";
    draft = draft + "<p>Bears the look of a wise scholar in middle-age, even at an age of almost two centuries. By other known accounts, Tang Shi was known to be humble and patient, at least on the surface. A few accounts from various sources allude to his veiled and violent desire to isolate the mountain from the matters of the outside territory and world.</p>";

    $("#environment-output").html(draft);

});

$("#jing1").click(function () {

    draft = draft + "<h1>Jing Wei - Brief History</h1>";
    draft = draft + "<p>Jing Wei was an orphan of unknown lineage or exact age. He reportedly approached the Eternal Star Sect at a young age with request to become a disciple. Was known to be the Eternal Star Sect's greatest talent.</p>";
    draft = draft + "<p>His cause of death was likely in the conflict of the Demon Emperor of Qing, Zhang Ku's conquest of Zhilong.</p>"

    $("#environment-output").html(draft);

});

$("#jing2").click(function () {

    draft = draft + "<h1>Jing Wei - Description</h1>";
    draft = draft + "<p>Bears the look of a youth in their twenties, despite approaching a century's age. Was known to advocate for intervening with the world outside of Zhilong Mountain.</p>";
    draft = draft + "<p>According to many acocunts, Jing Wei was brave of heart and the strongest martial artist in the world.</p>";

    $("#environment-output").html(draft);

});

$("#redo").click(function () {

    draft = ""

    $("#environment-output").html(draft);

});