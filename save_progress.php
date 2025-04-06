<?php
header("Content-Type: application/json");
$conn = new mysqli("localhost", "root", "", "readalong");

$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data["user_id"];
$story_id = $data["story_id"];
$correct_words = $data["correct_words"];
$total_words = $data["total_words"];
$stars = $data["stars"];

$stmt = $conn->prepare("INSERT INTO progress (user_id, story_id, correct_words, total_words, stars) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("siiii", $user_id, $story_id, $correct_words, $total_words, $stars);
$stmt->execute();

echo json_encode(["status" => "saved"]);
?>