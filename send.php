<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь

$bookName = $_POST['bookName'];
$bookPhone = $_POST['bookPhone'];
$bookMessage = $_POST['bookMessage'];
$bookEmail = $_POST['bookEmail'];

$newsletterEmail = $_POST['newsletterEmail'];

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Формирование самого письма
$title = "Best Tour Plan";

if (empty ($newsletterEmail) && empty ($name)) {
    $body = "
    <h2>New booking request</h2>
    <b>Name:</b> $bookName<br>
    <b>Phone number:</b> $bookPhone<br>
    <b>Email:</b> $bookEmail<br><br>
    <b>Message:</b><br>$bookMessage
    ";
} 
else if (empty ($bookName) && empty ($name)){
    $body = "
    <h2>New subscriber to the newsletter</h2>
    <b>Email:</b> $newsletterEmail
    ";
}
else {
    $body = "
    <h2>New message</h2>
    <b>Name:</b> $name<br>
    <b>Phone number:</b> $phone<br><br>
    <b>Message:</b><br>$message
    ";
};

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    
    $mail->Host       = 'mail.zuchok.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'tour-plan@zuchok.ru'; // Логин на почте
    $mail->Password   = 'J6u8X5u1'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('tour-plan@zuchok.ru', 'Tour Plan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('zuchok228@gmail.com'); // Ещё один, если нужен

// Отправка сообщения
$mail->isHTML(true);

$mail->Subject = $title;
$mail->Body = $body;    


// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thanks.html');

