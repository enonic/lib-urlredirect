var libs = {
    portal: require('/lib/xp/portal')
};

exports.get = function(req) {
    var result = libs.portal.getContent();
    var url = result.data.url || false;
	var disabled = !(req.mode === 'edit' || req.mode === 'preview'); // Disable the redirect when inside Content Studio
    var response = {
		postProcess: false,
		applyFilters: false
	};

    if (url) {
        response.redirect = url;
    } else {
		response.contentType = 'text/html';
        response.body = '<html><head><title>Disabled</title>' +
						'<style>' +
						'html,body {min-height:100%;}' +
						'p {' +
						'	font-size: 21px;' +
						'	font-family: "Open Sans", sans-serif;' +
						'	color: lightgray;' +
						'	height: 100%;' +
						'	display: flex;' +
						'	text-align: center;' +
						'}' +
						'</style>' +
						'</head><body>' +
						'<p>';
		if (disabled) {
			response.body += 'Redirect created, but has been disabled inside Content Studio.<br />Configured redirect: <a href="' + url + '" target="_blank">' + url + '</a>';
		} else {
			response.body += 'No URL configured (edit this content in Content Studio).';
		}
		response.body += '</p>';
		response.body += '</body></html>';
    }

    return response;
};
