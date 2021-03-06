var libs = {
    portal: require('/lib/xp/portal')
};

exports.get = function(req) {
    var result = libs.portal.getContent();
    var url = result.data.url || false;
	var disabled = (req.mode !== 'live'); // Disable the redirect when inside Content Studio
    var response = {
		applyFilters: false,
		postProcess: false
	};

    if (url && !disabled) {
        response.redirect = url;
    } else {
		response.contentType = 'text/html';
        var body = '<html><head><title>Disabled</title>' +
						'<style>' +
						'html,body { min-height:100%; }' +
						'main {' +
						'	height: 100%;' +
						'	display: flex;' +
						'	text-align: center;' +
						'	flex-flow: row wrap;' +
						'	align-content: center;' +
						'}' +
						'p {' +
						'	font-size: 21px;' +
						'	font-family: "Open Sans", sans-serif;' +
						'	color: #9e9e9e;' +
						'	width: 100%;' +
						'}' +
						'a {' +
						'	opacity: 0.6;' +
						'}' +
						'</style>' +
						'</head><body>' +
						'<main><p>';
		if (url) {
			body += 'Redirect created, but has been disabled inside Content Studio.</p><p>Configured redirect: <a href="' + url + '" target="_blank">' + url + '</a>';
		} else {
			body += 'No URL configured (edit this content in Content Studio).';
		}
		body += '</p></main>';
		body += '</body></html>';
		response.body = body;
    }

    return response;
};
