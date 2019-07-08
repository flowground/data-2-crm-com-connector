/**
 * Auto-generated action file for "Data2CRM.API" API.
 *
 * Generated at: 2019-07-08T11:13:33.386Z
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
 * Operation: 'createLeadEntity'
 * Endpoint Path: '/lead'
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
    "alt_city": "alt_city",
    "alt_country": "alt_country",
    "alt_state": "alt_state",
    "alt_street": "alt_street",
    "alt_zip_code": "alt_zip_code",
    "annual_revenue": "annual_revenue",
    "assigned_user_id": "assigned_user_id",
    "birth_date": "birth_date",
    "campaign_id": "campaign_id",
    "city": "city",
    "company": "company",
    "contact_id": "contact_id",
    "country": "country",
    "date_created": "date_created",
    "date_updated": "date_updated",
    "department": "department",
    "description": "description",
    "do_not_call": "do_not_call",
    "email": "email",
    "email_home": "email_home",
    "email_other": "email_other",
    "event_id": "event_id",
    "fax": "fax",
    "first_name": "first_name",
    "industry": "industry",
    "last_name": "last_name",
    "lead_source": "lead_source",
    "lead_source_description": "lead_source_description",
    "opened": "opened",
    "opportunity_id": "opportunity_id",
    "owner_id": "owner_id",
    "pager": "pager",
    "phone_home": "phone_home",
    "phone_mobile": "phone_mobile",
    "phone_other": "phone_other",
    "phone_work": "phone_work",
    "referred_by": "referred_by",
    "salutation": "salutation",
    "skype_id": "skype_id",
    "state": "state",
    "status": "status",
    "status_description": "status_description",
    "street": "street",
    "suite": "suite",
    "task_id": "task_id",
    "title": "title",
    "type": "type",
    "website": "website",
    "zip_code": "zip_code",
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
        operationId: 'createLeadEntity',
        pathName: '/lead',
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