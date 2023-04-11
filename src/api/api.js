const APP_ID = "91608f1b";
const APP_KEY = "1d66a8219906dad85abb975c72c0b46d";
let PAGE = 1;
export const MAX_FOOD_CARD = 20;

export const fetchRecipes = async (options, pageAction = 'ZERO') => {
    const url = new URL("https://api.edamam.com/search");
    options['app_id'] = APP_ID;
    options['app_key'] = APP_KEY;
    switch (pageAction) {
        case 'ZERO':
            PAGE = 1;
            break;
        case 'INCREMENT':
            PAGE++;
            break;
        case 'DECREMENT':
            PAGE--;
            break;
        default:
            PAGE = 1;
            break;
    }
    console.log(PAGE)
    options['from'] = (PAGE - 1) * MAX_FOOD_CARD;
    options['to'] = MAX_FOOD_CARD * PAGE;
    Object.keys(options).forEach((key) =>
        url.searchParams.append(key, options[key])
    );

    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    console.log(data);

    return data;
};
