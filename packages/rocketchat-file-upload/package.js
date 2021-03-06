/* globals Package */
Package.describe({
	name: 'rocketchat:file-upload',
	version: '0.0.1',
	summary: '',
	git: '',
	documentation: null
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('ecmascript');
	api.use('edgee:slingshot');
	api.use('peerlibrary:aws-sdk');
	api.use('rocketchat:lib');
	api.use('random');
	api.use('underscore');
	api.use('webapp');

	api.addFiles('globalFileRestrictions.js');

	api.addFiles('client/lib/FileUploadBase.js', 'client');
	api.addFiles('client/lib/fileUploadHandler.js', 'client');
	api.addFiles('client/lib/FileUploadAmazonS3.js', 'client');
	api.addFiles('client/lib/FileUploadGridFS.js', 'client');

	api.addFiles('server/lib/FileUpload.js', 'server');
	api.addFiles('server/lib/requests.js', 'server');

	api.addFiles('server/config/configFileUploadAmazonS3.js', 'server');
	api.addFiles('server/config/configFileUploadGridFS.js', 'server');

	api.addFiles('server/methods/sendFileMessage.js', 'server');

	api.addFiles('server/startup/settings.js', 'server');

	api.export('fileUploadHandler');
	api.export('FileUpload');
});
