function insertLetter(letter){
    var textField = document.getElementById("textField")
    textField.value += letter;
}

document.body.innerHTML = `
    <div class="buttons-container">
        <button id="a" onclick="insertLetter('a')">a</button>
        <button id="b" onclick="insertLetter('b')">b</button>
        <button id="c" onclick="insertLetter('c')">c</button>
        <button id="d" onclick="insertLetter('d')">d</button>
        <button id="e" onclick="insertLetter('e')">e</button>
        <button id="f" onclick="insertLetter('f')">f</button>
        <button id="g" onclick="insertLetter('g')">g</button>
        <button id="h" onclick="insertLetter('h')">h</button>
        <button id="i" onclick="insertLetter('i')">i</button>
        <button id="j" onclick="insertLetter('j')">j</button>
        <button id="k" onclick="insertLetter('k')">k</button>
        <button id="l" onclick="insertLetter('l')">l</button>
        <button id="m" onclick="insertLetter('m')">m</button>
        <button id="n" onclick="insertLetter('n')">n</button>
        <button id="o" onclick="insertLetter('o')">o</button>
        <button id="p" onclick="insertLetter('p')">p</button>
        <button id="q" onclick="insertLetter('q')">q</button>
        <button id="r" onclick="insertLetter('r')">r</button>
        <button id="s" onclick="insertLetter('s')">s</button>
        <button id="t" onclick="insertLetter('t')">t</button>
        <button id="u" onclick="insertLetter('u')">u</button>
        <button id="v" onclick="insertLetter('v')">v</button>
        <button id="w" onclick="insertLetter('w')">w</button>
        <button id="x" onclick="insertLetter('x')">x</button>
        <button id="y" onclick="insertLetter('y')">y</button>
        <button id="z" onclick="insertLetter('z')">z</button>
    </div>
    <div>
        <textarea id="textfield"></textarea>
    </div>
    <script src="scripts.js"></scripts>
    
    `
