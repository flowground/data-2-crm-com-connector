# ![LOGO](logo.png) Data2CRM.API **flow**ground Connector

## Description

A generated **flow**ground connector for the Data2CRM.API API (version 1).

Generated from: https://api.apis.guru/v2/specs/data2crm.com/1/swagger.json<br/>
Generated at: 2019-05-07T17:40:10+03:00

## API Description

<p>Make use of our in-depth documentation to get more information about the various functions of the service. Those willing to explore the mechanics of Data2CRM.API can test it in live regime using the short code samples.</p><p>Select CRM: <span id="docs-select-crm" style="font-weight: bold">Loading... please wait</span></p><p>Here are the API access keys:<br><b>X-API2CRM-USERKEY</b>: <span id="docs-user-key">e2a6379ab878ae7e58119d4ec842bf9c926e05b5</span><br><b>X-API2CRM-CRMKEY</b>: <span id="docs-crm-key">7ae5b17008fb414d84981191cf3b66a476ef8bef</span></p><p id="docs-crm-access">The CRM access details are:<br><b>URL</b>: <a id="docs-crm-url" href="https://login.salesforce.com/" target="_blank">https://login.salesforce.com/</a><br><b>E-mail / Username</b>: <span id="docs-crm-username">developers.data2crm.api+1@magneticone.com</span><br><b>Password</b>: <span id="docs-crm-password">data2crmapi123</span></p>

## Authorization

This API does not require authorization.

## Actions

### GET for Account

> Returns all accounts from the system

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter

### POST for Account

> Add account into the system

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Account

> Count all accounts from the system

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Account

> Returns describe for accounts

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Account

> Delete account information

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `account_id` - _required_ - Account Identifier

### GET for Account

> Return account information

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `account_id` - _required_ - Account Identifier

### PUT for Account

> Update account information

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `account_id` - _required_ - Account Identifier

### GET for Attachment

> Returns all attachments from the system

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter
* `parent_type` - _optional_ - Parent Type
    Possible values: account, contact, lead, task, user, opportunity, note.
* `parent_id` - _optional_ - Parent Identifier

### POST for Attachment

> Add attachment into the system

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Attachment

> Count all attachments from the system

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Attachment

> Returns describe for attachments

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Attachment

> Delete attachment information

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `attachment_id` - _required_ - Attachment Identifier

### GET for Attachment

> Return attachment information

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `attachment_id` - _required_ - Attachment Identifier

### PUT for Attachment

> Update attachment information

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `attachment_id` - _required_ - Attachment Identifier

### GET for Call

> Returns all calls from the system

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter
* `parent_type` - _optional_ - Parent Type
    Possible values: account, contact, lead, opportunity, task, user.
* `parent_id` - _optional_ - Parent Identifier

### POST for Call

> Add call into the system

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Call

> Count all calls from the system

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Call

> Returns describe for calls

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Call

> Delete call information

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `call_id` - _required_ - Call Identifier

### GET for Call

> Return call information

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `call_id` - _required_ - Call Identifier

### PUT for Call

> Update call information

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `call_id` - _required_ - Call Identifier

### GET for Contact

> Returns all contacts from the system

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter

### POST for Contact

> Add contact into the system

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Contact

> Count all contacts from the system

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Contact

> Returns describe for contacts

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Contact

> Delete contact information

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `contact_id` - _required_ - Contact Identifier

### GET for Contact

> Return contact information

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `contact_id` - _required_ - Contact Identifier

### PUT for Contact

> Update contact information

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `contact_id` - _required_ - Contact Identifier

### GET for Crm

> Returns all CRMs from the system

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter
* `type` - _optional_ - Type
    Possible values: Bitrix24, SugarCRM, SuiteCRM, BPMOnline, HubSpot, vtiger, OroCRM, ZohoCRM, Insightly, Salesforce, Solve360CRM, HighriseHQ, PipelineDeals, Pipedrive, CapsuleCRM, Zurmo, MicrosoftDynamics.

### POST for Crm

> Add CRM into the system<br><a href="http://www.data2crm.com/api/faqs/need-connect-crm-data2crm-api/" target="_blank">What do I need to connect a CRM to Data2CRM.API?</a>

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key

### COUNT for Crm

> Count all CRMs from the system

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key

### DELETE for Crm

> Delete CRM information

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `crm_id` - _required_ - CRM Identifier

### GET for Crm

> Return CRM information

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `crm_id` - _required_ - CRM Identifier

### PUT for Crm

> Update CRM information<br><a href="http://www.data2crm.com/api/faqs/need-connect-crm-data2crm-api/" target="_blank">What do I need to connect a CRM to Data2CRM.API?</a>

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `crm_id` - _required_ - CRM Identifier

### GET for CustomField

> Returns all custom field from the system

*Tags:* `CustomField`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter
* `entity` - _optional_ - Entity
    Possible values: account, contact, user, opportunity, task, lead, note, attachment, event, email, call, meeting.
