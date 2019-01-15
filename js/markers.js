var markers = {
  //******************************************ECOLES**************************************************
  isen(){
    let isen = L.icon({
      iconUrl: "images/logo/isen.png",
      iconSize: [40, 60], //[largeur,hauteur]
      iconAnchor: [20, 55], //ancrage
      popupAnchor: [0, 0],
    });
    let markerISEN = L.marker([50.63409,3.04879],{ icon: isen }).addTo(macarte);
    let PopUpISEN = "<b>ISEN</b><br>Institut Supérieur de l'Electronique et du Numérique";
    markerISEN.bindPopup(PopUpISEN);
  },
  hei(){
    let hei = L.icon({
      iconUrl: "images/logo/hei.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerHEI = L.marker([50.63366,3.04539],{icon:hei }).addTo(macarte);
    let PopUpHEI = "<b>HEI</b><br>Grande Ecole d'Ingénieur Généraliste";
    markerHEI.bindPopup(PopUpHEI);
  },
  isa(){
    let isa = L.icon({
      iconUrl: "images/logo/isa.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerISA = L.marker([50.63390,3.04663],{icon:isa }).addTo(macarte);
    let PopUpISA = "<b>ISA</b><br>Institut Supérieur de l'Agriculture";
    markerISA.bindPopup(PopUpISA);
  },
  yncrea(){
    let yncrea = L.icon({
      iconUrl: "images/logo/yncrea.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerYNCREA = L.marker([50.63360,3.04692],{icon:yncrea }).addTo(macarte);
    let markerYNCREA1 = L.marker([50.63530,3.04993],{icon:yncrea }).addTo(macarte);
    let PopUpYNCREA = "<b>YNCREA</b><br>Pôle associatif d'écoles d'ingénieurs en France - HEI ISA ISEN";
    markerYNCREA.bindPopup(PopUpYNCREA);
  },
  urbawood(){
    let urbawood = L.icon({
      iconUrl: "images/logo/urbawood.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0, 0],
    });
    let markerURBA = L.marker([50.63316,3.02354],{icon:urbawood }).addTo(macarte);
    let PopUpURBA = "<b>ADICODE</b><br>Euratechnologie - Pôle des nouvelles technologies de l'information et de la communication";
    markerURBA.bindPopup(PopUpURBA);
  },
  //***********************************************TRANSPORTS********************************************************
  bus(){
    let bus = L.icon({
      iconUrl: "images/logo/bus.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerBUS = L.marker([50.63411,3.04850],{icon:bus }).addTo(macarte); //solfé
    let markerBUS1 = L.marker([50.63413,3.04946],{icon:bus }).addTo(macarte); //solfé
    let markerBUS2 = L.marker([50.63158,3.06226],{icon:bus }).addTo(macarte); //beaux arts
    let markerBUS3 = L.marker([50.63134,3.06231],{icon:bus }).addTo(macarte); //beaux arts
    let markerBUS4 = L.marker([50.62661,3.04079],{icon:bus }).addTo(macarte); //cormon
    let markerBUS5 = L.marker([50.62648,3.04002],{icon:bus }).addTo(macarte); //cormon
  },
  metro(){
    let metro = L.icon({
      iconUrl: "images/logo/metro.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerMETRO = L.marker([50.63214,3.06161],{icon:metro }).addTo(macarte);
    let markerMETRO1 = L.marker([50.62633,3.04060],{icon:metro }).addTo(macarte);
    let markerMETRO2 = L.marker([50.63441,3.03039],{icon:metro }).addTo(macarte);
    let markerMETRO3 = L.marker([50.62999,3.03537],{icon:metro }).addTo(macarte);
  },
  velo (){
    let velo = L.icon({
      iconUrl: "images/logo/velo.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerVELO = L.marker([50.63465,3.04841],{icon:velo }).addTo(macarte); //solfé
    let markerVELO1 = L.marker([50.63235,3.06231],{icon:velo }).addTo(macarte); //beaux arts
    let markerVELO2 = L.marker([50.62624,3.04001],{icon:velo }).addTo(macarte); //cormon
  },
  //******************************************RESTAU************************************************
  aeu(){
    let aeu = L.icon({
      iconUrl: "images/logo/aeu.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0,0],
    });
    let markerAEU = L.marker([50.63309,3.04795],{icon:aeu }).addTo(macarte);
    let PopUpAEU= "<b>AEU</b><br>Association d'Entraide Universitaire";
    markerAEU.bindPopup(PopUpAEU);
  },
  sandwich(){
    let sandwich = L.icon({
      iconUrl: "images/logo/sandwich.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0,0],
    });
    let markerSAND = L.marker([50.63359,3.04813],{icon:sandwich }).addTo(macarte); //dog
    let markerSAND1 = L.marker([50.63334,3.04788],{icon:sandwich }).addTo(macarte); //boite à sandwich
    let markerSAND2 = L.marker([50.63445,3.02112],{icon:sandwich }).addTo(macarte); //pause sandwich
    let markerSAND3 = L.marker([50.63420,3.05505],{icon:sandwich }).addTo(macarte); //Paul
    let markerSAND4 = L.marker([50.63601,3.02760],{icon:sandwich }).addTo(macarte); //friterie colysee
    let markerSAND5 = L.marker([50.62983,3.04597],{icon:sandwich }).addTo(macarte); //kebab celine
    let PopUpDOG= "<b>DOG Sandwich</b><br>Sandwicherie";
    markerSAND.bindPopup(PopUpDOG);
  },
  pizza(){
    let pizza = L.icon({
      iconUrl: "images/logo/pizza.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0,0],
    });
    let markerPIZZA = L.marker([50.63649,3.02608],{icon:pizza }).addTo(macarte); //dominos
    let markerPIZZA1 = L.marker([50.63385,3.05564],{icon:pizza }).addTo(macarte); //pizza rabbit centre
    let markerPIZZA2 = L.marker([50.63697,3.02513],{icon:pizza }).addTo(macarte); //kiosque à pizza
    let markerPIZZA3 = L.marker([50.63589,3.02881],{icon:pizza }).addTo(macarte); //pizza rabbit eura
    let markerPIZZA4 = L.marker([50.63213,3.04663],{icon:pizza }).addTo(macarte); //pizza factory
    let markerPIZZA5 = L.marker([50.62981,3.04590],{icon:pizza }).addTo(macarte); //perfecto pizza
  },
  gare(){
    let gare = L.icon({
      iconUrl: "images/logo/gare.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0,0],
    });
    let markerGARE = L.marker([50.63627,3.07089],{icon:gare }).addTo(macarte); //lille flandres
    let markerGARE1 = L.marker([50.63932,3.07540],{icon:gare }).addTo(macarte); //lille europe
  }
};
