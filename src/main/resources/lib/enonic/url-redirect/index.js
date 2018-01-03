var libs = {
    portal: require('/lib/xp/portal')
};

exports.get = function(req) {
    var result = libs.portal.getContent();
    var url = result.data.url || false;
	var disabled = (req.mode === 'edit' || req.mode === 'preview'); // Disable the redirect when inside Content Studio
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
						'html,body {min-height:100%;}' +
						'p {' +
						'	font-size: 21px;' +
						'	font-family: "Open Sans", sans-serif;' +
						'	color: lightgray;' +
						'	height: 100%;' +
						'	display: flex;' +
						'	text-align: center;' +
						'	align-items: center;' +
						'}' +
						'</style>' +
						'</head><body>' +
						'<p>';
		if (url) {
			body += 'Redirect created, but has been disabled inside Content Studio.</p><p>Configured redirect: <a href="' + url + '" target="_blank">' + url + '</a>';
		} else {
			body += 'No URL configured (edit this content in Content Studio).';
		}
		body += '</p>';
		body += '</body></html>';
		response.body = body;
    }

    return response;
};
