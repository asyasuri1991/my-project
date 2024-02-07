<?php
$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("asya.suri@yandex.ru", "Заявка с сайта", ". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>
