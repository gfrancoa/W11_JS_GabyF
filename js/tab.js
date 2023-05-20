function selected(id){
    $("ul li").removeClass('courant');
    $('#info div[id*="tabs"]').hide();
    if(typeof(id)!='string'){
        $($(this).attr('href')).show();
        $(this).parent().addClass('courant');
    }
    else{
        $(id).show();
        $('a[href="'+id+'"').parent().addClass('courant');
    }
    
}


$(document).ready(function(){
   $('#info div[id*="tabs"]').hide();
   selected('#tabs-1');
   $(document).on("click","ul li a", selected);
    });
    