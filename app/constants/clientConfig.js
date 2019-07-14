const BaseConfig = {
	siteBaseUrl: 'http://brest.test/',
};

const clientConfig = {
	siteUrl: BaseConfig.siteBaseUrl,
	ApiUrl: BaseConfig.siteBaseUrl+'/wp-json/jwt-auth/v1/token'
};

export default clientConfig;

/*
const BaseConfig = {
	siteBaseUrl: 'http://wp.test',
};

const clientConfig = {
	siteUrl: BaseConfig.siteBaseUrl,
	ApiUrl: BaseConfig.siteBaseUrl+'/wp-json/jwt-auth/v1/token'
};

export default clientConfig;
*/