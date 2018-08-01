                    $( window ).resize(function() {
$('.block.block-small.global-search-form.js-gsf.cxp-searchform.cxp-searchsuggest .gsf-fields.js-toggle-target').css({'width':$('.main-navigation').width()});
$('.gsf-input.inputs.form-txt').css({'width':$('.main-navigation').width() - 56 });

});

                         $( document ).ready(function() {



$('.block.block-small.global-search-form.js-gsf.cxp-searchform.cxp-searchsuggest .gsf-fields.js-toggle-target').css({'width':$('.main-navigation').width()});
$('.gsf-input.inputs.form-txt').css({'width':$('.main-navigation').width() - 56 });
/* Catalogue exposant */ 
      if ($('body').hasClass('body-corpo catalogue exposant node240792 parent239955 gp142457 content175813')) {
                           var offsettitle = $('.catal-results-title.catalog_refreshed_result_count').offset();
                           $('.exposant #zone3').css({'top':offsettitle['top'] - 85 });
                           $('.esf-as-header').click(function(){
                              if ($(this).hasClass('is-closed')) {
                                  setTimeout(function(){ 
                                    var offsettitle = $('.catal-results-title.catalog_refreshed_result_count').offset();
                                    $('.exposant #zone3').css({'top':offsettitle['top'] - 85 });
                                  }, 300);
                              }else{
                                 setTimeout(function(){ 
                                    var offsettitle = $('.catal-results-title.catalog_refreshed_result_count').offset();
                                    $('.exposant #zone3').css({'top':offsettitle['top']  - 90  });
                                  }, 300);
                              }
                           })
}



/* Fiche exposant */ 
      if ($('body').hasClass('exhibitor-details')) {
                           var offsettitle = $('.catal-ed-main').offset();
                           $('.fiche #zone3').css({'top':offsettitle['top'] + 80 });
                           $('.fiche .catal-nav-ex.mod-catal').css({'top':offsettitle['top'] + 10 });
                           $('.fiche .catal-ex-item-buttons').css({'top':offsettitle['top'] + 40 });
                           $('.esf-as-header').click(function(){
                              if ($(this).hasClass('is-closed')) {
                                  setTimeout(function(){ 
                                    var offsettitle = $('.catal-ed-main').offset();
                                    $('.fiche #zone3').css({'top':offsettitle['top'] + 80 });
                                    $('.fiche .catal-nav-ex.mod-catal').css({'top':offsettitle['top'] + 10 });
                                    $('.fiche .catal-ex-item-buttons').css({'top':offsettitle['top'] + 40 });

                                  }, 300);

                              }else{

                                 setTimeout(function(){ 
                                    var offsettitle = $('.catal-ed-main').offset();
                                    $('.fiche #zone3').css({'top':offsettitle['top']  + 80  });
                                    $('.fiche .catal-nav-ex.mod-catal').css({'top':offsettitle['top'] + 10 });
                                    $('.fiche .catal-ex-item-buttons').css({'top':offsettitle['top'] + 40 });

                                  }, 300);

                                   
                              }
                           })
}

/* Page 404*/
      if ($('body').hasClass('error404')) {

                           $('#main .site-wrapper.wrapper').css({'height':$(window).height() - $('.site-footer').height() });
}

                         /*LISTE EXPOSANT */






                            $( ".list li" ).hover(
                                function() {
                                 $('.list li').removeClass('active');
                                 $('.map .actif').removeClass('actif');
                                 $('.desc-continent p').hide();
                                  var pays = $( this ).attr('data');
                                  $(this).addClass('active');
                                  $('.'+pays+'').addClass('actif');
                                  $('.txt-'+pays+'').show();
                                 }
                              );

                              $( ".list li" ).click(function(){
                                 $('.list li').removeClass('active');
                                 $('.map .actif').removeClass('actif');
                                 $('.desc-continent p').hide();
                                  var pays = $( this ).attr('data');
                                  $(this).addClass('active');
                                  $('.'+pays+'').addClass('actif');
                                  $('.txt-'+pays+'').show();
                              });


      if ($('body').is('.front, .espace-pro')) {
  //Set the two dates
                     today=new Date();
                     var getdatelyon = $('#count-lyon').attr('data-date');
                     var getdatetoulouse = $('#count-toulouse').attr('data-date');
                     var getdatelille = $('#count-lille').attr('data-date');
                     var getdateparis = $('#count-paris').attr('data-date');


                     var splitdatelyon = getdatelyon.split("-");
                     var splitdatetoulouse = getdatetoulouse.split("-");
                     var splitdatelille = getdatelille.split("-");
                     var splitdateparis = getdateparis.split("-");


                     var lyon_date=new Date(splitdatelyon[2], splitdatelyon[1]-1, splitdatelyon[0]) //Month is 0-11 in JavaScript
                     var toulouse_date=new Date(splitdatetoulouse[2], splitdatetoulouse[1]-1, splitdatetoulouse[0]) //Month is 0-11 in JavaScript
                     var lille_date=new Date(splitdatelille[2], splitdatelille[1]-1, splitdatelille[0]) //Month is 0-11 in JavaScript
                     var paris_date=new Date(splitdateparis[2], splitdateparis[1]-1, splitdateparis[0]) //Month is 0-11 in JavaScript


                     //Set 1 day in milliseconds
                     var one_day=1000*60*60*24;
                      
                     //Calculate difference btw the two dates, and convert to days

                     var datelyon = Math.ceil((lyon_date.getTime()-today.getTime())/(one_day));
                     var datetoulouse = Math.ceil((toulouse_date.getTime()-today.getTime())/(one_day));
                     var datelille = Math.ceil((lille_date.getTime()-today.getTime())/(one_day));
                     var dateparis = Math.ceil((paris_date.getTime()-today.getTime())/(one_day));

                     if (datelyon < 0 ) {
                        $('#count-lyon').addClass('termine');
                     }else{
                        $('#count-lyon').html('- '+ datelyon +' j');
                     }


                     if (datetoulouse < 0 ) {
                        $('#count-toulouse').addClass('termine');
                     }else{
                        $('#count-toulouse').html('- '+ datetoulouse+' j');
                     }


                     if (datelille < 0 ) {
                        $('#count-lille').addClass('termine');
                     }else{
                        $('#count-lille').html('- '+ datelille+' j');
                     }


                     if (dateparis < 0 ) {
                        $('#count-paris').addClass('termine');
                     }else{
                        $('#count-paris').html('- '+ dateparis+' j');
                     }


                     $('.entre-espace-pro .content-part.part1').show();


}


                           });