/**
 * Auto-generated action file for "Data2CRM.API" API.
 *
 * Generated at: 2019-07-08T11:13:33.404Z
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
 * Operation: 'updateUserEntity'
 * Endpoint Path: '/user/{user_id}'
 * Method: 'put'
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
    "X-API2CRM-CRMKEY",
    "user_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "X_API2CRM_USERKEY": "X-API2CRM-USERKEY",
    "X_API2CRM_CRMKEY": "X-API2CRM-CRMKEY",
    "user_id": "user_id",
    "address_city": "address_city",
    "address_country": "address_country",
    "address_postal_code": "address_postal_code",
    "address_state": "address_state",
    "address_street": "address_street",
    "confirm_password": "confirm_password",
    "created_by": "created_by",
    "department": "department",
    "description": "description",
    "email": "email",
    "email_other": "email_other",
    "firstname": "firstname",
    "fullname": "fullname",
    "is_active": "is_active",
    "is_admin": "is_admin",
    "lastname": "lastname",
    "modified_by": "modified_by",
    "name": "name",
    "phone_home": "phone_home",
    "phone_mobile": "phone_mobile",
    "phone_other": "phone_other",
    "phone_work": "phone_work",
    "position": "position",
    "role": "role",
    "roleid": "roleid",
    "signature": "signature",
    "status": "status",
    "title": "title",
    "user_password": "user_password",
    "website": "website",
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
        operationId: 'updateUserEntity',
        pathName: '/user/{user_id}',
        method: 'put',
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