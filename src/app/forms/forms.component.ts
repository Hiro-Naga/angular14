import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface formsParam {
  specified: FormControl<number>;
}
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
    number: new FormControl(123),
    required: new FormControl('required', { nonNullable: true }),
  });

  sampleForm2 = new FormGroup<formsParam>({
    specified: new FormControl(1, { nonNullable: true }),
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  sampleForm3 = this.fb.nonNullable.group({
    name: '',
    number: 0,
  });
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.sampleForm.reset();
  }

}
