import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorAlterarComponent } from './prestador-alterar.component';

describe('PrestadorAlterarComponent', () => {
  let component: PrestadorAlterarComponent;
  let fixture: ComponentFixture<PrestadorAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadorAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
