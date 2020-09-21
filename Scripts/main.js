const formatter = require('./formatter').formatter;

exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


nova.commands.register("json-formatter.formatJSON", (editor) => {
    console.log(editor);
    const documentRange = new Range(0, editor.document.length);
    
    editor.edit((e) => {
        const text = editor.getTextInRange(documentRange);
        console.log(formatter(text));
        e.replace(documentRange, formatter(text));
    });
});