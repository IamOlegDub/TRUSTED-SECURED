<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exceptions;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('uk', 'phpmailer/language/');
    $mail->IsHTML(true);

    // Від кого лист
    $mail->setFrom('joseph@i.ua', 'Mailer');
    // Кому відправляти
    $mail->addAddress('dubanzai@gmail.com');
    // Тема листа
    $mail->Subject = 'SoftPartners letter';

    // Тіло листа
    $body = '<h1>Заявка на проект</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['comment']))){
        $body.='<p><strong>Comment:</strong> '.$_POST['comment'].'</p>';
    }

    // додаємо файл

    if(!empty($_FILES['application']['tmp_name'])) {
        // шлях завантаженян файла
        $filePath = __DIR__ . "/files/" . $_FILES['application']['name'];
        // завантажуємо файл
        if (copy($_FILES['application']['tmp_name'], $filePath)) {
            $fileAttach = $filePath;
            $body.='<p><strong>Резюме в додатку</strong></p>';
            $mail->addAttachment($fileAttach);
        }
    }

    $mail->Body = $body;

    // Відпарвка
    if(!$mail->send()) {
        $message = 'Error';
    } else {
        $message = 'Data sent!';
    }
        
    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
    
?>