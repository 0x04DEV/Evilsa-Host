function toogle_payload(){
var req = new XMLHttpRequest();
req.responseType = "arraybuffer";
req.open("GET",PLfile,true);
req.send();
req.onreadystatechange=function(){
if (req.readyState == 4){
  var tmp0 = new Uint8Array(req.response.byteLength);
  tmp0.set(new Uint8Array(req.response), 0);
  var payload = new Uint32Array(tmp0);
  the_payload = payload;
  setTimeout(poc, 1500);
  }
};
}

function goldhen900(){
LoadedMSG="GoldHen 2.2.2 Loaded... Press OK Now !!!";
PLfile = "PL_Station4/9.00/goldhen_2.2.2_900.bin";
exec_type = "payload";
toogle_payload();
}

function goldhen755(){
LoadedMSG="GoldHen 2.2.2 Loaded... Press OK Now !!!";
PLfile = "PL_Station4/7.55/goldhen_2.2.2_755.bin";
exec_type = "payload";
toogle_payload();
}

function goldhen751(){
LoadedMSG="GoldHen 2.2.2 Loaded... Press OK Now !!!";
PLfile = "PL_Station4/7.51/goldhen_2.2.2_751.bin";
exec_type = "payload";
toogle_payload();
}

function goldhen750(){
LoadedMSG="GoldHen 2.2.2 Loaded... Press OK Now !!!";
PLfile = "PL_Station4/7.50/goldhen_2.2.2_750.bin";
exec_type = "payload";
toogle_payload();
}

function goldhen702(){
LoadedMSG="GoldHen 2.2.2 Loaded... Press OK Now !!!";
PLfile = "PL_Station4/7.02/goldhen_2.2.2_702.bin";
exec_type = "payload";
toogle_payload();
}

function goldhen672(){
LoadedMSG="GoldHen 2.2.2 Loaded... Press OK Now !!!";
PLfile = "PL_Station4/6.72/goldhen_2.2.2_672.bin";
exec_type = "payload";
toogle_payload();
}

function goldhen671(){
LoadedMSG="GoldHen 2.2.2 Loaded... Press OK Now !!!";
PLfile = "PL_Station4/6.71/goldhen_2.2.2_671.bin";
exec_type = "payload";
toogle_payload();
}

function goldhen505(){
LoadedMSG="GoldHen 2.2.2 Loaded... Press OK Now !!!";
PLfile = "PL_Station4/5.05/goldhen_2.2.2_505.bin";
exec_type = "payload";
toogle_payload();
}