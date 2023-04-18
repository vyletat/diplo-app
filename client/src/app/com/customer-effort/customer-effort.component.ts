import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ParameterConfig} from "../../utils/ParameterConfig";
import {BackendService} from "../../ser/backend/backend.service";
import {ICustomerRequest, ICustomerIssuesResponse} from "../../inter/IApi";
import {IIssueTableData} from "../../inter/ICustomerEffort";
import {MatTableDataSource} from "@angular/material/table";
import {take} from "rxjs";


@Component({
  selector: 'app-customer-effort',
  templateUrl: './customer-effort.component.html',
  styleUrls: ['./customer-effort.component.css']
})
export class CustomerEffortComponent implements OnInit {

  /* Properties data */
  parameterProperties = ParameterConfig.parameterProperties;
  parameterCategories = ParameterConfig.parameterCategories;
  parameterValues = ParameterConfig.parameterValues;

  // @ts-ignore
  customersResponse: [{ key: string, counts: number }] = [];
  customerIssueResponse!: ICustomerIssuesResponse;

  // @ts-ignore
  customerIssueCatData!: [{
    name: string,
    value: string[],
  }] = [];
  customerIssueTableData: IIssueTableData[] = [];
  displayedColumns: string[] = ['status', 'priority', 'currentSupportTeam', 'currentlyAffectedNumbersOfMachines', 'frequencyOfOccurence', 'impact', 'projectPhase', 'region', 'reproducibility', 'urgency', 'isBusinessPartner'];
  dataSource = new MatTableDataSource<IIssueTableData>();

  // Form
  public customerForm = this.fb.group({
    customer: this.fb.control(0, {
      validators: [
        Validators.required
      ]
    }),
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private backSer: BackendService
  ) { }

  ngOnInit(): void {
    /* Získání zákazníků */
    this.backSer.getCustomers().subscribe((data: any) => {
      for (let customer of Object.getOwnPropertyNames(data.customers)) {
        this.customersResponse.push({key: customer, counts: data.customers[customer]});
      }
    });
  }

  /**
   * Calculate the difference between two numbers
   * @param a number
   * @param b number
   */
  public difference(a: number, b: number) {
    return Math.abs(a - b);
  }

  /**
   * Vytvoří data pro tabulku
   */
  private transformCustomerDataToTable(): void {
    // @ts-ignore
    let columnTableData: [{
      name: string,
      value: number[],
    }] = [];

    for (let column of Object.getOwnPropertyNames(this.customerIssueResponse.rows)) {
      let row = {
        name: column,
        value: [],
      };
      // @ts-ignore
      for (let value of Object.getOwnPropertyNames(this.customerIssueResponse.rows[column])) {
        // @ts-ignore
        row.value.push(this.customerIssueResponse.rows[column][value]);
      }
      columnTableData.push(row);
    }

    for (let column of columnTableData) {
      switch (column.name) {
        case 'Current_Support_Team':
         this.mapNumbersToCategories(column, 'currentSupportTeam', 'Current Support Team');
          break;

        case 'Currently_Affected_Numbers_of_Machines':
          this.mapNumbersToCategories(column, 'currentlyAffectedNumbersOfMachines', 'Currently Affected Numbers of Machines');
          break;

        case 'Frequency_of_occurence':
          this.mapNumbersToCategories(column, 'frequencyOfOccurence', 'Frequency of occurence');
          break;

        case 'Impact':
          this.mapNumbersToCategories(column, 'impact', 'Impact');
          break;

        case 'Is_business_partner':
          this.mapNumbersToCategories(column, 'isBusinessPartner', 'Is business partner');
          break;

        case 'Priority':
          this.mapNumbersToCategories(column, 'priority', 'Priority');
          break;

        case 'Status':
          this.mapNumbersToCategories(column, 'status', 'Status');
          break;

        case 'Urgency':
          this.mapNumbersToCategories(column, 'urgency', 'Urgency');
          break;

        case 'Project_Phase':
          this.mapNumbersToCategories(column, 'projectPhase', 'Project Phase');
          break;

        case 'Region':
          this.mapNumbersToCategories(column, 'region', 'Region');
          break;

        case 'Reproducibility':
          this.mapNumbersToCategories(column, 'reproducibility', 'Reproducibility');
          break;

        default:
          break;
      }
    }
    this.makeTableData();
  }

  /**
   * Převede čísla na kategorie
   *
   * @param column  - sloupec s čísly
   * @param key     - klíč pro přístup k hodnotám
   * @param name    - název sloupce
   */
  private mapNumbersToCategories(column: any, key: string, name: string): void {
    let catArray: string[] = [];
    type ObjectKey = keyof typeof this.parameterValues;
    const myVar = key as ObjectKey;

    for (let i = 0; i < column.value.length; i++) {
      let index = this.parameterValues[myVar].indexOf(column.value[i]);
      catArray.push(this.parameterCategories[myVar][index]);
    }

    this.customerIssueCatData.push({
      name: name,
      value: catArray,
    });
  }

  /**
   * Vytvoří formát pro tabulku
   */
  private makeTableData(): void {
    for (let i = 0; i < this.customerIssueCatData[0].value.length; i++) {
      let row = {
        // @ts-ignore
        status: this.customerIssueCatData[0].value[i],
        // @ts-ignore
        priority: this.customerIssueCatData[1].value[i],
        // @ts-ignore
        currentSupportTeam: this.customerIssueCatData[2].value[i],
        // @ts-ignore
        currentlyAffectedNumbersOfMachines: this.customerIssueCatData[3].value[i],
        // @ts-ignore
        frequencyOfOccurence: this.customerIssueCatData[4].value[i],
        // @ts-ignore
        impact: this.customerIssueCatData[5].value[i],
        // @ts-ignore
        projectPhase: this.customerIssueCatData[6].value[i],
        // @ts-ignore
        region: this.customerIssueCatData[7].value[i],
        // @ts-ignore
        reproducibility: this.customerIssueCatData[8].value[i],
        // @ts-ignore
        urgency: this.customerIssueCatData[9].value[i],
        // @ts-ignore
        isBusinessPartner: this.customerIssueCatData[10].value[i],
      };
      this.customerIssueTableData.push(row);
    }
  }

  /**
   * Vyprázdní data pro tabulku
   */
  private emptyTableData(): void {
    this.customerIssueTableData = [];
    // @ts-ignore
    this.customerIssueCatData = [];
  }

  /**
   * Zobrazí údaje o zákazníkovi
   */
  public showEffort() {
    if (this.customerForm.valid) {
      let numberValue: number = +this.customerForm.value.customer;
      let request: ICustomerRequest = {
        customer: numberValue,
      };
      this.backSer.postCustomer(request).pipe(take(1)).subscribe((data: any) => {
        this.emptyTableData();
        this.customerIssueResponse = data;
        this.transformCustomerDataToTable();
        this.dataSource.data = this.customerIssueTableData;
      });
    }
  }

}
