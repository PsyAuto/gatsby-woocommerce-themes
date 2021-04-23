require('dotenv').config();

module.exports = {
	siteMetadata: {
	   siteUrl: "https://quizzical-blackwell.185-4-134-158.plesk.page",
	  },
	plugins: [
		// Tell gatsby which theme you will be using and other configs.
		{
		resolve: "gatsby-woocommerce-theme",
		options: {
			wordPressUrl: "https://quizzical-blackwell.185-4-134-158.plesk.page",
			gatsbySiteUrl: "https://quizzical-blackwell.185-4-134-158.plesk.page",
			googleTagManagerId: `${ process.env.GOOGLE_TAGMANAGER_ID }`,
			fbAppId: `${ process.env.FB_APP_ID }`
		}
	} ]
};
