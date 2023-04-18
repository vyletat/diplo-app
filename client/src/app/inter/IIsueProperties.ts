export interface ICategoryMap {
  name: string;
  value: number
}

export interface IParameterProperties {
  name: string;
  categories: ICategoryMap[];
}

export interface IIssueProperties {
  status: IParameterProperties;
  priority: IParameterProperties;
  currentSupportTeam: IParameterProperties;
  currentlyAffectedNumbersOfMachines: IParameterProperties;
  frequencyOfOccurence: IParameterProperties;
  impact: IParameterProperties;
  projectPhase: IParameterProperties;
  region: IParameterProperties;
  reproducibility: IParameterProperties;
  urgency: IParameterProperties;
  isBusinessPartner: IParameterProperties;
}
