<?php

echo switchoo($_POST["choice"], $_POST["num1"], $_POST["num2"]);

function switchoo($choice, $x, $y): int|float|string{
    switch ($choice){
        case "Addition":
            return add($x, $y);
        case "Subtraction":
            return sub($x, $y);
        case "Multiplication":
            return mul($x, $y);
        case "Division":
            return div($x, $y);
        case "Modulus":
            return mod($x, $y);
        default:
            return "INVALID";
    }
}

function add($x, $y){
    return $x + $y;
}

function sub($x, $y){
    return $x - $y;
}

function mul($x, $y){
    return $x * $y;
}

function div($x, $y){
    return $x / $y;
}

function mod($x, $y){
    return $x % $y;
}