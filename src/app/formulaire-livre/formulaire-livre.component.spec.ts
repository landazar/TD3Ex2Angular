import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireLivreComponent } from './formulaire-livre.component';

describe('FormulaireLivreComponent', () => {
  let component: FormulaireLivreComponent;
  let fixture: ComponentFixture<FormulaireLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireLivreComponent]
    });
    fixture = TestBed.createComponent(FormulaireLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
