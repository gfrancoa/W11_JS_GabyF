
document.writeln('<table>')
document.writeln('<tr>')
for (let i = 0; i <= 15; i++) {
    if (i>0)
    document.writeln('<th>'+i+'</th>')
    else
    document.writeln('<th></th>')
    
}
document.writeln('</tr>')

for (let i = 1; i <= 15; i++) {
    document.writeln('<tr>')
    document.writeln('<th>'+i+'</th>')
    for (let j = 1; j <= 15; j++) {
        document.writeln('<td>'+(i*j)+'</td>')
    }
    document.writeln('</tr>')
    
}
document.writeln('</table>')