import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";
import { User } from "./../../models/user";
import {
    Component,
    ElementRef,
    HostListener,
    Injector,
    OnInit,
    Renderer2,
    ViewChild,
} from "@angular/core";
import { SettingsBase } from "src/app/models/base/settings-base";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent extends SettingsBase implements OnInit {
    constructor(
        private userService: UserService,
        public auth: AuthService,
        private router: Router,
        private ele: ElementRef,
        injector: Injector
    ) {
        super(injector);
    }
    user: User;
    openMenu = false;

    userOpenMenu = false;

    // set userActiveTabHome true if route is /
    userActiveTabHome() {
        return this.router.url === "/";
    }

    userActiveTabSearch() {
        return this.router.url === "/search";
    }

    userActiveTabLibrary() {
        return this.router.url === "/library";
    }

    userActiveTabPodcast() {
        return this.router.url === "/podcasts";
    }

    userActiveTabKaraoke() {
        return this.router.url === "/karaoke";
    }

    ngOnInit() {
        this.userService.getUser().subscribe((item) => {
            this.user = item;
        });

        super.init();
    }

    sair() {
        this.userOpenMenu = false;
        this.auth.logout();
        this.router.navigate(["login"]).then();
    }

    @HostListener("document:click", ["$event"])
    clicked_outside(event) {
        if (!this.ele.nativeElement.contains(event.target)) {
            this.userOpenMenu = false;
        }
    }

    closeMenu() {
        this.userOpenMenu = false;
    }
}
