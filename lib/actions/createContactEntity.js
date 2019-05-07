/**
 * Auto-generated action file for "Data2CRM.API" API.
 *
 * Generated at: 2019-05-07T14:40:10.490Z
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
 * Operation: 'createContactEntity'
 * Endpoint Path: '/contact'
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
    "account_id": "account_id",
    "address_city": "address_city",
    "address_country": "address_country",
    "address_state": "address_state",
    "address_street": "address_street",
    "address_zip": "address_zip",
    "alternate_address_city": "alternate_address_city",
    "alternate_address_country": "alternate_address_country",
    "alternate_address_state": "alternate_address_state",
    "alternate_address_street": "alternate_address_street",
    "alternate_address_zip": "alternate_address_zip",
    "created_at": "created_at",
    "date_created": "date_created",
    "date_updated": "date_updated",
    "department": "department",
    "description": "description",
    "do_not_call": "do_not_call",
    "email": "email",
    "email_alt": "email_alt",
    "fax": "fax",
    "first_name": "first_name",
    "full_name": "full_name",
    "last_name": "last_name",
    "lead_source": "lead_source",
    "name": "name",
    "owner_id": "owner_id",
    "phone_home": "phone_home",
    "phone_mobile": "phone_mobile",
    "phone_work": "phone_work",
    "report_to_id": "report_to_id",
    "salutation": "salutation",
    "sync_to_outlook": "sync_to_outlook",
    "title": "title",
    "type": "type",
    "updated_at": "updated_at",
    "user": "user",
    "user_id": "user_id",
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
        operationId: 'createContactEntity',
        pathName: '/contact',
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