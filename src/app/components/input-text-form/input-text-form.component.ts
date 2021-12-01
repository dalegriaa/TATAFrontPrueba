import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTextService } from 'src/app/services/input-text.service';

@Component({
  selector: 'app-input-text-form',
  templateUrl: './input-text-form.component.html',
  styleUrls: ['./input-text-form.component.scss'],
})
export class InputTextFormComponent implements OnInit {
  form: FormGroup;
  public dataObject: any;
  constructor(private inputTextService: InputTextService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      inputText: new FormControl('', Validators.required),
    });
  }
  onSubmit(): void {
    this.inputTextService
      .getNumberTimesWordRepeated(this.form.controls.inputText.value)
      .subscribe((data: any) => {
        this.dataObject = JSON.parse(data.Data);
      });
  }
}
