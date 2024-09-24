import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { YoutubePlayerComponent } from "./youtube-player.component";

describe("YoutubePlayerComponent", () => {
    let component: YoutubePlayerComponent;
    let fixture: ComponentFixture<YoutubePlayerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [YoutubePlayerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(YoutubePlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
