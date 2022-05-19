$(function(){
    $( "#accordion" ).accordion({
    collapsible: true,
    active: false
    }); 
});

$(function(){
$("#open").button().click(function(){
    $('#dialog').dialog("open");
})

$('#dialog').dialog({
autoOpen: false,
buttons:{
        Оформить: function (event, ui) {
                $( "#confirm" ).dialog("open");

                var n = $("#name").val();
                var r = $("#row").val();
                var c = $("#comp").val();
                var d = $("#date").val();
                var s = $("#start").val();
                var f = $("#finish").val();
                var price;

                switch (c){
                    case 'Победа': price = 3000;
                    break;
                    case 'S7 Airlanes': price = 4000;
                    break;
                    case 'Nordwind Airlines': price = 5000;
                    break;
                }

                
                document.getElementById('cN').value = n;
                document.getElementById('R').value = r;
                document.getElementById('C').value = c;
                document.getElementById('D').value = d;
                document.getElementById('S').value = s;
                document.getElementById('F').value = f;
                document.getElementById('Price').value = price;

            },
        Закрыть: function() {
        $(this).dialog('close');
}
},
show: {effect: "slideDown", duration: 800},
hide: {effect: "slideUp", duration: 800},
});

$("#slider").slider({
range: "min",
value: 1,
min: 1,
max: 20,
step: 1,
slide: function(event, ui) {
    $("#row").val($("#slider").slider("option", "value"));
},
change: function(event, ui) { 
    $("#row").val($("#slider").slider("option", "value"));
}
});
$("#row").val($("#slider").slider("option", "value"));

$( "#date" ).datepicker({
dateFormat: "dd.mm.yy"
});

$("#start").tooltip();

var availableTags = [
    "Уфа",
    "Москва",
    "Санкт-Петербург",
    "Челябинск",
    "Нижний-Новгород",
    "Смоленск",
    "Сочи",
    "Краснодар",
    "Самара",
    ];
    $( "#start" ).autocomplete({
    source: availableTags
    });

$("#finish").tooltip();

var availableTags = [
    "Уфа",
    "Москва",
    "Санкт-Петербург",
    "Челябинск",
    "Нижний-Новгород",
    "Смоленск",
    "Сочи",
    "Краснодар",
    "Самара",
    ];
    $( "#finish" ).autocomplete({
    source: availableTags
    });    

$('#confirm').dialog({

autoOpen: false,
buttons:{
        Подтвердить: function (event, ui) {
            $( "#succ" ).dialog("open");
            $( "#dialog" ).dialog("close")
            $(this).dialog('close');
            },
        Отмена: function() {
        $(this).dialog('close');
}
},
show: {effect: "slideDown", duration: 800},
hide: {effect: "slideUp", duration: 800},
});

$('#succ').dialog({
autoOpen: false,
show: {effect: "slideDown", duration: 800},
hide: {effect: "slideUp", duration: 800},
});
})