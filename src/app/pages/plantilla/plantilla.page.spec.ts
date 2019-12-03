import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantillaPage } from './plantilla.page';

describe('PlantillaPage', () => {
  let component: PlantillaPage;
  let fixture: ComponentFixture<PlantillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
