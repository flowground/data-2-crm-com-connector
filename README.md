# ![LOGO](logo.png) Data2CRM.API **flow**ground Connector

## Description

A generated **flow**ground connector for the Data2CRM.API API (version 1).

Generated from: https://api.apis.guru/v2/specs/data2crm.com/1/swagger.json<br/>
Generated at: 2019-07-08T14:13:33+03:00

## API Description

<p>Make use of our in-depth documentation to get more information about the various functions of the service. Those willing to explore the mechanics of Data2CRM.API can test it in live regime using the short code samples.</p><p>Select CRM: <span id="docs-select-crm" style="font-weight: bold">Loading... please wait</span></p><p>Here are the API access keys:<br><b>X-API2CRM-USERKEY</b>: <span id="docs-user-key">e2a6379ab878ae7e58119d4ec842bf9c926e05b5</span><br><b>X-API2CRM-CRMKEY</b>: <span id="docs-crm-key">7ae5b17008fb414d84981191cf3b66a476ef8bef</span></p><p id="docs-crm-access">The CRM access details are:<br><b>URL</b>: <a id="docs-crm-url" href="https://login.salesforce.com/" target="_blank">https://login.salesforce.com/</a><br><b>E-mail / Username</b>: <span id="docs-crm-username">developers.data2crm.api+1@magneticone.com</span><br><b>Password</b>: <span id="docs-crm-password">data2crmapi123</span></p>

## Authorization

This API does not require authorization.

## Actions

### GET for Account
> Returns all accounts from the system<br/>

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>

### POST for Account
> Add account into the system<br/>

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Account
> Count all accounts from the system<br/>

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Account
> Returns describe for accounts<br/>

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Account
> Delete account information<br/>

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `account_id` - _required_ - Account Identifier<br/>

### GET for Account
> Return account information<br/>

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `account_id` - _required_ - Account Identifier<br/>

### PUT for Account
> Update account information<br/>

*Tags:* `Account`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `account_id` - _required_ - Account Identifier<br/>

### GET for Attachment
> Returns all attachments from the system<br/>

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>
* `parent_type` - _optional_ - Parent Type<br/>
    Possible values: account, contact, lead, task, user, opportunity, note.
* `parent_id` - _optional_ - Parent Identifier<br/>

### POST for Attachment
> Add attachment into the system<br/>

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Attachment
> Count all attachments from the system<br/>

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Attachment
> Returns describe for attachments<br/>

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Attachment
> Delete attachment information<br/>

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `attachment_id` - _required_ - Attachment Identifier<br/>

### GET for Attachment
> Return attachment information<br/>

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `attachment_id` - _required_ - Attachment Identifier<br/>

### PUT for Attachment
> Update attachment information<br/>

*Tags:* `Attachment`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `attachment_id` - _required_ - Attachment Identifier<br/>

### GET for Call
> Returns all calls from the system<br/>

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>
* `parent_type` - _optional_ - Parent Type<br/>
    Possible values: account, contact, lead, opportunity, task, user.
* `parent_id` - _optional_ - Parent Identifier<br/>

### POST for Call
> Add call into the system<br/>

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Call
> Count all calls from the system<br/>

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Call
> Returns describe for calls<br/>

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Call
> Delete call information<br/>

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `call_id` - _required_ - Call Identifier<br/>

### GET for Call
> Return call information<br/>

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `call_id` - _required_ - Call Identifier<br/>

### PUT for Call
> Update call information<br/>

*Tags:* `Call`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `call_id` - _required_ - Call Identifier<br/>

### GET for Contact
> Returns all contacts from the system<br/>

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>

### POST for Contact
> Add contact into the system<br/>

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Contact
> Count all contacts from the system<br/>

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Contact
> Returns describe for contacts<br/>

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Contact
> Delete contact information<br/>

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `contact_id` - _required_ - Contact Identifier<br/>

### GET for Contact
> Return contact information<br/>

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `contact_id` - _required_ - Contact Identifier<br/>

### PUT for Contact
> Update contact information<br/>

