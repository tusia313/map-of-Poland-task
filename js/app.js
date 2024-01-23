

$(document).ready(function () {
    const mapaWojewodztw = {
        // wiadomo, nazwy wojewódzctw są do zmian, ale mi się już nie chciało
        "PLSL": ["Katowice", "Gliwice", "Sosnowiec"],
        "PLMA": ["Kraków", "Tarnów", "Nowy Sącz"],
        "PLPK": ["Rzeszów", "Przemyśl", "Tarnobrzeg"],
        "PLDS": ["Wrocław", "Legnica", "Jelenia Góra"],
        "PLOP": ["Opole", "Nysa", "Kędzierzyn-Koźle"],
        "PLPD": ["Białystok", "Łomża", "Suwałki"],
        "PLWN": ["Olsztyn", "Elbląg", "Ełk"],
        "PLLB": ["Zielona Góra", "Gorzów Wielkopolski", "Nowa Sól"],
        "PLZP": ["Szczecin", "Koszalin", "Świnoujście"],
        "PLLU": ["Lublin", "Zamość", "Chełm"],
        "PLPM": ["Gdańsk", "Gdynia", "Sopot"],
        "PLMZ": ["Warszawa", "Radom", "Płock"],
        "PLLD": ["Łódź", "Piotrków Trybunalski", "Pabianice"],
        "PLKP": ["Bydgoszcz", "Toruń", "Włocławek"],
        "PLWP": ["Poznań", "Kalisz", "Konin"],
        "PLSK": ["Kielce", "Ostrowiec Świętokrzyski", "Sandomierz"]
    };

    // Obsługa kliknięcia na województwo
    $('path').on('click', function () {
        const wojewodztwoId = $(this).attr('id');
        const najwiekszeMiasta = mapaWojewodztw[wojewodztwoId];
        const infoElement = $('#miasta-info');

        if (najwiekszeMiasta) {
            infoElement.text(`Największe miasta w ${wojewodztwoId}: ${najwiekszeMiasta.join(', ')}.`);
        } else {
            infoElement.text(`Brak informacji o miastach w ${wojewodztwoId}`);
        }
    });

});
