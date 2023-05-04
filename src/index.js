import { Notify } from 'notiflix';
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const axios = require('axios').default;

const form = document.querySelector('.search-form');


async function searchPicture() {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '36050321-b79e46b27631ddd2509fd0134';
    const params = new URLSearchParams({
      key: KEY,
      q: '',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
    const response = await axios.get('${BASE_URL}?${params}');
    return response;  
}