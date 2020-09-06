<?php
header("Content-type: application/json");
require "../Modal/Data.php";

$req_type=$_GET['req_type'] ?? null;
if ($req_type) {
    $jsonData = file_get_contents("../restaurant.json");
    $dataList = json_decode($jsonData, true)['menu_items'];
    try {
        $product = new Restaurant_Menu($dataList);
    } catch (Exception $th) {
        echo json_encode([$th->getMessage()]);
        return;
    }
   switch($req_type)
    {
        case 'prname' : echo $product->getProductNames();
                        break;
        case 'prdetails' : echo $product->getProductDetails($_GET['id']);
                           break;
        default:echo json_encode(['Invalid Request']);
    }
}
?>
