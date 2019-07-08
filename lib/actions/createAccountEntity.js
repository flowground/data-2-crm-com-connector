/**
 * Auto-generated action file for "Data2CRM.API" API.
 *
 * Generated at: 2019-07-08T11:13:33.363Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / data-2-crm-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'createAccountEntity'
 * Endpoint Path: '/account'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "X_API2CRM_USERKEY": "X-API2CRM-USERKEY",
    "X_API2CRM_CRMKEY": "X-API2CRM-CRMKEY",
    "account_category": "account_category",
    "address_type": "address_type",
    "annual_revenue": "annual_revenue",
    "billing_city": "billing_city",
    "billing_country": "billing_country",
    "billing_state": "billing_state",
    "billing_street": "billing_street",
    "billing_zip": "billing_zip",
    "created_at": "created_at",
    "description": "description",
    "email": "email",
    "email_alt": "email_alt",
    "employees": "employees",
    "facebook": "facebook",
    "fax": "fax",
    "industry": "industry",
    "livejournal": "livejournal",
    "name": "name",
    "owner": "owner",
    "owner_id": "owner_id",
    "ownership": "ownership",
    "parent_id": "parent_id",
    "phone": "phone",
    "phone_alt": "phone_alt",
    "rating": "rating",
    "shipping_city": "shipping_city",
    "shipping_country": "shipping_country",
    "shipping_state": "shipping_state",
    "shipping_street": "shipping_street",
    "shipping_zip": "shipping_zip",
    "sic_code": "sic_code",
    "tickersymbol": "tickersymbol",
    "twitter": "twitter",
    "type": "type",
    "updated_at": "updated_at",
    "website": "website",
    "website_alt": "website_alt",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'createAccountEntity',
        pathName: '/account',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}