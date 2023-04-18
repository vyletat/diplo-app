from app.pred_models.lda_model import train_lda
from app.pred_models.qda_model import train_qda
from app.pred_models.nn_model import train_nn
from app.pred_models.rf_model import train_rf


def init_models():
    train_lda()
    train_qda()
    train_rf()
    train_nn()