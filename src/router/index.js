import { createRouter, createWebHistory } from "vue-router"
import DefaultLayoutComp from '../components/DefaultLayoutComp.vue' //debe ser importado primero
import GuestLayoutComp from '../components/GuestLayoutComp.vue'
import HomeView from '../views/HomeView.vue'
import MealsLetterView from '../views/MealsLetterView.vue'
import MealsNameView from '../views/MealsNameView.vue'
import MealsIngredientView from '../views/MealsIngredientView.vue'
import MealDetailsView from '../views/MealDetailsView.vue'
import IngredientsView from '../views/IngredientsView.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayoutComp,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsLetterView
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsNameView
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: IngredientsView
            },
            {
                path: '/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsIngredientView
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetailsView
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayoutComp
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;