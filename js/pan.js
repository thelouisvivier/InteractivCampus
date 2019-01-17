var leftPan = {
  open(lat,lng,id){
    $('.infos').css("background-color","#fff");
    $("#leftPan").css("background-color",places[id].marker_color);
    $("#leftPan").css("visibility","visible");
    $("#leftPan").css("width","500px");
    $(".logo").attr("src", "images/logos/"+places[id].logo_name+".png");
    $(".streetpic").attr("src", "images/streetpics/"+places[id].streetpic_name+".png");
    $('.name').html(places[id].name);
    $('.adress').html(places[id].adress_street + ", " + places[id].adress_city);
    $('.phone').html(places[id].phone);
    $('.email').html(places[id].email);
    $('.website').html('<a target="_blank" href="'+places[id].website+'">'+places[id].link_text+'</a>') ;
    if (typeof(places[id].bus_infos)!= 'undefined'){//Si arret de bus
      $('.NextBus').html("<b>"+places[id].bus_infos["name"]+"</b><br>Prochain bus dans : "+horairesBus.getHoraires(places[id].bus_infos["ligne"],places[id].bus_infos["stop"],places[id].bus_infos["way"])[0]+"<br>"+"Puis dans : "+horairesBus.getHoraires(places[id].bus_infos["ligne"],places[id].bus_infos["stop"],places[id].bus_infos["way"])[1]+"<br>"+"Et dans : "+horairesBus.getHoraires(places[id].bus_infos["ligne"],places[id].bus_infos["stop"],places[id].bus_infos["way"])[2]);
      $('.NextBus').css("display","block");
    }
    else{
      $('.NextBus').css("display","none");
    }
    if (typeof(places[id].vlille_station)!= 'undefined'){//Si station Vlille
      $('.Vlille').html("Vélos : "+v_Lille.disponible(places[id].vlille_station)[0]+"<br>"+"Bornes : "+v_Lille.disponible(places[id].vlille_station)[1]);
      $('.Vlille').css("display","block");
    }
    else{
      $('.Vlille').css("display","none");
    }
    if (places[id].twitter != ""){
      $('.twitterFeed').html('<a class="twitter-timeline" data-width="480" data-dnt="true" href="https://twitter.com/'+places[id].twitter+'?ref_src=twsrc%5Etfw" data-tweet-limit="5">Tweets by '+places[id].twitter+'</a> <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
    }
    else {
      $('.twitterFeed').html('');
    }
    theMap.setView([lat, lng],17);
  },
  close(){
    document.getElementById("leftPan").style.visibility = "hidden";
    document.getElementById("leftPan").style.width = "0";
  },
  tempInfoUrbawood(){
    $("#leftPan").css("background-color","#bfbfbf");
    $("#leftPan").css("visibility","visible");
    $("#leftPan").css("width","500px");
    $('.adress').html('');
    $('.phone').html('');
    $('.email').html('');
    $('.website').html('') ;
    $(".logo").attr("src", "");
    $(".streetpic").attr("src", "");
    $('.name').html('Temperature d\'Adicode Euratech');
    $('.infos').css("background-color","#bfbfbf");
    $('.Vlille').css("display","none");
    $('.NextBus').css("display","none");
    $('.twitterFeed').html('<iframe src="http://10.34.168.24:8300/createChart?feedType=Temperature&chartType=dot&node=6FED0711&limitNumberOfData=40" width="460" height="250" style="border:none"></iframe>');
  },
}
//blue #8eabc8
//Red #d65543
//Moutarde #dfc277
//Vert #9eb886
//Gris #adadae
var optionsPan = {
  init (){
    $(".schools").click(function(){ optionsPan.schools(); });
    $(".transport").click(function(){ optionsPan.transport(); });
    $(".markets").click(function(){ optionsPan.markets(); });
    $(".food").click(function(){ optionsPan.food(); });
    $(".atm").click(function(){ optionsPan.atm(); });
    $(".temp").click(function(){ optionsPan.temp(); });
  },
  schools(){
    markers.isen();
    markers.hei();
    markers.isa();
    markers.catho();
    markers.yncrea();
    markers.urbawood();
    polygone.isen();
    polygone.rameau();
    polygone.urbawood();
    polygone.hei();
    polygone.heiprepa();
    polygone.isa();
    polygone.catho();
    polygone.yncrea();
    polygone.yncreaCompta();
    polygone.aeu();
  },
  transport(){
    markers.bus();
    markers.metro();
    markers.velo();
    markers.gare();
  },
  markets(){
    markers.caddy();
  },
  food(){
    markers.sandwich();
    markers.pizza();
  },
  temp(){
    markers.thermo();
  },
  atm(){
    markers.atm();
  }
}
