import { from, of, fromEvent } from 'rxjs';

const postsApi = fetch('https://jsonplaceholder.typicode.com/posts');
const commentsApi = fetch('https://jsonplaceholder.typicode.com/comments');

//creating observables with the API urls declared above

const apiArray$ = from([postsApi,commentsApi]);

const apisObserver = {
  next: (apiResult) => {
    apiResult
    .then(response => response.json())
    .then(data => console.info('the data here ', data))
  },
  error: null,
  complete: () => {console.log('Request completed!')}
}

apiArray$.subscribe(apisObserver);
