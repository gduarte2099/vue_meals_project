import axiosClient from '../axiosService'

export function searchMeals({ commit }, message) {
    //'search.php?s=' + message
    axiosClient.get(`search.php?s=${message}`)
        .then(({ data }) => {
            //debugger
            commit('setSearchedMeals', data.meals)
        })
}

export function searchMealsByLetter({ commit }, letter) {
    //'search.php?s=' + message
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit('setMealsByLetter', data.meals)
        })
}

export function searchMealsByIngredient({ commit }, ingredient) {
    //'search.php?s=' + message
    axiosClient.get(`filter.php?i=${ingredient}`)
        .then(({ data }) => {
            commit('setMealsByIngredient', data.meals)
        })
}