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
        response.body = 'No URL configured (redirects are always disabled when inside Content Studio).';
    }

    return response;
};
