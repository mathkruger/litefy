export class Settings {
    constructor(id: number, description: string, active: boolean) {
        this.id = id;
        this.description = description;
        this.active = active;
    }

    id: number;
    description: string;
    active: boolean;
}
