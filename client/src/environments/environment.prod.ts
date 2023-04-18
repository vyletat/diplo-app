export const environment = {
  production: true,
  /* Predictions */
  PREDICT_ALL_ISSUES_URL: 'http://localhost:4444/predictions/issue-all',
  PREDICT_ISSUE_LDA_URL: 'http://localhost:4444/predictions/issue-lda',
  PREDICT_ISSUE_QDA_URL: 'http://localhost:4444/predictions/issue-qda',
  PREDICT_ISSUE_RF_URL: 'http://localhost:4444/predictions/issue-rf',
  PREDICT_ISSUE_NN_URL: 'http://localhost:4444/predictions/issue-nn',
  SIMILAR_ISSUES_URL: 'http://localhost:4444/predictions/similar-issues',
  /* Effort */
  CUSTOMERS_URL: 'http://localhost:4444/effort/all-customers',
  CUSTOMER_URL: 'http://localhost:4444/effort/customer',
};
