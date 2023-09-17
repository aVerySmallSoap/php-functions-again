<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./CSS/index.css">
    <link rel="stylesheet" href="./CSS/alert.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <div class="inner-container">
            <div class="title-container">
                <span id="title">PHP Functions</span>
            </div>
            <div class="container-body">
                <label for="input1">Input first number: </label>
                <input name="input1" type="text" id="input1">
                <label for="input2">Input second number: </label>
                <input name="input2" type="text" id="input2">
            </div>
            <div class="control-form">
                <form id="form">
                    <label for="selection">Select an action:</label>
                    <select name="operation-selection" id="selection">
                        <option value="Addition">Addition</option>
                        <option value="Subtraction">Subtraction</option>
                        <option value="Multiplication">Multiplication</option>
                        <option value="Division">Division</option>
                        <option value="Modulus">Modulus</option>
                    </select>
                    <button type="submit">Calculate</button>
                </form>
            </div>
        </div>
    </div>
    <script src="/JS/form-handler.js"></script>
</body>
</html>