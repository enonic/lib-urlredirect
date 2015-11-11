var portal = require('/lib/xp/portal');

// Handle GET request
exports.get = handleGet;

function handleGet() {
    var result = portal.getContent();
    var url = result.data.url;

    return {
        redirect: url
    };
}