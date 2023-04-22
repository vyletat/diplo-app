from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

from app.service.data_service import get_io

# Definice modelu
rf_model = RandomForestClassifier(n_estimators=151, random_state=597)


def train_rf():
    # Ziskej data
    inputs, outputs = get_io()

    # Rozdělení dat na trénovací a testovací sady
    X_train, X_test, y_train, y_test = train_test_split(inputs, outputs, test_size=0.3, random_state=7103)

    # Trénování modelu
    rf_model.fit(X_train, y_train)


def predict_rf(data_to_predict):
    # Předpověď na testovacích datech
    return rf_model.predict(data_to_predict)
