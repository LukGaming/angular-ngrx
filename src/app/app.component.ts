import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { decrement, increment, reset } from './store/counter.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ngrx'
  constructor (private store: Store<{ count: number }>) {}
  increment () {
    this.store.dispatch(increment())
  }
  decrement () {
    this.store.dispatch(decrement())
  }
  reset () {
    this.store.dispatch(reset())
  }
}
