from pydantic import BaseModel


# PREDICTIONS
class PredictionRequestBase(BaseModel):
    Current_Support_Team: int
    Currently_Affected_Numbers_of_Machines: int
    Impact: int
    Status: int
    Priority: int
    Project_Phase: int
    Region: int
    Reproducibility: int
    Urgency: int
    Is_business_partner: int
    Frequency_of_occurence: int


class PredictionAllResponse(BaseModel):
    yPredLda: int
    yPredQda: int
    yPredRf: int
    yPredNn: int


class PredictionResponseLda(BaseModel):
    yPredLda: int


class PredictionResponseQda(BaseModel):
    yPredQda: int


class PredictionResponseRf(BaseModel):
    yPredRf: int


class PredictionResponseNn(BaseModel):
    yPredNn: int


class SimilarIssuesResponse(BaseModel):
    rows: dict or None


# EFFORT
class EffortRequestBase(BaseModel):
    customer: int


class CustomersAllResponseBase(BaseModel):
    customers: dict


class CustomerResponseBase(BaseModel):
    rows: dict
    realSpentTime: float
    yPredLdaMean: float
    yPredQdaMean: float
    yPredRfMean: float
    yPredNnMean: float
