import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { MenuItem } from '../types'

export type CartItem = MenuItem & { quantidade: number }

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirming' | 'done'

export type DeliveryData = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string
}

export type PaymentData = {
  cardName: string
  cardNumber: string
  cvv: string
  expMonth: string
  expYear: string
}

export type OrderResponse = {
  orderId: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
  step: CheckoutStep
  delivery: DeliveryData
  payment: PaymentData
  order: OrderResponse | null
  error: string | null
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart',
  delivery: { receiver: '', address: '', city: '', zipCode: '', number: '', complement: '' },
  payment: { cardName: '', cardNumber: '', cvv: '', expMonth: '', expYear: '' },
  order: null,
  error: null
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
      state.step = 'cart'
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    clear(state) {
      state.items = []
      state.step = 'cart'
      state.order = null
      state.error = null
    },
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
      if (state.step === 'done') {
        state.items = []
        state.step = 'cart'
        state.order = null
        state.delivery = initialState.delivery
        state.payment = initialState.payment
      }
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen
    },
    goToDelivery(state) {
      state.step = 'delivery'
    },
    setDelivery(state, action: PayloadAction<DeliveryData>) {
      state.delivery = action.payload
      state.step = 'payment'
    },
    setPayment(state, action: PayloadAction<PaymentData>) {
      state.payment = action.payload
      state.step = 'confirming'
    },
    setOrder(state, action: PayloadAction<OrderResponse>) {
      state.order = action.payload
      state.step = 'done'
      state.error = null
    },
    setCheckoutError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.step = 'payment'
    },
    backToCart(state) {
      state.step = 'cart'
    },
    backToDelivery(state) {
      state.step = 'delivery'
    },
    finishOrder(state) {
      state.items = []
      state.step = 'cart'
      state.isOpen = false
      state.order = null
      state.delivery = initialState.delivery
      state.payment = initialState.payment
      state.error = null
    }
  }
})

export const {
  addItem, removeItem, clear, openCart, closeCart, toggleCart,
  goToDelivery, setDelivery, setPayment, setOrder, setCheckoutError,
  backToCart, backToDelivery, finishOrder
} = cartSlice.actions

export default cartSlice.reducer
