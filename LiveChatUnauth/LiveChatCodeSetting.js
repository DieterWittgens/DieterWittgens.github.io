window._snapinsSnippetSettingsFile = (function () {
  console.log('latest and greatest snapins?');
  embedded_svc.snippetSettingsFile.extraPrechatFormDetails = [{ "label": "Case Origin", "value": "Chat", "displayToAgent": false }];

  embedded_svc.snippetSettingsFile.extraPrechatInfo = [{
    "entityName": "Contact",
    "showOnCreate": true,
    "linkToEntityName": "Case",
    "linkToEntityField": "ContactId",
    "saveToTranscript": "ContactId",
    "entityFieldMaps": [{
      "doCreate": false,
      "doFind": false,
      "fieldName": "FirstName",
      "isExactMatch": false,
      "label": "First Name"
    }, {
      "doCreate": false,
      "doFind": true,
      "fieldName": "LastName",
      "isExactMatch": true,
      "label": "Last Name"
    }, {
      "doCreate": false,
      "doFind": true,
      "fieldName": "Email_and_Record_Type__c",
      "isExactMatch": true,
      "label": "Email and Record Type"
    }],
  }, {
    "entityName": "Case",
    "showOnCreate": true,
    "saveToTranscript": "CaseId",
    "entityFieldMaps": [{
      "isExactMatch": false,
      "fieldName": "Subject",
      "doCreate": true,
      "doFind": false,
      "label": "Subject"
    }, {
      "isExactMatch": false,
      "fieldName": "Origin",
      "doCreate": true,
      "doFind": false,
      "label": "Case Origin"
    }]
  }];
})();  