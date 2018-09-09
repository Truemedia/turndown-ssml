const defaults = require('./../config/defaults.json');

function ssml (turndownService) {
    let settings = defaults; // TODO: Make this overridable?

    turndownService.addRule('ssml', {
      filter: ['speak'],
      replacement: function (content) {
        return content;
      }
    });
    turndownService.addRule('sentence', {
      filter: ['s'],
      replacement: function (content) {
        return '\n\n' + content + '\n\n';
      }
    });
    turndownService.addRule('pause', {
      filter: ['break'],
      replacement: function (content, node) {
        let strength = node.getAttribute('strength') || 'medium';
        let breakSymbol = null;
        let {breakSymbols} = settings;

        switch (strength) {
            case 'none': // No pause should be outputted. This can be used to remove a pause that would normally occur (such as after a period).
            case 'x-weak': // No pause should be outputted (same as none).
                breakSymbol = breakSymbols.noPause;
            break;
            case 'weak': // Treat adjacent words as if separated by a single comma (equivalent to medium).
            case 'medium': // Treat adjacent words as if separated by a single comma.
                breakSymbol = breakSymbols.comma;
            break;
            case 'strong': // Make a sentence break (equivalent to using the <s> tag).
            case 'x-strong': // Make a paragraph break (equivalent to using the <p> tag).
                breakSymbol = breakSymbols.ellipsis;
            break;
        }
        return breakSymbol + content;
      }
    });
};

module.exports = {ssml, defaults};
