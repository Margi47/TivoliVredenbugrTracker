import { Component, Input} from "@angular/core";

@Component({
    selector: "events-list",
    templateUrl: "./newEventsPage/events-list.component.html"
})
export class EventsListComponent{
    @Input() events: any[];
}