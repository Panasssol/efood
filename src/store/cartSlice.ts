import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { MenuItem } from '../types'

export type CartItem = MenuItem & { quantidade: number }

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<MenuItem>) {
      const existing = state.items.find((i) => i.id === action.payload.id)
      if (existing) {
        existing.quantidade += 1
      } else {
        state.items.push({ ...action.payload, quantidade: 1 })
      }
      state.isOpen = true
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    clear(state) {
      state.items = []
    },
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen
    }
  }
})

export const { addItem, removeItem, clear, openCart, closeCart, toggleCart } =
  cartSlice.actions

export default cartSlice.reducer
