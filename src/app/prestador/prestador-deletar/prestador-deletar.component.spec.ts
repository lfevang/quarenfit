import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorDeletarComponent } from './prestador-deletar.component';

describe('PrestadorDeletarComponent', () => {
  let component: PrestadorDeletarComponent;
  let fixture: ComponentFixture<PrestadorDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadorDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
