import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  theForm = new FormGroup({});
  options: any;
  hideFields: boolean = false;
  theModel = {
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
    field8: "",
    field9: "",
    field10: "",
  };
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "group-wrapper",
      fieldGroup: [
        {
          className: "col-span-1 row-span-4",
          type: "input",
          key: "field1",
          templateOptions: {
            label: "Field 1",
          },
        },
        // Field 2 is hidden, and the grid layout allows field 3
        // to flow into its space, until it is unhidden
        // This field is also using the row-span-9 class, which
        // will cause it to take up 9 rows, re-flowing the other
        // fields in the group
        {
          className: "col-span-2 row-span-9",
          type: "input",
          key: "field2",
          hideExpression: () => this.hideFields,
          templateOptions: {
            label: "Field 2",
          },
        },
        {
          className: "col-span-1 row-span-2",
          type: "input",
          key: "field3",
          templateOptions: {
            label: "Field 3",
          },
        },
        {
          // not specifiying a class here will cause this field
          // to take up one column and one row, and flow into
          // the next available space
          className: "",
          type: "input",
          key: "field4",
          templateOptions: {
            label: "Field 4",
          },
        },
        {
          className: "row-start-7 col-span-3",
          type: "input",
          key: "field5",
          templateOptions: {
            label: "Field 5",
          },
        },
      ],
    },
    // The second group is in its own group-wrapper
    // so that those fields can flow independently
    // of the first group and not look out of place
    {
      fieldGroupClassName: "group-wrapper",
      fieldGroup: [
        {
          // this field is using the row-start-2 class, moving it
          // down to the second row
          // This field is also hidden, and the grid layout allows
          // field 7 to flow into its space, until it is unhidden
          className: "col-span-1 row-span-3 row-start-2",
          type: "input",
          key: "field6",
          hideExpression: () => this.hideFields,
          templateOptions: {
            label: "Field 6",
          },
        },
        {
          className: "row-start-2",
          type: "input",
          key: "field7",
          templateOptions: {
            label: "Field 7",
          },
        },
        {
          className: "col-span-1",
          type: "input",
          key: "field8",
          templateOptions: {
            label: "Field 8",
          },
        },
        {
          className: "",
          type: "input",
          key: "field9",
          templateOptions: {
            label: "Field 9",
          },
        },
        {
          className: "col-span-3",
          type: "input",
          key: "field10",
          templateOptions: {
            label: "Field 10",
          },
        },
      ],
    },
  ];

  onSubmit(model: unknown) {
    console.table(model);
    this.reset();
  }

  reset() {
    this.theForm.reset();
    this.theModel = {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
      field9: "",
      field10: "",
    };
  }
}
