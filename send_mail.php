<?php
if($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "nehalkhan4639@gmail.com";
    $subject = "Portfolio Contact Form";
    $body = "Name: {$_POST['name']}\nEmail: {$_POST['email']}\nMessage: {$_POST['message']}";
    $headers = "From: {$_POST['email']}";

    if(mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>