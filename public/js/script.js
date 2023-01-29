var socket;
window.onload = function () {

    socket = io.connect('http://localhost:3000');

    socket.on('message-from-others', function (message) {
        var html = '<div class="message-box others-message-box">' +
            '<div class="message others-message"> ' + message + ' </div>' +
            '<div class="separator"></div>' + 
            '</div>';

        document.getElementById("message-area").innerHTML += html;
    })
}
const date = new Date();
console.log(date.toLocaleTimeString('en-US'));

// Get the input field
var form = document.getElementById("typing-area");
// Execute a function when the user presses a key on the keyboard
form.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    sendMessage();
  }
});
function sendMessage() {
    var message = document.getElementById("typing-box").value;
    if (message != "") {
        const date = new Date();
        const local = date.toLocaleTimeString('en-US');
        
        var html = '<div class="message-box my-message-box">' + 
        '<div class="message my-message"> ' + message + ' </div>' + 
        '<div class="separator"></div>' + 
        '</div>';

        document.getElementById("message-area").innerHTML += html;
        document.getElementById("typing-box").value = "";
        socket.emit('message', message);
    }
}

