from fastapi import APIRouter
from ..pred_models import lda_model, rf_model, nn_model, qda_model
from ..schemas import EffortRequestBase, CustomersAllResponseBase, CustomerResponseBase
from ..service import data_service
from ..service.data_service import get_selected_cols

customers = APIRouter(prefix="/effort")


@customers.get("/all-customers", response_model=CustomersAllResponseBase)
def all_customers():
    customers_names, counts = data_service.get_all_customers()
    return {
        'customers': counts.to_dict()
    }


@customers.post("/customer", response_model=CustomerResponseBase)
def efforts(request: EffortRequestBase):

    rows = data_service.get_customer_issues(request.customer)

    real_spent_time = rows['Spent_time'].sum()

    selected_colums = get_selected_cols()
    data_to_predict = rows[selected_colums]

    y_pred_lda_mean = lda_model.predict_lda(data_to_predict).sum().tolist()
    y_pred_qda_mean = qda_model.predict_qda(data_to_predict).sum().tolist()
    y_pred_rf_mean = rf_model.predict_rf(data_to_predict).sum().tolist()
    y_pred_nn_mean = sum(nn_model.predict_nn(data_to_predict))
    y_pred_nn_mean = float(y_pred_nn_mean)

    return {
        'rows': rows.to_dict(),
        'realSpentTime': real_spent_time,
        'yPredLdaMean': predicted_sum(y_pred_lda_mean),
        'yPredQdaMean': predicted_sum(y_pred_qda_mean),
        'yPredRfMean': predicted_sum(y_pred_rf_mean),
        'yPredNnMean': predicted_sum(y_pred_nn_mean),
    }


def predicted_sum(sum_prediction):
    return (sum_prediction * 8) / 2

