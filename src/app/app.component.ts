import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!  honest';

  courses$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;

  firstCourse: any;

  constructor(private af: AngularFire) {

    this.courses$ = af.database.list('courses');
    this.courses$.subscribe(console.log);

    this.courses$.subscribe(
      courses => this.firstCourse = courses[0]
      );


    this.lesson$ = af.database.object('lessons/-KTdU_JVp2Q79LIoFy6A');
    this.lesson$.subscribe(console.log);
  }

  listPush() {
    this.courses$.push({ description: 'Test New Course' })
      .then(
      a => console.log('List Push Completed:' + a),
      console.error
      );
  }

  listRemove() {
    this.courses$.remove(this.firstCourse);
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, {description: this.firstCourse.description + " Modified"});
  }

  objUpdate() {
    this.lesson$.update({description: "Modified"});
  }

  objSet() {
    this.lesson$.set({description: "Modified"});
  }

  objRemove() {
    this.lesson$.remove();
  }
}
