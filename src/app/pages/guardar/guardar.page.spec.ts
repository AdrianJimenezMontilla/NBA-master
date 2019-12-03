import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuardarPage } from './guardar.page';

describe('GuardarPage', () => {
  let component: GuardarPage;
  let fixture: ComponentFixture<GuardarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuardarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
