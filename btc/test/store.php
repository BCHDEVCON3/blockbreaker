<?php

if($_GET&&!empty($_GET["pay_id"])&&!empty($_GET["pay_result"])){

  $pay_id = trim(strip_tags($_GET["pay_id"]));
  $pay_result = trim(strip_tags($_GET["pay_result"]));

  $myfile = fopen($pay_id.".txt", "w");
  fwrite($myfile, $pay_result);
  fclose($myfile);

}

?>