*Tags:* `Contact`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `contact_id` - _required_ - Contact Identifier<br/>

### GET for Crm
> Returns all CRMs from the system<br/>

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>
* `type` - _optional_ - Type<br/>
    Possible values: Bitrix24, SugarCRM, SuiteCRM, BPMOnline, HubSpot, vtiger, OroCRM, ZohoCRM, Insightly, Salesforce, Solve360CRM, HighriseHQ, PipelineDeals, Pipedrive, CapsuleCRM, Zurmo, MicrosoftDynamics.

### POST for Crm
> Add CRM into the system<br><a href="http://www.data2crm.com/api/faqs/need-connect-crm-data2crm-api/" target="_blank">What do I need to connect a CRM to Data2CRM.API?</a><br/>

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>

### COUNT for Crm
> Count all CRMs from the system<br/>

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>

### DELETE for Crm
> Delete CRM information<br/>

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `crm_id` - _required_ - CRM Identifier<br/>

### GET for Crm
> Return CRM information<br/>

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `crm_id` - _required_ - CRM Identifier<br/>

### PUT for Crm
> Update CRM information<br><a href="http://www.data2crm.com/api/faqs/need-connect-crm-data2crm-api/" target="_blank">What do I need to connect a CRM to Data2CRM.API?</a><br/>

*Tags:* `Crm`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `crm_id` - _required_ - CRM Identifier<br/>

### GET for CustomField
> Returns all custom field from the system<br/>

*Tags:* `CustomField`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>
* `entity` - _optional_ - Entity<br/>
    Possible values: account, contact, user, opportunity, task, lead, note, attachment, event, email, call, meeting.
* `label` - _optional_ - Label<br/>
* `name` - _optional_ - Name<br/>

### POST for CustomField
> Add custom field into the system<br/>

*Tags:* `CustomField`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for CustomField
> Delete custom field information<br/>

*Tags:* `CustomField`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `custom_field_id` - _required_ - Custom Field Identifier<br/>

### GET for CustomField
> Return custom field information<br/>

*Tags:* `CustomField`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `custom_field_id` - _required_ - Custom Field Identifier<br/>

### PUT for CustomField
> Update custom field information<br/>

*Tags:* `CustomField`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `custom_field_id` - _required_ - Custom Field Identifier<br/>

### GET for Email
> Returns all emails from the system<br/>

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>
* `parent_type` - _optional_ - Parent Type<br/>
    Possible values: account, opportunity, contact, lead, user, task.
* `parent_id` - _optional_ - Parent Identifier<br/>

### POST for Email
> Add email into the system<br/>

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Email
> Count all emails from the system<br/>

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Email
> Returns describe for emails<br/>

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Email
> Delete email information<br/>

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `email_id` - _required_ - Email Identifier<br/>

### GET for Email
> Return email information<br/>

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `email_id` - _required_ - Email Identifier<br/>

### PUT for Email
> Update email information<br/>

*Tags:* `Email`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `email_id` - _required_ - Email Identifier<br/>

### GET for Event
> Returns all events from the system<br/>

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>
* `parent_type` - _optional_ - Parent Type<br/>
    Possible values: account, contact, lead, opportunity, task, user.
* `parent_id` - _optional_ - Parent Identifier<br/>

### POST for Event
> Add event into the system<br/>

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Event
> Count all events from the system<br/>

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Event
> Returns describe for events<br/>

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Event
> Delete event information<br/>

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `event_id` - _required_ - Event Identifier<br/>

### GET for Event
> Return event information<br/>

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `event_id` - _required_ - Event Identifier<br/>

### PUT for Event
> Update event information<br/>

*Tags:* `Event`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `event_id` - _required_ - Event Identifier<br/>

### GET for Lead
> Returns all leads from the system<br/>

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>

### POST for Lead
> Add lead into the system<br/>

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Lead
> Count all leads from the system<br/>

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Lead
> Returns describe for leads<br/>

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Lead
> Delete lead information<br/>

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `lead_id` - _required_ - Lead Identifier<br/>

