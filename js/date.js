'use strict'



// Reference ISO
// http://www.lingoes.net/en/translator/langcode.htm



function show (description, result) {
    document.writeln('<tr><td>' + description + '</td><td>' + result + '</td></tr>')
}

show(
    'Todays date, automatically translated',
    new Date()
)
show(
    'Number of ms elapsed since 01/01/1970 at 00:00:00',
    Date.now()
)

show(
    'The current month\'s name',
    new Date().toLocaleString('default', { month: 'long' })
)

show(
    'Localization in Arabic of today\'s date',
    new Date().toLocaleDateString('ar-EG-u-nu-latn',{weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'})
)

show(
    'Offset date of today in minutes with UTC',
    new Date().getTimezoneOffset()
)

show(
    "Mission Apollo11: Date of landing on the Moon July 20, 1969 at 20 h 17 min 40 s UTC",
    new Date(1969,6,20,20,17,40).toString()
)