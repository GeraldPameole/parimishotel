
// FONCTIONS 

//calendrier datepicker arrivée
$(function() {
    $( "#datepicker2" ).datepicker({
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        monthNames: [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Auot", "Septembre", "Octobre", "Novembre", "Decembre" ],
        dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ]
      });
    });