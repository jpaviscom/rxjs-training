import { Observable, of, from } from 'rxjs';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */
//of('Hello', 'RxJS').subscribe(console.log);

//code refresher for the observable

const newObservable$ = new Observable(subscriber => {

  let count = 0;

  const intSample = setInterval(() => {
    subscriber.next(count);
    count += 1;
  }, 1000)

  return () => {
    clearInterval(intSample);
    subscriber.complete();
    console.log(' Se acabo!');
  }
});


const newObserver = {
  next: (val) => console.info('now counting ', val),
  error: null,
  complete: () => {console.warn('this was completed!')}
}

const subs01 = newObservable$.subscribe(newObserver);


setTimeout(() => {
  subs01.unsubscribe();
}, 5000);