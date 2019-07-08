/**
 * Auto-generated action file for "Data2CRM.API" API.
 *
 * Generated at: 2019-07-08T11:13:33.396Z
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
 * Operation: 'createOpportunityEntity'
 * Endpoint Path: '/opportunity'
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
    "account_name": "account_name",
    "amount": "amount",
    "assigned_user_id": "assigned_user_id",
    "assigned_user_name": "assigned_user_name",
    "campaign_id": "campaign_id",
    "campaign_name": "campaign_name",
    "contact_id": "contact_id",
    "currency_name": "currency_name",
    "currency_symbol": "currency_symbol",
    "date_closed": "date_closed",
    "date_created": "date_created",
    "description": "description",
    "lead_id": "lead_id",
    "lead_source": "lead_source",
    "name": "name",
    "next_step": "next_step",
    "owner_id": "owner_id",
    "probability": "probability",
    "sales_stage": "sales_stage",
    "type": "type",
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
        operationId: 'createOpportunityEntity',
        pathName: '/opportunity',
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