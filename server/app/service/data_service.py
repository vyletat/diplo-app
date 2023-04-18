import pandas as pd
import os

from app.schemas import PredictionRequestBase

# Načtení dat
dir_path = os.path.dirname(os.path.realpath(__file__))
data = pd.read_excel(dir_path + '/../../data/input-data.xlsx')

# Odstranění odlehlých hodnot
data = data.dropna()

# Pouze nominální proměnné
selected_cols = ['Current_Support_Team', 'Currently_Affected_Numbers_of_Machines', 'Impact', 'Status', 'Priority',
                 'Project_Phase', 'Region', 'Reproducibility', 'Urgency', 'Is_business_partner',
                 'Frequency_of_occurence']

# Připravíme vstupní a výstupní data
inputs = data[selected_cols]
outputs = data['Spent_time_cat']


def get_io():
    return inputs, outputs


def get_data():
    return data


def get_selected_cols():
    return selected_cols


def get_customer_issues(customer: int):
    return data[data['Customer'] == customer]


def get_all_customers():
    return data['Customer'], data['Customer'].value_counts()


def get_similar_issues(params: PredictionRequestBase):
    filtered_data = data.loc[
        (data['Current_Support_Team'] == params.Current_Support_Team) &
        (data['Currently_Affected_Numbers_of_Machines'] == params.Currently_Affected_Numbers_of_Machines) &
        (data['Impact'] == params.Impact) &
        (data['Status'] == params.Status) &
        (data['Priority'] == params.Priority) &
        (data['Project_Phase'] == params.Project_Phase) &
        (data['Region'] == params.Region) &
        (data['Reproducibility'] == params.Reproducibility) &
        (data['Urgency'] == params.Urgency) &
        (data['Is_business_partner'] == params.Is_business_partner) &
        (data['Frequency_of_occurence'] == params.Frequency_of_occurence)]

    if filtered_data.empty:
        return None
    else:
        return filtered_data[['Spent_time', 'Customer', 'Product']]
