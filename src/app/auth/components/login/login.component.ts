import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { select, Store } from '@ngrx/store';
import {
  isSubmittingSelector,
  validationErrorSelector,
} from 'src/app/auth/store/selectors';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';
import { loginAction } from 'src/app/auth/store/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  onSubmit(): void {
    const request: LoginRequestInterface = { user: this.form.value };

    this.store.dispatch(loginAction({ request }));
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector));
  }
}
