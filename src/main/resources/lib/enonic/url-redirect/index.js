var libs = {
    portal: require('/lib/xp/portal')
};

exports.get = function(req) {
    var result = libs.portal.getContent();
    var url = result.data.url;
    var response = {};

	 // Disable the redirect when inside Content Studio
	 if (req.mode === 'edit' || req.mode === 'preview') {
		 url = false;
	 }

    if (url) {
        response.redirect = url;
    } else {
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
						'<p>No URL configured (redirects are always disabled when inside Content Studio).</p>' +
						'</body></html>';
    }

    return response;
};
