import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSecundarioComponent } from './app-secundario.component';

describe('AppSecundarioComponent', () => {
  let component: AppSecundarioComponent;
  let fixture: ComponentFixture<AppSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSecundarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
