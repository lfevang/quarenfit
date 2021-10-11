import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorListarComponent } from './prestador-listar.component';

describe('PrestadorListarComponent', () => {
  let component: PrestadorListarComponent;
  let fixture: ComponentFixture<PrestadorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadorListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
