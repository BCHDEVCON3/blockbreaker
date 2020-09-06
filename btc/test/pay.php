<?php

if($_GET&&!empty($_GET["pay_id"])){

  $pay_id = trim(strip_tags($_GET["pay_id"]));

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="./styles.css">
  <script type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/bitcoincom-link@0.1.10/lib/bitcoincom-link.min.js"></script>
</head>
<body onload="sendAssets('<?php echo $pay_id; ?>', 'bitcoincash:qp6wsvp8mvj2ugavqu5xescfjj7htfxftyap8z6uth', 'BCH', '0.00001', '[&quot;Pay just 0.00001BCH to Play!&quot;]')">
  <p id="payment_text">If you don't see the payment dialog, please refresh!</p>
  <script type="text/javascript" src="./main.js"></script>
</body>
</html>