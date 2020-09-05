<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];

    $header = "From: Teeglamz Website by: ".$email;
    $subject = "New Email List";
    $mailto = "fakuadegbenga@gmail.com";
    $message = "You have received an email from ".$name.". \n\n". "Add my email ".$email."to the email list";

    mail($mailto, $subject, $message, $header);
    header("Location: index.html?mailsend");
}

?>