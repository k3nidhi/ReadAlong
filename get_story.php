<?php
header("Content-Type: application/json");
$conn = new mysqli("localhost", "root", "", "readalong");

$lang = $_GET['lang'] ?? 'en';

$stmt = $conn->prepare("SELECT id, sentence FROM stories WHERE lang = ? ORDER BY RAND() LIMIT 1");
$stmt->bind_param("s", $lang);
$stmt->execute();
$result = $stmt->get_result()->fetch_assoc();

echo json_encode($result);
?>