
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* Exception class. */

require 'PHPMailer/src/Exception.php';

/* The main PHPMailer class. */
require 'PHPMailer/src/PHPMailer.php';

/* SMTP class, needed if you want to use SMTP. */
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(TRUE);
/* Open the try/catch block. */
try {

    $data =  key($_POST);
    $email = str_replace('_', '.', $data);

    echo str_replace('_', '.', $data);

    /* Set the mail sender. */
    $mail->setFrom('office@videoversub.com', 'videoversub.com');
    /* Add a recipient. */
    $mail->addAddress($email, 'D');
    /* Set the subject. */
    $mail->Subject = 'videoversub';
    /* Set the mail message body. */
    $mail->Body = 'Thank you for contacting Videover, we received your message and will contact you shortly .
    Regards,
    Videover team';

    /* SMTP parameters. */

    /* Tells PHPMailer to use SMTP. */
    $mail->isSMTP();
    $mail->SMTPDebug = true;
    /* SMTP server address. */
    //$mail->CharSet = "UTF-8";
    $mail->Host = 'smtp.gmail.com';
    /* Use SMTP authentication. */
    $mail->SMTPAuth = TRUE;
    /* Set the encryption system. */
    $mail->SMTPSecure = 'tls';
    $mail->MailerDebug = false;
    /* SMTP authentication username. */
    $mail->Username = 'videoversub1@gmail.com';
    /* SMTP authentication password. */
    $mail->Password = 'PruMGj8]Y9EhunQz';
    /* Set the SMTP port. */
    $mail->Port = 587;
    /* Finally send the mail. */
    $mail->send();
} catch (Exception $e) {
    /* PHPMailer exception. */
    echo $e->errorMessage();
} catch (\Exception $e) {
    /* PHP exception (note the backslash to select the global namespace Exception class). */
    echo $e->getMessage();
}

?>