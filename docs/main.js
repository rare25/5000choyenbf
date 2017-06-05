$(document).ready(
    function () {
        $('#run-button').click(run);
    }
);

function run() {
    var pointer = 0;
    var memory = new Uint8Array($('#memorysize-input').val());
    var output = '';
    var program = $('#input-text').val();
    var bracket = 0;
    var counter = 0;

    while (counter < program.length) {
        switch (program.substr(counter, 1)) {
            case '>':
            case 'し':
                pointer++;
                break;
            case '<':
            case 'い':
                pointer--;
                break;
            case '+':
            case '5':
            case '５':
                memory[pointer]++;
                break;
            case '-':
            case '0':
            case '０':
                memory[pointer]--;
                break;
            case '[':
            case '兆':
                if (memory[pointer] == 0) {
                    bracket++;
                    while (bracket != 0) {
                        counter++;
                        if (program[counter] == '兆' || program[counter] == '[') bracket++;
                        if (program[counter] == '円' || program[counter] == ']') bracket--;
                    }
                }
                break;
            case ']':
            case '円':
                if (memory[pointer] != 0) {
                    bracket--;
                    while (bracket != 0) {
                        counter--;
                        if (program[counter] == '兆' || program[counter] == '[') bracket++;
                        if (program[counter] == '円' || program[counter] == ']') bracket--;
                    }
                }
                break;
            case '.':
            case '欲':
                output += String.fromCharCode(memory[pointer]);
                break;
            case ',':
            case '!':
            case '！':
                //入力は未実装
                break;
            default:
                break;
        }
        counter++;
    }

    $('#output-text').val(output);
}