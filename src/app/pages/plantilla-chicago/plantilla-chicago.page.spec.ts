import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantillaChicagoPage } from './plantilla-chicago.page';

describe('PlantillaChicagoPage', () => {
  let component: PlantillaChicagoPage;
  let fixture: ComponentFixture<PlantillaChicagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillaChicagoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillaChicagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
