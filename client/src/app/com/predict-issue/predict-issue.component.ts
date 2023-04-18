import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ParameterConfig} from "../../utils/ParameterConfig";
import {BackendService} from "../../ser/backend/backend.service";
import {IPredictAllIssuesResponse, IPredictRequest, ISimilarIssuesResponse} from "../../inter/IApi";
import {ISimilarIssueTableData} from "../../inter/IPredictIssue";
import {MatTableDataSource} from "@angular/material/table";
import {IIssueTableData} from "../../inter/ICustomerEffort";

@Component({
  selector: 'app-predict-issue',
  templateUrl: './predict-issue.component.html',
  styleUrls: ['./predict-issue.component.css']
})
export class PredictIssueComponent implements OnInit {

  /* Properties data */
  parameterProperties = ParameterConfig.parameterProperties;

  predictAllIssuesResponse!: IPredictAllIssuesResponse;
  similarIssuesResponse!: ISimilarIssuesResponse;
  noSimilarIssues = false;

  issueForm = this.fb.group({
    status: this.fb.control(null, {
      validators: [
        Validators.required
      ]
    }),
    priority: this.fb.control(null, {
        validators: [
          Validators.required
        ]
      }
    ),
    currentSupportTeam: this.fb.control(null, {
        validators: [
          Validators.required
        ]
      }
    ),
    currentlyAffectedNumbersOfMachines: this.fb.control(null, {
        validators: [
          Validators.required
        ]
      }
    ),
    frequencyOfOccurence: this.fb.control(null, {
        validators: [
          Validators.required
        ]
      }
    ),
    impact: this.fb.control(null, {
        validators: [
          Validators.required
        ]
      }
    ),
    projectPhase: this.fb.control(null, {
        validators: [
          Validators.required
        ]
      }
    ),
    region: this.fb.control(null, {
        validators: [
          Validators.required
        ]
      }
    ),
    reproducibility: this.fb.control(null, {
        validators: [
          Validators.required
        ]
      }
    ),
    urgency: this.fb.control(null, {
        validators: [
          Validators.required
        ]
      }
    ),
    isBusinessPartner: this.fb.control(null, {
        validators: [
          Validators.required
        ]
      }
    )
  });

  /* Table */
  similarIssuesTableData: ISimilarIssueTableData[] = [];
  displayedColumns: string[] = ['spentTime', 'customer', 'product'];
  dataSource = new MatTableDataSource<ISimilarIssueTableData>();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private backSer: BackendService
  ) {
  }

  ngOnInit():
    void {
  }

  /**+
   * Transformuje data z API na data pro tabulku
   * @private
   */
  private transformIssueDataToTable(): void {
    // @ts-ignore
    let columnTableData: [{
      name: string,
      value: number[],
    }] = [];

    for (let column of Object.getOwnPropertyNames(this.similarIssuesResponse.rows)) {
      let values: number[] = [];
      // @ts-ignore
      for (let value of Object.getOwnPropertyNames(this.similarIssuesResponse.rows[column])) {
        // @ts-ignore
        values.push(this.similarIssuesResponse.rows[column][value]);
      }
      columnTableData.push({
        name: column,
        value: values
      });
    }

    for (let i = 0; i < columnTableData[0].value.length; i++) {
      let row: ISimilarIssueTableData = {
        // @ts-ignore
        spentTime: columnTableData[0].value[i],
        // @ts-ignore
        customer: columnTableData[1].value[i],
        // @ts-ignore
        product: columnTableData[2].value[i],
      };
      this.similarIssuesTableData.push(row);
    }
  }

  /**
   * Odešle požadavek na server a vrátí výsledek
   */
  classifyIssue() {
    if (this.issueForm.valid) {
      let request: IPredictRequest = {
        // @ts-ignore
        'Current_Support_Team': this.issueForm.get('currentSupportTeam').value,
        // @ts-ignore
        'Currently_Affected_Numbers_of_Machines': this.issueForm.get('currentlyAffectedNumbersOfMachines').value,
        // @ts-ignore
        'Impact': this.issueForm.get('impact').value,
        // @ts-ignore
        'Status': this.issueForm.get('status').value,
        // @ts-ignore
        'Priority': this.issueForm.get('priority').value,
        // @ts-ignore
        'Project_Phase': this.issueForm.get('projectPhase').value,
        // @ts-ignore
        'Region': this.issueForm.get('region').value,
        // @ts-ignore
        'Reproducibility': this.issueForm.get('reproducibility').value,
        // @ts-ignore
        'Urgency': this.issueForm.get('urgency').value,
        // @ts-ignore
        'Is_business_partner': this.issueForm.get('isBusinessPartner').value,
        // @ts-ignore
        'Frequency_of_occurence': this.issueForm.get('frequencyOfOccurence').value
      }

      /* Issue predict */
      this.backSer.postPredictAllIssues(request).subscribe(data => {
        this.predictAllIssuesResponse = data;
      });

      /* Similar issues */
      this.backSer.postSimilarIssues(request).subscribe(data => {
        const isEmpty = Object.keys(data.rows).length === 0;
        if (!isEmpty) {
          this.noSimilarIssues = false;
          this.similarIssuesTableData = [];
          this.similarIssuesResponse = data;
          this.transformIssueDataToTable();
          this.dataSource.data = this.similarIssuesTableData;
        } else {
          this.noSimilarIssues = true;
        }
      });
    }
  }
}