### GET for Lead
> Return lead information<br/>

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `lead_id` - _required_ - Lead Identifier<br/>

### PUT for Lead
> Update lead information<br/>

*Tags:* `Lead`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `lead_id` - _required_ - Lead Identifier<br/>

### GET for Meeting
> Returns all meetings from the system<br/>

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>
* `parent_type` - _optional_ - Parent Type<br/>
    Possible values: account, contact, lead, opportunity, user.
* `parent_id` - _optional_ - Parent Identifier<br/>

### POST for Meeting
> Add meeting into the system<br/>

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Meeting
> Count all meetings from the system<br/>

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Meeting
> Returns describe for meetings<br/>

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Meeting
> Delete meeting information<br/>

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `meeting_id` - _required_ - Meeting Identifier<br/>

### GET for Meeting
> Return meeting information<br/>

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `meeting_id` - _required_ - Meeting Identifier<br/>

### PUT for Meeting
> Update meeting information<br/>

*Tags:* `Meeting`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `meeting_id` - _required_ - Meeting Identifier<br/>

### GET for Note
> Returns all notes from the system<br/>

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>
* `parent_type` - _optional_ - Parent Type<br/>
    Possible values: account, contact, lead, task, user, opportunity, event.
* `parent_id` - _optional_ - Parent Identifier<br/>

### POST for Note
> Add note into the system<br/>

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Note
> Count all notes from the system<br/>

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Note
> Returns describe for notes<br/>

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Note
> Delete note information<br/>

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `note_id` - _required_ - Note Identifier<br/>

### GET for Note
> Return note information<br/>

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `note_id` - _required_ - Note Identifier<br/>

### PUT for Note
> Update note information<br/>

*Tags:* `Note`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `note_id` - _required_ - Note Identifier<br/>

### GET for Opportunity
> Returns all opportunities from the system<br/>

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>

### POST for Opportunity
> Add opportunity into the system<br/>

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Opportunity
> Count all opportunities from the system<br/>

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Opportunity
> Returns describe for opportunities<br/>

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Opportunity
> Delete opportunity information<br/>

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `opportunity_id` - _required_ - Opportunity Identifier<br/>

### GET for Opportunity
> Return opportunity information<br/>

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `opportunity_id` - _required_ - Opportunity Identifier<br/>

### PUT for Opportunity
> Update opportunity information<br/>

*Tags:* `Opportunity`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `opportunity_id` - _required_ - Opportunity Identifier<br/>

### GET for Task
> Returns all tasks from the system<br/>

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>

### POST for Task
> Add task into the system<br/>

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for Task
> Count all tasks from the system<br/>

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for Task
> Returns describe for tasks<br/>

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for Task
> Delete task information<br/>

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `task_id` - _required_ - Task Identifier<br/>

### GET for Task
> Return task information<br/>

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `task_id` - _required_ - Task Identifier<br/>

### PUT for Task
> Update task information<br/>

*Tags:* `Task`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `task_id` - _required_ - Task Identifier<br/>

### GET for User
> Returns all users from the system<br/>

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `X-API2CRM-DATA-ENABLE` - _optional_ - Data Enable<br/>
    Possible values: false, true.
* `limit` - _optional_ - Amount of results (default: 25)<br/>
* `offset` - _optional_ - Start from record (default: 0)<br/>
* `filter` - _optional_ - Filter<br/>

### POST for User
> Add user into the system<br/>

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### COUNT for User
> Count all users from the system<br/>

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DESCRIBE for User
> Returns describe for users<br/>

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>

### DELETE for User
> Delete user information<br/>

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `user_id` - _required_ - User Identifier<br/>

### GET for User
> Return user information<br/>

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `user_id` - _required_ - User Identifier<br/>

### PUT for User
> Update user information<br/>

*Tags:* `User`

#### Input Parameters
* `X-API2CRM-USERKEY` - _required_ - User Key<br/>
* `X-API2CRM-CRMKEY` - _required_ - CRM Key<br/>
* `user_id` - _required_ - User Identifier<br/>

## License

**flow**ground :- Telekom iPaaS / data-2-crm-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
