const APP_ID = "91608f1b";
const APP_KEY = "1d66a8219906dad85abb975c72c0b46d";

export const fetchRecipes = async (options) => {
    const url = new URL("https://api.edamam.com/search");
    options['app_id'] = APP_ID;
    options['app_key'] = APP_KEY;
    options['from'] = 0;
    options['to'] = 16;
    Object.keys(options).forEach((key) =>
        url.searchParams.append(key, options[key])
    );
    console.log(options);

    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    console.log(data);

    return data;
};

// export const fetchRecipes = async (meal) => {
//     const url = new URL("https://api.edamam.com/search");
//     const options = {
//         q: meal,
//         from: 0,
//         to: 40,
//         app_id: APP_ID,
//         app_key: APP_KEY,
//     }
//     Object.keys(options).forEach((key) =>
//         url.searchParams.append(key, options[key])
//     );
//     console.log(options);

//     const response = await fetch(url);
//     // console.log(response)
//     const data = await response.json();
//     console.log(data);

//     return data.hits;
// };

