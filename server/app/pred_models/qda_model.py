from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis
from sklearn.model_selection import train_test_split
from app.service.data_service import get_io

# Inicializace QDA modelu
qda_model = QuadraticDiscriminantAnalysis()
test_size = 0.3
random_state = 3639


def train_qda():
    # Ziskej data
    inputs, outputs = get_io()

    # Rozdělení datasetu na trénovací a testovací část s aktuální hodnotou random_state
    X_train, X_test, y_train, y_test = train_test_split(inputs, outputs, test_size=test_size, random_state=random_state)

    # Trénování QDA modelu
    qda_model.fit(X_train, y_train)


def predict_qda(data_to_predict):
    # Predikce cílového atributu
    return qda_model.predict(data_to_predict)
