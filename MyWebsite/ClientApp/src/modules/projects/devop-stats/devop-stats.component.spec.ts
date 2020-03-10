import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DevOpStatsComponent } from './devop-stats.component';

describe('DevOpStatsComponent', () => {
    let component: DevOpStatsComponent;
    let fixture: ComponentFixture<DevOpStatsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DevOpStatsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DevOpStatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
