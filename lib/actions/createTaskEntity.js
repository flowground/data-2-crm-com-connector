/**
 * Auto-generated action file for "Data2CRM.API" API.
 *
 * Generated at: 2019-07-08T11:13:33.398Z
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
 * Operation: 'createTaskEntity'
 * Endpoint Path: '/task'
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
    "assigned_user_id": "assigned_user_id",
    "contact": "contact",
    "contact_id": "contact_id",
    "created_date": "created_date",
    "description": "description",
    "due_date": "due_date",
    "lead_id": "lead_id",
    "name": "name",
    "opportunity": "opportunity",
    "opportunity_id": "opportunity_id",
    "owner": "owner",
    "owner_id": "owner_id",
    "parent_id": "parent_id",
    "priority": "priority",
    "publicly_visible": "publicly_visible",
    "reminder_date": "reminder_date",
    "reporter_id": "reporter_id",
    "start_date": "start_date",
    "status": "status",
    "updated_date": "updated_date",
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
        operationId: 'createTaskEntity',
        pathName: '/task',
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