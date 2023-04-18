import pandas as pd
from fastapi import APIRouter
import numpy as np
from pyasn1.compat.octets import null

# prefix used for all endpoints in this file
from ..pred_models import lda_model, rf_model, nn_model, qda_model
from ..schemas import PredictionRequestBase, PredictionAllResponse, PredictionResponseLda, PredictionResponseQda, \
    PredictionResponseRf, PredictionResponseNn, SimilarIssuesResponse
from ..service import data_service

predictions = APIRouter(prefix="/predictions")


def mapRequestToDf(request):
    return pd.DataFrame(
        {
            "Current_Support_Team": [request.Current_Support_Team],
            "Currently_Affected_Numbers_of_Machines": [request.Currently_Affected_Numbers_of_Machines],
            "Impact": [request.Impact],
            "Status": [request.Status],
            "Priority": [request.Priority],
            "Project_Phase": [request.Project_Phase],
            "Region": [request.Region],
            "Reproducibility": [request.Reproducibility],
            "Urgency": [request.Urgency],
            "Is_business_partner": [request.Is_business_partner],
            "Frequency_of_occurence": [request.Frequency_of_occurence],
        }
    )


@predictions.post("/issue-all", response_model=PredictionAllResponse)
def issues(request: PredictionRequestBase):
    # vytvoření DataFrame
    data = mapRequestToDf(request)

    y_pred_lda = lda_model.predict_lda(data).tolist()
    y_pred_qda = qda_model.predict_qda(data).tolist()
    y_pred_rf = rf_model.predict_rf(data).tolist()
    y_pred_nn = nn_model.predict_nn(data)

    return {
        'yPredLda': y_pred_lda[0],
        'yPredQda': y_pred_qda[0],
        'yPredRf': y_pred_rf[0],
        'yPredNn': y_pred_nn[0]
    }


@predictions.post("/issue-lda", response_model=PredictionResponseLda)
def issues(request: PredictionRequestBase):
    data = mapRequestToDf(request)

    y_pred_lda = lda_model.predict_lda(data).tolist()

    return {'yPredLda': y_pred_lda}


@predictions.post("/issue-qda", response_model=PredictionResponseQda)
def issues(request: PredictionRequestBase):
    data = mapRequestToDf(request)

    y_pred_qda = qda_model.predict_qda(data).tolist()

    return {'yPredLda': y_pred_qda}


@predictions.post("/issue-rf", response_model=PredictionResponseRf)
def issues(request: PredictionRequestBase):
    data = mapRequestToDf(request)

    y_pred_rf = rf_model.predict_rf(data).tolist()

    return {'yPredRf': y_pred_rf}


@predictions.post("/issue-nn", response_model=PredictionResponseNn)
def issues(request: PredictionRequestBase):
    data = mapRequestToDf(request)

    y_pred_nn = nn_model.predict_nn(data)

    return {'yPredNn': y_pred_nn}


@predictions.post("/similar-issues", response_model=SimilarIssuesResponse)
def similar_issues(request: PredictionRequestBase):
    rows = data_service.get_similar_issues(request)

    if rows is not None:
        return {'rows': rows.to_dict()}
    else:
        return {'rows': {}}
