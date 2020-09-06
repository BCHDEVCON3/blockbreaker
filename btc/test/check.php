<?php

if($_GET&&!empty($_GET["pay_id"])){

  $pay_id = trim(strip_tags($_GET["pay_id"]));

  if(file_exists($pay_id.".txt")){
  	$data = file_get_contents($pay_id.".txt");
  	$response = array(
		'result' => $data,
	 );
  }else{
  	$response = array();
  }

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-type: application/json');
header("Content-Transfer-Encoding: Binary"); 
header("Content-disposition: attachment; filename=\"".$_GET["pay_id"].".json"); 
echo '{"c2dictionary":true, "data":'.json_encode($response).'}';
exit;

}

?>