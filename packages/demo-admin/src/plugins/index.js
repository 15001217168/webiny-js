// @flow
import { fileUploadPlugin, imagePlugin } from "webiny-app/plugins";
import adminPlugins from "webiny-admin/plugins";
import securityPlugins from "webiny-app-security/admin/plugins";
import cmsPlugins from "webiny-app-cms/admin/plugins";
import cookiePolicyPlugins from "webiny-integration-cookie-policy/plugins/admin";
import googleTagManagerPlugins from "webiny-integration-google-tag-manager/plugins/admin";
import typeformPlugins from "webiny-integration-typeform/plugins/admin";
import mailchimpPlugins from "webiny-integration-mailchimp/plugins/admin";

const plugins = [
    imagePlugin,
    adminPlugins,
    securityPlugins,
    cmsPlugins,
    cookiePolicyPlugins,
    googleTagManagerPlugins,
    typeformPlugins,
    mailchimpPlugins
];

if (process.env.NODE_ENV !== "development") {
    plugins.push(
        fileUploadPlugin({
            webinyCloud: true
        })
    );
} else {
    plugins.push(fileUploadPlugin({}));
}

export default plugins;
