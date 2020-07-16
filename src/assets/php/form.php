<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';



$formdata = json_decode(file_get_contents('php://input'),true);
   $name = $formdata['name'];
   $phone = $formdata['phone'];
   $email = $formdata['email'];
   $message = $formdata['message'];

   $msg = '<strong>Nombre: </strong>'.$name; 
   $msg .= '<br><strong>Phone</strong>: '.$phone;
   $msg .= '<br><strong>Email</strong>: '.$email;
   $msg .= '<br><strong>Mensaje</strong>: '.$message;


$mail = new PHPMailer(true);

try {
   //Server settings
   $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'mountaber.jewelry@gmail.com';                     // SMTP username
    $mail->Password   = '2020PerpetualFineJewelry&&$$';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

   //Recipients
   $mail->setFrom('mountaber.jewelry@gmail.com', 'Mountaber');
   $mail->addAddress('hello@mountaber.com', 'Mountaber');
   // Content
   $mail->isHTML(true);                                  // Set email format to HTML
   $mail->Subject = 'Contacto desde www.mountaber.com';
   $mail->Body    = $msg;
   //  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';


$mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>