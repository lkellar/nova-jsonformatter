const formatter = require('./formatter').formatter;

exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


nova.commands.register("org.lkellar.JSONFormatter.formatJSON", (editor) => {
    const indentSize = nova.config.get("org.lkellar.JSONFormatter.indent-size", "number");
    const documentRange = new Range(0, editor.document.length);
    
    editor.edit((e) => {
        const text = editor.getTextInRange(documentRange);
        e.replace(documentRange, formatter(text, indentSize));
    });
});