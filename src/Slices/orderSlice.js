import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  cart: [],
  menus: [
    {
      category: 'swallow',
      name: 'jollof Rice',
      img: '/chips.png',
      price: 1000,
      id: 1,
      quantity: 1,
      total: 1000,
      available: 200,
      added: false,
    },
    {
      category: 'meat',
      name: 'fried Rice',
      img: '/chips.png',
      price: 1000,
      id: 6,
      quantity: 1,
      total: 1000,
      available: 200,
      added: false,
    },
    {
      category: 'sauce',
      name: 'White Rice',
      img: '/chips.png',
      price: 1000,
      id: 2,
      quantity: 1,
      total: 1000,
      available: 200,
      added: false,
    },
    {
      category: 'rice',
      name: 'White Rice',
      img: '/chips.png',
      price: 1000,
      id: 3,
      quantity: 1,
      total: 1000,
      available: 200,
      added: false,
    },
    {
      category: 'rice',
      name: 'White Rice',
      img: '/chips.png',
      price: 1000,
      id: 4,
      quantity: 1,
      total: 1000,
      available: 200,
      added: false,
    },
    {
      category: 'soup',
      name: 'White Rice',
      img: '/chips.png',
      price: 1000,
      id: 5,
      quantity: 1,
      total: 1000,
      available: 200,
      added: false,
    },
  ],
  category: [
    { id: 1, img: '/chips.png', name: 'rice', isActive: false },
    { id: 2, img: '/chips.png', name: 'meat', isActive: false },
    { id: 3, img: '/chips.png', name: 'swallow', isActive: false },
    { id: 4, img: '/chips.png', name: 'soup' },
    { id: 5, img: '/chips.png', name: 'sauce', isActive: false },
    { id: 6, img: '/chips.png', name: 'dodo & yam', isActive: false },
    { id: 7, img: '/chips.png', name: 'drinks', isActive: false },
    { id: 8, img: '/chips.png', name: 'pastries', isActive: false },
    { id: 9, img: '/chips.png', name: 'cake', isActive: false },
    { id: 10, img: '/chips.png', name: 'bread', isActive: false },
    { id: 11, img: '/chips.png', name: 'ice cream', isActive: false },
    { id: 12, img: '/chips.png', name: 'shawarma', isActive: false },
    { id: 13, img: '/chips.png', name: 'pizza', isActive: 'false' },
  ],
  ticket: {},
  faq: [
    {
      id: 1,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: true,
    },
    {
      id: 2,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: false,
    },
    {
      id: 4,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: false,
    },
    {
      id: 5,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: true,
    },
    {
      id: 6,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: false,
    },
    {
      id: 7,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: false,
    },
    {
      id: 8,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: false,
    },
    {
      id: 11,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: true,
    },
    {
      id: 12,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: false,
    },
    {
      id: 13,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: false,
    },
    {
      id: 14,
      question: 'Frequently Asked Questions',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea adipisci doloribus atque! Cupiditate sapiente est dolores, odio cum iste corporis laboriosam nostrum ratione, harum illo rem, numquam soluta ullam.',
      isOpen: false,
    },
  ],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const item = state.menus.find((menu) => menu.id === payload);
      state.cart.push(item);
      item.added = true;
      toast.success('successfully added');
    },
    remove(state, { payload }) {
      const item = state.cart.find((menu) => menu.id === payload);
      state.cart = state.cart.filter((data) => data !== item);
      const items = state.menus.find((menu) => menu.id === payload);
      items.added = false;
      toast.success('successfully added');
    },
    increase(state, { payload }) {
      const item = state.cart.find((obj) => obj.id === payload);
      item.quantity = item.quantity + 1;
      item.total = item.quantity * item.price;
      toast.success('Added');
    },
    decrease(state, { payload }) {
      const item = state.cart.find((obj) => obj.id === payload);
      if (item.quantity < 1) return;
      item.quantity = item.quantity - 1;
      item.total = item.quantity * item.price;

      toast.success('Removed');
    },
    active(state, { payload }) {
      const cat = state.category.find((item) => item.id === payload);
      cat.isActive = !cat.isActive;
    },
    clear(state) {
      state.cart = initialState.cart;
      state.menus = initialState.menus;
      state.ticket = initialState.ticket;
    },
    addToTicket(state) {
      const cart = state.cart;
      state.ticket = {
        ...state.ticket,
        cart,
        name: 'Atogwe Daniel',
        id: crypto.randomUUID(),
      };
    },
    toggleFaq(state, { payload }) {
      const faq = state.faq.find((item) => item.id === payload);
      faq.isOpen = !faq.isOpen;
    },
  },
});

export const {
  addToCart,
  increase,
  decrease,
  remove,
  active,
  clear,
  subtotal,
  addToTicket,
  toggleFaq,
} = orderSlice.actions;

export default orderSlice.reducer;
