export interface ICustomerRequest {
  customer: number
}

export interface IPredictRequest {
  'Current_Support_Team': number,
  'Currently_Affected_Numbers_of_Machines': number,
  'Impact': number,
  'Status': number,
  'Priority': number,
  'Project_Phase': number,
  'Region': number,
  'Reproducibility': number,
  'Urgency': number,
  'Is_business_partner': number,
  'Frequency_of_occurence': number
}

export interface IPredictAllIssuesResponse {
  'yPredLda': number,
  'yPredQda': number,
  'yPredRf': number,
  'yPredNn': number,
}

export interface IPredictLdaResponse {
  'yPredLda': number,
}

export interface IPredictQdaResponse {
  'yPredQda': number,
}

export interface IPredictRfResponse {
  'yPredRf': number,
}

export interface IPredictNnResponse {
  'yPredNn': number,
}

export interface ICustomerIssuesResponse {
  rows: {
    Spent_time_cat: [key: string, value: number],
    Spent_time: [key: string, value: number],
    Invoice: [key: string, value: number],
    Product: [key: string, value: number],
    Current_Support_Team: [key: string, value: number],
    Currently_Affected_Numbers_of_Machines: [key: string, value: number],
    Impact: [key: string, value: number],
    Status: [key: string, value: number],
    Priority: [key: string, value: number],
    Project_Phase: [key: string, value: number],
    Region: [key: string, value: number],
    Reproducibility: [key: string, value: number],
    Urgency: [key: string, value: number],
    Is_business_partner: [key: string, value: number],
    Frequency_of_occurence: [key: string, value: number],
  },
  realSpentTime: number,
  yPredLdaMean: number,
  yPredQdaMean: number,
  yPredRfMean: number,
  yPredNnMean: number,
}

export interface IAllCustomersResponse {
  customers: [key: string, value: number]
}

export interface ISimilarIssuesResponse {
  rows: {
    Spent_time: [key: string, value: number],
    Customer: [key: string, value: number],
    Product: [key: string, value: number],
  }
}
