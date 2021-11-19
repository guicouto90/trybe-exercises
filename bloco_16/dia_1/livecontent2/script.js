// ============CONSTANTES=================
const CHANGE_TO_DARK = 'CHANGE_TO_DARK';
const CHANGE_TO_LIGHT = 'CHANGE_TO_LIGHT';


//============= ACTIONS ================ 
const changeToDark = () => {
  return ({ type: CHANGE_TO_DARK} );
}

const changeToLight = () => {
    return ({ type: CHANGE_TO_LIGHT} );
}

// ============== REDUCER ===============
const INITIAL_STATE = {
  theme: 'light',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_TO_DARK:
      return { theme: 'dark' };

    case CHANGE_TO_LIGHT:
      return { theme: 'light' };
    
    default:
      return state;
  }
}

//============= STORE ================

const store = Redux.createStore(reducer);

store.subscribe( () => { //executa toda vez que ha uma alteraçao na store.
  const { theme } = store.getState();
  document.getElementById('light-bulb').src=`img/${theme === 'light' ? 'light' : 'dark'}.png`
  document.getElementById('wrapper').className = theme;
})

//============== DISPATCH ==========================
document.getElementById('light-switch').addEventListener('click', () => {
  const { theme } = store.getState();
  if(theme === 'light') {
    store.dispatch(changeToDark());
  } else {
    store.dispatch(changeToLight());
  }
})