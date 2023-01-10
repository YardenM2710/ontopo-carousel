import { httpService } from './http.service.js'

export const carouselService = {
  getCarouselData
}

async function getCarouselData() {
  return httpService.get(`/`)
}
