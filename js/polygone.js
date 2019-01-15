var polygone = {
  urbawood(){
    let poly_urbawood = L.polygon([
      [50.6330912, 3.0232973],
      [50.6332685, 3.0237283],
      [50.6331245, 3.0238751],
      [50.6329517, 3.0234348]
    ],{
      color:'#703500',
      fillColor:'#be8d2e',
      fillOpacity:0.7
    }).addTo(macarte);
  },
  isen(){
    let poly_ISEN = L.polygon([
      [50.63427, 3.04880],
      [50.63385, 3.04962],
      [50.63334, 3.04894],
      [50.63373, 3.04821]
    ],{
      color:'black',
      fillColor:'red',
      fillOpacity:0.7
    }).addTo(macarte);
  },
  isa(){
    let poly_ISA = L.polygon([
      [50.63408, 3.04659],
      [50.63404, 3.04677],
      [50.63401, 3.04674],
      [50.63380, 3.04718],
      [50.63368, 3.04704],
      [50.63363, 3.04715],
      [50.63359, 3.04711],
      [50.63373, 3.04682],
      [50.63363, 3.04670],
      [50.63389, 3.04613],
      [50.63398, 3.04623],
      [50.63391 ,3.04639]
    ],{
      color:'green',
      fillColor:'#6cc934',
      fillOpacity:0.7
    }).addTo(macarte);
  },
  hei(){
    let poly_HEI = L.polygon([
      [50.63393, 3.04524],
      [50.63368, 3.04581],
      [50.63334, 3.04545],
      [50.63357, 3.04485]
    ],{
      color:'white',
      fillColor:'black',
      fillOpacity:0.7
    }).addTo(macarte);
  },
  yncrea(){
    let poly_yncrea = L.polygon([
      [50.63359, 3.04711],
      [50.63373, 3.04682],
      [50.63363, 3.04670],
      [50.63350, 3.04701],
    ],{
      color:'black',
      fillColor:'#ffa500',
      fillOpacity:0.7
    }).addTo(macarte);
  },
  yncreaCompta(){
    let poly_yncrea_compta = L.polygon([
      [50.63539, 3.04989],
      [50.63532, 3.05005],
      [50.63522, 3.04995],
      [50.63528, 3.04979],
    ],{
      color:'brown',
      fillColor:'brown',
      fillOpacity:0.7
    }).addTo(macarte);
  },
  aeu(){
    let poly_AEU = L.polygon([
      [50.63328, 3.04777],
      [50.63322, 3.04794],
      [50.63318, 3.04791],
      [50.63310, 3.04809],
      [50.63317, 3.04825],
      [50.63306, 3.04837],
      [50.63287, 3.04796],
      [50.63315, 3.04763]
    ],{
      color:'blue',
      fillColor:'#0070ff',
      fillOpacity:0.7
    }).addTo(macarte);
  }
}
