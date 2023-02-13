const searchHistoryKey = 'searchHistory';

export function pushToSearchHistory(searchQuery){
    let history = JSON.parse(localStorage.getItem(searchHistoryKey));

    if(!history) history = [];

    if(history.indexOf(searchQuery) !== -1){
        history.splice(history.indexOf(searchQuery),1);
    }
    history.unshift(searchQuery);

    if(history.length > 25) history.pop();

    localStorage.setItem(searchHistoryKey, JSON.stringify(history));
}