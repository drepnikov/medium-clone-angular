import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerAction } from 'src/app/auth/store/actions/register.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'ma-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  onSubmit(): void {
    this.store.dispatch(registerAction(this.form.value));
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: '',
      email: '',
    });
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }
}
