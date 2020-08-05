<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$userEmail = $_POST['userEmail'];


// Формирование самого письма
$title = "Best Tour Plan";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";
$bodyEmail = "
<h2>Пользователь подписался на рассылку</h2>
<b>Почта:</b> $userEmail
";

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

if (empty ($userEmail)) {
    $mail->Subject = $title;
    $mail->Body = $body;    
} 
else {
    $mail->Subject = $title;
    $mail->Body = $bodyEmail;    
};

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thanks.html');

