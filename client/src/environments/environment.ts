// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /* Predictions */
  PREDICT_ALL_ISSUES_URL: '/api/predictions/issue-all',
  PREDICT_ISSUE_LDA_URL: '/api/predictions/issue-lda',
  PREDICT_ISSUE_QDA_URL: '/api/predictions/issue-qda',
  PREDICT_ISSUE_RF_URL: '/api/predictions/issue-rf',
  PREDICT_ISSUE_NN_URL: '/api/predictions/issue-nn',
  SIMILAR_ISSUES_URL: '/api/predictions/similar-issues',
  /* Effort */
  CUSTOMERS_URL: '/api/effort/all-customers',
  CUSTOMER_URL: '/api/effort/customer',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
