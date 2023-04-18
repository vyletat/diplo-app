from keras.models import Sequential
from keras.layers import Dense
from keras.utils import to_categorical
from sklearn.model_selection import train_test_split

from app.service.data_service import get_io

# Definování modelu neuronové sítě
nn_model = Sequential()
nn_model.add(Dense(256, input_dim=11, activation='relu'))
nn_model.add(Dense(128, activation='relu'))
nn_model.add(Dense(64, activation='relu'))
nn_model.add(Dense(3, activation='softmax'))  # 3 kategorie a softmax aktivace

# Kompilace modelu
nn_model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])


def train_nn():
    # Ziskej data
    inputs, outputs = get_io()

    X_train, X_test, y_train, y_test = train_test_split(inputs, outputs, test_size=0.3, random_state=7103)

    y_train = to_categorical(y_train)
    y_train = y_train[:, 1:]

    # Naučení modelu na trénovacích datech
    nn_model.fit(X_train, y_train, epochs=50, batch_size=32, verbose=0)


def predict_nn(data_to_predict):
    # Vyhodnocení modelu na testovacích datech
    y_pred = nn_model.predict(data_to_predict)
    # převod kategorických proměnných zpět na původní hodnoty
    y_pred = [int(pred.argmax() + 1) for pred in y_pred]
    return y_pred
