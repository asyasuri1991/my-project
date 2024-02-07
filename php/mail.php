
<?php
$to = "asya.suri@yandex.ru";

$from = $_POST['email'];


$subject = "Новое сообщение с сайта";


if(mail($to,$subject,$message,$headers)) {


echo "Сообщение отправлено!";


} else {


echo "Ошибка при отправке сообщения.";


}


?>
