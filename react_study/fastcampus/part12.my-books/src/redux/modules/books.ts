import { createActions, handleActions } from 'redux-actions';

interface Book {}

interface BooksState {
    books: Book[] | null;
    loading: boolean;
    error: Error | null;
}

const initialState: BooksState = {
    books: null,
    loading: false,
    error: null,
};

const prefix = 'my-books/books';

export const { pending, success, fail } = createActions('PENDING', 'SUCCESS', 'FAIL', { prefix });

const reducer = handleActions<BooksState, Book[]>(
    {
        PENDING: (state) => ({ ...state, loading: true, error: null }),
        SUCCESS: (state, action) => ({ books: action.payload, loading: false, error: null }),
        FAIL: (state, action: any) => ({ ...state, loading: false, error: action.payload }),
    },
    initialState,
    { prefix }
);

export default reducer;

// saga

export function* booksSaga() {}

interface Lion {
    age: number;
    sounds: string;
}

interface Cat {
    age: number;
    sounds: string;
    favorite: 'mouse' | 'tuna' | 'chur';
}

const simba: Lion = {
    age: 10,
    sounds: 'roar',
};

const jerry: Cat = {
    age: 6,
    sounds: 'meow',
    favorite: 'chur',
};

function introduceLion({ age, sounds }: Lion): string {
    return `This lion is ${age} years old and sounds like ${sounds}`;
}

console.log(introduceLion(simba));
// "This lion is 10 years old and sounds like roar"

console.log(introduceLion(jerry));
// "This lion is 6 years old and sounds like meow"
function logMessage(msg: string | null) {
    if (msg) {
        return msg;
    } else {
        return msg;
    }
}


type Player = {
    name: string;
    team: string;
    salary: number;
  };
  declare const rosters: { [team: string]: Player[] };
  
  // flat 사용 x
  let allPlayers1: Player[] = [];
  for (const players of Object.values(rosters)) {
    allPlayers1 = allPlayers1.concat(players);
  }
  
  // flat 사용 o
  const allPlayers2 = Object.values(rosters).flat();