* `label` - _optional_ - Label
* `name` - _optional_ - Name

### POST for CustomField

> Add custom field into the system

*Tags:* `CustomField`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for CustomField

> Delete custom field information

*Tags:* `CustomField`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `custom_field_id` - _required_ - Custom Field Identifier

### GET for CustomField

> Return custom field information

*Tags:* `CustomField`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `custom_field_id` - _required_ - Custom Field Identifier

### PUT for CustomField

> Update custom field information

*Tags:* `CustomField`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `custom_field_id` - _required_ - Custom Field Identifier

### GET for Email

> Returns all emails from the system

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter
* `parent_type` - _optional_ - Parent Type
    Possible values: account, opportunity, contact, lead, user, task.
* `parent_id` - _optional_ - Parent Identifier

### POST for Email

> Add email into the system

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Email

> Count all emails from the system

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Email

> Returns describe for emails

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Email

> Delete email information

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `email_id` - _required_ - Email Identifier

### GET for Email

> Return email information

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `email_id` - _required_ - Email Identifier

### PUT for Email

> Update email information

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `email_id` - _required_ - Email Identifier

### GET for Event

> Returns all events from the system

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter
* `parent_type` - _optional_ - Parent Type
    Possible values: account, contact, lead, opportunity, task, user.
* `parent_id` - _optional_ - Parent Identifier

### POST for Event

> Add event into the system

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Event

> Count all events from the system

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Event

> Returns describe for events

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Event

> Delete event information

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `event_id` - _required_ - Event Identifier

### GET for Event

> Return event information

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `event_id` - _required_ - Event Identifier

### PUT for Event

> Update event information

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `event_id` - _required_ - Event Identifier

### GET for Lead

> Returns all leads from the system

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter

### POST for Lead

> Add lead into the system

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Lead

> Count all leads from the system

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Lead

> Returns describe for leads

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Lead

> Delete lead information

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `lead_id` - _required_ - Lead Identifier

### GET for Lead

> Return lead information

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `lead_id` - _required_ - Lead Identifier

### PUT for Lead

> Update lead information

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `lead_id` - _required_ - Lead Identifier

### GET for Meeting

> Returns all meetings from the system

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter
* `parent_type` - _optional_ - Parent Type
    Possible values: account, contact, lead, opportunity, user.
* `parent_id` - _optional_ - Parent Identifier

### POST for Meeting

> Add meeting into the system

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Meeting

> Count all meetings from the system

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Meeting

> Returns describe for meetings

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Meeting

> Delete meeting information

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `meeting_id` - _required_ - Meeting Identifier

### GET for Meeting

> Return meeting information

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `meeting_id` - _required_ - Meeting Identifier

### PUT for Meeting

> Update meeting information

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `meeting_id` - _required_ - Meeting Identifier

### GET for Note

> Returns all notes from the system

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter
* `parent_type` - _optional_ - Parent Type
    Possible values: account, contact, lead, task, user, opportunity, event.
* `parent_id` - _optional_ - Parent Identifier

### POST for Note

> Add note into the system

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Note

> Count all notes from the system

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Note

> Returns describe for notes

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Note

> Delete note information

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `note_id` - _required_ - Note Identifier

### GET for Note

> Return note information

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `note_id` - _required_ - Note Identifier

### PUT for Note

> Update note information

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `note_id` - _required_ - Note Identifier

### GET for Opportunity

> Returns all opportunities from the system

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter

### POST for Opportunity

> Add opportunity into the system

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Opportunity

> Count all opportunities from the system

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Opportunity

> Returns describe for opportunities

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Opportunity

> Delete opportunity information

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `opportunity_id` - _required_ - Opportunity Identifier

### GET for Opportunity

> Return opportunity information

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `opportunity_id` - _required_ - Opportunity Identifier

### PUT for Opportunity

> Update opportunity information

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `opportunity_id` - _required_ - Opportunity Identifier

### GET for Task

> Returns all tasks from the system

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter

### POST for Task

> Add task into the system

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for Task

> Count all tasks from the system

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for Task

> Returns describe for tasks

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for Task

> Delete task information

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `task_id` - _required_ - Task Identifier

### GET for Task

> Return task information

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `task_id` - _required_ - Task Identifier

### PUT for Task

> Update task information

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `task_id` - _required_ - Task Identifier

### GET for User

> Returns all users from the system

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)
* `offset` - _optional_ - Start from record (default: 0)
* `filter` - _optional_ - Filter

### POST for User

> Add user into the system

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### COUNT for User

> Count all users from the system

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DESCRIBE for User

> Returns describe for users

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key

### DELETE for User

> Delete user information

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `user_id` - _required_ - User Identifier

### GET for User

> Return user information

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `user_id` - _required_ - User Identifier

### PUT for User

> Update user information

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key
* `X-API2CRM-CRMKEY` - _required_ - CRM Key
* `user_id` - _required_ - User Identifier

## License

**flow**ground :- Telekom iPaaS / data-2-crm-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
