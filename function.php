<?php

echo calculate($_POST["choice"], $_POST["num1"], $_POST["num2"]);

function calculate($choice, $x, $y): int|float|string{
    if(!sanitizeInput($x,$y)){
        return "INVALID";
    }else{
        return match ($choice) {
            "Addition" => add($x, $y),
            "Subtraction" => sub($x, $y),
            "Multiplication" => mul($x, $y),
            "Division" => div($x, $y),
            "Modulus" => mod($x, $y),
            default => "INVALID",
        };
    }
}

function add($x, $y) : int|float{
    return $x + $y;
}

function sub($x, $y) : int|float{
    return $x - $y;
}

function mul($x, $y) : int|float{
    return $x * $y;
}

function div($x, $y) : int|float{
    return $x / $y;
}

function mod($x, $y) : int|float{
    return $x % $y;
}

function sanitizeInput(...$input): bool{
    foreach ($input as $str) {
        if($str == "" || $str == null){
            return false;
        }
    }
    return true;
}

function sanitizeAndReturn(...$input): array{
    $arr = array();
    foreach ($input as $err) {
        if($err == "" || $err == null){
            $arr[] = $err;
        }
    }
    return $arr;
}