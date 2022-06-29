import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

  sampleForm = new FormGroup({
    name: new FormControl('name'),
    number: new FormControl(123, Validators.required),
    required: new FormControl('nonNullable', { nonNullable: true }),
  });

  sampleForm2 = new FormGroup({
    specified: new FormControl<number>(1, { nonNullable: true }),
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  sampleForm3 = this.fb.nonNullable.group({
    name: ['', Validators.required],
    number: 0,
  });
  
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.sampleForm.status !== 'VALID') {
      console.log('error');
    } else {
      console.log(this.sampleForm.getRawValue().number);
      console.log(this.sampleForm.getRawValue().required === null, this.sampleForm.getRawValue().required);
    }
  }
}
